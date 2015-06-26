'use strict';

module.exports = function Library(libraryName) {
  this.libraryName = libraryName;
  this.library = [];

  this.addShelf = function(addShelves) {
    return this.library.push(addShelves);
  };

  this.removeShelf = function(addShelves) {
    for (var i = 0; i < this.library.length; i++) {
      if (this.library[i] === addShelves) {
        delete this.library[i];
      }
    }
  };
};
