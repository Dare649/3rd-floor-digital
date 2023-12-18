import '@styles/globals.css'
import Nav from "@/components/Nav";
import Home from "./page";
import About from '@app/pages/about/page';
import Services from './pages/services/page';
import Contact from './pages/contactUs/page';

export const metadata = {
    title: "3rdFloor Digital",
    description: "3rdFloor Digital Test"
}

const RootLayout = () => {
  return (
    <html lang='en'>
      <body>
        <Nav/>
        <main >
            <Home/>
            <About/>
            <Services/>
            <Contact/>
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
