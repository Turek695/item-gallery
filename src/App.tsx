import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { GalleryItem } from "./types/gallery.ts";

function App() {

    const [gallery, setGallery] = useState<GalleryItem[]>([]);

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

    const listItems = gallery.map((item: GalleryItem) => <li key={item.id}>{item.name}</li>);

    return (
        <>
            <h1 data-testid="page_title">Galeria</h1>
            <ul>{listItems}</ul>
        </>
    );
}

export default App;
