import { useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'store/hooks';
import { throttle } from 'utils/optimization';
const height = 200;


export const useScroll = () => {
  // const dispatch = useDispatch();
  const [state, setState] = useState<string>();
  const { isLoding } = useSelector((store) => store.character);
  console.log(2);
    if (!isLoding) {
      const heightPage = document.documentElement.clientHeight;
      const MaxFullHeightPage = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      const scrollPage = MaxFullHeightPage - heightPage - window.pageYOffset;
      if (scrollPage < height) {
        // dispatch(getCharast());
        console.log(1);
      }
    }

};

export const trotleUseScroll = throttle(useScroll, 250)
