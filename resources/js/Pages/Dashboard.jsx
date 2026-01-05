import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const overviewStats = [
    {
        label: 'Total Revenue',
        value: 'SAR 420,500',
        delta: '+12.8%',
        caption: 'vs last month',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50'
    },
    {
        label: 'Today’s Orders',
        value: '36',
        delta: '+8.3%',
        caption: 'daily target',
        color: 'text-blue-600',
        bg: 'bg-blue-50'
    },
    {
        label: 'Active Teams',
        value: '5',
        delta: '+1',
        caption: 'staffed & ready',
        color: 'text-purple-600',
        bg: 'bg-purple-50'
    },
    {
        label: 'Service Rating',
        value: '4.8/5',
        delta: 'High',
        caption: 'weekly avg',
        color: 'text-amber-600',
        bg: 'bg-amber-50'
    }
];

const serviceMix = [
    { label: 'Residential cleaning', value: 72, color: 'bg-indigo-500' },
    { label: 'Office cleaning', value: 48, color: 'bg-purple-500' },
    { label: 'Full sanitization', value: 35, color: 'bg-sky-500' }
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
        status: '08:30 AM',
        badge: 'bg-emerald-50 text-emerald-700'
    },
    {
        title: 'Future Company - Offices',
        owner: 'Shorouk team',
        status: '11:00 AM',
        badge: 'bg-blue-50 text-blue-700'
    },
    {
        title: 'Rinad Complex - Sanitization',
        owner: 'Shafaq team',
        status: '02:00 PM',
        badge: 'bg-purple-50 text-purple-700'
    }
];

