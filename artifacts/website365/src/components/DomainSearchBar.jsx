import React, { useEffect, useState } from 'react';
import { Search, Loader2, Globe, ChevronDown } from 'lucide-react';

const DEFAULT_TLDS = [
  'co.za','org.za','net.za','web.za','capetown','durban','joburg',
  'africa','com','net','org','info','biz','online','site','tech'
];

/**
 * DomainSearchBar
 *
 * Props:
 *   value        – full current domain value (e.g. "mybusiness.co.za")
 *   onChange     – (fullDomain: string) => void — called whenever name or TLD changes
 *   onSubmit     – () => void — called on form submit
 *   status       – 'idle' | 'checking' | 'done' | 'error'
 *   placeholder  – string (default "e.g. mybusiness")
 *   buttonLabel  – string (default "Check")
 *   buttonClass  – extra tailwind classes for the button
 *   inputClass   – extra tailwind classes for the name input
 *   wrapperClass – extra tailwind classes for the outer form wrapper
 */
const DomainSearchBar = ({
  value = '',
  onChange,
  onSubmit,
  status = 'idle',
  placeholder = 'e.g. mybusiness',
  buttonLabel = 'Check',
  buttonClass = '',
  inputClass = '',
  wrapperClass = '',
}) => {
  const [tlds, setTlds] = useState(DEFAULT_TLDS);
  const [name, setName] = useState('');
  const [selectedTld, setSelectedTld] = useState('co.za');
  const [tldOpen, setTldOpen] = useState(false);

  // Load TLD list from API on mount
  useEffect(() => {
    fetch('/api/domain/tlds', { headers: { Accept: 'application/json' } })
      .then((r) => r.json())
      .then((d) => { if (Array.isArray(d.tlds) && d.tlds.length > 0) setTlds(d.tlds); })
      .catch(() => {});
  }, []);

  // Sync incoming `value` → split into name + tld
  useEffect(() => {
    if (!value) { setName(''); return; }
    const v = value.trim().toLowerCase();
    // Try to find a matching 2-part TLD first (co.za, org.za, etc.)
    const twoPartTlds = tlds.filter((t) => t.includes('.'));
    const matchedTwo = twoPartTlds.find((t) => v.endsWith('.' + t));
    if (matchedTwo) {
      const n = v.slice(0, v.length - matchedTwo.length - 1);
      setName(n);
      setSelectedTld(matchedTwo);
      return;
    }
    // Single-part TLD
    const dotIdx = v.lastIndexOf('.');
    if (dotIdx > 0) {
      const ext = v.slice(dotIdx + 1);
      const n = v.slice(0, dotIdx);
      setName(n);
      if (tlds.includes(ext)) setSelectedTld(ext);
    } else {
      setName(v);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const fullDomain = name.trim() ? `${name.trim().toLowerCase()}.${selectedTld}` : '';

  const handleNameChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z0-9-]/g, '');
    setName(val);
    onChange?.(`${val.toLowerCase()}.${selectedTld}`);
  };

  const handleTldSelect = (tld) => {
    setSelectedTld(tld);
    setTldOpen(false);
    onChange?.(`${name.trim().toLowerCase()}.${tld}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullDomain) onSubmit?.();
  };

  return (
    <form
      className={`flex flex-col sm:flex-row gap-2 ${wrapperClass}`}
      onSubmit={handleSubmit}
    >
      {/* Name input */}
      <div className={`relative flex-1 flex items-center bg-slate-800/60 border border-slate-600 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 ${inputClass}`}>
        <Globe className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-white placeholder-slate-400 outline-none py-4 px-3 text-base"
        />

        {/* TLD Dropdown */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setTldOpen((o) => !o)}
            className="flex items-center gap-1.5 px-3 py-4 text-blue-300 font-bold text-sm border-l border-slate-600 hover:bg-slate-700/50 transition-colors whitespace-nowrap"
          >
            .{selectedTld}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${tldOpen ? 'rotate-180' : ''}`} />
          </button>

          {tldOpen && (
            <div className="absolute right-0 top-full mt-1 z-50 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl w-44 max-h-60 overflow-y-auto">
              {tlds.map((tld) => (
                <button
                  key={tld}
                  type="button"
                  onClick={() => handleTldSelect(tld)}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-700 transition-colors flex items-center justify-between ${tld === selectedTld ? 'text-blue-400 font-bold bg-slate-700/50' : 'text-slate-200'}`}
                >
                  .{tld}
                  {tld === selectedTld && <span className="text-blue-400 text-xs">✓</span>}
                </button>
              ))}
            </div>
          )}
        </div>
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
