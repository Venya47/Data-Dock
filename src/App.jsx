import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/my-files" element={<MyFiles/>} />
        <Route path="/subscriptions" element={<Subscription/>} />
        <Route path="/transactions" element={<Transactions/>} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;