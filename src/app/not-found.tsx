import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-surface-container rounded-2xl flex items-center justify-center mb-8">
        <span className="text-4xl">🔍</span>
      </div>
      <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">
        Page Not Found
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Try searching for a calculator or head back to the homepage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg hover:opacity-90 hover:bg-primary-container transition-colors font-semibold"
        >
          Browse Calculators
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center bg-surface-container border border-outline-variant text-on-surface font-label-md text-label-md px-6 py-3 rounded-lg hover:border-primary/40 transition-colors"
        >
          About FitCalculato
        </Link>
      </div>
    </main>
  );
}
