import Header from '@comp/header'

function Layout({ children }) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
