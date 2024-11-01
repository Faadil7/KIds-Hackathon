import React from 'react'
import buah from '../asset/buah.jpg'
import minyak from '../asset/Minyak sawit.jpeg'
import pekerja from '../asset/Pekerja Sawit.jpeg'
const All = () => {
  return (
    <section className='mx-[5rem] pb-[2rem] '>
        <div id='KelapaSawit' className='bg-white py-5 px-3 border border-green-600 shadow-lg rounded-md mb-[1rem]'>
            <h1 className='text-2xl font-semibold pb-[2rem]'>Kelapa Sawit</h1>
        <img src={buah} className='w-48 h-48 flex justify-self-center rounded-md'/>
    <p>Kelapa Sawit jauh lebih efisien dan produktif dibandingkan dengan tanaman penghasil minyak nabati lainnya.Karena satu hektar lahan dapat menghasilkan 4,17 metrik ton kelapa sawit per tahun, dibandingkan dengan 0,56 ton minyak bunga matahari, 0,39 ton minyak kedelai dan 0,16 ton minyak kacang tanah.Perkebunan sawit terbukti mampu menghasilkan keuntungan secara ekonomi, seperti menghasilkan devisa terbesar pemerintah, meningkatkan pendapatan para pelaku perkebunan, serta sebagai penghasil bahan pangan, biofuel, biomassa dan biomaterial.</p>
        </div>
        <div id='BuahSawit' className='bg-white py-5 px-3 border border-green-600 shadow-lg rounded-md mb-[1rem]'>
            <h1 className='text-2xl font-semibold pb-[2rem]'>Buah Sawit</h1>
        <img src={minyak} className='w-48 h-48 flex justify-self-center'/>
    <p>Buah sawit menghasilkan minyak sawit yang merupakan produk utama dan banyak digunakan dalam industri makanan, kosmetik, dan biodiesel. Selain itu, buah sawit juga menghasilkan produk turunan dan sisa yang dapat dimanfaatkan sebagai pakan ternak. Budidaya kelapa sawit berkontribusi pada peningkatan ekonomi lokal melalui penciptaan lapangan kerja dan pengembangan infrastruktur. Dengan demikian, buah sawit memiliki manfaat yang signifikan baik dari segi produk maupun dampak ekonominya.</p>
        </div>
        <div id='PekerjaSawit' className='bg-white py-5 px-3 border border-green-600 shadow-lg rounded-md mb-[1rem]'>
            <h1 className='text-2xl font-semibold pb-[2rem]'>Pekerja Sawit</h1>
        <img src={pekerja} className='w-48 h-48 flex justify-self-center'/>
    <p>Industri kelapa sawit memiliki potensi untuk menciptakan banyak peluang kerja dan mendukung pembangunan ekonomi, tetapi juga menghadirkan tantangan yang perlu diatasi untuk memastikan keberlanjutan dan kesejahteraan masyarakat. Pendekatan yang berkelanjutan dan etis dalam pengelolaan kelapa sawit sangat penting untuk memaksimalkan manfaat sambil meminimalkan dampak negatif.</p>
        </div>
        
    </section>
  )
}

export default All