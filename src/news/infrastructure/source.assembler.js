import {LogoApi} from "../../shared/infrastructure/logo-api.js";

import {Source} from "../domain/model/source.entity.js";
const logoApi = new LogoApi();

export class SourceAssembler{
    static toEntityFromResource(resource){
        let source=new Source({resource});
        source.urlToLogo = source.url && source.url !== ''
        ? logoApi.getUrlToLogo(source)
            : '';
            return source;
    }
    static toEntitiesFromResponse(response){
        if(response.data.status !== 'ok'){
            console.log(`${response.status},${response.data.code},${response.data.message}`);
            return [];
        }
        const sourcesResponse = response.data;
        return sourcesResponse.sources.map(source => this.toEntityFromResource(source));
    }
}