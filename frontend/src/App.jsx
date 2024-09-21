import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Box minHeight="100vh">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<Createpage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
