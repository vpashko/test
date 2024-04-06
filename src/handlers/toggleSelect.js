export function toggleSelect(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('selected');
  }
}
