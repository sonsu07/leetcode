/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let middleNode = function(head) {
    let ele = head;
    let numOfNode = 1;
    while (ele.next) { // list에 있는 노드 개수 확인 
        ele = ele.next;
        numOfNode++;
    }
    divHalfNum = parseInt(numOfNode / 2); // 확인된 노드 개수를 절반으로 나누기
    while ( divHalfNum-- ) {
        head = head.next;
    }
    return head;
};