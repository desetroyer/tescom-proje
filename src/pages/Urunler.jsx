import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const urunler = [
  {
    ad: 'Kesintisiz Güç Kaynağı (UPS)',
    img: '/images/ups.png',
  },
  {
    ad: 'Statik Transfer Anahtarları',
    img: '/images/sts.png',
  },
  {
    ad: 'Statik Voltaj Regülatörleri',
    img: '/images/svr.png',
  },
  {
    ad: 'Otomatik Voltaj Regülatörleri',
    img: '/images/avr.png',
  },
  {
    ad: 'Tıbbi İzole Güç Sistemleri',
    img: '/images/medical.png',
  },
  {
    ad: 'Frekans Konvertörleri',
    img: '/images/frekans.png',
  },
  {
    ad: 'İnvertörler',
    img: '/images/inverter.png',
  },
  {
    ad: 'Redresörler',
    img: '/images/rectifier.png',
  },
  {
    ad: 'Tescom Dizel Jeneratörler',
    img: '/images/generator.png',
  },
  {
    ad: 'Solar Ürünler',
    img: '/images/solar.png',
  },
  {
    ad: 'Özel Ürünler',
    img: '/images/special.png',
  },
  {
    ad: 'Aküler',
    img: '/images/battery.png',
  },
];

export default function Urunler() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Breadcrumb />
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Ürünler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {urunler.map((urun, i) => (
          <div key={i} className="border border-blue-200 rounded-lg p-4 flex flex-col items-center bg-white shadow hover:shadow-lg transition">
            <div className="font-bold text-md text-center mb-2">{urun.ad}</div>
            <img src={urun.img} alt={urun.ad} className="h-32 object-contain mb-4" />
            <button className="w-full bg-gray-200 text-gray-700 py-2 rounded mt-auto font-semibold hover:bg-blue-100 transition">Ürünlere Gözat</button>
          </div>
        ))}
      </div>
    </div>
  );
} 