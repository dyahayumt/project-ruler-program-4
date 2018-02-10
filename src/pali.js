function pali() {
var max = 0;
for (var x = 999; x > 99; x--) {

  for (var y = 999; y > 99; y--) {
    var a = x * y;
    var s = "" + a;
    if (
      s ===s.split("").reverse().join("") &&a > max
       ) {
         max = a;
         }
     }
   }
   return max;
}
module.exports = pali;
//console.log(palindrom());
