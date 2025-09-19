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
