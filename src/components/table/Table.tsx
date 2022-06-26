import style from "../../../styles/componentes/table/Table.module.scss";
import _ from "lodash"
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

    const tbody = () => {
        let res = props.data.map((data: any) => {
            return <tr>
                <React.Fragment>
                    {
                        _.forEach(data, (e: any) => {
                            return <td>{e}</td>
                        })
                    }
                </React.Fragment>
            </tr>;
        })

        return res;
    }

    return (
        <>
            <table className={style.table}>
                <thead >
                    {thead()}
                </thead>
                <tbody>
                    {tbody()}
                </tbody>
            </table>
        </>
    )
}

export default Table;