// Function to calculate the choice mark
function calculateChoiceMarks() {
    const totalDepartments = 20;  // total number of departments
    const ND = totalDepartments;
    const R = document.querySelectorAll('.dept:checked').length;

    for (let i = 1; i <= ND; i++) {
        const deptCheckbox = document.getElementById('dept' + i);
        const choiceSpan = document.getElementById('choice' + i);

        if (deptCheckbox.checked) {
            const choiceMark = 30 * (1 - ((R - 1) / (ND - 1)));
            choiceSpan.textContent = `Choice Mark: ${choiceMark.toFixed(2)}`;
        } else {
            choiceSpan.textContent = '';
        }
    }
}

// Function to submit the form
function submitForm() {
    // Process form data and calculate any necessary details
    alert('Form submitted');
}

// Function to cancel the form
function cancelForm() {
    // Reset the form
    document.getElementById('selection-form').reset();
}
