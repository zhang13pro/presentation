Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") throw new TypeError("type error");

  let fn = Symbol();
  context = context || window;
  context[fn] = this;

  return context[fn](...args);
};

const obj = {
  a: 1,
};

const window = {
  a: 2,
};

function test() {
  console.log(this.a);
}

test.myCall();
