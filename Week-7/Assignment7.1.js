var head;
  
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
  
    /* Function to reverse the linked list */
    function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }
  
 
    function print() {
        var temp = head;
            while (temp != null) {
                console.log(temp.data + " ");
                temp = temp.next;
            }
            console.log();
        }
      
        function push(data) {
        var temp = new Node(data);
            temp.next = head;
            head = temp;
        }
      
            push(20);
            push(4);
            push(15);
            push(85);
  
        console.log("Given Linked list");
        print();
        head = reverse(head);
        console.log("Reversed linked list");
        print();
  