const checkbox = document.getElementById("checkbox");

// Fungsi untuk menerapkan mode gelap saat halaman dimuat
function applyDarkMode() {
  if (localStorage.getItem("darkMode") === "enabled") {
    checkbox.checked = true;
    document.body.classList.add("dark");
  } else {
    checkbox.checked = false;
    document.body.classList.remove("dark");
  }
}

// Jalankan fungsi saat halaman dimuat
window.addEventListener("load", applyDarkMode);

// Event listener untuk checkbox
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled"); // Simpan status mode gelap
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled"); // Simpan status mode terang
  }
});

const inputType = () => {
  let fullname = document.getElementById("fname").value
  let email = document.getElementById("email").value
  let messege = document.getElementById("messege").value
  console.log(fullname)
}
