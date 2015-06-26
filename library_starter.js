/* 3) Model a library using objects. *   A library contains shelves.
Shelves contain books. Books have an author and a title. Give the
library methods to add and remove a shelf. A shelf should have methods
to add/remove a book. Use a modular approach so that each type of
object is contained in its own file. Add any functionality you think
appropriate. */

// ******************** /library_starter.js ********************

'use strict';

var Library = require('./lib/library.js');
var Shelf = require('./lib/shelf.js');
var Books = require('./lib/books.js');
var LibraryMaster = require('./lib/library_master.js');

var libraryMaster = new LibraryMaster();
var dLib = new Library('Downtown Library');
var cHLib = new Library('Capitol Hill Library');
var shelf = new Shelf();
var shelf2 = new Shelf();
var book = new Books('Burts', 'Into the Night');
var book2 = new Books('Griffin', 'Outdoors');
var book3 = new Books('Tenny', 'Musique');
dLib.addShelf(shelf);
cHLib.addShelf(shelf);
cHLib.addShelf(shelf2);
shelf.addBook(book);
shelf.addBook(book2);
shelf2.addBook(book3);
//shelf.removeBook(book2);
libraryMaster.inventory(dLib);

