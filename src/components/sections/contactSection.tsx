import React, { FC } from 'react'
import { useState } from 'react'
import { Box, Flex, Text, Button } from 'rebass/styled-components'
import styled from 'styled-components'
import { Colour } from '../../util/constants'
import TextField from '../textField'
import Lottie from 'react-lottie'
import contactData from '../../animations/contact.json'
import Spinner from '../spinner'

const GridStyle = styled(Box)`
  position: relative;
  display: grid;
  height: 100%;
  width: 1366px;
`

const ContactSection: FC<{ data: IHome }> = ({ data }) => {
  const [animationLoading, setAnimationLoading] = useState(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const formSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <Flex height={'100%'}>
      <Box flex={1} />
      <GridStyle
        height={'100%'}
        sx={{
          gridTemplateColumns: [
            '1fr',
            '1fr 3fr 3fr 1fr',
            '170px 1fr 1fr 170px',
          ],
          gridTemplateRows: '80px 1fr',
        }}
      >
        <Text
          fontSize={[6]}
          fontWeight={[2]}
          mb={[4]}
          sx={{ gridColumn: [1, 2] }}
          textAlign={['center', 'left']}
        >
          {data.sections[2].title}.
        </Text>
        <Box
          sx={{
            gridColumn: ['1', '3 / span 2'],
            gridRow: '1 / span 2',
            display: ['none', 'flex'],
            alignItems: 'flex-end',
            position: 'relative',
          }}
        >
          {animationLoading && (
            <Flex
              width="100%"
              height="100%"
              sx={{ position: 'absolute' }}
              justifyContent="center"
              alignItems="center"
            >
              <Spinner />
            </Flex>
          )}
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: contactData,
              rendererSettings: { preserveAspectRatio: 'xMidYMax' },
            }}
            height={'100%'}
            width={'100%'}
            eventListeners={[
              {
                eventName: 'DOMLoaded',
                callback: () => setAnimationLoading(false),
              },
            ]}
          />
        </Box>
        <Box
          as="form"
          onSubmit={formSubmit}
          sx={{ gridColumn: ['1', '2'] }}
          px={[4, 0]}
          mb={['200px', 5]}
        >
          <Box maxWidth={['100%', '400px']}>
            <TextField type={'text'} placeholder={'Name'} onUpdate={setName} />
          </Box>
          <Box mb={[2]} />
          <Box maxWidth={['100%', '400px']}>
            <TextField
              type={'email'}
              placeholder={'Email'}
              onUpdate={setEmail}
            />
          </Box>
          <Box mb={[2]} />
          <TextField
            type={'text'}
            placeholder={'Message'}
            onUpdate={setMessage}
            textArea={true}
          />
          <Box mb={[3]} />
          <Flex justifyContent="flex-end">
            <Button as={'input'} type="submit" value={'send'} />
          </Flex>
        </Box>
      </GridStyle>
      <Box flex={1} />
    </Flex>
  )
}

export default ContactSection
