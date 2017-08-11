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
  if (l1.val === 0) {
    return l2;
  } else if (l2.val === 0) {
    return l1;
  }
  let resultArr = [];
  let temp;
  while ((l1 && l2) || temp) {
    if (!(l1 && l2)) {
      if (l1) {
        resultArr.push(temp + l1.val);
        return resultArr;
      }
      else if (l2) {
        resultArr.push(temp + l2.val);
        return resultArr;
      }
      else {
        resultArr.push(temp);
        return resultArr;
      }
    }
    let result = l1.val + l2.val + temp;
    if (result > 9) {
      temp = 1;
      resultArr.push(result - 10);
    } else {
      temp = 0;
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
console.log(read(addTwoNumbers(linkGen([5]), linkGen([5]))));