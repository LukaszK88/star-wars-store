'use client';
import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react';
import {
  Rocket,
  Video,
  UserMultiple,
  Earth,
  Bat,
  Tank,
} from '@carbon/icons-react';

export default function AppHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label='Intergalatical Store'>
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName href='#' prefix='Intergalatical'>
              Store
            </HeaderName>
            <SideNav aria-label='Side navigation' expanded={isSideNavExpanded}>
              <SideNavItems>
                <SideNavLink renderIcon={Rocket} href='/'>
                  Starships
                </SideNavLink>
                <SideNavLink renderIcon={Video} href='/'>
                  Films
                </SideNavLink>
                <SideNavLink renderIcon={UserMultiple} href='/'>
                  People
                </SideNavLink>
                <SideNavLink renderIcon={Earth} href='/'>
                  Planets
                </SideNavLink>
                <SideNavLink renderIcon={Bat} href='/'>
                  Species
                </SideNavLink>
                <SideNavLink renderIcon={Tank} href='/'>
                  Vehicles
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
        </>
      )}
    />
  );
}
