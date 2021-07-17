import { TablePagination } from '@material-ui/core'
import {
  DataGrid,
  GridColDef,
  GridEditRowModelParams,
  GridRowId,
  GridSelectionModelChangeParams,
  useGridSlotComponentProps,
} from '@material-ui/data-grid'
import { useCallback, useEffect, useState } from 'react'
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
  const [selectionModel, setSelectionModel] = useState<GridRowId[]>([])
  const [rowsData, setRowsData] = useState(clientsData)

  const handleRowSelection = ({
    selectionModel,
  }: GridSelectionModelChangeParams) => {
    setSelectionModel(selectionModel)
  }

  const handleEditRowModelChange = useCallback(
    ({ model }: GridEditRowModelParams) => {
      console.log('model: ', model)
    },
    []
  )

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

  const CustomPagination = () => {
    const {
      state: { pagination },
      apiRef,
    } = useGridSlotComponentProps()
    console.log('pagination: ', pagination)
    return (
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        count={pagination.pageCount}
        rowsPerPage={10}
        page={pagination.page}
        onChangePage={(event, value) => apiRef.current.setPage(value - 1)}
      />
    )
  }

  return (
    <div style={{ height: '80vh', width: '100%', marginTop: '10px' }}>
      <DataGrid
        onSelectionModelChange={handleRowSelection}
        onEditRowModelChange={handleEditRowModelChange}
        rows={rowsData}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        rowsPerPageOptions={[10, 25, 50, 100]}
        components={{
          Pagination: CustomPagination,
        }}
      />
    </div>
  )
}
