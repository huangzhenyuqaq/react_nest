module.exports = {
   devServer: {
      proxy: {
         '/api': {
            target: 'http://localhost:3003',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ''),
         },
      },
   }
}