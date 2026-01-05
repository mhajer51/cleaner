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
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ` +
                (active
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900') +
                ` ${className}`
            }
        >
            {children}
        </Link>
    );
}
