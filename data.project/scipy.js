// JavaScript สำหรับ Dropdown
function toggleDropdown() {
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// ปิด dropdown ถ้าคลิกนอก
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}

// JavaScript สำหรับ Image Slider
let slideIndex = 1;

// Function สำหรับแสดงสไลด์
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// ควบคุมการแสดงสไลด์เมื่อกดปุ่ม Next/Previous
document.querySelector(".prev").addEventListener("click", () => showSlides(slideIndex -= 1));
document.querySelector(".next").addEventListener("click", () => showSlides(slideIndex += 1));

// ควบคุมการแสดงสไลด์เมื่อกดจุดบอกตำแหน่ง
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlides(slideIndex = index + 1));
});

// Function สำหรับการเลื่อนสไลด์อัตโนมัติ
function autoSlides() {
    showSlides(slideIndex += 1);
    setTimeout(autoSlides, 7000); // เลื่อนอัตโนมัติทุก ๆ - วินาที
}

// เรียกใช้ showSlides ครั้งแรกเมื่อหน้าเว็บโหลด
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    autoSlides(); // เริ่มการเลื่อนอัตโนมัติ
});