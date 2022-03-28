import { throttle } from 'utils/optimization';
const endPageCheck = (fun: any): boolean => {
  const height = 200;
  const heightPage = document.documentElement.clientHeight;
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
  const scrollPage = scrollHeight - heightPage - window.pageYOffset;
  if (scrollPage < height) {
    console.log(1)
    fun();
    return true;
  }
  return false;
};

export const throttleEndPageCheck = throttle(endPageCheck, 250);
