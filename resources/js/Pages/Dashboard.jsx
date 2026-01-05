import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/70">
                            Overview
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-white lg:text-4xl">
                            Executive Performance Dashboard
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-300">
                            Track revenue velocity, customer momentum, and
                            operational health with a real-time snapshot of
                            your business.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                            Export report
                        </button>
                        <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                            Create insight
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="pb-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
                        <section className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                {[
                                    {
                                        label: 'Revenue',
                                        value: '$2.42M',
                                        delta: '+18.4%',
                                    },
                                    {
                                        label: 'Active clients',
                                        value: '1,284',
                                        delta: '+6.8%',
                                    },
                                    {
                                        label: 'Conversion rate',
                                        value: '4.7%',
                                        delta: '+1.2%',
                                    },
                                    {
                                        label: 'Net retention',
                                        value: '112%',
                                        delta: '+3.3%',
                                    },
                                ].map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                            {stat.label}
                                        </p>
                                        <div className="mt-4 flex items-end justify-between">
                                            <p className="text-2xl font-semibold text-white">
                                                {stat.value}
                                            </p>
                                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                                                {stat.delta}
                                            </span>
                                        </div>
                                        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                                Sales pipeline
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                Momentum by region
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                            Last 30 days
                                        </span>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        {[
                                            { label: 'MENA', value: '68%' },
                                            { label: 'Europe', value: '54%' },
                                            { label: 'APAC', value: '77%' },
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                className="space-y-2"
                                            >
                                                <div className="flex items-center justify-between text-sm text-white/80">
                                                    <span>{item.label}</span>
                                                    <span>{item.value}</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-white/10">
                                                    <div
                                                        className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-500"
                                                        style={{
                                                            width: item.value,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                        <p className="text-sm font-medium text-white/80">
                                            AI highlight
                                        </p>
                                        <p className="mt-2 text-sm text-white/60">
                                            Enterprise pipeline grew 23% after
                                            the onboarding refresh. Consider
                                            expanding the UAE segment.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                                Revenue forecast
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                Quarterly projection
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                            Q4 2024
                                        </span>
                                    </div>
                                    <div className="mt-6 grid gap-4">
                                        {[
                                            {
                                                label: 'Subscriptions',
                                                value: '$1.1M',
                                                trend: '+12%',
                                            },
                                            {
                                                label: 'Enterprise',
                                                value: '$820K',
                                                trend: '+9%',
                                            },
                                            {
                                                label: 'Services',
                                                value: '$500K',
                                                trend: '+6%',
                                            },
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium text-white/80">
                                                        {item.label}
                                                    </p>
                                                    <p className="text-lg font-semibold text-white">
                                                        {item.value}
                                                    </p>
                                                </div>
                                                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                                                    {item.trend}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-fuchsia-500/20 p-4">
                                        <p className="text-sm text-white/70">
                                            Goal progress
                                        </p>
                                        <p className="mt-1 text-2xl font-semibold text-white">
                                            82%
                                        </p>
                                        <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                                            <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-indigo-400 to-emerald-400"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                            Active projects
                                        </p>
                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            Delivery pipeline
                                        </h3>
                                    </div>
                                    <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                                        View all projects
                                    </button>
                                </div>
                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            title: 'Dubai Expansion',
                                            owner: 'Strategy',
                                            status: 'In progress',
                                        },
                                        {
                                            title: 'Mobile Redesign',
                                            owner: 'Product',
                                            status: 'Review',
                                        },
                                        {
                                            title: 'Loyalty Program',
                                            owner: 'Growth',
                                            status: 'On track',
                                        },
                                    ].map((project) => (
                                        <div
                                            key={project.title}
                                            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    {project.title}
                                                </p>
                                                <p className="text-xs text-white/60">
                                                    {project.owner} team
                                                </p>
                                            </div>
                                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                                                {project.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <aside className="space-y-6">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                    Team pulse
                                </p>
                                <h3 className="mt-2 text-lg font-semibold text-white">
                                    Availability & focus
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            name: 'Amina Saleh',
                                            role: 'Head of Growth',
                                            status: 'Available',
                                        },
                                        {
                                            name: 'Omar Khalid',
                                            role: 'Design Lead',
                                            status: 'Deep work',
                                        },
                                        {
                                            name: 'Sara Ali',
                                            role: 'Ops Manager',
                                            status: 'In meetings',
                                        },
                                    ].map((person) => (
                                        <div
                                            key={person.name}
                                            className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    {person.name}
                                                </p>
                                                <p className="text-xs text-white/60">
                                                    {person.role}
                                                </p>
                                            </div>
                                            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                                                {person.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-6 w-full rounded-2xl border border-white/15 bg-white/5 py-2 text-sm font-semibold text-white/80">
                                    Message team
                                </button>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-fuchsia-500/20 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Next milestone
                                </p>
                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    Investor update briefing
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    Prepare the executive story and align KPI
                                    summaries for the board session.
                                </p>
                                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80">
                                    <span>Due in 3 days</span>
                                    <span className="font-semibold">
                                        87% ready
                                    </span>
                                </div>
                                <button className="mt-6 w-full rounded-2xl bg-white text-sm font-semibold text-slate-950 shadow-lg shadow-white/30">
                                    Review checklist
                                </button>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                    Recent activity
                                </p>
                                <div className="mt-4 space-y-3 text-sm text-white/70">
                                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                                        Forecast accuracy increased to 92%.
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                                        4 enterprise accounts moved to renewal.
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                                        Team satisfaction index is up 6 pts.
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
