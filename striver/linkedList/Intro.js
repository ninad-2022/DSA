// https://www.codingninjas.com/studio/problems/introduction-to-linked-list_8144737?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=0

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  constructLinkedList(arr) {
    if (arr.length === 0) return null;
    this.head = new Node(arr[0]);
    let p = this.head;

    for (let i of arr) {
      p.next = new Node(i);
      p = p.next;
    }
    return this.head;
  }
}

const linkedList = new LinkedList();
linkedList.constructLinkedList([4, 3, 5, 1]);
// console.log("LinkedList: ",)
