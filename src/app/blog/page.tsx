import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import SingleBlogCard from './SingleBlogCard'
import InnerHeroOne from '@/components/custom/Global/InnerHeroOne'

export const revalidate = 10

const BlogPage = async() => {


  const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/posts?acf_format=standard&_fields=id,title,slug,date,excerpt,acf`, { cache: 'no-store' } ); 
  const blogs = await req.json(); 
 


  return (

    <div>





      <InnerHeroOne
        bgImgUrl="/global/banners/orange-gradient.jpg"
        title="Our Blogs"
        subtitle="Read experiences and stories"
        ctaText="Read Blogs"
      />








      <div>
      {
        blogs && blogs.map((blog:any) => {
          return (
            <div key={blog.id}>
              <SingleBlogCard 
              title={blog.title.rendered} 
              date={blog.date}
              excerpt={blog.excerpt.rendered}
              slug={blog.slug}
              image={blog.acf.mobile_featured_image}
              />
            </div> 
          )

        })
      }
      </div>


    </div>
  )
}

export default BlogPage