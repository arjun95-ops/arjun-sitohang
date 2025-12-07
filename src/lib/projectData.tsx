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
}

export const projects: Project[] = [
    {
        id: "Karina_about",
        title: "Karina About",
        category: "Website",
        downloadUrl: "https://drive.google.com/file/d/1OeSNpQfhg9cSmOM83wZ0FpBRALK28Tis/view?usp=drive_link",
        description: "About page for Karina",
        icon: Palette
    },
    {
        id: "portfolio-template",
        title: "Portfolio Template",
        category: "Website",
        downloadUrl: "#",
        description: "Clean portfolio template with smooth animations",
        icon: Globe
    },
    {
        id: "ecommerce-components",
        title: "E-Commerce Components",
        category: "React Components",
        downloadUrl: "#",
        description: "Reusable e-commerce components with dark theme",
        icon: Code
    },
    {
        id: "mobile-app-ui",
        title: "Mobile App UI",
        category: "App Design",
        downloadUrl: "#",
        description: "Mobile-first UI components with touch interactions",
        icon: Smartphone
    },
    {
        id: "admin-dashboard",
        title: "Admin Dashboard",
        category: "Web App",
        downloadUrl: "#",
        description: "Complete admin dashboard with charts and analytics",
        icon: Layout
    },
    {
        id: "social-media-kit",
        title: "Social Media Kit",
        category: "UI Kit",
        downloadUrl: "#",
        description: "Social media components and templates",
        icon: Share2
    },
    {
        id: "blog-template",
        title: "Blog Template",
        category: "Website",
        downloadUrl: "#",
        description: "Minimalist blog template with focus on readability",
        icon: BookOpen
    },
    {
        id: "landing-page-kit",
        title: "Landing Page Kit",
        category: "Website",
        downloadUrl: "#",
        description: "Conversion-focused landing page templates",
        icon: Monitor
    },
    {
        id: "tailwind-utilities",
        title: "Tailwind Utilities",
        category: "CSS Framework",
        downloadUrl: "#",
        description: "Custom utility classes for rapid development",
        icon: Wrench
    },
    {
        id: "figma-design-system",
        title: "Figma Design System",
        category: "Design",
        downloadUrl: "#",
        description: "Complete design system with components and guidelines",
        icon: PenTool
    },
    {
        id: "react-hooks-library",
        title: "React Hooks Library",
        category: "React",
        downloadUrl: "#",
        description: "Custom React hooks for common functionality",
        icon: Box
    },
    {
        id: "video-templates",
        title: "Video Templates",
        category: "Video",
        downloadUrl: "#",
        description: "Professional video editing templates for content creators",
        icon: Video
    }
];
