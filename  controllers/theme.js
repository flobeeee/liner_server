const { User, Theme, User_Page } = require('../models');

module.exports = {
  'update': async (req, res) => {
    const { userId, themeId } = req.body;
    // 이전색상, 이후색상 배열로 정리하기
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
    // 테마바꾸기
    await User.update({
      themeId: themeId
    }, {
      where: {
        id: userId
      }
    });
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
  }
};