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
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center gap-8">
                            <div className="flex shrink-0 items-center gap-3">
                                <Link
                                    href="/"
                                    className="flex items-center gap-3"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
                                        <ApplicationLogo className="h-6 w-6 fill-current text-white" />
                                    </div>
                                    <div className="hidden text-sm font-semibold uppercase tracking-[0.2em] text-white/80 sm:block">
                                        Aurora
                                    </div>
                                </Link>
                            </div>

                            <div className="hidden items-center gap-6 lg:flex">
                                <NavLink
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Overview
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Analytics
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Team
                                </NavLink>
                                <NavLink href="#" active={false}>
                                    Projects
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden items-center gap-4 lg:flex">
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
                                <span>Search insights...</span>
                            </div>

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

                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm text-white/80 transition hover:text-white">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-700 text-xs font-semibold uppercase text-white">
                                                {user.name
                                                    .split(' ')
                                                    .map((part) => part[0])
                                                    .join('')}
                                            </span>
                                            <span className="hidden px-3 text-left sm:block">
                                                <span className="block text-xs text-white/50">
                                                    Welcome back
                                                </span>
                                                <span className="block text-sm font-semibold">
                                                    {user.name}
                                                </span>
                                            </span>
                                            <svg
                                                className="me-1 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
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
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center lg:hidden">
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
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' border-t border-white/10 bg-slate-900/80 backdrop-blur sm:hidden'
                    }
                >
                    <div className="space-y-1 px-4 pb-3 pt-4">
                        <ResponsiveNavLink
                            href={route('dashboard')}
                            active={route().current('dashboard')}
                        >
                            Overview
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#">
                            Analytics
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#">
                            Team
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href="#">
                            Projects
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
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
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
    );
}
