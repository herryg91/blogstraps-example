import { NextPage } from "next";
import Script from "next/script";
import MainLayout from "@/components/layouts/main-layout";

const HomePage: NextPage<void> = () => {
  return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <MainLayout>
      <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_KEY}></div> 
    </MainLayout>
  </>
}

export default HomePage
