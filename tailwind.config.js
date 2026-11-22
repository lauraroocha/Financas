/** Mesma configuração de cores/fontes que estava inline no index.html original */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        plum: { DEFAULT: '#4A1D2F', hover: '#381423', light: '#6B2B45', soft: '#F4ECEF' },
        taupe: { DEFAULT: '#8F7B6C', soft: '#D9CFC4', light: '#EFEAE4' },
        cream: { DEFAULT: '#F3EDE4', card: '#FAF7F2', dark: '#E7DFD4' }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
