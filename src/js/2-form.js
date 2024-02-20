const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
function readFormData(form) {
    const inputEmail = form.email.value.trim('');
    const message = form.message.value.trim('');
    return {
        inputEmail,
        message
    }
}
form.addEventListener('input', (event) => {
    event.preventDefault();
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, jsonData);
}
)
const rowData = localStorage.getItem(STORAGE_KEY)
if (rowData) {
    const data = JSON.parse(rowData);
    form.email.value = data.email;
    form.message.value = data.message;
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    console.log(event.email);
    console.log(event.message);
})