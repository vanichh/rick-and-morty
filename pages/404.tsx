import Link from 'next/link';

const Page404 = () => {
  return (
    <section>
      <p>Страница не найдена :(</p>
      <Link href={'/'}>
        <a>Вернуться на главную</a>
      </Link>
    </section>
  );
};

export default Page404;
