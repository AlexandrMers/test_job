import React, { Component, ReactNode } from "react";
import ReactDOM from "react-dom";
import { isNil } from "ramda";
import debounce from "lodash/debounce";

export enum EventClickName {
  MouseUp = "mouseup",
  MouseDown = "mousedown"
}

type handlerType = (event: Event) => void;

const clickOutsideStack: handlerType[] = [];

interface ClickOutSideInterface {
  children: ReactNode;
  handleEnabled?: boolean;
  handleClickOut: () => void;
  delay?: number;
  clickEventName?: EventClickName;
  refs?: HTMLElement[];
}

class ClickOutside extends Component<ClickOutSideInterface> {
  stackIndex: number;

  constructor(props: ClickOutSideInterface) {
    super(props);
    this.stackIndex = 0;
  }

  componentDidMount(): void {
    const handler = this.props.delay
      ? debounce(this.handleClickOut, this.props.delay)
      : this.handleClickOut;

    clickOutsideStack.push(handler);
    this.stackIndex = clickOutsideStack.length - 1;
    document.addEventListener(
      this.props.clickEventName || EventClickName.MouseDown,
      handler
    );
  }

  componentWillUnmount(): void {
    document.removeEventListener(
      this.props.clickEventName || EventClickName.MouseDown,
      clickOutsideStack.pop() as EventListener
    );
  }

  hasElementIntoRefs = (
    refs: HTMLElement[] | undefined,
    element: HTMLElement
  ): boolean => {
    if (!refs || !refs.length) {
      return false;
    }
    return refs.filter(Boolean).some((elem: HTMLElement) => {
      return elem.contains(element);
    });
  };

  handleClickOut = (event: Event): void => {
    if (clickOutsideStack.length !== this.stackIndex + 1) {
      return;
    }
    const { handleEnabled, handleClickOut, refs } = this.props;
    if (!isNil(handleEnabled) && !handleEnabled) return;
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(event.target as Node)) {
      if (this.hasElementIntoRefs(refs, event.target as HTMLElement)) return;
      handleClickOut();
    }
    event.stopPropagation();
  };

  render(): ReactNode {
    return this.props.children;
  }
}

export default ClickOutside;
