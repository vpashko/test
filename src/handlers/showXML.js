export function showXML() {
  const pairList = document.getElementById("pairList");
  const items = pairList.getElementsByClassName("pairItem");
  const xmlBlock = document.getElementsByClassName("xml-block");
  const xmlOutput = document.getElementById("xmlOutput");

  if (items.length === 0) {
    xmlOutput.textContent = '';
    return;
  }

  let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<pairs>\n';

  for (let i = 0; i < items.length; i++) {
    const key = items[i].textContent.split('=')[0];
    const value = items[i].textContent.split('=')[1];

    xmlString += '\t<pair>\n'
      + '\t\t<key>' + key + '</key>\n' +
      '\t\t<value>' + value + '</value>\n' +
      '\t</pair>\n';
  }

  xmlString += '</pairs>';

  xmlOutput.textContent = xmlString;

  xmlBlock[0].style.display = 'flex';
}
