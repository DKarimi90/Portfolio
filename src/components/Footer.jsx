import React from 'react'

const Footer = () => {

    const displayYear= () => {
       return new Date().getFullYear().toString()
    }

  return (
    <div className='w-full flex justify-center py-3 dark:text-[var(--primary1)]'>
      <p className='text-sm md:text-base'>&copy; David {displayYear()} </p>
    </div>
  )
}

export default Footer
