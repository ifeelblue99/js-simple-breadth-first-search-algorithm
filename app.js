function Node(val){
  this.value = val
  this.left = null
  this.right = null
}
function BTree(){
  this.root = null
  this.append = function(val){
    if(!this.root){
      return this.root = new Node(val)
    }
    this._appendHelper(val, this.root)
  }
  this._appendHelper = function(val, current){
    if(current.value>val){
      return !current.left? current.left = new Node(val)
        :this._appendHelper(val, current.left)
    }
    return !current.right? current.right = new Node(val)
        :this._appendHelper(val, current.right)
  }
}
// set up the tree
const binaryTree = new BTree()
binaryTree.append(5)    
binaryTree.append(3)   //     _ 5 _
binaryTree.append(4)   //  _ 3_    7_
binaryTree.append(7)   // 1   4      9
binaryTree.append(9) 
binaryTree.append(1) 

function BreathFirstSearch(root){
  const visitedNodes = new Set()
  const queue = [root]
  
  while(queue.length>0){
    let current = queue.shift()
    if(current.left) queue.push(current.left)
    if(current.right) queue.push(current.right)

    visitedNodes.add(current.value)
  }
  
  console.log("visited nodes:",visitedNodes)
}
// driver code
BreathFirstSearch(binaryTree.root)
