import "@/globals.css";
import SidebarComponent from "@/components/sidebar/SidebarComponent";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-gray-200 flex flex-row">
        <aside className="h-screen">
          <SidebarComponent />
        </aside>
        <main className="w-full"> {children}</main>
      </body>
    </html>
  );
}
