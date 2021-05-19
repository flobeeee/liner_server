const { User_Page, Page } = require('../models');

module.exports = {
  'texts': async (req, res) => {
    const { userId, pageId, pageUrl } = req.body;
    if (userId && (pageId || pageUrl)) {
      // pageId 가 있는 경우
      if (pageId) {
        const highlightInfo = await User_Page.findAll({
          where: {
            pageId: pageId
          },
          order: [
            [['updatedAt', 'DESC']]
          ]
        });
        // 나가는 데이터 키 줄일 수 있으면 하기
        res.json({
          highlightInfo
        });
      } else if (pageUrl) {
        const pageDB = await Page.findOne({
          where: {
            pageUrl: pageUrl
          }
        });
        const pageId = pageDB.dataValues.id;
        const highlightInfo = await User_Page.findAll({
          where: {
            pageId: pageId
          },
          order: [
            [['updatedAt', 'DESC']]
          ]
        });
        // 나가는 데이터 키 줄일 수 있으면 하기
        res.json({
          highlightInfo
        });
      }
    } else {
      res.status(404).json({ 'message': 'not enough data' });
    }
  },

  'all': async (req, res) => {
    //const { userId } = req.body;
  }
};