// src/app/page.jsx
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import MovieGrid from '@/components/movieGrid';
import CopyInstallButton from '@/components/installButton';
import {
  HiOutlineShieldCheck,
  HiOutlineCommandLine,
  HiOutlineCircleStack,
  HiOutlineArrowRight,
  HiOutlineKey,
  HiOutlineCpuChip,
} from 'react-icons/hi2';

const features = [
  {
    name: 'Stateless JWT & Refresh Cycles',
    description:
      'Tamper-proof token validation paired with automated cookie rotation and CSRF protection out of the box.',
    icon: HiOutlineKey,
  },
  {
    name: 'Global Redux Toolkit Sync',
    description:
      'Reactive auth slices providing instant access to authenticated user states, loading states, and error handling.',
    icon: HiOutlineCircleStack,
  },
  {
    name: 'Edge Middleware Guards',
    description:
      'Route protection that validates sessions at the edge boundary before executing compute or database requests.',
    icon: HiOutlineCpuChip,
  },
];

const frameworks = [
  'Next.js App Router',
  'Tailwind CSS v3+',
  'Redux Toolkit',
  'React Hook Form',
  'TypeScript / Modern JS',
];

// Optional: Server-side data fetcher if needed on the homepage
async function getTopMovies() {
  const res = await fetch('https://imdb236.p.rapidapi.com/api/imdb/top-rated-english-movies', {
    headers: {
      'x-rapidapi-host': process.env.RAPIDAPI_HOST,
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];
  return res.json();
}

// 1. Dynamic SEO Metadata Function
export async function generateMetadata() {
  const movies = await getTopMovies();
  const movie = movies[10];

  if (!movie) {
    return {
      title: "Movie Not Found",
      description: "Details for this movie could not be found.",
    };
  }

  return {
    title: `${movie.primaryTitle} (${movie.startYear}) | Movie Hub`,
    description: movie.description,
    openGraph: {
      title: movie.primaryTitle,
      description: movie.description,
      images: [
        {
          url: movie.primaryImage,
          alt: movie.primaryTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: movie.primaryTitle,
      description: movie.description,
      images: [movie.primaryImage],
    },
  };
}

export default async function HomePage() {
  // If you need data, fetch it right here:
  const movies = await getTopMovies();

  console.log('Top Movies:', movies);

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-neutral-200 py-20 sm:py-28 lg:py-32 dark:border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              
              {/* Release Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Next Auth v2.0 Architecture
              </div>

              {/* Title & Subhead */}
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl dark:text-white">
                Production-grade auth primitives for{' '}
                <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 bg-clip-text text-transparent dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                  Next.js apps.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
                A hardened template featuring secure cookie token handshakes, Redux state synchronization, form validation, and modern component design.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/register"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 sm:w-auto dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <span>Get Started</span>
                  <HiOutlineArrowRight className="h-4 w-4" />
                </Link>

                {/* Isolated Client Component */}
                <CopyInstallButton cmd="npx create-next-auth-app@latest" />
              </div>

              {/* Stack Badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
                {frameworks.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-neutral-200/80 bg-neutral-50/50 px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Movie Grid Section */}

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Top Movies
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              Explore the highest-rated films.
            </p>

            {/* Movie Grid */}
            <div className="mt-12">
              <MovieGrid movies={movies} />
            </div>
          </div>
        </section>

        {/* Code / Architecture Interactive Preview */}
        <section className="border-b border-neutral-200 bg-neutral-50/40 py-16 sm:py-24 dark:border-neutral-800 dark:bg-neutral-900/20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 text-neutral-200 shadow-2xl dark:border-neutral-800">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-neutral-400">
                    authMiddleware.ts
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineCommandLine className="h-4 w-4 text-neutral-500" />
                  <span className="text-[11px] text-neutral-500 font-mono">TypeScript</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs leading-relaxed overflow-x-auto text-neutral-300">
                <p className="text-neutral-500">// Verify encrypted session token at edge boundary</p>
                <p>
                  <span className="text-purple-400">export async function</span>{' '}
                  <span className="text-blue-400">middleware</span>(
                  <span className="text-orange-300">req</span>:{' '}
                  <span className="text-emerald-400">NextRequest</span>) &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span> token = req.cookies.
                  <span className="text-blue-300">get</span>(
                  <span className="text-emerald-300">&quot;session_token&quot;</span>)?.value;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">if</span> (!token) &#123;
                </p>
                <p className="pl-8">
                  <span className="text-purple-400">return</span> NextResponse.
                  <span className="text-blue-300">redirect</span>(
                  <span className="text-purple-400">new</span>{' '}
                  <span className="text-blue-300">URL</span>(
                  <span className="text-emerald-300">&quot;/login&quot;</span>, req.url));
                </p>
                <p className="pl-4">&#125;</p>
                <p className="pl-4">
                  <span className="text-purple-400">return</span> NextResponse.
                  <span className="text-blue-300">next</span>();
                </p>
                <p>&#125;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Capabilities
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
                Everything required for modern identity.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.name}
                    className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                      {feat.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="border-t border-neutral-200 bg-neutral-50/60 py-16 text-center dark:border-neutral-800 dark:bg-neutral-900/30">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              <HiOutlineShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">
              Start building your application today.
            </h2>
            <p className="mt-2 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
              Zero configuration setup with built-in dark mode, Redux thunks, and responsive layouts.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link
                href="/register"
                className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Create Account
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}