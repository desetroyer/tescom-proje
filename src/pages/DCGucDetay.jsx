import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function UrunDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">DC GÜÇ BESLEME SİSTEMİ</h1>
          <div className="text-lg text-gray-700 mb-4">6kW / 48kW - 48V</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">Tescom DC Güç Besleme Sistemi 6kW-48V ve 48kW-48V olmak üzere, tek faz AC şebeke gerilimini 53.5 V DC (nominal 48Vdc) gerilime doğrultmakta ve bir yandan yedek enerji kaynağı olan akü gruplarını Tampon Şarjda tutarken diğer yandan kritik yükleri beslemektedir.</p>
            <p className="mb-2">DC Sistem; N+1 yedekli çalışmak üzere 48V–3kW Cordex doğrultucu modülleri, CXC HP Cordex kontrol ünitesi, sigorta (Akü, AC ve DC dağıtım) atık izleme kartı, ana AC ve doğrultucu besleme sigortaları, yıldırım koruma parafudrları, akü ve yük sigortaları, alarm, yük ve akü bağlantı klemenslerini içermektedir.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/dc-guc-besleme.png" alt="DC Güç Besleme Sistemi" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Hotswappable ve N+1 yedekli çalışma için 48V-2KW Cordex Doğrultucu Modülleri</li>
          <li>AC girişten izole regüleli DC enerji</li>
          <li>Güç tasarrufu için akıllı uyku özelliği (Smart Sleep)</li>
          <li>3 Aşamalı şarj döngüsü ve akü izleme ile uzun ömürlü akü</li>
          <li>Otomatik/Periyodik hızlı şarj</li>
          <li>Akü sıcaklık kompanzasyon kontrollü şarj</li>
          <li>Akü test ve performansı izleme</li>
          <li>Geniş giriş voltaj aralığı</li>
          <li>Durum, güncelleme ve alarm bilgisini içeren ön panel LED'leri</li>
          <li>Isıya duyarlı devirde çalışan fanlar</li>
          <li>AC Inrush/Transient bastırma</li>
          <li>Yumuşak kalkış (Soft Start)</li>
          <li>Başlatma gecikmesi</li>
          <li>Akım limitleme, aşırı ısı ve kısa devre korumaları</li>
          <li>Aküsüz çalışma</li>
          <li>Gelişmiş sigorta korumaları</li>
          <li>AC/DC yüksek gerilim koruma (SPD)</li>
          <li>Gelişmiş dokunmatik ekran</li>
          <li>L-ADIO ile güç modülleri ile doğrudan CAN-BUS/RS485 haberleşme</li>
          <li>RS232 veya TCP/IP ile Yerel ve uzaktan erişim imkanı</li>
          <li>Kullanıcı tanımlı alarmlar</li>
          <li>İstatistik, alarm ve olayların günlük kaydı</li>
          <li>Gelişmiş kullanıcı arayüzü</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <p className="text-gray-700">53.5VDC besleme için komple sistem çözümleri. 6kW / 48kW - 48V (3:3 / 1:1)</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Ürün Kataloğu</h2>
          <a href="https://www.tescomakademi.com/katalog/tr/TDCS%5FSerisi.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">DC Güç Besleme Sistemi (6kW / 48kW - 48V) Kataloğu</a>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a
          href="/teklif-al"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition"
        >
          Teklif Al
        </a>
        <a
          href="/teklif-al"
          className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded shadow hover:bg-green-700 transition"
        >
          Detaylı Bilgi Al
        </a>
      </div>
    </div>
  );
} 