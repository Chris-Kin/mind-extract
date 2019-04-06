/*
 * @File: 将数组转换为树形结构
 * @Author: mingyan.yu
 * @Date: 2019-04-04 22:46:23
 */

// 以md文档为例，只处理以#开头的元素数据，其他元素忽略不记
export default (arr, symbol = '#') => {
  if (!Array.isArray(arr)) {
    throw new Error('mind-extract.convert: only accept array');
  }
  const reg = new RegExp(`^${symbol}+\\s`);

  const titleArr = arr.filter(el => reg.test(el));
  
  const targetArr = [];
  const levelArr = [];
  titleArr.forEach((el, i) => {
    const level = el.split(' ')[0].length;
    const text = el.split(' ')[1];
    targetArr.push({ level, text, id: i });
    levelArr.push(level);
  });
  if (levelArr[0] !== Math.min(...levelArr)) {
    throw new Error('data is illegal, please check it');
  }

  for (let i = 0; i < levelArr.length; i++) {
    const current = targetArr[i];
    let parentId = undefined;
    for (let j = i - 1; j >= 0; j--) {
      if (levelArr[j] < levelArr[i]) {
        parentId = j;
        break;
      }
    }
    current.parentId = parentId;
  }

  const tree = buildTree(targetArr);

  return tree;
}


function buildTree(list) {
  let temp = {};
  let tree = {};
  for (let i in list) {
    temp[list[i].id] = list[i];
  }
  for (let i in temp) {
    if (temp[i].parentId) {
      if (!temp[temp[i].parentId].children) {
        temp[temp[i].parentId].children = {};
      }
      temp[temp[i].parentId].children[temp[i].id] = temp[i];
    } else {
      tree[temp[i].id] = temp[i];
    }
  }
  return tree;
}
