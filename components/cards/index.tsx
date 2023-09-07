import { IconType } from 'react-icons/lib'
import React from 'react'

const Card = (
    { title, Icon, description, link, linkText }: { title: string, Icon: IconType, description: string, link: string, linkText: string }
) => {
    return (
        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
        >
            <h2 className={`w-full flex items-center justify-between mb-3 text-2xl font-semibold`}>
                {title}
                <Icon className={`inline-block ml-2 text-xl text-primary-500 group-hover:text-primary-600 transition-transform group-hover:translate-x-1 motion-reduce:transform-none`} />
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Manage all stock items
            </p>
        </a>
    )
}

export default Card