import React from 'react'
import { useState } from 'react'
import { Box, Flex, Text, Button } from 'rebass/styled-components'
import styled from 'styled-components'
import { Colour } from '../../util/constants'
import ContactAnimation from '../contactAnimation'
import TextField from '../textField'

const GridStyle = styled(Box)`
  position: relative;
  display: grid;
  height: 100%;
  width: 1366px;
`

const ContactSection = () => {
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
          Contact.
        </Text>
        <Box
          sx={{
            gridColumn: ['1', '3 / span 2'],
            gridRow: '1 / span 2',
            display: ['none', 'flex'],
            alignItems: 'flex-end',
          }}
        >
          <ContactAnimation />
        </Box>
        <Box
          as="form"
          onSubmit={formSubmit}
          sx={{ gridColumn: ['1', '2'] }}
          px={[5, 0]}
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
            <Button
              as={'input'}
              type="submit"
              height={44}
              px={[4]}
              bg="white"
              color={'black'}
              sx={{
                border: '0.5px solid black',
                borderRadius: 0,
                outline: 'none',
                cursor: 'pointer',
                '@media (hover:hover) and (pointer: fine)': {
                  ':hover': {
                    borderColor: Colour.primaryLight,
                  },
                },
                ':active': {
                  borderColor: Colour.primary,
                  color: Colour.primary,
                },
              }}
              value={'send'}
            />
          </Flex>
        </Box>
      </GridStyle>
      <Box flex={1} />
    </Flex>
  )
}

export default ContactSection
