import { Message } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

const App = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({
      error: false,
      message: "",
    });

    const [weather, setWeather] = useState({
      
    })

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
      {
      }
    } catch (error) {
      console.log(error);

      setError({
        error: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ mt: 2 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Weather App
        </Typography>
        <Box
          sx={{ display: "grid", gap: 2 }}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField
            id="city"
            label="Ciudad"
            variant="outlined"
            size="small"
            required
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={error.error}
            helperText={error.message}
          ></TextField>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={loading}
            loadingIndicator="Cargando..."
          >
            Buscar
          </LoadingButton>
        </Box>

        <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
          {" "}
          Powered by: {""}
          <a
            target="_blank"
            href="https://www.weatherapi.com/"
            title="Weather API"
          >
            WeatherAPI.com
          </a>
        </Typography>
      </Container>
    </>
  );
};

export default App;
