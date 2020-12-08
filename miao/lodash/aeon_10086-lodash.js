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
  return {
    chunk,
    compact,
    concat,
    difference,
    differenceBy,
  };
})();
const TESTRES = aeon_10086.difference([1, 2, 3, 4], [1, 3], [4]);
console.log(TESTRES);
