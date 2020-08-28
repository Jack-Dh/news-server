import db from "../config/db"

//引入数据莫模型
const NewsListTitle = db.import('../shema/newsList');
const NewsListContent = db.import('../shema/newsListContent')
NewsListTitle.sync({ force: false, alter: true }); //自动创建表
NewsListContent.sync({ force: false, alter: true }); //自动创建表
export default class operation {
    //插入数据
    static async insert(data) {
        try {
            for (const iterator of data) {
                let imgUrl
                if (iterator.imgUrl) {
                    iterator.imgUrl.forEach((item, index) => {
                        index < iterator.imgUrl.length - 1 ? imgUrl += item + ',' : imgUrl += item
                    })
                }
                //文章标题
                await NewsListTitle.create({
                        title: iterator.title,
                    })
                    //文章内容
                await NewsListContent.create({
                    title: iterator.title,
                    content: iterator.content,
                    imgUrl: imgUrl
                })
            }
            return "获取成功"
        } catch (error) {
            throw Error(error)
        }
    }

    //查询文章标题
    static async queryTitle() {
        try {
            return await NewsListTitle.findAll()
        } catch (error) {
            throw Error(error)
        }
    }

    //查询文章内容
    static async queryContent(id) {
        try {
            if (id) {
                return await NewsListContent.findAll({
                    where: {
                        id: id,
                    }
                })
            }

        } catch (error) {
            throw Error(error)
        }
    }
}