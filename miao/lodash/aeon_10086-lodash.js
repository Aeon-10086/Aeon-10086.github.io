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
  function differenceBy(ary, ...args) {
    let res = [];
    let predicate = args[args.length - 1];
    // 当传入的值为函数时
    args = flattenDeep(args);
    if (typeof predicate == "function") {
      predicate = args.pop();
      for (let i = 0; i < args.length; i++) {
        args[i] = predicate(args[i]);
      }
      for (let i = 0; i < ary.length; i++) {
        if (args.indexOf(predicate(ary[i])) == -1) {
          res.push(ary[i]);
        }
      }
    } else if (typeof predicate == "string") {
      predicate = args.pop();
      console.log(predicate);
      for (let item1 of ary) {
        let flag = true;
        for (let item2 of args) {
          if (item1[predicate] == item2[predicate]) {
            flag = false;
            break;
          }
        }
        if (flag) res.push(item1);
      }
    } else {
      res = difference(ary, ...args);
    }
    return res;
  }
  //比较 ary 和 args 中的函数
  function differenceWith(ary, args = [], predicate) {
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
        if (predicate(item, test)) flag = false;
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
    if (typeof predicate == "function") {
      for (; i < ary.length; i++) {
        if (predicate(ary[i], i, ary)) {
          break;
        }
      }
    } else if (Array.isArray(predicate)) {
      for (; i < ary.length; i++) {
        if (ary[i][predicate[0]] == predicate[1]) {
          break;
        }
      }
    } else if (typeof predicate == "object") {
      for (; i < ary.length; i++) {
        if (DeepComparsion(ary[i], predicate)) {
          break;
        }
      }
    } else if (typeof predicate == "string") {
      for (; i < ary.length; i++) {
        if (ary[i][predicate] == undefined) {
          break;
        }
      }
    }
    return ary.slice(0, i);
  }
  function dropWhile(ary, predicate) {
    let i = 0;
    if (typeof predicate == "function") {
      for (; i < ary.length; i++) {
        if (!predicate(ary[i], i, ary)) {
          break;
        }
      }
    } else if (Array.isArray(predicate)) {
      for (; i < ary.length; i++) {
        if (ary[i][predicate[0]] !== predicate[1]) {
          break;
        }
      }
    } else if (typeof predicate == "object") {
      for (; i < ary.length; i++) {
        if (!DeepComparsion(ary[i], predicate)) {
          break;
        }
      }
    } else if (typeof predicate == "string") {
      for (; i < ary.length; i++) {
        if (ary[i][predicate] !== undefined) {
          break;
        }
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
        Array.isArray(predicate) &&
        ary[i][predicate[0]] == predicate[1]
      ) {
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
        Array.isArray(predicate) &&
        ary[i][predicate[0]] == predicate[1]
      ) {
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
    let l = 0;
    let r = ary.length;
    while (l < r) {
      let m = Math.floor((r + l) / 2);
      if (ary[m] < val) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    return r;
  }
  function sortedIndexBy(ary, val, predicate) {
    if (typeof predicate == "function") {
      let aryCopy = ary.map((item) => predicate(item));
      let valCopy = predicate(val);
      return sortedIndex(aryCopy, valCopy);
    }
    if (typeof predicate == "string") {
      let aryCopy = ary.map((item) => item[predicate]);
      let valCopy = val[predicate];
      return sortedIndex(aryCopy, valCopy);
    }
  }
  function sortedIndexOf(ary, val) {
    let l = 0;
    let r = ary.length;
    while (l < r) {
      let m = Math.floor((r + l) / 2);
      if (ary[m] < val) {
        l = m + 1;
      } else {
        r = m;
      }
    }
    if (ary[r] === val) {
      return r;
    } else {
      return -1;
    }
  }
  function sortedLastIndex(ary, val) {
    let l = 0;
    let r = ary.length;
    while (l < r) {
      let m = Math.floor((r + l) / 2);
      if (ary[m] > val) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return r;
  }
  function sortedLastIndexBy(ary, val, predicate) {
    if (typeof predicate == "function") {
      let aryCopy = ary.map((item) => predicate(item));
      let valCopy = predicate(val);
      return sortedLastIndex(aryCopy, valCopy);
    }
    if (typeof predicate == "string") {
      let aryCopy = ary.map((item) => item[predicate]);
      let valCopy = val[predicate];
      return sortedLastIndex(aryCopy, valCopy);
    }
  }
  function sortedLastIndexOf(ary, val) {
    let l = 0;
    let r = ary.length;
    while (l < r) {
      let m = Math.floor((r + l) / 2);
      if (ary[m] > val) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    if (r > 0) r--;
    if (ary[r] === val) {
      return r;
    } else {
      return -1;
    }
  }
  function sortedUniq(ary) {
    let map = {};
    let res = [];
    for (let item of ary) {
      if (!map[item]) {
        map[item] = 1;
        res.push(item);
      }
    }
    return res;
  }
  function sortedUniqBy(ary, predicate) {
    let map = {};
    let res = [];
    for (let item of ary) {
      let temp = predicate(item);
      if (!map[temp]) {
        map[temp] = 1;
        res.push(item);
      }
    }
    return res;
  }
  function every(ary, predicate) {
    predicate = iteratee(predicate);
    for (let i = 0; i < ary.length; i++) {
      if (!predicate(ary[i], i, ary)) {
        return false;
      }
    }
    return true;
  }
  function filter(ary, predicate) {
    predicate = iteratee(predicate);
    let res = [];
    for (let item of ary) {
      if (predicate(item)) res.push(item);
    }
    return res;
  }
  function find(ary, predicate, fromIndex = 0) {
    predicate = iteratee(predicate);
    for (let i = fromIndex; i < ary.length; i++) {
      if (predicate(ary[i], i, ary)) return ary[i];
    }
    return;
  }
  function findLast(ary, predicate, fromIndex = ary.length - 1) {
    predicate = iteratee(predicate);
    for (let i = fromIndex; i >= 0; i--) {
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
  function maxBy(ary, predicate) {
    if (ary.length < 1) return undefined;
    let max = -Infinity;
    let res;
    if (typeof predicate == "function") {
      for (let item of ary) {
        if (max < predicate(item)) {
          max = predicate(item);
          res = item;
        }
      }
    } else {
      for (let item of ary) {
        if (max < item[predicate]) {
          max = item[predicate];
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
  function minBy(ary, predicate) {
    if (ary.length < 1) return undefined;
    let min = Infinity;
    let res;
    if (typeof predicate == "function") {
      for (let item of ary) {
        if (min > predicate(item)) {
          min = predicate(item);
          res = item;
        }
      }
    } else {
      for (let item of ary) {
        if (min > item[predicate]) {
          min = item[predicate];
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
  function sumBy(ary, predicate) {
    let sum = 0;
    if (typeof predicate == "function") {
      for (let item of ary) {
        sum += predicate(item);
      }
    } else {
      for (let item of ary) {
        sum += item[predicate];
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
    if (Number.isNaN(val) && Number.isNaN(other)) {
      return true;
    }
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
  function castArray(val) {
    if (Array.isArray(val)) return val;
    if (val === undefined) return [undefined];
    if (val === null) return [null];
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
  function pullAllBy(ary, args, predicate) {
    args = args.map((item) => item[predicate]);
    remove(ary, (item) => args.includes(item[predicate]));
    return ary;
  }
  function pullAllWith(ary, args, predicate) {
    remove(ary, (item) => args.some((jtem) => DeepComparsion(item, jtem)));
    return ary;
  }
  function pullAt(ary, ...args) {
    let res = [];
    let d = 0;
    for (let i = 0; i < args.length; i++) {
      res.push(...ary.splice(args[i] - d, 1));
      d++;
    }
    return res;
  }
  function intersection(...args) {
    let res = [];
    args.sort((a, b) => b.length - a.length);
    for (let i = 0; i < args[0].length; i++) {
      let flag = true;
      for (let j = 1; j < args.length; j++) {
        if (args[j].indexOf(args[0][i]) == -1) {
          flag = false;
          break;
        }
      }
      if (flag) res.push(args[0][i]);
    }
    return res;
  }
  function intersectionBy(...args) {
    if (Array.isArray(args[args.length - 1])) {
      let res = [];
      for (let i = 0; i < args[0].length; i++) {
        let flag = true;
        for (let j = 1; j < args.length; j++) {
          if (args[j].indexOf(args[0][i]) == -1) {
            flag = false;
            break;
          }
        }
        if (flag) res.push(args[0][i]);
      }
      return res;
    } else {
      let predicate = args.pop();
      if (typeof predicate == "function") {
        let res = [];
        let temp = args.map((item) => item.map((i) => predicate(i)));
        for (let i = 0; i < args[0].length; i++) {
          let flag = true;
          for (let j = 1; j < temp.length; j++) {
            if (temp[j].indexOf(predicate(args[0][i])) == -1) {
              flag = false;
              break;
            }
          }
          if (flag) res.push(args[0][i]);
        }
        return res;
      } else if (typeof predicate == "string") {
        let res = [];
        for (let item of args[0]) {
          let curr = item[predicate];
          let flag = [];
          for (let i = 1; i < args.length; i++) {
            flag.push(args[i].some((item) => item[predicate] == curr));
          }
          let indi = flag.every((item) => item);
          if (indi) res.push(item);
        }
        return res;
      }
    }
  }
  function intersectionWith(...args) {
    let predicate = args[args.length - 1];
    let res = [];
    if (typeof predicate == "function") {
      predicate = args.pop();
      for (let item of args[0]) {
        let flag = [];
        for (let i = 1; i < args.length; i++) {
          flag.push(args[i].some((ii) => predicate(item, ii)));
        }
        let indi = flag.every((iii) => iii);
        if (indi) res.push(item);
      }
    }
    return res;
  }
  function tail(ary) {
    if (!ary.length) return ary;
    return ary.slice(1);
  }
  function take(ary, n = 1) {
    if (!ary.length || !n) return [];
    return ary.slice(0, n);
  }
  function takeRight(ary, n = 1) {
    if (!ary.length || !n) return [];
    n = ary.length - n > 0 ? ary.length - n : 0;
    return ary.slice(n);
  }
  function takeRightWhile(ary, predicate) {
    if (!ary.length) return [];
    predicate = iteratee(predicate);
    let i = ary.length - 1;
    for (; i >= 0; i--) {
      if (!predicate(ary[i])) break;
    }
    return ary.slice(i + 1);
  }
  function takeWhile(ary, predicate) {
    if (!ary.length) return [];
    predicate = iteratee(predicate);
    let i = 0;
    for (; i < ary.length; i++) {
      if (!predicate(ary[i])) {
        break;
      }
    }
    return ary.slice(0, i);
  }
  function union(...args) {
    let set = new Set();
    args.forEach((item) =>
      item.forEach((jtem) => {
        set.add(jtem);
      })
    );
    return [...set.values()];
  }
  function unionBy(...args) {
    let predicate = args[args.length - 1];
    if (Array.isArray(predicate)) {
      return union(...args);
    } else {
      predicate = iteratee(args.pop());
      let set = new Set();
      let res = [];
      args.forEach((item) =>
        item.forEach((jtem) => {
          if (!set.has(predicate(jtem))) {
            set.add(predicate(jtem));
            res.push(jtem);
          }
        })
      );
      return res;
    }
  }
  function unionWith(...args) {
    let predicate = args.pop();
    let res = args[0];
    for (let i = 1; i < args.length; i++) {
      args[i].forEach((item) => {
        let flag = true;
        for (let jtem of res) {
          if (predicate(jtem, item)) {
            flag = false;
          }
        }
        if (flag) res.push(item);
      });
    }
    return res;
  }
  function uniq(ary) {
    let set = new Set();
    ary.forEach((item) => {
      if (!set.has(item)) {
        set.add(item);
      }
    });
    return [...set.values()];
  }
  function uniqBy(ary, predicate) {
    predicate = iteratee(predicate);
    let set = new Set();
    let res = [];
    ary.forEach((item) => {
      let temp = predicate(item);
      if (!set.has(temp)) {
        set.add(temp);
        res.push(item);
      }
    });
    return res;
  }
  function uniqWith(ary, predicate) {
    if (!ary.length) return [];
    let res = [ary[0]];
    for (let i = 1; i < ary.length; i++) {
      let temp = ary[i];
      let flag = true;
      for (let item of res) {
        if (predicate(item, temp)) {
          flag = false;
          break;
        }
      }
      if (flag) res.push(temp);
    }
    return res;
  }
  function unzip(ary) {
    let res = [];
    for (let i = 0; i < ary[0].length; i++) {
      res.push([]);
    }
    for (let i = 0; i < ary.length; i++) {
      for (let j = 0; j < ary[i].length; j++) {
        res[j][i] = ary[i][j];
      }
    }
    return res;
  }
  function unzipWith(ary, predicate) {
    ary = unzip(ary);
    let res = ary.map((item) => predicate(...item));
    return res;
  }
  function without(ary, ...args) {
    let res = ary.filter((item) => !args.includes(item));
    return res;
  }
  function xor(...arys) {
    let map = new Map();
    let res = [];
    arys = flatten(arys);
    arys.forEach((item) => {
      if (map.has(item)) {
        map.set(item, map.get(item) + 1);
      } else {
        map.set(item, 1);
      }
    });
    for (let key of map.keys()) {
      if (map.get(key) == 1) {
        res.push(key);
      }
    }
    return res;
  }
  function xorBy(...arys) {
    let map = new Map();
    let predicate = iteratee(arys.pop());
    let res = [];
    arys = flatten(arys);
    arys.forEach((item) => {
      let temp = predicate(item);
      if (map.has(temp)) {
        map.set(temp, map.get(temp) + 1);
      } else {
        map.set(temp, 1);
      }
    });
    for (let item of arys) {
      let temp = predicate(item);
      if (map.get(temp) == 1) {
        res.push(item);
      }
    }
    return res;
  }
  function xorWith(...arys) {
    let predicate = iteratee(arys.pop());
    let res = [];
    arys = flatten(arys);
    for (let i = 0; i < arys.length; i++) {
      let flag = true;
      for (let j = 0; j < arys.length; j++) {
        if (j !== i && predicate(arys[i], arys[j])) {
          flag = false;
          break;
        }
      }
      if (flag) res.push(arys[i]);
    }
    return res;
  }
  function zip(...arys) {
    let res = [];
    for (let i = 0; i < arys[0].length; i++) {
      res.push([]);
    }
    for (let i = 0; i < arys.length; i++) {
      for (let j = 0; j < arys[i].length; j++) {
        res[j][i] = arys[i][j];
      }
    }
    return res;
  }
  function zipObject(props, vals) {
    let res = {};
    for (let i = 0; i < props.length; i++) {
      res[props[i]] = vals[i];
    }
    return res;
  }
  function zipWith(...args) {
    let predicate = args.pop();
    args = zip(...args);
    let res = args.map((item) => predicate(...item));
    return res;
  }
  function countBy(collection, predicate) {
    predicate = iteratee(predicate);
    let map = {};
    collection.forEach((item) => {
      let temp = predicate(item);
      if (map[temp]) {
        map[temp] += 1;
      } else {
        map[temp] = 1;
      }
    });
    return map;
  }
  function forEach(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.forEach(predicate);
    }
    if (typeof collection == "object") {
      for (let key in collection) {
        let temp = predicate(collection[key], key, collection);
        if (temp == false) breakl;
      }
    }
    return collection;
  }
  function forEachRight(collection, predicate) {
    for (let i = collection.length - 1; i >= 0; i--) {
      predicate(collection[i], i, collection);
    }
    return collection;
  }
  //工具函数
  /**
   * 比较两个对象是否相同
   * @param obj1
   * @param obj2
   * @return Boolean
   */
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
  /**
   * 处理 predicate 根据其类型返回一个函数
   * @param {*} predicate
   * @return Function
   */
  function iteratee(predicate) {
    if (Array.isArray(predicate)) {
      return (item) => item[predicate[0]] == predicate[1];
    } else if (typeof predicate == "function") {
      return predicate;
    } else if (typeof predicate == "object") {
      return DeepComparsion.bind(null, predicate);
    } else if (typeof predicate == "string") {
      return (item) => item[predicate];
    }
  }

  /**
   * 比较两个值是否相等
   * @param {*} x
   * @param {*} y
   * @return Boolean
   */
  function sameValueZero(x, y) {
    if (x === y) {
      return true;
    }
    return (
      (Number.isNaN(x) && Number.isNaN(y)) ||
      (x === undefined ? x == y : false) ||
      (x === null ? x == y : false)
    );
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
    sortedIndexBy,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexBy,
    sortedLastIndexOf,
    sortedUniq,
    sortedUniqBy,
    every,
    filter,
    find,
    findLast,
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
    pullAllBy,
    intersection,
    intersectionBy,
    intersectionWith,
    pullAllWith,
    pullAt,
    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
    union,
    unionBy,
    unionWith,
    uniq,
    uniqBy,
    uniqWith,
    unzip,
    unzipWith,
    without,
    xor,
    xorBy,
    xorWith,
    zip,
    zipObject,
    zipWith,
    countBy,
    forEach,
    forEachRight,
  };
})();
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
var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];
const TESTRES = aeon_10086.findLast([1, 2, 3, 4], function (n) {
  return n % 2 == 1;
});
console.log(TESTRES);
