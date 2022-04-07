// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(data) {
        var runner = this.head
        while(runner){
            if(runner.data == data){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        if(this.head){
            var returnNode = new ListNode();
            if(runner.next){
                returnNode = runner.next;
            }
            while(returnNode.next){
                returnNode = returnNode.next
            }
            runner.next = null;
            return newNode;
        }
    }

    // EXTRA
    /**
     * Calculates the average of this list.
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        let count = 0;
        let sum = 0;
        var runner = this.head;
        while (runner){
            count++
            sum += runner.data
            runner = runner.next
        }
        return sum
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(data, curr = this.head) {
        if(curr.data === data){
            return true;
        }else if(curr === null){
            return false;
        }
        return this.containsRecursive(data, curr.next);
    }


}




var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);
//       HEAD
// list2: (1) --> (2) --> (3) --> null


list1.printList();
list2.printList();

console.log(list2.contains(3))
// expected result: true
console.log(list2.contains(1000))
  // expected result: false
console.log(list2.average());
console.log(list2.containsRecursive(3));