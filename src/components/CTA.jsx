import React from 'react'
import { publicPath } from '../lib/publicPath'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={publicPath('/assets/lateefcv.pdf')} className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let&apos;s Talk</a>
    </div>
  )
}

export default CTA