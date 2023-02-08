import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FunFunFun!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    
        <div id="wheel-container">
          <div id="wheel"></div>
          <button id="spin-button">Spin</button>
        </div>
    
        <script>
          const wheel = document.getElementById("wheel");
          const spinButton = document.getElementById("spin-button");
          const sectors = [ "Prize 1", "Prize 2", "Prize 3", "Prize 4", "Prize 5", "Lose" ];

          spinButton.addEventListener("click", function() {
            let sectorNumber = Math.floor(Math.random() * sectors.length);
            wheel.innerHTML = sectors[sectorNumber];
          });

        </script>

    
        <hr>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
