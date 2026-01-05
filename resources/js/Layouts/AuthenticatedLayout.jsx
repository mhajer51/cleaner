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
        <div className="min-h-screen bg-slate-100 text-slate-900" dir="ltr">
            <div className="lg:flex">
                <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white lg:shadow-sm">
                    <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 shadow-sm">
                                <ApplicationLogo className="h-6 w-6 fill-current text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Admin Panel
                                </p>
                                <p className="text-lg font-semibold text-slate-900">
                                    Lamaa Cleaning
                                </p>
                            </div>
                        </Link>

                        <div className="mt-8 space-y-5">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    Main
                                </p>
                                <div className="mt-3 space-y-1">
                                    <NavLink
                                        href={route('dashboard')}
                                        active={route().current('dashboard')}
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink
                                        href={route('admin.slider.index')}
                                        active={route().current('admin.slider.*')}
                                    >
                                        Slider Manager
                                    </NavLink>
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button
                                                type="button"
                                                className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
                                            >
                                                <span>Settings</span>
                                                <svg
                                                    className="h-4 w-4 text-slate-400 transition group-hover:text-slate-600"
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
                                            contentClasses="py-3 bg-white border border-slate-200"
                                        >
                                            <div className="px-4 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                                Account & Admin
                                            </div>
                                            <Dropdown.Link
                                                href={route('profile.edit')}
                                                className="flex items-center gap-3"
                                            >
                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
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
                                                    <span className="block text-sm font-semibold text-slate-800">
                                                        Update Profile
                                                    </span>
                                                    <span className="block text-xs text-slate-500">
                                                        Edit your personal details
                                                    </span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href="#"
                                                className="flex items-center gap-3"
                                            >
                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
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
                                                    <span className="block text-sm font-semibold text-slate-800">
                                                        Users
                                                    </span>
                                                    <span className="block text-xs text-slate-500">
                                                        Manage team permissions
                                                    </span>
                                                </span>
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href="#"
                                                className="flex items-center gap-3"
                                            >
                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
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
                                                    <span className="block text-sm font-semibold text-slate-800">
                                                        Language
                                                    </span>
                                                    <span className="block text-xs text-slate-500">
                                                        Choose app locale
                                                    </span>
                                                </span>
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>



                        <div className="mt-auto pt-6">
                            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold uppercase text-white">
                                    {user.name
                                        .split(' ')
                                        .map((part) => part[0])
                                        .join('')}
                                </span>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-slate-900">
                                        {user.name}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Operations Manager
                                    </p>
                                </div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:text-slate-700">
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
                                        <Dropdown.Link href={route('profile.edit')}>
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
                    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
                        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3 lg:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white p-2 text-slate-500 transition hover:text-slate-700"
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
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600">
                                        <ApplicationLogo className="h-5 w-5 fill-current text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            Lamaa Cleaning
                                        </p>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Admin Panel
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            <div className="hidden flex-1 items-center justify-between gap-6 lg:flex">
                                <div className="flex items-center gap-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-1 text-sm text-slate-600 transition hover:text-slate-800">
                                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold uppercase text-white">
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

                            <div className="flex items-center gap-3 lg:hidden">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-1 text-sm text-slate-600 transition hover:text-slate-800">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold uppercase text-white">
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
                                ' border-t border-slate-200 bg-white lg:hidden'
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
                                <details className="group rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                                    <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-600">
                                        <span>Settings</span>
                                        <svg
                                            className="h-4 w-4 text-slate-400 transition group-open:rotate-180 group-open:text-slate-600"
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
                                    <div className="mt-3 space-y-1 border-l border-slate-200 pl-3">
                                        <ResponsiveNavLink
                                            href={route('profile.edit')}
                                        >
                                            Update Profile
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            href={route('profile.edit')}
                                        >
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

                            <div className="border-t border-slate-200 pb-4 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-slate-900">
                                        {user.name}
                                    </div>
                                    <div className="text-sm font-medium text-slate-500">
                                        {user.email}
                                    </div>
                                </div>

                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink
                                        href={route('profile.edit')}
                                    >
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
                        <header className="bg-slate-100">
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
