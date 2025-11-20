import { memo } from "react";

const Badge = memo(() => {
    return(
        <div>
            <span className="bg-red-800 text-fg-danger-strong text-xs font-medium px-1.5 py-0.5 rounded">Over Budget</span>
        </div>
    )
});

export default Badge;