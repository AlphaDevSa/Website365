import { ShieldCheck, Clock, Headphones, Lock } from 'lucide-react';

const TrustBar = () => {
  const items = [
    { icon: Lock, title: "Secure Payments", desc: "Encrypted Transactions" },
    { icon: Clock, title: "99.9% Uptime", desc: "Reliable Hosting" },
    { icon: Headphones, title: "24/7 Support", desc: "Always Here to Help" },
    { icon: ShieldCheck, title: "Free SSL", desc: "Included with Plans" }
  ];

  return (
    <div className="bg-white py-12 border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 leading-tight">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
