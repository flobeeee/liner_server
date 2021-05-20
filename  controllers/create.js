const { User, User_Page, Page } = require('../models');

module.exports = {
  'add': async (req, res) => {
    const { userId, pageUrl, colorHex, text } = req.body;

    if (userId && pageUrl && colorHex && text) {
      const pageDB = await Page.findOrCreate({
        where: { pageUrl: pageUrl }
      });
      const pageId = pageDB[0].dataValues.id;

      const UserDB = await User.findOne({
        where: { id: userId }
      });

      const UserpageDB = await User_Page.create({
        userId: UserDB.dataValues.id,
        pageId: pageId,
        colorHex: colorHex,
        text: text
      });
      const highlightId = UserpageDB.dataValues.id;

      await res.status(201).json({
        highlightId,
        userId,
        pageId,
        colorHex,
        text
      });

    } else {
      res.status(400).json({ 'message': 'not enough body parameter' });
    }
  },
};