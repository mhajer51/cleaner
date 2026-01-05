import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';

const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' }
];

export default function Slider({ sliders }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        title_ar: '',
        title_en: '',
        description_ar: '',
        description_en: '',
        order: 1,
        status: 'active',
        is_public: true
    });

    const submit = (event) => {
        event.preventDefault();
        post(route('admin.slider.store'), {
            onSuccess: () => reset()
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-indigo-600">
                            Admin · Slider
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                            Manage homepage sliders
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-500">
                            Curate bilingual hero slides with ordering, status,
                            and visibility controls.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
                            {sliders.length} slides
                        </span>
                    </div>
                </div>
            }
        >
            <Head title="Slider" />

            <div className="pb-12">
                <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                    {flash?.success ? (
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700">
                            {flash.success}
                        </div>
                    ) : null}

                    <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">
                                        Slides list
                                    </p>
                                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                        Current slider collection
                                    </h3>
                                </div>
                                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                                    Ordered by priority
                                </span>
                            </div>

                            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                                {sliders.length === 0 ? (
                                    <div className="col-span-full rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500">
                                        No sliders yet. Use the form to create
                                        your first slide.
                                    </div>
                                ) : (
                                    sliders.map((slider) => (
                                        <article
                                            key={slider.id}
                                            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                                        Order #{slider.order}
                                                    </p>
                                                    <h4 className="mt-2 text-lg font-semibold text-slate-900">
                                                        {slider.title_en}
                                                    </h4>
                                                    <p className="mt-2 text-sm text-slate-500">
                                                        {slider.description_en ||
                                                            'No English description yet.'}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-end gap-2 text-xs">
                                                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600">
                                                        {slider.status}
                                                    </span>
                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                            slider.is_public
                                                                ? 'bg-emerald-50 text-emerald-700'
                                                                : 'bg-amber-50 text-amber-700'
                                                        }`}
                                                    >
                                                        {slider.is_public
                                                            ? 'Public'
                                                            : 'Hidden'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-right">
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {slider.title_ar}
                                                </p>
                                                <p className="mt-1 text-xs text-slate-500">
                                                    {slider.description_ar ||
                                                        'لا يوجد وصف عربي بعد.'}
                                                </p>
                                            </div>
                                        </article>
                                    ))
                                )}
                            </div>
                        </section>

                        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500">
                                        New slide
                                    </p>
                                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                                        Create slider item
                                    </h3>
                                </div>
                                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                                    Bilingual content
                                </span>
                            </div>

                            <form onSubmit={submit} className="mt-6 space-y-5">
                                <div className="grid gap-4">
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Arabic title
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                                            value={data.title_ar}
                                            onChange={(event) =>
                                                setData(
                                                    'title_ar',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="عنوان الشريحة"
                                        />
                                        {errors.title_ar ? (
                                            <p className="mt-2 text-xs text-rose-500">
                                                {errors.title_ar}
                                            </p>
                                        ) : null}
                                    </div>

                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            English title
                                        </label>
                                        <input
                                            type="text"
                                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                                            value={data.title_en}
                                            onChange={(event) =>
                                                setData(
                                                    'title_en',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="Slide headline"
                                        />
                                        {errors.title_en ? (
                                            <p className="mt-2 text-xs text-rose-500">
                                                {errors.title_en}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Arabic description
                                        </label>
                                        <textarea
                                            className="mt-2 min-h-[110px] w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                                            value={data.description_ar}
                                            onChange={(event) =>
                                                setData(
                                                    'description_ar',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="وصف مختصر بالعربية"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            English description
                                        </label>
                                        <textarea
                                            className="mt-2 min-h-[110px] w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400"
                                            value={data.description_en}
                                            onChange={(event) =>
                                                setData(
                                                    'description_en',
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="Short English description"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Order
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                                            value={data.order}
                                            onChange={(event) =>
                                                setData(
                                                    'order',
                                                    Number(event.target.value),
                                                )
                                            }
                                        />
                                        {errors.order ? (
                                            <p className="mt-2 text-xs text-rose-500">
                                                {errors.order}
                                            </p>
                                        ) : null}
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                            Status
                                        </label>
                                        <select
                                            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900"
                                            value={data.status}
                                            onChange={(event) =>
                                                setData('status', event.target.value)
                                            }
                                        >
                                            {statusOptions.map((status) => (
                                                <option
                                                    key={status.value}
                                                    value={status.value}
                                                >
                                                    {status.label}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.status ? (
                                            <p className="mt-2 text-xs text-rose-500">
                                                {errors.status}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Public status
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Toggle slide visibility on the
                                            homepage.
                                        </p>
                                    </div>
                                    <label className="relative inline-flex cursor-pointer items-center">
                                        <input
                                            type="checkbox"
                                            className="peer sr-only"
                                            checked={data.is_public}
                                            onChange={(event) =>
                                                setData(
                                                    'is_public',
                                                    event.target.checked,
                                                )
                                            }
                                        />
                                        <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-emerald-500 peer-checked:after:translate-x-full"></div>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {processing
                                        ? 'Saving...'
                                        : 'Create slider item'}
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
