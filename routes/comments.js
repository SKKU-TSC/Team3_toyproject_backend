const router = require('express').Router();
const {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
  getCommentsOfPost,
} = require('../middlewares/comments');

router.get('/', getAllComments);

router.get('/:id', getOneComment);

router.get('/ofPost/:postId', getCommentsOfPost);

router.post('/', createComment);

router.patch('/:id', updateComment);

router.delete('/:id', deleteComment);

module.exports = router;
