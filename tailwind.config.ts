import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        background: '#000000',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // Neon colors
                        neon: {
                                pink: '#FF0072',
                                purple: '#9B60F5',
                                blue: '#3EA6FF',
                                gradient: 'linear-gradient(135deg, #FF0072, #9B60F5, #3EA6FF)'
                        }
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                fontFamily: {
                        mono: ['JetBrains Mono', 'monospace']
                },
                animation: {
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'float': 'float 3s ease-in-out infinite',
                        'rotate': 'rotate 360s linear infinite'
                },
                keyframes: {
                        glow: {
                                '0%': { boxShadow: '0 0 5px #FF0072, 0 0 10px #FF0072, 0 0 15px #FF0072' },
                                '100%': { boxShadow: '0 0 10px #9B60F5, 0 0 20px #9B60F5, 0 0 30px #9B60F5' }
                        },
                        float: {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-10px)' }
                        },
                        rotate: {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg)' }
                        }
                }
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;
