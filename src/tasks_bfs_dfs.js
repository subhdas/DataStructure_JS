import { Stack, LinkedList, Node, Queue } from "./stack_queue_linkedlist.js";

(() => {
  console.clear();
  /**
   * BFS TASKS
   */

  function bfs_search(graph, root = 5) {
    let q_data = new Queue(root);
    let maxtry = 100,
      trial = 0,
      result = [],
      store = {};
    while (!q_data.is_empty() && trial < maxtry) {
      let curr = q_data.pop();
      if (!(curr.value in store)) {
        store[curr.value] = true;
        result.push(curr.value);
      }
      let children = graph[curr.value];
      children.forEach((element) => {
        q_data.push(element);
      });
      trial += 1;
    }
    return result;
  }

  function dfs_search(graph, root = 0) {
    let s_data = new Stack(root);
    let maxtry = 1000,
      trial = 0,
      result = [],
      store = {};
    while (!s_data.is_empty() && trial < maxtry) {
      let curr = s_data.pop();
      if (!(curr.value in store)) {
        store[curr.value] = true;
        result.push(curr.value);
      }
      let children = graph[curr.value];
      children.forEach((element) => {
        if (!(element in store)) {
          s_data.push(element);
        }
      });
      trial += 1;
    }
    return result;
  }
  function tasks_bfs_dfs() {
    const graph = {
      0: [1, 3],
      1: [0, 2, 3, 5, 6],
      2: [1, 3, 4, 5],
      3: [0, 1, 2, 4],
      4: [2, 3, 6],
      5: [1, 2],
      6: [1, 4]
    };

    const search_res = bfs_search(graph);
    console.log("bfs search results ", search_res);
    // 0 1 3 2 5 6 4

    const search_res_dfs = dfs_search(graph);
    console.log("dfs search results ", search_res_dfs);
    // 0 1 3 4 2 6 5
  }

  tasks_bfs_dfs();
})();
