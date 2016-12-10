console.log ("---------- wordcount.js ----------");

// Source of Method: http://stackoverflow.com/questions/9864644/jquery-character-and-word-count

// var blogpost = $('.rte p').text(),
// 	charCount=blogpost.length,
// 	wordCount=blogpost.replace( /[^\w]/g, "").split(/\s+/).length;

// Source of Method:http://stackoverflow.com/questions/8752853/how-to-count-words-in-javascript-using-jquery

var blogpost = $('.rte p');

// var charCount = blogpost.val();
// console.log("Number of charactes in blog post: " + charCount);

// var wordCount = charCount.split(' ');
// console.log("Number of words in blog post:" + wordCount);

// var wordCount = $('#name').val().replace(/^[\s,.;]+/, "").replace(/[\s,.;]+$/, "").split(/[\s,.;]+/).length;

// Source of method: https://css-tricks.ocm/set-font-size-based-on-word-count/

var wordCount = $quote.get('text').split(' ').length;

$('#wordcount').text(wordCount);