export function deleteSelected() {
  const pairList = document.getElementById('pairList');
  const selectedItems = pairList.getElementsByClassName('selected');

  while (selectedItems.length > 0) {
    pairList.removeChild(selectedItems[0]);
  }
}
