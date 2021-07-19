import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { useState } from 'react'
import ClientsTable from '../../../components/private/ClientsTable'
import { Input } from '../../../components/private/Input'
import { Button } from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export function ManageUsers() {
  const { container } = useStyles()
  const [inputValue, setInputValue] = useState('')

  return (
    <Container maxWidth='lg' className={container}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder='Digite um nome...'
          legendText='Procurar'
        />
        <Button>
          <MoreHorizIcon />
          Ações em massa
        </Button>
      </Box>
      <ClientsTable searchTerm={inputValue} />
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(2),
    },
  })
)
