import React from 'react'

import Image from 'next/image'

export default function StepTwo(props : any){

  const inputAnswered = () => {

    let component = document.querySelector('#stepTwo')
    let { plan } = props.dataObject

    if(plan != ''){

      component?.setAttribute('data-answered', 'true')

      return

    }

    component?.setAttribute('data-answered', 'false')

    return

  }

  return(

    <div id='stepTwo' className='
      flex flex-col 
      gap-5
      bg-white
      p-5
      mx-5 lg:mx-0
      rounded-lg
      componentsForm
      hidden
    ' data-value={false} data-answered={false}>

      <div className='
        flex flex-col
        gap-2.5
      '>

        <h3 className='text-2xl font-bold text-sky-900'>Select your plan</h3>

        <p className='text-gray-400'>You have the option of monthly or <br /> yearly billing.</p>

      </div>

      <div className='
        flex flex-col gap-2.5
      '>

        <input onClick={() => {
          props.handleObj('plan', 'Arcade')
          inputAnswered()
        }} className='
          peer/arcade
          hidden
        ' type='radio' id='Arcade' name='plan' />

        <label className='
          border border-gray-200
          peer-checked/arcade:border-indigo-900
          peer-checked/arcade:bg-sky-200/10
          flex 
          items-start
          gap-5
          px-5 py-2.5
          rounded-lg
        ' htmlFor='Arcade'>
          
          <Image src='/assets/images/icon-arcade.svg' width={50} height={50} alt='Plan Arcade' />
          
          <div className='
            flex flex-col
          '>
            
            <h3 className='
              text-base
              font-bold
              text-sky-900 
            '>Arcade</h3>
            <p id='price-arcade' className='
              text-sm
              text-gray-400
            '>$9/mo</p>
            <p className='
              months-free
              hidden
              text-[12px]
              font-medium
              text-sky-900 
            '>2 months free</p>

          </div>

        </label>

        <input onClick={() => {
          props.handleObj('plan', 'Advanced')
          inputAnswered()
        }} className='
          peer/advanced
          hidden
        ' type='radio' id='Advanced' name='plan' />

        <label className='
          border border-gray-200
          peer-checked/advanced:border-indigo-900
          peer-checked/advanced:bg-sky-200/10
          flex 
          items-start
          gap-5
          px-5 py-2.5
          rounded-lg
        ' htmlFor='Advanced'>
          
          <Image src='/assets/images/icon-advanced.svg' width={50} height={50} alt='Plan Advanced' />

          <div className='
            flex flex-col
          '>
            
            <h3 className='
              text-base
              font-bold
              text-sky-900 
            '>Advanced</h3>
            <p id='price-advanced' className='
              text-sm
              text-gray-400
            '>$12/mo</p>
            <p className='
              months-free
              hidden
              text-[12px]
              font-medium
              text-sky-900 
            '>2 months free</p>

          </div>

        </label>

        <input onClick={() => {
          props.handleObj('plan', 'Pro')
          inputAnswered()
        }} className='
          peer/pro
          hidden
        ' type='radio' id='Pro' name='plan' />

        <label className='
          border border-gray-200
          peer-checked/pro:border-indigo-900
          peer-checked/pro:bg-sky-200/10
          flex 
          items-start
          gap-5
          px-5 py-2.5
          rounded-lg
        ' htmlFor='Pro'>
          
          <Image src='/assets/images/icon-pro.svg' width={50} height={50} alt='Plan Pro' />

          <div className='
            flex flex-col
          '>
            
            <h3 className='
              text-base
              font-bold
              text-sky-900 
            '>Pro</h3>
            <p id='price-pro' className='
              text-sm
              text-gray-400
            '>$15/mo</p>
            <p className='
              months-free
              hidden
              text-[12px]
              font-medium
              text-sky-900 
            '>2 months free</p>

          </div>

        </label>

      </div>

      <div className='
        flex 
        justify-center items-center
        gap-5
        px-5 py-py-2.5
        bg-gray-100/60
        rounded-lg
      '>
        
        <p id='monthly' className='
          text-sm
          font-bold
        '>Monthly</p>

          <label className='
            relative 
            inline-flex 
            items-center 
            cursor-pointer
          '>

            <input type='checkbox' className='
              sr-only peer/payment-time
            ' onClick={(element) => {

              const { target } = element
              const { checked } = target as HTMLInputElement

              props.handleTime(checked) 
              props.handleObj('mode', checked ? 'Yearly' : 'Monthly')

            }}/>

            <div className='
              w-11 h-6 
              bg-gray-200 
              rounded-full  
              dark:bg-blue-900 
              peer-checked/payment-time:after:translate-x-full 
              peer-checked/payment-time:after:border-white 
              after:content-[""] 
              after:absolute 
              after:top-[4px] after:left-[5.5px]
              after:bg-white 
              after:border-gray-300 after:border 
              after:rounded-full 
              after:h-4 after:w-4 
              after:transition-all 
              dark:border-gray-600 
              peer-checked/payment-time:bg-blue-700
            ' />
          
          </label>

        <p id='yearly' className='
          text-sm
          font-bold
          opacity-40
        '>Yearly</p>

      </div>

    </div>

  )

}