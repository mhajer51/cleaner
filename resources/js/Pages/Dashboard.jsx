import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200/70">
                            لمحة تشغيلية
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-white lg:text-4xl">
                            لوحة إدارة شركة لمعة النظافة
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-300">
                            تابع الحجوزات المباشرة، أداء الفرق الميدانية، رضا
                            العملاء، ومستوى الخدمة من مكان واحد.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                            تنزيل تقرير اليوم
                        </button>
                        <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                            جدولة مهمة عاجلة
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
                                        label: 'إيرادات الشهر',
                                        value: '420,500 ر.س',
                                        delta: '+12.8%'
                                    },
                                    {
                                        label: 'طلبات اليوم',
                                        value: '36 طلب',
                                        delta: '+8.3%'
                                    },
                                    {
                                        label: 'فرق نشطة الآن',
                                        value: '5 فرق',
                                        delta: '+1 فريق'
                                    },
                                    {
                                        label: 'تقييم الخدمة',
                                        value: '4.8 / 5',
                                        delta: 'رضا مرتفع'
                                    }
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
                                                توزيع الخدمات
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                أكثر الطلبات هذا الأسبوع
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                            آخر 7 أيام
                                        </span>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        {[
                                            { label: 'تنظيف منازل', value: '72%' },
                                            { label: 'تنظيف مكاتب', value: '48%' },
                                            { label: 'تعقيم شامل', value: '35%' }
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
                                                            width: item.value
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                                        <p className="text-sm font-medium text-white/80">
                                            تنبيه عملياتي
                                        </p>
                                        <p className="mt-2 text-sm text-white/60">
                                            زيادة طلبات التعقيم بنسبة 18%. يُفضل
                                            إضافة فريق دعم إضافي لوسط المدينة.
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                                أداء الفرق
                                            </p>
                                            <h3 className="mt-2 text-lg font-semibold text-white">
                                                مؤشرات الالتزام والجودة
                                            </h3>
                                        </div>
                                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                                            اليوم
                                        </span>
                                    </div>
                                    <div className="mt-6 grid gap-4">
                                        {[
                                            {
                                                label: 'الالتزام بالمواعيد',
                                                value: '96%',
                                                trend: '+2%'
                                            },
                                            {
                                                label: 'إكمال المهام',
                                                value: '93%',
                                                trend: '+1.4%'
                                            },
                                            {
                                                label: 'شكاوى مغلقة',
                                                value: '18 بلاغ',
                                                trend: '-3'
                                            }
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
                                            مستوى الجودة الكلي
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
                                            جدول اليوم
                                        </p>
                                        <h3 className="mt-2 text-lg font-semibold text-white">
                                            المهام القادمة للفرق
                                        </h3>
                                    </div>
                                    <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
                                        عرض كل الجداول
                                    </button>
                                </div>
                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            title: 'فيلا العدان - تنظيف شامل',
                                            owner: 'فريق النخبة',
                                            status: '08:30 ص'
                                        },
                                        {
                                            title: 'شركة المستقبل - مكاتب',
                                            owner: 'فريق الشروق',
                                            status: '11:00 ص'
                                        },
                                        {
                                            title: 'مجمع ريناد - تعقيم',
                                            owner: 'فريق الشفق',
                                            status: '02:00 م'
                                        }
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
                                    نبض الفريق
                                </p>
                                <h3 className="mt-2 text-lg font-semibold text-white">
                                    الجاهزية والتوزيع
                                </h3>
                                <div className="mt-6 space-y-4">
                                    {[
                                        {
                                            name: 'سارة عبدالله',
                                            role: 'قائدة فريق الشفق',
                                            status: 'جاهزة'
                                        },
                                        {
                                            name: 'عبدالله سالم',
                                            role: 'مشرف الجودة',
                                            status: 'في الميدان'
                                        },
                                        {
                                            name: 'نجلاء يوسف',
                                            role: 'مديرة العملاء',
                                            status: 'متابعة مكالمات'
                                        }
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
                                    إرسال رسالة للفرق
                                </button>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-fuchsia-500/20 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                    الهدف الشهري
                                </p>
                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    رفع متوسط تقييم العملاء
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    ركّز على متابعة ما بعد الخدمة لضمان تقييم
                                    أعلى من 4.9.
                                </p>
                                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/80">
                                    <span>متبقي 12 يوم</span>
                                    <span className="font-semibold">
                                        74% محقق
                                    </span>
                                </div>
                                <button className="mt-6 w-full rounded-2xl bg-white text-sm font-semibold text-slate-950 shadow-lg shadow-white/30">
                                    مراجعة الخطة
                                </button>
                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                    ملاحظات العملاء
                                </p>
                                <div className="mt-4 space-y-3 text-sm text-white/70">
                                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                                        "التزام رائع بالمواعيد، ونظافة ممتازة"
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                                        "الفريق كان محترفًا وأدوات التعقيم واضحة"
                                    </div>
                                    <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                                        "سرعة استجابة ممتازة لخدمة الطوارئ"
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
