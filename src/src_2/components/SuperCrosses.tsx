import * as React from "react";

type Props = {
    crosses: Cross[]
    children: React.ReactNode
};

type Cross = {
    id: number
    model: string
    size: string
}
export const SuperCrosses = ({crosses, children}: Props) => {
    return (
        <div>
            <ul>
                {crosses.map((cross, index) => {
                    return (
                        <li key={index}>
                            <div>{cross.id}</div>
                            <div>{cross.size}</div>
                            <div>{cross.model}</div>

                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};