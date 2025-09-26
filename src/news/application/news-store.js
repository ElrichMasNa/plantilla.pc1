import {NewsApi} from "../infrastructure/news-api.js";
import {SourceAssembler} from "../infrastructure/source.assembler.js";
import {reactive} from "vue";
import {Article} from "../domain/model/article.entity.js";
import {ArticleAssembler} from "../infrastructure/article-assembler.js";

const newsApi = new NewsApi();

export const newsstore = reactive({
    source: [],
    article: [],
    errors: [],
    currentSource: null,
    setCurrentSource(source) {
        if(source instanceof Source) {
            this.currentSource = source;
            this.loadArticlesForCurrentSource();
        }
    },
    loadSources() {
        this.errors = [];
        newsApi.getSources().then(response => {this.sources = SourceAssembler.toEntitiesFromResponse(response);
        if(this.sources.length > 0) {
            this.setCurrentSource(this.sources[0]);
                this.loadArticlesForCurrentSource();
            }
        });
    },
    loadArticlesForCurrentSource(){
        if(this.currentSource == null)return;
        newsApi.getArticlesForSourceId(this.currentSource.id).then(response => {
            this.article = ArticleAssembler.withSource(this.currentSource).toEntitiesFromResponse(response);
        }).catch(error => {
            this.errors.push(error);
            this.articles = [];
        });
    }
});