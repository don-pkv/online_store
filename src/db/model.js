const Sequelize = require('sequelize')

let db
if (process.env.NODE_ENV == 'testing') {
  db = new Sequelize({
    dialect: 'mysql',
    storage: __dirname+'/test.db'
  })
} else {
  db = new Sequelize({
    dialect: 'sqlite',
    database: 'online_store',
    username: 'don_pkv_1',
    password: '9212335492',
    storage: __dirname+'/model.db'
   })
}

const COL_ITEM_ID = {
  type: Sequelize.DataTypes.INTEGER,
  autoIncrement: true,
  primaryKey: true,
}

const COL_ITEM_NAME = {
  type: Sequelize.DataTypes.STRING(140),
  allowNull: false,
  unique:true
}

const ADMIN = db.define('admin', {
  admin_id: COL_ITEM_ID,
  admin_name: COL_ITEM_NAME,
  admin_password: {
    type: Sequelize.DataTypes.STRING(40),
    allowNull: false,
  }
})

const ITEM = db.define('item', {
  item_id: COL_ITEM_ID,
  item_name: COL_ITEM_NAME,
  item_description: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false,
  },
  item_link:{
    type: Sequelize.DataTypes.TEXT('tiny'),
    allowNull: false
  },
  item_avatar:{
    type: Sequelize.DataTypes.TEXT('tiny'),
    allowNull: false
  }
})

/*
const REVIEW = db.define('review', {
  review_id: COL_ITEM_ID,
  review_author: COL_ITEM_NAME,
  review_description: {
    type: Sequelize.DataTypes.TEXT('tiny'),
  },
})

ITEM.hasMany(REVIEW)
REVIEW.belongsTo(ITEM)
*/

const REQUEST = db.define('request', {
  request_id: COL_ITEM_ID,
  request_name: COL_ITEM_NAME,
  request_contact:{
    type: Sequelize.DataTypes.TEXT('tiny'),
    allowNull: false,
  },
  request_description: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: false,
  }
})

module.exports = {
  db,
  ADMIN,
  ITEM,
  REQUEST
 // REVIEW
}
