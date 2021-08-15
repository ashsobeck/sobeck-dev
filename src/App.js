import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" rounded="md" />
            <Text>
              🚧 Hi! We're currently undergoing some construction. 🚧
            </Text>
            <Text>We'll be up and running in no time! </Text>
            <Text >
              View My Progress 
              <Link
                ml={1}
                color="teal.500"
                href="https://github.com/ashsobeck"
                fontSize="xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                 Here!
              </Link>
            </Text>
            
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
