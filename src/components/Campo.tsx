import styles from './campo.module.css'
import React from "react";

interface ICampo {
    title: string,
    name: string,
    type?: string
}

export default class Campo extends React.Component<ICampo, {}> {
    render() {
        return (
            <>
                <h4>{this.props.title}</h4>
                <input type={this.props.type} name={this.props.name} />
            </>
        )
    }
}