import React from 'react';

const Check: React.FC = () => <span className="text-green-500 font-bold">✔︎</span>;
const Cross: React.FC = () => <span className="text-red-500">✖︎</span>;
const Triangle: React.FC = () => <span className="text-yellow-500">△</span>;

interface ComparisonCellProps {
    type: 'check' | 'cross' | 'triangle';
    label?: string;
}

const ComparisonCell: React.FC<ComparisonCellProps> = ({ type, label }) => (
    <td className="p-4 text-center">
        <div className="flex flex-col items-center justify-center">
            {type === 'check' && <Check />}
            {type === 'cross' && <Cross />}
            {type === 'triangle' && <Triangle />}
            {label && <span className="text-xs text-slate-500 mt-1 block">{label}</span>}
        </div>
    </td>
);

// FIX: Define explicit types for the table rows to prevent TypeScript from widening the 'type' property to a generic string.
interface ComparisonValue {
    type: 'check' | 'cross' | 'triangle';
    label?: string;
}

interface ComparisonRow {
    capability: string;
    values: ComparisonValue[];
}


export const ComparisonTable: React.FC = () => {
    const headers = ["Slides / BI", "Project Mgmt", "Prompted Chatbot", "Strategy Co-Pilot"];
    const rows: ComparisonRow[] = [
        {
            capability: "Adapts as data changes",
            values: [
                { type: 'cross' },
                { type: 'triangle', label: '(manual)' },
                { type: 'triangle' },
                { type: 'check', label: '(regenerative)' }
            ]
        },
        {
            capability: "Evidence-grounded answers",
            values: [
                { type: 'cross' },
                { type: 'cross' },
                { type: 'triangle', label: '(may hallucinate)' },
                { type: 'check', label: '(citations, no guess)' }
            ]
        },
        {
            capability: "Links strategy to execution",
            values: [
                { type: 'cross' },
                { type: 'triangle' },
                { type: 'cross' },
                { type: 'check', label: '(owners, budget, timeline)' }
            ]
        },
        {
            capability: "Enterprise auth & security",
            values: [
                { type: 'triangle' },
                { type: 'triangle' },
                { type: 'cross', label: '/ unknown' },
                { type: 'check', label: '(SSO, MFA, controls)' }
            ]
        },
        {
            capability: "Scales with datasets",
            values: [
                { type: 'triangle' },
                { type: 'triangle' },
                { type: 'triangle' },
                { type: 'check', label: '(scalable architecture)' }
            ]
        }
    ];

    return (
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
            <table className="w-full min-w-[700px] border-collapse text-sm">
                <thead>
                    <tr className="border-b border-slate-200">
                        <th className="p-4 text-left font-semibold text-slate-900">Capability</th>
                        {headers.map((header) => (
                             <th key={header} className={`p-4 text-center font-semibold ${header === "Strategy Co-Pilot" ? 'text-emerald-600' : 'text-slate-900'}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {rows.map((row) => (
                        <tr key={row.capability}>
                            <td className="p-4 text-left font-medium text-slate-700">{row.capability}</td>
                            {row.values.map((cell, index) => (
                                <ComparisonCell key={index} type={cell.type} label={cell.label} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};