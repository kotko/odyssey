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

import { Story } from "@storybook/react";
import { Table } from "../../../../../odyssey-react/src";
import { Icon, iconDictionary } from "../../../../../odyssey-react-mui/src";
import { MuiThemeDecorator } from "../../../../.storybook/components/MuiThemeDecorator";
import type { ReactElement } from "react";

export default {
  title: `MUI Components/Icon`,
  component: Icon,
  decorators: [MuiThemeDecorator],
};

const Template: Story = ({ ...args }) => (
  <Icon name={args.name} titleAccess={args.title} />
);

export const Default = Template.bind({});

Default.argTypes = {
  name: {
    defaultValue: "alert-triangle-filled",
    control: { type: "select" },
  },
  title: {
    defaultValue: "Caution",
    control: { type: "text" },
  },
};

const meta: Array<{ name: keyof typeof iconDictionary; use: string }> = [
  { name: "add", use: "To add" },
  {
    name: "add-circle",
    use: "To add",
  },
  {
    name: "alert-circle",
    use: "To indicate an error",
  },
  {
    name: "alert-circle-filled",
    use: "To indicate an error",
  },
  {
    name: "alert-triangle-filled",
    use: "To indicate a crucial decision",
  },
  {
    name: "anchor",
    use: "UI indicator - element contains in page anchor link",
  },
  {
    name: "arrow-down",
    use: "",
  },
  {
    name: "arrow-left",
    use: "",
  },
  {
    name: "arrow-right",
    use: "",
  },
  {
    name: "arrow-up",
    use: "",
  },
  {
    name: "arrow-up-down",
    use: "",
  },
  {
    name: "calendar",
    use: "",
  },
  {
    name: "check",
    use: "UI indicator - custom checkbox",
  },
  {
    name: "check",
    use: "To show a completed process",
  },
  {
    name: "chevron-down",
    use: "UI indicator - element triggers open",
  },
  {
    name: "chevron-up",
    use: "UI indicator - element triggers close",
  },
  {
    name: "close",
    use: "To close a modal or other UI",
  },
  {
    name: "close-circle-filled",
    use: "",
  },
  { name: "copy", use: "To copy text" },
  { name: "delete", use: "To delete something" },
  { name: "download", use: "To download" },
  {
    name: "drag-handle",
    use: "Element is draggable",
  },
  { name: "edit", use: "To edit something" },
  {
    name: "external-link",
    use: "UI indicator - external link",
  },
  { name: "eye", use: "To show something" },
  { name: "eye-off", use: "To hide something" },
  { name: "filter", use: "To filter results" },
  { name: "globe", use: "" },
  { name: "home", use: "" },
  {
    name: "information-circle",
    use: "To get information",
  },
  {
    name: "information-circle-filled",
    use: "To get information",
  },
  {
    name: "notification",
    use: "To notify the user of something",
  },
  { name: "overflow-vertical", use: "" },
  {
    name: "question-circle",
    use: "To provide clarification",
  },
  {
    name: "question-circle-filled",
    use: "To provide clarification",
  },
  { name: "search", use: "To search for something" },
  {
    name: "settings",
    use: "To edit user or app settings",
  },
  {
    name: "subtract",
    use: "To subtract or remove",
  },
  { name: "user", use: "To support a user name" },
  {
    name: "user-group",
    use: "To represent a group of users",
  },
];

export const Library = (): ReactElement => {
  return (
    <Table caption="Library" screenReaderCaption="Available Odyssey Icons">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Icon</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Class Name</Table.HeaderCell>
          <Table.HeaderCell>Use</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {meta.map(({ name, use }) => {
          const CurrentIcon = iconDictionary[name];
          return (
            <Table.Row key={`${name}_row`}>
              <Table.DataCell>
                <CurrentIcon />
              </Table.DataCell>
              <Table.DataCell>{name}</Table.DataCell>
              <Table.DataCell>{CurrentIcon.displayName}</Table.DataCell>
              <Table.DataCell>{use}</Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
