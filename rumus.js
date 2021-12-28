class gambar {

    constructor(plano_x, plano_y, canvass) {
        this.planox = plano_x;
        this.planoy = plano_y;
        this.canvas = canvass;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = plano_x * 3;
        this.canvas.height = plano_y * 3;
        this.ctx.fillStyle = "#ffd500";
        this.ctx.fillRect(0, 0, plano_x * 3, plano_y * 3);
        //this.ctx.beginPath();
        //this.potongx = potong_x;
        //this.potongy = potong_y;
    }

    potongg(warna, corx, cory, sizex, sizey) {
        this.ctx.fillStyle = "#fff6ed";
        this.ctx.fillRect(corx * 3, cory * 3, sizex * 3, sizey * 3);
        this.ctx.strokeStyle = warna;
        this.ctx.strokeRect(corx * 3, cory * 3, sizex * 3, sizey * 3);
        //console.log('gambar.plano #suskes jalan');

        //return ini;
    }

    hitung(potongx, potongy, plx, ply, cor_x, cor_y, color, nn, berulang, r) {
        console.log('gambar.hitung #suskes jalan');
        let tmp_hasilx = potongx;
        let tmp_hasily = potongy;
        let hitungjumlahx = 0;
        let hitungjumlahy = 0;
        const cor_yy = cor_y;

        while (tmp_hasilx <= plx) {
            tmp_hasily = potongy;
            cor_y = cor_yy;
            hitungjumlahy = 0;
            while (tmp_hasily <= ply) {
                console.log(cor_x, cor_y, color);
                this.potongg(color, cor_x, cor_y, potongx, potongy);
                if (nn == 1) {
                    cor_y += tmp_hasily;
                } else {
                    cor_y = tmp_hasily;
                }
                tmp_hasily += potongy;
                hitungjumlahy++;
                if ((potongx * (hitungjumlahy - 3)) + potongy == this.planox) {
                    nn = 2;
                    break;
                }
                if (potongy * (hitungjumlahy + 1) == this.planoy && nn == 2) {

                    break;
                }
            }
            tmp_hasilx += potongx;
            hitungjumlahx++;
            if (potongx * hitungjumlahx >= cor_x) {
                cor_x = potongx * hitungjumlahx;
                //console.log('cor x saat ini >> ' + cor_x);
                //cor_x = cor_xx + potongx;
            } else {
                cor_x = cor_x + potongx;
            }
            if ((potongx * (hitungjumlahx)) + potongy == this.planox) {
                //---
                var nn = 1;
                //---
                break;
            }
            if (this.planox - ((potongx * (hitungjumlahx)) + potongy) < potongx &&
                this.planox - (potongx * (hitungjumlahx)) >= potongy && berulang == false && r == true) {
                var nn = 1;
                break;
            }
            //cor_x = tmp_hasilx;
        }
        console.log("Jumlah x : " + hitungjumlahx + " || Jumlah y : " + hitungjumlahy + ' nilai x ' + potongx + ' nilai y ' + potongy);
        let totall = hitungjumlahx * hitungjumlahy;
        return [totall, cor_x, cor_y, nn, hitungjumlahx, hitungjumlahy, berulang];
    }

}


function lurus(plx, ply, gambarr, potx, poty, r) {
    //ambil();
    let hasill = gambarr.hitung(potx, poty, plx, ply, 0, 0, '#000000', 0, false, r);
    let hasill_2 = [0, 0, 0, 0, 0, 0];
    let hasill_3 = [0, 0, 0, 0, 0, 0];
    /*if (plx % potx >= poty) { //plx % potx >= poty
        var plxx = plx % potx;
        hasill_2 = gambarr.hitung(poty, potx, plxx, ply, hasill[1], 0, '#ff0000', hasill[3], true);
    }*/
    if (ply - (hasill[5] * poty) >= potx && hasill[3] == 1) { //ply % poty >= potx
        var plyy = ply % poty;
        var plxx = plx - (plx - (potx * (hasill[4])));
        console.log('hasil plxx ' + plxx);
        hasill_2 = gambarr.hitung(poty, potx, plxx, plyy, 0, hasill[2], '#ff8c00', hasill[3], true, r);
    }
    if (ply - (hasill[5] * poty) >= potx && hasill[6] == false) { //ply % poty >= potx
        var plyy = ply - (hasill[5] * poty);
        var plxx = plx - (plx - (potx * (hasill[4])));
        hasill_2 = gambarr.hitung(poty, potx, plxx, plyy, 0, hasill[2], '#ff0000', hasill[3], true, r);
    }
    if (hasill[3] == 1) {
        var plxx = plx - (potx * (hasill[4]));
        //var corxx = plx % hasill[2];
        console.log('plxx di hasill_4 ' + plxx)
        hasill_3 = gambarr.hitung(poty, potx, plxx, ply, hasill[1], 0, '#00ff00', 0, false, r);
    }
    if (hasill[3] == 2) {
        var plyy = ply - (hasill[1] + potx);
        //var corxx = plx % hasill[2];
        hasill_3 = gambarr.hitung(poty, potx, plx, plyy, 0, hasill[2], '#0000ff', 0, false, r);
    }
    console.log('hasill y > ' + hasill[2]);
    //console.log('+++++ bug ++++++ ' + hasill[0] + ' <> ' + hasill_2[0] + ' <> ' + hasill_3[0]);
    //const myobjs = JSON.stringify(hasill);
    return [{ data1: hasill, data2: hasill_2, data3: hasill_3 }];
}

