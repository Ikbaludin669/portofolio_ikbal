var penumpang = [];
var tambahpenumpang = function(namapenumpang, penumpang) {
	// jika angkot kosong
if (penumpang.length==0) {
                           //tambah penumpang di awal array 
	                        penumpang.push(namapenumpang);
                           //kemudian isi array dan keluar dari function 
	                        return penumpang;
} else {
	//telusuri seluruh kursi dari awal
	for (var i = 0; i < penumpang.length; i++) {

	
	  //jika kursi kosong
	 if (penumpang[i]== undefined) {
	     //tambah penumpang dari kursi tesebut
	 	penumpang[i]= namapenumpang;
	     //kembalikan isi array & keluar dari function 
	 	  return penumpang;
	 }
	  //jika sudah ada nama yang sama 
	     //tampilkan pesan kesalahannya
	     //kembalikan isi array & keluar dari function 
	  //jika seluruh kursi terisi
	     //tambah penumpang di akhir array
	     //kembalikan isi array & keluar dari function }