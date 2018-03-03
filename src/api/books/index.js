const router = require('express').Router();
const books = require('./books');
const orderBooks = require('./order-books');
const booksStartIndex = require('./books-start-index');
const booksMaxResults = require('./books-max-results');
const bookWithId = require('./book-with-id');
const updateBook = require('./update-book');

router.get('/', [books, orderBooks, booksStartIndex, booksMaxResults]);
router.get('/:id', bookWithId);
router.put('/:id', updateBook);

module.exports = router;