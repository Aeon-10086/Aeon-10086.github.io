var aeon_10086 = (function () {
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
  function compact(ary) {
    let res = [];
    for (let i = 0; i < ary.length; i++) {
      if (ary[i]) res.push(ary[i]);
    }
    return res;
  }
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
  function difference(ary, args) {
    let res = [];
    for (let i = 0; i < ary.length; i++) {
      if (args.indexOf(ary[i]) == -1) {
        res.push(ary[i]);
      }
    }
    return res;
  }
  return {
    chunk,
    compact,
    concat,
    difference,
  };
})();
const TESTRES = aeon_10086.difference([1, 3, 5], [2, 3, 1]);
console.log(TESTRES);
