// btn-byNow
const btn_byNow = document.querySelector('#btn-byNow');
const btn_byNow_loading = document.querySelector('#btn_byNow_loading');


btn_byNow.addEventListener('click', () => {
    btn_byNow.classList.add('btn-icon-loading');
    btn_byNow_loading.classList.remove('btn-icon-loading');
    setTimeout(function () {
        btn_byNow_loading.classList.add('btn-icon-loading');
        btn_byNow.classList.remove('btn-icon-loading');
    }, 5000)
})