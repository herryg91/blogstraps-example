import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Button, Input, Join, Link, Menu, Modal, Navbar } from "react-daisyui";
import Image from "next/image";
import ImageLogoSquare from '@/assets/images/logo.png';
import { HiOutlineSearchCircle, HiSearch, HiX } from "react-icons/hi";
import { usePathname, useSearchParams } from "next/navigation";
import { useFetch } from "@/pkg/hook/useFetch";
import { BlogstrapsApi } from "@/repositories/blogstraps-api";
import { Category } from "@/repositories/blogstraps-api/entity";

const MainLayout = (props :{children? :ReactNode}) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const defaultKeyword = searchParams.get('keyword') ?? ""
  const page = Number(searchParams.get('page')) ?? 0
  const [search_modal, set_search_modal] = useState(false)

  const getCategories = useFetch<{categories: Category[]}>(BlogstrapsApi.GetCategories)
  useEffect(() => {
    getCategories.request()
  }, [])

  return <div className="min-h-screen flex flex-col !p-0 !max-w-none" 
    style={{backgroundColor: "var(--bs-main-bg-color)", color:"var(--bs-main-text-color)"}} 
  >  
    <SearchModal show={search_modal} onClose={() => set_search_modal(false)} defaultKeyword={defaultKeyword} page={page}/>
    
    <Navbar className="round-box grid grid-cols-3 gap-x-2 py-[16px] px-[20px] border-b">
        <div className="flex-1">
            <Link href="/"><img className="max-h-[40px]" src={ImageLogoSquare.src} alt={"Blogstraps"} /></Link>
        </div>
        <div className="justify-center">
            <Link href="/" className="text-2xl normal-case font-semibold">{process.env.NEXT_PUBLIC_SITE_TITLE || "Blogstraps NextJS"}</Link>
        </div>
        <div className="justify-end">
            <Button type="button" className="" shape="circle" color="ghost" onClick={() => set_search_modal(true)}><HiSearch className="" size={20}/></Button>
        </div>
    </Navbar>
    {
    (getCategories.data?.categories.length ?? 0) > 0 ?
    <section className="border-b text-center mb-8">
      <Menu className="bs-menu flex-nowrap overflow-x-auto max-w-full" horizontal>
        <Menu.Item>
          <Link href="/" style={pathname === "/" ? {backgroundColor: "var(--bs-color-primary)"} : {}}>Home</Link>
        </Menu.Item>
        {
        (getCategories.data?.categories.length ?? 0) > 5 ?
        <Menu.Item key={`nav-categories`}>
          <Link href={"/c"} style={pathname.startsWith("/c") ? {backgroundColor: "var(--bs-color-primary)"} : {}}>Categories</Link>
        </Menu.Item> : 
        getCategories.data?.categories.map((c, idx) => 
        <Menu.Item key={`nav-category-${idx}`}>
          <Link href={`/c/${c.slug}`} style={pathname === `/c/${c.slug}` ? {backgroundColor: "var(--bs-color-primary)"} : {}}>{c.name}</Link>
        </Menu.Item>)
        }
      </Menu>
    </section> : 
    <section className="mb-8"></section>
    }

    <div className="container mx-auto">
      { defaultKeyword !== "" &&
      <h4 className="text-lg font-bold mb-4">Search: {defaultKeyword}</h4>
      }
      {props.children}
    </div>

    <div className="grow"></div>
    <hr className='mt-8' />

    <footer className='pt-8 pb-8 container mx-auto'>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
        <div className="flex flex-col gap-y-0 lg:col-span-4 md:col-span-2 col-span-2">
          <a href="http://blogstraps.com" rel="dofollow" className="p-2 rounded-xl hover:shadow w-fit">
            <div className="ml-[-0.5rem]">
              <Image src={ImageLogoSquare} alt="logo blogstraps" height={40}  />
            </div>
            <p className="text-xs mt-2">Copyright © {(new Date()).getFullYear()} - Blogstraps</p>
          </a>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="#">About Us</Link>
        </div>
        <div className="flex flex-col gap-y-4 text-sm">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Term of Service</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
        <div></div>
      </div>
    </footer>
    
  </div>
};
  

export default MainLayout

const SearchModal = (props: { show: boolean,  onClose: () => void, defaultKeyword: string, page: number}) => {
  const pathname = usePathname()
  const searchInputRef = useRef<HTMLInputElement>(null);
  const search_url = (pathname === "/" || pathname.startsWith("/c")) ? pathname : "/"

  useEffect(() => {
    if(props.show){
      searchInputRef.current?.focus()
    }
  }, [props.show])

  return (
    <>
      <Modal.Legacy open={props.show} onClickBackdrop={props.onClose} >
        <Button type="button" color="error" size="sm" shape="circle" className="absolute right-2 top-4 text-white" onClick={props.onClose}>
          <HiX className='w-5 h-5' />
        </Button>
        <Modal.Header className="font-bold ">
          <div className="flex gap-x-1 items-center"><HiOutlineSearchCircle /> Search</div>
        </Modal.Header>
        <Modal.Body>
          <form method="GET" action={search_url}>
            <Join className="w-full">
              <Input className="join-item w-full" ref={searchInputRef} onLoad={(e) => e.currentTarget.focus()} name="keyword" defaultValue={props.defaultKeyword} placeholder="Add keyword..."/>
              {props.page > 0 &&  <Input name="page" value={props.page} type="hidden"/>}
              <Button type="submit" className="join-item" color="accent">Search</Button>
            </Join>
          </form>
        </Modal.Body>
      </Modal.Legacy>
    </>
  );
};
