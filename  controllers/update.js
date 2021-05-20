const { User_Page } = require('../models');

module.exports = {
  'update': async (req, res) => {
    const { highlightId, userId, colorHex, text } = req.body;

    if ((highlightId && userId) && (colorHex || text)) {
      // 모든 정보가 있는 경우
      if (colorHex && text) {
        const UserPageDB = await User_Page.update({
          colorHex: colorHex,
          text: text
        }, {
          where: {
            userId: userId,
            id: highlightId
          }
        });
        if (UserPageDB[0] === 1) {
          const data = await User_Page.findOne({
            where: {
              id: highlightId
            }
          });
          const pageId = data.dataValues.pageId;
          res.json({
            highlightId,
            userId,
            pageId,
            colorHex,
            text
          });
        } else {
          res.status(404).json({ 'message': 'not found' });
        }
      } else if (colorHex) {
        const UserPageDB = await User_Page.update({
          colorHex: colorHex
        }, {
          where: {
            userId: userId,
            pageId: highlightId
          }
        });
        if (UserPageDB[0] === 1) {
          const data = await User_Page.findOne({
            where: {
              id: highlightId
            }
          });
          const { pageId, text } = data.dataValues;
          res.json({
            highlightId,
            userId,
            pageId,
            colorHex,
            text
          });
        } else {
          res.status(404).json({ 'message': 'not found' });
        }
      } else {
        const UserPageDB = await User_Page.update({
          text: text
        }, {
          where: {
            userId: userId,
            pageId: highlightId
          }
        });
        if (UserPageDB[0] === 1) {
          const data = await User_Page.findOne({
            where: {
              id: highlightId
            }
          });
          const { pageId, colorHex } = data.dataValues;
          res.json({
            highlightId,
            userId,
            pageId,
            colorHex,
            text
          });
        } else {
          res.status(404).json({ 'message': 'not found' });
        }
      }
    } else {
      res.status(400).json({ 'message': 'not enough body parameter' });
    }
  }
};