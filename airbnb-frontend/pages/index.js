import { sanityClient } from '../sanity';

export default function Home() {
  return (
    <>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const query = '*[ _type == "property"]'
  const properties = await sanityClient.fetch(query);

  if( !properties.length){
    return {
      props: {
        properties: [],
      }
    }
  }else {
    return {
      props: {
        properties
      }
    }
  }
}
