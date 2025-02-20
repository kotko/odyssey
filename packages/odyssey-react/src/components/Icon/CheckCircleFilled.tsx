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

import React, { forwardRef } from "react";
import { useOmit } from "../../utils";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type CheckCircleFilledIconProps = SvgIconNoChildrenProps;

export const CheckCircleFilledIcon = forwardRef<
  SVGSVGElement,
  CheckCircleFilledIconProps
>((props, ref) => {
  const omitProps = useOmit(props);
  return (
    <SvgIcon ref={ref} {...omitProps}>
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM7.35355 10.3536L11.3536 6.35355L10.6464 5.64645L7 9.29289L5.35355 7.64645L4.64645 8.35355L6.64645 10.3536C6.84171 10.5488 7.15829 10.5488 7.35355 10.3536Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
});

CheckCircleFilledIcon.displayName = "CheckCircleFilledIcon";
