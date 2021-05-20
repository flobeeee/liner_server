const { User, User_Page, Page } = require('./models');

// 유저정보
User.findOne({
  where: {
    id: 1
  }
})
  .then(result => {
    console.log('유저정보');
    console.log(result.dataValues);
  })
  // 유저가 선택한 텍스트
  .then(User.findAll({
    where: {
      userId: 123,
    },
    include: [
      {
        model: User_Page,
        require: true,
        attributes: ['text']
      }
    ]
  })
    .then(result => {
      console.log('유저가 선택한 텍스트');
      console.log(result[0].dataValues.User_Pages);
    }))
  // 유저가 선택한 사이트
  .then(User.findAll({
    where: {
      userId: 123,
    },
    include: [
      {
        model: Page,
        require: true,
        as: 'Page',
        through: {
          attributes: ['userId', 'pageId']
        }
      }
    ]
  })
    .then(result => {
      console.log('유저가 선택한 사이트');
      console.log(result[0].dataValues.Page);
    }));
