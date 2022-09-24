const Comment = require('../models/Comment');

const getAllComments = (req, res) => {
  Comment.find()
    .then((comments) =>
      res.status(200).json({
        status: 'success',
        data: {
          comments,
        },
      })
    )
    .catch((error) =>
      res.status(500).json({
        status: 'fail',
        error: error.message,
      })
    );
};

const getOneComment = (req, res) => {
  const id = req.params.id;
  Comment.findById(id)
    .then((comment) =>
      res.status(200).json({
        status: 'success',
        data: {
          comment,
        },
      })
    )
    .catch((error) =>
      res.status(404).json({
        status: 'fail',
        error: error.message,
      })
    );
};

//해당 게시글에 대한 모든 댓글을 가져온다.
const getCommentsOfPost = (req, res) => {
  Comment.find({
    post: req.params.postId,
  })
    .then((comments) =>
      res.status(200).json({
        status: 'success',
        data: comments,
      })
    )
    .catch((error) =>
      res.status(400).json({
        status: 'fail',
        error: error.message,
      })
    );
};

const createComment = (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((data) =>
      res.status(200).json({
        status: 'success',
        data,
      })
    )
    .catch((error) =>
      res.status(400).json({
        status: 'fail',
        error: error.message,
      })
    );
};

const updateComment = (req, res) => {
  req.body.updatedAt = Date.now();
  Comment.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((data) => {
      if (!data) {
        res.status(404).json({ status: 'fail', error: '404 Not Found' });
      }
      res.status(200).json({
        status: 'success',
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 'fail',
        error: error.message,
      });
    });
};

const deleteComment = (req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() =>
      res.status(200).json({
        status: 'success',
        message: 'deleted successfully',
      })
    )
    .catch((error) =>
      res.status(400).json({
        status: 'fail',
        error: error.message,
      })
    );
};

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  deleteComment,
  getCommentsOfPost,
};
