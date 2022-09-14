import {createContext, useState} from "react";

export const UsersList = createContext(undefined);

export const Users = ({children}) => {
    const [users, set_users] = useState()

    const add_users = (value)=> {
        set_users(value);
    }

    return (
        <UsersList.Provider value={{users, add_users}}>
            {children}
        </UsersList.Provider>
    );
};