const express = require('express')

const router = express.Router()
const {createAuthor, getAllAuthors, getSingleAuthor, updateAuthor,deleteAuthor} = require('../controllers/AuthorController')

/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *            - authorName
 *       properties:
 *            authorName:
 *              type: string
 *              description: The name of the author.
 */

/**
 * @swagger
 * /api/author:
 *   post:
 *     summary: Create a new author
 *     tags: [Author]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Author'
 *     responses:
 *       200:
 *         description: The author was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       500:
 *         description: Some server error
 */

router.post('/', createAuthor )
/**
 * @swagger
 * /api/author:
 *   get:
 *     summary: Returns all authors
 *     tags: [Author]
 *     responses:
 *       200:
 *         description: the list of the authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 */

router.get('/', getAllAuthors)
/**
 * @swagger
 * /api/author/{id}:
 *   get:
 *     summary: gets author by id
 *     tags: [Author]
 *     parameters:
 *       - in : path
 *         name: id
 *         description: id of author
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: author by its id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       400:
 *         description: author can not be found
 */

router.get('/:id', getSingleAuthor)
/**
 * @swagger
 * /api/author/{id}:
 *   patch:
 *     summary: updates author by id
 *     tags: [Author]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: author id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Author'
 *     responses:
 *       200:
 *         decsription: The Author was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: author was not found.
 *       500:
 *         description: Internal server error.
 *
 */

router.patch('/:id', updateAuthor)
/**
 * @swagger
 *  /api/author/{id}:
 *    delete:
 *      summary: removes author from array
 *      tags: [Author]
 *      parameters:
 *        - in: path
 *          name: id
 *          description: author id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The author was deleted
 *        404:
 *          description: The author was not found
 *
 */

router.delete('/:id', deleteAuthor)

module.exports = router