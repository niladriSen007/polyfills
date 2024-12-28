const debounce = (func, delay) => {
  return function (...args) {
    let timerId
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const debouncedFunction = debounce(() => {
  console.log("Hii")
}, 2000)

debouncedFunction()
