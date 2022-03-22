import type { TGender } from 'interfaces/character';

export const genderTranslite = (gender: TGender) => {
  switch (gender) {
    case 'Female':
      return 'Женский';
    case 'Male':
      return 'Мужской';
    case 'Genderless':
      return 'Бесполый';
    case 'unknown':
      return 'Неизвестно';
  }
};
