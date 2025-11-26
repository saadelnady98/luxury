import { ButtonHTMLAttributes } from "react"

type SubButton_TP = ButtonHTMLAttributes<HTMLButtonElement>
const SubButton = ({ ...props }: SubButton_TP) => {
    return (
        <button {...props} className={`${props.className} bg-mainColor lg:px-[60px] py-[13px] font-[500] text-[21px]`}>
            {props.children}
        </button>
    )
}

export default SubButton
