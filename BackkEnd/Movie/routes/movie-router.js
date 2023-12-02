const { Router } = require('express');
const { addMovie, getAllMovie, getMovieById } = require('../controller/movie-controller');
const router = Router()

router.post('/addMovie', addMovie)
router.get('/getAllMovies', getAllMovie)
router.get('/:id', getMovieById)

module.exports = router;