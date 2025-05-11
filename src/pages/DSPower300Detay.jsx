import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function DSPower300Detay() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">DS POWER 300</h1>
          <div className="text-lg text-gray-700 mb-4">10-40kVA Online UPS</div>
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Genel Açıklama</h2>
            <p className="mb-2">DS Power 300 Online UPS, gerçek çift çevrim teknolojisi ve DSP kontrollü işlemcisi ile yüksek performansı garanti eden bir kesintisiz güç kaynağıdır. Sessiz çalışması sayesinde özellikle ev-ofis uygulamalarında tercih edilir. Frekans dönüştürücü modu, geniş gerilim/frekans aralığı ve çoklu haberleşme seçeneği ile kullanım esnekliği sunar. Güçlü şarjör seçeneği ile uzun besleme süresi, dokunmatik grafik panel, ayrılabilir çift giriş, sesli ve konuşan bildirimler ürünü farklılaştıran başlıca özellikleridir.</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-4">
              <li>DSP teknolojisi, yüksek performansı garanti eder</li>
              <li>Çıkış güç faktörü (PF) 1.0</li>
              <li>Her fazda aktif güç faktörü düzeltmesi</li>
              <li>Çift giriş</li>
              <li>50Hz/60Hz frekans konvertör modu</li>
              <li>Enerji tasarrufu için Eco Mod'da çalışma</li>
              <li>Acil durumda kapatma (EPO)</li>
              <li>IGBT doğrultucu ve EMI/RFI filtreleme özelliği</li>
              <li>Ayarlanabilir şarj akımı, çok güçlü şarj cihazı</li>
              <li>Ortak akü ile isteğe bağlı paralel çalışma</li>
              <li>Yüksek aşırı yük kapasitesi</li>
              <li>Ayarlanabilir akü tasarımı</li>
              <li>İsteğe bağlı 4.3" dokunmatik LCD</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-start">
          <img src="/images/dspower300.png" alt="DS POWER 300" className="w-72 h-auto rounded shadow" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Kullanım Alanları</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Ev ve ofis uygulamaları</li>
          <li>Veri merkezi & IT altyapıları</li>
          <li>Ulaşım altyapısı</li>
          <li>Kompleksler, alışveriş merkezleri, zincir marketler ve perakende sektörü</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-blue-700 mb-2">Katalog ve Dokümanlar</h2>
        <a href="https://www.tescomakademi.com/katalog/tr/DS-Power-300-10-20-30-40.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">DS POWER 300 10-40kVA Kataloğu (PDF)</a>
      </div>
    </div>
  );
} 