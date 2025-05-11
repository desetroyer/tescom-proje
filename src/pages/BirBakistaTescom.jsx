import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function BirBakistaTescom() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Bir Bakışta Tescom</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">40 Yılı Aşkın Süredir Kesintisiz Hizmet!</h2>
        <p className="text-gray-700 mb-4">
          <b>Tescom Elektronik Sanayi Ticaret Anonim Şirketi</b>, Türk sanayisinin kesintisiz enerji ihtiyacından yola çıkarak "güç elektroniği" konusunda faaliyet göstermek üzere İzmir'de kuruldu. 1980 yılında inverter ve elektronik kontrol cihazları üretmek için faaliyete başladı. 1986 yılında, ülkemizde hızla gelişen bilgisayar ve bilgisayar teknolojilerinin ihtiyacını karşılamak üzere <b>Kesintisiz Güç Kaynağı</b> üretimine başladı.
        </p>
        <p className="text-gray-700 mb-4">
          Tescom tescilli markası <b>TESCOM Kesintisiz Güç Kaynakları</b>, TSE ve CE standartlarına uygun olarak ISO9001 ve 14001 kalite güvencesiyle 40'a yakın mühendis ve 300'ü aşkın personelle, İzmir Menemen Ulukent Sanayi Sitesi'nde 10.000 m² alan üzerine kurulu tesislerinde üretilmektedir.
        </p>
        <p className="text-gray-700 mb-4">
          40 yılı aşkın tecrübesiyle, seri üretimini yaptığı cihaz sayısı 150.000'in üzerindedir. Dünya teknolojilerini yakından takip ederek, Ar-Ge çalışmaları ile cihazlarını sürekli geliştiren TESCOM, yurt içi UPS üretiminin önemli bir bölümünü karşılamakta ve 40'tan fazla ülkede binlerce kullanıcıya ulaşmaktadır.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Tarihçe & Başarılar</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>1980: İzmir'de kuruldu, inverter ve elektronik kontrol cihazları üretimi başladı.</li>
            <li>1986: Kesintisiz Güç Kaynağı üretimine başlandı.</li>
            <li>2003: Türkiye'nin ilk Statik Transfer Anahtarı üretildi.</li>
            <li>2011: 3 fazlı STS üreten ilk ve tek Türk firması oldu.</li>
            <li>2016: DMY Grup Şirketleri çatısı altına katıldı.</li>
            <li>2020+: 40'tan fazla ülkeye ihracat, 150.000+ cihaz üretimi.</li>
            <li>İlk 500 Bilişim Şirketi arasında, KGK sektör liderleri arasında yer aldı.</li>
            <li>TESİD 2002 Elektronikte Yenilikçilik-Yaratıcılık Ödülü sahibi.</li>
          </ul>
        </div>
        <div className="bg-blue-50 rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Üretim & Teknoloji</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>10.000 m² modern üretim tesisi (İzmir Menemen Ulukent Sanayi Sitesi)</li>
            <li>40+ mühendis, 300+ personel</li>
            <li>ISO9001 ve 14001 kalite güvencesi</li>
            <li>TSE ve CE standartlarına uygun üretim</li>
            <li>Ar-Ge ve inovasyon odaklı yaklaşım</li>
            <li>Türkiye'nin ilk T-MON KGK Uzaktan İzleme Yazılımı</li>
            <li>DSP Kontrollü, IGBT Redresörlü, DS Power Serisi 10-800 kVA cihazlar</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-2">Referans Projeler & Kullanıcılar</h3>
        <p className="text-gray-700 mb-2">Botaş Bakü-Tiflis-Ceyhan Petrol Boru Hatları, Hidroelektrik Santralleri, Gölcük Donanma Tesisleri, Arçelik üretim tesisleri, Nato, Siemens, Avea, Turkcell Teknoloji, Kahire Havalimanı gibi önemli projelerde Tescom ürünleri tercih edilmektedir.</p>
      </div>

      <div className="bg-blue-50 rounded-lg shadow p-6 mb-8">
        <h3 className="text-xl font-bold text-blue-700 mb-2">İletişim & Merkezler</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li><b>İstanbul Genel Merkez:</b> Dudullu Organize Sanayi Bölgesi 2.Cadde No:7 Zemin Kat Ümraniye / İSTANBUL</li>
          <li><b>İzmir Bölge Müdürlüğü (Fabrika ve Yurtdışı Satış):</b> 10009 Sokak No:1 Ulukent Sanayi Sitesi Menemen / İZMİR</li>
          <li><b>Ankara Bölge Müdürlüğü:</b> İvedik OSB Melih Gökçek Bulvarı 1122. Cad. Maxivedik İş Merkezi No:20/106 Yenimahalle / ANKARA</li>
          <li><b>Telefon:</b> +90 (850) 277 88 77</li>
          <li><b>E-posta:</b> info@tescom-ups.com</li>
        </ul>
      </div>
    </div>
  );
} 