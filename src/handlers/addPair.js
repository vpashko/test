export function addPair() {
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
