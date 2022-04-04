import { FC } from "react";
import { MainProps } from "./main.props";
import styles from "./main.module.scss";

export const Main: FC<MainProps> = ({ children, className }) => {
  return <main className={className || styles.main}>{children}</main>;
};
