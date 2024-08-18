import * as React from "react";
import "@ooz/react-components-button/style.css";
import { Button as _Button } from "@ooz/react-components-button";
import { vars } from "@ooz/themes";
import { Text } from "@ooz/react-components-layout";
import { useButton, useToggleButton } from "@ooz/react-hooks-button";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftIcon: "😀",
  },
};

const TextButton = () => {
  const { buttonProps } = useButton({
    elementType: "div",
  });

  return (
    <Text
      {...buttonProps}
      as="div"
      fontSize="md"
      color="pink"
      style={{
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      텍스트 버튼입니다.
    </Text>
  );
};

export const TextButtonStory = {
  render: () => <TextButton />,
};

const ToggleButton = () => {
  const { buttonProps, isSelected } = useToggleButton(
    { elementType: "button" },
    false,
  );

  return (
    <_Button
      {...buttonProps}
      variant={isSelected ? "solid" : "outline"}
      color="green"
    >
      {isSelected ? "😀" : "😂"}
    </_Button>
  );
};

export const ToggleButtonStory = {
  render: () => <ToggleButton />,
};
