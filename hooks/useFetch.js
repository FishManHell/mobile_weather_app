import {useEffect, useState} from "react";

export default function useFetch(endpoint, init) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(endpoint, init)
            const parsedData = await response.json();
            setData(parsedData)
        } catch (error) {
            setError(error);
            throw new Error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint])

    return {loading, error, data}
}