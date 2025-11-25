'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  collection,
  query, 
  where, 
  orderBy, 
  limit,
  onSnapshot 
} from 'firebase/firestore';
import { db, storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

// --- TYPES ---
export interface HeroData { image: string; tagline: string; }
export interface AboutData { image: string; text: string; }
export interface GalleryItem { id: string; url: string; title: string; category: string; }
export interface BlogPost { id: string; title: string; excerpt: string; content: string; date: string; category: string; coverImage: string; }

interface AdminContextType {
  isLoggedIn: boolean;
  hero: HeroData;
  about: AboutData;
  gallery: GalleryItem[];
  posts: BlogPost[];
  login: (password: string) => boolean;
  logout: () => void;
  updateHero: (data: HeroData) => void;
  updateAbout: (data: AboutData) => void;
  addPhoto: (photo: Omit<GalleryItem, 'id'>) => void;
  deletePhoto: (id: string) => void;
  uploadImage: (file: File, path: string) => Promise<string>;
  addPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
}

// --- INITIAL DATA (FALLBACK) ---
const INITIAL_DATA = {
  hero: {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    tagline: "Senior UI/UX Developer"
  },
  about: {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
    text: "Passionate about bridging technical expertise with creative storytelling. I specialize in building scalable web applications while maintaining a keen eye for design."
  },
  gallery: [
    { id: "1", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", title: "Neon Portrait", category: "Portrait" },
    { id: "2", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", title: "Urban Style", category: "Fashion" },
    { id: "3", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", title: "Studio Light", category: "Studio" },
    { id: "4", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", title: "Professional", category: "Headshot" },
    { id: "5", url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80", title: "Model Pose", category: "Editorial" },
  ],
  posts: [
    {
      id: "nextjs-15",
      title: "Exploring Next.js 15",
      excerpt: "A deep dive into the new features of the App Router and Server Actions.",
      date: "October 2025",
      category: "Code",
      coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      content: "<p>Next.js 15 introduces game-changing features for performance...</p>"
    },
    {
      id: "visual-storytelling",
      title: "The Art of Visual Storytelling",
      excerpt: "How to capture emotion and narrative in portrait photography.",
      date: "November 2025",
      category: "Creative",
      coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      content: "<p>Photography is more than just clicking a shutter...</p>"
    }
  ]
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hero, setHero] = useState<HeroData>(INITIAL_DATA.hero);
  const [about, setAbout] = useState<AboutData>(INITIAL_DATA.about);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_DATA.gallery);
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_DATA.posts);
  const [isLoading, setIsLoading] = useState(true);

  // Load from Firebase on Mount
  useEffect(() => {
    setIsLoading(true);

    // Set up real-time listener for hero data
    const unsubscribeHero = onSnapshot(doc(db, 'content', 'hero'), (doc) => {
      if (doc.exists()) {
        setHero(doc.data() as HeroData);
      } else {
        console.log("No such hero document!");
      }
    }, (error) => {
      console.error("Error listening to hero data:", error);
    });

    // Set up real-time listener for about data
    const unsubscribeAbout = onSnapshot(doc(db, 'content', 'about'), (doc) => {
      if (doc.exists()) {
        setAbout(doc.data() as AboutData);
      } else {
        console.log("No such about document!");
      }
    }, (error) => {
      console.error("Error listening to about data:", error);
    });

    // Set up real-time listener for gallery changes
    const unsubscribeGallery = onSnapshot(collection(db, 'gallery'), (snapshot) => {
      const galleryData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as GalleryItem));
      setGallery(galleryData);
      setIsLoading(false); // Consider loading complete after gallery loads
    });

    // Set up real-time listener for posts changes
    const unsubscribePosts = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as BlogPost));
      setPosts(postsData);
    }, (error) => {
      console.error("Error listening to posts data:", error);
      setIsLoading(false);
    });

    // Cleanup listeners on unmount
    return () => {
      unsubscribeHero();
      unsubscribeAbout();
      unsubscribeGallery();
      unsubscribePosts();
    };
  }, []);

  const login = (pwd: string) => {
    if (pwd === 'admin123') { 
      setIsLoggedIn(true); 
      return true; 
    }
    return false;
  };

  const logout = () => setIsLoggedIn(false);

  const updateHero = async (data: HeroData) => {
    try {
      await setDoc(doc(db, 'content', 'hero'), data);
      setHero(data);
    } catch (error) {
      console.error("Error updating hero:", error);
    }
  };

  const updateAbout = async (data: AboutData) => {
    try {
      await setDoc(doc(db, 'content', 'about'), data);
      setAbout(data);
    } catch (error) {
      console.error("Error updating about:", error);
    }
  };

  const addPhoto = async (photo: Omit<GalleryItem, 'id'>) => {
    try {
      const newPhoto = {
        ...photo,
        id: doc(collection(db, 'gallery')).id
      };
      await addDoc(collection(db, 'gallery'), newPhoto);
    } catch (error) {
      console.error("Error adding photo:", error);
    }
  };

  const deletePhoto = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'gallery', id));
    } catch (error) {
      console.error("Error deleting photo:", error);
    }
  };

  const uploadImage = async (file: File, path: string): Promise<string> => {
    if (!file) {
      throw new Error("No file provided for upload.");
    }
    // Membuat nama file yang unik untuk menghindari penimpaan file
    const fileId = uuidv4();
    const fileExtension = file.name.split('.').pop();
    const uniqueFileName = `${fileId}.${fileExtension}`;
    const storageRef = ref(storage, `${path}/${uniqueFileName}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Lemparkan error agar bisa ditangani oleh komponen pemanggil
    }
  };

  const addPost = async (post: BlogPost) => {
    try {
      await addDoc(collection(db, 'posts'), post);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const value: AdminContextType = {
    isLoggedIn,
    hero,
    about,
    gallery,
    posts,
    login,
    logout,
    updateHero,
    updateAbout,
    addPhoto,
    deletePhoto,
    uploadImage,
    addPost,
    deletePost
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}