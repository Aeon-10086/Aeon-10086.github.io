var aeon_10086 = (function () {
  //将数组分块
  function chunk(ary, size = 1) {
    if (ary.length < 1) return [];
    size = size > 0 ? size : 1;
    let res = [];
    let l = ary.length;
    let resL = (l / size) | 0;
    for (let i = 0; i < resL; i++) {
      res[i] = ary.slice(size * i, size * (i + 1));
    }
    if (resL * size < l) {
      res[resL] = ary.slice(resL * size);
    }
    return res;
  }
  //将数组中非真的值过滤
  function compact(ary) {
    let res = [];
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) res.push(ary[i]);
    }
    return res;
  }
  //拼接数组
  function concat(ary, ...args) {
    let res = [...ary];
    for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        res.push(...args[i]);
      } else {
        res.push(args[i]);
      }
    }
    return res;
  }
  //过滤数组中与其他数组中值相同的部分
  function difference(ary, ...args) {
    let grounp = concat([], ...args);
    let res = [];
    for (let i = 0; i < ary.length; i++) {
      if (grounp.indexOf(ary[i]) == -1) {
        res.push(ary[i]);
      }
    }
    return res;
  }
  // 待完善
  function differenceBy(ary, args = [], callback) {
    let res = [];
    // 当传入的值为函数时
    if (typeof callback == "function") {
      for (let i = 0; i < args.length; i++) {
        args[i] = callback(args[i]);
      }
      for (let i = 0; i < ary.length; i++) {
        if (args.indexOf(callback(ary[i])) == -1) {
          res.push(ary[i]);
        }
      }
    }
    if (typeof callback == "string") {
      for (let item1 of ary) {
        let flag = true;
        for (let item2 of args) {
          if (item1[callback] == item2[callback]) {
            flag = false;
            break;
          }
        }
        if (flag) res.push(item1);
      }
    }
    return res;
  }
  //比较 ary 和 args 中的函数
  function differenceWith(ary, args = [], callback) {
    let res = [];
    /* for (let item of ary) {
      if (typeof item !== "object" && args.indexOf(item) == -1) {
        res.push(item);
      } else {
        let flag = true;
        for (let j = 0; j < args.length; j++) {
          if (DeepComparsion(item, args[j])) {
            flag = false;
            break;
          }
        }
        if (flag) res.push(item);
      }
    } */
    for (let item of ary) {
      let flag = true;
      for (let test of args) {
        if (callback(item, test)) flag = false;
      }
      if (flag) res.push(item);
    }
    return res;
  }
  // join 数组中的 join
  function join(ary, str) {
    let res = "";
    for (let i = 0; i < ary.length - 1; i++) {
      res = res + ary[i] + str;
    }
    res += ary[ary.length - 1];
    return res;
  }
  // last 返回数组中的最后一个元素
  function last(ary) {
    if (ary.length < 1) return [];
    return ary[ary.length - 1];
  }
  // lastIndexOf
  function lastIndexOf(ary, val, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] === val) return i;
    }
    return -1;
  }
  // drop
  function drop(ary, n = 1) {
    let res = [];
    for (let i = n; i < ary.length; i++) {
      res.push(ary[i]);
    }
    ary = [...res];
    return ary;
  }
  //删除后n个元素
  function dropRight(ary, n = 1) {
    let res = [];
    for (let i = 0; i < ary.length - n; i++) {
      res.push(ary[i]);
    }
    ary = [...res];
    return ary;
  }
  function dropRightWhile(ary, predicate) {
    let i = 0;
    for (; i < ary.length; i++) {
      if (predicate(ary[i], i, ary)) {
        break;
      }
    }
    return ary.slice(0, i);
  }
  function dropWhile(ary, predicate) {
    let i = 0;
    for (; i < ary.length; i++) {
      if (!predicate(ary[i], i, ary)) {
        break;
      }
    }
    return ary.slice(i);
  }
  //填充
  function fill(ary, val, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
      ary[i] = val;
    }
    return ary;
  }
  // 查找第一个符合条件的元素的索引值
  function findIndex(ary, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (ary[i] === predicate) {
        return i;
      } else if (typeof predicate === "function" && predicate(ary[i])) {
        return i;
      } else if (
        typeof predicate === "object" &&
        DeepComparsion(ary[i], predicate)
      ) {
        return i;
      } else if (ary[i][predicate]) {
        return i;
      }
    }
    return -1;
  }
  function findLastIndex(ary, predicate, fromIndex = ary.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (ary[i] === predicate) {
        return i;
      } else if (typeof predicate === "function" && predicate(ary[i])) {
        return i;
      } else if (
        typeof predicate === "object" &&
        DeepComparsion(ary[i], predicate)
      ) {
        return i;
      } else if (ary[i][predicate]) {
        return i;
      }
    }
    return -1;
  }
  function flatten(ary) {
    let res = [];
    for (let item of ary) {
      if (Array.isArray(item)) {
        res.push(...item);
      } else {
        res.push(item);
      }
    }
    return res;
  }
  function flattenDeep(ary) {
    let res = [];
    function fd(ary) {
      if (!Array.isArray(ary)) {
        return ary;
      }
      ary.forEach((item) => {
        if (Array.isArray(item)) {
          fd(item);
        } else {
          res.push(item);
        }
      });
    }
    fd(ary);
    return res;
  }
  function flattenDepth(ary, depth = 1) {
    if (depth === 0) return ary;
    let res = [];
    ary.forEach((item) => {
      if (Array.isArray(item)) {
        res = res.concat(item);
      } else {
        res.push(item);
      }
    });
    return flattenDepth(res, depth - 1);
  }
  function fromPairs(ary) {
    let res = {};
    for (let i = 0; i < ary.length; i++) {
      res[ary[i][0]] = ary[i][1];
    }
    return res;
  }
  function nth(ary, n = 0) {
    if (n < 0) return ary[ary.length + n];
    return ary[n];
  }
  function head(ary) {
    if (ary.length < 1) return;
    return ary[0];
  }
  function indexOf(ary, val, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (ary[i] === val) return i;
    }
    return -1;
  }
  function initial(ary) {
    if (ary.length < 2) return [];
    let res = [...ary];
    res.pop();
    return res;
  }
  function reverse(ary) {
    if (ary.length < 2) return ary;
    let l = 0;
    let right = ary.length - 1;
    while (l < right) {
      let temp = ary[l];
      ary[l] = ary[right];
      ary[right] = temp;
      l++;
      right--;
    }
    return ary;
  }
  function sortedIndex(ary, val) {
    let n = ary.length;
    if (val <= ary[0]) {
      return 0;
    }
    if (val > ary[n - 1]) {
      return n;
    }
    let l = 0;
    let r = n - 1;
    while (r - l > 1) {
      let m = Math.floor((r + l) / 2);
      if (val == ary[m]) {
        return m;
      } else if (ary[m] > val) {
        r = m;
      } else {
        l = m;
      }
    }
    return r;
  }
  function every(ary, callback) {
    for (let i = 0; i < ary.length; i++) {
      if (!callback(ary[i])) return false;
    }
    return true;
  }
  function filter(ary, callback) {
    let res = [];
    for (let item of ary) {
      if (callback(item)) res.push(item);
    }
    return res;
  }
  function find(ary, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < ary.length; i++) {
      if (predicate(ary[i], i, ary)) return ary[i];
    }
    return;
  }
  function max(ary) {
    if (ary.length < 1) return undefined;
    let max = -Infinity;
    for (let item of ary) {
      if (max < item) {
        max = item;
      }
    }
    return max;
  }
  function maxBy(ary, callback) {
    if (ary.length < 1) return undefined;
    let max = -Infinity;
    let res;
    if (typeof callback == "function") {
      for (let item of ary) {
        if (max < callback(item)) {
          max = callback(item);
          res = item;
        }
      }
    } else {
      for (let item of ary) {
        if (max < item[callback]) {
          max = item[callback];
          res = item;
        }
      }
    }

    return res;
  }
  function min(ary) {
    if (ary.length < 1) return undefined;
    let min = Infinity;
    for (let item of ary) {
      if (min > item) {
        min = item;
      }
    }
    return min;
  }
  function minBy(ary, callback) {
    if (ary.length < 1) return undefined;
    let min = Infinity;
    let res;
    if (typeof callback == "function") {
      for (let item of ary) {
        if (min > callback(item)) {
          min = callback(item);
          res = item;
        }
      }
    } else {
      for (let item of ary) {
        if (min > item[callback]) {
          min = item[callback];
          res = item;
        }
      }
    }
    return res;
  }
  function sum(ary) {
    let sum = ary.reduce((prev, item) => prev + item, 0);
    return sum;
  }
  function sumBy(ary, callback) {
    let sum = 0;
    if (typeof callback == "function") {
      for (let item of ary) {
        sum += callback(item);
      }
    } else {
      for (let item of ary) {
        sum += item[callback];
      }
    }
    return sum;
  }
  function toArray(val) {
    if (typeof val == "string") {
      return val.split("");
    }
    let res = [];
    if (typeof val == "object") {
      for (let key in val) {
        res.push(val[key]);
      }
    }
    return res;
  }
  function eq(val, other) {
    return val === other;
  }
  function gt(val, other) {
    return val > other;
  }
  function gte(val, other) {
    return val >= other;
  }
  function lt(val, other) {
    return val < other;
  }
  function lte(val, other) {
    return val <= other;
  }
  function castArray(val = []) {
    if (val === undefined) return [undefined];
    if (val === null) return [null];
    if (Array.isArray(val)) return val;
    return [val];
  }
  function clone(value) {
    return value;
  }
  function remove(ary, predicate) {
    for (let i = 0; i < ary.length; i++) {
      if (predicate(ary[i], i, ary)) {
        ary.splice(i, 1);
        i--;
      }
    }
    return ary;
  }
  function pull(ary, ...vals) {
    remove(ary, (item) => vals.includes(item));
    return ary;
  }
  function pullAll(ary, vals) {
    remove(ary, (item) => vals.includes(item));
    return ary;
  }
  //工具函数
  function DeepComparsion(obj1, obj2) {
    for (key in obj1) {
      if (typeof obj1[key] != "object" && typeof obj1[key] != "object") {
        if (obj1[key] != obj2[key]) return false;
      } else {
        if (!DeepComparsion(obj1[key], obj2[key])) return false;
      }
    }
    return true;
  }
  function arraryComparsion(ary1, ary2) {
    if (ary1.length !== ary2.length) return false;
    for (let i = 0; i < ary1.length; i++) {
      if (typeof ary1[i] !== typeof ary2[i]) return false;
      if (
        Array.isArray(ary1[i]) &&
        Array.isArray(ary2[i]) &&
        !arraryComparsion(ary1[i], ary2[i])
      ) {
        return false;
      }
      if (typeof ary1[i] === "object" && !DeepComparsion(ary1[i], ary2[i])) {
        return false;
      } else if (ary1[i] !== ary2[i]) {
        return false;
      }
    }
    return true;
  }

  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
    differenceWith,
    join,
    last,
    lastIndexOf,
    drop,
    dropRight,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex,
    every,
    filter,
    find,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
    toArray,
    lt,
    lte,
    eq,
    gt,
    gte,
    castArray,
    clone,
    dropRightWhile,
    dropWhile,
    nth,
    remove,
    pull,
    pullAll,
  };
})();
const TESTRES = aeon_10086.differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], "x");
console.log(TESTRES);
