Function.prototype.myApply = function (context, argsArray) {
  if (typeof this !== "function") throw new TypeError("type error");

  let fn = Symbol();
  context = context || window;
  context[fn] = this;

  return context[fn](...argsArray);
};

const obj = {
  a: 1,
};
const window = {
  a: 2,
};
function test(time) {
  console.log(this.a + time);
}
test.myApply(null, []);
console.log(Math.max.myApply(null, [3, 2, 5, 7, 9]));
