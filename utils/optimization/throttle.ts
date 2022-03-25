export const throttle = (fun: Function, timeout: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (timer) return;
    timer = setTimeout(() => {
      fun(...args);
      if (timer) {
        clearTimeout(timer);
      }
      timer = null;
    }, timeout);
  };
};
