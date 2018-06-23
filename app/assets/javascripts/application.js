// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

var org = require("org");

var parser = new org.Parser();
var orgDocument = parser.parse(orgCode);
var orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
  headerOffset: 1,
  exportFromLineNumber: false,
  suppressSubScriptHandling: false,
  suppressAutoLink: false
});

console.dir(orgHTMLDocument); // => { title, contentHTML, tocHTML, toc }
console.log(orgHTMLDocument.toString()) // => Rendered HTML
