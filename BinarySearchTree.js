// 二叉搜索数

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

// 插入节点
const insertNode = (current, value) => {
  if (value < current.value) {
    if (current.left == null) {
      current.left = new Node(value);
    } else {
      insertNode(current.left, value);
    }
  } else {
    if (current.right == null) {
      current.right = new Node(value);
    } else {
      insertNode(current.right, value);
    }
  }
}

// 给二叉搜索数插入值
const insert = (root, value) => {
  if (!root) { return null }
  insertNode(root, value);
  return root;
}

// 检索某个节点
const contains = (root, value) => {
  if (!root) return false;
  if (root.value === value) return true;

  if (value < root.value) {
    return contains(root.left, value);
  } else {
    return contains(root.right, value);
  }
}

const remove = (root, value) => {

}

const findNode = (root, value) => {
  if (!root) return null;
  if (root.value === value) return root;

  if (value < root.value) {
    return findNode(root.left, value);
  } else {
    return findNode(root.right, value);
  }
}

const findMin = (root) => {
  if (!root) return null;
  if (root.left === null) {
    return root.value;
  } else {
    return findMin(root.left);
  }
}

const findMax = (root) => {
  if (!root) return null;
  if (root.right === null) {
    return root.value;
  } else {
    return findMax(root.right);
  }
}

// 遍历
const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}

const preInorder = (root) => {
  if (!root) return;
  console.log(root.value);
  preInorder(root.left);
  preInorder(root.right);
}

const postInorder = (root) => {
  if (!root) return;
  postInorder(root.left);
  postInorder(root.right);
  console.log(root.value);
}