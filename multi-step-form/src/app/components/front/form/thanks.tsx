import Image from 'next/image'

export default function ThankYou(){

  return(

    <div id='thank-you' className='
      flex flex-col 
      gap-5
      items-center justify-center
      bg-white
      px-5 py-10
      mx-5
      rounded-lg
      hidden
    '>

      <Image src='/assets/images/icon-thank-you.svg' width={50} height={50} alt='Thank You' />

      <h3 className='text-2xl font-bold text-sky-900 text-center'>Thank you!</h3>

      <p className='text-gray-400 text-center'>Thanks for confirming your subscription! <br /> 
        We hope you have fun using our <br />
        plataform. If you ever need support, <br />
        please feel free to email us at <br />
        support@loremgaming.com.
      </p>

    </div>

  )

}