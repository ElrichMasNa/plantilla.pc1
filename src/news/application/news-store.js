import { reactive } from "vue";
import { NewsApi } from "../infrastructure/news-api.js";
import { SourceAssembler } from "../infrastructure/source.assembler.js";
import { Source } from "../domain/model/source.entity.js"; // 🔄 faltaba
import { ArticleAssembler } from "../infrastructure/article-assembler.js";

const newsApi = new NewsApi();

export const newsstore = reactive({
    sources: [],   // 🔄 corregido
    articles: [],  // 🔄 corregido
    errors: [],
    currentSource: null,

    setCurrentSource(source) {
        if (source instanceof Source) {
            this.currentSource = source;
            this.loadArticlesForCurrentSource();
        }
    },

    async loadSources() {
        this.errors = [];
        try {
            const response = await newsApi.getSources();
            this.sources = SourceAssembler.toEntitiesFromResponse(response);

            if (this.sources.length > 0) {
                this.setCurrentSource(this.sources[0]); // 🔄 ya carga artículos
            }
        } catch (error) {
            this.errors.push(error.message || "Error loading sources");
            this.sources = [];
        }
    },

    async loadArticlesForCurrentSource() {
        if (!this.currentSource) return;

        try {
            const response = await newsApi.getArticlesForSourceId(this.currentSource.id);
            this.articles = ArticleAssembler.withSource(this.currentSource)
                .toEntitiesFromResponse(response);
        } catch (error) {
            this.errors.push(error.message || "Error loading articles");
            this.articles = [];
        }
    },
});
