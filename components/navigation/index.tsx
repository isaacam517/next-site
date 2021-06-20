import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default function Navigation () {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" dark expand="md" className='px-2'>
                <NavbarBrand  className="text-center w-75 d-flex justify-content-start">
                    <Link href="/">
                        <a>
                        <Image
                            src="/logo2.png" // Route of the image file
                            height={50} // Desired size with correct aspect ratio
                            width={200} // Desired size with correct aspect ratio
                            alt="Logo"
                        />
                        </a>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                        <Nav className="text-center d-flex justify-content-center" navbar>
                            <NavItem className="my-2">
                                <NavLink><Link href='/' >Inicio</Link></NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink><Link href='/sobre-mim' >Sobre Mim</Link></NavLink>
                            </NavItem> */}
                            <NavItem className="my-2">
                                <NavLink><Link href='/historia' >História</Link></NavLink>
                            </NavItem>
                            <NavItem className="my-2">
                                <NavLink><Link href='/noticias' >Notícias</Link></NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink><Link href='/redes-sociais' >Redes Sociais</Link></NavLink>
                            </NavItem> */}
                        </Nav>
                        {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </>
    )
}




