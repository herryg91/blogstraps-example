import { GetServerSideProps, NextPage } from "next";
import MainLayout from "@/components/layouts/main-layout";
import Script from "next/script";

const CategoryPage: NextPage<{ category_slug: string }> = (param) => {
  return <>
    <Script async src="https://blogstraps.com/embed/blogstraps.min.js"></Script>
    <MainLayout>
      <div id="bs-blog" 
        data-key={process.env.NEXT_PUBLIC_BLOGSTRAPS_EMBED_KEY} 
        data-category={param.category_slug}></div> 
    </MainLayout>
  </>
}

export default CategoryPage

export const getServerSideProps: GetServerSideProps<{ category_slug: string }> = async (context) => {
  const category_slug = context.params?.slug?.toString() ?? ""
  return { props: { category_slug: category_slug } }
}

