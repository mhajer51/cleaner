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
        <div className="min-h-screen bg-slate-950 text-slate-100" dir="ltr">
            <div className="lg:flex">
                <aside className="hidden lg:flex lg:w-80 lg:flex-col lg:border-r lg:border-white/10 lg:bg-slate-950/90 lg:shadow-[0_20px_60px_rgba(15,23,42,0.55)] lg:backdrop-blur-2xl">
                    <div className="flex flex-1 flex-col px-7 pb-8 pt-8">
                        <Link href="/" className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
                                <ApplicationLogo className="h-7 w-7 fill-current text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/50">
                                    Control Center
                                </p>
                                <p className="text-lg font-semibold text-white">
                                    Lamaa Cleaning
                                </p>
                                <p className="text-xs text-white/50">
                                    Premium operations suite
                                </p>
                            </div>
                        </Link>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                                    Main Sections
                                </p>
                                <span className="h-px w-16 bg-white/10"></span>
                            </div>
                            <div className="space-y-2">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    New Requests
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Daily Schedule
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Clients
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Field Teams
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Reports
                                </NavLink>
                            </div>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                                    Administration
                                </p>
                                <span className="h-px w-16 bg-white/10"></span>
                            </div>
                            <div className="space-y-2">
                                <NavLink href="#" active={false}>
                                    Billing & Payments
                                </NavLink>
                                <NavLink
                                    href={route('admin.slider.index')}
                                    active={route().current('admin.slider.*')}
                                >
                                    Slider Manager
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Inventory
                                </NavLink>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="group relative flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-medium text-white/60 transition duration-150 ease-in-out hover:bg-white/5 hover:text-white focus:outline-none"
                                        >
                                            <span>Settings</span>
                                            <svg
                                                className="h-4 w-4 text-white/60 transition group-hover:text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="m7 10 5 5 5-5"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content
                                        align="left"
                                        width="56"
                                        contentClasses="py-3 bg-slate-900/95 backdrop-blur border border-white/10"
                                    >
                                        <div className="px-4 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                                            Account & Admin
                                        </div>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
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
                                                        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 20a8 8 0 0 1 16 0"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold text-white">
                                                    Update Profile
                                                </span>
                                                <span className="block text-xs text-white/50">
                                                    Edit your personal details
                                                </span>
                                            </span>
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('profile.edit')}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300">
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
                                                        d="M16.5 10.5V7a4.5 4.5 0 1 0-9 0v3.5m-.75 0h10.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5Z"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold text-white">
                                                    Reset Password
                                                </span>
                                                <span className="block text-xs text-white/50">
                                                    Update your credentials
                                                </span>
                                            </span>
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="#"
                                            className="flex items-center gap-3"
                                        >
                                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
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
                                                        d="M17 20.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM19.5 18v-.5m0-4V13m-2.22 1.28-.35-.35m2.57 4.64.35.35M13 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 20a6 6 0 0 1 10.64-3.88"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold text-white">
                                                    Users
                                                </span>
                                                <span className="block text-xs text-white/50">
                                                    Manage team permissions
                                                </span>
                                            </span>
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="#"
                                            className="flex items-center gap-3"
                                        >
                                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
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
                                                        d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36-2.12 2.12M8.76 15.24l-2.12 2.12m0-12.72 2.12 2.12m9.48 9.48 2.12 2.12M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                    />
                                                </svg>
                                            </span>
                                            <span>
                                                <span className="block text-sm font-semibold text-white">
                                                    Language
                                                </span>
                                                <span className="block text-xs text-white/50">
                                                    Choose app locale
                                                </span>
                                            </span>
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-fuchsia-500/10 p-5 shadow-[0_12px_30px_rgba(79,70,229,0.18)]">
                            <p className="text-sm font-semibold text-white">
                                Today at a glance
                            </p>
                            <p className="mt-2 text-sm text-white/70">
                                18 tasks scheduled, 5 active teams, 96% on-time.
                            </p>
                            <button className="mt-4 w-full rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/30 transition hover:-translate-y-0.5 hover:shadow-white/40">
                                Open Operations Room
                            </button>
                        </div>

                        <div className="mt-auto pt-8">
                            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_10px_25px_rgba(15,23,42,0.4)]">
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
                                        Operations Manager
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
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Sign out
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
                                            Lamaa Cleaning
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            Operations Panel
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
                                    <span>Search for a client or task...</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                                        Create Quote
                                    </button>
                                    <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:brightness-110">
                                        Add New Task
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
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                        >
                                            Sign out
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
                                    Dashboard
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    New Requests
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    Daily Schedule
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    Clients
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    Field Teams
                                </ResponsiveNavLink>
                                <ResponsiveNavLink href="#">
                                    Reports
                                </ResponsiveNavLink>
                                <details className="group rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white/80">
                                        <span>Settings</span>
                                        <svg
                                            className="h-4 w-4 text-white/60 transition group-open:rotate-180 group-open:text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="m7 10 5 5 5-5"
                                            />
                                        </svg>
                                    </summary>
                                    <div className="mt-3 space-y-1 border-l border-white/10 pl-3">
                                        <ResponsiveNavLink href={route('profile.edit')}>
                                            Update Profile
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href={route('profile.edit')}>
                                            Reset Password
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="#">
                                            Users
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink href="#">
                                            Language
                                        </ResponsiveNavLink>
                                    </div>
                                </details>
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
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route('logout')}
                                        as="button"
                                    >
                                        Sign out
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
