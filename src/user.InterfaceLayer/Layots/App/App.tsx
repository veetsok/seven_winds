import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import OutlayTable from "../../Libraries/UI_KIT/Widgets/OutlayTable.widget";
import * as ST from "./styled/index";

function App() {
  return (
    <ST.Layout>
      <Header />
      <ST.Table>
        <Navbar />
        <OutlayTable />
      </ST.Table>
    </ST.Layout>
  );
}
export default App;
