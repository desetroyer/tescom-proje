import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function PowerSafeOPzSDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">PowerSafe® OPzS Aküler</h1>
          <div className="text-lg text-gray-700 mb-4">Uzun Ömürlü, Yüksek Güvenlikli Akü Çözümü</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">PowerSafe® OPzS Aküler, optimize edilmiş bir plaka tasarımıyla uluslararası olarak tanınan DIN standardını aşan artırılmış kapasiteye sahiptir. En yüksek güvenilirlik ve güvenlik seviyelerini sunmak üzere tasarlanmış bu aküler, telekomünikasyon, güç üretimi ve dağıtımı, demiryolu, havaalanı ve liman sinyalizasyonu, bilgi işlem, acil durum aydınlatması gibi çok çeşitli uygulamalarda kullanılır. Borulu plaka teknolojisi sayesinde yüzdürme voltajı koşullarında uzun ömür ve mükemmel döngü performansı sunar. Yapıştırılmış negatif düz plaka tasarımı, geniş kapasite aralığında maksimum performans sağlar.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>Kapasite aralığı: 216 ila 3360 Ah</li>
              <li>25°C sıcaklıkta 20 yıllık hizmet ömrü</li>
              <li>3 yıllık sulama aralığı</li>
              <li>DIN 40736-1 uyumlu</li>
              <li>Borulu plaka teknolojisi ile mükemmel döngü performansı</li>
              <li>Yüksek güvenlik ve güvenilirlik</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/powersafe-opzs.png" alt="PowerSafe OPzS Aküler" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Telekomünikasyon altyapıları</li>
          <li>Güç üretimi ve dağıtımı</li>
          <li>Demiryolu, havaalanı ve liman sinyalizasyonu</li>
          <li>Bilişim ve acil durum aydınlatma sistemleri</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Katalog ve Dokümanlar</h2>
        <a href="https://www.tescomakademi.com/akuler/enersys/Powersafe-OPZS/en-rs-opzs-0122.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">PowerSafe OPzS Ürün Yelpazesi Özeti (PDF)</a><br />
        <a href="https://www.tescomakademi.com/akuler/enersys/Powersafe-OPZS/en-opzs-pd-001_0111.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">PowerSafe OPzS Performans Verileri (PDF)</a><br />
        <a href="https://www.tescomakademi.com/akuler/enersys/Powersafe-OPZS/en-flooded-iom-007_1017-english.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">PowerSafe Sulu Tip Kullanım Kılavuzu (PDF)</a>
      </div>
    </div>
  );
} 