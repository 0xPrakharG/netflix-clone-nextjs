import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import useAuth from '../hooks/useAuth'
import BasicMenu from './BasicMenu'
import Image from 'next/image'
import Logo from '../assets/Netflix_logo.svg'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={Logo}
          width={90}
          height={30}
          className="cursor-pointer object-contain"
        />
        <BasicMenu />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center font-light text-sm space-x-4">
        <SearchIcon className="hidden h-6 w-6 sm:inline " />
        <p className="hidden lg:inline">Kids</p>
        <div className="pr-4">
          <BellIcon className="h-6 w-6" />
        </div>
        <Link href="/account">
          <Image
            height={30}
            width={30}
            src="https://rb.gy/g1pwyx"
            alt="account"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
