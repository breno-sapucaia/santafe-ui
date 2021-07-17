import { Dispatch, HTMLProps, SetStateAction } from 'react'
import { Container } from './styles'
import SearchIcon from '@material-ui/icons/Search'
import { DebounceInput } from 'react-debounce-input'

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
  legendText: string
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
}

export const Input = ({
  inputValue,
  setInputValue,
  legendText,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <legend>{legendText}</legend>
      <DebounceInput
        {...rest}
        debounceTimeout={400}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span className='activeBorder' />
      <SearchIcon />
    </Container>
  )
}
