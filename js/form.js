const manageForm = () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', formSend)

    async function formSend(evt) {
        evt.preventDefault();
        // a place for validation
        let formData = new FormData(form);
        form.classList.add('wait');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            form.classList.remove('wait');
        } else {
            alert('error');
            form.classList.remove('wait');
        }
    }
}

export {manageForm}