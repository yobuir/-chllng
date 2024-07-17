/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    crossOrigin: 'anonymous',
    images: {
        domains: ['res.cloudinary.com', 'example.com','picsum.photos'],
    },
};

export default nextConfig;
