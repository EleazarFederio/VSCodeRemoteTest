import React from 'react'

const User = ({match}) => {
    return(
        <div>
            <h1>Welcome {match.params.username} </h1>
        </div>
    )
}

export default User;