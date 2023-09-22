/**
 * 1. Set user hook - This hook will be used to set the user in the local storage
 * 2. Get user hook - This hook will be used to get the user from the local storage
 * 3. Remove user hook - This hook will be used to remove the user from the local storage
 * 4. Update user hook - This hook will be used to update the user in the local storage
 */

export const userHooks = (action: { type: string, payload?: any }) => {
    switch (action.type) {
        case 'set':
            return localStorage.setItem('user', JSON.stringify(action.payload))
        case 'get':
            return JSON.parse(localStorage.getItem('user') || '{}')
        case 'remove':
            return localStorage.removeItem('user')
        case 'update':
            return localStorage.setItem('user', JSON.stringify(action.payload))
        default:
            return JSON.parse(localStorage.getItem('user') || '{}')
    }
}

export const fetchUser = (callback: any) => {
    if (!process.browser) return
    let user = userHooks({ type: 'get' })
    if (typeof user === 'object' && Object.keys(user).length > 0) {
        callback(user)
    }
}