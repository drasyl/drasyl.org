module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['themes/Arsha/layouts/**/*.html'],
      safelist: [
        'canvas',
        'header-scrolled',
        'navbar-mobile',
        'single-blog',
        'list-blog',
        'list-tag',
        'blockquote'
      ]
    },
    autoprefixer: {},
    cssnano: { preset: 'default' }
  }
};