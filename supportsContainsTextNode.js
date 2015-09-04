
// IE < 8 throws on node.contains(textNode)
module.exports = (function() {
  var node = document.createElement('div');
  var textNode = node.appendChild(document.createTextNode(''));
  var result = false;

  try {
    result = node.contains(textNode);
  } catch(e) {}

  return result;
})();
