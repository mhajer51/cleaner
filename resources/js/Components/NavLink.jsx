import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "group relative flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-medium transition duration-150 ease-in-out before:absolute before:left-4 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-fuchsia-300 before:shadow-[0_0_12px_rgba(217,70,239,0.6)] before:content-[''] focus:outline-none " +
                (active
                    ? 'bg-white/10 text-white shadow-[0_12px_28px_rgba(15,23,42,0.45)] ring-1 ring-white/15 before:opacity-100'
                    : 'text-white/60 hover:bg-white/5 hover:text-white before:opacity-0 group-hover:before:opacity-60') +
                className
            }
        >
            {children}
        </Link>
    );
}
