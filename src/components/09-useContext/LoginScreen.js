import React, {useContext} from 'react'
import { UserContext } from './UserContex'

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user)

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ ()=> setUser({
                    id:12345,
                    name: 'cesar'
                })}
            >
                Login
            </button>
        </div>
    )
}
