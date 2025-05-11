import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function TeosPlus100ProRTDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">TEOS+ 100PRO RT</h1>
          <div className="text-lg text-gray-700 mb-4">1-3 kVA Çevrimiçi UPS</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Ürün Özellikleri</h2>
            <p className="mb-2">TEOS+ 100PRO RT, yüksek frekanslı çevrimiçi çift dönüşüm teknolojisi ve DSP (Dijital Sinyal İşlemcisi) kontrol teknolojisi ile donatılmıştır. Aktif güç faktörü düzeltmesi (APFC) ile 0,99'a kadar giriş güç faktörü sağlar. Çıkış güç faktörü 0.9, geniş giriş gerilim aralığı (110 V ~ 300 Vac) ve frekans aralığı (40 ~ 70 Hz), otomatik frekans algılama, 50/60 Hz frekans dönüşümü, soğuk başlatma, etkili yazılım ve donanım koruması, akıllı fan hızı yönetimi, lityum akü desteği ve gelişmiş akü yönetimi (ABM) gibi özelliklerle öne çıkar.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>Yüksek frekanslı çevrimiçi çift dönüşüm teknolojisi</li>
              <li>DSP (Dijital sinyal işlemcileri) kontrol teknolojisi</li>
              <li>Aktif güç faktörü düzeltmesi (APFC), 0,99'a kadar giriş güç faktörü</li>
              <li>Çıkış güç faktörü 0.9</li>
              <li>Geniş giriş gerilim aralığı (110 V ~ 300 Vac) ve frekans aralığı (40 ~ 70 Hz)</li>
              <li>Otomatik frekans algılama</li>
              <li>50/60 Hz frekans dönüşümü</li>
              <li>Soğuk başlatma (aküden başlatma)</li>
              <li>Etkili yazılım ve donanım koruması</li>
              <li>Düşük gerilim girişinde doğrusal değer kaybı, akü deşarj sürelerini azaltır</li>
              <li>Fan hızı, sıcaklık ile akıllıca değişir, gürültüyü azaltır ve hizmet ömrünü uzatır</li>
              <li>Lityum akülü çalışma</li>
              <li>Yüksek güvenilirlik, yüksek güç ve enerji yoğunluğu</li>
              <li>Daha fazla özerklik sağlar (standart model UPS için tam yükte 15 dakika)</li>
              <li>Uzun çevrim ömrü (≥ 2000 çevrim süresi)</li>
              <li>Yüksek/düşük sıcaklıkta daha yüksek performans</li>
              <li>Gelişmiş akü yönetimi (ABM)</li>
              <li>Döndürülebilir ekran paneli</li>
              <li>Çoklu platform iletişimleri: RS232 (standart), USB/RS485/SNMP/kuru kontaklar (opsiyonel)</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/teosplus100pro.png" alt="TEOS+ 100PRO RT" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Opsiyonel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>USB, RS485 kartı</li>
          <li>AS400 kuru kontaklar</li>
          <li>SNMP kartı</li>
          <li>SMS alarmları</li>
          <li>EPO işlevi</li>
          <li>MBS (Harici bakım bypass anahtarı)</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Veri Merkezi & IT - Büyük küçük sunucu alt yapılarına sahip her veri merkezi için ölçeklenebilen modüler çözümler</li>
          <li>Ev & Ofis - Bilgisayarlar, ev ve küçük işletmenizdeki ağlar için kesintisiz ve güvenilir güç</li>
          <li>Ulaşım - Tüm çevre koşullarında yüksek verimlilik ile çalışabilen ürünler</li>
          <li>Kompleksler - Alışveriş merkezleri, zincir market ve perakende sektöründe Kesintisiz Güç Kaynağı kullanımı</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Katalog ve Teknik Dokümanlar</h2>
        <a href="https://tescomakademi.com/katalog/tr/Teos_Plus_100Pro_RT.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">TEOS+ 100PRO RT (1-3kVA) Ürün Kataloğu (PDF)</a>
      </div>
    </div>
  );
} 