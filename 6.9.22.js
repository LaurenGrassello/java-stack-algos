// A class to represent a single item of a SinglyLinkedList that cna be linked to other Nodew instances to form a list of linked nodes.

class ListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
}

//SLL(Singly Linked List) keeps track of the start (head) of the list and to store all the functionality (methods) that each list should have

class SLL{
    constructor(){
        this.head = null
    }

    //determines if this list is empty and returns boolean

    isEmpty(){
        if(!this.head){
            return true
        }
    }

    //creates a new node with the given data and inserts it at the back of this list.
    //@param {any} data the data to be added to the new node. 
    //@returns {SLL} This list.

    insertAtBack(data){
        //creates a new node with the given value 
        //inserts it at the back of the list
        //HINT: How to find the last node of the SLL?

        var runner = this.head
        var newNode = new ListNode(data)
        if(!this.head){
            console.log("Empty List")
            this.head = newNode
        }
        while(runner){
            runner = runner.next
            if(!runner.next){
                runner.next = newNode
                break
            }
        }

    }

    //Bonus: Calls insertAtBack on each item of the given array.
    //time: O(n*m) n = list length, m = arr.length
    //space: 0(1) constant
    //@param {Array<any>} vals The data for each new node
    //@returns {SLL} This list

    insertAtBackMany(vals){
        for(let i = 0; i <vals.length; i++){
            let newNode = new ListNode(vals[i])

            //find last node in SLL
            let runner = this.head
            while(runner.next !== null){
                runner = runner.next
            }
            runner.next = newNode
        }
    }

    //given
    printList(){
        if(!this.head){
            console.log("Empty List");
            return
        }
        var runner = this.head
        while(runner){   //while(runner != null)
            console.log(runner.data)
            runner = runner.next
        }
    }
}

//create new node by making an instance
var node1 = new ListNode(5)
var node2 = new ListNode(6)
var node3 = new ListNode(7)
node1.next = node2
node2.next = node3

var sll1 = new SLL() //empty list
sll1.insertAtBack(20)
sll1.printList()


var sll2 = new SLL() // (5) --> (6) --> (7) --> null
sll2.head = node1
sll2.insertAtBack(10)
sll2.printList()

var sll3 = new SLL()
sll3.head =  node3
sll3.insertAtBackMany(24, 12, 45)
sll3.printList()