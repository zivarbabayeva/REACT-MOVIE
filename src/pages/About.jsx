import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function About() {
    const [shows, setShows] = useState([]);

    async function getShows() {
        try {
            const response = await fetch('https://api.tvmaze.com/shows');
            const data = await response.json();
            console.log(data);
            setShows(data);
        } catch (error) {
            console.error('Error fetching shows:', error);
        }
    }

    useEffect(() => {
        getShows();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-6 gap-5 place-content-center">
                {shows.length > 0 &&
                    shows.map((element) => (
                        <NavLink 
                            key={element.id} 
                            to={`${element.id}`} 
                            className="border-[1px] border-yellow-300 rounded-lg p-2 flex flex-col items-center"
                        >
                            <img src={element.image?.medium} className="rounded-lg w-50 h-40" alt={element.name} />
                            <h1 className="text-center text-sky-700">{element.name}</h1>
                            <h3 className="text-center text-sky-500">{element.summary?.slice(0, 100)}...</h3>
                            <div className="text-sm">
                                <p>Rating: {element.rating?.average}</p>
                                <p>Genres: {element.genres.join(', ')}</p>
                                <p>Country: {element.network?.country?.name}</p>
                            </div>
                        </NavLink>
                    ))}
            </div>
        </div>
    );
}
