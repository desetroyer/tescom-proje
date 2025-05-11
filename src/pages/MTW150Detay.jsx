import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaFilePdf, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function MTW150Detay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">MTW150 MODÜLER UPS</h1>
          <div className="text-lg text-gray-700 mb-4">10-150 kVA</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">MTW150 MODÜLER UPS, 10-150 kVA aralığında, esnek konfigürasyon seçenekleri ve akıllı uyku fonksiyonu ile öne çıkan, 3F/3F, 3F/1F, 1F/1F online çift çevrimli bir güç kaynağıdır. 19” standart raf dolabına uyumlu modüler tasarımı sayesinde, veri merkezleri ve sunucu altyapıları için idealdir. Yüksek güç yoğunluğu, kullanıcı dostu bakım ve alan avantajı sunar. Akıllı şarj yönetimi ile akü ömrünü uzatır, hem kurşun asit hem de lityum akülerle uyumludur. 7 inç dokunmatik LCD ekranı ve IoT fonksiyonları ile modern bir kullanıcı arayüzü sağlar. Akıllı uyku fonksiyonu sayesinde, toplam yük oranını artırmak için bazı güç modüllerini otomatik olarak kapatabilir ve daha yüksek verimlilik elde eder. Yüksek güvenilirlik ve çevreye uyarlanabilirlik seviyesiyle, kritik uygulamalar için idealdir.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/mtw150.png" alt="MTW150 MODÜLER UPS" className="w-72 h-auto rounded shadow" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><b>Rack Modüler Tasarım:</b> 19” standart raf dolabı ile uyumlu, sunucularla entegre edilebilir.</li>
          <li><b>Esnek Yapılandırma:</b> Sistem 3/3, 3/1 ve 1/1 olarak yapılandırılabilir.</li>
          <li><b>Yüksek Güç Yoğunluğu:</b> 2U’da 25kW, alan ve bakım için kullanıcı dostu.</li>
          <li><b>Akıllı Şarj Yönetimi:</b> Tüm şarj ve deşarj sürecini akıllıca kontrol ederek akü ömrünü uzatır.</li>
          <li><b>Şarj Esnekliği:</b> Süper şarjı destekler, hem kurşun asit hem de lityum akülerle uyumludur.</li>
          <li><b>Kullanıcı Dostu Arayüz:</b> IoT fonksiyonlarına sahip 7 inç dokunmatik LCD ekran.</li>
          <li><b>Akıllı Uyku Fonksiyonu:</b> Toplam yük oranını artırmak için bazı güç modüllerini akıllıca kapatabilir, daha yüksek verimlilik sağlar.</li>
          <li><b>Son Derece Güvenilir ve Uyarlanabilir:</b> Bileşenlerin korunması ile yüksek güvenilirlik ve çevreye uyarlanabilirlik seviyesi, ayrıca nötr olmadan akü bağlantısını destekler.</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Veri merkezleri ve IT altyapıları</li>
          <li>Ulaşım sektörü (her türlü çevre koşulunda yüksek verimlilik)</li>
          <li>Kompleksler, alışveriş merkezleri, zincir marketler ve perakende sektörü</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Ürün Katalogları</h2>
          <a
            href="https://www.tescomakademi.com/katalog/tr/MTW150-Moduler-Ups.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <FaFilePdf className="mr-2" />
            MTW150 MODULAR UPS (10-150kVA) Kataloğu
          </a>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanma Kılavuzları</h2>
          <a
            href="https://www.tescomakademi.com/doc/MTW-10-150KVA-Modular-UPS-User-Manual-V1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaFilePdf className="mr-2" />
            MTW150 MODÜLER UPS 10-150 kVA Kullanma Kılavuzu
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
