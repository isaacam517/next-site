import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './navigation.module.css'
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const LINKS = [
    {
        name: 'Início',
        path: '/'
    },
    {
        name: 'Sobre Mim',
        path: '/sobre-mim'
    },
]

// type NavAnchor = {
//     path: string
//     children: ReactNode
// }

// function NavAnchor ({ path, children }: NavAnchor) {
//     return (
//         <Link href={ path }>
//             <a className={styles.navAnchor}>{ children }</a>
//         </Link>
//     )
// }

export default function Navigation () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { pathname } = useRouter()
    return (
        <>
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink><Link href='/' >Inicio</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link href='/sobre-mim' >Sobre Mim</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link href='#' >Contato</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link href='#' >Notícias</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link href='#' >Redes Sociais</Link></NavLink>
                            </NavItem>
                            
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>  */}
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
            {/* <nav>
                <ul className={styles.list} >
                    {LINKS.map(({ name, path }) => (
                        <li key={ path }>
                            { path === pathname 
                                ? <span>{name}</span> 
                                : <NavAnchor path={ path } >{ name }</NavAnchor>
                            }
                        </li>    
                    ))}
                </ul>
            </nav> */}
        
        </>
    )
}




