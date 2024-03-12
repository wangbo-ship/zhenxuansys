/*
 * @Author: wangbo
 * @Date: 2024-03-12 19:17:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-03-12 19:33:34
 * @Description: 获取当前时间段
 */
export const getTime = () => {
  let hour = new Date().getHours()
  let helloTime = ''
  //switch()中为true 则可以对每个 case 表达式都能够进行逻辑计算
  switch (true) {
    case hour >= 0 && hour < 9:
      helloTime = '早上'
      break
    case hour >= 9 && hour < 12:
      helloTime = '上午'
      break
    case hour >= 12 && hour < 18:
      helloTime = '下午'
      break
    default:
      helloTime = '晚上'
  }
  return helloTime
}
