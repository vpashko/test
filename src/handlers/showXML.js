export function showXML() {
  const pairList = document.getElementById("pairList");
  const items = pairList.getElementsByClassName("pairItem");
  const xmlBlock = document.getElementsByClassName("xml-block");
  const xmlOutput = document.getElementById("xmlOutput");

  if (items.length === 0) { // If there are no items
    xmlOutput.textContent = ''; // Clear the text content of the xmlOutput
    return;
  }

  let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<pairs>\n'; // Create the XML string

  for (let i = 0; i < items.length; i++) { 
    const key = items[i].textContent.split('=')[0]; // Split the text content of the item by the equals sign
    const value = items[i].textContent.split('=')[1]; // Get the key and value from the split text content

    xmlString += '\t<pair>\n' 
      + '\t\t<key>' + key + '</key>\n' +
      '\t\t<value>' + value + '</value>\n' +
      '\t</pair>\n'; // Add the key and value to the XML string
  } 

  xmlString += '</pairs>'; // Close the pairs tag

  xmlOutput.textContent = xmlString; // Set the text content of the xmlOutput to the XML string

  xmlBlock[0].style.display = 'flex'; // Show the XML block
}
