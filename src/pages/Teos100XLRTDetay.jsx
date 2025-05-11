import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Teos100XLRTDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">TEOS 100 XL RT</h1>
          <div className="text-lg text-gray-700 mb-4">1-10 kVA Online UPS</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">TEOS 100 XL RT, uzun süre besleme seçeneği, gerçek çift çevrim teknolojisi ve mikroişlemci kontrollü yapısı ile öne çıkan, rack kabinet uygulamaları için ideal bir online UPS çözümüdür. Geniş giriş gerilim aralığı, giriş güç faktörü düzeltme, konvertör olarak çalışabilme, jeneratör ile uyumluluk ve enerji tasarrufu için ECO Mod gibi özellikleriyle hem ev/ofis hem de profesyonel uygulamalarda güvenilir güç sağlar.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>Rack kabinet uygulamaları için rackmount tasarım</li>
              <li>Gerçek çift çevrim teknolojisi</li>
              <li>Mikroişlemci kontrollü arttırılmış güvenilirlik</li>
              <li>Giriş güç faktörü düzeltme (≥ 0.99 @ Nominal Voltage, %100 yükte)</li>
              <li>Geniş giriş gerilim aralığı</li>
              <li>Konvertör olarak çalışabilme</li>
              <li>Enerji tasarrufu için ECO Mod (Sadece 1-3kVA modelleri için)</li>
              <li>Jeneratör ile çalışma uyumluluğu</li>
              <li>6-10kVA için manuel bypass</li>
              <li>Ayarlanabilir akü sayısı (sadece 6-10kVA modelleri için)</li>
              <li>LCD ekran üzerinden veya yazılım aracılığıyla ayarlanabilir şarj akımı (1A ~ 6A)</li>
              <li>Acil durumda kapatma (EPO) (6-10kVA için)</li>
              <li>Kullanıcı dostu ön panel</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/teos100xlrt.png" alt="TEOS 100 XL RT" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Teknik Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Güç: 1 - 10 kVA</li>
          <li>Faz: Mono Faz + Nötr</li>
          <li>Giriş gerilim aralığı: 60-150 VAC veya 120-300 VAC (yük durumuna göre)</li>
          <li>Frekans aralığı: 40Hz ~ 70 Hz</li>
          <li>Çıkış güç faktörü: 0,8 (1-3kVA) / 0,9 (6-10kVA)</li>
          <li>Çıkış gerilimi: 208/220/230/240VAC</li>
          <li>Gerilim regülasyonu: ± 1%</li>
          <li>Frekans aralığı: 46~54 Hz veya 56~64 Hz (senkronize aralık)</li>
          <li>Dalga şekli: Saf sinüs dalgası</li>
          <li>Verim: AC mod %88 (1-3kVA), %93 (6-10kVA)</li>
          <li>Akü tipi ve sayısı: Uygulamaya göre, 2 (1-3kVA) / 16-20 (6-10kVA, ayarlanabilir)</li>
          <li>Şarj akımı: 1A/2A/4A/6A (ayarlanabilir)</li>
          <li>LCD göstergeler: Yük seviyesi, akü seviyesi, AC/Batarya/Bypass/Fault modları</li>
          <li>Alarm: Akü modu, düşük akü, aşırı yük, arıza</li>
          <li>Fiziksel: RT Model Boyutlar (mm): 88(2U)x438x580 (1-3kVA), 133(3U)x438x580 (6-10kVA)</li>
          <li>Net ağırlık: 18 kg (6-10kVA)</li>
          <li>Nem: 0-95% RH @ 0-40°C (yoğuşmasız)</li>
          <li>Akustik gürültü: {'<'} 58dBA @ 1 metre</li>
          <li>Yönetim: Smart RS-232/USB, opsiyonel SNMP</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Ev ve ofis uygulamaları</li>
          <li>Veri merkezi ve IT altyapıları</li>
          <li>Ulaşım sektörü</li>
          <li>Kompleksler, alışveriş merkezleri, zincir marketler ve perakende sektörü</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Katalog ve Kullanma Kılavuzu</h2>
        <a href="https://tescomakademi.com/katalog/tr/Teos_100_XL_RT_Series.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold block mb-2">TEOS 100 XL RT SERİSİ (1 - 10 kVA) Ürün Kataloğu (PDF)</a>
        <a href="https://tescomakademi.com/doc/AGKK14080.PDF" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">TEOS Serisi Kullanma Kılavuzu (PDF)</a>
      </div>
    </div>
  );
} 