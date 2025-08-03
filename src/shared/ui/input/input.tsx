import { type FC, type KeyboardEventHandler, useRef } from "react";

import { StyledInput } from "./input.styles.ts";

import type { InputRef, InputProps } from "antd";

const Input: FC<InputProps> = props => {
  const { onKeyDown, ...restProps } = props;

  const inputRef = useRef<InputRef>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    onKeyDown?.(event);
    if (event.key === "Escape") {
      inputRef.current?.blur();
    }
  };

  return (
    <StyledInput
      ref={inputRef}
      {...restProps}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
