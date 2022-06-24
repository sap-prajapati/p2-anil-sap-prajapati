var head; // head of list
 
    /* Linked list Node */
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
 
    // This function rotates a linked
    // list counter-clockwise
    // and updates the head.
    // The function assumes that k is
    // smaller than size of linked list.
    // It doesn't modify
    // the list if k is greater than or equal to size
    function rotate(k) {
        if (k == 0)
            return;
 
        // Let us understand the
        // below code for example k = 4
        // and list = 10->20->30->40->50->60.
        var current = head;
 
        // current will either point to kth
        // or NULL after this
        // loop. current will point to node
        // 40 in the above example
        var count = 1;
        while (count < k && current != null) {
            current = current.next;
            count++;
        }
 
        // If current is NULL, k is greater
        // than or equal to count
        // of nodes in linked list.
        // Don't change the list in this case
        if (current == null)
            return;
 
        // current points to kth node.
        // Store it in a variable.
        // kthNode points to node 40
        // in the above example
        var kthNode = current;
 
        // current will point to last
        // node after this loop
        // current will point to node
        // 60 in the above example
        while (current.next != null)
            current = current.next;
 
        // Change next of last node to previous head
        // Next of 60 is now changed to node 10
 
        current.next = head;
 
        // Change head to (k+1)th node
        // head is now changed to node 50
        head = kthNode.next;
 
        // change next of kth node to null
        kthNode.next = null;
    }
 
   
    function push(new_data) {
        
        var new_node = new Node(new_data);

        new_node.next = head;
 
        head = new_node;
    }
 
    function printList() {
   var temp = head;
        while (temp != null) {
            console.log(temp.data + " ");
            temp = temp.next;
        }
    }
 
    push(20);
    push(4);
    push(15);
    push(85);
    push(34);
    push(54);
        console.log("Given list<br/>");
        printList();
 
        rotate(4);
 
        console.log("Rotated Linked List<br/>");
        printList();
 

 
