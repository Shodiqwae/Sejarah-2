const startingMinutes = 10;
let defaultTime = startingMinutes * 60;
let time = defaultTime ;

var score = 0;

const countdownEl = document.getElementById('countdown');

const hitungmundur = setInterval(updateCountdown, 1000);


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds =  time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time == 0) {
        clearInterval(hitungmundur)   
        location.href = "index.html"
        alert('WAKTU ANDA HABIS')
    }   
}
var urutsoal = 0;

//data
const soal = [
    {
        jawaban: "soeharto"
    },
    {
        gambar: "Image/2.jpg",
        jawaban:"supersemar"
    },
    {
        gambar: "Image/3.jpg",
        jawaban: "pembubaran pki"
    },
    {
        gambar: "Image/4.jpg",
        jawaban: "demokrasi pancasila"
    },
    {
        gambar: "Image/5.jpg",
        jawaban: "universitas trisakti"
    },
    {
        gambar: "Image/6.jpg",
        jawaban: "krisis ekonomi"
    },
    {
        gambar: "Image/7.jpg",
        jawaban: "pelanggaran ham"
    },
    {
        gambar: "Image/8.jpg",
        jawaban: "tritura"
    },
    {
        gambar: "Image/9.jpg",
        jawaban: "kabinet ampera"
    },
    {
        gambar: "Image/10.jpg",
        jawaban: "dwikora"
    },
    {
        gambar: "Image/11.jpg",
        jawaban: "kerusuhan mei 1998"
    },
    {
        gambar: "Image/12.jpg",
        jawaban: "sentralisasi kekuasaan"
    },
    {
        gambar: "Image/13.jpg",
        jawaban: "pemerintahan otoriter"
    },
    {
        gambar: "Image/14.jpg",
        jawaban: "repelita"
    },
    {
        gambar: "Image/15.jpg",
        jawaban: "swasembada"
    },
    {
        gambar: "",
        jawaban: ""
    }
]

document.addEventListener('keyup', (event)=> {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if(keyCode === 13) {
      document.getElementById("cek").click();
    }
  })       

document.addEventListener('keyup', (event)=> {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if(keyCode === 27) {
        document.getElementById("Oke").click();
    }
})          
function jawaban() {    
    var input = document.getElementById('input').value.toLowerCase();
    document.getElementById('input').value = "";
    if (input === soal[urutsoal]['jawaban']  ) {
        document.getElementById('result').innerHTML = 'Jawaban Anda Benar';
        document.getElementById('Oke').value = 'lanjut';
        score += 10
        document.getElementById('score').innerHTML = score ;
    }   else {
        document.getElementById('result').innerHTML = 'Jawaban Anda Salah / Isi Jawaban'; 
        document.getElementById('Oke').value = 'Oke';
        urutsoal -= 0
        document.getElementById('img').src = soal[urutsoal]['gambar'];
    }
    urutsoal += 1
    document.getElementById('img').src = soal[urutsoal]['gambar'];
    if (urutsoal == 15) {
        document.getElementById('final-score').innerHTML = score;
        document.getElementById('coy').style.display = 'none';
        document.getElementById('control').style.display = 'none';
        document.getElementById('result-page').style.display = 'block';
    }
}
function play() {
    alert('Oiya ges sebelum mulai aku kasih tau dulu ya cara mainnya')
    alert('Yang pertama kalo kalian sudah menulis jawaban kalian langsung pencet (ENTER) dan jika kalian ingin mengclose noif menggunakan tombol (ESC) karena jika kamu pencet tombol enter terus menerus maka kamu akan terskip ke beberapa soal berikutnya dan tidak mendapat kan point.')
    alert('Yang kedua jika waktu kamu habis dalam 10 menit belum menyelesaikan soal kamu akan balik ke halaman utama dan mengerjakan ulang dan web tebak gambar ini wajib menggunakan laptop')
    alert('Selamat menikmati game nya hehe :)')
}




