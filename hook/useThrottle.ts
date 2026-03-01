// function running only every specific interval
export const throttle = (fn: (...args: any[]) => void, wait = 300 as number) => {
  let last = 0;

  return (...args: any[]) => {
    let now = new Date().getTime();

    if (now - last >= wait) {
      fn(...args);
      last = now;
    }
  };
};
