import React from "react";
import { Grid } from "@material-ui/core";
import DisplayCard from "../utilComponent/DisplayCard";
import { Link } from "react-router-dom";
function BookCard(props) {
    const { book } = props;
    return (
        <Grid container spacing={1}>
            {book?.map((book) => {
                return (
                    <Grid
                        item
                        lg={4}
                        sm={6}
                        xs={12}
                        style={{
                            height: "35vh",
                            marginBottom: "0.4rem",
                        }}
                    >
                        <Link
                            key={book.id}
                            to={`/${book.id}`}
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            <DisplayCard
                                bookDetails={book.volumeInfo}
                                saleInfo={book.saleInfo}
                            />
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default BookCard;
