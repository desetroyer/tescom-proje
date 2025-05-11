import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const urunler = [
  {
    title: 'MTW500 MODÜLER UPS',
    desc: 'Büyük ve orta ölçekli veri merkezleri için yüksek verimlilikte, modüler ve ölçeklenebilir UPS çözümü. 50-600 kVA.',
    img: '/images/mtw500.png',
    link: '/urun/mtw500-moduler-ups',
    tag: 'YENİ',
    power: '50-600 kVA'
  },
  {
    title: 'MTW300 MODÜLER UPS',
    desc: 'Orta ölçekli veri merkezleri ve kritik yükler için modüler UPS. 30-300 kVA.',
    img: '/images/mtw300.png',
    link: '/urun/mtw300-moduler-ups',
    tag: 'YENİ',
    power: '30-300 kVA'
  },
  {
    title: 'MTW150 MODÜLER UPS',
    desc: 'Küçük ve orta ölçekli veri merkezleri için modüler UPS. 10-150 kVA.',
    img: '/images/mtw150.png',
    link: '/urun/mtw150-moduler-ups',
    tag: 'YENİ',
    power: '10-150 kVA'
  },
  // ... Diğer ürünler eklenebilir ...
];

export default function CozumVeriMerkeziIT() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Veri Merkezi & IT Çözümleri</h1>
      <p className="text-lg text-gray-700 mb-8">Sunucu altyapıları ve veri merkezleri için ölçeklenebilir, yüksek verimli ve güvenilir UPS çözümleri. Tescom, veri merkezinizin kesintisiz ve güvenli çalışmasını sağlar.</p>
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
              <a href={u.title === 'DS POWER 110L' ? '/urun/ds-power-110l' : u.title.includes('PowerSafe') ? '/urun/powersafe-opzs' : u.link} className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded px-4 py-2 transition">Detaylı Bilgi</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 