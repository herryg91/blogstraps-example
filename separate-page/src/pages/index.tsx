import { GetServerSideProps, NextPage } from "next";
import MainLayout from "@/components/layouts/main-layout";
import { EmbedPost, EmbedPosts } from "@/repositories/blogstraps-api/entity";
import { ApiErrorResponse } from "@/pkg/api/response";
import { BlogstrapsApi } from "@/repositories/blogstraps-api";
import Head from "next/head";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { blogstrapsDefaultCSS } from "@/components/layouts/default.css";
import { Breadcrumbs } from "react-daisyui";

const HomePage: NextPage<{ posts?: EmbedPosts, post?: EmbedPost }> = (param) => {
  if(param.post) {
    return <PostPageComponent post={param.post} />
  } else if(param.posts){
    return <HomePageComponent posts={param.posts} />
  }
  return <></>
}

const HomePageComponent = (props: {posts: EmbedPosts}) => {
    const [current_url, set_current_url ] = useState("")

    useEffect(() => {
      set_current_url(document.URL ?? "")
      const style = document.createElement('style');
      style.innerText = props.posts.style
      const head = document.getElementsByTagName('head')[0];
      head.appendChild(style);
    }, [])

    return <>
      <Head>
      <title>{props.posts.seo_title}</title>
      <meta name="description" content={props.posts.seo_title} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      {current_url !== "" && <meta property="og:url" content={document.URL} />}
      <meta property="og:title" content={props.posts.seo_title} />
      <meta property="og:description" content={props.posts.seo_desc} />
      <meta property="og:type" content={"website"} />
      {props.posts.main_image !== "" && <meta property="og:image" content={props.posts.main_image} />}
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_TWITTER} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:title" content={props.posts.seo_title} />
      <meta name="twitter:description" content={props.posts.seo_desc} />
      {props.posts.main_image !== "" && <meta name="twitter:image" content={props.posts.main_image} />}
      <style>{blogstrapsDefaultCSS}</style>
    </Head>
    <MainLayout>
      { parse(props.posts.html) }
    </MainLayout>
    </>
}

const PostPageComponent = (props: {post: EmbedPost}) => {
  const [current_url, set_current_url ] = useState("")

  useEffect(() => {
    set_current_url(document.URL ?? "")
    const style = document.createElement('style');
    style.innerText = props.post.style
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  }, [])

  return <>
    <Head>
      <title>{props.post.title}</title>
      <meta name="description" content={props.post.seo_title} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      {current_url !== "" && <meta property="og:url" content={document.URL} />}
      <meta property="og:title" content={props.post.seo_title} />
      <meta property="og:description" content={props.post.seo_desc} />
      <meta property="og:type" content={"article"} />
      {props.post.main_image !== "" && <meta property="og:image" content={props.post.main_image} />}
      <meta name="twitter:site" content={process.env.NEXT_PUBLIC_TWITTER} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta name="twitter:title" content={props.post.seo_title} />
      <meta name="twitter:description" content={props.post.seo_desc} />
      {props.post.main_image !== "" && <meta name="twitter:image" content={props.post.main_image} />}
      <style>{blogstrapsDefaultCSS}</style>
    </Head>
    <MainLayout>
      <Breadcrumbs className="mx-auto max-w-3xl">
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>{props.post.title}</Breadcrumbs.Item>
      </Breadcrumbs>
      <div>
      { parse(props.post.html.replaceAll("__currentUrl__", current_url)) }
      </div>
    </MainLayout>
  </>
}

export default HomePage

export const getServerSideProps: GetServerSideProps<{ posts?: EmbedPosts, post?: EmbedPost }> = async (context) => {
  try {
    const post_slug = context.query.p?.toString() ?? ""
    if(post_slug !== "") {
      const resp = await BlogstrapsApi.GetEmbedPost(post_slug)
      return { props: { post: resp.data } }
    }

    const keyword = context.query.keyword?.toString() ?? ""
    const page = Number(context.query.page?.toString()) ?? 1    
    const resp = await BlogstrapsApi.GetEmbedPosts(keyword, "", page)
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