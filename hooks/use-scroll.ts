import { useDispatch } from 'store/hooks';
import { throttle } from 'utils/optimization';

const useScroll = () => {
  const dispatch = useDispatch();
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
    return true;
  }
};

export const throttleEndPageCheck = throttle(useScroll, 250);
