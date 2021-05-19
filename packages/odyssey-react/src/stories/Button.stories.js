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

import React from "react";
import Button from "../components/Button";

export default {
  title: `Components/Button`
};

const Template = ({ variant, onClick }) => (
  <>
    <Button onClick={onClick} variant={variant}>Default</Button>
    <Button onClick={onClick} variant={variant} className="is-ods-button-focus">Focus</Button>
    <Button onClick={onClick} variant={variant} className="is-ods-button-hover">Hover</Button>
    <Button onClick={onClick} variant={variant} disabled>Disabled</Button>
  </>
)

export const Primary = Template.bind({});
Primary.storyName = "Primary"
Primary.args = {
  variant: "primary"
};
Primary.argTypes = {
  onClick: { action: 'clicked button/primary (default)' },
}

export const Secondary = Template.bind({});
Secondary.storyName = "Secondary";
Secondary.args = {
  variant: "secondary"
};
Secondary.argTypes = {
  onClick: { action: 'clicked button/secondary' },
  variant: { table: { disable: true } }
};

export const Danger = Template.bind({});
Danger.storyName = "Danger"
Danger.args = {
  variant: "danger"
};
Danger.argTypes = {
  onClick: { action: 'clicked button/danger' },
}

export const Clear = Template.bind({});
Clear.storyName = "Clear"
Clear.args = {
  variant: "clear"
};
Clear.argTypes = {
  onClick: { action: 'clicked button/clear' },
}

export const Dismiss = Template.bind({});
Dismiss.storyName = "Dismiss"
Dismiss.args = {
  variant: "dismiss"
};
Dismiss.argTypes = {
  onClick: { action: 'clicked button/dismiss' },
}


const TemplateWide = ({ wide, onClick }) => (
  <>
    <Button onClick={onClick} wide={wide}>Primary, wide</Button>
    <Button onClick={onClick} variant="secondary" wide={wide}>Secondary, wide</Button>
    <Button onClick={onClick} variant="danger" wide={wide}>Danger, wide</Button>
    <Button onClick={onClick} variant="clear" wide={wide}>Clear, wide</Button>
  </>
)

export const Wide =  TemplateWide.bind({});
Wide.storyName = "Wide"
Wide.args = {
  variant: 'secondary',
  wide: true
};
Wide.argTypes = {
  onClick: { action: 'clicked button/wide' },
}
