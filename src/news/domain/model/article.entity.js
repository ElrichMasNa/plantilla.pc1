export class Article {
    constructor({
        tittle= '',
        description = '',
        url = '',
        urlToImage = '',
        source = null,
        publishedAT  = '',}) {
        this.tittle = tittle;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source) : null;
        this.publishedAT = new Date(publishedAT);
    }
    getFormattedPublisheadAT(){
        return this.publishedAT.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        });
    }
}