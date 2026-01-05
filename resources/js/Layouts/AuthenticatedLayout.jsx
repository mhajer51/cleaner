import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100" dir="rtl">
            <div className="lg:flex">
                <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-l lg:border-white/10 lg:bg-slate-950">
                    <div className="flex flex-1 flex-col px-6 pb-8 pt-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
                                <ApplicationLogo className="h-7 w-7 fill-current text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                                    لوحة التحكم
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    شركة لمعة النظافة
                                </p>
                            </div>
                        </Link>

                        <div className="mt-10 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                الأقسام الرئيسية
                            </p>
                            <div className="space-y-1">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    لوحة التحكم
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    الطلبات الجديدة
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    الجدولة اليومية
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    العملاء
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    الفرق الميدانية
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    التقارير
                                </NavLink>
                            </div>
                        </div>

                        <div className="mt-10 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                الإدارة
                            </p>
                            <div className="space-y-1">
                                <NavLink href="#" active={false}>
                                    الفواتير والمدفوعات
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    المخزون
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    الإعدادات
                                </NavLink>
                            </div>
                        </div>

                        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-fuchsia-500/10 p-5">
                            <p className="text-sm font-semibold text-white">
                                حالة التشغيل اليوم
                            </p>
                            <p className="mt-2 text-sm text-white/70">
                                18 مهمة مجدولة، 5 فرق نشطة، نسبة التزام 96%.
                            </p>
                            <button className="mt-4 w-full rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/30">
                                فتح غرفة المتابعة
                            </button>
                        </div>

                        <div className="mt-auto pt-8">
                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-700 text-xs font-semibold uppercase text-white">
                                    {user.name
                                        .split(' ')
                                        .map((part) => part[0])
                                        .join('')}
                                </span>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-white">
                                        {user.name}
                                    </p>
                                    <p className="text-xs text-white/60">
                                        مدير العمليات
                                    </p>
                                </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white">
                                            <svg
                                                className="h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M12 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            الملف الشخصي
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            تسجيل الخروج
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </aside>

                <div className="flex-1">
                    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
                        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3 lg:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/70 transition hover:text-white"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? 'inline-flex'
                                                    : 'hidden'
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <Link href="/" className="flex items-center gap-2">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
                                        <ApplicationLogo className="h-6 w-6 fill-current text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-white/60">
                                            شركة لمعة النظافة
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            لوحة الإدارة
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="hidden flex-1 items-center justify-between gap-6 lg:flex">
                                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                                    <svg
                                        className="h-4 w-4 text-white/60"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="m21 21-4.3-4.3m0 0A7.5 7.5 0 1 0 6 6a7.5 7.5 0 0 0 10.7 10.7Z"
                                        />
                                    </svg>
                                    <span>ابحث عن عميل أو مهمة...</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                                        إنشاء عرض سعر
                                    </button>
                                    <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                                        إضافة مهمة جديدة
                                    </button>
                                    <button
                                        type="button"
                                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:text-white"
                                    >
                                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-400"></span>
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M14 17h-4m9-6a7 7 0 1 0-14 0v3.5c0 .6-.2 1.2-.6 1.7L3 18h18l-1.4-1.8c-.4-.5-.6-1.1-.6-1.7V11Z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 lg:hidden">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm text-white/80 transition hover:text-white">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-700 text-xs font-semibold uppercase text-white">
                                                {user.name
                                                    .split(' ')
                                                    .map((part) => part[0])
                                                    .join('')}
                                            </span>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                        >
                                            الملف الشخصي
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            تسجيل الخروج
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div
                            className={
                                (showingNavigationDropdown ? 'block' : 'hidden') +
                                ' border-t border-white/10 bg-slate-900/80 backdrop-blur lg:hidden'
                            }
                        >
                            <div className="space-y-1 px-4 pb-3 pt-4">
                                <ResponsiveNavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    لوحة التحكم
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    الطلبات الجديدة
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    الجدولة اليومية
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    العملاء
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    الفرق الميدانية
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    التقارير
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    الإعدادات
                                </ResponsiveNavLink>
                            </div>

                            <div className="border-t border-white/10 pb-4 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-white">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium text-white/60">
                                        {user.email}
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink href={route('profile.edit')}>
                                        الملف الشخصي
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route('logout')}
                                        as="button"
                                    >
                                        تسجيل الخروج
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {header && (
                        <header className="bg-slate-950">
                            <div className="mx-auto max-w-7xl px-4 pb-4 pt-8 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}

                    <main className="pb-16">{children}</main>
                </div>
            </div>
        </div>
    );
}
