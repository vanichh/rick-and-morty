import { FC } from "react";
import { MainProps } from "./main-layout.props";
import styles from './main-layout.module.scss';

export const MainLayout: FC<MainProps> = ({ children, className }) => {
  return <main className={className || styles.main}>{children}</main>;
};
