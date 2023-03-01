export default function ComponentNav(){

  return(

    <nav className='
      flex
      gap-2.5
      mt-5
    '>

        <div className='
          relative
          p-4
          border border-solid border-gray-300
          rounded-full
          bg-sky-200
          nav-bg
        '>

          <span className='
            absolute
            bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2
            text-sm
            nav-content
          '>1</span>

        </div>

        <div className='
          relative
          p-4
          border border-solid border-gray-300
          rounded-full
          nav-bg
        '>

          <span className='
            absolute
            bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2
            text-white
            text-sm
            nav-content
          '>2</span>

        </div>

        <div className='
          relative
          p-4
          border border-solid border-gray-300
          rounded-full
          nav-bg
        '>

          <span className='
            absolute
            bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2
            text-white
            text-sm
            nav-content
          '>3</span>

        </div>

        <div className='
          relative
          p-4
          border border-solid border-gray-300
          rounded-full
          nav-bg
        '>

          <span className='
            absolute
            bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2
            text-white
            text-sm
            nav-content
          '>4</span>

        </div>

    </nav>

  )

}