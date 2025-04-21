import { useEffect, useState } from "react";

export const useGetDecodedToken = () => {
    const [token, setToken] = useState(null);
    const rawToken = localStorage.getItem("token");
    const userId = token ? token.sub : null;
    const username = token ? token.user : null;
    useEffect(() => {
        const decodedToken = rawToken ? JSON.parse(atob(rawToken.split('.')[1])) : null;
        console.log("Decoded Token:", decodedToken);

        if (decodedToken) {
            setToken(decodedToken);
        } else {
            setToken(null);
        }
    }, [rawToken]);
    return { userId, token, username };
}

