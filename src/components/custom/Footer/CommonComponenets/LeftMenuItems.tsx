import React from 'react'
import Link from 'next/link'

const LeftMenuItems = () => {
  return (
    <div className="flex flex-col gap-4">

  <ul className="flex flex-col gap-2 text-left font-UrbanistLight tracking-wide">
    <Link href="/our-vision" className="flex">
        <li>Home</li>
    </Link>
    <Link href="/about" className="flex">
        <li className="flex">About Us</li>
    </Link>
    <Link href="/our-logo" className="flex">
        <li className="flex">Contact</li>
    </Link>
    <Link href="/404" className="flex">
        <li className="flex">404 Page</li>
    </Link>
    <Link href="/blog" className="flex">
        <li className="flex">Blog</li>
    </Link>  
    <Link href="/new-lead" className="flex">
        <li className="flex">New Lead</li>
    </Link>        
  </ul>
  </div>
         
  )
}

export default LeftMenuItems