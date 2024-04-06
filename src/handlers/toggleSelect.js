export function toggleSelect(event) {
  if (event.target.tagName === 'LI') { // If the clicked item is an LI
    event.target.classList.toggle('selected'); // Toggle the selected class on the clicked item
  }
}
