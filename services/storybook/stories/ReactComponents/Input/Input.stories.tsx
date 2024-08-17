import React from "react";
import "@ooz/react-components-input/style.css";
import { Input } from "@ooz/react-components-input";

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
