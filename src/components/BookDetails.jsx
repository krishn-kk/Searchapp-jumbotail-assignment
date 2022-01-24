import { Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { Card } from "@material-ui/core";
import Spineer from "../utilComponent/Spineer";

function BookDetails(props) {
    const bookId = useParams();
    const [bookDetails, setBookDetails] = useState([]);
    useEffect(() => {
        setBookDetails([]);
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${bookId.bookId}`)
            .then((res) => setBookDetails(res.data))
            .catch((err) => console.log("errr"));
    }, []);
    console.log(bookDetails, bookId);
    const { volumeInfo, saleInfo } = bookDetails;
    console.log(volumeInfo, saleInfo);
    if (bookDetails.length == 0) return <Spineer spinner />;
    return (
        <Grid container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                sm={12}
                lg={12}
            >
                <Grid item>
                    <h1>{volumeInfo?.title}</h1>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                // alignItems="start"
                item
                xs={12}
                sm={12}
                lg={12}
            >
                <Grid item>
                    <h4>{volumeInfo?.subtitle}</h4>
                </Grid>
            </Grid>

            <Grid
                item
                container
                xs={12}
                sm={4}
                lg={4}
                direction="column"
                style={{ marginTop: "1rem" }}
            >
                <Card
                    elevation={1}
                    style={{
                        // backgroundColor: "#C0D8C0",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item
                    >
                        <Grid item>
                            <Typography level="subtitle1" style={{color:'green',fontWeight:'800'}}>Sale Info</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-around"
                        alignItems="start"
                        style={{
                            // background: "red",
                            // width: "30vw",
                            height: "30vh",
                        }}
                        item
                    >
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Country:{" "}
                            </Grid>
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {" "}
                                {" " + saleInfo?.country}
                            </Grid>
                        </Grid>

                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Saleablity
                            </Grid>{" "}
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {saleInfo?.saleability}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Listed Price :{" "}
                            </Grid>
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {saleInfo?.listPrice
                                    ? `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`
                                    : "00"}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Retail Price :{" "}
                            </Grid>
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {saleInfo?.listPrice
                                    ? `${saleInfo.retailPrice.amount} ${saleInfo.retailPrice.currencyCode}`
                                    : "00"}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
                sm={4}
                lg={4}
                spacing={1}
                style={{ marginTop: "1rem" }}
            >
                <Card
                    elevation={1}
                    style={{
                        width: "95%",
                        height: "35vh",
                        backgroundColor: "#C0D8C0",
                    }}
                >
                    <Grid item>
                        <img
                            src={
                                volumeInfo?.imageLinks?.thumbnail ||
                                volumeInfo?.imageLinks?.small ||
                                volumeInfo?.imageLinks?.medium ||
                                volumeInfo?.imageLinks?.large
                            }
                            style={{
                                width: "90%",
                                height: "35vh",
                                marginLeft: "5%",
                                marginRight: "5%",
                            }}
                        />
                    </Grid>
                </Card>
            </Grid>
            <Grid
                item
                container
                xs={12}
                sm={4}
                lg={4}
                direction="column"
                // style={{ background: "red" }}
                style={{ marginTop: "1rem" }}
            >
                <Card
                    elevation={1}
                    style={{
                        // backgroundColor: "#C0D8C0",
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item
                    >
                        <Grid item >
                            <Typography level="subtitle1" style={{color:'green',fontWeight:'800'}}>
                                Publication Details
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        justifyContent="space-around"
                        alignItems="start"
                        style={{
                            // background: "red",
                            // width: "30vw",
                            height: "30vh",
                        }}
                        item
                    >
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Authors:{" "}
                            </Grid>
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {" "}
                                {volumeInfo?.authors?.map((res) => res + " ").toString().substring(0,30)+"..."}
                            </Grid>
                        </Grid>

                        {/* <br/> */}
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                publisher
                            </Grid>{" "}
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {volumeInfo?.publisher?.substring(0, 10) +
                                    "..."}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Category
                            </Grid>
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {volumeInfo?.categories &&
                                    volumeInfo?.categories[0]?.substring(
                                        0,
                                        10
                                    ) + "..."}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            item
                        >
                            <Grid item style={{ marginLeft: "1rem" }}>
                                Published Date
                            </Grid>
                            <Grid
                                item
                                style={{ marginRight: "1rem", fontWeight: 800 }}
                            >
                                {volumeInfo?.publishedDate}
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} style={{ marginTop: "10vh" }}>
                <p style={{ fontWeight: "600", lineHeight: "1.6rem" }}>
                    {HTMLReactParser(
                        volumeInfo?.description ||
                            volumeInfo?.subtitle ||
                            "Nothing"
                    )}
                </p>
            </Grid>
            <Grid>
                <Grid></Grid>
            </Grid>
        </Grid>
    );
}

export default BookDetails;
