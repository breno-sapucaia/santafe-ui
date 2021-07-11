import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { useEffect, useState } from 'react'
import { clientsData } from '../../../mock'

interface ClientsTable {
  searchTerm: string
}

export default function ClientsTable({ searchTerm }: ClientsTable) {
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 200,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 150,
    },
    {
      field: 'clientRefId',
      headerName: 'Código do Cliente',
      type: 'number',
      width: 200,
      editable: true,
    },
  ]
  const [rowsData, setRowsData] = useState(clientsData)

  const filterRows = () => {
    setRowsData(
      clientsData.filter((row) =>
        row.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }

  useEffect(() => {
    filterRows()
  }, [searchTerm])

  return (
    <div style={{ height: '80vh', width: '100%', marginTop: '10px' }}>
      <DataGrid
        rows={rowsData}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
