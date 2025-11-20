import { memo } from "react";

type ProgressProp = {
    spent:Number;
    limit:Number;
}

const ProgressBar =  memo(( { spent, limit } : ProgressProp) => {
    const pct = limit === 0 ? 0 : Math.min(100, Math.round((Number(spent) / Number(limit) ) * 100));
    return(
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
                className={`h-full rounded-full transition-all duration-300 ${pct >= 100 ? "bg-red-500" : "bg-indigo-500"}`}
                style={{ width: `${pct}%` }}
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
            />
        </div>
    )
});

export default ProgressBar;