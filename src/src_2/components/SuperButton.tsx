import {ButtonHTMLAttributes} from "react";
import s from './SuperButton.module.css'


// type SuperButtonProps = {
//     onClick: () => void
//     color: string
//     title?: string
//     children: React.ReactNode
// };


type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}



type SuperButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    backGround?: string
} & Omit<ColorsProps, 'color4' | 'color5'>  //добавляет ColorsProps в библиотеку атрибутов, удалив color4 и color5

export const SuperButton = (props: SuperButtonProps) => {
    const {onClick,
        color,
        title,
        className,
        children,
        disabled,
        ...restProps} = props;

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName = s.button + ' ' + s.red

    // const finalClassName = `
    // ${s.button}
    // ${color === 'red' ? s.red : s.secondary}
    // ${disabled ? s.disable : ''}
    // `

    const finalClassName = `
    ${s.button} 
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled ? s.disable : ''}
    `

    return (
        <button
            // style={finalClassName}
            //{...restProps}
            className={finalClassName}
        >
            {children}
        </button>
    );
};