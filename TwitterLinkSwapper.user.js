// ==UserScript==
// @name         Swap x.com copy link to fxtwitter
// @namespace    https://github.com/ReeceDonovan/TwitterLinkSwapper
// @version      1.0
// @description  Replace `x` to `fxtwitter` when clicking 'Copy Link'
// @author       ReeceDonovan
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @match        https://x.com/*
// @icon         https://abs.twimg.com/favicons/twitter.2.ico
// @license      BSD-3-Clause
// ==/UserScript==

(function () {
  "use strict";

  // Listener for copy events
  document.addEventListener("copy", (event) => {
    let selectedText = event.target.innerText;
    if (isValidTwitterUrl(selectedText)) {
      replaceUrl(selectedText);
    }
  });

  // Validate if the text is a valid Twitter URL
  function isValidTwitterUrl(url) {
    const urlRegex = /^https:\/\/(www\.)?(twitter|x)\.com\/.+\/status\/\d+/;
    return urlRegex.test(url);
  }

  // Replace the domain part of the Twitter URL with 'fxtwitter'
  function replaceUrl(originalUrl) {
    try {
      let newUrl = originalUrl.replace(/(twitter|x)\.com/, "fxtwitter.com");
      navigator.clipboard.writeText(newUrl);
    } catch (error) {
      console.error("Error replacing URL:", error);
    }
  }
})();
