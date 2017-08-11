walk(document.body);

function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragement
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
    default:
      break;
  }
}

const MR_PRESIDENT = 'Short Fingered Vulgarian';

function handleText(textNode) {
  var text = textNode.nodeValue;

  text = text.replace(/TRUMP/gi, MR_PRESIDENT);
  text = text.replace(/Trump/gi, MR_PRESIDENT);
  text = text.replace(/trump/gi, MR_PRESIDENT);
  text = text.replace(/\btrump\b/gi, MR_PRESIDENT);

  textNode.nodeValue = text;
}
