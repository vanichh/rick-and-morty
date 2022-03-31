type TTimeout = ReturnType<typeof setTimeout>;

export const throttle = (fun: Function, timeout: number) => {
  let timer: TTimeout | null = null;
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