const teamPulse = [
    {
        name: 'Sarah Abdullah',
        role: 'Shafaq team lead',
        status: 'Ready',
        badge: 'bg-emerald-50 text-emerald-700'
    },
    {
        name: 'Abdullah Salem',
        role: 'Quality supervisor',
        status: 'In the field',
        badge: 'bg-amber-50 text-amber-700'
    },
    {
        name: 'Najla Yousef',
        role: 'Customer success lead',
        status: 'Following up',
        badge: 'bg-blue-50 text-blue-700'
    }
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

const recentOrders = [
    {
        customer: 'Rinad Complex',
        type: 'Full sanitization',
        team: 'Shafaq',
        status: 'In progress',
        badge: 'bg-blue-50 text-blue-700'
    },
    {
        customer: 'Cedar Offices',
        type: 'Office cleaning',
        team: 'Elite',
        status: 'Scheduled',
        badge: 'bg-amber-50 text-amber-700'
    },
    {
        customer: 'Lakeview Villa',
        type: 'Deep clean',
        team: 'Shorouk',
        status: 'Completed',
        badge: 'bg-emerald-50 text-emerald-700'
    }
];

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-indigo-600">
                            Operations Overview
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                            Lamaa Cleaning Command Center
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-500">
                            Monitor bookings, team readiness, and customer
                            experience with real-time operational insights.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-lg border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:text-slate-900">
                            Download report
                        </button>
                        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500">
                            Schedule urgent task
                        </button>
                    </div>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="pb-12">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {overviewStats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-slate-500">
                                        {stat.label}
                                    </p>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${stat.bg} ${stat.color}`}
                                    >
                                        {stat.delta}
                                    </span>
                                </div>
                                <p className="mt-4 text-2xl font-semibold text-slate-900">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                    {stat.caption}
                                </p>
                            </div>
                        ))}
                    </section>

                    <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
                        <section className="space-y-6">
                            <div className="grid gap-6 lg:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500">
                                                Service mix
                                            </p>
                                            <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                                Top requests this week
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                                            Last 7 days
                                        </span>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        {serviceMix.map((item) => (
                                            <div
                                                key={item.label}
                                                className="space-y-2"
                                            >
                                                <div className="flex items-center justify-between text-sm text-slate-600">
                                                    <span>{item.label}</span>
                                                    <span>{item.value}%</span>
                                                </div>
                                                <div className="h-2 w-full rounded-full bg-slate-100">
                                                    <div
                                                        className={`h-2 rounded-full ${item.color}`}
                                                        style={{
                                                            width: `${item.value}%`
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                                        <p className="text-sm font-medium text-slate-700">
                                            Operations alert
                                        </p>
                                        <p className="mt-2 text-sm text-slate-500">
                                            Sanitization requests are up 18%.
                                            Add a support team for the downtown
                                            area.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500">
                                                Team performance
                                            </p>
                                            <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                                Reliability & quality
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                                            Today
                                        </span>
                                    </div>
                                    <div className="mt-6 grid gap-4">
                                        {teamMetrics.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                                            >
                                                <div>
                                                    <p className="text-sm font-medium text-slate-600">
                                                        {item.label}
                                                    </p>
                                                    <p className="text-lg font-semibold text-slate-900">
                                                        {item.value}
                                                    </p>
                                                </div>
                                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                                    {item.trend}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-900 p-4 text-white">
                                        <p className="text-sm text-white/70">
                                            Overall quality score
                                        </p>
                                        <p className="mt-1 text-2xl font-semibold">
                                            91%
                                        </p>
                                        <div className="mt-3 h-2 w-full rounded-full bg-white/15">
                                            <div className="h-2 w-4/5 rounded-full bg-emerald-400"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500">
                                                Orders analytics
                                            </p>
                                            <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                                Weekly performance
                                            </h3>
                                        </div>
                                        <button className="text-sm font-semibold text-indigo-600">
                                            View report
                                        </button>
                                    </div>
                                    <div className="mt-6 h-44 rounded-xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
                                        <div className="flex h-full items-end justify-between gap-3">
                                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                                                (day, index) => (
                                                    <div
                                                        key={day}
                                                        className="flex h-full flex-col items-center justify-end gap-2"
                                                    >
                                                        <div
                                                            className="w-7 rounded-full bg-indigo-500"
                                                            style={{
                                                                height: `${35 + index * 8}%`
                                                            }}
                                                        />
                                                        <span className="text-xs text-slate-500">
                                                            {day}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-500">
                                                Traffic sources
                                            </p>
                                            <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                                Lead channels
                                            </h3>
                                        </div>
                                        <span className="text-xs text-slate-500">
                                            Last 30 days
                                        </span>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        {[
                                            {
                                                label: 'Online booking',
                                                value: '56%'
                                            },
                                            {
                                                label: 'Call center',
                                                value: '27%'
                                            },
                                            {
                                                label: 'Referrals',
                                                value: '17%'
                                            }
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3"
                                            >
                                                <p className="text-sm font-medium text-slate-700">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {item.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-500">
                                            Today’s schedule
                                        </p>
                                        <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                            Upcoming team assignments
                                        </h3>
                                    </div>
                                    <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500">
                                        View all schedules
                                    </button>
                                </div>
                                <div className="mt-6 space-y-4">
                                    {dailySchedule.map((project) => (
                                        <div
                                            key={project.title}
                                            className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {project.title}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {project.owner}
                                                </p>
                                            </div>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${project.badge}`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <aside className="space-y-6">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <p className="text-sm font-semibold text-slate-500">
                                    Team pulse
                                </p>
                                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                    Readiness & allocation
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {teamPulse.map((person) => (
                                        <div
                                            key={person.name}
                                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {person.name}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {person.role}
                                                </p>
                                            </div>
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${person.badge}`}
                                            >
                                                {person.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-6 w-full rounded-lg border border-slate-200 bg-slate-900 py-2 text-sm font-semibold text-white">
                                    Message the teams
                                </button>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
                                <p className="text-sm font-semibold text-white/60">
                                    Monthly objective
                                </p>
                                <h3 className="mt-3 text-xl font-semibold">
                                    Raise customer ratings
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    Focus on post-service follow-ups to exceed a
                                    4.9 rating.
                                </p>
                                <div className="mt-6 flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80">
                                    <span>12 days remaining</span>
                                    <span className="font-semibold">
                                        74% achieved
                                    </span>
                                </div>
                                <button className="mt-6 w-full rounded-lg bg-white py-2 text-sm font-semibold text-slate-900">
                                    Review plan
                                </button>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <p className="text-sm font-semibold text-slate-500">
                                    Latest activity
                                </p>
                                <div className="mt-4 space-y-4">
                                    {activityTimeline.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                                        >
                                            <p className="text-sm font-semibold text-slate-900">
                                                {item.title}
                                            </p>
                                            <p className="mt-1 text-xs text-slate-500">
                                                {item.time}
                                            </p>
                                            <p className="mt-2 text-sm text-slate-600">
                                                {item.detail}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold text-slate-500">
                                        Recent orders
                                    </p>
                                    <button className="text-xs font-semibold text-indigo-600">
                                        See all
                                    </button>
                                </div>
                                <div className="mt-4 space-y-3">
                                    {recentOrders.map((order) => (
                                        <div
                                            key={order.customer}
                                            className="rounded-xl border border-slate-200 px-4 py-3"
                                        >
                                            <p className="text-sm font-semibold text-slate-900">
                                                {order.customer}
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                {order.type} · {order.team} team
                                            </p>
                                            <span
                                                className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${order.badge}`}
                                            >
                                                {order.status}
                                            </span>
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
