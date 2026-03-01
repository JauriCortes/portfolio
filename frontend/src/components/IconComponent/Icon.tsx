import type { ElementType } from "react"
import "./Icon.css"

type IconProps = {
  label: string;
  icon: ElementType;
  onClick?: () => void;
};

function Icon({ label, icon: IconComponent, onClick }: IconProps) {

    return (
        <div className="icon-unit" onClick={onClick}>
            <IconComponent size={24}/>
            <p>{ label }</p>
        </div>
    )

}

export default Icon