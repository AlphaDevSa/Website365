import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Domains from './pages/Domains';
import DomainRegistration from './pages/DomainRegistration';
import DomainTransfer from './pages/DomainTransfer';
import DomainReseller from './pages/DomainReseller';
import Hosting from './pages/Hosting';
import DirectAdmin from './pages/DirectAdmin';
import CPanel from './pages/CPanel';
import Reseller from './pages/Reseller';
import ResellerCPanel from './pages/ResellerCPanel';
import ResellerMaster from './pages/ResellerMaster';
import WordPressHosting from './pages/WordPressHosting';
import VPSHosting from './pages/VPSHosting';
import VDSHosting from './pages/VDSHosting';
import HighPerformanceVPS from './pages/HighPerformanceVPS';
import LinuxCoreServers from './pages/LinuxCoreServers';
import Servers from './pages/Servers';
import EmailHosting from './pages/EmailHosting';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import WebDesign from './pages/WebDesign';
import WebsiteDesign from './pages/WebsiteDesign';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import Development from './pages/Development';
import Ecommerce from './pages/Ecommerce';
import ThankYou from './pages/ThankYou';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FairUsagePolicy from './pages/FairUsagePolicy';
import ResellerHostingPolicy from './pages/ResellerHostingPolicy';
import ServiceLevelAgreement from './pages/ServiceLevelAgreement';
import LocationPage from './pages/LocationPage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const PublicSite = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/domains" element={<Domains />} />
      <Route path="/domains/registration" element={<DomainRegistration />} />
      <Route path="/domains/transfer" element={<DomainTransfer />} />
      <Route path="/domains/reseller" element={<DomainReseller />} />
      <Route path="/hosting" element={<Hosting />} />
      <Route path="/hosting/directadmin" element={<DirectAdmin />} />
      <Route path="/hosting/cpanel" element={<CPanel />} />
      <Route path="/hosting/reseller" element={<Reseller />} />
      <Route path="/hosting/reseller/cpanel" element={<ResellerCPanel />} />
      <Route path="/hosting/reseller/master" element={<ResellerMaster />} />
      <Route path="/hosting/wordpress" element={<WordPressHosting />} />
      <Route path="/servers" element={<Servers />} />
      <Route path="/servers/vps" element={<VPSHosting />} />
      <Route path="/servers/high-performance-vps" element={<HighPerformanceVPS />} />
      <Route path="/servers/vds" element={<VDSHosting />} />
      <Route path="/servers/dedicated/linux-core" element={<LinuxCoreServers />} />
      <Route path="/hosting/email" element={<EmailHosting />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/web-design/website" element={<WebsiteDesign />} />
      <Route path="/web-design/maintenance" element={<WebsiteMaintenance />} />
      <Route path="/web-design/development" element={<Development />} />
      <Route path="/web-design/ecommerce" element={<Ecommerce />} />
      <Route path="/location/:slug" element={<LocationPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/fair-usage-policy" element={<FairUsagePolicy />} />
      <Route path="/reseller-hosting-policy" element={<ResellerHostingPolicy />} />
      <Route path="/service-level-agreement" element={<ServiceLevelAgreement />} />
    </Routes>
  </Layout>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </Router>
  );
}

export default App;
