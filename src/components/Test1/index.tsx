import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { rgb } from "../../utils/color";

export default function Test1() {
  const [r, setR] = useState<number>(0);
  const [g, setG] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  const convertColor = rgb(r, g, b);

  return (
    <Stack className="borderBackground">
      <Typography>Logic Test : Convert RGB</Typography>
      <TextField
        sx={{
          padding: 1,
        }}
        type="number"
        value={r}
        onChange={(event) => setR(parseInt(event.target.value))}
      />
      <TextField
        sx={{
          padding: 1,
        }}
        type="number"
        value={g}
        onChange={(event) => setG(parseInt(event.target.value))}
      />
      <TextField
        sx={{
          padding: 1,
        }}
        type="number"
        value={b}
        onChange={(event) => setB(parseInt(event.target.value))}
      />
      <Typography>{convertColor}</Typography>
      <Typography
        padding={1}
        sx={{
          background: convertColor,
        }}
      />
    </Stack>
  );
}
