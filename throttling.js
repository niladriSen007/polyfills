let timerFlag = true
const throttle = (func, delay) => {
  return function (...args) {
    if (timerFlag) {
      timerFlag = false
      let timerId
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        func(...args)
        timerFlag = true
      }, delay)
    }
  }
}

setInterval(() => {
  const x = throttle(() => {
    console.log("Hii")
  }, 2000)
  x()
}, 0)
