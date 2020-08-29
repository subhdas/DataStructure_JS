function dowhenready() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 200);

    setTimeout(() => {
      console.log("printing now ss .... ");
      resolve();
    }, 5000);
  });
}

async function testit() {
  dowhenready();
  // console.log(" lets see when i run ");
}

// testit()
//   .then(() => {
//     console.log(" lets see when i run ");
//   })
// .catch((e) => {
//   console.log("error ");
// });

async function wait() {
  await new Promise((resolve, reject) => setTimeout(reject("some"), 5000));
  // await (() => {
  //   setTimeout(() => {
  //     return Promise.resolve(2);
  //   }, 5000);
  // });
  return 100;
}

async function f() {
  // ...what to write here?
  // we need to call async wait() and wait to get 10
  // remember, we can't use "await"
  try {
    let k = await wait();
    console.log(" awaited ", k);
  } catch (e) {
    console.log("errroed ", e);
  }
  wait().then((e) => {
    // console.log("some ", e);
    // console.log("wowo s");
  });
}

f();
