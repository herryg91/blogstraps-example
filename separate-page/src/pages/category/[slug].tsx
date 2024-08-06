import { ApiErrorResponse, ApiSuccessResponse, isApiResponseError } from "@/pkg/api/response";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { EmbedPosts } from "@/repositories/blogstraps-api/entity";
import MainLayout from "@/components/layouts/main-layout";
import { blogstrapsDefaultCSS } from "@/components/layouts/default.css";
import { BlogstrapsApi } from "@/repositories/blogstraps-api";

const CategoryPage: NextPage<{ posts: EmbedPosts }> = (param) => {
  const [current_url, set_current_url ] = useState("")

  useEffect(() => {
    set_current_url(document.URL ?? "")
    const style = document.createElement('style');
    style.innerText = param.posts.style
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  }, [])

  return <>
    <Head>
      <title>{param.posts.title}</title>
      <meta name="description" content={param.posts.seo_title} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      {current_url !== "" && <meta property="og:url" content={document.URL} />}
      <meta property="og:title" content={param.posts.title} />
      <meta property="og:description" content={param.posts.seo_desc} />
      <meta property="og:type" content={"website"} />
      {param.posts.main_image !== "" && <meta property="og:image" content={param.posts.main_image} />}
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_TWITTER} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:title" content={param.posts.title} />
      <meta name="twitter:description" content={param.posts.seo_desc} />
      {param.posts.main_image !== "" && <meta name="twitter:image" content={param.posts.main_image} />}
      <style>{blogstrapsDefaultCSS}</style>
    </Head>
    <MainLayout>
      { parse(param.posts.html) }
    </MainLayout>
  </>
}

export default CategoryPage


export const getServerSideProps: GetServerSideProps<{ posts: EmbedPosts }> = async (context) => {
  try {
    const category_slug = context.params?.slug?.toString() ?? ""
    const keyword = context.query.keyword?.toString() ?? ""
    const page = Number(context.query.page?.toString()) ?? 1
        
    const resp = await BlogstrapsApi.GetEmbedPosts(keyword, category_slug, page)
    return { props: { posts: resp.data } }
  } catch (error) {
    if(error as ApiErrorResponse){
      const api_err = (error as ApiErrorResponse)
      if(api_err.http_status === 404){
        return { notFound: true, }
      } else if (api_err.http_status >= 400 && api_err.http_status <500){
        return {
          redirect: {
            permanent: true,
            destination: "/500",
          },
          props:{},
        };
      }      
    } else {
      console.log("Unknown error:",error);
    }
  }
  return { notFound: true, };
}