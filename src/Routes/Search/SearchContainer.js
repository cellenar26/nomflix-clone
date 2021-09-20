import { useState } from 'react'
import SearchPresenter from './SearchPresenter'

const SearchContainer = () => {
    const [movieResults, setMovieResults] = useState(null)
    const [tvResults, setResults] = useState(null)
    const [searchTerm, setSearchTerm] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} loading={loading} error={error} />
    )

}

export default SearchContainer