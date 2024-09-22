import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'

const SingleTestmnlSlickCard = (props:any) => {



  return (


    <div  key={props.indexId} className=" md:basis-1/2 lg:basis-1/4">
    <div className="p-1">
    {/*
    <Link href={`/itineraries/${props.mainSlugValue}`}>
    */}
      <Card className={`bg-slate-50 bg-cover shadow-none`} >

        <div className="w-full height-full">

        <CardContent className="flex border-none flex-col p-0 shadow-none">





            <div className=" flex flex-col gap-4 p-4 bottom-[40px]">
                        <Image className="max-w-[140px] rounded-full w-full" src={props.personImage} alt="test" width="1000" height="1000"/>
              <div className="text-white text-4xl font-bold  w-full   drop-shadow-2xl font-UrbanistLight [text-shadow:_0_8px_8px_rgba(0_0_0_/_0.4)]">{props.cardImageTitle}</div>
              <div className="text-slate-800  w-full text-md font-UrbanistLight">{props.testimonial}</div>
              <div className="text-slate-800  w-full text-md font-UrbanistLight">- {props.name}</div>
            </div>




    </CardContent>

    </div>

              </Card>
              
              {/*
              </Link>
              */}
           




            </div>
          </div>
          

  )
}

export default SingleTestmnlSlickCard