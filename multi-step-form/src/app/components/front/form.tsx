import StepOne from './form/stepOne'
import StepTwo from './form/stepTwo'
import StepThree from './form/stepThree'
import StepFour from './form/stepFour'
import ThankYou from './form/thanks'

export default function ComponentForm(props: any){

  

  const handleObj = (prop : string, value : string) => {
    
    props.obj[prop] = value

  }

  const handleTime = (checked : React.MouseEvent<HTMLInputElement>) => {

    // STEP TWO

    let monthly = document.querySelector('#monthly')
    let yearly = document.querySelector('#yearly')

    let priceArcade = document.querySelector('#price-arcade')
    let priceAdvanced = document.querySelector('#price-advanced')
    let pricePro = document.querySelector('#price-pro')
    
    let monthsFree = document.querySelectorAll('.months-free')

    // STEP THREE

    let onlineService = document.querySelector('#text-online-service')
    let largerStorage = document.querySelector('#text-larger-storage')
    let customizableProfile = document.querySelector('#text-customizable-profile')

    if(checked){
      
      yearly?.classList.remove('opacity-40')
      monthly?.classList.add('opacity-40')

      priceArcade!.textContent = '$90/yr'
      priceAdvanced!.textContent = '$120/yr'
      pricePro!.textContent = '$150/yr'

      onlineService!.textContent = '+$10/yr'
      largerStorage!.textContent = '+$20/yr'
      customizableProfile!.textContent = '+$20/yr'

      monthsFree!.forEach(e => {

        e.classList.remove('hidden')

      })

      return

    }

    yearly?.classList.add('opacity-40')
    monthly?.classList.remove('opacity-40')

    priceArcade!.textContent = '$9/mo'
    priceAdvanced!.textContent = '$12/mo'
    pricePro!.textContent = '$15/mo'

    onlineService!.textContent = '+$1/mo'
    largerStorage!.textContent = '+$2/mo'
    customizableProfile!.textContent = '+$2/mo'

    monthsFree!.forEach(e => {

      e.classList.add('hidden')

    })

    return

  }

  return(

    <div className='
      w-full
    '>

      <StepOne handleObj={handleObj} dataObject={props.obj} />
      <StepTwo handleTime={handleTime} handleObj={handleObj} dataObject={props.obj}  />
      <StepThree handleObj={handleObj} dataObject={props.obj}  />
      <StepFour dataObject={props.obj} />
      <ThankYou />

    </div>

  )

}