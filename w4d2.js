//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.top=null;
    }
  
    isEmpty(){
      //check if the stack is empty
      //return a boolean 
      if(!this.top){
        return true;
      }else{
        return false;
      }
    }
  
    push(data){
      //create a node from the data
      // newNode point to the old top
      // reassign the new top
      let newNode = new Node(data)
      if(isEmpty()){
        this.top = newNode;
      }else{
        newNode.next = this.top;
        this.top = newNode;
      }
    }
  
    pop(){
      // remove and return the top item 
       if(isEmpty()){
         return;
      }
         var tempTop = this.top
         this.top = this.top.next
         return tempTop;
      }
    
  
    peek(){
      //return the top item without removing it
      return this.top;
    }
  
    size(){
      //return the size of the stack 
      // using only the above 4 operations.
      if(this.isEmpty()){
        return 0;
      }
      let count = 0;
      while(this.top){
        this.pop();
        count++;
      }
      return count;
    }
  
    printStack(){ // For learning purpose
      console.log("TOP")
      let runner = this.top;
      while(runner){
        console.log(runner.data);
        runner= runner.next
      }
    }
  }
  
  let s1 = new Stack();
  s1.push(1);
  s1.push(2);
  s1.push(3);
  s1.printStack(); 
  //expected:
  // TOP
  // [ 3 ] 
  // [ 2 ]
  // [ 1 ]
  
  console.log(s1.pop()); //expected: [ 3 ]
  s1.printStack();
  //expected: 3
  // TOP
  // [ 2 ] 
  // [ 1 ]
  