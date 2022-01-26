import React from 'react'
import { uid } from 'uid'
import { NavSection, NavList, NavItem, NavLink } from './styledNav'

const Nav = ({ parentBlockClass, linkList, handleClick }) => {
	return (
		<NavSection className={[parentBlockClass, 'nav'].join(' ')}>
			<NavList className="nav__list">
				{linkList.map(({ id, content, href }) => (
					<NavItem className="nav__item" id={id} key={uid()}>
						<NavLink className="nav__link" href={href} onClick={handleClick}>
							{content}
						</NavLink>
					</NavItem>
				))}
			</NavList>
		</NavSection>
	)
}

export default Nav
