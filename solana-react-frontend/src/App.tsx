import { AppBar } from "./components/AppBar.component";
import { PingContainer } from "./components/PingContainer.component";
import { WalletContextProvider } from "./components/WallerContext.provider";
import "./App.css";

export const App = () => (
  <div className="app-content-wrapper">
    <WalletContextProvider>
      <AppBar />
      <PingContainer />
    </WalletContextProvider>
  </div>
);
