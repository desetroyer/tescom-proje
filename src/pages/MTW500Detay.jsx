import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FaFilePdf, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function MTW500Detay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">MTW500 MODÜLER UPS</h1>
          <div className="text-lg text-gray-700 mb-4">50-600 kVA</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">MTW500 Modüler UPS, hassas yükler için tasarlanmış, yüksek giriş güç faktörü ve düşük THD sağlayan 3 Level ve DSP teknolojisi ile üretilmiş online cihazlardır. Hot-swappable modüler yapısı sayesinde tek bir kabinle 50 ile 600kVA arasındaki güçlerde çalışabilecek esnekliğe sahiptir. Büyük veri merkezleri ve hassas elektronik cihazlar için en uygun güç çözümlerini sunar. Az yer kaplayan paralellenebilir tasarımı sayesinde 4m²'den daha küçük bir alanda 1800kVA güce ulaşma imkanı sağlar. Rack tipi tasarımı, yüksek güç yoğunluğu, kullanıcı dostu arayüzü, 7&10" inç grafik dokunmatik ekrana ek olarak her güç modülü için bağımsız LCD, akıllı uyku fonksiyonu (smart sleep), kendini test etme (self-aging), akıllı şarj yönetimi gibi özellikleri ile öne çıkmaktadır.</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/mtw500.png" alt="MTW500 MODÜLER UPS" className="w-72 h-auto rounded shadow" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Özellikler</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><b>Kompakt Tasarım:</b> Tek bir kabinde 500kVA, 1,5 m²'den az yer kaplar, değerli oda alanından tasarruf sağlar</li>
          <li><b>Yüksek Güç Yoğunluğu:</b> 4U yükseklikte 50kVA güç modülü, kapasite genişletmesi için kolaylık sağlar</li>
          <li><b>Yüksek Verim:</b> Gelişmiş 3 Level teknoloji, %96'ya kadar çift dönüşüm modunda çalışan yüksek verimliliği garanti eder</li>
          <li><b>Akıllı Şarj Yönetimi:</b> Sistem, tüm şarj ve deşarj sürecini akıllıca kontrol eder, akünün ömrünü etkili bir şekilde iyileştirir.</li>
          <li><b>Yüksek Ölçeklenebilirlik:</b> Sistem tek bir kabinde 50kVA'dan 600kVA'ya kadar, 1800kVA'ya kadar kapasite için 30 modül ve 3 ünite paralel olarak konfigüre edilebilir.</li>
          <li><b>Kullanıcı Dostu HMI:</b> Grafik ekranlı 7&10" dokunmatik renkli LCD, IoT fonksiyon</li>
          <li><b>Akıllı Uyku Fonksiyonu:</b> Sistem, toplam yük oranını artırmak ve daha yüksek verimlilik elde etmek için bazı güç modüllerini akıllıca kapatabilir</li>
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
            href="https://www.tescomakademi.com/katalog/tr/MTW500-Moduler-Ups.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            <FaFilePdf className="mr-2" />
            MTW500 MODÜLER UPS (50-600 kVA) Kataloğu
          </a>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanma Kılavuzları</h2>
          <a
            href="https://www.tescomakademi.com/doc/MTW-50-600KVA-Modular-UPS-%E2%85%A1-User-Manual-V1.4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            <FaFilePdf className="mr-2" />
            MTW500 MODÜLER UPS 50-600 kVA Kullanma Kılavuzu
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