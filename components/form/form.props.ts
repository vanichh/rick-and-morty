import { FormEvent, ReactNode } from 'react';

export interface IFormProps {
  children: ReactNode;
  onSubmit?: (_: FormEvent<HTMLFormElement>) => any;
  className?: string
}
