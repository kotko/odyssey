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

import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    kbd: CSSProperties;
    legend: CSSProperties;
  }
  interface TypographyVariantsOptions {
    kbd?: CSSProperties;
    legend?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1: true; // Design may refer to this as "body"
    body2: false;
    button: false;
    kbd: true;
    legend: true;
    overline: false;
    subtitle1: true; // Design may refer to this as "caption"
    subtitle2: false;
    default: true; // used by <Link>
    monochrome: true; // used by <Link>
  }
}

export {};
