var singleNumber = function (nums) {
  var hashObj = {
    hash: {},
    push: function (val) {
      if (this.hash[val]) {
        delete this.hash[val];
      } else {
        this.hash[val] = 1;
      }
    },
    getResult: function () {
      var result;
      for (var i in this.hash) {
        result = i
      }
      return Number(i);
    }
  };
  for (var i = 0; i < nums.length; i++) {
    hashObj.push(nums[i]);
  }
  return hashObj.getResult();
};

console.log(singleNumber([2, 2, 3, 4, 5, 3, 4, 7, 5]));