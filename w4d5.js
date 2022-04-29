class slStack {
    constructor() {
        this.top = null;
    }
    // add to top
    push(data) {

        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top === null) return null;
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        return removed.data;
    }

    peek() {
        return this.top;
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLLQueue {
    constructor() {
        this.front = null;
        this.rear = null;

    }


    compareQueue(q2) {
        var temp = new SLLQueue();
        var temp2 = new SLLQueue();
        var isEqual = true;
        while (!this.isEmpty()) {
            var tempData = this.dequeue();
            temp.enqueue(tempData);
        }
        while (!q2.isEmpty()) {
            var tempData2 = q2.dequeue();
            temp2.enqueue(tempData2);
        }
        while(!temp2.isEmpty()){
            var tempData = temp.dequeue();
            this.enqueue(tempData);
            console.log(tempData)
            var tempData2 = temp2.dequeue();
            q2.enqueue(tempData2);
            console.log(tempData2)
            if(tempData != tempData2){
                isEqual = false;
            }
        }
        return isEqual;
    }

        // isPalindrome(){
        //     //Determine if the queue is a palindrome (same items forward and backwards)
        //     // Use only 1 stack as additional storage, no other arrays or objects
        //     // tacocat
        // }


        getFront(){
            if (this.front) {
                return this.front.data;
            } else {
                return null;
            }
            //return the front
        }

        getRear(){
            if (this.rear) {
                return this.rear.data;
            } else {
                return null;
            }
            //return the front
        }

        enqueue(data){
            // construct a new node and add to the current queue
            var node = new Node(data);
            if (this.front == null) {
                this.front = node;
                this.rear = node;
            } else {
                this.rear.next = node;
                this.rear = node;
            }
        }

        dequeue(){
            // remove and return from the front of the queue
            if (!this.front) {
                return null;
            }

            const dequeued = this.front;
            this.front = this.front.next;

            if (this.front === null) {
                this.rear = null;
            }
            return dequeued.data;
        }

        isEmpty(){
            if (this.front) {
                return false;
            } else {
                return true;
            }
            // check if the queue is empty
        }

        printQueue(){
            console.log("Front: " + this.getFront());
            console.log("Rear: " + this.getRear());
            var tempQ = new SLLQueue();
            while (!this.isEmpty()) {
                var tempData = this.dequeue();
                tempQ.enqueue(tempData);
                console.log(tempData);
            }
            while (!tempQ.isEmpty()) {
                var tempData = tempQ.dequeue();
                this.enqueue(tempData);
            }

        }

    }


var q1 = new SLLQueue();
q1.enqueue("a");
q1.enqueue("b");
q1.enqueue("c");
q1.enqueue("d");
q1.printQueue();


var q2 = new SLLQueue();
q2.enqueue("a");
q2.enqueue("b");
q2.enqueue("c");
q2.enqueue("d");

var q3 = new SLLQueue();
q3.enqueue("a");
q3.enqueue("b");
q3.enqueue("b");
q3.enqueue("a");

console.log(q1.compareQueue(q2)) // expected: true
console.log(q1.compareQueue(q3)) // expected: false

// console.log(q3.isPalindrome()); // expected : true
// console.log(q2.isPalindrome()); // expected : false