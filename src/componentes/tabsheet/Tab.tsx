import React from "react";

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
      return <button onClick={this.clickTab} id={it.id}>
        {it.caption}
      </button>
    });

    return tabs;
  }

  makeContent = () => {
    let content = this.props.tabs.map((it: ITab) => {
      return <div id={it.id} className={this.state.current_id === it.id ? "d-block" : "d-none"}>
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
        <div className="bg-success p-2">
          {
            this.makeTabs()
          }
        </div>
        <div className="p-2">
          {
            this.makeContent()
          }
        </div>
      </>
    )
  }
}
