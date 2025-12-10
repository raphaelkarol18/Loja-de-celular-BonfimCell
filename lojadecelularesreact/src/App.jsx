import React, { useState } from "react";

const logo =
  "https://cdn-icons-png.flaticon.com/512/1042/1042339.png";

export default function App() {
  const [dark, setDark] = useState(false); // tema claro/escuro

  return (
    <div style={{ ...styles.container, backgroundColor: dark ? "#111" : "#F5F5F7" }}>
      
      {/* NAVBAR */}
      <nav style={{ 
        ...styles.nav, 
        backgroundColor: dark ? "#000" : "#002B5B"
      }}>
        
        {/* LOGO + NOME */}
        <div style={styles.navLeft}>
          <img src={logo} style={styles.logo} />
          <h1 style={styles.navTitle}>BonfimCell</h1>
        </div>

        {/* LINKS */}
        <ul style={styles.navLinks}>
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>Produtos</li>
          <li style={styles.navItem}>Contato</li>
        </ul>

        {/* AÇÕES */}
        <div style={styles.navRight}>
          
          {/* Ícone do carrinho */}
          <span style={styles.cartIcon}>🛒</span>

          {/* Botão de tema */}
          <button
            onClick={() => setDark(!dark)}
            style={styles.themeButton}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* BANNER */}
      <section style={{ 
        ...styles.banner, 
        backgroundColor: dark ? "#1A1A1A" : "#1A73E8" 
      }}>
        <h2 style={styles.bannerText}>
          Os melhores celulares, pelo melhor preço!
        </h2>
      </section>

      {/* PRODUTOS */}
      <section style={styles.productsSection}>
        <h2 style={styles.sectionTitle}>Destaques da Semana</h2>

        <div style={styles.productsGrid}>
          
          {/* CARD EXEMPLO */}
          {productList.map((p) => (
            <div 
              key={p.title} 
              style={{ 
                ...styles.card, 
                backgroundColor: dark ? "#222" : "#FFF",
                color: dark ? "#EEE" : "#000"
              }}>
              
              <img src={p.img} style={styles.cardImage} />
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p style={styles.cardPrice}>{p.price}</p>
              <button style={styles.button}>Comprar</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* -------- LISTA DE PRODUTOS ---------- */

const productList = [
  {
    title: "iPhone 14",
    price: "R$ 4.899,00",
    img: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX679_.jpg"
  },
  {
    title: "Samsung S23",
    price: "R$ 3.999,00",
    img: "https://m.media-amazon.com/images/I/71HbHtYzfHL._AC_SX679_.jpg"
  },
  {
    title: "Xiaomi Redmi Note 12",
    price: "R$ 1.299,00",
    img: "https://m.media-amazon.com/images/I/71QE00iB9XL._AC_SY741_.jpg"
  },
];


/* -------- ESTILOS ---------- */

const styles = {
  container: {
    minHeight: "100vh",
  },

  /* NAVBAR */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    color: "white",
  },

  navLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  navTitle: {
    margin: 0,
    fontSize: "24px",
  },

  logo: {
    width: "40px",
  },

  navLinks: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontSize: "18px",
  },

  navItem: {
    cursor: "pointer",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  cartIcon: {
    fontSize: "26px",
    cursor: "pointer",
  },

  themeButton: {
    backgroundColor: "#1A73E8",
    border: "none",
    color: "white",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  /* BANNER */
  banner: {
    padding: "50px 20px",
    textAlign: "center",
    color: "white",
  },

  bannerText: {
    fontSize: "28px",
    margin: 0,
  },

  /* PRODUTOS */
  productsSection: {
    padding: "30px",
  },

  sectionTitle: {
    marginBottom: "20px",
    fontSize: "24px",
  },

  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },

  cardImage: {
    width: "100%",
    borderRadius: "10px",
  },

  cardTitle: {
    margin: "10px 0 5px",
    fontSize: "18px",
  },

  cardPrice: {
    margin: "0 0 10px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#002B5B",
  },

  button: {
    backgroundColor: "#1A73E8",
    border: "none",
    padding: "10px 20px",
    color: "#FFF",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  },
};
