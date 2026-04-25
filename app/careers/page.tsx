import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Careers | Join the Jaatram Logistics Team',
  description:
    'Join Jaatram Logistics, a fast-growing Dragonfly DSP operating across Ontario, Nova Scotia, and New Brunswick. We are hiring delivery drivers, supervisors, and operations staff.',
};

const openings = [
  {
    title: 'Delivery Driver',
    type: 'Full-Time',
    location: 'Multiple Stations, Ontario',
    description:
      'Drive an assigned delivery route for packages across residential and commercial areas. You will handle 100 to 180 stops per day, use the Dragonfly driver app for route navigation, take photo confirmation of deliveries, and represent Jaatram Logistics professionally in the communities we serve.',
    requirements: [
      'Valid G driver\'s license with clean abstract',
      'Comfortable with a physically active role (lifting up to 50 lbs)',
      'Smartphone with data plan for delivery app',
      'Reliable, punctual, and able to work independently',
      'Positive attitude and customer-first approach',
    ],
  },
  {
    title: 'Delivery Supervisor',
    type: 'Full-Time',
    location: 'Multiple Stations, Ontario',
    description:
      'Lead a team of delivery drivers at one of our Dragonfly stations. You will manage morning sort and load operations, monitor driver performance and safety, coordinate with Dragonfly station management, and resolve any delivery issues that come up throughout the day.',
    requirements: [
      'Previous experience in logistics, transportation, or team leadership',
      'Strong organizational and communication skills',
      'Ability to problem-solve quickly in a fast-paced environment',
      'Valid G driver\'s license',
      'Experience with delivery operations or fleet management is a plus',
    ],
  },
  {
    title: 'Delivery Driver',
    type: 'Full-Time',
    location: 'Nova Scotia and New Brunswick',
    description:
      'Join our growing Atlantic Canada team. Same responsibilities as our Ontario drivers, with routes covering Halifax, Dartmouth, Moncton, Fredericton, and surrounding communities.',
    requirements: [
      'Valid driver\'s license with clean abstract (Nova Scotia or New Brunswick)',
      'Comfortable with physical delivery work',
      'Smartphone required for delivery app',
      'Knowledge of local communities is an asset',
    ],
  },
  {
    title: 'Operations Coordinator',
    type: 'Full-Time',
    location: 'Stoney Creek, ON (Head Office)',
    description:
      'Support day-to-day operations across our station network. This role involves coordinating between station supervisors, managing scheduling and route planning support, tracking fleet maintenance, and helping the team run smoothly across all locations.',
    requirements: [
      'Strong organizational skills and attention to detail',
      'Experience with spreadsheets and operational tools',
      'Clear written and verbal communication',
      'Ability to manage competing priorities',
      'Background in logistics or operations is preferred',
    ],
  },
];

const perks = [
  { icon: '💼', title: 'Stable Employment', desc: 'Full-time positions with consistent hours across all seasons.' },
  { icon: '📈', title: 'Room to Grow', desc: 'Drivers become supervisors. Supervisors become station managers. We promote from within.' },
  { icon: '🚗', title: 'Modern Fleet', desc: 'Drive well-maintained vehicles including BrightDrop electric vans.' },
  { icon: '🤝', title: 'Supportive Team', desc: 'Work with a tight-knit team that looks out for each other.' },
  { icon: '🌿', title: 'Green Mission', desc: 'Be part of a company that is actively growing its electric fleet.' },
  { icon: '📞', title: 'Responsive Management', desc: 'Direct access to supervisors and management. No bureaucratic walls.' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            We Are Hiring
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Join the <span className="text-gold">Jaatram Logistics</span> Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We are a fast-growing Dragonfly DSP with 140 team members across three provinces. If you are hardworking, reliable, and want to be part of something real, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Why join us */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-navy mb-2">
              Why Work at <span className="text-gold">Jaatram Logistics?</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              We started from zero in 2022. Today we have 140 people, 9 stations, and a 4.9-star rating. The people who made that happen are still here.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-light-blue rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{perk.icon}</div>
                <h3 className="font-bold text-navy text-base mb-1">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-14 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-navy mb-2">
              Open <span className="text-gold">Positions</span>
            </h2>
            <p className="text-gray-500 text-base">
              Find a role that fits your skills and your life. All positions come with full training.
            </p>
          </div>

          <div className="space-y-5">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 [box-shadow:0_2px_16px_0_rgba(26,43,94,0.08)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-black text-navy">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs bg-gold/10 text-gold font-bold px-2.5 py-1 rounded-full">{job.type}</span>
                      <span className="text-xs text-gray-400">{job.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:jaatramlogistics@gmail.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="bg-gold text-navy font-bold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity shrink-0"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>
                <div>
                  <p className="text-xs font-bold text-navy uppercase tracking-wider mb-2">Requirements</p>
                  <ul className="space-y-1">
                    {job.requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-navy mb-4">
            Ready to <span className="text-gold">Apply?</span>
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Send your resume and a brief message about which role interests you to the email below. We read every application and respond to all qualified candidates within a few business days.
          </p>
          <div className="bg-navy rounded-2xl p-8 text-white">
            <p className="text-white/60 text-sm mb-2">Email your resume to</p>
            <a
              href="mailto:jaatramlogistics@gmail.com?subject=Job Application"
              className="text-gold font-black text-2xl hover:underline break-all"
            >
              jaatramlogistics@gmail.com
            </a>
            <p className="text-white/40 text-xs mt-4">
              Subject line: &quot;Application: [Role Name]&quot; helps us route your email to the right person
            </p>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            You can also call us at{' '}
            <a href="tel:+14377270000" className="text-gold hover:underline font-semibold">
              +1 (437) 727 0000
            </a>{' '}
            Monday through Sunday, 8 AM to 8 PM.
          </p>
        </div>
      </section>

      <CTABanner
        title="Not Looking for Work? Get a Delivery Quote."
        subtitle="We serve Ontario, Nova Scotia, and New Brunswick seven days a week. Get a free quote or call us now."
      />
    </>
  );
}
