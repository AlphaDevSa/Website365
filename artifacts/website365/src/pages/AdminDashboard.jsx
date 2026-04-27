import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  LogOut, Search, ChevronLeft, ChevronRight,
  FileText, Clock, BarChart2, RefreshCw, X, ChevronDown,
  Globe, Plus, Trash2, Edit3, Check, Tag, Mail
} from 'lucide-react';

const FORM_TYPES = [
  'All', 'Contact Page Message', 'Partner Application', 'Hosting Order',
  'Domain Order', 'VPS Order', 'Web Design Request', 'Reseller Application', 'General Enquiry',
];

const TABS = [
  { id: 'submissions', label: 'Form Submissions', icon: FileText },
  { id: 'domain-pricing', label: 'Domain Pricing', icon: Globe },
  { id: 'smtp', label: 'SMTP Settings', icon: Mail },
];

const StatCard = ({ label, value, icon: Icon, color }) => (
  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{label}</p>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const SubmissionModal = ({ submission, onClose }) => {
  if (!submission) return null;
  const data = submission.data || {};
  const entries = Object.entries(data)
    .filter(([k]) => k !== 'form_type')
    .sort(([a], [b]) => a.localeCompare(b));
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-white font-bold text-lg">{submission.form_type}</h2>
            <p className="text-gray-400 text-xs mt-0.5">
              {new Date(submission.submitted_at).toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' })}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 space-y-3">
          {entries.map(([key, value]) => (
            <div key={key} className="flex gap-3">
              <span className="text-gray-500 text-sm capitalize min-w-[100px] shrink-0">{key.replace(/_/g, ' ')}</span>
              {value && typeof value === 'object' ? (
                <pre className="text-gray-200 text-xs whitespace-pre-wrap break-words bg-gray-950/60 border border-gray-800 rounded-lg px-3 py-2 flex-1 overflow-x-auto">
                  {JSON.stringify(value, null, 2)}
                </pre>
              ) : (
                <span className="text-gray-200 text-sm break-all">{value === '' || value == null ? '—' : String(value)}</span>
              )}
            </div>
          ))}
        </div>
        {data.email && (
          <div className="px-6 pb-6">
            <a href={`mailto:${data.email}`} className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors">
              Reply to {data.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Domain Pricing Panel ──────────────────────────────────────────────────────
const DomainPricingPanel = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState({});
  const [editing, setEditing] = useState({});
  const [addForm, setAddForm] = useState({ tld: '', register: '', renew: '', transfer: '' });
  const [addOpen, setAddOpen] = useState(false);
  const [msg, setMsg] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch('/api/admin/domain-pricing', { credentials: 'include' });
      const d = await r.json();
      setRows(d.rows || []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const flash = (text, type = 'ok') => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 3000);
  };

  const startEdit = (row) => setEditing((e) => ({
    ...e,
    [row.tld]: { register: row.register, renew: row.renew, transfer: row.transfer }
  }));

  const cancelEdit = (tld) => setEditing((e) => { const n = { ...e }; delete n[tld]; return n; });

  const saveRow = async (tld) => {
    const data = editing[tld];
    if (!data) return;
    setSaving((s) => ({ ...s, [tld]: true }));
    try {
      const r = await fetch(`/api/admin/domain-pricing/${encodeURIComponent(tld)}`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ register: Number(data.register), renew: Number(data.renew), transfer: Number(data.transfer) }),
      });
      if (!r.ok) throw new Error('Save failed');
      cancelEdit(tld);
      flash(`Saved .${tld}`);
      load();
    } catch {
      flash(`Failed to save .${tld}`, 'err');
    } finally {
      setSaving((s) => { const n = { ...s }; delete n[tld]; return n; });
    }
  };

  const toggleEnabled = async (row) => {
    try {
      await fetch(`/api/admin/domain-pricing/${encodeURIComponent(row.tld)}`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: !row.enabled }),
      });
      load();
    } catch { flash('Toggle failed', 'err'); }
  };

  const deleteRow = async (tld) => {
    if (!window.confirm(`Delete .${tld}? This removes it from the pricing table.`)) return;
    await fetch(`/api/admin/domain-pricing/${encodeURIComponent(tld)}`, { method: 'DELETE', credentials: 'include' });
    flash(`Deleted .${tld}`);
    load();
  };

  const addTld = async () => {
    if (!addForm.tld.trim()) return;
    try {
      const r = await fetch('/api/admin/domain-pricing', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tld: addForm.tld.trim(),
          register: Number(addForm.register || 0),
          renew: Number(addForm.renew || 0),
          transfer: Number(addForm.transfer || 0),
        }),
      });
      if (!r.ok) throw new Error();
      setAddForm({ tld: '', register: '', renew: '', transfer: '' });
      setAddOpen(false);
      flash(`Added .${addForm.tld.trim()}`);
      load();
    } catch { flash('Failed to add TLD', 'err'); }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-lg font-bold">Domain Pricing</h2>
          <p className="text-gray-400 text-sm mt-0.5">Manage registration, renewal and transfer prices for all TLDs. Changes take effect immediately on the website.</p>
        </div>
        <div className="flex items-center gap-2">
          {msg && (
            <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${msg.type === 'err' ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'}`}>
              {msg.text}
            </span>
          )}
          <button onClick={() => setAddOpen((o) => !o)} className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" /> Add TLD
          </button>
          <button onClick={load} className="text-gray-400 hover:text-white p-2 rounded-lg border border-gray-700 transition-colors">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Add Form */}
      {addOpen && (
        <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-5">
          <h3 className="text-white text-sm font-semibold mb-4 flex items-center gap-2"><Plus className="w-4 h-4 text-blue-400" /> Add New TLD</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { key: 'tld', label: 'TLD (e.g. io)', placeholder: 'co.za' },
              { key: 'register', label: 'Register (R)', placeholder: '299' },
              { key: 'renew', label: 'Renew (R)', placeholder: '299' },
              { key: 'transfer', label: 'Transfer (R)', placeholder: '0' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="block text-gray-400 text-xs mb-1">{label}</label>
                <input
                  type={key === 'tld' ? 'text' : 'number'}
                  value={addForm[key]}
                  onChange={(e) => setAddForm((f) => ({ ...f, [key]: e.target.value }))}
                  placeholder={placeholder}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={addTld} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">Save TLD</button>
            <button onClick={() => setAddOpen(false)} className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors border border-gray-700">Cancel</button>
          </div>
        </div>
      )}

      {/* Pricing Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="py-20 flex justify-center"><RefreshCw className="w-6 h-6 text-gray-500 animate-spin" /></div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 text-xs text-gray-500 uppercase tracking-wide">
                  <th className="text-left px-5 py-3">TLD</th>
                  <th className="text-left px-5 py-3">Register (R)</th>
                  <th className="text-left px-5 py-3">Renew (R)</th>
                  <th className="text-left px-5 py-3">Transfer (R)</th>
                  <th className="text-center px-5 py-3">Visible</th>
                  <th className="px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const isEditing = !!editing[row.tld];
                  const ed = editing[row.tld] || {};
                  return (
                    <tr key={row.tld} className={`border-b border-gray-800/50 ${!row.enabled ? 'opacity-50' : ''} hover:bg-gray-800/30 transition-colors`}>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <Tag className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="text-white font-bold">.{row.tld}</span>
                        </div>
                      </td>
                      {['register', 'renew', 'transfer'].map((field) => (
                        <td key={field} className="px-5 py-3.5">
                          {isEditing ? (
                            <input
                              type="number"
                              value={ed[field] ?? ''}
                              onChange={(e) => setEditing((prev) => ({ ...prev, [row.tld]: { ...prev[row.tld], [field]: e.target.value } }))}
                              className="w-28 bg-gray-800 border border-blue-500/50 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          ) : (
                            <span className="text-gray-200">R{Number(row[field]).toFixed(2)}</span>
                          )}
                        </td>
                      ))}
                      <td className="px-5 py-3.5 text-center">
                        <button
                          onClick={() => toggleEnabled(row)}
                          className={`w-10 h-5 rounded-full transition-colors relative ${row.enabled ? 'bg-green-600' : 'bg-gray-700'}`}
                        >
                          <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${row.enabled ? 'left-5' : 'left-0.5'}`} />
                        </button>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1">
                          {isEditing ? (
                            <>
                              <button onClick={() => saveRow(row.tld)} disabled={saving[row.tld]} className="flex items-center gap-1 bg-green-700 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                                {saving[row.tld] ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />} Save
                              </button>
                              <button onClick={() => cancelEdit(row.tld)} className="text-gray-500 hover:text-white px-2 py-1.5 rounded-lg text-xs transition-colors">Cancel</button>
                            </>
                          ) : (
                            <>
                              <button onClick={() => startEdit(row)} className="flex items-center gap-1 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg text-xs border border-gray-700 hover:border-gray-500 transition-colors">
                                <Edit3 className="w-3 h-3" /> Edit
                              </button>
                              <button onClick={() => deleteRow(row.tld)} className="text-gray-600 hover:text-red-400 px-2 py-1.5 rounded-lg text-xs transition-colors">
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <p className="text-gray-600 text-xs">* Transfer price of R0 means free transfer. Toggle Visible to hide a TLD from the public pricing table without deleting it.</p>
    </div>
  );
};

const SmtpSettingsPanel = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [msg, setMsg] = useState(null);
  const [hasPassword, setHasPassword] = useState(false);
  const [form, setForm] = useState({
    host: '',
    port: '587',
    secure: false,
    username: '',
    password: '',
    fromEmail: '',
    fromName: 'Website365 Forms',
  });

  const flash = (text, type = 'ok') => {
    setMsg({ text, type });
    setTimeout(() => setMsg(null), 3500);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch('/api/admin/smtp-settings', { credentials: 'include' });
      const d = await r.json().catch(() => ({}));
      const s = d.settings;
      if (s) {
        setHasPassword(Boolean(s.hasPassword));
        setForm((f) => ({
          ...f,
          host: s.host || '',
          port: String(s.port || '587'),
          secure: Boolean(s.secure),
          username: s.username || '',
          password: '',
          fromEmail: s.fromEmail || '',
          fromName: s.fromName || 'Website365 Forms',
        }));
      } else {
        setHasPassword(false);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const save = async () => {
    setSaving(true);
    try {
      const payload = {
        host: form.host,
        port: Number(form.port),
        secure: Boolean(form.secure),
        username: form.username,
        password: form.password || undefined,
        fromEmail: form.fromEmail || null,
        fromName: form.fromName || null,
      };
      const r = await fetch('/api/admin/smtp-settings', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Save failed');
      setHasPassword(Boolean(d.settings?.hasPassword));
      setForm((f) => ({ ...f, password: '' }));
      flash('SMTP settings saved');
    } catch (e) {
      flash(e instanceof Error ? e.message : 'Save failed', 'err');
    } finally {
      setSaving(false);
    }
  };

  const sendTest = async () => {
    setTesting(true);
    try {
      const r = await fetch('/api/admin/smtp-settings/test', {
        method: 'POST',
        credentials: 'include',
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || 'Test failed');
      flash('Test email sent to admin@website365.co.za and info@website365.co.za');
    } catch (e) {
      flash(e instanceof Error ? e.message : 'Test failed', 'err');
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-lg font-bold">SMTP Settings</h2>
          <p className="text-gray-400 text-sm mt-0.5">
            Configure server-side SMTP for form notification emails. Password is never returned to the browser.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {msg && (
            <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${msg.type === 'err' ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'}`}>
              {msg.text}
            </span>
          )}
          <button onClick={load} className="text-gray-400 hover:text-white p-2 rounded-lg border border-gray-700 transition-colors" disabled={loading}>
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
        {loading ? (
          <div className="py-14 flex justify-center"><RefreshCw className="w-6 h-6 text-gray-500 animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'host', label: 'SMTP Host', placeholder: 'smtp.example.com' },
              { key: 'port', label: 'SMTP Port', placeholder: '587' },
              { key: 'username', label: 'SMTP Username', placeholder: 'user@example.com' },
              { key: 'password', label: hasPassword ? 'SMTP Password (leave blank to keep)' : 'SMTP Password', placeholder: hasPassword ? '••••••••' : '' },
              { key: 'fromEmail', label: 'From Email (optional)', placeholder: 'noreply@website365.co.za' },
              { key: 'fromName', label: 'From Name (optional)', placeholder: 'Website365 Forms' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="block text-gray-400 text-xs mb-1">{label}</label>
                <input
                  type={key === 'password' ? 'password' : (key === 'port' ? 'number' : 'text')}
                  value={form[key]}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                  placeholder={placeholder}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}

            <div className="sm:col-span-2 flex items-center justify-between gap-3 pt-1">
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={form.secure}
                  onChange={(e) => setForm((f) => ({ ...f, secure: e.target.checked }))}
                  className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-600 focus:ring-blue-500"
                />
                Use SSL/TLS (usually port 465)
              </label>
              <div className="flex gap-2">
                <button
                  onClick={sendTest}
                  disabled={testing || saving}
                  className="text-gray-200 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors border border-gray-700 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {testing ? 'Sending…' : 'Send Test Email'}
                </button>
                <button
                  onClick={save}
                  disabled={saving}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {saving ? 'Saving…' : 'Save Settings'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── Main Dashboard ────────────────────────────────────────────────────────────
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [activeTab, setActiveTab] = useState('submissions');
  const [stats, setStats] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [formType, setFormType] = useState('All');
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('/api/admin/me', { credentials: 'include' })
      .then((r) => { if (!r.ok) navigate('/admin'); return r.json(); })
      .then((d) => setUsername(d.username || 'Admin'))
      .catch(() => navigate('/admin'));
  }, [navigate]);

  const loadStats = useCallback(async () => {
    try {
      const r = await fetch('/api/admin/stats', { credentials: 'include' });
      if (!r.ok) return;
      const d = await r.json();
      setStats(d);
    } catch {}
  }, []);

  useEffect(() => { loadStats(); }, [loadStats]);

  const loadSubmissions = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page), limit: '20' });
    if (formType !== 'All') params.set('form_type', formType);
    if (search) params.set('search', search);
    try {
      const r = await fetch(`/api/admin/submissions?${params}`, { credentials: 'include' });
      if (!r.ok) { navigate('/admin'); return; }
      const d = await r.json();
      setSubmissions(d.submissions || []);
      setTotal(d.total || 0);
      setPages(d.pages || 1);
    } finally { setLoading(false); }
  }, [page, formType, search, navigate]);

  useEffect(() => { loadSubmissions(); }, [loadSubmissions]);

  const deleteSubmission = useCallback(async (submissionId) => {
    if (!window.confirm('Delete this submission? This cannot be undone.')) return;
    try {
      const r = await fetch(`/api/admin/submissions/${submissionId}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (!r.ok) return;
      setSelected((cur) => (cur?.id === submissionId ? null : cur));
      await Promise.all([loadSubmissions(), loadStats()]);
    } catch {}
  }, [loadSubmissions, loadStats]);

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    navigate('/admin');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Website365</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-gray-950 text-white">
        {selected && <SubmissionModal submission={selected} onClose={() => setSelected(null)} />}

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Website365" className="h-7" onError={(e) => { e.target.style.display = 'none'; }} />
              <span className="text-white font-semibold text-sm">Admin Panel</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 border-l border-gray-700 pl-4">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                >
                  <Icon className="w-3.5 h-3.5" /> {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm hidden sm:block">
              Signed in as <span className="text-white font-medium">{username}</span>
            </span>
            <button onClick={handleLogout} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
              <LogOut className="w-4 h-4" /><span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
        {/* Mobile tab bar */}
        <div className="sm:hidden flex border-t border-gray-800">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button key={id} onClick={() => setActiveTab(id)} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium transition-colors ${activeTab === id ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500'}`}>
              <Icon className="w-3.5 h-3.5" /> {label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {activeTab === 'submissions' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard label="Total Submissions" value={stats?.total ?? '—'} icon={FileText} color="bg-blue-600" />
              <StatCard label="Last 7 Days" value={stats?.last7Days ?? '—'} icon={Clock} color="bg-green-600" />
              <StatCard label="Form Types" value={stats?.byType?.length ?? '—'} icon={BarChart2} color="bg-purple-600" />
            </div>

            {stats?.byType?.length > 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Submissions by Type</h3>
                <div className="flex flex-wrap gap-2">
                  {stats.byType.map((t) => (
                    <button key={t.form_type} onClick={() => { setFormType(t.form_type); setPage(1); }}
                      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors">
                      <span>{t.form_type}</span>
                      <span className="bg-blue-600 text-white rounded-full px-1.5 py-0.5 text-[10px] font-bold">{t.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <form onSubmit={(e) => { e.preventDefault(); setSearch(searchInput); setPage(1); }} className="flex-1 flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search by name, email, message…"
                    className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">Search</button>
                {(search || formType !== 'All') && (
                  <button type="button" onClick={() => { setSearch(''); setSearchInput(''); setFormType('All'); setPage(1); }}
                    className="text-gray-400 hover:text-white px-2 transition-colors"><X className="w-4 h-4" /></button>
                )}
              </form>
              <div className="relative">
                <select value={formType} onChange={(e) => { setFormType(e.target.value); setPage(1); }}
                  className="appearance-none bg-gray-900 border border-gray-700 text-white rounded-lg pl-3 pr-8 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  {FORM_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
              <button onClick={loadSubmissions} className="text-gray-400 hover:text-white transition-colors p-2.5 rounded-lg border border-gray-700 hover:border-gray-600" title="Refresh">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            {/* Table */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-white">Submissions{total > 0 && <span className="text-gray-400 font-normal ml-2">({total} total)</span>}</h2>
              </div>
              {loading ? (
                <div className="py-20 flex justify-center"><RefreshCw className="w-6 h-6 text-gray-500 animate-spin" /></div>
              ) : submissions.length === 0 ? (
                <div className="py-20 text-center text-gray-500 text-sm">No submissions found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800 text-xs text-gray-500 uppercase tracking-wide">
                        <th className="text-left px-5 py-3">#</th>
                        <th className="text-left px-5 py-3">Name</th>
                        <th className="text-left px-5 py-3">Email</th>
                        <th className="text-left px-5 py-3">Form Type</th>
                        <th className="text-left px-5 py-3">Date</th>
                        <th className="px-5 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions.map((s) => {
                        const data = s.data || {};
                        return (
                          <tr key={s.id} className="border-b border-gray-800/50 hover:bg-gray-800/40 transition-colors cursor-pointer" onClick={() => setSelected(s)}>
                            <td className="px-5 py-3.5 text-gray-500">{s.id}</td>
                            <td className="px-5 py-3.5 text-white font-medium">{data.name || '—'}</td>
                            <td className="px-5 py-3.5 text-gray-300">{data.email || '—'}</td>
                            <td className="px-5 py-3.5">
                              <span className="inline-block bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs px-2.5 py-1 rounded-full">{s.form_type}</span>
                            </td>
                            <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                              {new Date(s.submitted_at).toLocaleString('en-ZA', { dateStyle: 'short', timeStyle: 'short' })}
                            </td>
                            <td className="px-5 py-3.5 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <span className="text-blue-400 hover:text-blue-300 text-xs font-medium">View →</span>
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); deleteSubmission(s.id); }}
                                  className="text-gray-400 hover:text-red-300 transition-colors p-1.5 rounded-md hover:bg-gray-800"
                                  title="Delete"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
              {pages > 1 && (
                <div className="px-5 py-4 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-gray-500 text-xs">Page {page} of {pages}</span>
                  <div className="flex gap-2">
                    <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                      className="flex items-center gap-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600">
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </button>
                    <button onClick={() => setPage((p) => Math.min(pages, p + 1))} disabled={page === pages}
                      className="flex items-center gap-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {activeTab === 'domain-pricing' && <DomainPricingPanel />}
        {activeTab === 'smtp' && <SmtpSettingsPanel />}
      </main>
      </div>
    </>
  );
};

export default AdminDashboard;
