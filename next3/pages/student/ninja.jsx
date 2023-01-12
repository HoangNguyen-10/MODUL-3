import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return (
        { props: { ninjas: data } }
    )
}
const ninja = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninjas list</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                {ninjas.map(item => (
                    <Link legacyBehavior href={'/student/' + item.id}>

                        <a ><h1>{item.name}</h1></a>
                    </Link>


                ))}
            </div>
        </>
    )
}

export default ninja
