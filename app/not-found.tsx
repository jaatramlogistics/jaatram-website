import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-light-blue px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-black text-gold mb-4">404</div>
        <h1 className="text-2xl font-bold text-navy mb-3">Page Not Found</h1>
        <p className="text-gray-500 text-sm mb-6">
          The page you&apos;re looking for doesn&apos;t exist. Try one of the links below.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary justify-center">Go Home</Link>
          <Link href="/delivery" className="btn-outline justify-center">Find Your City</Link>
        </div>
      </div>
    </div>
  );
}
