import Image from 'next/image'
import React from 'react'

export default function ImageComponent({src}) {
  return <Image src={src} fill alt='image' />
}
