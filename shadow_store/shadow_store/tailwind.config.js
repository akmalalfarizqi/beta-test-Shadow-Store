module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1a1a2e", // Deep gaming foundation
        secondary: "#16213e", // Subtle interface depth
        accent: "#0f4c75", // Interactive elements
        
        // Background Colors
        background: "#eee2dc", // Clean content canvas
        surface: "#f8f6f0", // Card backgrounds
        
        // Text Colors
        'text-primary': "#2d3436", // Extended reading comfort
        'text-secondary': "#636e72", // Supporting information
        
        // Status Colors
        success: "#00b894", // Transaction confirmation - green-500
        warning: "#fdcb6e", // Attention without alarm - yellow-300
        error: "#e17055", // Clear problems - red-400
        
        // Additional Gaming Theme Colors
        'gaming-dark': "#0d1117", // Deep gaming background
        'gaming-blue': "#58a6ff", // Gaming accent blue
        'gaming-purple': "#8b5cf6", // Gaming accent purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'gaming': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'gaming-elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'gaming-hover': '0 8px 12px -2px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'gaming': '8px',
        'gaming-lg': '12px',
        'gaming-xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'pulse-gaming': 'pulseGaming 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGaming: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'gaming': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}