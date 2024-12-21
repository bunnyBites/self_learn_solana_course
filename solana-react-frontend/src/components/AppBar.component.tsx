import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const AppBar: React.FC = () => (
  <nav className="navbar bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="#">
        <img
          src="/vite.svg"
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        Solana
      </a>
      <div className="ms-auto">
        <WalletMultiButton />
      </div>
    </div>
  </nav>
);
