/** @type {import('next').NextConfig} */


module.exports = {
  images: {
    reactStrictMode: true,
    loader: 'cloudinary',
    path:'https://bayut-production.s3.eu-central-1.amazonaws.com'
  },
}

//https://bayut-production.s3.eu-central-1.amazonaws.com/image/170358636/fac7e5430f524b50833b46f0240c2cfa