import React from "react";
import style from "../../../styles/componentes/table/Table.module.scss";
import parseHTML from 'html-react-parser';

interface ITitle {
    caption: string;
}

interface IProps {
    titles: ITitle[];
    values: any
}

const Table = (props: IProps) => {
    const handleTitle = () => {
        let res = props.titles.map((title: ITitle) => {
            return <th>
                {title.caption}
            </th>
        })
        return <tr>{res}</tr>;
    }

    const handleBody = () => {
        let res = "";

        for (var i in props.values) {
            res += "<tr>";

            let obj = props.values[i];

            for (let k in obj) {
                res += '<td>' + obj[k] + '</td>'
            }

            res += "</tr>";
        }

        return parseHTML(String(res));
    }

    return (
        <>
            <table className={style.table}>
                <thead >
                    {handleTitle()}
                </thead>
                <tbody>
                    {handleBody()}
                </tbody>
            </table>
        </>
    )
}

export default Table;