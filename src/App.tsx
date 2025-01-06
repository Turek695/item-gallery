import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    interface Item {
        name: string;
        category: string;
        picture_id: number;
    }

    const [gallery, setGallery] = useState<Item[]>([]);

    useEffect(() => {
        axios
            .get("https://galeria.lukaszturowski.xyz/api/getGallery.php")
            .then((response) => setGallery(response.data))
            .catch((error) => console.error("Error fetching gallery:", error));
    }, []);

    const listItems = gallery.map((item: Item) => <li>{item.name}</li>);

    return (
        <>
            <h1>Galeria</h1>
            <ul>{listItems}</ul>
        </>
    );
}

export default App;
