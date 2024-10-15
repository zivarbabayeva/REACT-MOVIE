import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const params = useParams();
    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getShows() {
        try {
            const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
            if (!response.ok) {
                throw new Error('Show not found');
            }
            const data = await response.json();
            console.log(data);
            setShow(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getShows();
    }, [params.id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Movie Details</h1>
            {show && (
                <div className="border-[1px] border-yellow-300 rounded-lg p-2 flex flex-col items-center w-full text-cyan-950">
                    <img src={show.image?.medium} className="rounded-lg w-80 h-80" alt={show.name} />
                    <h1 className="items-center text-2xl">{show.name}</h1>
                    <h3 className="items-center text-center text-sky-900 p-3">{show.summary}</h3>
                    <div className="flex justify-center text-sm w-1/2 gap-3 text-amber-600">
                        <p>Rating: {show.rating?.average}</p>
                        <p>Genres: {show.genres.join(', ')}</p>
                        <p>Country: {show.network?.country?.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
