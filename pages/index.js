import { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { Card, CardBody, Button, Flex, Center, useColorMode, VStack, Text, Avatar, useToast, Tooltip } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Meta from '@/component/meta';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode, toggleColorMode);

  const toast = useToast();
  const { data: session, loading } = useSession()

  useEffect(() => {
    if (session && !loading) {
      toast({
        title: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [session, loading]);

  return (
    <>
      <Meta />
      <Flex height='100vh' w='100%' align='center' justify='center'>
        <Card w='300px'>
          <CardBody>
            <VStack spacing={3}>
              {session ?
                <>
                  <Center>
                    <Text mb={0} pb={0}> Signed in as</Text>
                  </Center>
                  <Center>
                    <Text >{session.user.name}
                      <Text fontSize='xs' color='grey'>{session.user.email}</Text>
                    </Text>
                  </Center>
                  <Avatar size='xl' name={session.user.name} src={session.user.image}>
                  </Avatar>

                  <Button onClick={() => signOut()}>Sign out</Button>
                </>
                :
                <>
                  <Center> <Text>Not signed in </Text></Center>
                  <Center>
                    <Button size='lg' w='100%' onClick={() => signIn('google')}>
                      <img src="/goofrog.png" height={20} width={20} /> <Text ml={2}>Sign in Google</Text>
                    </Button>
                  </Center>
                </>
              }
              <Tooltip hasArrow label={colorMode === "dark" ? "Light Mode" : "Dark Mode"}>
                <Button colorScheme="teal" onClick={toggleColorMode}>{colorMode === "dark" ? <SunIcon /> : <MoonIcon />}</Button>
              </Tooltip>
            </VStack >
          </CardBody>
        </Card>
      </Flex>
    </>
  )
}
