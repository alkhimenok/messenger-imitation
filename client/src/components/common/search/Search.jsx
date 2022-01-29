import React from 'react'
import { SearchSection, SearchInput, SearchLabel } from './styledSearch'

const Search = ({ parentBlockClass, id }) => {
	return (
		<SearchSection className={[parentBlockClass, 'search'].join(' ')} id={id}>
			<SearchInput className="search__input" id="search" placeholder="Search" type="text" />
			<SearchLabel className="search__label" htmlFor="search">
				<i className="search__icon icon-search"></i>
			</SearchLabel>
		</SearchSection>
	)
}

export default Search
