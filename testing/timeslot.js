document.addEventListener('DOMContentLoaded', () => {
  const slots = document.querySelectorAll('.slot');
  const selectedTime = document.getElementById('selectedTime');

  slots.forEach(slot => {
    slot.addEventListener('click', () => {
      // Remove previous selection
      slots.forEach(s => s.classList.remove('selected'));

      // Select clicked slot
      slot.classList.add('selected');

      // Show selected time
      selectedTime.textContent = slot.dataset.time;
    });
  });
});
