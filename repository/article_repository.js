var knex=require("../config/config");
module.exports={
    get_articles:async function(){
        var list_article=await knex("article")
        .join("users","article.user_id","=","users.id")
        .select("article.*","users.name","users.avatar",);
        return list_article;
    },
    search_articles:async function(keyword){
        var list_article=await knex("article")
        .join("users","article.user_id","=","users.id")
        .select("article.*","users.name","users.avatar",).where("article.title","LIKE","%"+keyword+"%");
        return list_article;
    }
}