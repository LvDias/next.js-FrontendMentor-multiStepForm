export default function StepFour(props : any){

  return(

    <div className='
      flex flex-col 
      gap-5
      bg-white
      p-5
      mx-5 lg:mx-0
      rounded-lg
      componentsForm
      hidden
    ' data-answered={false}>

      <div className='
        flex flex-col
        gap-2.5
      '>

        <h3 className='text-2xl font-bold text-sky-900'>Finishing up</h3>

        <p className='text-gray-400'>Double-check everything looks OK <br /> before confirminig.</p>

      </div>

      <div className='
        flex flex-col gap-5
        p-5
        bg-gray-100/60
        rounded-lg
      '>

        <div className='
          flex
          justify-between
        '>

          <p id='step-four-plan' className='
            font-bold text-sky-900
          '>Arcade (Monthly)</p>

          <p id='step-four-plan-value' className='
            font-bold text-sky-900
          '></p>

        </div>

        <hr />

        <div id='step-four-online-service-squad' className='
          flex
          justify-between
          hidden
        '>

          <p className='text-gray-400'>Online service</p>

          <p id='step-four-online-service' className='text-gray-400 font-medium'></p>

        </div>

        <div id='step-four-larger-storage-squad' className='
          flex
          justify-between
          hidden
        '>

          <p className='text-gray-400'>Larger storage</p>

          <p id='step-four-larger-storage' className='text-gray-400 font-medium'></p>

        </div>

        <div id='step-four-customizable-profile-squad' className='
          flex
          justify-between
          hidden
        '>

          <p className='text-gray-400'>Customizable profile</p>

          <p id='step-four-customizable-profile' className='text-gray-400 font-medium'></p>

        </div>

      </div>

      <div className='
        flex
        justify-between
        px-5
      '>

        <p id='step-four-final' className='text-gray-400'></p>

        <p id='step-four-final-value' className='font-bold text-sky-900'></p>

      </div>

    </div>

  )

}