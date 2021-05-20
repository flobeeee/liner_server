const { User_Page } = require('../models');

module.exports = {
  'delete': async (req, res) => {
    const { userId, highlightId } = req.body;
    if (userId && highlightId) {
      await User_Page.destroy({
        where: {
          id: highlightId,
          userId: userId
        }
      });
      res.json({ 'message': 'OK' });
    } else {
      res.status(400).json({ 'message': 'not enough body parameter' });
    }
  }
};