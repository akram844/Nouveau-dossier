import { FormEvent, useMemo, useState } from "react";
import "./App.css";

type Product = {
  id: number;
  name: string;
  category: string;
  size: string;
  era: string;
  price: number;
  image: string;
  alt: string;
};

type CartItem = Product & {
  quantity: number;
};

type OrderForm = {
  name: string;
  phone: string;
  city: string;
  address: string;
  note: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Skull Washed Tee",
    category: "T-shirt",
    size: "M/L",
    era: "'00S",
    price: 180,
    image: "/products/skull-t-shirt.png",
    alt: "T-shirt noir avec imprimé skull",
  },
  {
    id: 2,
    name: "Rock Princess Tee",
    category: "T-shirt",
    size: "S/M",
    era: "Y2K",
    price: 190,
    image: "/products/rock-princess-tee.png",
    alt: "T-shirt noir Rock Princess avec imprimé rose",
  },
  {
    id: 3,
    name: "True Religion Denim",
    category: "Jeans",
    size: "32",
    era: "'00S",
    price: 420,
    image: "/products/true-religion-denim.png",
    alt: "Jean bleu style True Religion",
  },
];

const initialForm: OrderForm = {
  name: "",
  phone: "",
  city: "",
  address: "",
  note: "",
};

const whatsappNumber = "212600000000";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [form, setForm] = useState<OrderForm>(initialForm);
  const [orderSent, setOrderSent] = useState(false);

  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = cart.length > 0 ? 30 : 0;
  const total = subtotal + deliveryFee;

  const orderSummary = useMemo(
    () =>
      cart
        .map((item) => `${item.quantity}x ${item.name} (${item.size})`)
        .join(", "),
    [cart],
  );

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    setOrderSent(false);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart((currentCart) => currentCart.filter((item) => item.id !== productId));
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    );
  };

  const handleChange = (field: keyof OrderForm, value: string) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  const handleOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const message = [
      "Nouvelle commande E.TERNAL THRIFT",
      "",
      `Articles: ${orderSummary}`,
      `Total: ${total} DH`,
      "",
      `Nom: ${form.name}`,
      `Telephone: ${form.phone}`,
      `Ville: ${form.city}`,
      `Adresse: ${form.address}`,
      form.note ? `Note: ${form.note}` : "",
      "",
      "Paiement a la livraison",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
    setOrderSent(true);
    setCart([]);
    setForm(initialForm);
  };

  return (
    <div className="page-shell">
      <div className="marquee-wrap">
        <div className="marquee">
          <span>LIVRAISON PARTOUT AU MAROC</span>
          <span>PIECES UNIQUES</span>
          <span>AUTHENTIC VINTAGE</span>
          <span>PAIEMENT A LA LIVRAISON</span>
          <span>LIVRAISON PARTOUT AU MAROC</span>
          <span>PIECES UNIQUES</span>
          <span>AUTHENTIC VINTAGE</span>
          <span>PAIEMENT A LA LIVRAISON</span>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Retour a l'accueil">
          <span className="brand-mark">E.</span>
          <span className="brand-name">TERNAL THRIFT</span>
        </a>

        <nav className="site-nav">
          <a href="#accueil">ACCUEIL</a>
          <a href="#catalogue">CATALOGUE</a>
          <a href="#apropos">A PROPOS</a>
        </nav>

        <button className="shop-link" type="button" onClick={() => setIsCartOpen(true)}>
          PANIER <span>{itemCount}</span>
        </button>
      </header>

      <main className="hero" id="accueil">
        <span className="hero-tag">EST. CASABLANCA / DROP 04</span>
        <h1>VINTAGE N'EST PAS UNE TENDANCE.</h1>
        <p className="hero-copy">
          Pieces uniques chineees. Vibes 90s/Y2K. Tu ajoutes au panier, tu laisses tes
          infos, et tu payes seulement a la livraison.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#catalogue">
            SHOP MAINTENANT
          </a>
          <button className="btn btn-secondary" type="button" onClick={() => setIsCartOpen(true)}>
            VOIR PANIER
          </button>
        </div>
      </main>

      <section className="featured-panel">
        <div className="featured-content">
          <span className="subtitle">DROP / 04</span>
          <h2>FRESHLY THRIFTED</h2>
          <p>
            Nouvel arrivage selectionne a la main. Une piece par taille, paiement cash
            quand la commande arrive chez toi.
          </p>
        </div>
        <img src="/products/skull-t-shirt.png" alt="T-shirt skull noir du drop E.Ternal Thrift" />
      </section>

      <section className="catalogue" id="catalogue">
        <div className="catalogue-header">
          <div>
            <span className="subtitle">SHOP</span>
            <h2>PIECES DISPONIBLES</h2>
          </div>
          <button className="catalogue-link" type="button" onClick={() => setIsCartOpen(true)}>
            PANIER ({itemCount})
          </button>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-tag">{product.era}</div>
              <img src={product.image} alt={product.alt} />
              <div className="product-meta">
                <div>
                  <strong>{product.name}</strong>
                  <p>
                    {product.category} / {product.size}
                  </p>
                </div>
                <span>{product.price} DH</span>
              </div>
              <button className="add-button" type="button" onClick={() => addToCart(product)}>
                Ajouter au panier
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-row" id="apropos">
        <div className="feature-card">
          <span className="feature-icon">DH</span>
          <strong>Paiement a la livraison</strong>
          <p>Tu payes quand tu recois ta commande. Aucun paiement en ligne.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">24H</span>
          <strong>Livraison rapide</strong>
          <p>Casa, Rabat, Marrakech, Tanger et partout au Maroc.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">1/1</span>
          <strong>Pieces uniques</strong>
          <p>Chaque article est disponible en quantite limitee.</p>
        </div>
      </section>

      {isCartOpen && (
        <div className="cart-overlay" role="dialog" aria-modal="true" aria-label="Panier">
          <button className="cart-backdrop" type="button" onClick={() => setIsCartOpen(false)} />
          <aside className="cart-panel">
            <div className="cart-header">
              <div>
                <span className="subtitle">COMMANDE</span>
                <h2>Ton panier</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setIsCartOpen(false)}>
                X
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Ton panier est vide.</p>
                <a className="btn btn-primary" href="#catalogue" onClick={() => setIsCartOpen(false)}>
                  Voir le shop
                </a>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.alt} />
                      <div>
                        <strong>{item.name}</strong>
                        <p>
                          {item.size} / {item.price} DH
                        </p>
                        <div className="quantity-controls">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <div>
                    <span>Sous-total</span>
                    <strong>{subtotal} DH</strong>
                  </div>
                  <div>
                    <span>Livraison</span>
                    <strong>{deliveryFee} DH</strong>
                  </div>
                  <div>
                    <span>Total a payer a la livraison</span>
                    <strong>{total} DH</strong>
                  </div>
                </div>

                <form className="checkout-form" onSubmit={handleOrder}>
                  <h3>Infos de livraison</h3>
                  <label>
                    Nom complet
                    <input
                      required
                      value={form.name}
                      onChange={(event) => handleChange("name", event.target.value)}
                      placeholder="Ton nom"
                    />
                  </label>
                  <label>
                    Numero de telephone
                    <input
                      required
                      inputMode="tel"
                      value={form.phone}
                      onChange={(event) => handleChange("phone", event.target.value)}
                      placeholder="06 00 00 00 00"
                    />
                  </label>
                  <label>
                    Ville
                    <input
                      required
                      value={form.city}
                      onChange={(event) => handleChange("city", event.target.value)}
                      placeholder="Casablanca"
                    />
                  </label>
                  <label>
                    Adresse complete
                    <textarea
                      required
                      value={form.address}
                      onChange={(event) => handleChange("address", event.target.value)}
                      placeholder="Quartier, rue, numero, etage..."
                    />
                  </label>
                  <label>
                    Note optionnelle
                    <textarea
                      value={form.note}
                      onChange={(event) => handleChange("note", event.target.value)}
                      placeholder="Taille, horaire prefere, repere..."
                    />
                  </label>
                  <input type="hidden" value={orderSummary} readOnly />
                  <button className="btn btn-primary order-button" type="submit">
                    Confirmer la commande
                  </button>
                </form>
              </>
            )}

            {orderSent && (
              <div className="order-success">
                Commande preparee. WhatsApp s'ouvre avec le recap pour confirmer la
                livraison.
              </div>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
