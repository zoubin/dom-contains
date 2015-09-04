var bruteContains = require('./bruteContains');
var supportsContainsTextNode = require('./supportsContainsTextNode');

module.exports = function(element, needle) {
  if (!needle || !element || !needle.nodeType || !element.nodeType) {
    return false;
  }
  if (element.contains &&
    // IE < 8 throws on node.contains(textNode) so fall back to brute.
    // Falling back for other nodeTypes as well.
    (needle.nodeType === 1 || supportsContainsTextNode)) {
    return element.contains(needle);
  }

  if (element.compareDocumentPosition) {
    // Match contains behavior (node.contains(node) === true).
    // Needed for Firefox < 4.
    return element === needle ||
      !!(element.compareDocumentPosition(needle) & 16);
  }

  return bruteContains(element, needle);
};
