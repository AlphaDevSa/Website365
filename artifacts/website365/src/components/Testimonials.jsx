
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Website365 made getting my business online incredibly easy. The support team was helpful every step of the way."
    },
    {
      name: "Michael Smit",
      role: "Freelance Developer",
      content: "The hosting speed is fantastic, and the local support makes a huge difference. Highly recommended for SA devs."
    },
    {
      name: "Thabo Mokoena",
      role: "Agency Director",
      content: "We use the reseller hosting for all our clients. It's reliable, affordable, and the WHM interface is great."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex text-yellow-400 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 mb-6 italic">"{t.content}"</p>
          <div>
            <div className="font-bold text-gray-900">{t.name}</div>
            <div className="text-sm text-blue-600">{t.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
