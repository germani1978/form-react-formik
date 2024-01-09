import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Card = ({ title, description, imageSrc }) => {
    return (
        <VStack align="start" bgColor="white" color="black" rounded="5">
            <Image src={imageSrc} rounded="5" alt={title} />
            <Heading m="5">{title}</Heading>
            <Text ml="5" color="gray">
                {description}
            </Text>
            <HStack m="5">
                <Text>{'See more'}</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
        </VStack>
    )
}

export default Card
