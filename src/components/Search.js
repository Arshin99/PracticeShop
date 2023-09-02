'use client'
import {useState,useCallback,useMemo} from 'react'
import {searchByName} from '@/utils/searchByName'
import Image from 'next/Image'
import Link from 'next/Link'

const Search = () => {

    const [search, setSearch] = useState('')

    const RESULTS = useMemo(() => searchByName(search), [search]);

    const handleChange = useCallback(
        (e) => {
            setSearch(e.target.value)
        },
        [],
    )

    const clickSearchResult = () => {
      setSearch('')
    }

    return (
      <div className="search-container">
        <label className="Link">Search :</label>
        <input value={search} onChange={handleChange} />

        {!!search && (
          <div className="SearchResults">
            {RESULTS.map((product) => (
              <Link href={`/${product.category}/${product.id}`} className='search-result' onClick={clickSearchResult}>
                <Image src={product.image} height="7" width='28'/>
                <div>{product.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
}

export default Search
