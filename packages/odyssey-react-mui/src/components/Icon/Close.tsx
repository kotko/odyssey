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

// Code automatically generated by svgr; DO NOT EDIT.

import { forwardRef } from "react";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type CloseIconProps = SvgIconNoChildrenProps;

export const CloseIcon = forwardRef<SVGSVGElement, CloseIconProps>(
  (props, ref) => {
    return (
      <SvgIcon
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        {...props}
      >
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 7.2929L2.35355 1.64645L1.64644 2.35355L7.29289 8L1.64645 13.6464L2.35355 14.3536L8 8.70711L13.6464 14.3536L14.3535 13.6464L8.7071 8L14.3536 2.35355L13.6464 1.64645L8 7.2929Z"
            fill="currentColor"
          />
        </>
      </SvgIcon>
    );
  }
);

CloseIcon.displayName = "CloseIcon";
