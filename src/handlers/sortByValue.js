export function sortByValue() {
  const pairList = document.getElementById('pairList');
  const items = pairList.getElementsByClassName('pairItem');
  const itemsArray = Array.from(items);

  const sortedItemsArray = itemsArray.sort((a, b) => { // Sort the items by value
    const aText = a.textContent.split('=')[1];
    const bText = b.textContent.split('=')[1];

    return aText.localeCompare(bText);
  });

  pairList.innerHTML = '';
  sortedItemsArray.forEach((item) => {
    pairList.appendChild(item); // Append the sorted items to the pairList
  });
}
