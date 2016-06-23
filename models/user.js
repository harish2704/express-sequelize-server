var baseModelDef = require( './base-model' );
var modelUtils = require( './utils' );
var ModelDef = modelUtils.ModelDef;
var Sequelize = require( 'sequelize' );

var Category = new ModelDef(
  'User',
  {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    profilePic: Sequelize.STRING,
  },
  {
    getterMethods:{

    },
    setterMethods:{

    },
    hooks:{

    },
    classMethods:{
      associate: function( models ) {

      },
    }
  }
);


module.exports = modelUtils.extend( baseModelDef, Category );


