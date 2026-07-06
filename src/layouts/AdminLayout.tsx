import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#f5f5f5",
        }}
      >
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
