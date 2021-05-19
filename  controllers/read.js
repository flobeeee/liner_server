const sequelize = require('sequelize');
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
          attributes: [
            'userId',
            'pageId',
            'colorHex',
            'text',
            [sequelize.literal('id'), 'highlightId']
          ],
          order: [
            [['updatedAt', 'DESC']]
          ]
        });
        // 나가는 데이터 키 줄일 수 있으면 하기
        res.json(highlightInfo);
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
          attributes: [
            'userId',
            'pageId',
            'colorHex',
            'text',
            [sequelize.literal('id'), 'highlightId']
          ],
          order: [
            [['updatedAt', 'DESC']]
          ]
        });
        res.json(highlightInfo);
      }
    } else {
      res.status(404).json({ 'message': 'not enough data' });
    }
  },

  'all': async (req, res) => {
    const { userId } = req.body;
    // 1. User_Page 에서 해당 유저아이디의 모든 데이터를 역순으로 뽑아낸다.
    const allText = await User_Page.findAll({
      where: {
        userId: userId
      },
      order: [
        [['updatedAt', 'DESC']]
      ]
    });
    // 2. 배열에 pageId 를 정돈한다.
    let pageList = [];
    allText.map(data => {
      pageList.push(data.dataValues.pageId);
    });
    pageList = [...new Set(pageList)];
    // 3. 배열요소 순으로 Page 내용을 먼저 정리한다.
    let allData = [];
    for (let i = 0; i < pageList.length; i++) {
      const urls = await Page.findOne({
        where: {
          id: pageList[i]
        }
      });
      const texts = await User_Page.findAll({
        where: {
          pageId: pageList[i]
        },
        attributes: [
          'userId',
          'pageId',
          'colorHex',
          'text',
          [sequelize.literal('id'), 'highlightId']
        ],
        order: [
          [['updatedAt', 'DESC']]
        ]
      });
      const { id, pageUrl } = urls.dataValues;
      allData.push({ 'pageId': id, pageUrl, 'highlights': [] });
      allData[i].highlights.push(texts);
    }
    res.json(allData);
  }
};