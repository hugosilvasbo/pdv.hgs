export type TypeImages = "detail" | "client" | "seller" | "product" | "";

export function GetBootstrapImgFromTypeImages(type: TypeImages) {
    switch (type) {
        case "client": {
            return "fas fa-user";
        }
        case "detail": {
            return "fas fa-sitemap";
        }
        case "seller": {
            return "fas fa-user-tie";
        }
        case "product": {
            return "fas fa-bookmark";
        }
    }
}