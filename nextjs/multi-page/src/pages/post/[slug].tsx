import { GetServerSideProps, NextPage } from "next";
import MainLayout from "@/components/layouts/main-layout";
import Script from "next/script";

const PostPage: NextPage<{ post_slug: string }> = (param) => {
  return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <MainLayout>
      <div id="bs-blog" 
        data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY} 
        data-post={param.post_slug}>
      </div> 
    </MainLayout>
  </>
}

export default PostPage

export const getServerSideProps: GetServerSideProps<{ post_slug: string }> = async (context) => {
  const post_slug = context.params?.slug?.toString() ?? ""
  return { props: { post_slug: post_slug } }
}

