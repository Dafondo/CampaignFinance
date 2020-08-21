import React, { useCallback, useState } from 'react'
import { Search, Button } from '@trussworks/react-uswds'
import { useHistory } from 'react-router-dom'

import { SEARCH_FRAGMENT_ROUTE } from '../constants'

const SearchBar = ({ hideQuickLinks }) => {
  const history = useHistory()
  const [donor, setDonor] = useState('')

  const handleChange = useCallback((e) => setDonor(e.target.value), [])

  const handleClick = useCallback(
    (e) => {
      e.preventDefault()
      history.push(`${SEARCH_FRAGMENT_ROUTE}${donor}`)
    },
    [donor, history]
  )

  let quickSearch = ''
  const handleQuickLink = useCallback(
    (e) => {
      quickSearch = e.target.id
      history.push(`${SEARCH_FRAGMENT_ROUTE}${e.target.id}`, {
        candidateQuickSearch: true,
      })
    },
    [quickSearch, history]
  )

  return (
    <div className="search-component">
      <div className="search-bar">
        <Search
          placeholder="Search by Candidate or Donor"
          onSubmit={handleClick}
          onChange={handleChange}
          size="big"
        />
      </div>
      {!hideQuickLinks && (
        <div className="quick-search-btns">
          <p className="quick-search">Quick Search</p>
          <Button
            outline
            type="button"
            className="search-btn"
            id="2020"
            onClick={handleQuickLink}
          >
            2020 Candidates
          </Button>
          <Button outline type="button" className="search-btn">
            2020 Donors
          </Button>
          <Button outline type="button" className="search-btn">
            2020 Contests
          </Button>
        </div>
      )}
    </div>
  )
}

export default SearchBar
