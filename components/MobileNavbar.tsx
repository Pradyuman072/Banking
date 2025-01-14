"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
function MobileNavbar({ user }: MobileNavProps) {
    const pathname = usePathname();
    return (
        <section className='w-full max-w-[264px'>
            <Sheet>
                <SheetTrigger>
                    <Image src="./icons/hamburger.svg" width={30} height={30} className='cursor-pointer' alt='menu' />
                </SheetTrigger>
                <SheetContent side="left" className="border-none z-50 bg-white">
                    <Link href="/" className=' flex cursor-pointer items-center gap-1 px-4 '>
                        <Image src="/icons/logo.svg" width={34} height={34} alt='Horizon Logo' />
                        <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>  Horizon
                        </h1> </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex flex-col text-white pt-16 gap-6">
                                {sidebarLinks.map((element) => {
                                    const isActive = pathname === element.route || pathname.startsWith(`${element.route}/`)
                                    return (
                                        <SheetClose asChild key={element.route}>

                
                                        <Link href={element.route} key={element.label} className={cn('mobilenav-sheet_close w-ful', { 'bg-bank-gradient': isActive })}>
                                         
                                                <Image src={element.imgURL} 
                                                width={20} height={20}
                                                 className={cn({ 'brightness-[3] invert-0': isActive })} alt="" />

                              
                                            <p className={cn('text-16 font-semibold text-black-2 ', { 'text-white': isActive })}>
                                                {element.label}
                                            </p>
                                        </Link>   
                                          </SheetClose>
                                    )
                                })}
                            </nav>
                        </SheetClose>
                    </div>


                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavbar