/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    return dummy.next;
};

//faster

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode, tail

    if (!list1 || !list2)

        return list2 || list1

    if (list1.val < list2.val) {

        head = list1

        list1 = list1.next

    }

    else {

        head = list2

        list2 = list2.next

    }

    tail = head

    while (list1 && list2) {

        if (list1.val < list2.val) {

            tail.next = list1

            tail = tail.next

            list1 = list1.next

        } else {

            tail.next = list2

            tail = tail.next

            list2 = list2.next

        }

    }

     tail.next = list1 || list2

    return head
};