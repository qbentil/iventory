/* eslint-disable @next/next/no-img-element */
'use client'

import { Footer } from '..'
import { ImSpinner } from 'react-icons/im'
import Input from '../input'
import { LiaProductHunt } from "react-icons/lia";
import { isValidEmail } from '@/utils'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { userHooks } from '@/hooks';

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [credentials, setCredentials] = useState({ email: '', password: '', role: 11 })
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        // check if credentials are valid
        if (!credentials.email || !credentials.password) return toast.error('Please enter your credentials', {
            toastId: 'login-error',
        })
        if (!isValidEmail(credentials.email)) return toast.error('Invalid email address', {
            toastId: 'login-error',
        })

        // set user
        setLoading(true)
        userHooks({
            type: 'set',
            payload: credentials
        })
        toast.success('Login successful', { toastId: 'login-success' })
        setLoading(false)
        // redirect to dashboard : /
        router.push('/')
        window.location.reload()
    }

    const handleInputChange = (e: any) => {
        const { id, value } = e.target
        setCredentials({ ...credentials, [id]: value })
    }
    return (
        <section className="w-screen h-screen flex flex-col items-center justify-center bg-green-700">
            <div className="w-full md:w-[30%] shadow-sm px-2 flex items-center justify-center">
                <form className='w-full flex flex-col gap-y-3 p-5 py-10 rounded' autoComplete='off' onSubmit={handleSubmit}>

                    <div className='flex flex-col items-center justify-center animate-pulse'>
                        {/* <LiaProductHunt className='text-2xl' />
                        add logo */}
                        {/* <p className='text-2xl font-bold ml-2'>SMS.IO 1.0</p>  */}
                        <img src="/assets/logo.png" alt="logo" className="w-20 h-20" />
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <Input type='email' name='email' id='email' placeholder='Email'
                            onChange={handleInputChange}
                            value={credentials.email} />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <Input type='password' name='password' id='password' placeholder='Password'
                            onChange={handleInputChange}
                            value={credentials.password} />
                    </div>


                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left w-full">
                        <button
                            type="submit"
                            disabled={loading}
                            onClick={handleSubmit}
                            className={`bg-green-500 text-white font-bold w-full py-3 rounded-lg ${loading && 'animate-pulse cursor-not-allowed'}`}
                        >
                            {loading ? (
                                <div className="flex items-center gap-x-3 justify-center">
                                    <ImSpinner className="animate-spin my-1" />
                                    <span>Authenticating...</span>
                                </div>
                            ) : (
                                <span>Login</span>
                            )}
                        </button>

                        {/* <!-- Register link --> */}
                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                            <a
                                href="#!"
                                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                            >Forgot password</a>
                        </p>
                    </div>
                </form>
            </div>

            <Footer />
        </section>
    )
}

export default Login