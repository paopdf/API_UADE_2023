import {
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
  },
  cardPlain: {
    
    boxShadow: "none",
    border: "0",
    marginBottom: "10px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.87)",
    background: "transparent",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: "2rem",
    
    marginTop: "100px",
    textAlign: "center",
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center",
    background:"#f4a261"
  },
  
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px",
    },
  },
};

export default cardStyle;
