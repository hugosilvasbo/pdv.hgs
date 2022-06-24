import React from "react";
import style from "../../../styles/componentes/tabsheet/Tab.module.scss";

interface ITab {
  id: string,
  caption: string,
  content: any
}

interface IProps {
  id_tab_default: string,
  tabs: ITab[]
}

export default class Tab extends React.Component<IProps, {}> {
  state = {
    current_id: ""
  }

  makeTabs = () => {
    let tabs = this.props.tabs.map((it: ITab) => {
      return <button className={this.state.current_id === it.id ? style.btn_tab_clicked : style.btn_tab} onClick={this.clickTab} id={it.id}>
        {it.caption}
      </button>
    });

    return tabs;
  }

  makeContent = () => {
    let content = this.props.tabs.map((it: ITab) => {
      return <div id={it.id} className={(this.state.current_id === it.id ? "h-100 w-100 d-block" : "h-100 w-100 d-none")}>
        {it.content}
      </div>
    })

    return content;
  }

  clickTab = (e: any) => {
    this.setState({ current_id: e.target.id })
  }

  componentDidMount = () => {
    this.setState({ current_id: this.props.id_tab_default });
  }

  render() {
    return (
      <>
        <div className={style.box_tab}>
          {
            this.makeTabs()
          }
        </div>
        <div className={style.content}>
          {
            this.makeContent()
          }
        </div>
      </>
    )
  }
}
