import { Stack, Typography, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Colors } from "../../assets/color";
import { columns } from "../../constants/columns";
import { useState } from "react";
import { TUser } from "../../models/user";
import { generateRandomData } from "../../utils/data";

const pageSize = 10;

export default function Test2() {
  const [page, setPage] = useState(1);

  const rows: TUser[] = generateRandomData(100);
  const count = Math.round(rows.length / pageSize);

  return (
    <Stack sx={{ marginY: 2 }}>
      <DataGrid
        paginationModel={{
          pageSize: 10,
          page,
        }}
        sx={{
          ".MuiDataGrid-cell": {
            background: Colors.grey,
            fontFamily: "Dosis",
            fontSize: "14px",
          },
          ".MuiDataGrid-columnHeaderTitle": {
            fontFamily: "Dosis",
            fontSize: "14px",
            fontWeight: "bold",
          },
          ".MuiButtonBase-root": {
            ".MuiSvgIcon-root": {
              width: "20px",
              height: "20px",
            },
          },
          ".MuiDataGrid-withBorderColor": {
            borderColor: "transparent",
          },
          borderWidth: 0,
        }}
        columns={columns}
        rows={rows}
        checkboxSelection
        hideFooter
      />
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontFamily: "Dosis",
          }}
        >{`${rows.length} results`}</Typography>
        <Pagination
          sx={{
            fontFamily: "Dosis",
            fontSize: "14px",
            ".Mui-selected": {
              background: Colors.white,
              border: `1px solid ${Colors.grey2}`,
            },
          }}
          onChange={(e, page) => {
            setPage(page);
          }}
          count={count}
          page={page}
          shape="rounded"
        />
      </Stack>
    </Stack>
  );
}
