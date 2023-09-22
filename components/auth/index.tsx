import { Loader, Login } from '@/components';
import { useEffect, useState } from 'react'

import Head from 'next/head';
import { useRouter } from 'next/navigation'
import { useStateValue } from '@/context/StateProvider';
import { userHooks } from '@/hooks';

const Authenticate = ({ children }: { children: any }) => {
    const [{ user }, dispatch] = useStateValue()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        // fetch user from local storage
        const user = userHooks({ type: 'get' })

        // check if user is object and not empty
        if (typeof user === 'object' && Object.keys(user).length > 0) {
            console.log('user', user)
            dispatch({
                type: 'SET_USER',
                payload: user
            })
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