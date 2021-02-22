import React, { Component } from 'react'

export default class MemeItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { id, name, url } = this.props.meme;
        return (
          <table className="table" key={id} style={{ textAlign: "left" }}>
            <tbody>
              <tr>
                <td>
                  <img src={url} width="200" height="200"/>
                </td>
                <td>
                  <strong style={{textAlign:"center"}}>{name}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        );
    }
}
