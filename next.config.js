/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'links.papereact.com'
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org'
            }
        ]
    }
}

module.exports = nextConfig
