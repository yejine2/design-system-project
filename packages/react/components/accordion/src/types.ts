import * as React from "react";

export type AccordionProps = {
  defaultActiveItems?: string[]; // 활성화될 아이템들
  children: React.ReactNode | React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionItemProps = {
  children: React.ReactNode[];
  itemName: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type AccordionButtonProps = {
  itemName?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type AccordionPanelProps = {
  itemName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type AccordionButtonIconProps = {
  itemName?: string;
} & React.HTMLAttributes<HTMLImageElement>;
