import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Teos100Detay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">TEOS 100</h1>
          <div className="text-lg text-gray-700 mb-4">1-10 kVA Online UPS</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">TEOS 100 Online UPS, gerçek çift çevrim teknolojisi ile mikroişlemci kontrollü, çıkış güç faktörü 0.9 ve giriş güç faktörü düzeltmesi ile verimli, sessiz çalışması sayesinde özellikle ev-ofis uygulamalarında tercih edilen bir kesintisiz güç kaynağıdır. Frekans dönüştürücü modu, geniş gerilim/frekans aralığı ve çoklu haberleşme seçeneği ile kullanım esnekliği sunar.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>Gerçek çift çevrim teknolojisi</li>
              <li>Mikroişlemci kontrollü arttırılmış güvenilirlik</li>
              <li>Giriş güç faktörü düzeltme (≥ 0.99 @ Nominal gerilim, %100 yükte)</li>
              <li>Çıkış güç faktörü (PF) 0.9</li>
              <li>Geniş giriş gerilim aralığı</li>
              <li>Konvertör olarak çalışabilme</li>
              <li>Enerji tasarrufu için ECO Mod (Sadece 1-3kVA modelleri için)</li>
              <li>Jeneratör ile çalışma uyumluluğu</li>
              <li>Ayarlanabilir akü sayısı (sadece 6-10kVA modelleri için)</li>
              <li>LCD veya yazılım aracılığıyla ayarlanabilir şarj akımı (1A ~ 6A) (sadece 6/10kVA için)</li>
              <li>Acil durumda kapatma (EPO) yalnızca 6/10kVA için</li>
              <li>Kullanıcı dostu ön panel</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/teos100.png" alt="TEOS 100" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Teknik Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Güç: 1 - 10 kVA</li>
          <li>Faz: Mono Faz + Nötr</li>
          <li>Giriş gerilim aralığı: 60-150 VAC veya 120-300 VAC (%50 yükte), 90-140 VAC veya 180-280 VAC (%100 yükte)</li>
          <li>Frekans aralığı: 40Hz ~ 70 Hz</li>
          <li>Çıkış güç faktörü: 0.9</li>
          <li>Çıkış gerilimi: 100/110/115/120/127VAC veya 200/208/220/230/240VAC</li>
          <li>Gerilim toleransı: ± %1</li>
          <li>Frekans aralığı (senkronize): 47~53 Hz veya 57~63 Hz</li>
          <li>Frekans aralığı (akü mod): 50 Hz veya 60Hz ± %0.5</li>
          <li>Crest faktörü: 3:1</li>
          <li>Gerilim THD: {'<='} %3 THD (doğrusal yük), {'<='} %6 THD (doğrusal olmayan yük)</li>
          <li>Transfer süresi: Sıfır (AC mod -> Battery Mode), 4 ms (Inverter -> bypass)</li>
          <li>Dalga şekli (akü mod): Sinüs dalga</li>
          <li>Verim: AC mod %88, Akü mod %83</li>
          <li>Akü tipi ve sayısı: 12V / 9AH x 2 (standart model), 16-20 (uzun süreli model, ayarlanabilir)</li>
          <li>Tipik şarj süresi: 4-6 saatte %90 kapasiteye ulaşır (standart model)</li>
          <li>Şarj akımı: 1A/2A/4A/6A (ayarlanabilir, modeline göre)</li>
          <li>LCD göstergeler: Yük seviyesi, Akü seviyesi, AC mod, Akü mod, Bypass mod ve Hata göstergeleri</li>
          <li>Alarm: Akü modu (4 sn'de bir), düşük akü (her saniye), aşırı yük (saniyede 2 defa), hata (sürekli)</li>
          <li>Fiziksel: Boyutlar (mm): 190x442x688 (standart), 190x442x318 (uzun süreli)</li>
          <li>Net ağırlık: 66 kg (standart), 16 kg (uzun süreli)</li>
          <li>Çevresel: Bağıl nem %0-95 RH @ 0-40°C (yoğunlaşmasız)</li>
          <li>Gürültü seviyesi: {'<'} 58dBA @ 1 metre</li>
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
        <a href="https://tescomakademi.com/katalog/tr/TEOS100.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold block mb-2">TEOS 100 SERİSİ (1kVA - 2kVA - 3kVA - 6kVA - 10kVA) Ürün Kataloğu (PDF)</a>
        <a href="https://tescomakademi.com/doc/AGKK13351.PDF" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">TEOS Serisi Kullanma Kılavuzu (PDF)</a>
      </div>
    </div>
  );
} 