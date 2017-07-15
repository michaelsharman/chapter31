;(function() {
    'use strict'

    function parseArticle () {
        var t = readingTime(
            document.getElementsByClassName('content')[0].innerText
        );

        var subtitle = document.getElementsByClassName('subtitle')[0];

        subtitle.innerHTML = subtitle.innerHTML + ' – ' + t.text;
    }

    parseArticle()

    return {};
}());
