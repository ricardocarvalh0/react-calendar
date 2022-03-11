module.exports = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.graphql$/,
            type: 'asset/source',
        })
        return config;
    },
}
