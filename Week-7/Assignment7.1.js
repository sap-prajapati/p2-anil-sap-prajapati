var head;
  
     class Node {
        constructor(val) {
            this.data = val;
            this.next = null;
        }
    }
  
    /* Function to reverse the linked list */
    function reverse(node) {
    let prev = null;
    let current = node;
    let next = null;
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
        let temp = head;
            while (temp != null) {
                console.log(temp.data + " ");
                temp = temp.next;
            }
            console.log();
        }
      
        function push(data) {
        let temp = new Node(data);
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
  