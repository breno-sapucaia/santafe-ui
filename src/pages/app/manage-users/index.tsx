import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import { useState } from 'react'
import ClientsTable from '../../../components/private/ClientsTable'
import { Input } from '../../../components/private/Input'

export function ManageUsers() {
  const { container } = useStyles()
  const [inputValue, setInputValue] = useState('')

  return (
    <Container maxWidth='lg' className={container}>
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder='Digite um nome...'
        legendText='Procurar'
      />
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
