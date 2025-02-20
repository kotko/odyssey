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

import type { ThemeReducer } from "@okta/odyssey-react-theme";

export const theme: ThemeReducer = (theme) => ({
  CircleBackgroundColor: "transparent",
  CircleBorderColor: theme.ColorBorderUi,
  CircleCheckedBackgroundColor: theme.ColorPrimaryBase,
  CircleCheckedBorderColor: theme.ColorPrimaryBase,
  CircleDisabledBackgroundColor: theme.ColorBackgroundDisabled,
  CircleDisabledBorderColor: theme.ColorBorderDisabled,
  CircleDisabledCheckedBackgroundColor: theme.ColorPrimaryLight,
  CircleDisabledCheckedBorderColor: theme.ColorPrimaryLight,
  CircleDotBorderStyle: theme.BorderStyleBase,
  CircleDotBorderWidth: "2px",
  CircleFocusOutlineColor: theme.FocusOutlineColorPrimary,
  CircleFocusOutlineOffset: theme.FocusOutlineOffsetBase,
  CircleFocusOutlineStyle: theme.FocusOutlineStyle,
  CircleFocusOutlineWidth: theme.FocusOutlineWidthBase,
  CircleInvalidBorderColor: theme.ColorBorderDangerBase,
  CircleInvalidCheckedBackgroundColor: theme.ColorBackgroundDangerDark,
  CircleInvalidFocusOutlineColor: theme.FocusOutlineColorDanger,
  CircleInvalidHoverBorderColor: theme.ColorDangerDark,
  CircleSize: "1em",
  DotCheckedBackgroundColor: theme.ColorPaletteNeutralWhite,
  DotDisabledCheckedBackgroundColor: theme.ColorPaletteNeutralWhite,
  DotHoverBorderColor: theme.ColorNeutralDark,
  DotScale: 0.4,
  LabelDisabledTextColor: theme.ColorTextBody,
  LabelFontSize: theme.FontSizeBody,
  LabelFontWeight: theme.FontWeightNormal,
  LabelInvalidTextColor: theme.ColorTextDanger,
  LabelMarginBlockEnd: theme.SpaceScale1,
  LabelPaddingInlineStart: theme.SpaceScale1,
  TransitionDuration: theme.TransitionDurationBase,
  TransitionTimingFunction: theme.TransitionTimingBase,
});
