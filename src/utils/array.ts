/**
 * at函数用于从数组中获取指定索引的元素。
 * 如果索引超出数组范围，会从数组末尾开始对索引进行取模运算以获取对应元素。
 *
 * @param arr 目标数组。
 * @param index 指定要获取的元素的索引。如果为负数，则从数组末尾开始计数。
 * @returns 返回指定索引处的元素。如果数组为空，则返回undefined。
 */
export const at = (arr: any[], index: number) => {
  const len = arr.length; // 获取数组长度
  if (!len) return undefined; // 如果数组为空，直接返回undefined
  if (index < 0) index += len; // 如果索引为负数，通过对数组长度取模来调整索引位置
  return arr[index]; // 返回指定索引处的元素
};

/**
 * 获取数组中的最后一个元素。
 * @param arr 目标数组。
 * @returns 数组中的最后一个元素。
 */
export const last = (arr: any[]) => at(arr, -1);

/**
 * 将输入的值转换为数组形式。
 * @param value 输入的值，可以是一个值或者值的数组。
 * @returns 如果输入的是数组，则直接返回该数组；如果输入的是单个值，则返回包含该值的数组。
 */
export const toArray = <T>(value: T | T[]) => {
  value = value ?? [];
  if (Array.isArray(value)) return value;
  return [value];
};
