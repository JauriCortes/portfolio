import type { ElementType } from "react"
import "./Icon.css"

function Icon({ label, icon: IconComponent }: {label: string, icon: ElementType}) {

    return (
        <div className="icon-unit">
            <IconComponent size={24}/>
            <p>{ label }</p>
        </div>
    )

}

export default Icon