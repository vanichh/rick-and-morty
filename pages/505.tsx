import Link from 'next/link';

const Page505 = () => {
  return (
    <section>
      <p>Произошла обшибка на сервере :(</p>
      <Link href={'/'}>
        <a>Вернуться на главную</a>
      </Link>
    </section>
  );
};

export default Page505;
