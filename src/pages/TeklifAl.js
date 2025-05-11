import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const sehirler = [
  'Adana','Adıyaman','Afyonkarahisar','Ağrı','Aksaray','Amasya','Ankara','Antalya','Ardahan','Artvin','Aydın','Balıkesir','Bartın','Batman','Bayburt','Belirtilmemiş','Bilecik','Bingöl','Bitlis','Bolu','Burdur','Bursa','Çanakkale','Çankırı','Çorum','Denizli','Diyarbakır','Düzce','Edirne','Elazığ','Erzincan','Erzurum','Eskişehir','Gaziantep','Giresun','Gümüşhane','Güney Kıbrıs','Hakkari','Hasiçi / Suriye','Hatay','Iğdır','Isparta','İstanbul','İzmir','Kahramanmaraş','Karabük','Karaman','Kars','Kastamonu','Kayseri','Kilis','Kırıkkale','Kırklareli','Kırşehir','Kocaeli','Konya','Kütahya','Malatya','Manisa','Mardin','Mersin','Muğla','Muş','Nevşehir','Niğde','Ordu','Osmaniye','Rize','Sakarya','Samsun','Şanlıurfa','Siirt','Sinop','Şırnak','Sivas','Süleymaniye / Irak','Tekirdağ','Tokat','Trabzon','Tunceli','Uşak','Van','Yalova','Yozgat','Zonguldak'
];

const urunGruplari = [
  'Line Interactive UPS','Online 1 Faz / 1 Faz UPS','Online 3 Faz / 1 Faz UPS','Online 3 Faz / 3 Faz UPS','Modüler UPS','Düşük Voltaj UPS','1 Faz / 2 Kutuplu STS','3 Faz / 3-4 Kutuplu STS','TSVR Serisi','Monofaze OVR','Trifaze OVR','Tıbbi İzole Güç Sistemleri','Frekans Konvertörleri','İnvertörler','Redresörler','Kontrol Sistemi','Solar Ürünler','Özel Ürünler','Exide','Enersys','Leoch','Sunlight','Tescom Jeneratör - UPS Haberleşme Kontrol Entegrasyonu','Tescom Akü İzleme Sistemi','Tescom Elektrikli Araç Şarj Cihazları','Akü Kabinleri','Frenleme Modülleri','Haberleşme Aksesuarları','İzolasyon Trafoları'
];

export default function TeklifAl() {
  const [form, setForm] = useState({
    firma: '', sehir: '', adsoyad: '', gorev: '', email: '', telefon: '', urunGrubu: '', urun: '', ek: '', kvkk: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Burada backend'e gönderme işlemi yapılabilir.
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Teklif Al</h1>
      <div className="bg-white rounded-lg shadow p-8">
        <p className="mb-6 text-gray-700">Teklif içeriğinizi aşağıdaki formda belirterek talebinizi gönderebilirsiniz. Satış ekibimiz sizlerle iletişime geçip size özel hazırlanmış teklifi sizlere iletecektir.</p>
        {submitted ? (
          <div className="text-green-700 font-semibold text-center py-8">Talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçilecektir.</div>
        ) : (
        <form
          action="https://formspree.io/f/mnndbdrk"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input name="firma" value={form.firma} onChange={handleChange} required placeholder="Firma Adı" className="p-3 border rounded" />
          <select name="sehir" value={form.sehir} onChange={handleChange} required className="p-3 border rounded">
            <option value="">Şehir Seçiniz (*)</option>
            {sehirler.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <input name="adsoyad" value={form.adsoyad} onChange={handleChange} required placeholder="Adınız Soyadınız (*)" className="p-3 border rounded" />
          <input name="gorev" value={form.gorev} onChange={handleChange} placeholder="Göreviniz" className="p-3 border rounded" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="E-Posta Adresiniz (*)" className="p-3 border rounded" />
          <input name="telefon" value={form.telefon} onChange={handleChange} required placeholder="Telefon Numaranız (*)" className="p-3 border rounded" />
          <select name="urunGrubu" value={form.urunGrubu} onChange={handleChange} required className="p-3 border rounded">
            <option value="">Ürün Grubu Seçiniz (*)</option>
            {urunGruplari.map(u => <option key={u} value={u}>{u}</option>)}
          </select>
          <input name="urun" value={form.urun} onChange={handleChange} placeholder="Ürün (Opsiyonel)" className="p-3 border rounded" />
          <textarea name="ek" value={form.ek} onChange={handleChange} placeholder="Eklemek İstedikleriniz (Opsiyonel)" className="p-3 border rounded h-24" />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="kvkk" checked={form.kvkk} onChange={handleChange} required />
            KVKK sözleşmesini okudum, kabul ediyorum.
          </label>
          <input type="hidden" name="_subject" value="Yeni Teklif Talebi" />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">Teklif Talebimi Gönder</button>
        </form>
        )}
      </div>
    </div>
  );
}
