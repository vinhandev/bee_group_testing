import { Stack, Tooltip, Typography, IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Colors } from "../assets/color";
import { formatDate, formatDetailDate } from "../utils/date";
import { formatMoney } from "../utils/money";
import { TUser } from "../models/user";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";

type NewType = GridColDef<TUser>;

export const columns: NewType[] = [
  {
    field: "name",
    headerName: "Name",
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
  },
  {
    field: "balance",
    headerName: "Balance ($)",
    disableColumnMenu: true,
    sortable: false,

    renderCell: (params) => {
      return formatMoney(params.row.balance || 0);
    },
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const email = params.row.email || "";
      return (
        <Stack
          onClick={() => (window.location.href = `mailto:${email}`)}
          sx={{
            fontFamily: "Dosis",
            fontSize: "14px",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          {email}
        </Stack>
      );
    },
  },
  {
    field: "registerAt",
    headerName: "Registration",
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      const registerAt = params.row.registerAt;
      const date = formatDate(registerAt);
      return (
        <Tooltip title={formatDetailDate(registerAt)}>
          <Typography
            sx={{
              fontFamily: "Dosis",
              fontSize: "14px",
            }}
          >
            {date}
          </Typography>
        </Tooltip>
      );
    },
  },
  {
    field: "status",
    headerName: "STATUS",
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => {
      return (
        <Stack
          sx={{
            paddingX: 1,
            paddingY: "5px",
            borderRadius: "20px",
            fontFamily: "Dosis",
            fontSize: "14px",
            fontWeight: "bold",
            border: `2px solid ${Colors.grey2}`,
          }}
        >
          Status
        </Stack>
      );
    },
    flex: 2,
  },
  {
    field: "action",
    headerName: "ACTION",
    width: 90,
    sortable: false,
    disableColumnMenu: true,
    renderCell: () => {
      return (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton size="small">
            <EditOutlinedIcon />
          </IconButton>
          <IconButton size="small">
            <DeleteOutlinedIcon />
          </IconButton>
        </Stack>
      );
    },
  },
];
