import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const urunler = [
  {
    title: 'DS POWER 300',
    desc: 'Online UPS, DSP kontrollü işlemci ile yüksek performans, geniş gerilim/frekans aralığı ve çoklu haberleşme seçeneği ile ulaşım altyapısı için ideal çözümler sunar.',
    img: '/images/dspower300.png',
    link: '#',
    tag: '',
    power: '10-500 kVA',
  },
  {
    title: 'MTW150 MODÜLER UPS',
    desc: 'Esnek konfigürasyon, akıllı uyku fonksiyonu ve grafik LCD ekran ile ulaşım uygulamalarında yüksek verimlilik ve güvenilirlik sağlar.',
    img: '/images/mtw150.png',
    link: '/urun/mtw150-moduler-ups',
    tag: 'YENİ',
    power: '10-150 kVA',
  },
  {
    title: 'MTW500 MODÜLER UPS',
    desc: 'Hassas yükler için tasarlanmış, yüksek giriş power faktörü ve düşük THD sağlayan, 3 Level ve DSP teknolojisi ile üretilmiş online UPS.',
    img: '/images/mtw500.png',
    link: '/urun/mtw500-moduler-ups',
    tag: 'YENİ',
    power: '50-600 kVA',
  },
  {
    title: 'MTW300 MODÜLER UPS',
    desc: 'Yüksek verimlilik ve güvenilirlik için 3 Level ve DSP teknolojisi ile üretilmiş, ulaşım altyapısı için ideal modüler UPS.',
    img: '/images/mtw300.png',
    link: '/urun/mtw300-moduler-ups',
    tag: 'YENİ',
    power: '30-300 kVA',
  },
  {
    title: 'DS POWER 110L',
    desc: 'Online UPS 10kVA, DSP teknolojisi ile çok çeşitli elektriksel ortamlarda çalışabilen, yüksek şarj akımı ve paralel akü bağlantı çıkışları ile ulaşım uygulamalarında uzun süreli çözümler.',
    img: '/images/dspower110l.png',
    link: '#',
    tag: 'YENİ',
    power: '10 kVA',
  },
  {
    title: 'PowerSafe OPzS Aküler',
    desc: 'Telekom, demiryolu, havaalanı ve liman sinyalizasyonu gibi ulaşım uygulamaları için yüksek güvenlik ve uzun ömürlü akü çözümü.',
    img: '/images/powersafe-opzs.png',
    link: '#',
    tag: '',
    power: '',
  },
];

export default function CozumUlasim() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Ulaşım Çözümleri</h1>
      <p className="text-lg text-gray-700 mb-8">Trafik sinyalleri ve Akıllı Ulaşım Sistemleri (ITS) için elektrik kesintileri, ulaşım kullanıcıları için tehlikeli koşullar ve tıkanıklık yaratabilir. Tescom UPS, ulaşım altyapısında tüm çevre koşullarında yüksek verimlilikle çalışabilen, güvenilir ve stratejik UPS çözümleri sunar.</p>
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
              <a href={u.title === 'DS POWER 300' ? '/urun/ds-power-300' : u.title === 'DS POWER 110L' ? '/urun/ds-power-110l' : u.title.includes('PowerSafe') ? '/urun/powersafe-opzs' : u.link} className="inline-block mt-auto bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold rounded px-4 py-2 transition">Detaylı Bilgi</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 