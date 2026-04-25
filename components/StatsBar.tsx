const stats = [
  { value: '140+', label: 'Team Members', icon: '👥' },
  { value: '6k+', label: 'Deliveries Completed', icon: '📦' },
  { value: '4.9★', label: 'Google Rating', icon: '⭐' },
  { value: '3', label: 'Provinces Served', icon: '🇨🇦' },
];

export default function StatsBar() {
  return (
    <section className="bg-navy py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-black text-gold mb-1">{stat.value}</div>
              <div className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
