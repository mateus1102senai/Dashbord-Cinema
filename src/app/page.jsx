import styles from "./page.module.css";
import Header from "../components/header";
import Menu from "../components/menu";
import Sidebar from "../components/menu";

export default function Home() {
  return (
   <div>  
<Header/>

<main class="dashboardContainer">
<Sidebar/>
</main>
   </div>
  );
}
