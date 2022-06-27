import style from "../../../styles/componentes/table/Table.module.scss";
import _, { mapValues } from "lodash"
import React from "react";

interface ITitle {
    caption: string;
}

interface IProps {
    titles: ITitle[];
    data: any;
}

const Table = (props: IProps) => {
    const thead = () => {
        return props.titles.map((title: ITitle) => {
            return <th>
                {title.caption}
            </th>
        });
    };

    return (
        <>
            <table className={style.table}>
                <thead >
                    {thead()}
                </thead>
                <tbody>
                    {props.data.map((data: any, key: string) => (
                        <tr key={key}>
                            {_.map(_.mapValues(data, (dt: any) => <td>{dt}</td>), (td_: any) => { return td_ })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;