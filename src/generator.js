(async () => {
  console.log("running now ");

  function* gen(some) {
    // yield Math.random() * 10 + some;
    // yield "haha";
    // yield "wow";
    // yield Math.random() * 10 + some;
    // yield "nice";

    for (let i = 0; i < 10; i++) {
      yield i;
    }
  }

  const g = gen(10);

  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
  console.log(g.next());
})();
