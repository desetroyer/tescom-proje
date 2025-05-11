import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const kataloglar = [
  { name: 'DS POWER 300 60-100kVA', url: 'https://www.tescomakademi.com/katalog/tr/DS-Power-300-60-80-100.pdf' },
  { name: 'DS POWER 300 10-40kVA', url: 'https://www.tescomakademi.com/katalog/tr/DS-Power-300-10-20-30-40.pdf' },
  { name: 'CL100 6-10kVA', url: 'https://www.tescomakademi.com/katalog/tr/CL100-6-10.pdf' },
  { name: 'DS POWER 160-500kVA', url: 'https://www.tescomakademi.com/katalog/tr/DS-Power-160-500.pdf' },
  { name: 'NEOLINE PRO 300XL 50-200kVA', url: 'https://www.tescomakademi.com/katalog/tr/Neoline-PRO-300XL-50-200.pdf' },
  { name: 'NEOLINE 300 10-40kVA', url: 'https://www.tescomakademi.com/katalog/tr/Neoline-300-PF-09-10-40.pdf' },
  { name: 'NEOLINE PRO RT 6-10kVA', url: 'https://www.tescomakademi.com/katalog/tr/Neoline-PRO-RT-6-10.pdf' },
  { name: 'NEOLINE 100 6-10kVA', url: 'https://www.tescomakademi.com/katalog/tr/Neoline-100-6-10.pdf' },
  { name: 'NEOLINE RT 1-3kVA', url: 'https://www.tescomakademi.com/katalog/tr/Neoline-RT-PF-09.pdf' },
  { name: 'NEOLINE 1-3kVA', url: 'https://www.tescomakademi.com/katalog/tr/Neoline-1-3.pdf' },
];

const eacSertifikalari = [
  { name: 'RA.RU.10HA46-23_03_0154-Макидинова_aku_kabini_muafiyet', url: 'https://tescomakademi.com/kalite/RA.RU.10HA46-23%5F03%5F0154-%D0%9C%D0%B0%D0%BA%D0%B8%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%5Faku%5Fkabini%5Fmuafiyet.pdf' },
  { name: 'RU-C-TR.AБ53.B.06944-23_STS', url: 'https://tescomakademi.com/kalite/RU-C-TR.A%D0%9153.B.06944-23%5FSTS.pdf' },
  { name: 'ЕАЭС-N-RU Д-TR.РА03.B.18527-23_UPS 037', url: 'https://tescomakademi.com/kalite/%D0%95%D0%90%D0%AD%D0%A1-N-RU%20%D0%94-TR.%D0%A0%D0%9003.B.18527-23%5FUPS%20037-12.04.2028.pdf' },
  { name: 'RU-C-TR.AБ53.B.06947-23_UPS', url: 'https://tescomakademi.com/kalite/RU-C-TR.A%D0%9153.B.06947-23%5FUPS.pdf' },
  { name: '04ИДЮ101.TR.С05569_1307551_AKU KABINI', url: 'https://tescomakademi.com/kalite/04%D0%98%D0%94%D0%AE101.TR.%D0%A105569%5F1307551%5FAKU%20KABINI.pdf' },
  { name: 'RU-C-TR.AБ53.B.06943-23_Regulator', url: 'https://tescomakademi.com/kalite/RU-C-TR.A%D0%9153.B.06943-23%5FRegulator.pdf' },
  { name: 'RU Д-TR.РА01.В.204444-23_AKÜ', url: 'https://tescomakademi.com/kalite/RU-%D0%94-TR.%D0%A0%D0%9001.%D0%92204444-23%5FAKU.pdf' },
];

const ukraynaBeyani = [
  { name: 'Uygunluk Beyanı', url: 'https://tescomakademi.com/kalite/20240501162024301.pdf' },
];

const sifirAtik = [
  { name: 'Sıfır Atık Belgesi', url: 'https://www.tescom-ups.com/ftp%5Ffiles/ftp%5Fdocument/sifir%5Fatik/SifirAtikBelge.pdf' },
];

export default function Dokumanlar() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-8 text-blue-800 text-center">Dokümanlar</h1>
      <Section title="Ürün Katalogları" docs={kataloglar} />
      <Section title="EAC Sertifikaları" docs={eacSertifikalari} />
      <Section title="Ukrayna Teknik Yönetmeliklere Uygunluk Beyanı" docs={ukraynaBeyani} />
      <Section title="Sıfır Atık" docs={sifirAtik} />
    </div>
  );
}

function Section({ title, docs }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-blue-700 mb-4">{title}</h2>
      <div className="bg-white rounded-lg shadow divide-y">
        {docs.map((doc, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-blue-50 transition">
            <span className="text-gray-800 font-medium">{doc.name}</span>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">İndir / Görüntüle</a>
          </div>
        ))}
      </div>
    </div>
  );
} 