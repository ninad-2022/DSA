// https://www.codingninjas.com/studio/problems/introduction-to-linked-list_8144737?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTab=0

// https://leetcode.com/problems/delete-node-in-a-linked-list/
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

  addHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  show() {
    if (this.head !== null) return this.head;
  }

  deleteNode(node) {
    // To delete the given node, we can simply copy the value of the next node to the current node
    // and then update the current node's next pointer to skip the next node.
    if (node === null || node.next === null) {
      // Handle cases where the input node is invalid or it's the last node (which we cannot delete).
      return;
    }

    node.value = node.next.value;
    node.next = node.next.next;
  }

}

const linkedList = new LinkedList();