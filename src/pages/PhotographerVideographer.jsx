export default function PhotographerVideographer() { return ( <div className="p-6 md:p-12 max-w-5xl mx-auto"> <h1 className="text-4xl font-bold mb-4">Website Profesional untuk Fotografer & Videografer</h1> <p className="text-lg text-gray-700 mb-8"> Tampilkan portofolio terbaikmu, tarik lebih banyak klien, dan tampil menonjol di dunia digital. ZenythX hadir untuk mengubah karyamu menjadi pengalaman visual yang tak terlupakan. </p>

<div className="grid md:grid-cols-2 gap-6 mb-12">
    <div className="bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-2">✨ Paket Personal</h2>
      <p className="text-gray-600 mb-2">Cocok untuk fotografer/videografer individu.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>1 Halaman Portofolio Elegan</li>
        <li>Kontak WhatsApp & Instagram</li>
        <li>Galeri Dinamis & Responsive</li>
        <li>SEO & SSL Ready</li>
      </ul>
    </div>

    <div className="bg-white shadow-xl rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-2">🚀 Paket Studio</h2>
      <p className="text-gray-600 mb-2">Untuk tim kreatif atau studio profesional.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Halaman Portofolio + Tim + Harga</li>
        <li>Form Booking Otomatis</li>
        <li>Integrasi Google Maps & Social Media</li>
        <li>Custom Domain & Email Branding</li>
      </ul>
    </div>
  </div>

  <div className="bg-gray-100 rounded-2xl p-6 text-center">
    <h3 className="text-2xl font-bold mb-2">🎯 Siap Menarik Lebih Banyak Klien?</h3>
    <p className="text-gray-700 mb-4">Hubungi kami sekarang dan jadikan karya visualmu lebih berkesan!</p>
    <a
      href="https://wa.me/6281234567890"
      className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800"
    >
      Konsultasi Gratis via WhatsApp
    </a>
  </div>
</div>

); }