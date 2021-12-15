module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['themes/Arsha/layouts/**/*.html'],
      safelist: [
        'canvas',
        'header-scrolled'
      ]
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
};