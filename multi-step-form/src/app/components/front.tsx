'use client'

import ComponentNav from './front/nav'
import ComponentForm from './front/form'

export default function ComponentFront(){

  let obj : any = {
    name: '',
    email: '',
    phone: '',
    plan: '',
    mode: 'Monthly',
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  }

  const clickButton = (element : boolean) => {

    let componentsForm = document.querySelectorAll('.componentsForm')
    
    let stepOneValue = componentsForm[0].getAttribute('data-value')
    let stepTwoValue = componentsForm[1].getAttribute('data-value')
    let stepThreeValue = componentsForm[2].getAttribute('data-value')
    let stepFourValue = componentsForm[3].getAttribute('data-value')

    let stepOneAnswered = componentsForm[0].getAttribute('data-answered')
    let stepTwoAnswered = componentsForm[1].getAttribute('data-answered')
    
    let stepOne = componentsForm[0]
    let stepTwo = componentsForm[1]
    let stepThree = componentsForm[2]
    let stepFour = componentsForm[3]
    let thankYou = document.querySelector('#thank-you')

    let componentsNav = document.querySelectorAll('.nav-bg')
    let componentsNavText = document.querySelectorAll('.nav-content')

    let navOne = componentsNav[0]
    let navTwo = componentsNav[1]
    let navThree = componentsNav[2]
    let navFour = componentsNav[3]

    let navOneText = componentsNavText[0]
    let navTwoText = componentsNavText[1]
    let navThreeText = componentsNavText[2]
    let navFourText = componentsNavText[3]

    let stepFourPlan = document.querySelector('#step-four-plan')
    let stepFourPlanValue = document.querySelector('#step-four-plan-value')

    let stepFourOnlineServiceSquad = document.querySelector('#step-four-online-service-squad')
    let stepFourOnlineService = document.querySelector('#step-four-online-service')

    let stepFourLargerStorageSquad = document.querySelector('#step-four-larger-storage-squad')
    let stepFourLargerStorage = document.querySelector('#step-four-larger-storage')

    let stepFourCustomizableProfileSquad = document.querySelector('#step-four-customizable-profile-squad')
    let stepFourCustomizableProfile = document.querySelector('#step-four-customizable-profile')

    let stepFourFinal = document.querySelector('#step-four-final')
    let stepFourFinalValue = document.querySelector('#step-four-final-value')

    let buttonsNav = document.querySelector('#buttons-nav')
    let buttonGoBack = document.querySelector('#button-go-back')
    let buttonNext = document.querySelector('#button-next')

    let regex = /\S+@\S+\.\S+/

    let inputEmail = document.querySelector('#email')

    if(element == true){

      if(!regex.test(obj.email)){
        inputEmail?.classList.add('border', 'border-red-500')
      }

      if(stepOneValue == 'true' && stepOneAnswered == 'true' && regex.test(obj.email)){

        inputEmail?.classList.remove('border-red-500')

        stepOne.classList.add('hidden')
        stepOne.setAttribute('data-value', 'false')
  
        stepTwo.classList.remove('hidden')
        stepTwo.setAttribute('data-value', 'true')
  
        navOne.classList.remove('bg-sky-200')
        navOneText.classList.add('text-white')
  
        navTwo.classList.add('bg-sky-200')
        navTwoText.classList.remove('text-white')
  
        buttonGoBack?.classList.remove('invisible')
  
      }
  
      if(stepTwoValue == 'true' && stepTwoAnswered == 'true'){
  
        stepTwo.classList.add('hidden')
        stepTwo.setAttribute('data-value', 'false')
  
        stepThree.classList.remove('hidden')
        stepThree.setAttribute('data-value', 'true')
  
        navTwo.classList.remove('bg-sky-200')
        navTwoText.classList.add('text-white')
  
        navThree.classList.add('bg-sky-200')
        navThreeText.classList.remove('text-white')
  
      }
  
      if(stepThreeValue == 'true'){
  
        stepThree.classList.add('hidden')
        stepThree.setAttribute('data-value', 'false')
  
        stepFour.classList.remove('hidden')
        stepFour.setAttribute('data-value', 'true')
  
        navThree.classList.remove('bg-sky-200')
        navThreeText.classList.add('text-white')
  
        navFour.classList.add('bg-sky-200')
        navFourText.classList.remove('text-white')
  
        buttonNext!.textContent = 'Confirm'

        stepFourPlan!.textContent = `${obj.plan} (${obj.mode})`
        
        if(obj.mode == 'Monthly'){

          let plan = 0
          let online = 0
          let larger = 0
          let customizable = 0

          switch(obj.plan){

            case 'Pro':
              stepFourPlanValue!.textContent = `$15/mo`
              plan = 15
              break
            case 'Advanced':
              stepFourPlanValue!.textContent = `$12/mo`
              plan = 12
              break
            default:
              stepFourPlanValue!.textContent = `$9/mo`
              plan = 9
  
          }

          if(obj.onlineService == true){

            stepFourOnlineServiceSquad?.classList.remove('hidden')
            stepFourOnlineService!.textContent = '+$1/mo'

            online = 1
            

          }else{

            stepFourOnlineServiceSquad?.classList.add('hidden')

            online = 0

          }

          if(obj.largerStorage == true){

            stepFourLargerStorageSquad?.classList.remove('hidden')
            stepFourLargerStorage!.textContent = '+$2/mo'
            
            larger = 2

          }else{

            stepFourLargerStorageSquad?.classList.add('hidden')

            larger = 0

          }

          if(obj.customizableProfile == true){

            stepFourCustomizableProfileSquad?.classList.remove('hidden')
            stepFourCustomizableProfile!.textContent = '+$2/mo'
            
            customizable = 2

          }else{

            stepFourCustomizableProfileSquad?.classList.add('hidden')

            customizable = 0

          }

          stepFourFinal!.textContent = 'Total (per month)'
          stepFourFinalValue!.textContent = `+$${plan + online + larger + customizable}/mo`

        }else{

          let plan = 0
          let online = 0
          let larger = 0
          let customizable = 0

          switch(obj.plan){

            case 'Pro':
              stepFourPlanValue!.textContent = `$150/yr`
              plan = 150
              break
            case 'Advanced':
              stepFourPlanValue!.textContent = `$120/yr`
              plan = 120
              break
            default:
              stepFourPlanValue!.textContent = `$90/yr`
              plan = 90
  
          }

          if(obj.onlineService == true){

            stepFourOnlineServiceSquad?.classList.remove('hidden')
            stepFourOnlineService!.textContent = '+$10/yr'
            
            online = 10

          }else{

            stepFourOnlineServiceSquad?.classList.add('hidden')

            online = 0

          }

          if(obj.largerStorage == true){

            stepFourLargerStorageSquad?.classList.remove('hidden')
            stepFourLargerStorage!.textContent = '+$20/yr'
            
            larger = 20

          }else{

            stepFourLargerStorageSquad?.classList.add('hidden')
            
            larger = 0

          }

          if(obj.customizableProfile == true){

            stepFourCustomizableProfileSquad?.classList.remove('hidden')
            stepFourCustomizableProfile!.textContent = '+$20/yr'
            
            customizable = 20

          }else{

            stepFourCustomizableProfileSquad?.classList.add('hidden')

            customizable = 0

          }

          stepFourFinal!.textContent = 'Total (per month)'
          stepFourFinalValue!.textContent = `+$${plan + online + larger + customizable}/yr`

        }
  
      }

      if(stepFourValue == 'true'){

        stepFour?.classList.add('hidden')

        thankYou?.classList.remove('hidden')

        buttonsNav?.classList.add('hidden')
  
      }

      return

    }

    if(stepTwoValue == 'true'){

      stepOne.classList.remove('hidden')
      stepOne.setAttribute('data-value', 'true')

      stepTwo.classList.add('hidden')
      stepTwo.setAttribute('data-value', 'false')

      navOne.classList.add('bg-sky-200')
      navOneText.classList.remove('text-white')

      navTwo.classList.remove('bg-sky-200')
      navTwoText.classList.add('text-white')

      buttonGoBack?.classList.add('invisible')

    }

    if(stepThreeValue == 'true'){

      stepTwo.classList.remove('hidden')
      stepTwo.setAttribute('data-value', 'true')

      stepThree.classList.add('hidden')
      stepThree.setAttribute('data-value', 'false')

      navTwo.classList.add('bg-sky-200')
      navTwoText.classList.remove('text-white')

      navThree.classList.remove('bg-sky-200')
      navThreeText.classList.add('text-white')

    }

    if(stepFourValue == 'true'){

      stepThree.classList.remove('hidden')
      stepThree.setAttribute('data-value', 'true')

      stepFour.classList.add('hidden')
      stepFour.setAttribute('data-value', 'false')

      navThree.classList.add('bg-sky-200')
      navThreeText.classList.remove('text-white')

      navFour.classList.remove('bg-sky-200')
      navFourText.classList.add('text-white')

      buttonNext!.textContent = 'Next Step'

    }

  }

  return(

    <section className='
        flex flex-col 
        gap-5
        items-center justify-between lg:justify-start
        z-10
        w-full h-full lg:max-w-[500px]
      '>

      <div className='
        flex flex-col
        justify-start items-center
        gap-5
        w-full
      '>

        <ComponentNav />
        <ComponentForm obj={obj} />

      </div>

      <div id='buttons-nav' className='
        flex items-center justify-between
        p-5
        bg-white
        w-full lg:max-w-[500px] 
        lg:rounded-lg
      '>

        <button id='button-go-back' className='
          text-gray-400
          invisible
        ' onClick={() => clickButton(false)}>Go Back</button>

        <button id='button-next' className='
          bg-blue-900
          text-white
          px-5 py-2.5
          rounded
        ' onClick={() => clickButton(true)}>Next Step</button>

      </div>

    </section>

  )

}