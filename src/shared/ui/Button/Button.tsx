import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({ label, size }: ButtonI) => {
  return <button className={cn(styles.button, styles[size])}>{label}</button>;
};

export default Button;
