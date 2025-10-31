const robotp = document.querySelector(".robotp");
const senp = document.querySelector(".senp");
const rtas = document.querySelector(".tas");
const rkagit = document.querySelector(".kagit");
const rmakas = document.querySelector(".makas");
const stas = document.querySelector(".tas2");
const skagit = document.querySelector(".kagit2");
const smakas = document.querySelector(".makas2");
const btn = document.querySelector(".submit");
const select = document.querySelector(".select");
const sonuc = document.querySelector(".sonuc");

let kullanicisecimi = "";
let robotpuan = 0;
let senpuan = 0;

// seçim değiştiğinde güncelle
select.addEventListener("change", () => {
  kullanicisecimi = select.value;
  console.log("Kullanıcı seçimi:", kullanicisecimi);
});

// Başlat butonuna basıldığında
btn.addEventListener("click", () => {
  if (!kullanicisecimi) {
    alert("Lütfen bir seçim yap!");
    return;
  }

  // Eski aktifleri temizle
  [rtas, rkagit, rmakas, stas, skagit, smakas].forEach(el => el.classList.remove("active"));

  // Robot rastgele seçim yapar
  const secenekler = ["tas", "kagit", "makas"];
  const robotsecimi = secenekler[Math.floor(Math.random() * 3)];

  // Görselleri göster
  if (robotsecimi === "tas") rtas.classList.add("active");
  if (robotsecimi === "kagit") rkagit.classList.add("active");
  if (robotsecimi === "makas") rmakas.classList.add("active");

  if (kullanicisecimi === "tas") stas.classList.add("active");
  if (kullanicisecimi === "kagit") skagit.classList.add("active");
  if (kullanicisecimi === "makas") smakas.classList.add("active");

  // Kazananı belirle
  let sonucYazisi = "";

  if (kullanicisecimi === robotsecimi) {
    sonucYazisi = "Draw!";
  } else if (
    (kullanicisecimi === "tas" && robotsecimi === "makas") ||
    (kullanicisecimi === "makas" && robotsecimi === "kagit") ||
    (kullanicisecimi === "kagit" && robotsecimi === "tas")
  ) {
    sonucYazisi = "You won! 🎉";
    senpuan++;
  } else {
    sonucYazisi = "You lost 😢";
    robotpuan++;
  }

  sonuc.textContent = sonucYazisi;
  robotp.textContent = robotpuan;
  senp.textContent = senpuan;

  console.log("Robot:", robotsecimi, "| Sen:", kullanicisecimi);
});
