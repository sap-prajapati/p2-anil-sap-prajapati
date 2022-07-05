//Binary tree structure
class Node{
    constructor(val){
         this.val = val;
         this.left = null
         this.right = null;
    }
    }

//Depth function
function depth(root)
{
    if (root == null){
        return 0;
    }
    else 
    {
        return 1 + Math.max(depth(root.left) , depth(root.right));
    }
}


//Creating Binary Tree
var root = new Node(3)
root.left = new Node(9)
root.right = new Node(20)
 
root.right.left = new Node(15)
root.right.right = new Node(7)


//finding depth of Binary tree by calling depth funtion.
var num = depth(root); 
console.log(num);