function openModal(imageSrc, captionText) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");

    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalCaption.textContent = captionText;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
