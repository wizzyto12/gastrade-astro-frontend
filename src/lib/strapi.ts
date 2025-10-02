import {type CreateClientConfig} from './client/client.gen';
import qs from 'qs';

export const createClientConfig: CreateClientConfig = (config) => ({
    ...config,
    baseUrl: import.meta.env.STRAPI_URL + '/api',
    headers: {
        ...config?.headers,
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.STRAPI_API_TOKEN}`,
    },
    querySerializer(params) {
        return qs.stringify(params, {
            encodeValuesOnly: true, // prettify URL
        });
    },
});
