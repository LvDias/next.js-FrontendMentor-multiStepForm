export default function ComponentBack(){

  return(

    <section className='
      absolute
      top-0 
      w-screen h-screen
      flex flex-col
    '>

      <div id='bg-sidebar' className='
        w-full h-2/5
        bg-cover bg-center bg-[url("/assets/images/bg-sidebar-mobile.svg")]
      ' />

      <div className='
        w-full h-full
        bg-sky-50
      ' />

    </section>

  )

}