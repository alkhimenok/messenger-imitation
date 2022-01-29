import React, { useEffect } from 'react'
import Search from '../common/search/Search'
import Nav from '../common/nav/Nav'
import Dialogue from '../dialogue/Dialogue'
import { SidebarSection, SidebarList } from './styledSidebar'
import { uid } from 'uid'
import { setSidebarHeight } from '../../scripts/sidebarHeight'

const Sidebar = ({ parentBlockClass, dialogueList }) => {
	const linkList = [
		{ id: 'dialoguesLink', content: 'dialogues', href: 'dialogues' },
		{ id: 'communitiesLink', content: 'communities', href: 'communities' },
		{ id: 'botsLink', content: 'bots', href: 'bots' }
	]

	useEffect(() => setSidebarHeight())

	const handleClick = e => e.preventDefault()

	return (
		<SidebarSection className={[parentBlockClass, 'sidebar'].join(' ')}>
			<Search parentBlockClass="sidebar__search" id="sidebarSearch" />
			<Nav parentBlockClass="sidebar__nav" id="sidebarNav" linkList={linkList} handleClick={handleClick} them="dark" />
			<SidebarList className="sidebar__list" id="sidebarList">
				{dialogueList.map(dialogue => (
					<Dialogue parentBlockClass="sidebar__dialogue" options={dialogue} key={uid()} />
				))}
			</SidebarList>
		</SidebarSection>
	)
}

export default Sidebar
