import { ChangeEvent, FC, useState } from 'react';
import styles from './header.module.scss';
import { InputSearch, InputSubmit } from 'ui/input';
import { Form } from 'components/form';
import { useRouter } from 'next/router';

export const Header: FC = () => {
  const [state, setState] = useState('');

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setState(target.value);
  };

  const test = useRouter()
  console.log(test)

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Информация по вселеной{' '}
          <span className={styles['title--color']}>Rick and Morty</span>
        </h1>
        <Form className={styles.form}>
          <InputSearch
            onChange={onChange}
            className={styles['input-serch']}
            value={state}
          />
          <InputSubmit value='Поиск' className={styles['input-submit']} />
        </Form>
      </div>
    </header>
  );
};
