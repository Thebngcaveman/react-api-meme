import axios from "axios";
import React, { Component } from "react";
import MemeItem from "./MemeItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
  }

  search = () => {
    let dataArray = [];
    let url = "https://api.imgflip.com/get_memes";
    axios.get(url).then((result) => {
      result.data.data.memes.forEach((item) => {
        //console.log(JSON.stringify(item));
        dataArray.push(item);
      });
      dataArray: this.shuffleMeme(dataArray)
      this.setState({ rows: dataArray });
    });
  };

  shuffleMeme = (rows) => {
    let i = rows.length - 1;
    for(;i>0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = rows[i];
      rows[i] = rows[j];
      rows[j] = temp;
    }
    return rows;
  }

  render() {
    return (
      <div>
        <table className="NavBar">
          <tbody>
            <tr>
              <td>
                <img
                  src="https://media.tenor.com/images/e67977be0e7bf84cd9fa3567515fd9a2/tenor.gif"
                  width="50"
                />
              </td>
              <td>World Of Memes</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.search} type="button" class="btn btn-primary">
          Generate Random Memes
        </button>
        {this.state.rows.map((item) => (
          <MemeItem meme={item} />
        ))}
      </div>
    );
  }
}
