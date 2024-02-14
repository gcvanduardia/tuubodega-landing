const SEARCH_CONTAINER_SELECTOR = '.search-container';
const SEARCH_CONTAINER2_SELECTOR = '.search-container2';
const SEARCH_CONTAINER3_SELECTOR = '.search-container3';
const SEARCH_BUTTON_SELECTOR = '.search-button';
const SEARCH_INPUT_SELECTOR = '.search-input';

document.querySelector(SEARCH_CONTAINER_SELECTOR).classList.add('visible');

function search(inputElement) {
    const inputValue = inputElement.value;
    const url = 'https://app.tuubodega.com/search/' + encodeURIComponent(inputValue);
    window.location.href = url;
}

function updateSearchContainersVisibility() {
    const searchContainer = document.querySelector(SEARCH_CONTAINER_SELECTOR);
    const searchContainer2 = document.querySelector(SEARCH_CONTAINER2_SELECTOR);
    const searchContainer3 = document.querySelector(SEARCH_CONTAINER3_SELECTOR);
    const rect = searchContainer.getBoundingClientRect();

    if (rect.top < 0 || rect.bottom > window.innerHeight) {
        searchContainer2.style.opacity = '1';
        searchContainer3.style.opacity = '1';
    } else {
        searchContainer2.style.opacity = '0';
        searchContainer3.style.opacity = '0';
    }
}

const searchButtons = document.querySelectorAll(SEARCH_BUTTON_SELECTOR);
const searchInputs = document.querySelectorAll(SEARCH_INPUT_SELECTOR);

searchButtons.forEach((button, index) => {
    button.addEventListener('click', () => search(searchInputs[index]));
});

searchInputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            search(input);
        }
    });

    input.addEventListener('input', () => {
        const value = input.value;
        searchInputs.forEach((otherInput, otherIndex) => {
            if (otherIndex !== index) {
                otherInput.value = value;
            }
        });
    });
});

// Initial visibility check
updateSearchContainersVisibility();

window.addEventListener('scroll', updateSearchContainersVisibility);