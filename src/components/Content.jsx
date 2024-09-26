import React from 'react'

const Content = () => {
  return (
    <div className='content-container'>
      <h1 className='judul-content py-5 font-bold text-lg'>Beranda</h1>
      <div className="banner-welcome">
        <img src="images/banner-beranda.png" alt="" />
        {/* SELAMAT DATANG DI (NAMA WEBSITE) <br></br>
        Penilaian pembelajaran jadi lebih mudah dengan <br></br>
        (nama website). Sudah siap memulai?? */}
      </div>
      <h1  className='judul-content py-5 font-bold text-lg'>Cara Penggunaan</h1>
      <div className="content-berandaguru drop-shadow">
        <h4 className='judultulisankonten font-bold py-2'>Membuat grup</h4>
        <p className='tulisankonten mb-3 px-4'>1. Pilih menu "Grup <br></br>
         2. Klik "Buat Grup", lalu isikan informasi sesuai dengan kelas atau kebutuhan Anda
        </p>
        <h4 className='judultulisankonten font-bold py-2'>Membuat Soal</h4>
        <p className='tulisankonten px-4'>
          1. Pergi ke bagian "Pertanyaan" <br></br>
          2. Klik "Buat Pertanyaan" untuk memulai. <br></br>
          3. Pilih pertanyaan sesuai dengan format yang telah disediakan. <br></br>
          4. Jika sudah selesai, klik "selesai".<br></br>
          5. Soal akan otomatis tersedia untuk siswa kerjakan.<br></br>
        </p>
      </div>
    </div>
  )
}

export default Content