import React from "react";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import FilledInput from "@material-ui/core/FilledInput";
import style from "./file.css";
import _ from "lodash";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Resultado from "./Resultado.jsx";
import { subirData } from "../../../actions/uploadAction.js";
class ShowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      mapitaII: new Map(),
      links: new Map(),
      mapitaPR: new Map(),
      resultados: new Map(),
      mapRes: {},
    };
  }

  isLetter(char) {
    var l = char.charCodeAt(0);
    return (
      (l >= 48 && l <= 57) || (l >= 65 && l <= 90) || (l >= 97 && l <= 122)
    );
    // return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
  }
  printFileContentsII = (contents) => {
    let lines = contents.split(/\n/);
    let mapita = new Map();
    lines.forEach((line) => {
      var arrayDeCadenas = line.split(" ");
      let primero = arrayDeCadenas[0];
      var segundo = arrayDeCadenas[1];
      if (this.isLetter(segundo[segundo.length - 1])) {
        var a = segundo.split(",");
        mapita.set(primero, a);
      } else {
        var res = segundo.substr(0, segundo.length - 1);
        var a = res.split(",");
        mapita.set(primero, a);
      }
    });
    this.setState({
      mapitaII: mapita,
    });
  };
  handleFileII = (event) => {
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = () => {
      this.printFileContentsII(reader.result);
    };
    reader.readAsText(file);
    this.setState({
      [event.target.name]: event.target.files[0],
    });
  };
  printFileContentsPR = (contents) => {
    let lines = contents.split(/\n/);
    let mapita = new Map();
    lines.forEach((line) => {
      var arrayDeCadenas = line.split(" ");
      let primero = arrayDeCadenas[0];
      var segundo = arrayDeCadenas[1];
      console.log("primero", primero)
      console.log("segundo", segundo)
      mapita.set(primero, parseFloat(segundo));
    });
    this.setState({
      mapitaPR: mapita,
    });
  };
  handleFilePR = (event) => {
    console.log("pageRank")
    var file = event.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = () => {
      this.printFileContentsPR(reader.result);
    };
    reader.readAsText(file);
    this.setState({
      [event.target.name]: event.target.files[0],
    });
  };

  enviar = (e) => {
    e.preventDefault();
    // console.log("this.state.mapitaII", this.state.mapitaII)

    let palabras = this.state.texto.split(" ");
    let todos = [];
    for (let i = 0; i < palabras.length; i++) {
      let vec = this.state.mapitaII.get(palabras[i]);
      console.log("--vec", vec);
      if (vec != undefined) {
        for (var k = 0; k < vec.length; k++) {
          todos.push(vec[k]);
        }
      }
    }
    let m = new Map();
    // console.log("todos", todos);
    // const ma = this.state.mapitaPR;
    // // console.log("mapita", ma)
    todos.map((item) => {
      if (m.get(item) === undefined) {
        m.set(item, this.state.mapitaPR.get(item));
      } else {
        let val = m.get(item);
        m.delete(item);
        m.set(item, val + this.state.mapitaPR.get(item));
      }
    });
    // For keys, we don't need an equals case, because identical keys overwrite
    const sortStringKeys = (a, b) => (a[0] > b[0] ? 1 : -1);

    // For values, we do need an equals case
    const sortStringValues = (a, b) =>
      (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1);

    // console.log("By keys:", new Map([...m].sort(sortStringKeys)));
    // console.log("By values:", new Map([...m].sort(sortStringValues)));
    let data = new Map([...m].sort(sortStringValues));
    //     console.log("reeee", ...re);
    //     const entries = Object.entries(re);
    // var array = [ ...data.keys() ];
    var array = {};
    // console.log("array keys",  [ ...data.keys() ]);
    // console.log("array values",  [ ...data.values() ]);
    // console.log("array entries",  [ ...data.entries() ]);
    _.map([...data.entries()], (entity, key) => {
      console.log("entity", entity);
      console.log("key", key);
      // console.log("v",v)
      var k = entity[0];
      var v = entity[1];
      array[k] = v;
    });
    this.setState({
      resultados: new Map([...m].sort(sortStringValues)),
      mapRes: array,
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  subirII=(e)=>{
    e.preventDefault()
    this.subirData(this.state.links,"links");
  }
  render() {
    console.log("mapRes", this.state.mapRes);
    console.log("mapitaII", this.state.mapitaII);
    console.log("mapitaPR", this.state.mapitaRR);
    // Object.fromEntries ✅
    const obj = Object.fromEntries(this.state.mapitaII);

    console.log(`\nobj`, obj);
    const { classes } = this.props;
    let lista = this.state.resultados;
    return (
      <div className={classes.sections}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h2>Subir Data</h2>
          </div>

          <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
              <label className="fileContainer">
                Subir Indice Invertido...
                <input
                  type="file"
                  name="fileII"
                  onChange={this.handleFileII}
                  style={{ color: "#9c27b0" }}
                />
              </label>
            </GridItem>
            {/* <GridItem xs={12} sm={6} md={6}>
              <Button onClick={e =>this.subirII(e)}>
                Subir
              </Button>
            </GridItem> */}
            <GridItem xs={12} sm={6} md={6}>
              <label className="fileContainer">
                Subir Doc. PageRank...
                <input
                  type="file"
                  name="filePR"
                  onChange={this.handleFilePR}
                  style={{ color: "#9c27b0" }}
                />
              </label>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <label className="fileContainer">
                Subir urls...
                <input
                  type="file"
                  name="url"
                  onChange={this.handleFileII}
                  style={{ color: "#9c27b0" }}
                />
              </label>
            </GridItem>
           
           
          </GridContainer>
        </div>
      </div>
    );
  }
}
// export default ShowList;
export default withStyles(styles)(ShowList);
