//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withNx} = require('@nx/next/plugins/with-nx')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  publicRuntimeConfig: {
    env: {
      API_URL: process.env.API_URL || ''
    }
  },
  compiler: {
    emotion: true
  }
}

module.exports = withNx(nextConfig)
