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
import { Button, ItemsList } from './styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export function ManageUsers() {
  const { container } = useStyles()
  const [inputValue, setInputValue] = useState('')
  const [isActionsOpened, setIsActionsOpened] = useState(false)

  const handleToggleActionsOpened = (state: boolean) => {
    setIsActionsOpened(state)
  }

  return (
    <Container maxWidth='lg' className={container}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder='Digite um nome...'
          legendText='Procurar'
        />
        <Button
          isActive={isActionsOpened}
          onClick={() => handleToggleActionsOpened(!isActionsOpened)}
        >
          <MoreHorizIcon />
          Ações em massa
          <ItemsList>
            <button>Ativar todos</button>
            <button>Desativar todos</button>
          </ItemsList>
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
