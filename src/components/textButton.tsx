import React, { FC } from 'react'
import { Text, Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { colors } from '../theme'

const Container = styled(Box)<{ active: boolean; altStyle: boolean }>`
  @media (hover: hover) and (pointer: fine) {
    :hover {
      color: ${p =>
        p.active
          ? p.altStyle
            ? p.theme.colors.secondary
            : p.theme.colors.primary
          : p.altStyle
          ? p.theme.colors.secondaryLight
          : p.theme.colors.primaryLight};
    }
    cursor: pointer;
  }
  color: ${p =>
    p.active
      ? p.altStyle
        ? p.theme.colors.secondary
        : p.theme.colors.primary
      : 'black'};
  :active {
    color: ${p =>
      p.altStyle ? p.theme.colors.secondaryDark : p.theme.colors.primaryDark};
  }
`

type Props = {
  text: string
  active?: boolean
  altStyle?: boolean
}

const TextButton: FC<Props> = ({ text, active = false, altStyle = false }) => {
  return (
    <Container
      sx={{ position: 'relative' }}
      active={active}
      altStyle={altStyle}
      minWidth={'max-content'}
    >
      <Text fontSize={[2]} pb={'5px'} sx={{ transition: 'color 0.25s ease' }}>
        {text}
      </Text>
      <Box
        height={0.5}
        bg={altStyle ? colors.secondary : colors.primary}
        width={active ? 1 : 0}
        sx={{ transition: 'width 0.5s ease' }}
      />
    </Container>
  )
}

export default TextButton
