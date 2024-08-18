import * as React from "react";
import { clsx } from "clsx";
import { accordionItemStyle } from "./style.css";
import { AccordionItemProps } from "./types";
import { Children, cloneElement, isValidElement } from "react";

const AccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  // 자식 컴포넌트(버튼, 판넬)이 AccordionItem의 itemName 값을 알 수 있도록 하기 위해 기존의 React 엘리먼트를 복제하면서, 추가적인 itemName 프롭스를 전달
  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      // child가 유효한 React 엘리먼트인지 확인
      return cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
};

const _AccordionItem = React.forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
