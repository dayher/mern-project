const Post = require("../models/Post");

exports.index = async (req, res) => {
    try {
      let query = Post.find();

      const result = await query;
  
      res.status(200).json({
        status: "success",
        count: result.length,
        data: result,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
    }
};