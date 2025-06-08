/* Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular." */

//My Solution
const Ball = function(ballType) {
  this.ballType = ballType || "regular";
};