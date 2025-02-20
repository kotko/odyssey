/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { createContext, useContext, useState } from "react";
import type { ComponentPropsWithRef, ReactNode, AnimationEvent } from "react";
import { withTheme } from "@okta/odyssey-react-theme";
import {
  useCx,
  useOmit,
  useOid,
  oid,
  forwardRefWithStatics,
} from "../../utils";
import { Box } from "../Box";
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import {
  AlertCircleFilledIcon,
  AlertTriangleFilledIcon,
  CheckCircleFilledIcon,
  InformationCircleFilledIcon,
  CloseIcon,
} from "../Icon";
import { theme } from "./Toast.theme";
import styles from "./Toast.module.scss";

export interface ToastProps
  extends Omit<
    ComponentPropsWithRef<"aside">,
    "children" | "style" | "className" | "role" | "color"
  > {
  /**
   * Children are never rendered.
   */
  children?: never;
  /**
   * The heading to be displayed on the toast.
   */
  heading: string;

  /**
   * Supplemental information. Be concise - less than three lines of content - as your Toast will soon vanish!
   */
  body?: string;

  /**
   * The visual variant to be displayed to the user.
   * @default info
   */
  variant?: "info" | "success" | "caution" | "danger";

  onAnimationEnd?: (event: AnimationEvent) => void;

  onDismiss?: ButtonProps["onClick"];

  /**
   * Label text used by screen readers
   */
  dismissButtonLabel: string;
}

interface PropsToastProvider {
  /**
   * Child react nodes which leverage the toast context. This is typically an entire app.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Callback function invoked when a toast exits the toast provider.
   */
  onToastExit?: (id: string) => void;

  /**
   * Label text used by screen readers, applied to all Toasts
   */
  dismissButtonLabel: string;
}

interface Statics {
  Provider: typeof ToastProvider;
}

export interface ToastObject {
  id?: string;
  heading: string;
  body?: string;
  variant?: ToastProps["variant"];
}

type AddToast = (toastObj: ToastObject) => void;
interface Context {
  addToast: AddToast;
}

const ToastContext = createContext<Context>({
  addToast: () => void 0,
});

const icon = {
  info: <InformationCircleFilledIcon />,
  danger: <AlertCircleFilledIcon />,
  caution: <AlertTriangleFilledIcon />,
  success: <CheckCircleFilledIcon />,
};

/**
 * Toasts are transient, non-disruptive messages that provide at-a-glance,
 * asynchronous feedback or updates.
 */
export const Toast = withTheme(
  theme,
  styles
)(
  forwardRefWithStatics<HTMLElement, ToastProps, Statics>((props, ref) => {
    const {
      heading,
      body,
      variant = "info",
      id,
      onDismiss,
      dismissButtonLabel,
      ...rest
    } = props;
    const componentClass = useCx(styles.root, styles[`${variant}Variant`]);
    const xid = useOid(id);
    const omitProps = useOmit(rest);

    return (
      <Box
        as="aside"
        {...omitProps}
        ref={ref}
        role="status"
        id={xid}
        className={componentClass}
        color={false}
      >
        <span className={styles.icon}>{icon[variant]}</span>
        <h1 className={styles.heading}>{heading}</h1>
        {body && <p className={styles.body}>{body}</p>}
        <span className={styles.dismiss}>
          <Button
            variant="floating"
            onClick={onDismiss}
            icon={<CloseIcon title={dismissButtonLabel} />}
          />
        </span>
      </Box>
    );
  })
);

/**
 * Provides applications a way to add Toasts to their app
 */
const ToastProvider = (props: PropsToastProvider) => {
  const { children, onToastExit, dismissButtonLabel } = props;
  const [toasts, setToasts] = useState<ToastObject[]>([]);

  const addToast: AddToast = (toast) => {
    const id = toast.id || oid();
    setToasts([...toasts, { ...toast, id }]);
  };

  const handleDismiss = (id: string) => {
    if (typeof onToastExit === "function") onToastExit(id);

    removeToast(id);
  };

  const removeToast = (id: string) => {
    setToasts([...toasts.filter((toast) => toast.id !== id)]);
  };

  const handleAnimationEnd = (event: AnimationEvent) => {
    const { animationName, currentTarget } = event;
    if (animationName === styles.toastOut) {
      handleDismiss(currentTarget.id);
    }
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <Box className={styles.toastPen}>
        {toasts.map(({ heading, body, variant = "info", id = oid() }) => (
          <Toast
            id={id}
            key={id}
            heading={heading}
            body={body}
            variant={variant}
            dismissButtonLabel={dismissButtonLabel}
            onDismiss={() => {
              handleDismiss(id);
            }}
            onAnimationEnd={handleAnimationEnd}
          />
        ))}
      </Box>
    </ToastContext.Provider>
  );
};

export const useToast = (): Context => {
  const context = useContext(ToastContext);

  if (Object.keys(context).length === 0) {
    throw new Error("useToast must be used within a Toast.Provider");
  }

  return context;
};

Toast.displayName = "Toast";
ToastProvider.displayName = "ToastProvider";

Toast.Provider = ToastProvider;
