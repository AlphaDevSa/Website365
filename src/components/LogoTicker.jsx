import React from 'react';

const logos = [
  { name: 'CloudLinux', src: '/images/weblogos/CloudLinux-icon-1.webp' },
  { name: 'LiteSpeed', src: '/images/weblogos/LiteSpeed-icon.webp' },
  { name: 'DirectAdmin', src: '/images/weblogos/DirectAdmin-icon-1.webp' },
  { name: 'Imunify360', src: '/images/weblogos/Imunify360-icon.webp' },
  { name: 'Softaculous', src: '/images/weblogos/Softaculous-Icon.webp' },
  { name: 'SitePad', src: '/images/weblogos/SitePad-Icon.webp' },
  { name: 'WHMCS', src: '/images/weblogos/Whmcs-icon.webp' },
  { name: 'WHM Reseller', src: '/images/weblogos/WHMReseller-Icon.webp' },
];

const LogoTicker = () => {
  // Double the logos in the base set to ensure it's wide enough for large screens
  // 8 logos * 2 = 16 logos per set
  const baseLogos = [...logos, ...logos];

  return (
    <div className="bg-white border-y border-slate-100 py-12 overflow-hidden relative">
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-lg font-bold text-slate-800 uppercase tracking-widest">
            Powered by World-Class Technology
          </h3>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex overflow-hidden relative w-full mask-linear-gradient">
          {/* Enhanced Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex animate-scroll hover:pause whitespace-nowrap min-w-full items-center">
            {/* First set of logos */}
            <div className="flex items-center gap-24 pr-24">
              {baseLogos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="flex-shrink-0 group relative z-0">
                  <div className="h-16 w-auto transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110">
                    <img 
                      src={logo.src} 
                      alt={`${logo.name} logo`} 
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerText = logo.name;
                        e.target.parentElement.className = "text-xl font-bold text-slate-400";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless scrolling */}
            <div className="flex items-center gap-24 pr-24">
              {baseLogos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="flex-shrink-0 group relative z-0">
                  <div className="h-16 w-auto transition-all duration-300 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transform group-hover:scale-110">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
