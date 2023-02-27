import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BinaryTreeNode({ value, left, right, onChange }) {
  function handleValueChange(event) {
    const newValue = parseInt(event.target.value);
    onChange(newValue);
  }

  return (
    <div>
      <label>
        Value:
        <input type="number" value={value} onChange={handleValueChange} />
      </label>
      <div>{left && <BinaryTreeNode {...left} onChange={onChange} />}</div>
      <div>{right && <BinaryTreeNode {...right} onChange={onChange} />}</div>
    </div>
  );
}

function BinaryTree() {
  const [numLevels, setNumLevels] = useState(0);
  const [tree, setTree] = useState(null);

  useEffect(() => {
    async function fetchTree() {
      const response = await axios.get('https://myapi.com/binary-tree');
      setTree(response.data);
    }
    fetchTree();
  }, []);

  async function handleNodeChange(nodeId, newValue) {
    const updatedTree = { ...tree };
    const node = findNode(updatedTree, nodeId);
    node.value = newValue;
    await axios.put('https://myapi.com/binary-tree', updatedTree);
    setTree(updatedTree);
  }

  function findNode(tree, nodeId) {
    if (tree == null) {
      return null;
    }
    if (tree.id === nodeId) {
      return tree;
    }
    const left = findNode(tree.left, nodeId);
    if (left != null) {
      return left;
    }
    return findNode(tree.right, nodeId);
  }

  function generateTree(levels) {
    if (levels === 0) {
      return null;
    }
    const id = Math.floor(Math.random() * 100);
    const left = generateTree(levels - 1);
    const right = generateTree(levels - 1);
    return { id, value: 0, left, right };
  }

  function handleNumLevelsChange(event) {
    const numLevels = parseInt(event.target.value);
    setNumLevels(numLevels);
    setTree(generateTree(numLevels));
  }

  return (
    <div>
      <label>
        Number of Levels:
        <input type="number" value={numLevels} onChange={handleNumLevelsChange} />
      </label>
      {tree && <BinaryTreeNode {...tree} onChange={handleNodeChange} />}
    </div>
  );
}

export default BinaryTree;
