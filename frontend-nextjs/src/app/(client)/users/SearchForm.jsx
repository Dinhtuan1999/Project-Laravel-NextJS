"use client";
export default function SearchForm({ handleSearch }) {

    return (
        <div>
            <input
                type="search"
                className="form-control mb-3"
                placeholder="Tu khoa ..."
                onChange={handleSearch }
            />
        </div>
    );
}
