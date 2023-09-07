import { Loader, Login } from '@/components';
import { useEffect, useState } from 'react'

import Head from 'next/head';
import { useRouter } from 'next/navigation'
import { userHooks } from '@/hooks';

const Authenticate = ({ children }: { children: any }) => {
    const [user, setUser] = useState<any | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // fetch user from local storage
        const user = userHooks({ type: 'get' })

        // check if user is object and not empty
        if (typeof user === 'object' && Object.keys(user).length > 0) {
            setUser(user)
        }
        setLoading(false)
    }, [])
    return (
        <>
            {
                loading && <Loader />
            }
            {
                !user && !loading && <Login />
            }
            {
                user && !loading && children
            }
        </>
    )
}

export default Authenticate