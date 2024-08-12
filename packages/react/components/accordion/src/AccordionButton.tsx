import * as React from "react";
import { AccordionButtonProps } from "./types";
import { clsx } from "clsx";
import { accordionButtonIconStyle, accordionButtonStyle } from "./style.css";
import { useButton } from "@ooz/react-hooks-button";
import { useAccordionContext } from "./AccordionContext";
import { useCallback } from "react";

const AccordionButton = (
  props: AccordionButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) => {
  const { className, itemName = "", onClick, children, ...rest } = props;

  const { activeItems, setActiveItem } = useAccordionContext();

  const isActive = activeItems.includes(itemName);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setActiveItem(itemName);
      onClick?.(event);
    },
    [itemName, setActiveItem],
  );

  const { buttonProps } = useButton({
    ...rest,
    onClick: handleClick,
    elementType: "button",
  });

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
      data-state={isActive ? "open" : "closed"}
    >
      {children}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx([accordionButtonIconStyle, className])}
      >
        <path
          d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

const _AccordionButton = React.forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
