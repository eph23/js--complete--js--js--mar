'use strict';

const runOnce = function () {
  console.log(`This will never run again`);
};

runOnce();

(function () {
  console.log(`This will also never run again, this is an IIFE`);

  const isPrivate = 23;
})();
/* console.log(isPrivate); */

(() => {
  console.log(`This will also never run again, this is an Arrow IIFE`);
})();

{
  var isNotPrivate = 7;
  const isPrivate = 46;
}
console.log(isNotPrivate);
/* console.log(isPrivate); */
