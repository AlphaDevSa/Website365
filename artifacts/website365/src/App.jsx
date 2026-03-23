import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
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

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure content is rendered
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

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/hosting/email" element={<EmailHosting />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          {/* Placeholders for links that might not have pages yet */}
          <Route path="/client-area" element={<div className="p-20 text-center text-2xl">Client Area Portal Placeholder</div>} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/web-design/website" element={<WebsiteDesign />} />
          <Route path="/web-design/maintenance" element={<WebsiteMaintenance />} />
          <Route path="/web-design/development" element={<Development />} />
          <Route path="/web-design/ecommerce" element={<Ecommerce />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
