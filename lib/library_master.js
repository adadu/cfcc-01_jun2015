'use strict';

module.exports = function LibraryMaster() {

  this.inventory = function(lib) {
    this.lib = lib;
    var msg;
    var msg;

    for (var l = 0; l < lib.library[0].shelf.length; l++) {
      msg = this.lib.libraryName + ' has ' + (this.lib.library.length+1) +
      ' shelf/shelves.';
      console.log(lib.library[this.lib.library.length-1].shelf[l]);
    }
    console.log(msg);
  };
};
