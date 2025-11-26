type ComparisonCardProps = {
    title: string
    subtitle: string
    icon: string
    accent: 'green' | 'red'
    points: string[]
}

const accentStyles = {
    green: 'border-green-200 bg-green-50 text-green-800',
    red: 'border-red-200 bg-red-50 text-red-800',
} as const

export default function ComparisonCard({
    title,
    subtitle,
    icon,
    accent,
    points,
}: ComparisonCardProps) {
    return (
        <div
            className={`rounded-2xl border p-6 shadow-sm ${accentStyles[accent]} shadow-slate-400/40`}
        >
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <span>{icon}</span> {title}
            </h3>
            <p className="text-sm font-semibold mb-4">{subtitle}</p>
            <ul className="space-y-3 text-sm text-slate-700">
                {points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-700" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

