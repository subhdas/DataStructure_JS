(() => {
  console.clear();
  /**
   * MAX HEAP CLASS
   */
  class MaxHeap {
    constructor() {
      this.data = [100, 120, 65]; // 0th index is -1
      this.data = [];
    }

    //insert data
    push(value) {
      this.data.push(value);
      this.heapify();
    }

    swap(st_ind, end_ind) {
      let temp = this.data[st_ind];
      this.data[st_ind] = this.data[end_ind];
      this.data[end_ind] = temp;
      return;
    }

    //heapify the data array
    heapify() {
      let arr = this.data;
      let len = arr.length - 1,
        i = len,
        trial = 0,
        maxtry = 80;
      while (i > 0 && trial < maxtry) {
        let par_i = Math.floor(i / 2);
        if (arr[i] > arr[par_i]) {
          // console.log("data before ", this.data.slice(0), i, par_i);
          this.swap(i, par_i);
          // console.log("data after ", this.data.slice(0));
          i = arr.length - 1;
          par_i = Math.floor(i / 2);
        } else {
          i = par_i;
        }
        trial += 1;
      }

      this.trial = trial;
    }

    print_heap() {
      // this.data.forEach((p, i) => {
      //   console.log(" printing elem ", i, p);
      // });

      console.log("FINAL HEAP DATA ", this.data, this.trial);
    }
  } // end of max_heap

  /**
   * MAIN CALL METHODS BELOW ++++++++++++++++++++++++++++++++++++++++++++++++
   */

  function tasks_heap() {
    let mxh = new MaxHeap();
    mxh.push(100);
    mxh.push(120);
    mxh.push(65);
    mxh.push(144);

    mxh.push(10);
    mxh.push(300);
    mxh.push(220);
    mxh.push(75);

    mxh.print_heap();
  }

  tasks_heap();
})();
