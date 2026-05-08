import "./App.css";

function App() {
  return (
    <div className="page-shell">
      <div className="marquee-wrap">
        <div className="marquee">
          <span>LIVRAISON PARTOUT AU MAROC</span>
          <span>PIÈCES UNIQUES</span>
          <span>AUTHENTIC VINTAGE</span>
          <span>PAIEMENT À LA LIVRAISON</span>
          <span>LIVRAISON PARTOUT AU MAROC</span>
          <span>PIÈCES UNIQUES</span>
          <span>AUTHENTIC VINTAGE</span>
          <span>PAIEMENT À LA LIVRAISON</span>
        </div>
      </div>

      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">E.</span>
          <span className="brand-name">TERNAL THRIFT</span>
        </div>

        <nav className="site-nav">
          <a href="#accueil">ACCUEIL</a>
          <a href="#catalogue">CATALOGUE</a>
          <a href="#apropos">À PROPOS</a>
        </nav>

        <a className="shop-link" href="#shop">
          SHOP
        </a>
      </header>

      <main className="hero" id="accueil">
        <span className="hero-tag">EST. CASABLANCA · VOL. 03</span>
        <h1>VINTAGE N'EST PAS UNE TENDANCE.</h1>
        <p className="hero-copy">
          Pièces uniques chinées. Vibes 90s/Y2K. Pas de restock — quand c'est parti,
          c'est parti.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#catalogue">
            VOIR LA COLLECTION →
          </a>
          <a className="btn btn-secondary" href="https://instagram.com" target="_blank" rel="noreferrer">
            DM INSTAGRAM
          </a>
        </div>
      </main>

      <section className="featured-panel">
        <div className="featured-content">
          <span className="subtitle">DROP / 04</span>
          <h2>FRESHLY THRIFTED</h2>
          <p>Nouvel arrivage sélectionné à la main. Chaque pièce a son histoire.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
          alt="Vintage clothing showcase"
        />
      </section>

      <section className="catalogue" id="catalogue">
        <div className="catalogue-header">
          <span className="subtitle">DROP / 04</span>
          <h2>FRESHLY THRIFTED</h2>
          <a className="catalogue-link" href="#shop">
            TOUT VOIR →
          </a>
        </div>

        <div className="product-grid">
          <article className="product-card">
            <div className="product-tag">'00S</div>
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80" alt="Bruituer Shaties Tee" />
            <div className="product-meta">
              <div>
                <strong>Bruiter Shaties Tee</strong>
                <p>Tees · L</p>
              </div>
              <span>280 DH</span>
            </div>
          </article>

          <article className="product-card">
            <div className="product-tag">'90S</div>
            <img src="https://images.unsplash.com/photo-1520975924276-5d6d27810bb1?auto=format&fit=crop&w=800&q=80" alt="Washed Denim Jacket" />
            <div className="product-meta">
              <div>
                <strong>Washed Denim Jacket</strong>
                <p>Vestes · M</p>
              </div>
              <span>450 DH</span>
            </div>
          </article>

          <article className="product-card">
            <div className="product-tag">'90S</div>
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80&sat=-30" alt="Black Biker Leather" />
            <div className="product-meta">
              <div>
                <strong>Black Biker Leather</strong>
                <p>Vestes · M</p>
              </div>
              <span>890 DH</span>
            </div>
          </article>

          <article className="product-card">
            <div className="product-tag">'00S</div>
            <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80" alt="Khaki Cargo Pants" />
            <div className="product-meta">
              <div>
                <strong>Khaki Cargo Pants</strong>
                <p>Pantalons · 32</p>
              </div>
              <span>320 DH</span>
            </div>
          </article>
        </div>
      </section>

      <section className="feature-row" id="apropos">
        <div className="feature-card">
          <span className="feature-icon">💵</span>
          <strong>Cash à la livraison</strong>
          <p>Tu payes quand tu reçois. Zéro stress.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <strong>Livraison 24-72h</strong>
          <p>Casa, Rabat, Marrakech, Tanger & partout.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">♻️</span>
          <strong>Pièces uniques</strong>
          <p>Chiné à la main. Une seule par taille.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
