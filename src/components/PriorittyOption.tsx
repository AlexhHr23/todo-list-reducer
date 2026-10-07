

import { FlagIcon } from "@heroicons/react/24/outline"

type PriorittyOptionProps = {
    color: string,
    label: string
}

export const PriorittyOption = ({ color, label }: PriorittyOptionProps) => {
    return (
        <div className={`flex gap-1 items-center p-1 bg-${color}-200 rounded-lg`}>
            <FlagIcon className="h-5 w-5" />
            <p className="text-base font-medium">
                {label}
            </p>
        </div>
    )
}
