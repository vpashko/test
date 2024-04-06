export function addPair() {
  const pairInput = document.getElementById('pairInput');
  const pair = pairInput.value;

  const checkExpression = /^[a-zA-Z0-9]+=[a-zA-Z0-9]+$/; // Only allow letters and numbers split by an equals sign

  if (!checkExpression.test(pair)) {
    alert('Invalid input. Please enter a pair in the format of key=value using only letters and numbers.');
    return;
  }

  const li = document.createElement('li'); // Create a new list item
  li.textContent = pair; // Set the text content of the list item to the pair
  li.className = 'pairItem'; // Add the class pairItem to the list item

  const pairList = document.getElementById('pairList');
  pairList.appendChild(li); // Append the list item to the pairList

  pairInput.value = ''; // Clear the input field
}
