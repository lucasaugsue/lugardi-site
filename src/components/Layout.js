import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B070F] text-white">
      {/* Header */}
      <Header />

      {/* Conteúdo Principal */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
