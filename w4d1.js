

/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    insertAtBack(data) {
        const newTail = new DLLNode(data);

        if (this.isEmpty()) {
            // if no head set the newTail to be both the head and the tail
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this;
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    // 1. Create the new node
    // 2. search for the targetVal by loop through the list (while loop)
    // 3. when the targetVal is found, move around the pointers

    insertAfter(targetVal, newVal) {
        const newNode = new DLLNode(newVal);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        let curr = this.head;
        while(curr){
            if(curr.data == targetVal){
                curr.next.prev = newNode;
                newNode.next = curr.next;
                curr.next = newNode;
                newNode.prev = curr;
                return true;
            }
            curr = curr.next
        }
        return false;
}

/**
 * Inserts a new node with the given newVal before the node that has the
 * given targetVal as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} targetVal The node data to find.
 * @param {any} newVal Data for the new node.
 * @returns {boolean} Indicates if the new node was added.
 */
insertBefore(targetVal, newVal) {
    const newNode = new DLLNode(newVal);
    if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
    }else if(this.head.data == targetVal){
        this.insertAtFont(newVal);
        return true;
    }else{
        let curr = this.head;
        while(curr){
            if(curr.data == targetVal){
                newNode.prev = curr.prev;
                newNode.next = curr;
                curr.prev.next = newNode;
                curr.prev = newNode;
                return true;
            }
            curr = curr.next;
        }
    }
    return false;
}



/**
 * Finds the given node in this list and removes it.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @param {DLLNode} node A node in this list.
 * @returns {DoublyLinkedList} This list.
 */
removeData(data) {

}

