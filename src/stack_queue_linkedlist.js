/**
 * LINKEDLIST CLASS -------------
 */
export class LinkedList {
  constructor(root) {
    this.node = root;
  }

  parse_llist() {
    let next = this.node;
    let trial = 0,
      maxtry = 20;
    console.log(
      " parsing $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ "
    );
    while (next !== null && maxtry > trial) {
      console.log(" insiders found node ", next.value);
      next = next.next;
      trial += 1;
    }
  }

  reverse_list() {
    let curr = this.node.next;
    let fut = this.node.next.next;
    let prev = this.node;
    let trial = 0;
    const maxtry = 20;

    while (fut !== null && trial < maxtry) {
      trial += 1;

      try {
        fut = fut.next.next;
      } catch (e) {
        fut = null;
      }
      if (fut === null) break;

      let next = curr.next;
      let temp = curr;
      temp.set_next(prev);
      next.set_next(temp);

      // console.log("prev curr next ", prev, curr, next);
    }
  }

  // reverse_list() {
  //   let curr = this.node.next;
  //   let prev = this.node;
  //   let trial = 0;
  //   const maxtry = 20;

  //   while (curr !== null && trial < maxtry) {
  //     let next = curr.next;
  //     let temp_next = curr.next;
  //     let temp = curr;
  //     temp.set_next(prev);
  //     next.set_next(temp);
  //     prev = temp_next;
  //     curr = prev.next;
  //     trial += 1;
  //     // console.log("prev curr next ", prev, curr, next);
  //   }
  // }
} // end of linked list

/**
 * NODE CLASS ---- FOR LINKEDLIST
 */
export class Node {
  constructor(val = null, node = null) {
    this.value = val;
    this.next = node;
  }

  next() {
    return this.next;
  }

  set_next(node) {
    this.next = node;
  }
}

/**
 * STACK DATASTRICTURE USING LINKEDLIST -------------
 */
export class Stack {
  constructor(value = null) {
    // this.node = new LinkedList(new Node(value));
    if (value === null) this.root = null;
    else this.root = new Node(value);
  }

  push(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root,
        prev = this.root;
      while (node !== null) {
        prev = node;
        node = node.next;
      }
      prev.next = new Node(value);
    }
  } // end of push

  pop() {
    let next = this.root;
    let prev = this.root;
    let trial = 0,
      maxtry = 20;

    // base cases
    if (next === null) return null;
    if (next.next === null) {
      this.root = null;
      return next;
    }

    while (next.next !== null && maxtry > trial) {
      prev = next;
      next = next.next;
      trial += 1;
    }
    prev.set_next(null);
    return next;
  }

  peek() {
    let next = this.root;
    let trial = 0,
      maxtry = 20;
    while (next.next !== null && maxtry > trial) {
      next = next.next;
      trial += 1;
    }
    return next;
  }

  is_empty() {
    let next = this.root;
    if (next === null) return true;
    else return false;
  }

  parse_llist() {
    let next = this.root;
    let trial = 0,
      maxtry = 20;
    console.log(
      "STACK parsing $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ "
    );
    while (next !== null && maxtry > trial) {
      console.log(" insiders found node ", next.value);
      next = next.next;
      trial += 1;
    }
  }
} // end of stack

/**
 * QUEUEU DATASTRICTURE USING LINKEDLIST -------------
 */
export class Queue {
  constructor(value = null) {
    // this.node = new LinkedList(new Node(value));
    if (value === null) this.root = null;
    else this.root = new Node(value);
  }

  push(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let node = this.root,
        prev = this.root;
      while (node !== null) {
        prev = node;
        node = node.next;
      }
      prev.next = new Node(value);
    }
  } // end of push

  pop() {
    let next = this.root;
    this.root = next.next;
    return next;
  }

  peek() {
    if (this.root !== null) return this.root.value;
    else return null;
  }

  is_empty() {
    let next = this.root;
    if (next === null) return true;
    else return false;
  }

  parse_llist() {
    let next = this.root;
    let trial = 0,
      maxtry = 20;
    console.log(
      "QUEUEU parsing $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ "
    );
    while (next !== null && maxtry > trial) {
      console.log(" insiders found node ", next.value);
      next = next.next;
      trial += 1;
    }
  }
} // end of stack
