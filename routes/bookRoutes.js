const express = require('express')

const router = express.Router()
const {createBook, createBookWithAuthorId, getAllBooks,getAllBooksWithAuthorId, getSingleBook, updateBook,deleteBook} = require('../controllers/bookController')
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *            - ISBN
 *            - title
 *            - price
 *            - noOfPages
 *            - description
 *            - category
 *            - publisher
 *            - publishedYear
 *       properties:
 *            ISBN:
 *              type: string
 *              description: The ISBN of your book.
 *            title:
 *              type: string
 *              description: The title of your book.
 *            price:
 *              type: number
 *              description: The price of your book.
 *            noOfPages:
 *              type: number
 *              description: The pages of your book.
 *            description:
 *              type: string
 *              description: The description of your book.
 *            category:
 *              type: string
 *              description: The category of your book.
 *            publisher:
 *              type: string
 *              description: The publisher of your book
 *            publishedYear:
 *              type: string
 *              description: The published year of your book. 
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     tags: [Book]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Internal server error
 */
router.post('/', createBook )
/**
 * @swagger
 * components:
 *   schemas:
 *     Book, Author:
 *       type: object
 *       required:
 *            - authorId
 *            - ISBN
 *            - title
 *            - price
 *            - noOfPages
 *            - description
 *            - category
 *            - publisher
 *            - publishedYear
 *       properties:
 *            authorId:
 *              type: string
 *              description: Id of the author.
 *            ISBN:
 *              type: string
 *              description: The ISBN of your book.
 *            title:
 *              type: string
 *              description: The title of your book.
 *            price:
 *              type: number
 *              description: The price of your book.
 *            noOfPages:
 *              type: number
 *              description: The pages of your book.
 *            description:
 *              type: string
 *              description: The description of your book.
 *            category:
 *              type: string
 *              description: The category of your book.
 *            publisher:
 *              type: string
 *              description: The publisher of your book
 *            publishedYear:
 *              type: string
 *              description: The published year of your book. 
 */

/**
 * @swagger
 * /api/books/createBookWithAuthorId:
 *   post:
 *     summary: Create a new book with authorId
 *     tags: [Book, Author]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book, Author'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book, Author'
 *       500:
 *         description: Internal server error
 */

router.post('/createBookWithAuthorId', createBookWithAuthorId)
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Returns all books with author
 *     tags: [Book]
 *     responses:
 *       200:
 *         description: the list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', getAllBooks)
/**
 * @swagger
 * /api/books/getAllBooksWithAuthorId:
 *   get:
 *     summary: Returns all books with author 
 *     tags: [Book, Author]
 *     responses:
 *       200:
 *         description: the list of the books with Author details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book, Author'
 */

router.get('/getAllBooksWithAuthorId', getAllBooksWithAuthorId)
/**
 * @swagger
 * /api/books/{id}:
 *   get:
 *     summary: gets books by id
 *     tags: [Book]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of book
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: books by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       400:
 *         description: book can not be found
 */
router.get('/:id', getSingleBook)

/**
 * @swagger
 * /api/books/{id}:
 *   patch:
 *     summary: updates books by id
 *     tags: [Book]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: book id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         decsription: The Book was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: book was not found.
 *       500:
 *         description: Internal server error.
 *
 */
router.patch('/:id', updateBook)
/**
 * @swagger
 *  /api/books/{id}:
 *    delete:
 *      summary: removes book from array
 *      tags: [Book]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: book id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The book was deleted
 *        404:
 *          description: The book was not found
 *
 */
router.delete('/:id', deleteBook)

module.exports = router