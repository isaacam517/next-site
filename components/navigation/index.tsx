import Link from 'next/link'
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

export default function Navigation () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" dark expand="md" className='px-2'>
                <NavbarBrand href="/">VITORIANDO</NavbarBrand>
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
                            <NavLink><Link href='/historia' >História</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link href='/noticias' >Notícias</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link href='/redes-sociais' >Redes Sociais</Link></NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </>
    )
}




