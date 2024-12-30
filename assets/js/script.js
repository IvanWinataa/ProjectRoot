// Membuat peta di elemen #map-container
const map = L.map("map-container").setView([-2.5489, 118.0149], 5); // Koordinat Indonesia

// Tambahkan tile layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Carousel
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});

// Tambahkan marker dengan popup budaya
const markers = [
  {
    coords: [-6.1751, 106.865], // Jakarta
    title: "Jakarta",
    content: "Budaya Betawi: Ondel-ondel, Tari Topeng Betawi",
  },
  {
    coords: [-7.7972, 110.3718], // Yogyakarta
    title: "Yogyakarta",
    content: "Budaya Jawa: Batik, Wayang Kulit, Gamelan",
  },
  {
    coords: [1.4554, 125.1903], // Manado
    title: "Manado",
    content: "Budaya Minahasa: Masakan Rica-rica, Musik Kolintang",
  },
  {
    coords: [-5.1719, 119.4321], // Makassar
    title: "Makassar",
    content: "Budaya Makassar: Coto Makassar, Paduppa Dg Ballo",
  },
  {
    coords: [-3.6236, 102.2165], // Padang
    title: "Padang",
    content: "Budaya Minangkabau: Rendang, Tari Piring",
  },
  {
    coords: [-6.9147, 107.6098], // Bandung
    title: "Bandung",
    content: "Budaya Sunda: Angklung, Wayang Golek",
  },
  {
    coords: [-6.2088, 106.8456], // Bogor
    title: "Bogor",
    content: "Budaya Sunda: Lengser, Wayang Kulit",
  },
  {
    coords: [-7.2575, 112.7521], // Surabaya
    title: "Surabaya",
    content: "Budaya Jawa Timur: Reog Ponorogo, Sate",
  },
  {
    coords: [-5.0361, 119.1721], // Palu
    title: "Palu",
    content: "Budaya Kaili: Tarian Mapalus, Ikan Bakar",
  },
  {
    coords: [-2.2129, 137.35], // Manokwari
    title: "Manokwari",
    content: "Budaya Papua: Tarian Cenderawasih, Masakan Papeda",
  },
  {
    coords: [-3.4229, 114.6763], // Pontianak
    title: "Pontianak",
    content: "Budaya Melayu: Nasi Campur, Tari Dayak",
  },
  {
    coords: [-4.6037, 122.6312], // Palangkaraya
    title: "Palangkaraya",
    content: "Budaya Dayak: Makanan Bakar Nyahok, Tarian Hudoq",
  },
  {
    coords: [-7.4654, 110.401], // Solo
    title: "Solo",
    content: "Budaya Jawa: Keris, Batik Solo",
  },
  {
    coords: [-3.7258, 104.975], // Jambi
    title: "Jambi",
    content: "Budaya Melayu Jambi: Kerupuk Kemplang, Tari Sekapur Sirih",
  },
  {
    coords: [-5.1384, 119.6091], // Banjarmasin
    title: "Banjarmasin",
    content: "Budaya Banjar: Songket, Tari Paduppa",
  },
  {
    coords: [-7.9575, 112.6306], // Malang
    title: "Malang",
    content: "Budaya Jawa Timur: Tari Remo, Pecel",
  },
  {
    coords: [-3.1751, 102.9552], // Bengkulu
    title: "Bengkulu",
    content: "Budaya Melayu: Kopi Bengkulu, Tari Gending Sriwijaya",
  },
  {
    coords: [-7.2502, 110.9205], // Semarang
    title: "Semarang",
    content: "Budaya Jawa: Nasi Ayam, Tari Gambyong",
  },
  {
    coords: [-6.3684, 106.7896], // Cirebon
    title: "Cirebon",
    content: "Budaya Jawa Barat: Keris Cirebon, Wayang Kulit",
  },
  {
    coords: [-5.0719, 119.4413], // Palopo
    title: "Palopo",
    content: "Budaya Luwu: Musik Panting, Tari Laggai",
  },
  // Tambahan marker untuk Bali
  {
    coords: [-8.3405, 115.092], // Denpasar
    title: "Denpasar",
    content: "Budaya Bali: Tari Kecak, Pura Besakih",
  },
  {
    coords: [-8.5731, 115.147], // Ubud
    title: "Ubud",
    content: "Budaya Bali: Tari Barong, Seni Lukis",
  },
  {
    coords: [-8.6581, 115.219], // Kuta
    title: "Kuta",
    content: "Budaya Bali: Pantai Kuta, Tari Legong",
  },
  {
    coords: [-8.5081, 115.168], // Gianyar
    title: "Gianyar",
    content: "Budaya Bali: Kesenian Janger, Tari Pendet",
  },
  {
    coords: [-8.571, 115.206], // Seminyak
    title: "Seminyak",
    content: "Budaya Bali: Pantai Seminyak, Tari Puspanjali",
  },
  {
    coords: [-8.3333, 115.3873], // Singaraja
    title: "Singaraja",
    content: "Budaya Bali: Kesenian Bleganjur, Tari Rejang",
  },
  {
    coords: [-8.5125, 115.1595], // Tabanan
    title: "Tabanan",
    content: "Budaya Bali: Tari Topeng, Batik Tabanan",
  },
  {
    coords: [-8.5079, 115.1558], // Negara
    title: "Negara",
    content: "Budaya Bali: Tari Seudati, Masakan Babi Guling",
  },
  {
    coords: [-8.5855, 115.1565], // Denpasar
    title: "Denpasar",
    content: "Budaya Bali: Tari Gambyong, Pura Ulun Danu Bratan",
  },
  {
    coords: [-8.6705, 115.2175], // Ubud
    title: "Ubud",
    content: "Budaya Bali: Kesenian Wayang Kulit, Tari Cerana",
  },
];

