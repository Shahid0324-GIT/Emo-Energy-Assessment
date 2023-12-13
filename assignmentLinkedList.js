/*
    Created a class Node which creates a new node very time it is called.
    Created a class LinkedList which represents a data structure. Since JS does not comes with an inbuilt Linked List we need to create this from the scratch
    Added the method push which adds a new node at the end
    Added the method pop which removes node at the end
    Added the method reverse which reverses the whole list
    Added the method sort which sorts the whole list
    Added static methods like convertLinkedListToArray and convertArrayToLinkedList to help sorting the linked list since we can't inherently do that
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(value) {
    if (!this.head) return undefined; // Empty Linked List
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      // Linked List have two or more items
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // Linked List have only item
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }

  toArr() {
    let arr = [];
    let head = this.head;

    while (head) {
      arr.push(head.value);
      head = head.next;
    }

    return arr;
  }

  static convertLinkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  static convertArrayToLinkedList(array) {
    if (array.length === 0) {
      return null;
    }

    const sortedLinkedList = new LinkedList(array[0]);

    for (let i = 1; i < array.length; i++) {
      sortedLinkedList.push(array[i]);
    }

    return sortedLinkedList;
  }

  sort() {
    const arrayRepresentation = LinkedList.convertLinkedListToArray(this.head);
    const sortedArray = arrayRepresentation.sort((a, b) => a - b);
    const sortedList = LinkedList.convertArrayToLinkedList(sortedArray);
    return sortedList;
  }
}

const myLinkedList = new LinkedList(0); // Initialising a new Linked List with an initial value of 0

// Adding a new value which inserts at the end
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

// Removing the value at the end
myLinkedList.pop();

// Adding a new value which inserts at the end
myLinkedList.push(23);
myLinkedList.push(710);
myLinkedList.push(47);
myLinkedList.push(78);
myLinkedList.push(100);

// Sorting the linked list
myLinkedList.sort();

// Reversing the linked list
myLinkedList.reverse();

// Finding the second greatest element in the linked list

const secondGreatesNum = myLinkedList.sort().reverse().toArr()[1];

// Printing the list and the second greatest number
console.log(myLinkedList);
console.log(secondGreatesNum);
