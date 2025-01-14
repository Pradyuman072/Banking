"use client"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Sidebar({ user }: SiderbarProps) {
  const pathname=usePathname()
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href="/" className='mb-12 flex cursor-pointer items-center gap-2 '>
          <Image src="/icons/logo.svg" width={34} height={34} alt='Horizon Logo' className='size-[24px] max-xl:size-14'/>
        <h1 className='sidebar-logo'>
        Horizon
        </h1> </Link>
       {sidebarLinks.map((element)=>{
      const isActive=pathname===element.route||pathname.startsWith(`${element.route}/`)
       return(
        <Link href={element.route} key={element.label} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
         <div className="relative size-6">
            <Image src={element.imgURL} fill  alt={element.label} className={cn({'brightness-[3] invert-0':isActive})}/>
        
         </div> 
          <p className={cn('sidebar-label',{'!text-white':isActive})}>
            {element.label}
          </p>
        </Link>
       )})}
       User
      </nav>
      User
    </section>
  )
}

export default Sidebar
