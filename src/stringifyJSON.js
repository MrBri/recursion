(function(){

  var escapeString = function(str) {
    str = str.split("");
      str = _(str).map(function(char) {
        if ( char === '"' || char === '\\') {
          return char = '\\' + char;
        } else {
          return char;
        }
      });
    return str.join("");
  };

  var stringifyJSON = function(obj){
    if ( Array.isArray(obj) ) {
      obj = _(obj).map(function(item) {
        if ( typeof item === "boolean" || typeof item === "number" ) {
          return item;
        } else if ( item === null ) {
          return "null";
        } else if ( typeof item === "object" ) {
          return stringifyJSON(item);
        } else {
          item = escapeString(item);
          return "\"" + item + "\"";
        }
      });
      return "[" + obj + "]";
    }

    obj = _(obj).map(function(value, key) {
      if ( typeof value === "boolean" || typeof value === "number" ) {
        return '"' + key + '":' + value;
      } else if ( value === null ){
        return '"' + key + '":' + 'null';
      } else if ( typeof value === "undefined" || typeof value === "function" ) {
        return "";
      } else if ( typeof value === "object" ) {
        return '"' + key + '":' + stringifyJSON(value);
      } else {
        return '"' + key + '":"' + value + '\"';
      }
    });
    if ( _(obj).contains("") ) { obj = ""; }
    return "{" + obj + "}";
  };

  window.stringifyJSON = stringifyJSON;

})();