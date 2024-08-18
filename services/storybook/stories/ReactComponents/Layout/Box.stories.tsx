import "@ooz/react-components-layout/style.css";
import { Box as _Box } from "@ooz/react-components-layout";
import { vars } from "@ooz/themes";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    boxShadow: {
      options: Object.keys(vars.box.shadows),
      control: "select",
    },
    borderRadius: {
      options: Object.keys(vars.box.radii),
      control: "select",
    },
  },
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
