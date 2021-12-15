module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['themes/Arsha/layouts/**/*.html'],
      whitelist: [
        // 'highlight',
        // 'language-bash',
        // 'pre',
        // 'code',
        // 'content',
        // 'h3',
        // 'h4',
        // 'ul',
        // 'li',
        // 'canvas'
      ]
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
};