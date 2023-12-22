import React from 'react'

function Footer() {
  return (
    <footer style={{
        backgroundColor: "#6148FF",
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        fontWeight:"600",
        width: '100%',
        fontFamily:"Montserrat"
      }}>
        &copy; {new Date().getFullYear()} Peduli Belajar
      </footer>
  )
}

export default Footer
