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
        const fetchGallery = async () => { 
            try {
                const res = await axios.get("https://galeria.lukaszturowski.xyz/api/getGallery.php");
                setGallery(res.data);
            } catch(error) {
                console.error("Error fetching gallery:", error)
            };
        }

        fetchGallery();
    }, []);

    const listItems = gallery.map((item: Item) => <li>{item.name}</li>);

    return (
        <>
            <h1 data-testid="page_title">Galeria</h1>
            <ul>{listItems}</ul>
        </>
    );
}

export default App;
