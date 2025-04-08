import { ModalProvider } from "./context/ModalContext";
import "./ui/globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
