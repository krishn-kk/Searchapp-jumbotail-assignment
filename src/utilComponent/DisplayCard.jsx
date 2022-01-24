import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Divider } from "@material-ui/core";
import millify from "millify";

import LanguageIcon from "@mui/icons-material/Language";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GradeIcon from "@mui/icons-material/Grade";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "",
        height: "35vh",
        "&:hover": {
            transition: "ease-in-out 0.2s",
            border: "1px solid red",
            boxShadow: "1px grey",
        },
    },
    header: {
        display: "flex",
        alignItems: "center",
    },
    header_title: {
        fontWeight: "lighter",
        fontSize: "1.2rem",
        marginLeft: "0.4rem",
    },
});

export default function DisplayCard(props) {
    const classes = useStyles();

    const {
        title,
        subtitle,
        authors,
        publisher,
        publishedDate,
        pageCount,
        averageRating,
        imageLinks,
        description,
        language,
    } = props.bookDetails;

    console.log(authors);
    if (!props.bookDetails) return "...";
    const saleInfo = props.saleInfo?.listPrice?.amount;
    return (
        <Card className={classes.root} elevation={1}>
            <div
                style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                }}
            >
                <div className={classes.header}>
                    <span>
                        <img
                            style={{
                                width: "8rem",
                                height: "8rem",
                                marginLeft: "0.4rem",
                                borderRadius: "0.5rem",
                            }}
                            src={imageLinks?.thumbnail}
                        />
                    </span>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            marginLeft: "0.5rem",
                        }}
                    >
                        <span className={classes.header_title}>
                            <b>{title.trim()?.substring(0, 15) + "..."}</b>
                        </span>
                        <p style={{ marginLeft: "0.4rem", fontSize: "0.8rem" }}>
                            {description?.substring(0, 80) + "..." ||
                                subtitle?.substring(0, 80) + "...."}
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        // marginTop:'0.4rem'
                    }}
                >
                    <span
                        style={{ marginRight: "0.4rem", marginLeft: "0.4rem" }}
                    >
                        <AvatarGroup max={2}>
                            {authors?.map((res) => (
                                <Avatar alt={res}>
                                    {res.split(" ").map((res) => res[0])}
                                </Avatar>
                            ))}
                        </AvatarGroup>
                    </span>
                    {authors && (
                        <span
                            style={{
                                width: "0.1vw",
                                background: "red",
                                height: "7vh",
                            }}
                        />
                    )}
                    <span style={{ marginLeft: "0.4rem" }}>
                        {publishedDate}
                    </span>
                </div>
            </div>
            <Divider
                orientation="vertical"
                style={{ height: "31vh", marginTop: "2vh", marginBottom: "4vh" }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    alignContent: "center",
                    textAlign: "center",
                    width: "20%",
                    color: "grey",
                }}
            >
                <span style={{ display: "flex" }}>
                    <GradeIcon /> : {averageRating || "00"}
                </span>
                <span style={{ display: "flex" }}>
                    <LanguageIcon /> : {language || "en"}
                </span>
                <span style={{ display: "flex" }}>
                    <CurrencyRupeeIcon /> :{" "}
                    {(saleInfo && millify(Number(saleInfo))) || "00"}
                </span>

                <span style={{ display: "flex" }}>
                    <AutoStoriesIcon /> :{" "}
                    {(pageCount && millify(pageCount)) || "00"}
                </span>
            </div>
        </Card>
    );
}
