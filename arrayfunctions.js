/**
 * Created by rrobinson on 1/14/14.
 */
exports.concatArray = function(str, array){
  return array.map(function(element) {
      return str + ' ' + element;
  });
};