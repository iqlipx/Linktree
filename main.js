const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))



// -----------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const _shareButton = document.querySelector('.share-button');

    if (_shareButton) {
        _shareButton.addEventListener('click', function () {
            window.location.href = 'https://iqlip7.streamlit.app';
        });
    }
});
