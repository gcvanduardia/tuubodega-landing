document.querySelector('.search-container').classList.add('visible');

function search() {
    var inputValue = document.querySelector('.search-input').value;
    var url = 'https://app.tuubodega.com/search/' + encodeURIComponent(inputValue);
    window.location.href = url;
}

document.querySelector('.search-button').addEventListener('click', search);

document.querySelector('.search-input').addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        search();
    }
});