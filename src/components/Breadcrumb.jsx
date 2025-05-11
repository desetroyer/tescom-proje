import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const pageNames = {
  '/': 'Ana Sayfa',
  '/urunler': 'Ürünler',
  '/cozumler': 'Çözümler',
  '/kalite-politikasi': 'Kalite Politikası',
  '/genel-basvuru': 'Genel Başvuru',
  '/staj-basvuru': 'Staj Başvuru',
  '/ups': 'UPS',
  '/iletisim': 'İletişim',
  '/teklif-al': 'Teklif Al',
  '/dokumanlar': 'Dokümanlar',
  '/destek': 'Destek',
  '/urun/dc-guc-besleme-sistemi': 'DC Güç Besleme Sistemi',
  '/urun/leoap-line-interactive-ups': 'LEOAP LINE INTERACTIVE UPS',
  '/urun/mtw150-moduler-ups': 'MTW150 MODÜLER UPS',
  '/urun/ds-power-ups': 'DS POWER UPS',
  '/urun/mtw500-moduler-ups': 'MTW500 MODÜLER UPS',
  '/urun/mtw300-moduler-ups': 'MTW300 MODÜLER UPS'
};

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname;
  const pageName = pageNames[path] || '';

  if (path === '/') return null;

  return (
    <nav className="flex items-center text-gray-500 text-sm mb-6" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center text-blue-600 hover:underline">
        <FaHome className="mr-1" />
      </Link>
      <span className="mx-2">&gt;</span>
      <span className="text-gray-700 font-medium">{pageName}</span>
    </nav>
  );
} 