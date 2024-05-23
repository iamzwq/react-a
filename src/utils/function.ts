/**
 * 防抖函数，延迟一定时间后执行函数，并防止在延迟时间内多次调用转换为同一函数调用。
 * @param func - 需要防抖的函数
 * @param wait - 延迟时间
 * @param immediate - 是否立即执行，默认为false
 * @returns 经防抖处理的函数
 */
export function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number,
  immediate = false
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    }, wait);
    if (callNow) func.apply(this, args);
  };
}

type ThrottleOptions = {
  leading?: boolean;
  trailing?: boolean;
};

/**
 * 节流函数，在一定时间内只执行一次函数，并在结束后重新开始计时。
 * @param fn - 需要节流的函数
 * @param delay - 延迟时间
 * @param options - 节流选项
 * - leading - 是否在开始时立即执行一次函数，默认为true
 * - trailing - 是否在延迟结束后执行一次函数，默认为false
 * @returns 经节流处理的函数
 */
export function throttle<F extends (...args: any[]) => any>(
  func: F,
  delay: number,
  options: ThrottleOptions = { leading: true, trailing: false }
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastExecuteTime = 0;
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const now = Date.now();

    if (!timeout) {
      if (options.leading) {
        func.apply(this, args);
        lastExecuteTime = now;
      }
      timeout = setTimeout(
        () => {
          timeout = null;
          if (now - lastExecuteTime >= delay) {
            func.apply(this, args);
            lastExecuteTime = now;
          }
        },
        delay - (now - lastExecuteTime)
      );
    }
  };
}
