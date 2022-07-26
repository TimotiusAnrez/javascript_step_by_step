let nama = 'hansen';

let kursiHansen = {
	kaki: 2,
	tinggi: 180,
	lebar: 200,
	warna: 'biru',
	merek: 'olympic',
	panjang: 100,
};

let kursi = {
	kaki: 4,
	tinggi: 100,
	lebar: 50,
	warna: 'merah',
	merek: 'informa',
	panjang: 200,
};

// gimana cara memakai object untuk string template literal

let ceritaKursi = `pada suatu hari hansen mau beli kursi di toko funiture,
    karena kursi di rumah hansen panjangnya ${
			kursiHansen.panjang
		}cm dan tingginya itu ${kursiHansen.tinggi / 5}cm
    tidak bisa dipakai oleh manusia. 
    Selain itu hansen juga tidak suka dengan warna dari kursi hansen yaitu warna ${
			kursiHansen.warna
		}
    kursi hansen juga tidak enak diduduki karena kakinya cuman ${
			kursiHansen.kaki
		} makanya suka rubuh
    karena suka rubuh, makanya merek kursi hansen sekarang yaitu ${
			kursiHansen.merek
		} itu jelek

    jadi, hansen ingin mencari kursi baru dengan jumlah kaki ${kursi.kaki}
    hansen juga mau kalau kursinya bisa dipakai oleh manusia ato tidak hansen maka dari itu hansen mau
    tinggi kursi maximal ${kursi.tinggi}cm dan lebar ${kursi.lebar}cm
    Hansen juga suka warna ${kursi.warna}
    dan karena hansen mau bisa pacaran di kursi maka dari itu panjang kursi hansen minimal ${
			kursi.panjang
		}cm
    Kata penjual, kursi merek ${
			kursi.merek
		} itu bagus, maka dari itu hansen ingin membeli kursi dengan merek ${
	kursi.merek
}.
`;

console.log(ceritaKursi);
