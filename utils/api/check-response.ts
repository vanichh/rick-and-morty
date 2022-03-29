export const checkResponse= (response: Response): any | Promise<never> => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};