import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, Phone, Mail, Facebook, MapPin, MessageCircle,
  Server, Globe, Monitor, Zap, Shield, Users, Cpu, MailOpen, ShoppingCart,
  RefreshCw, Package, ArrowRight, Clock, Heart, ExternalLink,
} from 'lucide-react';
import SEO from './SEO';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.252c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.118 1.026 6.985 2.894s2.893 4.345 2.893 6.985c-.003 5.444-4.432 9.881-9.877 9.881m11.384-15.355C20.315 3.307 16.204 1.121 11.968 1.121 6.015 1.121 1.17 5.966 1.17 11.918c0 1.905.495 3.737 1.436 5.345l-1.527 5.582 5.715-1.498a11.85 11.85 0 005.174 1.192h.003c5.948 0 10.792-4.846 10.792-10.796 0-2.883-1.123-5.592-3.158-7.628" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const NAV_ITEMS = [
  {
    label: 'Domains',
    children: [
      { label: 'Domain Search', to: '/domains', icon: Globe, desc: 'Find your perfect domain name' },
      { label: 'Registration', to: '/domains/registration', icon: Package, desc: 'Register .co.za, .com & more' },
      { label: 'Transfer', to: '/domains/transfer', icon: RefreshCw, desc: 'Move your domain to us' },
      { label: 'Domain Reseller', to: '/domains/reseller', icon: Users, desc: 'Sell domains under your brand' },
    ],
  },
  {
    label: 'Web Hosting',
    children: [
      { label: 'All Hosting', to: '/hosting', icon: Server, desc: 'Compare all hosting plans' },
      { label: 'cPanel Hosting', to: '/hosting/cpanel', icon: Server, desc: 'Industry-standard control panel' },
      { label: 'DirectAdmin Hosting', to: '/hosting/directadmin', icon: Zap, desc: 'Fast & lightweight panel' },
      { label: 'WordPress Hosting', to: '/hosting/wordpress', icon: Monitor, desc: 'Optimised for WordPress' },
      { label: 'Email Hosting', to: '/hosting/email', icon: MailOpen, desc: 'Professional business email' },
    ],
  },
  {
    label: 'Reseller Hosting',
    children: [
      { label: 'All Reseller', to: '/hosting/reseller', icon: Users, desc: 'Start your hosting business' },
      { label: 'cPanel Reseller', to: '/hosting/reseller/cpanel', icon: Server, desc: 'Full WHM access' },
      { label: 'Master Reseller', to: '/hosting/reseller/master', icon: Shield, desc: 'Create your own resellers' },
    ],
  },
  {
    label: 'Web Design',
    children: [
      { label: 'All Web Design', to: '/web-design', icon: Monitor, desc: 'Overview of design services' },
      { label: 'Website Design', to: '/web-design/website', icon: Monitor, desc: 'Custom, responsive websites' },
      { label: 'eCommerce', to: '/web-design/ecommerce', icon: ShoppingCart, desc: 'Online stores that convert' },
      { label: 'Custom Development', to: '/web-design/development', icon: Zap, desc: 'React, Node.js & more' },
      { label: 'Maintenance', to: '/web-design/maintenance', icon: RefreshCw, desc: 'Keep your site healthy' },
    ],
  },
  {
    label: 'Servers',
    children: [
      { label: 'All Servers', to: '/servers', icon: Cpu, desc: 'Overview of server plans' },
      { label: 'VPS Hosting', to: '/servers/vps', icon: Cpu, desc: 'KVM VPS with full root access' },
      { label: 'High Performance VPS', to: '/servers/high-performance-vps', icon: Zap, desc: 'ECC RAM, NVMe SSD, unlimited traffic' },
      { label: 'VDS Servers', to: '/servers/vds', icon: Server, desc: 'Dedicated resources, KVM virtualisation' },
      { type: 'divider', label: 'Dedicated Servers' },
      { label: 'Linux Core Servers', to: '/servers/dedicated/linux-core', icon: Server, desc: 'Bare metal Dell Xeon — full server, yours alone' },
    ],
  },
];

