import React from 'react'
import { SearchSection, SearchInput, SearchLabel } from './styledSearch'

const Search = () => {
	return (
		<SearchSection className="sidebar__header">
			<SearchInput className="sidebar__search" id="search" type="text" />
			<SearchLabel className="sidebar__label" for="search">
				<i className="sidebar__icon icon-search"></i>
			</SearchLabel>
		</SearchSection>
	)
}

export default Search
