import { sanityClient } from "../../sanity";
import { isMultiple } from "../../utils";
const Property = ({  
  title,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  description,
  host,
  reviews
}) => {
  const reviewAmount = reviews.length
  return (
    <div className="container">
      <h1><b>{title}</b></h1>
      <p>{reviewAmount} review{isMultiple(reviewAmount)}</p>
      <div className="images">
        
      </div>
      <h2><b>{propertyType} hosted by {host?.name}</b></h2>
      <h4>{bedrooms} bedroom{isMultiple(bedrooms)} * {beds} bed{isMultiple(beds)} </h4>
      <hr/>
      <h4><b>Enhanced Clean</b></h4>
      <p>This host is commited to Airbnb's 5-step enhanced cleaning process.</p>
      <h4><b>Amneties for everyday living</b></h4>
      <p>The host has equipped this place for long stays - kitchen, shampoo, conditioner, hairdryer included.</p>
      <h4><b>House rules</b></h4>
      <p>This place isn't suitable for pets andthe host does not allow parties or smoking.</p>

      <div className="price-box">
        <h2>£{pricePerNight}</h2>
        <h4>{reviewAmount} review{isMultiple(reviewAmount)}</h4>
        <div className="button" onClick={()=>{}}></div>
      </div>

    </div>
  );
}

export default Property;


export const getServerSideProps = async (ctx) => {
  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    description,
    host->{
      _id,
      name,
      slug,
      image
    },
    reviews[]{
      ...,
      traveller->{
        _id,
        name,
        slug,
        image
      }
    }
  }`;

  const property = await sanityClient.fetch(query, {pageSlug: ctx.query.slug});
  console.log(property);
  if(!property) {
    return {
      props: null,
      notFound: true
    }
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
      }
    }
  }
}

