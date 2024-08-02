import { GetServerSideProps, NextPage } from 'next'

const SitemapPage: NextPage<void> = (props) => <></>
export default SitemapPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      statusCode: 301,
      destination: "https://blogstraps.com/sitemap/embed/"+process.env.NEXT_PUBLIC_BLOGSTRAPS_KEY+".xml",
    },
    props:{},
  };
}