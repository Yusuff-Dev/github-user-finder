import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({user: {login, avatar_url}}) => {
  return (
    <div className='card compact shadow-md bg-base-100'>
        <div className='flex-row items-center space-x-4 card-body'>
            <div className="avatar">
                <div className="rounded-full w-14 h-14 shadow">
                    <img src={avatar_url} alt="avatar" />
                </div>
            </div>
            <div>
                <h2 className='card-title'>{login}</h2>
                <Link to={`user/${login}`} className='text-base-content text-opacity-40'>visit profile</Link>
            </div>
        </div>
    </div>
  )
}

export default UserItem