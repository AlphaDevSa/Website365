import React, { useEffect, useRef, useState } from 'react';
import { Search, Loader2, Globe } from 'lucide-react';

const DEFAULT_TLDS = [
  'co.za','org.za','net.za','web.za','capetown','durban','joburg',
  'africa','com','net','org','info','biz','online','site','tech'
];

/**
 * DomainSearchBar
 *
 * Props:
 *   value        – full current domain value (e.g. "mybusiness.co.za")
 *   onChange     – (fullDomain: string) => void
 *   onSubmit     – () => void — called on form submit
 *   status       – 'idle' | 'checking' | 'done' | 'error'
 *   placeholder  – string
 *   buttonLabel  – string
 *   buttonClass  – extra tailwind classes for the submit button
 *   wrapperClass – extra tailwind classes for the outer form
 */
const DomainSearchBar = ({
  value = '',
  onChange,
  onSubmit,
  status = 'idle',
  placeholder = 'e.g. mybusiness',
  buttonLabel = 'Check',
  buttonClass = '',
  wrapperClass = '',
}) => {
  const [tlds, setTlds] = useState(DEFAULT_TLDS);
  const [name, setName] = useState('');
  const [selectedTld, setSelectedTld] = useState('co.za');
  const initialised = useRef(false);

  // Load TLD list from API on mount
  useEffect(() => {
    fetch('/api/domain/tlds', { headers: { Accept: 'application/json' } })
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d.tlds) && d.tlds.length > 0) setTlds(d.tlds); })
      .catch(() => {});
  }, []);

  // Pre-fill from the `value` prop once on first meaningful value
  useEffect(() => {
    if (initialised.current || !value) return;
    initialised.current = true;
    const v = value.trim().toLowerCase();

    // Try 2-part TLDs first (co.za, org.za, etc.)
    const matchedTwo = DEFAULT_TLDS.filter(t => t.includes('.')).find(t => v.endsWith('.' + t));
    if (matchedTwo) {
      setName(v.slice(0, v.length - matchedTwo.length - 1));
      setSelectedTld(matchedTwo);
      return;
    }
    // Single-part TLD
    const dotIdx = v.lastIndexOf('.');
    if (dotIdx > 0) {
      const ext = v.slice(dotIdx + 1);
      setName(v.slice(0, dotIdx));
      if (DEFAULT_TLDS.includes(ext)) setSelectedTld(ext);
    } else {
      setName(v);
    }
  }, [value]);

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z0-9-]/g, '');
    setName(val);
    onChange?.(`${val.toLowerCase()}.${selectedTld}`);
  };

  const handleTldChange = (e) => {
    const tld = e.target.value;
    setSelectedTld(tld);
    onChange?.(`${name.trim().toLowerCase()}.${tld}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) onSubmit?.();
  };

  return (
    <form
      className={`flex flex-col sm:flex-row gap-2 ${wrapperClass}`}
      onSubmit={handleSubmit}
    >
      {/* Name + TLD row */}
      <div className="flex-1 flex items-center bg-slate-800/80 border border-slate-600 rounded-xl focus-within:ring-2 focus-within:ring-blue-500 transition-all overflow-visible">
        {/* Globe icon */}
        <Globe className="w-5 h-5 text-slate-400 ml-3 shrink-0" />

        {/* Domain name input */}
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={placeholder}
          className="flex-1 min-w-0 bg-transparent text-white placeholder-slate-400 outline-none py-4 px-3 text-base"
        />

        {/* TLD separator dot */}
        <span className="text-slate-400 font-bold text-lg select-none pr-0.5">.</span>

        {/* Native TLD select — renders outside overflow constraints */}
        <select
          value={selectedTld}
          onChange={handleTldChange}
          className="bg-slate-700 text-blue-300 font-bold text-sm border-l border-slate-600 pl-2 pr-6 py-4 outline-none cursor-pointer hover:bg-slate-600 transition-colors rounded-r-xl appearance-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2393c5fd' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center' }}
        >
          {tlds.map((tld) => (
            <option key={tld} value={tld}>.{tld}</option>
          ))}
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'checking' || !name.trim()}
        className={`flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold rounded-xl shadow-lg transition-all whitespace-nowrap ${buttonClass}`}
      >
        {status === 'checking'
          ? <><Loader2 className="w-5 h-5 animate-spin" /> Checking…</>
          : <><Search className="w-5 h-5" /> {buttonLabel}</>}
      </button>
    </form>
  );
};

export default DomainSearchBar;
