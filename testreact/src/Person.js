import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'

const Person = () => {
  return (
    <div>
        <Name name="Rustam"/>
        <Email email="nagiyev.r883@gmail.com"/>
        <Address address="Asef zeynalli kuc."/>
        <PersonalInfo personalinfo="Web developer"/>
    </div>
  )
}

export default Person