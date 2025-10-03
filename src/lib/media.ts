import type {PluginUploadFileDocument} from "~/lib/client";

export function buildMediaUrl(media: PluginUploadFileDocument): string | null {
    if (!media?.url) {
        return null;
    }

    if (media.url.startsWith("http")) {
        return media.url;
    }

    return `${import.meta.env.STRAPI_URL}${media.url}`;
}
