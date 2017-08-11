function ListNode(val) {
  this.val = val;
  this.next = null;
}

let linkOne = [2, 4, 3];
let linkTwo = [5, 6, 4];

function linkGen(arr) {
  let linkHead = new ListNode(arr[0]);
  arr = arr.slice(1);
  arr.reduce((pre, cur) => {
    if (cur == undefined) return;
    let newNode = new ListNode(cur);
    pre.next = newNode;
    return newNode;
  }, linkHead)
  return linkHead;
}

var addTwoNumbers = function (l1, l2) {
  let resultArr = [];
  while (l1) {
    let result = l1.val + l2.val;
    if (result > 9) {
      l1.next.val++;
      resultArr.push(result - 10);
    } else {
      resultArr.push(result);
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return linkGen(resultArr);
};

function read(l) {
  while (l) {
    console.log(l.val);
    l = l.next;
  }
}
console.log(read(addTwoNumbers(linkGen(linkOne), linkGen(linkTwo))));