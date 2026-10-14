import { Route, Routes } from "react-router";

import { HomePage } from "@/pages/Home";

function App() {
  return (
    <Routes>
      <Route index path="/" Component={HomePage} />
    </Routes>
  );
}

export default App;
