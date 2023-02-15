import Link from 'next/link'
import  Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '@/ultls/fetchApi'
import Property from '@/components/Property'

const myloader = ({src, quality})=>{
  return  `https://bayut-production.s3.eu-central-1.amazonaws.com/image/${src}` ;
}

const Banner = ({ purpose, imageUrl, linkName, desc1, title, title2, buttonText, desc2, myloader })=>(
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image  loader={myloader} src={imageUrl} width={500} height={300} alt='banner'/>
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>
      <Text color='gray.500' fontSize='sm' fontWeight='bold'>{title}<br/>{title2}</Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br/>{desc2}</Text>
      <Button fontSize='x1'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)



export default function Home({propertiesForRent, propertiesForSale }) {
  
  return (
    <Box >
      <Banner
      myloader={myloader}
       purpose='RENTA A HOME'
       title='Rental home for'
       title2='Everyone'
       desc1='Explore apartments, Villas, Homes'
       desc2='and more'
       buttonText='Explore Renting'
       linkName='/search?purpose=for-rent'
       imageUrl='145426814/33973352624c48628e41f2ec460faba4'
       />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property)=><Property property={property} key={property.id}/>)}
    </Flex>

      <Banner
      myloader={myloader}
       purpose='BUY A HOME'
       title='Find, Buy & Own Your'
       title2='Dream Home'
       desc1='Explore apartments, Villas, Homes'
       desc2='and more'
       buttonText='Explore Renting'
       linkName='/search?purpose=for-sale'
       imageUrl='110993385/6a070e8e1bae4f7d8c1429bc303d2008'
       />
       
       <Flex flexWrap='wrap'>
      {propertiesForSale.map((property)=><Property property={property} key={property.id}/>)}
    </Flex>
       
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}