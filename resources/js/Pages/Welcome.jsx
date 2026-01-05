import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />
                    <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>

                <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-10 lg:px-8">
                    <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                                <svg
                                    className="h-6 w-6 text-white"
                                    viewBox="0 0 62 65"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                    Laravel Studio
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    Crafting modern experiences
                                </p>
                            </div>
                        </div>
                        <nav className="flex flex-wrap items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </header>

                    <main className="flex flex-1 flex-col gap-16 pt-16">
                        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                            <div className="space-y-8">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    New release ready
                                </span>
                                <div className="space-y-5">
                                    <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                                        Design, build, and ship stunning Laravel
                                        experiences faster.
                                    </h1>
                                    <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                                        A premium toolkit of components, layouts, and
                                        workflow automation designed for ambitious teams.
                                        Everything is tuned for performance, clarity, and
                                        delightful user journeys.
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-4">
                                    <a
                                        href="https://laravel.com/docs"
                                        className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                                    >
                                        Explore documentation
                                    </a>
                                    <a
                                        href="https://laracasts.com"
                                        className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                                    >
                                        Watch tutorials
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                                        Lightning-fast setup
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-purple-300" />
                                        Production-ready components
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                                            Live insights
                                        </p>
                                        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                                            +24% growth
                                        </span>
                                    </div>
                                    <p className="mt-6 text-3xl font-semibold text-white">
                                        1.2M
                                    </p>
                                    <p className="mt-2 text-sm text-slate-400">
                                        Monthly active users across Laravel builds.
                                    </p>
                                    <div className="mt-8 grid gap-3">
                                        {[
                                            'Automated deployment pipelines',
                                            'Realtime performance metrics',
                                            'Team-ready design system',
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                                            >
                                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                                    <p className="text-sm font-semibold text-white">
                                        "The fastest way we have ever shipped a
                                        production-grade Laravel experience."
                                    </p>
                                    <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                                        Design Lead · Nova Labs
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-3">
                            {[
                                {
                                    title: 'Enterprise-ready security',
                                    description:
                                        'Built-in authentication, authorization, and auditing patterns aligned with Laravel best practices.',
                                },
                                {
                                    title: 'Composable layouts',
                                    description:
                                        'Modular layouts that scale across products, markets, and teams without sacrificing brand consistency.',
                                },
                                {
                                    title: 'Zero-friction onboarding',
                                    description:
                                        'Clear flows and delightful micro-interactions that help new users succeed in minutes.',
                                },
                            ].map((feature) => (
                                <div key={feature.title} className="space-y-3">
                                    <h3 className="text-lg font-semibold text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-300">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </section>

                        <section className="grid gap-6 lg:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold text-white">
                                    Resources that keep you shipping
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                    Access a library of tutorials, news, and advanced
                                    patterns to keep your Laravel stack ahead of the
                                    curve.
                                </p>
                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            label: 'Laravel Documentation',
                                            href: 'https://laravel.com/docs',
                                        },
                                        {
                                            label: 'Laracasts Masterclasses',
                                            href: 'https://laracasts.com',
                                        },
                                        {
                                            label: 'Laravel News Digest',
                                            href: 'https://laravel-news.com',
                                        },
                                    ].map((resource) => (
                                        <a
                                            key={resource.label}
                                            href={resource.href}
                                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:border-white/30"
                                        >
                                            {resource.label}
                                            <span className="text-slate-400">→</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/20 via-transparent to-cyan-300/20 p-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white">
                                        Launch-ready ecosystem
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-200">
                                        Pair your build with Forge, Vapor, Nova, and more
                                        to unlock a seamless release workflow from local
                                        development to global scale.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            'Forge',
                                            'Vapor',
                                            'Nova',
                                            'Envoyer',
                                            'Herd',
                                            'Cashier',
                                            'Horizon',
                                            'Sanctum',
                                        ].map((pill) => (
                                            <span
                                                key={pill}
                                                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white"
                                            >
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:flex-row sm:text-left">
                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    Ready to elevate your next launch?
                                </h3>
                                <p className="mt-2 text-sm text-slate-300">
                                    Move from idea to polished product experience in
                                    record time.
                                </p>
                            </div>
                            <a
                                href="https://laravel.com/docs"
                                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                            >
                                Start building
                            </a>
                        </section>
                    </main>

                    <footer className="mt-16 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
                        <span>Laravel v{laravelVersion} · PHP v{phpVersion}</span>
                        <span>Designed with Tailwind CSS</span>
                    </footer>
                </div>
            </div>
        </>
    );
}
