/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var n = 0;
  for (var i = 0; i < preferences.length; i++){
   var id1 = preferences[i];
   var id2 = preferences[id1-1];
   var id3 = preferences[id2-1];
   if (i+1 == id3 && i+1 != id2){
     n++;
     preferences[i] = 0;
     preferences[id1 - 1] = 0;
     preferences[id2 - 1] = 0;
   }
  }
  return n;
};