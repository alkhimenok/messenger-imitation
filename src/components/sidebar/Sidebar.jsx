import React from 'react'
import Search from '../common/search/Search'
import { Body } from '../common/styleComponents'
import { SidebarSection, SidebarList } from './styledSidebar'

const Sidebar = ({ parentBlockClass }) => {
	return (
		<SidebarSection className={[parentBlockClass, 'sidebar'].join(' ')}>
			<Body className="sidebar__body">
				<Search />

				<SidebarList className="sidebar__list"></SidebarList>
			</Body>
		</SidebarSection>
	)
}

export default Sidebar
