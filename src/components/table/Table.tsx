import _ from "lodash";
import style from "../../../styles/componentes/table/Table.module.scss";

interface ITitle {
    caption: string;
}

interface IProps {
    titles: ITitle[];
    data: any;
    callbackSelectedData?: any;
}

const Table = (props: IProps) => {
    const thead = () => {
        return props.titles.map((title: ITitle) => {
            return <th>
                {title.caption}
            </th>
        });
    };

    const onClickTable = (data: any) => {
        if (props.callbackSelectedData) {
            props.callbackSelectedData(data);
            return;
        }

        console.log("props.selectedData não existe em Table.tsx.");
    }

    return (
        <>
            <table className={style.table}>
                <thead >
                    {thead()}
                </thead>
                <tbody>
                    {props.data.map((data: any, key: string) => (
                        <tr key={key} onClick={() => onClickTable(data)}>
                            {_.map((_.mapValues(data, (dt: any) => <td>{dt}</td>)), (td_: any) => { return td_ })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;