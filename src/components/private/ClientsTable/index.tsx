import { TablePagination } from '@material-ui/core'
import {
  DataGrid,
  GridColDef,
  GridEditRowModelParams,
  GridPageChangeParams,
  GridRowId,
  GridSelectionModelChangeParams,
  useGridSlotComponentProps,
} from '@material-ui/data-grid'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
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
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
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

  const handleChangePage = ({ page }: GridPageChangeParams) => {
    setPage(page)
  }

  const handleChangeRowsPerPage = ({ pageSize }: GridPageChangeParams) => {
    setRowsPerPage(pageSize)
    // setPage(0)
  }

  useEffect(() => {
    filterRows()
  }, [searchTerm])

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
        pageSize={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onPageSizeChange={handleChangeRowsPerPage}
      />
    </div>
  )
}
