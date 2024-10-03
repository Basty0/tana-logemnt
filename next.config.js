/** @type {import('next').NextConfig} */
const nextConfig = {
  // Autres configurations existantes
  reactStrictMode: true,

  // Ajoutez la configuration des images
  images: {
    domains: ["picxwzsggoitbmzksett.supabase.co"],
  },
};

module.exports = nextConfig;
