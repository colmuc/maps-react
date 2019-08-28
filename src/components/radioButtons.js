import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  }
}));

const RadioButtons = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("circle");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Drawing Tools</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="tools"
          className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="circle" control={<Radio />} label="Circle" />
          <FormControlLabel
            value="polygon"
            control={<Radio />}
            label="Polygon"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioButtons;
