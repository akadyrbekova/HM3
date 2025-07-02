import Navbar from "./component/Navbar";
import Note from "./component/Note";
import { Notificationprovider } from "./context/DeleteContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Notificationprovider>
      <div className="App">
        <Navbar />
        <Note />
        <AppRoutes />
      </div>
    </Notificationprovider>
  );
}

export default App;
