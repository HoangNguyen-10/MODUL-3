import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return (
        <div>
            Opp....
            <h1>This page can not be found</h1>
            <p>Please go to <Link legacyBehavior href='/'><a >Homepage</a></Link></p>
        </div>
    )
}

export default NotFound