import {useEffect, useRef, useState} from "react";

export default function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const timestampRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const timestamp = Date.now();
            timestampRef.current = timestamp;
            setLoading(true);
            try {
                setError(null);
                const response = await fetch(url);
                const data = await response.json();

                if (timestampRef.current === timestamp) {
                    setData(data);
                }
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [{data, loading, error}];
}
