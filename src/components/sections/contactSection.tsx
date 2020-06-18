import React, { FC, useContext } from 'react'
import { useState } from 'react'
import { Box, Flex, Text, Button } from 'rebass/styled-components'
import styled from 'styled-components'
import TextField from '../textField'
import Spinner from '../spinner'
import WindowContext from '../../context/windowContext'
import loadable from '@loadable/component'
const Animation = loadable(() => import('../animations/contactAnimation'))

const GridStyle = styled(Box)`
  position: relative;
  display: grid;
  height: 100%;
  width: 1366px;
`

const ContactSection: FC<{ data: IHome }> = ({ data }) => {
  const { isMobile } = useContext(WindowContext)
  const [animationLoading, setAnimationLoading] = useState(true)
  const [sendMessage, setSendMessage] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const formSubmit = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setSendMessage('Message sent')
      } else {
        setSendMessage('Message not sent')
      }
    }
    xhr.send(data)
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
          textAlign={'left'}
          px={[4]}
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
          <Animation setLoading={setAnimationLoading} />
        </Box>
        <Box
          as="form"
          sx={{ gridColumn: ['1', '2'] }}
          px={[4, 0]}
          mb={['200px', 5]}
          action="https://formspree.io/xpzyrbgw"
          method="POST"
          onSubmit={formSubmit}
        >
          <Box maxWidth={['100%', '400px']}>
            <TextField
              type={'text'}
              placeholder={'Name'}
              required={true}
              onUpdate={setName}
              name={'Name'}
            />
          </Box>
          <Box mb={[2]} />
          <Box maxWidth={['100%', '400px']}>
            <TextField
              type={'email'}
              placeholder={'Email'}
              required={true}
              onUpdate={setEmail}
              name={'email'}
            />
          </Box>
          <Box mb={[2]} />
          <TextField
            type={'text'}
            placeholder={'Message'}
            required={true}
            onUpdate={setMessage}
            textArea={true}
            name={'message'}
          />
          <Box mb={[3]} />
          <Flex justifyContent="flex-end" alignItems="center">
            <Text flex={1} color="primary">
              {sendMessage}
            </Text>
            <Button
              as={'input'}
              type="submit"
              value={'send'}
              variant={isMobile ? 'mobile' : 'primary'}
            />
          </Flex>
        </Box>
      </GridStyle>
      <Box flex={1} />
    </Flex>
  )
}

export default ContactSection
