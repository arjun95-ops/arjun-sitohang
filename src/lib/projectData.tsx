import {
    Palette,
    Globe,
    Code,
    Smartphone,
    Layout,
    Share2,
    BookOpen,
    Monitor,
    Wrench,
    PenTool,
    Box,
    Video
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Project {
    id: string;
    title: string;
    category: string;
    downloadUrl: string;
    description: string;
    icon: LucideIcon;
    image?: string;
}

export const projects: Project[] = [
    {

        id: "Karina_about",
        title: "Karina About",
        category: "Website",
        downloadUrl: "https://drive.google.com/file/d/1OeSNpQfhg9cSmOM83wZ0FpBRALK28Tis/view?usp=drive_link",
        description: "About page for Karina",
        icon: Palette, // Biarkan ini sebagai cadangan (fallback)
        // TAMBAHKAN BARIS INI:
        image: "https://res.cloudinary.com/duhroj2yb/image/upload/v1765076466/iconkarina_wmxwma.png",
    },
    {
        id: "Karina_About1",
        title: "Karina About1",
        category: "Website",
        downloadUrl: "https://drive.google.com/file/d/16I5vhMs1-K_VXXaEUhWIjZYn3aCFV6PT/view?usp=drive_link",
        description: "About page for Karina",
        icon: Globe,
        image: "https://res.cloudinary.com/duhroj2yb/image/upload/v1765077865/1conkarina_lootlg.png",

    },
    {
        id: "Karina-Gestures",
        title: "Karina Gestures",
        category: "Website",
        downloadUrl: "https://drive.google.com/file/d/1EtqLCZ8fGek0bxwLx7__sj_fO6gIx1PQ/view?usp=sharing",
        description: "Karina: Gesture Control Landing Page",
        icon: Code,
        image: "https://res.cloudinary.com/duhroj2yb/image/upload/v1765114862/iconka4r1na_qyaidg.png",
    },
    {
        id: "mobile-app-ui",
        title: "Mobile App UI",
        category: "App Design",
        downloadUrl: "#",
        description: "Mobile-first UI components with touch interactions",
        icon: Smartphone,
        image: "https://images.unsplash.com/photo-1563986768494-4dee0e399645?w=800&h=450&fit=crop",
    },
    {
        id: "admin-dashboard",
        title: "Admin Dashboard",
        category: "Web App",
        downloadUrl: "#",
        description: "Complete admin dashboard with charts and analytics",
        icon: Layout,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    },
    {
        id: "social-media-kit",
        title: "Social Media Kit",
        category: "UI Kit",
        downloadUrl: "#",
        description: "Social media components and templates",
        icon: Share2,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    },
    {
        id: "blog-template",
        title: "Blog Template",
        category: "Website",
        downloadUrl: "#",
        description: "Minimalist blog template with focus on readability",
        icon: BookOpen,
        image: "https://images.unsplash.com/photo-1499750310159-525446cc0f27?w=800&h=450&fit=crop",
    },
    {
        id: "landing-page-kit",
        title: "Landing Page Kit",
        category: "Website",
        downloadUrl: "#",
        description: "Conversion-focused landing page templates",
        icon: Monitor,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=450&fit=crop",
    },
    {
        id: "tailwind-utilities",
        title: "Tailwind Utilities",
        category: "CSS Framework",
        downloadUrl: "#",
        description: "Custom utility classes for rapid development",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
    },
    {
        id: "figma-design-system",
        title: "Figma Design System",
        category: "Design",
        downloadUrl: "#",
        description: "Complete design system with components and guidelines",
        icon: PenTool,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    },
    {
        id: "react-hooks-library",
        title: "React Hooks Library",
        category: "React",
        downloadUrl: "#",
        description: "Custom React hooks for common functionality",
        icon: Box,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    },
    {
        id: "video-templates",
        title: "Video Templates",
        category: "Video",
        downloadUrl: "#",
        description: "Professional video editing templates for content creators",
        icon: Video,
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop",
    }
];
