var merge = function(nums1, nums2) {
  if(nums1.length == 0) {
    return nums2;
  }
  if(nums2.length == 0) {
    return nums1;
  }
  const result = [];
  let i=0;
  let j=0;
  while(i < nums1.length && j < nums2.length) {
      if(nums1[i] < nums2[j]){
          result.push(nums1[i]);
          i++;
      } else {
          result.push(nums2[j]);
          j++;
      }
  }
  
  for(i; i< nums1.length; i++) {
      result.push(nums1[i]);
  }
  for(j; j< nums1.length; j++) {
      result.push(nums2[j]);
  }
  return result;
};
​
// Time Complexity -> O(N + M) -> total number of items from both arrays
// Space Complexity -> O(N + M)
// console.log(merge([6,7,8],[1,1,3]));
​
​
​
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
/*
  Given an array, creates the linked list and returns the head node.
*/
const generateLinkedList = (arr) => {
  if (!arr || arr.length === 0) {
    return null;
  }
  const head = new Node(arr[0]);
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i])
    prev.next = temp;
    prev = temp;
  }
  return head;
}
​
​
/**
 * Definition for singly-linked list
 * function ListNode(val, next) {
 *    this.val = (val === undefined ? 0 : val);
 *    this.next = (next === undefined ? null : next);
 * }
 */
// l1 null l2 (2 next : null) Ex1
// l1 (1, next: null) l2 null Ex2
​
var mergeTwoLists = (l1, l2) => {
  if(!l1) {
    return l2;
  } else if(!l2) {
    return l1;
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
}
​
// Time Complexity -> O(n) -> where n is the total number of items from 2 lists
// Space Complexity -> O(n) -> where n is the total number of items from 2 lists
// const result = mergeTwoLists(generateLinkedList([1,2]), generateLinkedList([3,4]))
// console.log(result);
​
​
/**
 * We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
 */
const bunnyEars = numOfBunnies => {
  if(numOfBunnies < 1) {
    return 0;
  }
  if(numOfBunnies == 1) {
    return 2;
  }
​
  return 2 + bunnyEars(numOfBunnies - 1);
}
​
// console.log(bunnyEars(5)); // -> 10
​
​
/**
 * We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
 */
const bunnyEars2 = numOfBunnies => {
  if(numOfBunnies < 1) {
    return 0;
  }
  if(numOfBunnies % 2 == 1) {
    return 2 + bunnyEars2(numOfBunnies - 1);
  }
  return 3 + bunnyEars2(numOfBunnies - 1);
}
​
// console.log(bunnyEars2(15)); // -> 37
​
​
/**
 * Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
​
We repeatedly make duplicate removals on S until we no longer can.
​
Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.
 */
// yxbccbxjl
// [y] -> [y,x] -> [y,x,b] -> [y,x,b,c] -> [y,x,b] -> [y,x] -> [y] -> [y,j,l]
var removeDuplicates = function(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if(stack.length > 0 && stack[stack.length - 1] == S.charAt(i)) {
      stack.pop();
    } else {
      stack.push(S.charAt(i));
    }
  }
  return stack.join('');
};
​
// Time Complexity -> O(n) + O(n) -> 2 * O(n) -> O(n) -> For loop and join method
// Space Complexity -> O(n)  -> const stack = []
​
// console.log(removeDuplicates('yxbccbxjl'));  // yjl
​
​
​
// 2nd way: -> Mr. Rovshan needs to fix -> It is NOT working
var removeDuplicates2 = function(S) {
  let hasDuplicate = -1;
  let result = S;
  
  while(hasDuplicate) {
    hasDuplicate = false;
    let subResult = '';
    for(var i=0; i < S.length - 1; i++) {
      if(S.charAt(i) !== S.charAt(i+1)) {
        subResult += S.charAt(i);
      } else {
        i++;
        hasDuplicate = true;
      }
    }
    result = subResult;
  }
  return result;
};
​
// Time Complexity -> O(n^2)
// Space Complexity -> O(n)
​
// console.log(removeDuplicates2('yxbccbxjl'));  // yjl
​
​
/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
​
An input string is valid if:
​
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */
​
var isValid = function(s) {
  let brackets = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  }
​
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const bracket = s.charAt(i);
    if(brackets[bracket]) {
      stack.push(brackets[bracket]);
    } else {
      if(stack.length > 0 && stack[stack.length - 1] == bracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
​
// Time Complexity -> O(n)
// Space Complexity -> O(n)
​
console.log(isValid('()'));     // -> true
console.log(isValid('()[]{}')); // -> true
console.log(isValid('(]'));     // -> false
console.log(isValid('([)]'));   // -> false
console.log(isValid('{[]}'));   // -> true