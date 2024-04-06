export function copyXML() {
  const xmlOutput = document.getElementById("xmlOutput"); 
  const range = document.createRange();
  range.selectNode(xmlOutput);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range); 
  document.execCommand("copy"); // Copy the text to the clipboard
  window.getSelection().removeAllRanges(); 
}
