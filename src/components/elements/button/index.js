import React from "react";
import classNames from "classnames";
import './index.sass'

const Button = ({ children, className, ...props }) => (
  <button className={classNames('button', className)} {...props}>
    {children}
  </button>
)

export default Button