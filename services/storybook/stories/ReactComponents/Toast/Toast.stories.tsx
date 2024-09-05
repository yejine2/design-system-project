import "@ooz/react-components-button/style.css";
import { Button } from "@ooz/react-components-button";
import React from "react";

import { ToastProvider, useToast } from "@ooz/react-components-toast";
import "@ooz/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Show Toast
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
