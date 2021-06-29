
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = phase => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    BASE_URL: (() => {
      if (isDev) return process.env.BASE_URL;
      if (isProd) {
        return process.env.BASE_URL;
      }
      if (isStaging) return process.env.BACKEND_URL;
    })(),
    BACKEND_URL: (() => {
      if (isDev) return process.env.BACKEND_URL;
      if (isProd) {
        return process.env.BACKEND_URL;
      }
      if (isStaging) return process.env.BACKEND_URL;
    })(),
  };

  // next.config.js object
  return {
    target: 'serverless',
    publicRuntimeConfig: {
      // Will be available on both server and client
      BACKEND_URL: process.env.BACKEND_URL || '',
    },
    env,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules = config.module.rules.concat(
        [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpeg$/, /\.jpg$/, /\.png$/,  /\.svg$/, /\.mov$/],
            loader: require.resolve("url-loader")
          },
          {
            test: [/\.txt$/i, /\.md$/],
            use: 'raw-loader',
          },
        ]
      );
    
      return config;
    },
  };
};