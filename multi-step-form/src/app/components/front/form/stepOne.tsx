export default function StepOne(props : any){

  const inputAnswered = () => {

    let component = document.querySelector('#stepOne')
    let { name, email, phone } = props.dataObject

    if(name != '' && email != '' && phone != ''){

      component?.setAttribute('data-answered', 'true')

      return

    }

    component?.setAttribute('data-answered', 'false')

    return

  }

  return(

    <div id='stepOne' className='
      flex flex-col 
      gap-5
      bg-white
      p-5
      mx-5 lg:mx-0
      rounded-lg
      componentsForm
    ' data-value={true} data-answered={false}>

      <div className='
        flex flex-col
        gap-2.5
      '>

        <h3 className='text-2xl font-bold text-sky-900'>Personal info</h3>

        <p className='text-gray-400'>Please provide your name, email, <br /> address, and phone number.</p>

      </div>

      <div className='
        flex flex-col gap-2.5
      '>

        <div className='
          flex flex-col gap-1
        '>

          <label className='text-sm font-bold text-sky-900' htmlFor='name'>Name</label>
          <input onChange={(e) => {
            props.handleObj('name', e.target.value)
            inputAnswered()  
          }} className='border border-solid border-gray-200 rounded p-2.5' type='text' id='name' name='name' placeholder='e.g. Stephen King' />

        </div>

        <div className='
          flex flex-col gap-1
        '>

          <label className='text-sm font-bold text-sky-900' htmlFor='email'>Email Address</label>
          <input onChange={(e) => {
            props.handleObj('email', e.target.value)
            inputAnswered()
          }} className='border border-solid border-gray-200 rounded p-2.5' type='email' id='email' name='email' placeholder='e.g. stephenking@lorem.com' />

        </div>

        <div className='
          flex flex-col gap-1
        '>

          <label className='text-sm font-bold text-sky-900' htmlFor='phone'>Phone Number</label>
          <input onChange={(e) => {
            props.handleObj('phone', e.target.value)
            inputAnswered()
          }} className='border border-solid border-gray-200 rounded p-2.5' type='text' id='phone' name='phone' placeholder='e.g. +1 234 567 890' />

        </div>

      </div>

    </div>

  )

}