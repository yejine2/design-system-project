import React from "react";
import "@ooz/react-components-input/style.css";
import { Input, InputGroup, InputLeftAddon } from "@ooz/react-components-input";

export default {
  title: "React Components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const InputStory = {
  render: () => <Input placeholder="내용을 입력해주세요." />,
};

export const InputGroupStory = {
  render: () => (
    <InputGroup size="lg" color="red">
      <InputLeftAddon>$</InputLeftAddon>
      <Input placeholder="dd" />
    </InputGroup>
  ),
};

// 비주얼 테스트
export const InputVariantFilledStory = {
  render: () => <Input variant="filled" placeholder="filled" />,
};

// 접근성 테스트
export const InputFocusVisibleState = {
  render: () => <Input />,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
