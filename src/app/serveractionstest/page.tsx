import sayHello from '@/lib/actions';
import React from 'react'


const ServerActionPage = () => {

    const actionInComponent = async () => {
        'use server'
        console.log('this also works')
    }
  return (
    <div>
        <form action={actionInComponent}>
            <button>Test me</button>
        </form>
    </div>
  )
}

export default ServerActionPage;    
