import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const urunler = [
  {
    title: 'LEOAP LINE INTERACTIVE UPS',
    desc: 'Çok fonksiyonlu, kişisel bilgisayarlar için özel tasarlanmış, hafif ve kompakt yapıda, sınırlı çalışma ortamlarına uyum sağlayan bir UPS çözümü.',
    img: '/images/leoap.png',
    link: '/urun/leoap-line-interactive-ups',
    tag: 'YENİ',
    power: '600-2000 VA'
  },
  {
    title: 'DS POWER 110L',
    desc: 'Online UPS 10kVA, DSP teknolojisi ile çok çeşitli elektriksel ortamlarda çalışabilen, yüksek şarj akımı ve paralel akü bağlantı çıkışları ile uzun süreli uygulamalar için.',
    img: '/images/dspower110l.png',
    link: '/urun/ds-power-110l',
    tag: 'YENİ',
    power: '10 kVA'
  },
  {
    title: 'TEOS+ 100PRO RT',
    desc: 'Yüksek frekanslı çevrimiçi çift dönüşüm teknolojisi, DSP kontrol teknolojisi ve aktif güç faktörü düzeltmesi ile 0,99\'a kadar giriş güç faktörü sağlayan, ev ve ofis uygulamalarına uygun bir UPS.',
    img: '/images/teosplus100pro.png',
    link: '/urun/teos-plus-100pro-rt',
    tag: 'YENİ',
    power: '1-3 kVA'
  },
  {
    title: 'TEOS 100 XL RT',
    desc: 'Gerçek çift çevirim, mikroişlemci kontrollü, uzun süre besleme seçeneği ile ev ve ofis uygulamalarına uygun, sessiz çalışan bir UPS.',
    img: '/images/teos100xlrt.png',
    link: '/urun/teos-100-xl-rt',
    tag: '',
    power: '1-10 kVA'
  },
  {
    title: 'LEO II',
    desc: 'LEO II Line İnteraktif UPS, mikro işlemci kontrolü ve ileri teknoloji AVR (otomatik voltaj regülasyonu) ile kararlı çıkış gerilimi sağlayan, küçük hacimli, tak-çalıştır özellikli, AC priz çıkışları ve USB haberleşmesi ile pratik kullanım sunan bir kesintisiz güç kaynağı.',
    img: '/images/leoii.png',
    link: '/urun/leo-ii',
    tag: '',
    power: '650-2000 VA'
  },
  {
    title: 'TEOS 100',
    desc: 'TEOS 100 Online UPS, gerçek çift çevrim teknolojisi ile mikroişlemci kontrollü, çıkış güç faktörü 0.9 ve giriş güç faktörü düzeltmesi ile verimli, sessiz çalışması sayesinde ev ve ofis uygulamalarına uygun bir kesintisiz güç kaynağı.',
    img: '/images/teos100.png',
    link: '/urun/teos-100',
    tag: '',
    power: '1-10 kVA'
  }
];

export default function CozumEvOfis() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">Ev & Ofis Çözümleri</h1>
      <p className="text-lg text-gray-700 mb-8">Bilgisayar ekipmanınızı elektrik şebekesi dalgalanmaları ve fırtınalar gibi doğal günlük rahatsızlıklara karşı korumak için Tescom UPS, ev ve ofis ortamlarına uygun bir dizi tek fazlı UPS çözümü sunmaktadır. Küçük bir işletmeniz veya evden çalışıyorsanız, tek bilgisayarlı iş istasyonlarınız veya küçük bilgi işlem ekipman bankası sizin için kritik olacaktır.</p>
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
  