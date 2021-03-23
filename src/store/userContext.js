import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserData = ({ children }) => {
    const [userData, setUserData] = useState({ isShow: '', user: { name: 'hcda' } });
    return (
        <UserContext.Provider value={[userData, setUserData]}>{children}</UserContext.Provider>
    );
};

export { UserContext };

export default UserData;
