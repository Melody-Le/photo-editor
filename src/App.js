import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ImageField from "./components/ImageField";
const theme = createTheme({
  components: {
    fontFamily: "Roboto Mono, monospace",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container sx={{ marginTop: "4rem", marginBottom: "4rem" }}>
          <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1>Image filter</h1>
          </Box>
          <Grid container spacing={10}>
            <ImageField />
            <Grid item xs={12} md={5}>
              Filter
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
