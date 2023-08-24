import { useState } from "react";
import { Message } from "./Message";
import { Product } from "./Product";
import "./App.css";

function App() {
    return (
        <>
            <section>
                <h2>Hook : useState</h2>
                <Message />
            </section>
            <section>
                <h2>Props</h2>
                <Product name="product 1" price={29.99} />
            </section>
        </>
    );
}

export default App;
