Array.prototype.myMap = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  return result
}

let arr = [1, 2, 3, 4, 5]
let result = arr.myMap(function (item, index, array) {
  return item * 2
})
console.log(result) // [2, 4, 6, 8, 10]
