import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: "1rem",
        minWidth: 120,
    },
}));

export default function Menu(props) {
    const classes = useStyles();
    const [option, setOption] = React.useState("intitle");
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setOption(event.target.value);
        props.setOptionSearch(option);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    console.log(option);
    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={option}
                    onChange={handleChange}
                >

                    {props.menu.map((res, index) => {
                        return <MenuItem key={index} value={res[0]} >
                            {res[1]}
                        </MenuItem>;
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
