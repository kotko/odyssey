/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import React, { forwardRef } from "react";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { useOmit } from "../../utils";

export interface NativeSelectOptionGroupProps
  extends Omit<ComponentPropsWithRef<"optgroup">, "style" | "className"> {
  /**
   * Option children
   */
  children: ReactNode;
}

/**
 * Native select input to choose one option from a list
 */
export const NativeSelectOptionGroup = forwardRef<
  HTMLOptGroupElement,
  NativeSelectOptionGroupProps
>((props, ref) => {
  const { children, ...rest } = props;
  const omitProps = useOmit(rest);

  return (
    <optgroup {...omitProps} ref={ref}>
      {children}
    </optgroup>
  );
});

NativeSelectOptionGroup.displayName = "NativeSelectOptionGroup";
