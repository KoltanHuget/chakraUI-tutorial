import { Box, Image, Button, Container, Heading, Grid, Badge } from "@chakra-ui/react"
import brandLogo from '../assets/brand-logo.svg'
import illustration from '../assets/illustration.svg'
import imageOne from '../assets/image-one.jpg'
import imageTwo from '../assets/image-two.jpg'
import imageThree from '../assets/image-three.jpg'
import Pill from "./Pill"


const Banner = () => {
  return (
    <>
      <header>
        <Box d='flex' alignItems="center" justifyContent="space-between" ml={6} mr={6}>
          <Box>
            <Image boxSize="90px" src={brandLogo} alt="brand" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize='sm' variant='link'>Log in</Button>
            <Button colorScheme="gray.600" fontSize='sm' variant='link'>Sign up</Button>
          </Box>
        </Box>
        </header>

        <Box>
          <Container maxWidth="container.xl">
            <Box d="flex" alignItems="center" py="20" flexDirection="row">
              <Box mr="6">
                <Heading as="h1" size="2x1">
                  <Box fontWeight="black" fontSize="3xl" letterSpacing="tight">Dive in! There are so many things to do in Meetup!
                  </Box>
                </Heading>
                <Box mt="6" fontWeight="medium">
                  Join a group to meet people, make friends, find support, grow a business, and explore your interests. Thousands of events are happening every day, both online and in person!
                </Box>
              </Box>
              <Box w="100%">
                <Image w="100%" src={illustration} alt="illustration" />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* three boxes */}

        <Container maxW="container.xl" mt={2}>
          <Grid templateColumns="repeat(3, 1fr)">
            <Box mr="2">
              <Image w="100%" borderRadius="lg" src={imageOne} alt="image one" />
              <Button colorScheme="teal" variant="link" mt="5">Make new friends</Button>
              
            </Box>
            <Box mr="2">
            <Image w="100%" borderRadius="lg" src={imageTwo} alt="image two"/>
            <Button colorScheme="teal" variant="link" mt="5">Explore the outdoors</Button>
           
            </Box>
            <Box>
            <Image w="100%" borderRadius="lg" src={imageThree} alt="image three" />
            <Button colorScheme="teal" variant="link" mt="5">Connect over tech</Button>
            
            </Box>

          </Grid>
        </Container>


        {/* pills  */}

        <Container maxW="container.xl">
          <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between" my="10">
            <Pill text="Boost your career"/>
            <Pill text="Find your zen"/>
            <Pill text="Get moving"/>
            <Pill text="Share language + culture"/>
            <Pill text="Read with friends"/>
            <Pill text="Write together"/>
            <Pill text="Hone your craft"/>
          </Box>
        </Container>

      </>
  )
}

export default Banner