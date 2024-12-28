Array.prototype.myFilter = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    let res = callback(this[i], i, this)
    if (res) result.push(this[i])
  }
  return result
}

let arr = [1, 2, 3, 4, 5]
let result = arr.myFilter((item, index, arr) => item > 2)
console.log(result) // [3, 4, 5]
