export function sortByKey() {
  const pairList = document.getElementById('pairList');
  const items = pairList.getElementsByClassName('pairItem');
  const itemsArray = Array.from(items);

  const sortedItemsArray = itemsArray.sort((a, b) => { // Sort the items by key
    const aText = a.textContent.split('=')[0];
    const bText = b.textContent.split('=')[0]; 

    return aText.localeCompare(bText); // Compare the keys
  });

  pairList.innerHTML = ''; // Clear the pairList
  sortedItemsArray.forEach((item) => {
    pairList.appendChild(item); // Append the sorted items to the pairList
  });
}
