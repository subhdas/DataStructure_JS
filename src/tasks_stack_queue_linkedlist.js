import { Stack, LinkedList, Node, Queue } from "./stack_queue_linkedlist.js";

(() => {
  console.clear();

  function tasks() {
    let link = new Node(1);
    let new1 = new Node(2);
    let new2 = new Node(5);
    let new3 = new Node(10);
    let new4 = new Node(11);

    link.set_next(new1);
    new1.set_next(new2);
    new2.set_next(new3);
    new3.set_next(new4);

    // parse_llist(link);

    let linked = new LinkedList(link);
    linked.parse_llist();
    // linked.reverse_list();
    // linked.parse_llist();
  }

  // tasks();

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
  // STACK DATA STRCTURE ( LIFO , PEEK POP PUSH)

  function tasks_stack() {
    let stackdata = new Stack(1);
    stackdata.push(4);
    stackdata.push(8);
    stackdata.push(9);
    stackdata.push(10);
    stackdata.push(11);

    stackdata.parse_llist();
    let out = stackdata.pop();
    let out1 = stackdata.pop();
    let out2 = stackdata.pop();
    let out3 = stackdata.pop();
    // let out4 = stackdata.pop();
    // let out5 = stackdata.pop();
    // let out6 = stackdata.pop();
    // let out7 = stackdata.pop();
    console.log(
      " gotten out ",
      out.value,
      out1.value,
      out2.value,
      out3.value
      // out4.value,
      // out5.value,
      // out6.value,
      // out7.value
    );
    stackdata.push(100);
    stackdata.pop();
    // stackdata.pop();
    // stackdata.pop();
    // stackdata.pop();
    // stackdata.pop();
    // stackdata.pop();

    console.log(
      "peeking out ",
      // stackdata.peek(),
      stackdata.is_empty(),
      stackdata
    );
    stackdata.parse_llist();
  }
  // tasks_stack();

  /**
   * TASKS FOR QUEUEU
   */
  function tasks_queue() {
    let q_data = new Queue(1);
    q_data.push(4);
    q_data.push(8);
    q_data.push(9);
    q_data.push(19);

    q_data.parse_llist();
    let out = q_data.pop();
    let out1 = q_data.pop();
    let out2 = q_data.pop();
    let out3 = q_data.pop();
    console.log(
      " queue gotten out ",
      out.value,
      out1.value,
      out2.value,
      out3.value
    );
    q_data.push(100);
    // q_data.pop();

    console.log("queueu peeking out ", q_data.peek(), q_data.is_empty());
    q_data.parse_llist();
  }

  tasks_queue();
})();
