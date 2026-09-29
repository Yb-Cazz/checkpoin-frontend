import { 
    type LoginResponse
} from "~~/types/types"

export const useAuth = () => {
    const api = useApi()

    const login = async (username: string, password: string) => {
        const body = new URLSearchParams()

        body.append('username', username)
        body.append('password', password)

        const data:LoginResponse = await api('/api/v1/login', {
            method: 'POST',
            body,
        })

        if(data.access_token){
            const token = useCookie('access_token', {
                maxAge: 60 * 60, // 1hr
                secure: true,
                sameSite: 'strict',
                httpOnly: true
            })
            token.value = data.access_token
        }

        return data
    }

    return {
        login
    }

}