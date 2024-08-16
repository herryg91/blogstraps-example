import { GetServerSideProps, NextPage } from "next";
import Script from "next/script";
import MainLayout from "@/components/layouts/main-layout";

const HomePage: NextPage<{ post_slug: string, category_slug: string }> = (param) => {
  if((process.env.NEXT_PUBLIC_BLOGSTRAPS_LAYOUT || "empty") === "empty") {
    return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY}></div>
  </>
  }
  
  return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <MainLayout>
      <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY}></div>
    </MainLayout>
  </>
}

export default HomePage
