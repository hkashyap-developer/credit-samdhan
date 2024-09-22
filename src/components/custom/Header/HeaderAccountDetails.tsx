import React from 'react'
import Image from 'next/Image'
import { Button } from "@/components/ui/button"

const HeaderAccountDetails = () => {
  return (
    <div className="border rounded-md p-4 flex gap-4 justify-between">

    <Image className="max-w-[80px] md:max-w-[100px] rounded-full w-full" src="/global/person-2.jpg" alt="test" width="1000" height="1000"/>

    <Button variant="destructive" className="text-sm p-2 py-0">Log Out</Button>

    </div>
  )
}

export default HeaderAccountDetails