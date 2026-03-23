import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut, Search, ChevronLeft, ChevronRight,
  FileText, Clock, BarChart2, RefreshCw, X, ChevronDown
} from 'lucide-react';

const FORM_TYPES = [
  'All',
  'Contact Page Message',
  'Partner Application',
  'Hosting Order',
  'Domain Order',
  'VPS Order',
  'Web Design Request',
  'Reseller Application',
  'General Enquiry',
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

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h2 className="text-white font-bold text-lg">{submission.form_type}</h2>
            <p className="text-gray-400 text-xs mt-0.5">
              {new Date(submission.submitted_at).toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' })}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-3">
          {Object.entries(data)
            .filter(([k]) => k !== 'form_type')
            .map(([key, value]) => (
              <div key={key} className="flex gap-3">
                <span className="text-gray-500 text-sm capitalize min-w-[100px] shrink-0">
                  {key.replace(/_/g, ' ')}
                </span>
                <span className="text-gray-200 text-sm break-all">{String(value)}</span>
              </div>
            ))}
        </div>
        {data.email && (
          <div className="px-6 pb-6">
            <a
              href={`mailto:${data.email}`}
              className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors"
            >
              Reply to {data.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
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

  // Verify auth on mount
  useEffect(() => {
    fetch('/api/admin/me', { credentials: 'include' })
      .then((r) => {
        if (!r.ok) navigate('/admin');
        return r.json();
      })
      .then((d) => setUsername(d.username || 'Admin'))
      .catch(() => navigate('/admin'));
  }, [navigate]);

  // Load stats
  useEffect(() => {
    fetch('/api/admin/stats', { credentials: 'include' })
      .then((r) => r.json())
      .then(setStats)
      .catch(() => {});
  }, []);

  // Load submissions
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
    } finally {
      setLoading(false);
    }
  }, [page, formType, search, navigate]);

  useEffect(() => { loadSubmissions(); }, [loadSubmissions]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' });
    navigate('/admin');
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {selected && <SubmissionModal submission={selected} onClose={() => setSelected(null)} />}

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Website365" className="h-7" onError={(e) => { e.target.style.display = 'none'; }} />
            <span className="text-white font-semibold text-sm">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm hidden sm:block">
              Signed in as <span className="text-white font-medium">{username}</span>
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <StatCard
            label="Total Submissions"
            value={stats?.total ?? '—'}
            icon={FileText}
            color="bg-blue-600"
          />
          <StatCard
            label="Last 7 Days"
            value={stats?.last7Days ?? '—'}
            icon={Clock}
            color="bg-green-600"
          />
          <StatCard
            label="Form Types"
            value={stats?.byType?.length ?? '—'}
            icon={BarChart2}
            color="bg-purple-600"
          />
        </div>

        {/* By Type breakdown */}
        {stats?.byType?.length > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Submissions by Type</h3>
            <div className="flex flex-wrap gap-2">
              {stats.byType.map((t) => (
                <button
                  key={t.form_type}
                  onClick={() => handleFormTypeChange(t.form_type)}
                  className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors"
                >
                  <span>{t.form_type}</span>
                  <span className="bg-blue-600 text-white rounded-full px-1.5 py-0.5 text-[10px] font-bold">{t.count}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-3">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by name, email, message…"
                className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
            >
              Search
            </button>
            {(search || formType !== 'All') && (
              <button
                type="button"
                onClick={() => { setSearch(''); setSearchInput(''); setFormType('All'); setPage(1); }}
                className="text-gray-400 hover:text-white px-2 transition-colors"
                title="Clear filters"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </form>

          <div className="relative">
            <select
              value={formType}
              onChange={(e) => handleFormTypeChange(e.target.value)}
              className="appearance-none bg-gray-900 border border-gray-700 text-white rounded-lg pl-3 pr-8 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {FORM_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          <button
            onClick={loadSubmissions}
            className="text-gray-400 hover:text-white transition-colors p-2.5 rounded-lg border border-gray-700 hover:border-gray-600"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">
              Submissions
              {total > 0 && <span className="text-gray-400 font-normal ml-2">({total} total)</span>}
            </h2>
          </div>

          {loading ? (
            <div className="py-20 flex justify-center">
              <RefreshCw className="w-6 h-6 text-gray-500 animate-spin" />
            </div>
          ) : submissions.length === 0 ? (
            <div className="py-20 text-center text-gray-500 text-sm">
              No submissions found.
            </div>
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
                  {submissions.map((s, i) => {
                    const data = s.data || {};
                    return (
                      <tr
                        key={s.id}
                        className="border-b border-gray-800/50 hover:bg-gray-800/40 transition-colors cursor-pointer"
                        onClick={() => setSelected(s)}
                      >
                        <td className="px-5 py-3.5 text-gray-500">{s.id}</td>
                        <td className="px-5 py-3.5 text-white font-medium">{data.name || '—'}</td>
                        <td className="px-5 py-3.5 text-gray-300">{data.email || '—'}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-block bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs px-2.5 py-1 rounded-full">
                            {s.form_type}
                          </span>
                        </td>
                        <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                          {new Date(s.submitted_at).toLocaleString('en-ZA', { dateStyle: 'short', timeStyle: 'short' })}
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <span className="text-blue-400 hover:text-blue-300 text-xs font-medium">View →</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="px-5 py-4 border-t border-gray-800 flex items-center justify-between">
              <span className="text-gray-500 text-xs">
                Page {page} of {pages}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(pages, p + 1))}
                  disabled={page === pages}
                  className="flex items-center gap-1 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
