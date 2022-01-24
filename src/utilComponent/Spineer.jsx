import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Grid } from "@material-ui/core";

function Spineer(props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={12}
            sm={12}
            lg={12}
        >
            <Grid item style={{ marginTop: "15vh", marginBottom: "15vh" }}>
                {props.spinner && <CircularProgress color="secondary" />}
            </Grid>
            <Grid item style={{ marginTop: "15vh", marginBottom: "15vh" }}>
                {props.textMessage && (
                    <div>Please Type Something To see the Result..</div>
                )}
            </Grid>
        </Grid>
    );
}

export default Spineer;
