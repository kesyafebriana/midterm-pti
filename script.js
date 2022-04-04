let makan = 50;
let tidur = 50;
let main = 50;
let belajar = 0;
let countStudy = 0;
let i = 2;

$(document).ready(function () {

    //Inisialisasi jam & menit ke dalam variabel h & m
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    //Function untuk counter manual (jadi gak realtime)
    function myCount() {
        //Biar jamnya cuma sampe 23, kalo 24 ketulisnya 00 dan kehitung dari awal lagi
        //Biar menitnya reset dari 0 kalo udah >59 dan jamnya nambah 1
        if (m > 59) {
            m = 0;
            h++;
            if (h > 23) {
                h = 0;
            }
            if (h < 10) { h = "0" + h };
            countStudy++;
            //Tiap nambah 1 jam, makan-tidur-mainnya berkurang 4
            makan = makan - 4;
            $('#makanProg').val(makan);
            tidur = tidur - 4;
            $('#tidurProg').val(tidur);
            main = main - 4;
            $('#mainProg').val(main);
        }
        //Buat ganti2 background
        if (h >= 6 && h <= 11) {
            $('.greet').text("Good Morning, ");
            $("#web").css("background-image", "url('aset/pagi.jpg')");
        } else if (h >= 12 && h <= 18) {
            $('.greet').text("Good Afternoon, ");
            $("#web").css("background-image", "url('aset/siang.jpg')");
        } else {
            $('.greet').text("Good Night, ");
            $("#web").css("background-image", "url('aset/malam.jpg')");
        }
        $(function () {
            if ($('body').is('#web')) {
                if (countStudy == 8) {
                    alert("Kamu sudah tidak belajar selama 8 jam, jadi kamu harus di-DROP OUT!!!");
                    alert("Silakan memulai game dari awal");
                    countStudy = 0;
                    window.location.href = "index.html";
                }
            }
        });
        //Biar kalo dibawah 10, tulisannya tetep 2 digit (contoh : 04)
        if (m < 10) { m = "0" + m };
        //Print
        $('.m').text(m);
        $('.h').text(h);
        //Nambah menitnya
        m++;
    }
    //Buat interval counternya 1000 milisecond = 1 second 
    setInterval(myCount, 1000);
});

$('#name').click(function () {
    let nama = $('#input').val();
    let act = $('#active').attr("src");
    localStorage.setItem("name", nama);
    localStorage.setItem("imgAct", act);
    window.location.href = "kelshcoba.html";
});

$('#greet').ready(function print() {
    let act = localStorage.getItem("imgAct");
    $('#imgChar').attr('src', act);

    let h3 = document.getElementById('greet');
    let nama = document.createTextNode(localStorage.getItem("name"));
    h3.appendChild(nama);
});

$('#prev').click(function () {
    let currentSlide = $('#active');
    let prevSlide = currentSlide.prev();

    if (prevSlide.length == 0) {
        currentSlide.attr('id', 'inactive');
        $('#ch-img img').last().attr('id', 'active');
    } else {
        currentSlide.attr('id', 'inactive');
        prevSlide.attr('id', 'active');
    }
});

$('#next').click(function () {
    let currentSlide = $('#active');
    let nextSlide = currentSlide.next();

    if (nextSlide.length == 0) {
        currentSlide.attr('id', 'inactive');
        $('#ch-img img').first().attr('id', 'active');
    } else {
        currentSlide.attr('id', 'inactive');
        nextSlide.attr('id', 'active');
    }
});

