import { GetServerSideProps, NextPage } from "next";
import Script from "next/script";
import MainLayout from "@/components/layouts/main-layout";

const HomePage: NextPage<{ post_slug: string, category_slug: string }> = (param) => {
  if((process.env.NEXT_PUBLIC_BLOGSTRAPS_LAYOUT || "empty") === "empty") {
    return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    {
    param.post_slug !== "" ?
    <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY} data-post={param.post_slug}></div> :
    param.category_slug !== "" ?
    <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY} data-category={param.category_slug}></div> :
    <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY}></div>
    }
  </>
  }
  
  return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <MainLayout>
      {
      param.post_slug !== "" ?
      <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY} data-post={param.post_slug}></div> :
      param.category_slug !== "" ?
      <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY} data-category={param.category_slug}></div> :
      <div id="bs-blog" data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY}></div>
      }
    </MainLayout>
  </>
}

export default HomePage


export const getServerSideProps: GetServerSideProps<{ post_slug: string, category_slug: string }> = async (context) => {
  const post_slug =  context.query.p?.toString() ?? ""
  const category_slug =  context.query.c?.toString() ?? ""
  return { props: { post_slug: post_slug, category_slug: category_slug } }
}