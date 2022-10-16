const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!this.tree) return null;
    return this.tree
  }

  add(data) {
    this.tree = addSubTree(this.tree, data);

    function addSubTree(node, data) {
      if(!node) {
        return new Node(data)
      }

      if(node.data === data) {
        return node
      }

      if(data < node.data) {
        node.left = addSubTree(node.left, data)
      } else {
        node.right = addSubTree(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchSubTree(this.tree, data);

    function searchSubTree(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return (data < node.data) ? searchSubTree(node.left, data) : searchSubTree(node.right, data)
    }
  }

  find(data) {
    return findSubTree(this.tree, data);

    function findSubTree(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return (data < node.data) ?  findSubTree(node.left, data) : findSubTree(node.right, data);
    }
  }

  remove(data) {
    this.tree = removeSubTree(this.tree, data);

    function removeSubTree(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removeSubTree(node.left, data);
        return node
      } else if(data > node.data) {
        node.right = removeSubTree(node.right, data);
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;

        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeSubTree(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if(!this.tree) {
      return
    }

    let node = this.tree;

    while(node.left) {
      node = node.left
    }

    return node.data;
  }

  max() {
    if (!this.tree) {
      return;
    }

    let node = this.tree;

    while(node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};