/**
 * 防抖函数，延迟一定时间后执行函数，并防止在延迟时间内多次调用转换为同一函数调用。
 * @param fn - 需要防抖的函数
 * @param delay - 延迟时间，默认为500ms
 * @returns 经防抖处理的函数
 */
export const debounce = <F extends (...args: any[]) => any>(
  fn: F,
  delay: number = 500
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * 节流函数，以固定时间间隔间隔执行函数
 * @param fn 要节流的函数
 * @param delay 延迟时间（默认为500ms）
 * @returns 返回一个节流函数
 */
export const throttle = <F extends (...args: any[]) => any>(
  fn: F,
  delay: number = 500
) => {
  let prev = 0;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const now = Date.now();

    if (now - prev > delay) {
      fn.apply(this, args);
      prev = now;
    }
  };
};
