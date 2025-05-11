// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import IkPolitikasi from './pages/IkPolitikasi';
import GenelBasvuru from './pages/GenelBasvuru';
import StajBasvuru from './pages/StajBasvuru';
import UPS from './pages/UPS';
import Cozumler from './pages/Cozumler';
import Iletisim from './pages/Iletisim';
import Navbar from './components/Navbar';
import TeklifAl from './pages/TeklifAl';
import Urunler from './pages/Urunler';
import Dokumanlar from './pages/Dokumanlar';
import Destek from './pages/Destek';
import UrunDetay from './pages/UrunDetay';
import LeoapDetay from './pages/LeoapDetay';
import DCGucDetay from './pages/UrunDetay';
import MTW150Detay from './pages/MTW150Detay';
import DSPowerDetay from './pages/DSPowerDetay';
import MTW500Detay from './pages/MTW500Detay';
import MTW300Detay from './pages/MTW300Detay';
import BirBakistaTescom from './pages/BirBakistaTescom';
import TescomMarkaliUrunlerArge from './pages/TescomMarkaliUrunlerArge';
import CozumUlasim from './pages/CozumUlasim';
import CozumMedikal from './pages/CozumMedikal';
import CozumVeriMerkeziIT from './pages/CozumVeriMerkeziIT';
import CozumEndustriyel from './pages/CozumEndustriyel';
import CozumEvOfis from './pages/CozumEvOfis';
import CozumKompleksler from './pages/CozumKompleksler';
import DSPOWER110LDetay from './pages/DSPOWER110LDetay';
import PowerSafeOPzSDetay from './pages/PowerSafeOPzSDetay';
import DSPower300Detay from './pages/DSPower300Detay';
import TeosPlus100ProRTDetay from './pages/TeosPlus100ProRTDetay';
import Teos100XLRTDetay from './pages/Teos100XLRTDetay';
import LeoIIDetay from './pages/LeoIIDetay';
import Teos100Detay from './pages/Teos100Detay';
import KalitePolitikasi from './pages/KalitePolitikasi';
import InsanKaynaklari from './pages/InsanKaynaklari';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home showBoxes={true} />} />
        <Route path="/ik" element={<InsanKaynaklari />} />
        <Route path="/ups" element={<UPS />} />
        <Route path="/cozumler" element={<Cozumler />} />
        <Route path="/cozumler/endustriyel" element={<CozumEndustriyel />} />
        <Route path="/cozumler/medikal" element={<CozumMedikal />} />
        <Route path="/cozumler/veri-merkezi-it" element={<CozumVeriMerkeziIT />} />
        <Route path="/cozumler/ev-ofis" element={<CozumEvOfis />} />
        <Route path="/cozumler/ulasim" element={<CozumUlasim />} />
        <Route path="/cozumler/kompleksler" element={<CozumKompleksler />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/teklif-al" element={<TeklifAl />} />
        <Route path="/urunler" element={<Urunler />} />
        <Route path="/dokumanlar" element={<Dokumanlar />} />
        <Route path="/destek" element={<Destek />} />
        <Route path="/urun/dc-guc-besleme-sistemi" element={<DCGucDetay />} />
        <Route path="/urun/leoap-line-interactive-ups" element={<LeoapDetay />} />
        <Route path="/urun/mtw150-moduler-ups" element={<MTW150Detay />} />
        <Route path="/urun/ds-power-ups" element={<DSPowerDetay />} />
        <Route path="/urun/mtw500-moduler-ups" element={<MTW500Detay />} />
        <Route path="/urun/mtw300-moduler-ups" element={<MTW300Detay />} />
        <Route path="/bir-bakista-tescom" element={<BirBakistaTescom />} />
        <Route path="/tescom-markali-urunler-ar-ge" element={<TescomMarkaliUrunlerArge />} />
        <Route path="/urun/ds-power-110l" element={<DSPOWER110LDetay />} />
        <Route path="/urun/powersafe-opzs" element={<PowerSafeOPzSDetay />} />
        <Route path="/urun/ds-power-300" element={<DSPower300Detay />} />
        <Route path="/urun/teos-plus-100pro-rt" element={<TeosPlus100ProRTDetay />} />
        <Route path="/urun/teos-100-xl-rt" element={<Teos100XLRTDetay />} />
        <Route path="/urun/leo-ii" element={<LeoIIDetay />} />
        <Route path="/urun/teos-100" element={<Teos100Detay />} />
        <Route path="/kalite-politikasi" element={<KalitePolitikasi />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
