import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const urunler = [
  {
    title: 'DS POWER',
    desc: 'Hastane ve tıp tesislerinde kritik cihazlar için yüksek güvenilirlikte güç kaynağı. DSP teknolojisi ile maksimum performans ve veri bütünlüğü.',
    img: '/images/dspower.png',
    link: '/urun/ds-power-ups',
    tag: 'YENİ',
    power: '800kVA'
  },
  {
    title: 'DS POWER 110L',
    desc: 'Online UPS 10kVA, medikal uygulamalar için güvenli ve kesintisiz enerji sağlar. Yüksek şarj akımı, paralel akü bağlantı çıkışları, DSP kontrollü işlemci, geniş gerilim/frekans aralığı ve çoklu haberleşme seçeneği ile hastaneler ve tıp tesisleri için ideal çözümdür.',
    img: '/images/dspower110l.png',
    link: '/urun/ds-power-110l',
    tag: 'YENİ',
    power: '10kVA'
  },
  {
    title: 'PowerSafe® OPzS Aküler',
    desc: 'Optimize edilmiş plaka tasarımıyla, uluslararası DIN standardını aşan artırılmış kapasiteye sahip, uzun ömürlü ve yüksek güvenlikli akülerdir. Telekom, güç üretimi, demiryolu, havaalanı, liman sinyalizasyonu ve bilgi işlem gibi kritik uygulamalarda kullanılır. 20 yıla kadar hizmet ömrü, 3 yıl sulama aralığı ve mükemmel döngü performansı sunar.',
    img: '/images/powersafe-opzs.png',
    link: '/urun/powersafe-opzs',
    tag: '',
    power: ''
  },
  // ... Diğer ürünler eklenebilir ...
];

export default function CozumMedikal() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Medikal Çözümler</h1>
      <p className="text-lg text-gray-700 mb-8">Hastane ve tıp tesislerinde, hayat kurtaran ve hayati elektronik verileri koruyan ekipmanlar için kesintisiz enerji gereklidir. Tescom UPS, medikal uygulamalar için güvenilir ve yüksek performanslı güç çözümleri sunar.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {urunler.map((u, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img src={u.img} alt={u.title} className="w-full h-40 object-contain bg-gray-50 p-4" />
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-blue-700 font-bold text-base">{u.title}</span>
                {u.tag && <span className="bg-yellow-400 text-xs text-white px-2 py-0.5 rounded ml-2">{u.tag}</span>}
                {u.power && <span className="ml-auto text-xs text-gray-500">{u.power}</span>}
              </div>
              <p className="text-gray-600 text-sm mb-4 flex-1">{u.desc}</p>
              <a href={u.link} className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded px-4 py-2 transition">Detaylı Bilgi</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 