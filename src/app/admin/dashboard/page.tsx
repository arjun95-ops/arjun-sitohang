'use client';

import { useAdmin } from '@/context/admin-context';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, Image as ImageIcon, FileText, User, Plus, Trash2, Save } from 'lucide-react';

export default function Dashboard() {
  const { isLoggedIn, logout, hero, updateHero, about, updateAbout, gallery, addPhoto, deletePhoto, posts, addPost, deletePost } = useAdmin();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');

  // Local states for forms
  const [heroForm, setHeroForm] = useState(hero);
  const [aboutForm, setAboutForm] = useState(about);
  const [newPhoto, setNewPhoto] = useState({ url: '', title: '', category: 'Photography' });
  const [newPost, setNewPost] = useState({ title: '', excerpt: '', category: 'Code', coverImage: '', content: '' });

  useEffect(() => {
    if (!isLoggedIn) router.push('/admin');
    setHeroForm(hero);
    setAboutForm(about);
  }, [isLoggedIn, router, hero, about]);

  if (!isLoggedIn) return null;

  const handleSaveProfile = () => {
    updateHero(heroForm);
    updateAbout(aboutForm);
    alert('Profile updated successfully!');
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.url) return;
    addPhoto(newPhoto);
    setNewPhoto({ url: '', title: '', category: 'Photography' });
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.title) return;
    const postData = {
      ...newPost,
      id: Date.now().toString(), // Simple ID generation
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };
    addPost(postData);
    setNewPost({ title: '', excerpt: '', category: 'Code', coverImage: '', content: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">Admin Panel</h1>
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'profile' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}>
            <User size={20} /> Profile & Hero
          </button>
          <button onClick={() => setActiveTab('gallery')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'gallery' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}>
            <ImageIcon size={20} /> Gallery
          </button>
          <button onClick={() => setActiveTab('blog')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'blog' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}>
            <FileText size={20} /> Blog Posts
          </button>
        </nav>
        <button onClick={() => { logout(); router.push('/admin'); }} className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto h-screen">
        
        {/* --- PROFILE TAB --- */}
        {activeTab === 'profile' && (
          <div className="max-w-3xl space-y-8">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-4 text-pink-500">Hero Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Tagline / Subtitle</label>
                  <input type="text" value={heroForm.tagline} onChange={e => setHeroForm({...heroForm, tagline: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Profile Image URL (Unsplash)</label>
                  <input type="text" value={heroForm.image} onChange={e => setHeroForm({...heroForm, image: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-4 text-cyan-500">About Section</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">About Image URL</label>
                  <input type="text" value={aboutForm.image} onChange={e => setAboutForm({...aboutForm, image: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Bio Text</label>
                  <textarea rows={5} value={aboutForm.text} onChange={e => setAboutForm({...aboutForm, text: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
                </div>
              </div>
            </div>
            <button onClick={handleSaveProfile} className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-bold flex items-center gap-2">
              <Save size={18} /> Save All Changes
            </button>
          </div>
        )}

        {/* --- GALLERY TAB --- */}
        {activeTab === 'gallery' && (
          <div className="space-y-8">
            <form onSubmit={handleAddPhoto} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex gap-4 items-end">
              <div className="flex-1">
                <label className="text-xs text-zinc-500">Image URL</label>
                <input type="text" placeholder="https://..." value={newPhoto.url} onChange={e => setNewPhoto({...newPhoto, url: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
              </div>
              <div className="w-48">
                <label className="text-xs text-zinc-500">Title</label>
                <input type="text" placeholder="Project Name" value={newPhoto.title} onChange={e => setNewPhoto({...newPhoto, title: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
              </div>
              <div className="w-48">
                <label className="text-xs text-zinc-500">Category</label>
                <input type="text" placeholder="Photography" value={newPhoto.category} onChange={e => setNewPhoto({...newPhoto, category: e.target.value})} className="w-full bg-black border border-zinc-700 p-3 rounded-lg" />
              </div>
              <button type="submit" className="px-4 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg font-bold"><Plus size={20} /></button>
            </form>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
              {gallery.map((item) => (
                <div key={item.id} className="relative group aspect-[4/5] bg-zinc-800 rounded-xl overflow-hidden">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button onClick={() => deletePhoto(item.id)} className="p-2 bg-red-600 rounded-full text-white hover:scale-110 transition-transform"><Trash2 size={20} /></button>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-black/80 text-xs truncate">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- BLOG TAB --- */}
        {activeTab === 'blog' && (
          <div className="space-y-8">
             <form onSubmit={handleAddPost} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl space-y-4">
                <h3 className="font-bold text-lg">Write New Post</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Title" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} className="bg-black border border-zinc-700 p-3 rounded-lg" />
                  <input type="text" placeholder="Category (Code, Design)" value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})} className="bg-black border border-zinc-700 p-3 rounded-lg" />
                </div>
                <input type="text" placeholder="Cover Image URL" value={newPost.coverImage} onChange={e => setNewPost({...newPost, coverImage: e.target.value})} className="w-full bg-black border-zinc-700 p-3 rounded-lg" />
                <input type="text" placeholder="Short Excerpt" value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} className="w-full bg-black border-zinc-700 p-3 rounded-lg" />
                <textarea placeholder="Content (HTML supported)..." rows={4} value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} className="w-full bg-black border-zinc-700 p-3 rounded-lg" />
                <button type="submit" className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-bold">Publish Post</button>
             </form>

             <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-zinc-800 rounded-lg overflow-hidden">
                        <img src={post.coverImage} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">{post.title}</h4>
                        <p className="text-xs text-zinc-500">{post.date} • {post.category}</p>
                      </div>
                    </div>
                    <button onClick={() => deletePost(post.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg"><Trash2 size={18} /></button>
                  </div>
                ))}
             </div>
          </div>
        )}

      </main>
    </div>
  );
}