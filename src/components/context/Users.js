import {createContext} from "react";

export const UsersList = createContext();

export const Users = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};