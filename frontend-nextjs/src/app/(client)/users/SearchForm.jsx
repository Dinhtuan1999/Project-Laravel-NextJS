"use client";

import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function SearchForm() {
    console.log(process.env.SERVER_API)

    const handleSearch = (e) => {
        const keyword = e.target.value;
    }

    return (
        <div>
            <input
                type="search"
                className="form-control mb-3"
                placeholder="Tu khoa ..."
                onChange={handleSearch}
            />
        </div>
    )
}

