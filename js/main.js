document.addEventListener('DOMContentLoaded', function() {
    const filterModal = document.getElementById('filterModal');
    const filterIcon = document.getElementById('filterIcon');
    const closeModal = document.getElementById('closeModal');
    
    // Initially, ensure modal is hidden on page load
    filterModal.style.display = 'none';
  
    // When the filter icon is clicked, show the filter modal
    filterIcon.addEventListener('click', function() {
      filterModal.style.display = 'flex'; // Show the modal
    });
  
    // When the close button (×) is clicked, hide the filter modal
    closeModal.addEventListener('click', function() {
      filterModal.style.display = 'none'; // Hide the modal
    });
  
    // Close the filter modal if the user clicks anywhere outside the modal content
    window.addEventListener('click', function(event) {
      if (event.target === filterModal) {
        filterModal.style.display = 'none'; // Hide the modal
      }
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('id-number'); // Target the search bar
  const originalTable = document.getElementById('data-table'); // Existing table
  const newTable = document.createElement('table'); // Create a new table dynamically
  newTable.id = 'new-data-table';
  newTable.innerHTML = `
    <thead>
      <tr>
        <th><b>დოკუმენტის ნომერი</b></th>
        <th><b>პირადი ნომერი</b></th>
        <th><b>სახელი</b></th>
        <th><b>გვარი</b></th>
        <th><b>რეგიონი</b></th>
        <th><b>ქალაქი</b></th>
        <th><b>სტატუსი</b></th>
        <th><b>გაცემის ტიპი</b></th>
        <th><b>კურიერი</b></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>12345678901</b></td>
        <td><b>60009999899</b></td>
        <td><b>ნიკა</b></td>
        <td><b>კვარაცხელია</b></td>
        <td><b>აჭარა</b></td>
        <td><b>ბათუმი</b></td>
        <td><b>სტუდენტი</b></td>
        <td><b>ფოსტა</b></td>
        <td><b>კურიერი 2</b></td>
      </tr>
    </tbody>
  `;
  newTable.style.display = 'none'; // Hide the table initially
  newTable.style.fontWeight = 'bold'; // Apply bold styling

  // Append the new table to the page
  originalTable.parentElement.appendChild(newTable);

  // Add event listener to search bar
  searchBar.addEventListener('click', function () {
      // Show the new table and hide the old one
      originalTable.style.display = 'none';
      newTable.style.display = 'table';
  });
});




