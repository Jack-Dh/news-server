//文章内容表模型
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('news_list_content', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //文章标题
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        //内容
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'content'
        }, //内容
        imgUrl: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'imgUrl'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE
        }
    })
}