function toggleGuestList() {
  const guestList = document.getElementById('guest-list');
  guestList.classList.toggle('show');
}

function increment(type) {
  const countElement = document.getElementById(`${type}-count`);
  let count = parseInt(countElement.textContent);
  countElement.textContent = count + 1;
  updateGuestPlaceholder();
}

function decrement(type) {
  const countElement = document.getElementById(`${type}-count`);
  let count = parseInt(countElement.textContent);
  if (count > 0) {
      countElement.textContent = count - 1;
      updateGuestPlaceholder();
  }
}

function updateGuestPlaceholder() {
  const adultsCount = parseInt(document.getElementById('adults-count').textContent);
  const childrenCount = parseInt(document.getElementById('children-count').textContent);
  const infantsCount = parseInt(document.getElementById('infants-count').textContent);
  const totalGuests = adultsCount + childrenCount + infantsCount;
  const travelClass = document.getElementById('travel-class').value;
  const guestPlaceholder = document.getElementById('guest-placeholder');
  guestPlaceholder.textContent = `${totalGuests} Guest${totalGuests > 1 ? 's' : ''} ${travelClass}`;
}
