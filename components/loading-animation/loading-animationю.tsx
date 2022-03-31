import { FC } from 'react';
import styles from './loading-animation.module.scss';

export const LoadingAnimation: FC = () => {
  return <div className={styles['lds-dual-ring']}></div>;
};
