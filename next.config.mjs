/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                port: '',
                pathname: '/drive/u/1/folders/**',
            },
        ],
    },
};

export default nextConfig;
