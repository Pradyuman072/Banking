import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";


export default function Home() {
  const loggedIn = { firstName: "Pradyuman",lastName:"Sharma",email:"pradyumanshimla@gmail.com" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Guest"} subtext="Access and manage your accout and transactions efficiently." />
          <BalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1489002.23} />
        </header>
        Recent Transactions
       
      </div> 
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:1000000},{currentBalance:999999}]}
      />

    </section>
  );
}
