class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SLLQueue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

  /**
   * Returns whether or not this queue is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    isEmpty(){
      if(this.front == null){
        return true;
      }
      return false;
    }

  /**
   * Create a new node with the given data, push it to the back of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to add to the back.
   * @returns {number} The new size of this queue.
   */
    enqueue(data){
      let newNode = new Node(data);
      if(this.front == null){
        this.front = newNode;
        this.rear = newNode;
        return this.size();
      }
      this.rear.next = newNode;
      this.rear = newNode;
      return this.size();
    }

  /**
   * Removes and returns the first item of this queue.
   * - Time: O(n) linear, due to having to shift all the remaining items to
   *    the left after removing first elem.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
    dequeue(){
      let temp;
      if(this.isEmpty()){      
        return null;
      }
      if(this.front == this.rear){
        temp = this.front;
        this.rear = null;
        this.front = null;
        return temp.data;
      }
      temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.data;
      
    }

  /**
   * Retrieves the first item without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The first item or undefined if empty.
   */
    frontOf(){
      if (this.isEmpty()){
        return null;
      }
      return this.front.data;
    }


  /**
   * Retrieves the size of this queue.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {number} The length.
   */
    // size(){
    //   if(this.front == null){
    //     return 0;
    //   }
    //   let count = 0;
    //   while(this.front){
    //     this.dequeue();
    //     count+=1;
    //   }
    //   return count;
    // }

      size(){
      if(this.front == null){
        return 0;
      }
      let count = 0;
      while(this.front){
        this.dequeue();
        count+=1;
      }
      return count;
    }
    // size(){
    //   if(this.isEmpty()){
    //     return 0;
    //   }
    //   let count = 0;
    //   while(this.top){
    //     this.pop();
    //     count++;
    //   }
    //   return count;
    // }


  
    // helper function
    printQueue(){
        var runner = this.front;
        if(this.front){
        console.log("FRONT: " + this.front.data)            
        }

        while(runner){
            console.log(runner.data)
            runner = runner.next
        }
        if(this.rear){
        console.log("REAR: " + this.rear.data)            
        }

    }

}


var q = new SLLQueue();



// console.log(q.isEmpty());
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");

q.printQueue();
// q.printQueue();
// console.log("-----------------")
// console.log(q.size());
// console.log(q.dequeue());
// q.printQueue();
// console.log(q.frontOf());