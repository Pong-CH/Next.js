import ProfileCardComponent from '@/components/ProfileCardComponent'
import React from 'react'

export default function Profile() {
  return (
    <div className='flex gap-2.5'>
        <ProfileCardComponent/>
        <ProfileCardComponent/>
    </div>
  )
}
