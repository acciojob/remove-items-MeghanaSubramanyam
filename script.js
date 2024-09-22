//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    const select = document.getElementById('colorSelect');
    const selectedIndex = select.selectedIndex;

    // Check if an option is selected
    if (selectedIndex !== -1) {
        select.remove(selectedIndex); // Remove the selected option
    }
});
