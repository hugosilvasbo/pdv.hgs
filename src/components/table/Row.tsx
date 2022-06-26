import React from "react";

interface IProps {
    element: any[]
}

const Row = (props: IProps) => {

    const buildData = () => {
        let res = props.element.map((e: any) => {
            return <td>{e}</td>
        });
        return res;
    }

    return (
        <React.Fragment>
            {buildData()}
        </React.Fragment>
    )
}

export default Row;