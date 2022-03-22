import type { TStatus } from 'interfaces/character';

export const statusTranslite = (status: TStatus) => {
  switch (status) {
    case 'Alive':
      return 'Жив';
    case 'unknown':
      return 'Не известно';
    case 'Dead':
      return 'Мертв';
  }
};
