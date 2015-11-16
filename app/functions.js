exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var chipotle = function(val){
      return str + ", " + val;
    }
    return function(item){
      return chipotle(item);
    };
  },

  makeClosures : function(arr, fn) {
    var arrNew = []
    var square = function(val){
      return function() { return fn(val)};
    }
    for (var i = 0; i < arr.length; i++) {
         arrNew.push(square(arr[i]));
    }
    return arrNew;
  },

  partial : function(fn, str1, str2) {
    var dog = function(val){
      return fn(str1, str2, val);
    }
    return dog
  },

  useArguments : function() {
    var total = 0
      for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
      }
    return total;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
          var moreArgs = args.concat(Array.prototype.slice.call(arguments));
          return fn.apply(null, moreArgs);
        };
  },

  curryIt : function(fn) {

  }
};
