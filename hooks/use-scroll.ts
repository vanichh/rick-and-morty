import { useDispatch } from 'store/hooks';
import { Dispatch, useState } from 'react';
import { throttle } from 'utils/optimization';

type TreturnScroll = {
  scroll: () => void;
  isLodingCroll: boolean;
  setIsLodingCroll: Dispatch<boolean>;
};

export const useScroll = (func: () => any, heightLoding = 150, time = 250): TreturnScroll => {
  const [isLodingCroll, setIsLodingCroll] = useState(true);
  const dispatch = useDispatch();

  const scroll = () => {
    if (isLodingCroll) {
      console.log(1);
      const heightPage = document.documentElement.clientHeight;
      const MaxFullHeightPage = document.documentElement.scrollHeight;
      const scrollPage = MaxFullHeightPage - heightPage - window.pageYOffset;
      if (scrollPage < heightLoding) {
        setIsLodingCroll(false);
        dispatch(func());
      }
    }
  };

  return { scroll: throttle(scroll, time), isLodingCroll, setIsLodingCroll };
};
