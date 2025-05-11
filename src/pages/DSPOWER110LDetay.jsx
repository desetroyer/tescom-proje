import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function DSPOWER110LDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">DS POWER 110L</h1>
          <div className="text-lg text-gray-700 mb-4">10kVA Online UPS</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">DS POWER 110L, 10 kVA gücünde, çok çeşitli elektriksel ortamlarda çalışabilen DSP kontrol teknolojisine sahip online UPS'tir. DSP kontrol ile verimlilik, güvenilirlik ve işlevsellik, eski analog teknoloji ile ulaşılamayan seviyelere yükseltilmiştir. Yüksek şarj akımı ve paralel akü bağlantı çıkışları ile uzun süreli uygulamalarınıza çözümler sunar. IGBT teknolojisi, yüksek verimlilik, seçilebilir giriş/çıkış gerilim ve frekans aralığı, bakım bypass anahtarı, LCD panel, ısı kompanzasyonlu şarj, çıkış akım sınırlaması, kısa devre ve aşırı yük koruması, otomatik akü testi ve çoklu haberleşme seçenekleri ile hastaneler ve tıp tesisleri için idealdir.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>DSP kontrol teknolojisi ve tamamen dijital yapı</li>
              <li>IGBT teknolojisi ve yüksek verimlilik</li>
              <li>Dahili akü (opsiyonel harici akü bağlanabilir)</li>
              <li>2 paralel bağlı 24 adet akü grubu</li>
              <li>%92'ye varan yüksek çıkış verimi</li>
              <li>Seçilebilir giriş/çıkış gerilim ve frekans aralığı</li>
              <li>Bakım bypass anahtarı</li>
              <li>Yüksek şarj akımı kapasitesi (5A, ayarlanabilir)</li>
              <li>LCD Panel ve mimik led diyagram</li>
              <li>IEC EN62040 direktifine uygun, CE ve ISO9001/14001 uyumlu üretim</li>
              <li>3 seviyeli akü koruması, ısı kompanzasyonlu şarj</li>
              <li>Çıkış akım sınırlaması, DC kaçak, kısa devre ve aşırı yük koruması</li>
              <li>Aşırı gerilim ve akım koruması, sıcaklık uyarısı</li>
              <li>Diagnostik arıza ve hata bildirimi, otomatik akü testi</li>
              <li>RS232 seri port, kuru kontak çıkışları, opsiyonel SNMP</li>
              <li>Kullanıcı ve servis şifreleri ile korunan erişim güvenliği</li>
              <li>2 yıl garanti</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/dspower110l.png" alt="DS POWER 110L" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Hastaneler ve tıp tesisleri</li>
          <li>Medikal cihazlar ve laboratuvar ekipmanları</li>
          <li>Kritik veri ve elektronik sistemler</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Katalog ve Dokümanlar</h2>
        <a href="https://www.tescomakademi.com/katalog/tr/DS-Power-110L.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">DS POWER 110L Kataloğu (PDF)</a>
      </div>
    </div>
  );
} 