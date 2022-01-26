import React from 'react'
import Search from '../common/search/Search'
import { SidebarSection, SidebarList } from './styledSidebar'

const Sidebar = ({ parentBlockClass }) => {
	return (
		<SidebarSection className={[parentBlockClass, 'sidebar'].join(' ')}>
			<Search parentBlockClass="sidebar__search" />
			<SidebarList className="sidebar__list"></SidebarList>
		</SidebarSection>
	)
}

export default Sidebar
