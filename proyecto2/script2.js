const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

function showPage(index) {
    pages.forEach((page, i) => {
        if (i === index) {
            page.style.display = 'flex';
        } else {
            page.style.display = 'none';
        }
    });
}

function showNextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        showPage(currentPageIndex);
    }
}

function showPreviousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        showPage(currentPageIndex);
    }
}

document.getElementById('prevButton').addEventListener('click', showPreviousPage);
document.getElementById('nextButton').addEventListener('click', showNextPage);

showPage(currentPageIndex);

// Para cargar la imagen de portada
const coverImageInput = document.getElementById('imageInput');
const coverImage = document.getElementById('coverImage');

coverImageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        coverImage.src = e.target.result;
    }
    reader.readAsDataURL(file);
});
onload = () =>{
    document.body.classList.remove("container");
};