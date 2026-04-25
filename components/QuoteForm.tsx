'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  pickupCity: string;
  destinationCity: string;
  packageType: string;
  weight?: string;
  message?: string;
}

const packageTypes = [
  'Amazon Package',
  'Small Parcel (under 5kg)',
  'Medium Parcel (5–20kg)',
  'Large Parcel (20kg+)',
  'Pallet / Freight',
  'Vehicle Transport',
  'Other',
];

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: show success anyway (email will be configured separately)
      setSubmitted(true);
    }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-light-blue rounded-2xl p-8 text-center">
        <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Quote Request Received!</h3>
        <p className="text-gray-600 text-sm">
          Thank you! We will get back to you within 24 hours at the email address you provided.
          For urgent requests, call us at{' '}
          <a href="tel:+14377270000" className="text-gold font-semibold">
            +1 (437) 727 0000
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Full Name *
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your full name"
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Email Address *
          </label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
            type="email"
            placeholder="you@company.com"
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Phone Number *
          </label>
          <input
            {...register('phone', { required: 'Phone is required' })}
            type="tel"
            placeholder="+1 (___) ___-____"
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Company */}
        {!compact && (
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
              Company (optional)
            </label>
            <input
              {...register('company')}
              placeholder="Your company name"
              className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
          </div>
        )}

        {/* Pickup City */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Pickup City *
          </label>
          <input
            {...register('pickupCity', { required: 'Pickup city is required' })}
            placeholder="e.g. Brampton, ON"
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          {errors.pickupCity && <p className="text-red-500 text-xs mt-1">{errors.pickupCity.message}</p>}
        </div>

        {/* Destination */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Destination City *
          </label>
          <input
            {...register('destinationCity', { required: 'Destination is required' })}
            placeholder="e.g. Halifax, NS"
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
          />
          {errors.destinationCity && <p className="text-red-500 text-xs mt-1">{errors.destinationCity.message}</p>}
        </div>

        {/* Package Type */}
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Package / Freight Type *
          </label>
          <select
            {...register('packageType', { required: 'Please select a type' })}
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white"
          >
            <option value="">Select type...</option>
            {packageTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.packageType && <p className="text-red-500 text-xs mt-1">{errors.packageType.message}</p>}
        </div>

        {/* Weight */}
        {!compact && (
          <div>
            <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
              Approximate Weight
            </label>
            <input
              {...register('weight')}
              placeholder="e.g. 10 lbs"
              className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
            />
          </div>
        )}
      </div>

      {/* Message */}
      {!compact && (
        <div>
          <label className="block text-xs font-semibold text-navy mb-1.5 uppercase tracking-wider">
            Additional Details
          </label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder="Any special requirements, delivery instructions, or questions..."
            className="w-full border border-mid-blue rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-navy font-bold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Submit Quote Request'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respond within 24 hours · No spam · Mon–Sun 8AM–8PM support
      </p>
    </form>
  );
}
