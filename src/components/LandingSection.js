import React from 'react'
import { Avatar, Heading, VStack } from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'

const greeting = 'Hello, I am Pete!'
const bio1 = 'A frontend developer'
const bio2 = 'specialised in React'

const LandingSection = () => (
    <FullScreenSection justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#2A4365">
        <VStack>
            <Avatar src="https://i.pravatar.cc/150?img=7" />
            <Heading as="h6" size="xs">
                {greeting}
            </Heading>
            <Heading as="h1">{bio1}</Heading>
            <Heading as="h1">{bio2}</Heading>
        </VStack>
    </FullScreenSection>
)

export default LandingSection
