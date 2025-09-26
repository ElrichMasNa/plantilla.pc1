const logoApiURL= import.meta.env.VITE_LOGO_API_URL;

export class LogoApi {
    getUrlToLogo(source){
        return `${logoApiURL}${new URL(source.url).hostname}`;
    }
}