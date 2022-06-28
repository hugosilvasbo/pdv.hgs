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
    const prepareTitle = () => {
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

    const prepareContent = () => {
        return props.data.map((data: any) => {
            return <tr onClick={() => onClickTable(data)}>
                {
                    _.map(data, (d: any) => {
                        return <td>{d}</td>
                    })
                }
            </tr>
        });
    }

    return (
        <>
            <table className={style.table}>
                <thead >
                    {prepareTitle()}
                </thead>
                <tbody>
                    {prepareContent()}
                </tbody>
            </table>
        </>
    )
}

export default Table;