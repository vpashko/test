function addPair() {
  const pairInput = document.getElementById('pairInput');
  const pair = pairInput.value;

  const checkExpression = /^[a-zA-Z0-9]+=[a-zA-Z0-9]+$/;

  if (!checkExpression.test(pair)) {
    alert('Invalid input. Please enter a pair in the format of key=value using only letters and numbers.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = pair;
  li.className = 'pairItem';

  const pairList = document.getElementById('pairList');
  pairList.appendChild(li);

  pairInput.value = '';
}

function sortByKey() {
  const pairList = document.getElementById('pairList');
  const items = pairList.getElementsByClassName('pairItem');
  const itemsArray = Array.from(items);

  const sortedItemsArray = itemsArray.sort((a, b) => {
    const aText = a.textContent.split('=')[0];
    const bText = b.textContent.split('=')[0];

    return aText.localeCompare(bText);
  });

  pairList.innerHTML = '';
  sortedItemsArray.forEach((item) => {
    pairList.appendChild(item);
  });
}

function sortByValue() {
  const pairList = document.getElementById('pairList');
  const items = pairList.getElementsByClassName('pairItem');
  const itemsArray = Array.from(items);

  const sortedItemsArray = itemsArray.sort((a, b) => {
    const aText = a.textContent.split('=')[1];
    const bText = b.textContent.split('=')[1];

    return aText.localeCompare(bText);
  });

  pairList.innerHTML = '';
  sortedItemsArray.forEach((item) => {
    pairList.appendChild(item);
  });
}

function toggleSelect(event) {
  if (event.target.tagName === 'LI') {
      event.target.classList.toggle('selected');
  }
}

function deleteSelected() {
  const pairList = document.getElementById('pairList');
  const selectedItems = pairList.getElementsByClassName('selected');

  while (selectedItems.length > 0) {
    pairList.removeChild(selectedItems[0]);
  }
}

function showXML() {
  const pairList = document.getElementById("pairList");
  const items = pairList.getElementsByTagName("LI");
  const xmlOutput = document.getElementById("xmlOutput");
  const xmlActions = document.getElementById("xmlActions");

  if (items.length === 0) {
    xmlOutput.textContent = '';
    xmlActions.style.display = 'none';
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

  xmlOutput.style.whiteSpace = 'pre';
  xmlOutput.textContent = xmlString;

  xmlActions.style.display = 'flex';
}

function copyXML() {
  const xmlOutput = document.getElementById("xmlOutput");
  const range = document.createRange();
  range.selectNode(xmlOutput);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function hideXML() {
  const xmlOutput = document.getElementById("xmlOutput");
  const xmlActions = document.getElementById("xmlActions");

  xmlOutput.textContent = '';
  xmlActions.style.display = 'none';
}