$(document).ready(function () {

    let act = localStorage.getItem("imgAct");

    $('#mknBtn').click(function () {
        if (makan >= 0 && makan <= 98) {

            $('#audio').attr('src', 'makan.mp3');
            $('#audio')[0].play();        

            if (act == 'aset/ahmad.png') {
                $('#imgChar').attr('src', 'aset/ahmadmakan.png');
            } else if (act == 'aset/bella.png') {
                $('#imgChar').attr('src', 'aset/bellamakan.png');
            } else if (act == 'aset/keren.png') {
                $('#imgChar').attr('src', 'aset/kerenmakan.png');
            } else if (act == 'aset/nurul.png') {
                $('#imgChar').attr('src', 'aset/nurulmakan.png');
            }

            if (makan % 10 == 2 || makan % 10 == 4 || makan % 10 == 6 || makan % 10 == 8) makan = makan + 2;
            else makan = makan + 10;

            $('#makanProg').val(makan);

            if (tidur >= 2 && tidur <= 100) {
                tidur = tidur - 2;
            }
            $('#tidurProg').val(tidur);
            if (tidur == 20) alert("Kamu kurang tidur!");
        }
    });

    $('#tdrBtn').click(function () {
        if (tidur >= 0 && tidur <= 98) {

            $('#audio').attr('src', 'tidur.mp3');
            $('#audio')[0].play();  

            if (act == 'aset/ahmad.png') {
                $('#imgChar').attr('src', 'aset/ahmadtidur.png');
            } else if (act == 'aset/bella.png') {
                $('#imgChar').attr('src', 'aset/bellatidur.png');
            } else if (act == 'aset/keren.png') {
                $('#imgChar').attr('src', 'aset/kerentidur.png');
            } else if (act == 'aset/nurul.png') {
                $('#imgChar').attr('src', 'aset/nurultidur.png');
            }

            if (tidur % 10 == 2 || tidur % 10 == 4 || tidur % 10 == 6 || tidur % 10 == 8) tidur = tidur + 2;
            else tidur = tidur + 10;

            $('#tidurProg').val(tidur);

            if (makan >= 2 && makan <= 100) {
                makan = makan - 2;
            }
            $('#makanProg').val(makan);
            if (makan == 20) alert("Kamu kurang makan!");

            if (main >= 2 && main <= 100) {
                main = main - 2;
            }
            $('#mainProg').val(main);
            if (main == 20) alert("Kamu kurang main!");
        }
    });

    $('#mainBtn').click(function () {
        if (main >= 0 && main <= 98) {

            $('#audio').attr('src', 'main.mp3');
            $('#audio')[0].play();  

            if (act == 'aset/ahmad.png') {
                $('#imgChar').attr('src', 'aset/ahmadmain.png');
            } else if (act == 'aset/bella.png') {
                $('#imgChar').attr('src', 'aset/bellamain.png');
            } else if (act == 'aset/keren.png') {
                $('#imgChar').attr('src', 'aset/kerenmain.png');
            } else if (act == 'aset/nurul.png') {
                $('#imgChar').attr('src', 'aset/nurulmain.png');
            }

            if (main % 10 == 2 || main % 10 == 4 || main % 10 == 6 || main % 10 == 8) {
                main = main + 2;
            } else {
                main = main + 10;
            }

            $('#mainProg').val(main);

            if (tidur >= 2 && tidur <= 100) {
                tidur = tidur - 2;
            }
            $('#tidurProg').val(tidur);
            if (tidur == 20) alert("Kamu kurang tidur!");
        }
    });

    $('#bljrBtn').click(function () {
        if (makan == 0) alert("Kamu belum makan! Makan dulu sana!");
        if (main == 0) alert("Kamu belum main! Main dulu sana!");
        if (tidur == 0) alert("Kamu belum tidur! Tidur dulu sana!");

        if (belajar >= 0 && belajar <= 95 && tidur >= 2 && tidur <= 100 && makan >= 2 && makan <= 100 && main >= 2 && main <= 100) {

            $('#audio').attr('src', 'belajar.mp3');
            $('#audio')[0].play();  

            if (act == 'aset/ahmad.png') {
                $('#imgChar').attr('src', 'aset/ahmadbelajar.png');
            } else if (act == 'aset/bella.png') {
                $('#imgChar').attr('src', 'aset/bellabelajar.png');
            } else if (act == 'aset/keren.png') {
                $('#imgChar').attr('src', 'aset/kerenbelajar.png');
            } else if (act == 'aset/nurul.png') {
                $('#imgChar').attr('src', 'aset/nurulbelajar.png');
            }

            if (makan == 20) alert("Kamu kurang makan!");
            if (main == 20) alert("Kamu kurang main!");
            if (tidur == 20) alert("Kamu kurang tidur!");

            if (tidur <= 50 || makan <= 50 || main <= 50) {
                belajar = belajar + 5;

            } else {
                if (belajar == 95) {
                    belajar = belajar + 5;
                } else {
                    belajar = belajar + 10;
                }
            }

            tidur = tidur - 2;

            makan = makan - 2;

            main = main - 2;

            $('#belajarProg').val(belajar);
            $('#tidurProg').val(tidur);
            $('#makanProg').val(makan);
            $('#mainProg').val(main);
        }

        if (belajar == 100) {
            belajar = 0;
            alert("Selamat! Kamu naik ke semester " + i);
            $('#belajarProg').val(belajar);
            $('#smt').text("Semester " + i);
            i = i + 1;
        }

        if (main == 0 && makan == 0 && tidur == 0) {
            alert("Kamu telah berpulang ke rahmatullah. Silahkan mengulang game dari awal.");
            window.location.href = "index.html";
        }

        if (i == 10) {
            window.location.href = "graduation.html";
        }

    });
})

$('#exit').mouseenter(function() {
    $('#exit').attr('class', 'fa-solid fa-door-open')
})

$('#exit').mouseleave(function() {
    $('#exit').attr('class', 'fa-solid fa-door-closed')
})

$('#exit').click(function() {
    let exit = window.prompt("Are you sure? Y/N");
    if (exit == "Y" || exit == "y") {
        window.location.href = "index.html";
    }
    
})