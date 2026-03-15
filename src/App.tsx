import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header animate-fade">
        <div className="container">
          <nav>
            <div className="logo">Sally Dragon Studio</div>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="animate-fade">聖龍の隠れ家へようこそ</h1>
            <p className="subtitle animate-fade" style={{ animationDelay: '0.3s' }}>
              世界の裏を知る者が、こっそり頼る。本物の秘匿鑑定。
            </p>
            <div className="cta-group animate-fade" style={{ animationDelay: '0.6s' }}>
              <button className="btn-primary">鑑定を予約する</button>
              <button className="btn-secondary">詳細を見る</button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>Soul Of Sally Dragon</h2>
            <div className="grid">
              <div className="text-block">
                <p>
                  神道の家系に生まれ、イギリスで研鑽を積んだ本物の占術。
                  タロット、トランプ、そして霊視。
                  海外の第一線で活躍する日本人の皆様へ、静寂と叡智を届けます。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Sally Dragon Studio. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
