import { useContext } from 'react'
import Image from 'next/image'
import { Box, Icon, Flex } from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LeftArrow = ()=>{
    const { scrollPrev } = useContext(VisibilityContext) 

    return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex> 
    )
}

const RightArrow = ()=>{
    const { scrollNext } = useContext(VisibilityContext) 

    return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
      />
    </Flex> 
    )
}



 const ImageScrollbar =({data})=>{ 
   const myloader = ({src, quality})=>{
     return  `${src}` ;
  }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
    {data.map((item) => (
      <Box width='910px' itemId={item.id} overflow='hidden' p='1' key={item.id}>
        <Image  loader={myloader} placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}   alt='Imggen'/>
      </Box>
    ))}
  </ScrollMenu>
  );
}
export default ImageScrollbar




