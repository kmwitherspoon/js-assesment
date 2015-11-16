exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    for( i = 0; i < arr.length; i++ ){
      if(arr[i] === item){
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for( i = 0; i < arr.length; i++ ){
      if(arr[i] === item){
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr = arr1.concat(arr2);
    return arr;
  },

  insert : function(arr, item, index) {
        arr.splice(index, 0, item);
  return arr;
  },

  count : function(arr, item) {
    var countArr = 0;
    arr.filter(function(value){
      if(value === item){
        countArr++;
      }
    });
    return countArr;
  },

  duplicates : function(arr) {
    var sorted_arr = arr.sort(); // You can define the comparing function here.
                             // JS by default uses a crappy string compare.
     var results = [];
     for (var i = 0; i < arr.length - 1; i++) {
       if (sorted_arr[i + 1] == sorted_arr[i]) {
         if(results.indexOf(sorted_arr[i]) === -1 ) {
           results.push(sorted_arr[i]);
         }
       }
     }
     return results;
   },

  square : function(arr) {
    return arr.map(function (x) {
    return Math.pow(x, 2);
  });
  },

  // Thanks nnnnnn from Stack Overflow

  findAllOccurrences : function(arr, target) {
    var newArr = [], i = -1;
    while ((i = arr.indexOf(target, i+1)) != -1){
        newArr.push(i);
    }
    return newArr;
}
};
