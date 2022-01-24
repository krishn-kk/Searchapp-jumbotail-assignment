import React from "react";
import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useEffect } from "react";
import axios from "axios";
import "./Header.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "../utilComponent/Menu";
import BookCard from "./BookCard";
import Spineer from "../utilComponent/Spineer";
// import { TextField } from "@material-ui/core";

function Header(props) {
    const [book, setBook] = useState([]);
    const [search, setSearch] = useState("");
    const [menuItem, setMenuItem] = useState("");
    const [option, setOption] = useState([]);
    const setSearchedValue = (value) => {
        console.log(value);
        setSearch(value);
    };
    const setOptionSearch = (value) => {
        setOption(value);
    };
    useEffect(() => {
        setBook([]);
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${search}+${menuItem}`
            )
            .then((res) => {
                setBook(res.data.items);
            });
    }, [search, option]);
    console.log(book);
    const menu = [
        ["intitle", "Title"],
        ["inauthor", "Author"],
        ["inpublisher", "Publisher"],
        ["subject", "Subject"],
        ["isbn", "Isbn"],
        ["lccn", "Iccn"],
        ["oclc", "Oclc"],
    ];
    console.log(search);
    return (
        <>
            <Grid container direction="row" justifyContent="center">
                <Grid
                    item
                    lg={3}
                    sm={12}
                    xs={12}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>
                        <h1
                            style={{
                                color: "green",
                                // backgroundColor: "#C0D8C0",
                                fontWeight:'lighter',
                                margin: "0.5rem",
                                paddingLeft: "0.5rem",
                                paddingRight: "0.5rem",
                                borderRadius: "1rem",
                            }}
                        >
                            JumboTail
                        </h1>
                    </div>
                </Grid>
                <Grid
                    item
                    lg={6}
                    sm={6}
                    xs={6}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div className="search-crypto">
                        <TextField
                            value={search}
                            placeholder="Search"
                            onChange={(e) => {
                                let value = e.target.value;
                                setSearch(value);
                            }}
                            className="search"
                            autoFocus
                            // fullWidth
                            type="search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </Grid>
                <Grid
                    item
                    lg={3}
                    sm={6}
                    xs={6}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Menu setOptionSearch={setOptionSearch} menu={menu} />
                </Grid>
            </Grid>
            {search && <BookCard book={book} />}
            {(!search && <Spineer textMessage />) ||
                (book.length == 0 && <Spineer spinner />)}
        </>
    );
}

export default Header;