const DropdownMenu = ({ items, isOpen }) => (
  <div
    className={`absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top-left ${
      isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
    }`}
    style={{ zIndex: 9999 }}
  >
    <div className="p-2">
      {items.map((item) => {
        if (item.type === 'divider') {
          return (
            <div key={item.label} className="flex items-center gap-2 px-3 pt-3 pb-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
          );
        }
        const { label, to, icon: Icon, desc } = item;
        return (
          <Link
            key={to}
            to={to}
            className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 group transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
              <Icon className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 leading-tight">{label}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-snug">{desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
);

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSection(null);
  }, [location.pathname]);

  const openMenu = (label) => {
    clearTimeout(dropdownTimerRef.current);
    setOpenDropdown(label);
  };

  const closeMenu = () => {
    dropdownTimerRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (paths) =>
    Array.isArray(paths)
      ? paths.some((p) => location.pathname === p || location.pathname.startsWith(p + '/'))
      : location.pathname === paths;

  return (
    <div className="flex flex-col min-h-screen">
      <SEO />

      {/* ── TOP BAR ─────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="mailto:support@website365.co.za" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" /> support@website365.co.za
            </a>
            <a href="tel:0861995070" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" /> 086 199 5070
            </a>
            <a href="tel:+27836000152" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" /> +27 83 600 0152
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/27836000152"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100/80'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link to="/" className="shrink-0 flex items-center">
              <img
                src="/images/logo/logo.png"
                alt="Website365 - Web Hosting, Domains & Web Design South Africa"
                className="h-12 w-auto"
                onError={(e) => { e.target.alt = 'Website365'; }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === '/'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>

              {NAV_ITEMS.map(({ label, children }) => {
                const paths = children.map((c) => c.to);
                const active = isActive(paths);
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => openMenu(label)}
                    onMouseLeave={closeMenu}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        active
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openDropdown === label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <DropdownMenu items={children} isOpen={openDropdown === label} />
                  </div>
                );
              })}

              <Link
                to="/partners"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/partners')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Partners
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive('/contact')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/hosting"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5"
              >
                Get Hosting <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU ───────────────────────────────────────────────── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh]">
            <div className="px-4 py-4 space-y-1">
              <Link to="/" className="flex items-center py-2.5 px-3 rounded-xl font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Home
              </Link>

              {NAV_ITEMS.map(({ label, children }) => (
                <div key={label}>
                  <button
                    onClick={() => setMobileSection(mobileSection === label ? null : label)}
                    className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  >
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        mobileSection === label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileSection === label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-3 pl-3 border-l-2 border-blue-100 space-y-0.5 py-1 mb-1">
                      {children.map((child) => {
                        if (child.type === 'divider') {
                          return (
                            <p key={child.label} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2 pt-2 pb-0.5">
                              {child.label}
                            </p>
                          );
                        }
                        return (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                          >
                            <child.icon className="w-4 h-4 text-blue-500 shrink-0" />
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

              <Link to="/partners" className="flex items-center py-2.5 px-3 rounded-xl font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Partners
              </Link>
              <Link to="/contact" className="flex items-center py-2.5 px-3 rounded-xl font-semibold text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                Contact
              </Link>

              <div className="pt-3 pb-1 border-t border-gray-100">
                <Link
                  to="/hosting"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md"
                >
                  Get Hosting <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="flex-grow">{children}</main>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">

        {/* Pre-footer CTA strip */}
        <div className="border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/20 rounded-2xl px-8 py-7">
              <div>
                <h2 className="text-xl font-extrabold text-white mb-1">Ready to get your business online?</h2>
                <p className="text-slate-400 text-sm">South African NVMe hosting, domains &amp; web design — all in one place.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/hosting"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-700/30 whitespace-nowrap"
                >
                  View Hosting Plans <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/domains"
                  className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap"
                >
                  Search Domains
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="max-w-7xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-5">
                <img
                  src="/images/logo/logo.png"
                  alt="Website365"
                  className="h-12 w-auto brightness-0 invert"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
                South Africa's trusted provider of fast NVMe web hosting, domain registration, and professional web design. Proudly serving SA businesses since 2014.
              </p>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { icon: Shield, label: 'Free SSL' },
                  { icon: Zap, label: 'NVMe Speed' },
                  { icon: Clock, label: '99.9% Uptime' },
                  { icon: Heart, label: 'SA Support' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-slate-800/60 rounded-lg px-3 py-2">
                    <Icon className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="text-xs text-slate-400 font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="space-y-2 mb-6">
                <a href="mailto:support@website365.co.za" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" /> support@website365.co.za
                </a>
                <a href="tel:0861995070" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" /> 086 199 5070
                </a>
                <a href="https://wa.me/27836000152" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4 text-green-400 shrink-0" /> +27 83 600 0152 (WhatsApp)
                </a>
                <p className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" /> Serving all of South Africa
                </p>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/website365.co.za" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://wa.me/27836000152" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-green-600 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  aria-label="WhatsApp">
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hosting column */}
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5">Web Hosting</h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'All Hosting Plans', to: '/hosting' },
                  { label: 'cPanel Hosting', to: '/hosting/cpanel' },
                  { label: 'DirectAdmin Hosting', to: '/hosting/directadmin' },
                  { label: 'WordPress Hosting', to: '/hosting/wordpress' },
                  { label: 'Email Hosting', to: '/hosting/email' },
                  { label: 'cPanel Reseller', to: '/hosting/reseller/cpanel' },
                  { label: 'Master Reseller', to: '/hosting/reseller/master' },
                  { label: 'VPS Servers', to: '/servers/vps' },
                  { label: 'High Performance VPS', to: '/servers/high-performance-vps' },
                  { label: 'VDS Servers', to: '/servers/vds' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Domains & Design column */}
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5">Domains &amp; Design</h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'Domain Search', to: '/domains' },
                  { label: 'Register a Domain', to: '/domains/registration' },
                  { label: 'Domain Transfer', to: '/domains/transfer' },
                  { label: 'Domain Reseller', to: '/domains/reseller' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-slate-800">
                <h4 className="text-white font-extrabold text-xs uppercase tracking-widest mb-3">Web Design</h4>
                <ul className="space-y-2.5">
                  {[
                    { label: 'Website Design', to: '/web-design/website' },
                    { label: 'eCommerce Design', to: '/web-design/ecommerce' },
                    { label: 'Custom Development', to: '/web-design/development' },
                    { label: 'Website Maintenance', to: '/web-design/maintenance' },
                  ].map(({ label, to }) => (
                    <li key={to}>
                      <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                        <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-white font-extrabold text-sm uppercase tracking-widest mb-5">Company</h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Partner Program', to: '/partners' },
                  { label: 'Contact Us', to: '/contact' },
                  { label: 'Privacy Policy', to: '/privacy' },
                  { label: 'Terms of Service', to: '/terms' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-slate-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Sister company */}
              <div className="mt-6 p-4 bg-slate-800/60 border border-slate-700/50 rounded-xl">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">Sister Company</p>
                <a
                  href="https://www.iptone.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  IPT One Telecoms <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-slate-500 mt-1">VoIP &amp; hosted PBX solutions</p>
              </div>
            </div>
          </div>

          {/* Province SEO links */}
          <div className="mt-12 pt-8 border-t border-slate-800/60">
            <p className="text-xs text-slate-600 font-bold uppercase tracking-widest mb-4">
              Serving businesses across South Africa:
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {[
                ['Cape Town', '/location/cape-town'],
                ['Johannesburg', '/location/johannesburg'],
                ['Durban', '/location/durban'],
                ['Pretoria', '/location/pretoria'],
                ['Port Elizabeth', '/location/port-elizabeth'],
                ['Bloemfontein', '/location/bloemfontein'],
                ['Nelspruit', '/location/nelspruit'],
                ['Polokwane', '/location/polokwane'],
                ['Kimberley', '/location/kimberley'],
                ['East London', '/location/east-london'],
                ['Sandton', '/location/sandton'],
                ['Centurion', '/location/centurion'],
                ['Stellenbosch', '/location/stellenbosch'],
                ['Paarl', '/location/paarl'],
                ['George', '/location/george'],
                ['Rustenburg', '/location/rustenburg'],
                ['Pietermaritzburg', '/location/pietermaritzburg'],
                ['Klerksdorp', '/location/klerksdorp'],
                ['Witbank', '/location/witbank'],
                ['Midrand', '/location/midrand'],
              ].map(([city, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} Website365. All rights reserved. Proudly South African.</p>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ─────────────────────────────────────────────── */}
      <a
        href="https://wa.me/27836000152"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-xl shadow-green-900/40 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2.5 font-semibold text-sm">
          Chat with us
        </span>
      </a>
    </div>
  );
};

export default Layout;
