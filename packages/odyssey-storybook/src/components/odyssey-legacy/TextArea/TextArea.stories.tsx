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

import type { Story } from "@storybook/react";
import { TextArea, TextAreaProps } from "../../../../../odyssey-react/src";
import TextAreaMdx from "./TextArea.mdx";

export default {
  title: `Legacy Components/TextArea`,
  component: TextArea,
  parameters: {
    docs: {
      page: TextAreaMdx,
    },
  },
  args: {
    label: "Field Label",
    defaultValue: " ",
    hint: "Descriptive field hint",
  },
  argTypes: {
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    resize: { control: "text" },
    readonly: { control: "boolean" },
    defaultValue: { control: "text" },
    hint: { control: "text" },
    optionalLabel: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    id: { control: "text" },
    name: { control: "text" },
    error: { control: "text" },
    onChange: { control: false },
    onBlur: { control: false },
    onFocus: { control: false },
  },
};

const Template: Story<TextAreaProps> = (props) => <TextArea {...props} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Optional = Template.bind({});
Optional.args = {
  required: false,
  optionalLabel: "Optional",
};

export const ResizeNone = Template.bind({});
ResizeNone.args = {
  resize: "none",
};
