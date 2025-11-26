import type { ReactNode } from 'react'

type CodeBlockProps = {
    lines: ReactNode[]
    caption?: string
}

export default function CodeBlock({ lines, caption }: CodeBlockProps) {
    return (
        <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg shadow-slate-900/40">
            <div className="space-y-1">
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className="text-xs font-mono text-slate-200 leading-[1.5] whitespace-pre-wrap break-words"
                    >
                        {line}
                    </div>
                ))}
            </div>
            {caption && <p className="text-xs text-slate-400">{caption}</p>}
        </div>
    )
}

