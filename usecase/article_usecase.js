var articleRepository=require('../repository/article_repository');

module.exports={
    get_articles:async()=>{
        var article=await articleRepository.get_articles();
         return{
            "success":true,
            "data":article,
        } 
    },
    search_articles:async(keyword)=>{
        var article=await articleRepository.search_articles(keyword);
        return {
           "success":true,
           "data":article,
       }
    }
}