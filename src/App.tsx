import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestPage from "./components/test";
import TodoListWrapper from "./components/TodoListWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListWrapper />} />
        <Route path="test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
