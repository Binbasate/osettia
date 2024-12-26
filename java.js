document.addEventListener("DOMContentLoaded", () => {
    const heroImage = document.getElementById("heroImage"); // Büyük resim elementi
    const thumbnails = document.querySelectorAll(".thumbnail"); // Tüm küçük resimleri seç

    // Her küçük resme fareyle üzerine gelindiğinde bir olay ekle
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("mouseover", () => {
            const largeImage = thumbnail.getAttribute("data-large"); // Büyük resim URL'sini al
            heroImage.setAttribute("src", largeImage); // Ana resmi değiştir
        });
    });
});
