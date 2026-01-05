import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const overviewStats = [
    {
        label: 'Monthly revenue',
        value: 'SAR 420,500',
        delta: '+12.8%',
        caption: 'Compared to last month',
        trend: 'from-emerald-400 to-cyan-300'
    },
    {
        label: 'Today’s requests',
        value: '36 orders',
        delta: '+8.3%',
        caption: 'Strong conversion rate',
        trend: 'from-purple-400 to-fuchsia-400'
    },
    {
        label: 'Active teams',
        value: '5 teams',
        delta: '+1 team',
        caption: '96% readiness',
        trend: 'from-indigo-400 to-sky-400'
    },
    {
        label: 'Service rating',
        value: '4.8 / 5',
        delta: 'High satisfaction',
        caption: 'Weekly average',
        trend: 'from-amber-300 to-orange-400'
    }
];

const serviceMix = [
    { label: 'Residential cleaning', value: '72%' },
    { label: 'Office cleaning', value: '48%' },
    { label: 'Full sanitization', value: '35%' }
];

const teamMetrics = [
    { label: 'On-time arrivals', value: '96%', trend: '+2%' },
    { label: 'Task completion', value: '93%', trend: '+1.4%' },
    { label: 'Closed tickets', value: '18 cases', trend: '-3' }
];

const dailySchedule = [
    {
        title: 'Al-Adan Villa - Deep clean',
        owner: 'Elite team',
        status: '08:30 AM'
    },
    {
        title: 'Future Company - Offices',
        owner: 'Shorouk team',
        status: '11:00 AM'
    },
    {
        title: 'Rinad Complex - Sanitization',
        owner: 'Shafaq team',
        status: '02:00 PM'
    }
];

const teamPulse = [
    {
        name: 'Sarah Abdullah',
        role: 'Shafaq team lead',
        status: 'Ready'
    },
    {
        name: 'Abdullah Salem',
        role: 'Quality supervisor',
        status: 'In the field'
    },
    {
        name: 'Najla Yousef',
        role: 'Customer success lead',
        status: 'Following up'
    }
];

const customerFeedback = [
    '"Excellent punctuality and spotless work."',
    '"The team was professional and sanitization was clear."',
    '"Outstanding response time for urgent requests."'
];

const activityTimeline = [
    {
        title: 'Sanitization request completed',
        time: '18 minutes ago',
        detail: 'Shorouk team finished the job successfully.'
    },
    {
        title: 'New client onboarded',
        time: '1 hour ago',
        detail: 'Shining Cloud Co. signed a monthly contract.'
    },
    {
        title: 'Quality plan updated',
        time: '3 hours ago',
        detail: 'Customer satisfaction survey sent.'
    }
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8">
                    <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/70">
                                Real-time operations
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold text-white lg:text-4xl">
                                Lamaa Cleaning Operations Dashboard
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm text-slate-300">
                                Track live bookings, field team performance,
                                customer satisfaction, and service quality from
                                one unified workspace.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                                Download daily report
                            </button>
                            <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                                Schedule urgent task
                            </button>
                        </div>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="pb-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {overviewStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 backdrop-blur"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                        {stat.label}
                                    </p>
                                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                                        {stat.delta}
                                    </span>
                                </div>
                                <p className="mt-4 text-2xl font-semibold text-white">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs text-white/50">
                                    {stat.caption}
                                </p>
                                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className={`h-full w-2/3 rounded-full bg-gradient-to-r ${stat.trend}`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <div className="mt-8 grid gap-6 lg:grid-cols-[2fr,1fr]">
                        <section className="space-y-6">
                            <div className="grid gap-6 lg:grid-cols-2">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                            Service mix
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                Top requests this week
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                            Last 7 days
                                        </span>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        {serviceMix.map((item) => (
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
                                                            width: item.value
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                        <p className="text-sm font-medium text-white/80">
                                            Operations alert
                                        </p>
                                        <p className="mt-2 text-sm text-white/60">
                                            Sanitization requests are up 18%.
                                            Add an extra support team for the
                                            downtown area.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                                Team performance
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                Reliability & quality
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                            Today
                                        </span>
                                    </div>
                                    <div className="mt-6 grid gap-4">
                                        {teamMetrics.map((item) => (
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
                                            Overall quality score
                                        </p>
                                        <p className="mt-1 text-2xl font-semibold text-white">
                                            91%
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
                                            Today’s schedule
                                        </p>
                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            Upcoming team assignments
                                        </h3>
                                    </div>
                                    <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                                        View all schedules
                                    </button>
                                </div>
                                <div className="mt-6 space-y-4">
                                    {dailySchedule.map((project) => (
                                        <div
                                            key={project.title}
                                            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    {project.title}
                                                </p>
                                                <p className="text-xs text-white/60">
                                                    {project.owner}
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
                                    Readiness & allocation
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {teamPulse.map((person) => (
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
                                    Message the teams
                                </button>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-fuchsia-500/20 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Monthly objective
                                </p>
                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    Raise customer ratings
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    Focus on post-service follow-ups to exceed a
                                    4.9 rating.
                                </p>
                                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80">
                                    <span>12 days remaining</span>
                                    <span className="font-semibold">
                                        74% achieved
                                    </span>
                                </div>
                                <button className="mt-6 w-full rounded-2xl bg-white text-sm font-semibold text-slate-950 shadow-lg shadow-white/30">
                                    Review plan
                                </button>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                    Latest activity
                                </p>
                                <div className="mt-4 space-y-4">
                                    {activityTimeline.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                                        >
                                            <p className="text-sm font-semibold text-white">
                                                {item.title}
                                            </p>
                                            <p className="mt-1 text-xs text-white/50">
                                                {item.time}
                                            </p>
                                            <p className="mt-2 text-sm text-white/70">
                                                {item.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                    Customer feedback
                                </p>
                                <div className="mt-4 space-y-3 text-sm text-white/70">
                                    {customerFeedback.map((feedback) => (
                                        <div
                                            key={feedback}
                                            className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3"
                                        >
                                            {feedback}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
