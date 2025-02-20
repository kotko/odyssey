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
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from ".";

const button = "button";
const buttonLabel = "Button Label";

describe("Button", () => {
  it("renders visibly into document", () => {
    const { getByText } = render(<Button children={buttonLabel} />);

    expect(getByText(buttonLabel)).toBeVisible();
  });

  it("renders aria attrs via omit rest props", () => {
    const { getByRole } = render(
      <Button aria-describedby="foo" children="bar" />
    );

    expect(getByRole(button)).toHaveAttribute("aria-describedby", "foo");
  });

  it("should be disabled", () => {
    const { getByRole } = render(
      <Button disabled={true}>{buttonLabel}</Button>
    );

    expect(getByRole(button)).toHaveAttribute("disabled");
  });

  it("restricts children and icon props via types", () => {
    // @ts-expect-error requires children or icon prop
    <Button />;

    <Button icon={<svg />} />;
    <Button children={buttonLabel} />;
    <Button icon={<svg />} children={buttonLabel} />;
  });

  it("renders an icon", () => {
    render(
      <Button
        icon={
          <svg>
            <title>test</title>
          </svg>
        }
      />
    );

    expect(screen.getByTitle("test").parentElement).toBeVisible();
  });

  it("should call onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick} children="foo" />
    );

    const buttonTarget = getByRole(button);
    fireEvent.click(getByRole(button));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenLastCalledWith(
      expect.objectContaining({
        type: "click",
        target: buttonTarget,
      })
    );
  });

  it("invokes ref with expected args after render", () => {
    const ref = jest.fn();

    render(<Button ref={ref} children={buttonLabel} />);

    expect(ref).toHaveBeenCalledTimes(1);
    expect(ref).toHaveBeenLastCalledWith(screen.getByRole(button));
  });

  a11yCheck(() => render(<Button children="baz" />));
});