function ambil_data() {
    var plx = document.getElementById('planox').value;
    var ply = document.getElementById('planoy').value;
    var potx = document.getElementById('nilaix').value;
    var poty = document.getElementById('nilaiy').value;
    var kumpul = [plx, ply, potx, poty];
    var kumpull = kumpul.map(Number);
    if (parseFloat(plx) && parseFloat(ply) && parseFloat(potx) && parseFloat(poty)) {
        // alert('your input is ' + kumpul);
        return kumpull;
    }
    alert('your input is blank or strings ' + kumpul);
    return false;
}

function sum() {
    var ambil = new ambil_data();

    console.log(ambil);
    if (ambil !== false) {

        let c = document.getElementById("myCanvas");
        let d = document.getElementById("myCanvas2");
        let e = document.getElementById("myCanvas3");
        let f = document.getElementById("myCanvas4");
        let gambarr = new gambar(ambil[0], ambil[1], c);
        let gambarr2 = new gambar(ambil[0], ambil[1], d);
        let gambarr3 = new gambar(ambil[0], ambil[1], e);
        let gambarr4 = new gambar(ambil[0], ambil[1], f);
        let r_l = lurus(ambil[0], ambil[1], gambarr3, ambil[2], ambil[3], true);
        let r_r = lurus(ambil[0], ambil[1], gambarr4, ambil[3], ambil[2], true);
        let luruss = lurus(ambil[0], ambil[1], gambarr, ambil[2], ambil[3], false);
        let putar = lurus(ambil[0], ambil[1], gambarr2, ambil[3], ambil[2], false);

        var total_lurus = luruss[0].data1[0] + luruss[0].data2[0] + luruss[0].data3[0];
        var total_putar = putar[0].data1[0] + putar[0].data2[0] + putar[0].data3[0];
        var total_rl = r_l[0].data1[0] + r_l[0].data2[0] + r_l[0].data3[0];
        var total_rr = r_r[0].data1[0] + r_r[0].data2[0] + r_r[0].data3[0];

        if (total_lurus >= total_putar && total_lurus >= total_rl && total_lurus >= total_rr) {
            c.removeAttribute("hidden");
            d.setAttribute("hidden", "hidden");
            e.setAttribute("hidden", "hidden");
            f.setAttribute("hidden", "hidden");
        } else if (total_putar >= total_lurus && total_putar >= total_rl && total_putar >= total_rr) {
            c.setAttribute("hidden", "hidden");
            d.removeAttribute("hidden");
            e.setAttribute("hidden", "hidden");
            f.setAttribute("hidden", "hidden");
        } else if (total_rl >= total_lurus && total_rl >= total_putar && total_rl >= total_rr) {
            c.setAttribute("hidden", "hidden");
            d.setAttribute("hidden", "hidden");
            e.removeAttribute("hidden");
            f.setAttribute("hidden", "hidden");
        } else if (total_rr >= total_lurus && total_rr >= total_putar && total_rr >= total_rl) {
            c.setAttribute("hidden", "hidden");
            d.setAttribute("hidden", "hidden");
            e.setAttribute("hidden", "hidden");
            f.removeAttribute("hidden");
        }
        console.log('+++++ bug ++++++ ' + total_lurus + '  < > ' + total_putar + ' <> ' + total_rl + ' <> ' + total_rr);
    }
}

function jikaenter(myfild) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    if (keycode == 13) {
        sum();
    }
}