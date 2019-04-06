import convert from './convert';
import tranverse from './tranverse';
import generateMind from './generateMind';

class ME {
  /**
   *
   * @param {字符串数组} arr
   */
  convert(arr) {
    const tree = convert(arr);
    return tree;
  }
  /**
   *
   * @param {放置生成图的容器} target
   * @param {生成图的类名，用于样式控制} className
   * @param {树} tree
   */
  generate(target, className, tree) {
    console.log('generate');
  }
}

export default new ME();
