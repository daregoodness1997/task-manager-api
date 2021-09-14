const getTask = async (req, res) => {
  try {
    res.status(200).json('get Task');
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTask };
