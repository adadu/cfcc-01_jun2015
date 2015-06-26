'use strict';

module.exports = function Shelf() {
  this.shelf = [];

  this.addBook = function(addBooks) {
    return this.shelf.push(addBooks);
  };

  this.removeBook = function(remBooks) {
    for (var i = 0; i < this.shelf.length; i++) {
      if (this.shelf[i] === remBooks) {
        delete this.shelf[i];
      }
    }
  };
};
