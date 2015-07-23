var metalsmith = require('metalsmith');
var templates = require('metalsmith-templates');
var markdown = require('metalsmith-markdown');
var suit = require('metalsmith-suitcss');
var fingerprint = require('metalsmith-fingerprint');
var asset = require('metalsmith-assets');
var htmlMinifier = require("metalsmith-html-minifier");
var cleanCSS = require('metalsmith-clean-css');



metalsmith(__dirname)
  .source('source')
  .destination('build')
  .use(markdown({
    gfm: true
  }))
  .use(htmlMinifier())
  .use(suit())
  .use(cleanCSS())
  .use(fingerprint({
    pattern: '*.css'
  }))
  .use(templates({
    engine: 'jade',
    directory: 'templates'
  }))
  .use(asset())
  .build(function (err) {
    if (err) throw err;
  });