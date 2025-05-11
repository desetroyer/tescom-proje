import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaFilePdf, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function MTW300Detay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">MTW300 MODÜLER UPS</h1>
          <div className="text-lg text-gray-700 mb-4">30-300 kVA</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">MTW300 Modüler UPS, hassas yükler için tasarlanmış yüksek giriş güç faktörü ile düşük THD sağlayan 3 Level ve DSP teknolojisi ile üretilmiş online cihazlardır. Hot-swappable modüler yapısı sayesinde tek bir kabinle 30 ile 300kVA arasındaki güçlerde çalışabilecek esnekliğe sahiptir. Büyük veri merkezleri ve hassas elektronik cihazlar için en uygun güç çözümlerini sunar. Az yer kaplayan paralellenebilir tasarımı sayesinde 2 m²'den daha küçük bir alanda 900kVA güce ulaşma imkanı sağlar. Rack tipi tasarımı, yüksek güç yoğunluğu, kullanıcı dostu arayüzü, 10 inç grafik dokunmatik ekran, akıllı uyku fonksiyonu (smart sleep), kendini test etme (self-aging), akıllı şarj yönetimi gibi özellikleri ile öne çıkmaktadır.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/mtw300.png" alt="MTW300 MODÜLER UPS" className="w-72 h-auto rounded shadow" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>N + x yedekli modüler tasarım</li>
          <li>Online hot-swappable, bypass ve güç modülü özelliği</li>
          <li>Harici ikinci giriş özelliği</li>
          <li>Sadece 2u yüksekliğinde 30kVA'lık güç modülleriyle 2m²'den daha küçük bir alanda 900kVA güce ulaşma imkanı</li>
          <li>Sadece 2u yüksekliğinde 30kVA'lık güç modülleriyle tek bir kabinde 300kVA güç</li>
          <li>Yüksek verimli ve çevreci özellikler: AC/AC verim &gt; %96, giriş güç faktörü &gt; 0.99 ve giriş THDI &lt; %3</li>
          <li>DSP kontrolün sağladığı kararlı ve güvenli çalışma</li>
          <li>Yüksek performans ve küçük boyut sağlayan IGBT modül</li>
          <li>Geniş giriş gerilim aralığı</li>
          <li>Güç kapasitesinin sadece %10'unu kullanarak tam yük testi seçeneği (self aging mode)</li>
          <li>Enerji tasarrufu ve sistemin hizmet süresini uzatmak için uyku modu (smart sleeping mode)</li>
          <li>Akü ömrünü uzatan akıllı akü yönetimi sistemi</li>
          <li>Şebeke yokken Ups'in aküden başlatılabilme özelliği (cold start)</li>
          <li>Arıza bulmayı kolaylaştıran otomatik hata ve bilgi kayıt özelliği</li>
          <li>IoT fonksiyonu</li>
          <li>Kullanıcı tarafından programlanabilen kuru alarm röle kontakları</li>
          <li>Kullanımı kolaylaştıran 10 inç renkli dokunmatik ekran</li>
          <li>Opsiyonel 30A şarj modülü (Uzun süreli yedeklemeli uygulamalar için)</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Veri merkezi & IT altyapıları</li>
          <li>Ulaşım sektörü</li>
          <li>Kompleksler, alışveriş merkezleri, zincir marketler ve perakende sektörü</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Ürün Katalogları</h2>
          <a
            href="https://www.tescomakademi.com/katalog/tr/MTW300-Moduler-Ups.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <FaFilePdf className="mr-2" />
            MTW300 MODÜLER UPS (30-300 kVA) Kataloğu
          </a>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanma Kılavuzları</h2>
          <a
            href="https://www.tescomakademi.com/doc/MTW-25-300KVA-Modular-UPS-User-Manual-V1.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaFilePdf className="mr-2" />
            MODULER UPS MTW 25-300 KVA Kullanma Kılavuzu
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