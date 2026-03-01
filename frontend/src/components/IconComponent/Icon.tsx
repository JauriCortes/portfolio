import type { ElementType } from "react"

function Icon({ label, icon: IconComponent }: {label: string, icon: ElementType}) {

    return (
        <div>
            <IconComponent size={24}/>
            <p>{ label }</p>
        </div>
    )

}

export default Icon