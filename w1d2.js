/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * SLL(Singly Linked List) 
 * keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SLL {
    constructor() {
        this.head = null;
    }

    /**
     * Determines if this list is empty.
     * @returns {boolean}
     */
    isEmpty() { // this.head
        if(!this.head){
            return true
        }else{
            return false
        }

    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    // Create a new node with the given value 
    // inserts it at the back of the list
    // HINT: How to find the last node of a Singly Linked List?  
    insertAtBack(data) {
        var new_node = new ListNode(data)
        var runner = this.head;
        if (!this.head) {
            console.log("Empty list");
            return
        }
        while(runner){
            runner = runner.next;
            if(!runner.next){
                runner.next = new_node;
                break;
            }
        }
    }

    /** BONUS: 
     * Calls insertAtBack on each item of the given array.
     * - Time: O(n * m) n = list length, m = arr.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBackMany(vals) {
    }

    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) { // while(runner != null)
            console.log(runner.data);
            runner = runner.next;
        }
    }
}


var node1 = new ListNode(5);
var node2 = new ListNode(6);
var node3 = new ListNode(7);
var node4 = new ListNode(8);
node1.next = node2
node2.next = node3



var sll1 = new SLL(); // EMPTY LIST
sll1.printList();



var sll2 = new SLL();
sll2.head = node1;
// HEAD
// (5) -> (6) -> (7) -> NULL

sll2.printList();
console.log(sll2.isEmpty());
sll2.insertAtBack(8);
sll2.printList();




