import { useLocation } from "react-router-dom"
import { Logo } from "../../common/Logo"
import { HeaderContainer, NavigationHeader, NavigationPageOptions, PagesLinksOptions } from "./styled"
import { MenuButton } from "../../Buttons/MenuButton";

export const Header = () => {
  const { pathname } = useLocation();

  const sections = [
    {
      path:  '/',
      label: 'Info',
    }, {
      path: '/about-me',
      label: 'About Me',
    }, {
      path: '/projects',
      label: 'Projects',
    }, {
      path: '/contacts',
      label: 'Contact Me ',
    }, 
  ]

  const pathnameClasses = {
    '/': 'home',
    '/about-me': 'about-me',
    '/projects': 'projects',
    '/contacts': 'contacts'
  }

  return (
    <HeaderContainer>
      <Logo />
      <NavigationHeader>
        <NavigationPageOptions className={`${pathnameClasses[pathname]}`}>
          {
            sections.map(({ label, path }, index) => {
              return (
                <li key={index}>
                  <PagesLinksOptions to={path} className={`${ (pathname === path) && 'selected'}`} aria-current={(pathname === path)}>
                    { label }
                  </PagesLinksOptions>
                </li>
              );
            })
          }
        </NavigationPageOptions>
        <MenuButton />
      </NavigationHeader>
    </HeaderContainer>
  )
}