import { ChangeEvent, ReactNode } from 'react';

export interface IInputSerchProps {
  children?: ReactNode;
  value: string;
  className?: string;
  onChange: (_: ChangeEvent<HTMLInputElement>) => any;
}
