import * as React from "react";
import "@ooz/react-components-layout/style.css";
import { Flex as _Flex } from "@ooz/react-components-layout";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    justify: {
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      control: "select",
    },
  },
};

export const FlexStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <_Flex {...args}>
      <div>테스트</div>
      <div>입니다</div>
    </_Flex>
  ),
};
