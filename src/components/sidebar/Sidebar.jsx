import React from 'react'
import Search from '../common/search/Search'
import Dialogue from '../dialogue/Dialogue'
import { SidebarSection, SidebarList } from './styledSidebar'
import { uid } from 'uid'

const Sidebar = ({ parentBlockClass, dialogueList }) => {
	return (
		<SidebarSection className={[parentBlockClass, 'sidebar'].join(' ')}>
			<Search parentBlockClass="sidebar__search" />
			<SidebarList className="sidebar__list">
				{dialogueList.map(dialogue => (
					<Dialogue parentBlockClass="sidebar__dialogue" options={dialogue} key={uid()} />
				))}
			</SidebarList>
		</SidebarSection>
	)
}

export default Sidebar
