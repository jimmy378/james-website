import React, { useEffect } from 'react'
import { FC, useState } from 'react'
import { Box } from 'rebass/styled-components'
import { Input, Textarea } from '@rebass/forms/styled-components'
import { Colour } from '../util/constants'

type Props = {
  type: string
  placeholder: string
  onUpdate(input: string): void
  textArea?: boolean
}

const TextField: FC<Props> = ({
  type,
  placeholder,
  onUpdate,
  textArea = false,
}) => {
  const [input, setInput] = useState('')
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    onUpdate(input)
  }, [input])

  return (
    <Box width={1} sx={{ position: 'relative' }}>
      {!textArea ? (
        <Input
          type={type}
          placeholder={placeholder}
          value={input}
          onChange={input => setInput(input.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          autoComplete="new-password"
        />
      ) : (
        <Textarea
          placeholder={placeholder}
          value={input}
          onChange={input => setInput(input.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          variant={'textArea'}
          autoComplete="new-password"
        />
      )}
      <Box
        height={0.5}
        bg={Colour.primary}
        width={1}
        sx={{
          transform: `scaleX(${focus ? 1 : 0})`,
          transformOrigin: 'left',
          transition: 'transform 0.5s ease',
          zIndex: 10,
          position: 'absolute',
        }}
      />
      <Box
        height={0.5}
        bg={'black'}
        sx={{
          transform: `scaleX(${focus ? 0 : 1})`,
          transformOrigin: 'right',
          transition: 'transform 0.5s ease',
        }}
      />
    </Box>
  )
}

export default TextField
