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

function handleText(textNode) {
  var names = [
    'the short-fingered vulgarian',
    'Comrade Trump',
    'the American experiment at the diminutive paws',
    'an aggrieved social-media manager',
    'a beleaguered L.P.G.A. enthusiast',
    "the Wendy's aficionado",
    'poor woebegone D.J. Trump',
    'our amateur crisis communications manager',
    'the aggrieved Vladimir Putin frenemy',
    'the Boy Scout lover',
    'the forsaken Anthony Scaramucci supporter',
    'the vowed ice cream lover',
    'the amateur policing expert',
    'the forsaken Jeff Sessions comrade',
    "the forlorn ladies' golf aficionado and jilted Jeff Sessions comrade",
    'the "master fracker" who thinks health insurance costs $12 per year',
    'the voracious ice-cream eater',
    'the aggrieved primogeniture victim',
    'the aggrieved food-and-beverage proprietor'
  ];

  var randomNameIndex = Math.floor(Math.random() * names.length);
  var replacementName = names[randomNameIndex];
  var text = textNode.nodeValue;

  text = text.replace(/President\sDonald\sTrump/gi, replacementName);
  text = text.replace(/President\sDonald\sJ\.\sTrump/gi, replacementName);
  text = text.replace(/Donald\sJ\.\sTrump/gi, replacementName);
  text = text.replace(/Donald\sTrump/gi, replacementName);
  text = text.replace(/President\sTrump/gi, replacementName);
  text = text.replace(
    /the\spresident\sof\sthe\sUnited\sStates/gi,
    replacementName
  );
  text = text.replace(
    /the\spresident\sof\sthe\sUnited\sStates\sof\sAmerica/gi,
    replacementName
  );
  text = text.replace(/the\spresident\sof\sthe\sU\.S\./gi, replacementName);
  text = text.replace(/the\spresident\sof\sthe\sU\.S\.A\./gi, replacementName);
  text = text.replace(/the\sAmerican\spresident/gi, replacementName);
  text = text.replace(/the\sU\.S\.\spresident/gi, replacementName);
  text = text.replace(/Mr\.\sTrump/gi, replacementName);

  textNode.nodeValue = text;
}
