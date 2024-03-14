
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 最新のNext.jsではこの設定は必要ないかもしれません
    images: {
      unoptimized: true, // 画像最適化を無効にする
    },
  };
  
  export default nextConfig;
  