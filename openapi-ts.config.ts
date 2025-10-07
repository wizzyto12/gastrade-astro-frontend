import {defineConfig} from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'http://127.0.0.1:1337/openapi.json',
    output: {
        path: 'src/lib/client',
        format: null,
        lint: null
    },
    plugins: [
        {
            name: '@hey-api/client-fetch',
            runtimeConfigPath: './src/lib/strapi.ts',
        },
    ],
});
