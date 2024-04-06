export function deleteSelected() {
  const pairList = document.getElementById('pairList');
  const selectedItems = pairList.getElementsByClassName('selected');

  while (selectedItems.length > 0) { // While there are selected items
    pairList.removeChild(selectedItems[0]); // Remove the first selected item
  }
}
