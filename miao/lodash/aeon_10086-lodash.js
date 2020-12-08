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
      res += ary[i] + str;
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
  //填充
  function fill(ary, val,start = 0, end = ary.length){
    for(let i = start, i < end; i++){
      ary[i] = val;
    }
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
  };
})();
const TESTRES = aeon_10086.dropRight([1, 32, 5, 23, 3], 0);
console.log(TESTRES);
