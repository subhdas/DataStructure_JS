async function getdata() {
  const url = "https://jsonplaceholder.typicode.com/todos/";

  // setTimeout(() => {
  //   return Promise.reject("wrong");
  // }, 500);
  let data = await fetch(url);
  console.log(" hahah");
  return data;
}

// (async () => {
//   let data = getdata();
//   data
//     .then((value) => value.json())
//     .then((out) => {
//       console.log("out ");
//     })
//     .catch((e) => {
//       console.log("something wrong ", e);
//     });
// })();

(async () => {
  const promise1 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 5000, "1");

    setTimeout(() => {
      reject("baroo");
    }, 5000);
  });
  const promise2 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 1000, "baroo");
    setTimeout(() => {
      resolve("1");
    }, 50);
  });
  const promise3 = new Promise((resolve, reject) => {
    // setTimeout(resolve, 100, "foo");
    setTimeout(() => {
      resolve("ahhaha");
    }, 6);
  });

  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch((e) => {
      console.log("catch error ", e);
    });
})();

let a = {
  b: "get",
  c: function (a, b) {
    console.log("value in a ", this.b);
  }
};

a.c();

let bbb = a.c;

// a.call(bbb)();

bbb.call(a);
// console.log(" run it ", a.b);

let clothes = [1, 2, 3];
clothes.length = 1;

console.log(clothes);
