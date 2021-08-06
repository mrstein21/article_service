articleController=require('../controller/article_controller');
const router = require('express-promise-router')();

router.route("/").get(articleController.get_articles);
router.route("/search/:keyword").get(articleController.search_articles);
module.exports=router;