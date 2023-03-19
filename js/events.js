document.getElementById('delete-btn').addEventListener('click', function () {
    const text = document.getElementById('delete-text');
    text.style.display = 'none';
})

document.getElementById('input-box').addEventListener('keyup', function (event) {
    const textconfirm = event.target.value;
    // console.log(textconfirm);
    if (textconfirm === 'delete') {
        document.getElementById('delete-btn').removeAttribute('disabled')
    }
    else {
        document.getElementById('delete-btn').setAttribute('disabled', true)
    }
})