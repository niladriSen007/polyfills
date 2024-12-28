Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue || this[0]
}

let arr = [1, 2, 3, 4, 5]
let result = arr.myReduce((item, index, arr) => item > 2)
console.log(result)
