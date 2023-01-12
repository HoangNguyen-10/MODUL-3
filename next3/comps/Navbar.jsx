import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>

            <div>
                <Image width={100} height={100} src="/ninjas.png" alt="" />
            </div>
            <Link legacyBehavior href='/'>
                <a href="">Home</a>
            </Link>
            <Link legacyBehavior href='/about'>
                <a href="">About</a>
            </Link>
            <Link legacyBehavior href='/student/ninja'>
                <a href="">Ninjas listing</a>
            </Link>

        </nav>
    )
}

export default Navbar