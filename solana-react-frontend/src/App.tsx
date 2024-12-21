import { AppBar } from "./components/AppBar.component";
import { PingContainer } from "./components/PingContainer.component";
import { WalletContextProvider } from "./components/WallerContext.provider";

export const App = () => (
  <WalletContextProvider>
    <AppBar />
    <PingContainer />
  </WalletContextProvider>
);
