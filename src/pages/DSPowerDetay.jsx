import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaFilePdf, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function DSPowerDetay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">DS POWER</h1>
          <div className="text-lg text-gray-700 mb-4">800kVA</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">Tescom DS Power UPS, performanstan ödün vermeden çok çeşitli elektriksel ortamlara uygun olarak programlanabilen en son DSP teknolojisini kullanır. DS Power ile birlikte, verimlilik, güvenilirlik ve fonksiyonellik eski analog teknoloji ile ulaşılamayan seviyelere yükseltilmiştir. Bu teknoloji sadece MTBF'de önemli artış yaratmakla kalmayıp, aynı zamanda DSP'nin çok yüksek hızda doğru olarak sinyalleri işleme kabiliyeti ile tüm UPS alt sistemlerinin büyük ölçüde arttırılmış hassasiyette kontrol edilmesine olanak sağlar.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/dspower.png" alt="DS POWER" className="w-72 h-auto rounded shadow" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Daha az yer kaplayan kompakt tasarım</li>
          <li>Trafosuz UPS teknolojisi</li>
          <li>3 adet DSP ile kontrol edilen modüler yapı</li>
          <li>Daha az elektronik komponent</li>
          <li>Girişte düşük akım harmonik distorsiyonu</li>
          <li>Yüksek giriş güç faktörü</li>
          <li>Yüksek verim</li>
          <li>Seçilebilir giriş/çıkış gerilim/frekans aralığı</li>
          <li>Statik ve bakım bypass anahtarı</li>
          <li>Cold start özelliği</li>
          <li>IEC EN62040 direktifine uygun</li>
          <li>Girişte gelişmiş kontrol</li>
          <li>3 seviyeli akü koruması</li>
          <li>Şarj/deşarj akımı göstergesi</li>
          <li>Grafik panel (7 inç panel opsiyonel)</li>
          <li>Tam dijital yapı</li>
          <li>Isı kompanzasyonlu şarj (opsiyonel)</li>
          <li>Evirici kontrolü için ayrı DSP</li>
          <li>PFC doğrultucu kontrolü için ayrı DSP</li>
          <li>Yüksek şarj akımı kapasitesi</li>
          <li>Eco mod çalışma (opsiyonel)</li>
          <li>Split by-pass girişi (ikinci giriş)</li>
          <li>Çıkış akım sınırlaması</li>
          <li>Çıkış DC kaçak koruması</li>
          <li>Çıkışta kısa devre ve aşırı yük koruması</li>
          <li>Harici REPO girişi</li>
          <li>512 olay kaydı (46.000 alarm)</li>
          <li>Saat ve takvim (akü destekli)</li>
          <li>Otomatik akü testi, kalan akü süresi göstergesi</li>
          <li>2 adet RS232 seri port ve 12 adet kuru kontak çıkışı</li>
          <li>Opsiyonel SNMP ve MODBUS</li>
          <li>Gelişmiş uzaktan kontrol özellikleri</li>
          <li>2 yıl garanti</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Endüstriyel uygulamalar</li>
          <li>Medikal sistemler ve hastaneler</li>
          <li>Veri merkezi & IT altyapıları</li>
          <li>Ulaşım sektörü</li>
          <li>Kompleksler, alışveriş merkezleri, zincir marketler ve perakende sektörü</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Ürün Kataloğu</h2>
          <a
            href="https://www.tescomakademi.com/katalog/tr/DS-Power-800kVA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <FaFilePdf className="mr-2" />
            DS POWER 800kVA Kataloğu
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Paylaş:</span>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.tescom-ups.com/tr/urun/ds-power"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://www.tescom-ups.com/tr/urun/ds-power"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={24} />
          </a>
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