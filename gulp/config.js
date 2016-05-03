module.exports = {
  css: {
    src: './src/css/app.css',
    dest: './dist/assets/',
    watch: './src/css/**/*.css'
  },
  js: {
    entries: ['./src/js/app.js'],
    dest: './dist/assets/',
    watch: './src/js/**/*.js'
  },
  nunjucks: {
    src: './src/templates/index.njk',
    dest: './dist/',
    watch: './src/templates/**/*.njk'
  }
};
