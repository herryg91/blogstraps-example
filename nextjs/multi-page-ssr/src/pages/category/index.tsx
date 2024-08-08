import { ApiErrorResponse } from "@/pkg/api/response";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Category } from "@/repositories/blogstraps-api/entity";
import MainLayout from "@/components/layouts/main-layout";
import { BlogstrapsApi } from "@/repositories/blogstraps-api";

const CategoryPage: NextPage<{ categories: Category[] }> = (param) => {
  return <>
    <Head>
      <title>Categories</title>
      <meta name="description" content={"Categories page"} />
    </Head>
    <MainLayout>
      <h1 className="text-2xl font-bold mb-8 text-center">Category</h1>
      {
        param.categories.length === 0 &&
        <p className="text-center">You have no category</p>
      }
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
        { param.categories?.map((c, i) => 
        <a key={`c-${i}`} href={`/c/${c.slug}`} className="p-6 w-full rounded-xl border hover:bg-gray-100">
          <div className="text-lg font-bold mb-2">{c.name}</div>
          <div className="text-sm line-clamp-3">{c.description}</div>
        </a>
        )}
      </div>
    </MainLayout>
  </>
}

export default CategoryPage


export const getServerSideProps: GetServerSideProps<{ categories: Category[] }> = async (context) => {
  try {        
    const resp = await BlogstrapsApi.GetCategories()
    return { props: { categories: resp.data.categories } }
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