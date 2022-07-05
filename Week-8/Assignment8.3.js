class Node{
    constructor(val){
         this.val = val;
         this.left = null
         this.right = null;
    }
}
 
//function for printion nodes of a tree level wise

function printLevelOrder() {
    var h = height(root);
    var i;
    for (i = 1; i <= h; i++){
       printCurrentLevel(root, i);
       
    }
    
}

//funtion of finding height of the tree
function height(root){
    if (root == null){
        return 0;
    }
    else 
    {
        return 1 + Math.max(height(root.left) , height(root.right));
    }
}


//function for printing node of each level
function printCurrentLevel(root , level) {;
    if (root == null)
        return;
    if (level == 1)
    {
        console.log(root.val);
    }
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
    
}


//Creating Binary Tree
var root = new Node(3);
root.left = new Node(1);
root.right = new Node(20);
 
root.right.left = new Node(15);
root.right.right = new Node(27);

printLevelOrder();