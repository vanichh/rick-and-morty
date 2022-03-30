import { useDispatch } from 'store/hooks';

export const useScroll = (func: Function, heightLoding = 150): (() => void) => {
  let flag = true;
  const dispatch = useDispatch();

  const scroll = () => {
    if (flag) {
      const heightPage = document.documentElement.clientHeight;
      const MaxFullHeightPage = document.documentElement.scrollHeight;
      const scrollPage = MaxFullHeightPage - heightPage - window.pageYOffset;
      if (scrollPage < heightLoding) {
        flag = false;
        dispatch(func());
        setTimeout(() => {
          flag = true;
        }, 3000);
      }
    }
  };
  return scroll;
};
