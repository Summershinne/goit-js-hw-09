const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
function readFormData(form) {
    const inputEmail = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email: inputEmail,
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
    if (data.email !== undefined) {
        form.email.value = data.email;
        form.message.value = data.message;
    }
}
form.addEventListener('submit', (event) => {
    event.preventDefault();
const data = readFormData(event.currentTarget);
        if (data.email && data.message) {
        console.log(data);
    }
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
   
})