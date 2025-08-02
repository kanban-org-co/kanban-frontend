import { forwardRef } from "react";

import { StyledButton } from "./button.styles.ts";

import type { ButtonProps } from "antd";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => <StyledButton ref={ref} {...props}/>);

export default Button;
