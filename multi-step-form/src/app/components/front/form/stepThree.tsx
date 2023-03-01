export default function StepThree(props : any){

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
    ' data-value={false}>

      <div className='
        flex flex-col
        gap-2.5
      '>

        <h3 className='text-2xl font-bold text-sky-900'>Pick add-ons</h3>

        <p className='text-gray-400'>Add-ons help enhance your gaming <br /> experience.</p>

      </div>

      <div className='
        flex flex-col gap-2.5
      '>

          <input onClick={(element) => {

            const { target } = element
            const { checked } = target as HTMLInputElement

            props.handleObj('onlineService', checked)

          }} type='checkbox' name='online-service' id='online-service' className='
            peer/online-service
            hidden
          ' />
          <label htmlFor='online-service' className='
            border border-gray-200
            peer-checked/online-service:border-indigo-900
            peer-checked/online-service:bg-sky-200/10
            flex 
            items-center justify-between
            gap-3
            px-5 py-2.5
            rounded-lg
            peer-checked/online-service:[&>.icon-checked]:bg-blue-900
          '>

            <div className='
              p-3
              rounded
              border border-gray-200
              icon-checked
              bg-[url("/assets/images/icon-checkmark.svg")] bg-no-repeat bg-center
            ' />

            <div className='
              flex flex-col
              w-full
            '>

              <h3 className='
                text-base
                font-bold
                text-sky-900 
              '>Online service</h3>
              <p className='
                text-[12px]
                text-gray-400
              '>Access to multiplayer games</p>

            </div>

            <p id='text-online-service' className='
              text-sm
              text-sky-900 
              font-medium
            '>+$1/mo</p>
            
          </label>

          <input onClick={(element) => {

            const { target } = element
            const { checked } = target as HTMLInputElement

            props.handleObj('largerStorage', checked)

          }} type='checkbox' name='larger-storage' id='larger-storage' className='
            peer/larger-storage
            hidden
          ' />
          <label htmlFor='larger-storage' className='
            border border-gray-200
            peer-checked/larger-storage:border-indigo-900
            peer-checked/larger-storage:bg-sky-200/10
            flex 
            items-center justify-between
            gap-3
            px-5 py-2.5
            rounded-lg
            peer-checked/larger-storage:[&>.icon-checked]:bg-blue-900
          '>

            <div className='
              p-3
              rounded
              border border-gray-200
              icon-checked
              bg-[url("/assets/images/icon-checkmark.svg")] bg-no-repeat bg-center
            ' />

            <div className='
              flex flex-col
              w-full
            '>

              <h3 className='
                text-base
                font-bold
                text-sky-900 
              '>Larger storage</h3>
              <p className='
                text-[12px]
                text-gray-400
              '>Extra 1TB of cloud save</p>

            </div>

            <p id='text-larger-storage' className='
              text-sm
              text-sky-900 
              font-medium
            '>+$2/mo</p>
            
          </label>

          <input onClick={(element) => {

            const { target } = element
            const { checked } = target as HTMLInputElement

            props.handleObj('customizableProfile', checked)

          }} type='checkbox' name='customizable-profile' id='customizable-profile' className='
            peer/customizable-profile
            hidden
          ' />
          <label htmlFor='customizable-profile' className='
            border border-gray-200
            peer-checked/customizable-profile:border-indigo-900
            peer-checked/customizable-profile:bg-sky-200/10
            flex 
            items-center justify-between
            gap-3
            px-5 py-2.5
            rounded-lg
            peer-checked/customizable-profile:[&>.icon-checked]:bg-blue-900
          '>

            <div className='
              p-3
              rounded
              border border-gray-200
              icon-checked
              bg-[url("/assets/images/icon-checkmark.svg")] bg-no-repeat bg-center
            ' />

            <div className='
              flex flex-col
              w-full
            '>

              <h3 className='
                text-base
                font-bold
                text-sky-900 
              '>Customizable profile</h3>
              <p className='
                text-[12px]
                text-gray-400
              '>Custom theme on your profile</p>

            </div>

            <p id='text-customizable-profile' className='
              text-sm
              text-sky-900 
              font-medium
            '>+$2/mo</p>
            
          </label>

      </div>

    </div>

  )

}