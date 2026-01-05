import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`flex w-full items-start rounded-2xl border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-fuchsia-400 bg-white/10 text-white shadow-[0_10px_24px_rgba(15,23,42,0.4)] focus:border-indigo-200'
                    : 'border-transparent text-white/70 hover:border-white/40 hover:bg-white/5 hover:text-white focus:border-white/60 focus:bg-white/10 focus:text-white'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
