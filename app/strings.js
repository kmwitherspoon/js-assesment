exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split("");
    var newArr = [];
    var letter = "";
    var times = 0;
    for (var i = 0; i < arr.length; i++) {
      if(i === 0){
        newArr.push(arr[i]);
        times++;
      } else {
        if(letter === arr[i]){
          times++;
          if(times <= amount){
            newArr.push(arr[i]);
          }
        } else {
          newArr.push(arr[i]);
          times = 1;
        }
      }
      letter = arr[i];
    }
    return newArr.join("");
  },
  wordWrap: function(str, cols) {
    var arr = str.split(" ");
    var count = 0;
    var newStr = "";
    _.each(arr, function(val, idx, arr){
      if(idx === arr.length - 1){
        newStr += val;
      } else {
        if(count + val.length + arr[idx+1].length> cols){
          newStr += val + "\n";
          count = 0;
        } else {
            newStr += val + " ";
            count += val.length + 1;
          }
        }
      });
      return newStr;
  },
  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
