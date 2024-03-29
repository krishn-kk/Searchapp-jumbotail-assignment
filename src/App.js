import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import BookCard from "./components/BookCard";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <BookCard />
                    </Route>
                    <Route exact path="/:bookId">
                        <BookDetails />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>
    );
}

export default App;
