import {Article} from "../domain/model/article.entity.js";

export class ArticleAssembler {
    static source = null;
    static withSource(source){
        this.source = source;
        return this;
    }
    static toEntitiesFromResponse(response){
        if(response.data.status !== 'ok'){
            console.error(`${response.data.status}, ${response.data.code},${response.data.message}`);
            return [];
        }
        const articleResponse = response.data;
        return articleResponse['articles'].map(article => this.toEntityFromResource(article));
    }

    static toEntityFromResource(resource){
        let article = new Article(resource);
        article.source = this.source && this.source.id === resource.source.id ? this.source : SourceAssembler.toEntityFromResource(resource,source);
        return article;
    }
}