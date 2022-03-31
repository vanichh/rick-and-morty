import { ReactNode } from 'react';

export interface IInputProps {
  children?: ReactNode;
  value?: string;
  onChange: () => any;
}
