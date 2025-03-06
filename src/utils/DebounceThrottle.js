// 手写防抖函数  →  只执行最后一次
export const debounce = (fn, wait) => {
  // 1.声明定时器，不用给值，或者给null
  let timer = null

  // 2. return 返回一个匿名函数，原因和作用看下面
  return function (...args) {
    // (3. 2.3.4)步

    // 有定时器则关掉
    if (timer) clearTimeout(timer)

    // [重新]打开定时器，在 t时间后调用传递过来的 fn函数
    timer = setTimeout(function () {
      fn(...args)
    }, wait)
  }
}

// 手写节流函数  →  只执行第一次
export const throttle = (fn, delay) => {
  let timer = null
  return function () {
    if (!timer) {
      fn()
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}
