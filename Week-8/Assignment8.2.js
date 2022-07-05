//Binary tree structure
class Node{
    constructor(val){
         this.val = val;
         this.left = null
         this.right = null;
    }
    }
function ValidateBST(root){
    if(root == null)
    return true;
    
    if(root.left != null && (root.left.val > root.val || !ValidateBST(root.left)))
            return false;
    if(root.right != null && (root.right.val < root.val || !ValidateBST(root.right)))
            return false;
        
    return true;
}

//Creating Binary Tree
var root = new Node(3);
root.left = new Node(1);
root.right = new Node(20);
 
root.right.left = new Node(15);
root.right.right = new Node(27);

//Checking BST by calling ValidateBST funtion
console.log(root);
console.log(ValidateBST(root));