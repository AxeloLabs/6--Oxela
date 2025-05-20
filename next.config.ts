import {NextConfig} from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
})

const config: NextConfig = {
  images: {
    remotePatterns: [{hostname: 'firebasestorage.googleapis.com'}, {hostname: 'rstr.in'}]
  }
}

export default withNextIntl(config)
