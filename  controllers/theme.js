const { User, Theme, User_Page } = require('../models');

module.exports = {
  'update': async (req, res) => {
    const { userId, themeId } = req.body;
    if (userId) {
      if (themeId > 0 && themeId < 4) {
        // 1. 이전색상, 이후색상 배열로 정리하기
        const UserDB = await User.findOne({
          where: {
            id: userId
          },
          include: {
            model: Theme
          }
        });
        const { color1, color2, color3 } = UserDB.dataValues.Theme.dataValues;
        let beforeColor = [color1, color2, color3];
        const ThemeDB = await Theme.findOne({
          where: {
            id: themeId
          }
        });
        const { color1: newColor1, color2: newColor2, color3: newColor3 } = ThemeDB.dataValues;
        const afterColor = [newColor1, newColor2, newColor3];
        // 2. 테마바꾸기
        await User.update({
          themeId: themeId
        }, {
          where: {
            id: userId
          }
        });
        // 3. 색상바꾸기
        for (let i = 0; i < beforeColor.length; i++) {
          await User_Page.update({
            colorHex: afterColor[i]
          }, {
            where: {
              userId: userId,
              colorHex: beforeColor[i]
            }
          });
        }
        res.json({ 'message': 'OK' });
      } else {
        res.status(400).json({ 'message': 'wrong themeId' });
      }
    } else {
      res.status(400).json({ 'message': 'not enough body parameter' });
    }
  }
};