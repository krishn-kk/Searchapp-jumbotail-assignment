/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles({
    option: {
        fontSize: 15,
        "& > span": {
            marginRight: 10,
            fontSize: 18,
        },
    },
    root: {
        display: "flex",
        justifyContent: "center",
        marginTop: "2vh",
    },
});

export default function SearchBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState("");
    if (!props.options || !props.setSearchedValue) return "...";
    console.log("value",value);
    return (
        <Autocomplete
            className={classes.root}
            style={{ width: 250 }}
            options={props.options}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option}
            renderOption={(option) => (
                <React.Fragment>
                    <span>{option}</span>
                </React.Fragment>
            )}
            getOptionSelected={(option, value) => option === value}
            onChange={(event, newValue) => {
                console.log(event.target.value);
                setValue(newValue);
                props.setSearchedValue(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search "
                    variant="outlined"
                    onChange={(event)=>props.setSearchedValue(event.target.value)}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}
