import UserRegisterationoDetailTemplate from '@/components/Template/UserRegisterationoDetailTemplate/UserRegisterationoDetailTemplate';
import React from 'react'

const page = async({params}) => {
  const {slug} = await params;
  return (
    <div>
        <UserRegisterationoDetailTemplate slug={slug} />
    </div>
  )
}

export default page