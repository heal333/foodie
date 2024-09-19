import { useState } from "react";

const useGetTotalPages = async (veg = 0) => {
    const [pages, setPages] = useState(0);
    const response = await fetch(`${API}/totalpage?veg${veg}`);
    const result = await response.json();
    setPages(result);
    return pages;
};

export default useGetTotalPages;