// Tambahkan marker ke peta
markers.forEach((marker) => {
  L.marker(marker.coords).addTo(map).bindPopup(`<b>${marker.title}</b><br>${marker.content}`);
});

// Fungsi Text-to-Speech
function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "id-ID"; // Bahasa Indonesia
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Browser tidak mendukung fitur Text-to-Speech.");
  }
}

// Tambahkan TTS pada klik marker
markers.forEach((marker) => {
  L.marker(marker.coords)
    .addTo(map)
    .bindPopup(`<b>${marker.title}</b><br>${marker.content}`)
    .on("click", () => speakText(marker.content)); // TTS berjalan saat marker diklik
});

// Blur wilayah
const children = document.querySelectorAll(".child");
const bali = document.querySelector(".Bali");

children.forEach((child) => {
  child.addEventListener("mouseenter", () => {
    children.forEach((c) => {
      if (c !== child) {
        c.classList.add("blur"); // Tambahkan kelas blur pada elemen lain
      }
    });
  });

  child.addEventListener("mouseleave", () => {
    children.forEach((c) => {
      c.classList.remove("blur"); // Hapus kelas blur saat mouse keluar
    });
  });
});

bali.addEventListener("mouseenter", () => {
  children.forEach((c) => {
    c.classList.add("blur"); // Tambahkan kelas blur pada semua child saat hover Bali
  });
});

bali.addEventListener("mouseleave", () => {
  children.forEach((c) => {
    c.classList.remove("blur"); // Hapus kelas blur saat mouse keluar dari Bali
  });
});

// smooth scroll
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Mencegah perilaku default anchor

    const targetId = this.getAttribute("href"); // Ambil href dari anchor
    const targetElement = document.querySelector(targetId); // Temukan elemen target

    // Scroll ke elemen target dengan efek smooth
    targetElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});

const audio = document.getElementById("backgroundMusic");
audio.volume = 0.5; // Set default volume saat halaman dimuat

volumeControl.addEventListener("input", function () {
  audio.muted = false; // Hapus mute setelah pengguna mengatur volume
  audio.volume = this.value;
});
