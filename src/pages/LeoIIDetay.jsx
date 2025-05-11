import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function LeoIIDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">LEO II</h1>
          <div className="text-lg text-gray-700 mb-4">650 - 2000 VA Line İnteraktif UPS</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">LEO II Line İnteraktif UPS, özellikle ev ve ofis uygulamalarınız için yüksek güvenlik ve kararlı çıkış gerilimi sunan, mikro işlemci kontrolü ve ileri teknoloji AVR (otomatik voltaj regülasyonu) ile donatılmış bir kesintisiz güç kaynağıdır. Küçük hacmi, tak-çalıştır özelliği, AC priz çıkışları ve USB haberleşmesi ile tüm uygulamalarda pratik kullanım sağlar.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>Küçük hacim</li>
              <li>Opsiyonel dokunmatik LCD ekran</li>
              <li>USB ve RJ11 bağlantısı (opsiyonel)</li>
              <li>Yüksek güvenilirliği garanti eden mikroişlemci kontrolü</li>
              <li>İleri teknoloji AVR ile kararlı çıkış gerilimi</li>
              <li>AC kurtarılırken yeniden başlatma özelliği</li>
              <li>Simüle sinüs dalga çıkış formu</li>
              <li>Kapalı konumda bile akü şarj özelliği</li>
              <li>Aküden başlama özelliği (cold start)</li>
              <li>Jeneratör uyumlu (opsiyonel)</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/leoii.png" alt="LEO II" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Teknik Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Güç: 650VA / 360W - 2000VA / 1200W</li>
          <li>Giriş gerilimi: 110/120 VAC* veya 220/230/240 VAC</li>
          <li>Giriş gerilim aralığı: 81 - 245 VAC* / 162 - 290 VAC</li>
          <li>Frekans aralığı: 50Hz / 60Hz (otomatik algılama)</li>
          <li>Çıkış gerilimi: 110/120 VAC* veya 220/230/240 VAC</li>
          <li>AC gerilim regülasyonu (akü mod): ± %10</li>
          <li>Frekans aralığı (akü mod): 50Hz / 60Hz ± 1Hz</li>
          <li>Transfer süresi: Tipik 2-6 ms</li>
          <li>Dalga şekli (akü mod): Simüle sinüs</li>
          <li>Akü tipi ve sayısı: 12V / 7Ah x 1 (650VA), 12V / 9Ah x 2 (2000VA)</li>
          <li>Tipik şarj süresi: 4-6 saatte aküyü %90'a kadar şarj eder</li>
          <li>LCD ekran: Giriş/çıkış gerilimi, akü kapasitesi, yük seviyesi, UPS durumu</li>
          <li>LED ekran: AC mod, akü mod, arıza göstergeleri</li>
          <li>Alarm: Akü modu, düşük akü, aşırı yük, hata</li>
          <li>Kapsamlı koruma: Aşırı yük, deşarj ve aşırı şarj koruması</li>
          <li>Fiziksel: Boyutlar (mm): 101x300x142 (650VA LCD), 130x320x182 (2000VA LCD)</li>
          <li>Net ağırlık: 4.4 kg (650VA LCD), 10.6 kg (2000VA LCD)</li>
          <li>Çevresel: Bağıl nem 0 - %90 RH @ 0°C - 40°C (yoğunlaşmasız)</li>
          <li>Gürültü seviyesi: {'<'} 40 dBA</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Ev ve ofis uygulamaları</li>
          <li>Küçük işletmeler</li>
          <li>Bilgisayarlar ve ağ ekipmanları</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Katalog ve Kullanma Kılavuzu</h2>
        <a href="https://tescomakademi.com/katalog/tr/LEO%28650-2000VA%29.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold block mb-2">LEO SERİSİ (650VA - 2000VA) Ürün Kataloğu (PDF)</a>
        <a href="https://tescomakademi.com/doc/AGKK10410.PDF" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">LEO Serisi Kullanma Kılavuzu (PDF)</a>
      </div>
    </div>
  );
} 