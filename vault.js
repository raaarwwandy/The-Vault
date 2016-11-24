'use strict';
module.exports = function() {

  var _key = 0;
  var _value = 0;
  
  // function setValue(key, value){
  //    _key = key;
  //    _value = value;
  //   return getValue();
  // }


  function getValue(key){
    if( _key){
      return _value;
    } else {
      return null;
    }
  }

    return{
      setValue: setValue,
      getValue: getValue
    };
};