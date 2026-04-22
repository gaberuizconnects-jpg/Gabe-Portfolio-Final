import React, { useState, useEffect, useRef } from 'react';
import {
  MonitorPlay,
  Feather,
  Image as ImageIcon,
  Mail,
  Layout,
  Users,
  ArrowUpRight,
  ArrowLeft,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Cpu,
  FileText,
  Code2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

const StudioMic = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22v-3" />
    <path d="M8 22h8" />
    <path d="M20 10v2a8 8 0 0 1-16 0v-2" />
    <rect x="9" y="2" width="6" height="12" rx="3" />
  </svg>
);

const portfolioData = {
  header: {
    name: 'GABE RUIZ',
    title: 'Mass Communication',
    subTitle: 'Human Connection',
    headshot:
      'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/GRheadshot.png',
    about:
      "Hi, my name is Gabe. I'm a people-driven, versatile communication specialist. I work in the realms of Multimedia Production, Human Dynamics, and the spaces in which they intersect.",
  },
  sections: {
    video: {
      id: 'video',
      title: 'Video Projects',
      subtitle: 'Editing & Broadcast',
      color: '#06b6d4',
      icon: MonitorPlay,
      content: {
        editing: [
          {
            title: '2024 Presidential Election Coverage',
            desc: 'Lead Anchor for live broadcast coverage of the 2024 election results. Managed real-time updates and panel discussions.',
            tag: 'Live Broadcast',
            youtubeId: 'RvW3siTq16A',
          },
          {
            title: 'All America Concert Band - FULL DOCUMENTARY',
            desc: 'A comprehensive look at the history and impact of the All America Concert Band.',
            tag: 'Videography & Editing',
            youtubeId: 'ADY83ZG3ZJw',
          },
        ],
      },
    },
    audio: {
      id: 'audio',
      title: 'Audio Production',
      subtitle: 'Podcasting, Sound Design, Mixing',
      color: '#d946ef',
      icon: StudioMic,
      episodes: [
        { title: "'The A.E.D.A Logs': Solaris Pt. 1", url: '/the-aeda-logs.mp3' },
        { title: "'Facultea' Podcast Clip - Dr. Jen Peterson", url: '/facultea-peterson.mp3' },
        { title: "'Facultea' Podcast Clip - Dr. Elizabeth Coody", url: '/facultea-coody.mp3' },
        { title: "'True Story' Full Intro Theme", url: '/true-story-intro-theme.mp3' },
      ],
    },
    writing: {
      id: 'writing',
      title: 'Writing Archive',
      subtitle: 'Journalism, Essays, Blogposts',
      color: '#f43f5e',
      icon: Feather,
      documents: [
        {
          title: 'Ratatouille Is Capitalist Propaganda And Alarmingly Racist',
          summary:
            "An essay critiquing Pixar's Ratatouille as deceptive social commentary, depicting the protagonist Remy as a racialized 'other' unable to truly escape his social station.",
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.rat.pdf',
        },
        {
          title:
            'Doom Scrolling: How It Impacts Us And What You Can Do About It',
          summary:
            'An article examining the negative impacts of doom scrolling on student productivity and societal trust as a result of profit-driven algorithms prioritizing engagement over mental well-being.',
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.doomscrolling.pdf',
        },
        {
          title: 'Is It Just Me, or Are People Ruder Now? (It\'s Both)',
          summary:
            'An article investigating whether people have become ruder since the COVID-19 pandemic, describing the perceived shift as both \"behavioral\" social atrophy and a \"perceptive\" bias amplified by social media algorithms.',
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.ruder.pdf',
        },
        {
          title: 'To Pin A Butterfly: A Literary (Psycho)Analysis',
          summary:
            'An essay analyzing David Henry Hwang\'s \'M. Butterfly\' through a psychoanalytic lens, arguing that the protagonist\'s romantic relationship is a delusional defense mechanism against masculine insecurity.',
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.butterfly.pdf',
        },
        {
          title: 'How To Make Enemies And Fuel The Opposition',
          summary:
            'A political analysis exploring the nature of polarized politics from the framing of discourse surrounding the crisis in Gaza.',
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.makingenemies.pdf',
        },
        {
          title: "'A Rock Sails By' Is Out Of This World",
          summary:
            'A creative review of Sean Grennan\'s play \'A Rock Sails By\', speaking to its presentation of cosmic mystery and grounded human emotion through the story of an astrophysicist grappling with her dementia diagnosis.',
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.arocksailsby.pdf',
        },
        {
          title: 'Finishing Fall Semester Strong',
          summary:
            'A short blog post providing advice for students approaching final exams, encouraging them to trust their semester-long preparation and prioritize sustainable focus.',
          url: 'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/writing.finals.pdf',
        },
      ],
    },
    gallery: {
      id: 'gallery',
      title: 'Graphic Design',
      subtitle: 'Vector Art, Photoshop, Mixed Media',
      color: '#f97316',
      icon: ImageIcon,
      categories: [
        {
          name: 'Pattern Series',
          images: [
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/pattern.startablet.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/pattern.colorlasagna.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/pattern.matrix.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/pattern.braids.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/pattern.school.png',
          ],
        },
        {
          name: 'Logos',
          images: [
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/logo.inc.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/logo.facultea.png',
          ],
        },
        {
          name: 'Mixed Media',
          images: [
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/mixedmedia.hand.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/mixedmedia.visitor.png',
            'https://raw.githubusercontent.com/TheGreatGabesby/Portfolio-Assets/main/mixedmedia.key.png',
          ],
        },
      ],
    },
    human: {
      id: 'human',
      title: 'Human Relations',
      subtitle: 'Leadership, Networking, Community',
      color: '#007fff',
      icon: Users,
      items: [
        {
          title: 'Public Speaking Arts',
          role: 'Club President',
          desc: 'Planning & Facilitating Group Meetings, Events, Outreach, & Discussions.',
        },
        {
          title: 'Growing Community Connections',
          role: 'Networking Host',
          desc: 'Promotional On-Air Interviews with Siouxland Non-profit Leaders & Representitives.',
        },
        {
          title: 'Journalistic Advising',
          role: 'Student Consultant',
          desc: 'Assisting First-Year Journalism Students through applied SPJ Standards of Writing & Ethics.',
        },
        {
          title: 'Campus Engagement',
          role: 'Student Outreach',
          desc: 'Coordinating, Conducting, & Editing Interviews with Students Across Campus.',
        },
      ],
    },
    ai: {
      id: 'ai',
      title: 'LLM Coding',
      subtitle: 'Applied AI Development',
      color: '#a855f7',
      icon: Cpu,
      impactText:
        'I built this immersive portfolio from scratch, leveraging in-depth AI Prompt Optimization and modern React principles.',
      tech: [
        { label: 'Architecture', value: 'React Single-File SPA' },
        { label: 'Styling', value: 'Tailwind Utility CSS' },
        { label: 'Navigation', value: 'State-Based Page Switching' },
      ],
    },
    editorial: {
      id: 'editorial',
      title: 'Editorial Work',
      subtitle: 'Editorial Direction & Design',
      color: '#eab308',
      icon: Layout,
      roles: [
        {
          org: 'The Collegian Reporter',
          role: 'Editor-in-Chief',
          desc: 'Manage Student News Stories, oversee content development.',
          link: 'https://wordpress.morningside.edu/thecr/',
        },
        {
          org: "Walt Whitman's Literary Legacy",
          role: 'Design Editor',
          desc: 'Layout & typography for undergraduate research.',
          link: 'https://drive.google.com/file/d/1oRWPoqrV-8YNa08U2TIPWAuu0KmxMEj3/view',
        },
      ],
    },
    contact: {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Direct Transmission',
      color: '#10b981',
      icon: Mail,
    },
  },
};

const AudioPlayer = ({ track, color }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [track]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      if (total) setProgress((current / total) * 100);
    }
  };

  const formatTime = (time) => {
    if (!time || Number.isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md">
      <audio
        ref={audioRef}
        src={track.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-black"
          style={{ backgroundColor: color }}
        >
          <StudioMic size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm truncate">{track.title}</p>
          <p className="text-white/40 text-xs font-mono">BROADCAST_READY</p>
        </div>
      </div>

      <div className="h-10 flex items-end gap-1 mb-4 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-full transition-all duration-300"
            style={{
              height: isPlaying ? `${20 + Math.random() * 80}%` : '20%',
              backgroundColor: isPlaying ? color : '#334155',
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-mono text-slate-500 w-8">{formatTime(currentTime)}</span>
        <div className="flex-1 h-1 bg-slate-800 rounded-full relative group">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
            style={{ width: `${progress}%`, backgroundColor: color }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
              const val = Number(e.target.value);
              setProgress(val);
              if (audioRef.current && duration) {
                audioRef.current.currentTime = (val / 100) * duration;
              }
            }}
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <span className="text-[10px] font-mono text-slate-500 w-8">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-center gap-8">
        <SkipBack className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} />
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg"
          style={{ backgroundColor: color, color: '#000' }}
        >
          {isPlaying ? (
            <Pause size={24} fill="currentColor" />
          ) : (
            <Play size={24} fill="currentColor" className="ml-1" />
          )}
        </button>
        <SkipForward className="text-slate-500 hover:text-white cursor-pointer transition-colors" size={20} />
      </div>
    </div>
  );
};

const GalleryStage = ({ category, color }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = category.images[selectedIndex];

  return (
    <div className="space-y-4 mb-8">
      <div className="flex justify-between items-end">
        <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest">{category.name}</h5>
        <span className="text-[10px] text-slate-600 font-mono">{selectedIndex + 1} / {category.images.length}</span>
      </div>
      <div className="aspect-video rounded-2xl overflow-hidden bg-black/40 border border-white/10 group relative">
        <img src={activeImage} alt={category.name} className="w-full h-full object-contain p-4" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {category.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`aspect-square rounded-lg border-2 transition-all overflow-hidden ${
              selectedIndex === idx ? 'scale-95' : 'border-transparent opacity-40 hover:opacity-100'
            }`}
            style={{ borderColor: selectedIndex === idx ? color : 'transparent' }}
          >
            <img src={img} className="w-full h-full object-cover" alt={category.name} />
          </button>
        ))}
      </div>
    </div>
  );
};

const TerminalReader = ({ documents, color }) => {
  const [selected, setSelected] = useState(0);
  const active = documents[selected];

  return (
    <div className="h-[500px] border border-white/10 rounded-2xl overflow-hidden bg-[#050505] flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 border-r border-white/10 overflow-y-auto bg-black/40">
        {documents.map((doc, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full text-left p-4 border-b border-white/5 transition-all flex items-start gap-3 ${
              selected === i ? 'bg-white/5' : 'hover:bg-white/5 opacity-60'
            }`}
          >
            <FileText size={16} className="mt-1 shrink-0" style={{ color: selected === i ? color : '#475569' }} />
            <div>
              <p className="text-xs font-mono opacity-40 mb-1">ARCHIVE_0{i + 1}</p>
              <p className="text-sm font-bold text-white line-clamp-1">{doc.title}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex-1 p-8 overflow-y-auto flex flex-col bg-gradient-to-br from-transparent to-rose-950/10">
        <div className="mb-8">
          <div className="h-1 w-12 rounded-full mb-6" style={{ backgroundColor: color }} />
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{active.title}</h3>
          <p className="text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-white/10 pl-6 italic">{active.summary}</p>
        </div>
        <div className="mt-auto">
          <a
            href={active.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all hover:-translate-y-1 group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Execute Read</span>
            <ExternalLink size={16} className="transition-transform group-hover:rotate-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ onNavigate }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    <header className="max-w-6xl mx-auto mb-16 border-b border-white/5 pb-12 flex flex-col md:flex-row gap-12 items-start justify-between">
      <div className="flex flex-col md:flex-row gap-12 items-start flex-1">
        <div className="w-48 md:w-56 aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative shrink-0 bg-white/5">
          <img
            src={portfolioData.header.headshot}
            alt="Gabe Ruiz"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: '70% center' }}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4 leading-[0.9]">
            {portfolioData.header.name.split(' ')[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-200">
              {portfolioData.header.name.split(' ')[1]}
            </span>
          </h1>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-sm tracking-widest uppercase mb-8">
            <span>{portfolioData.header.title}</span>
            <div className="w-8 h-px bg-slate-800" />
            <span>{portfolioData.header.subTitle}</span>
          </div>
          <div className="max-w-xl border-l-2 border-emerald-500/20 pl-6">
            <p className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase mb-2">Protocol: Overview</p>
            <p className="text-slate-400 text-lg leading-relaxed font-light italic">{portfolioData.header.about}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0 opacity-40">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-emerald-400 font-mono text-[10px] tracking-widest uppercase">System Online</span>
        </div>
        <p className="text-[9px] font-mono text-slate-600">V.3.2.0 [PAGES_LOADED]</p>
      </div>
    </header>

    <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-6 mb-24">
      {Object.values(portfolioData.sections).map((section) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section)}
          className={`group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden text-left transition-all duration-500 hover:bg-[#0f0f0f] hover:scale-[1.02] active:scale-95 flex flex-col justify-between ${
            section.id === 'video'
              ? 'lg:col-span-2'
              : section.id === 'gallery'
              ? 'lg:row-span-2'
              : section.id === 'human'
              ? 'lg:col-span-2'
              : ''
          }`}
        >
          <div
            className="absolute -right-12 -top-12 w-48 h-48 rounded-full blur-[80px] opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none"
            style={{ backgroundColor: section.color }}
          />

          <div className="flex justify-between items-start">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5" style={{ color: section.color }}>
              <section.icon size={24} />
            </div>
            <ArrowUpRight className="opacity-0 group-hover:opacity-40 transition-opacity" size={24} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{section.title}</h3>
            <p className="text-sm font-mono opacity-40 uppercase tracking-widest" style={{ color: section.color }}>
              {section.subtitle}
            </p>
          </div>
        </button>
      ))}
    </main>
  </div>
);

const SectionPage = ({ section, onBack }) => {
  const [selectedEpisodeIndex, setSelectedEpisodeIndex] = useState(0);

  useEffect(() => {
    setSelectedEpisodeIndex(0);
  }, [section.id]);

  const activeEpisode = section.episodes?.[selectedEpisodeIndex] ?? null;

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-6xl mx-auto min-h-[80vh]">
      <nav className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all hover:bg-white/10 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono uppercase tracking-widest">Back to Hub</span>
        </button>
        <div className="text-right">
          <p className="text-[10px] font-mono opacity-40 uppercase tracking-[0.2em]" style={{ color: section.color }}>
            Browsing: {section.id}
          </p>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
        <div className="p-6 rounded-[2.5rem] bg-white/5 border border-white/10" style={{ color: section.color }}>
          <section.icon size={48} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none mb-4">{section.title}</h2>
          <p className="text-lg md:text-xl font-light text-slate-400 max-w-2xl">{section.subtitle}</p>
        </div>
      </div>

      <div className="pb-24">
        {section.id === 'video' && (
          <div className="space-y-12">
            {section.content.editing.map((vid, i) => (
              <div key={i} className="bg-black/40 rounded-3xl overflow-hidden border border-white/5">
                <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="max-w-xl">
                    <h4 className="text-xl font-bold text-white mb-2">{vid.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{vid.desc}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                    {vid.tag}
                  </span>
                </div>
                <div className="aspect-video bg-black relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                    className="w-full h-full border-0"
                    allowFullScreen
                    title={vid.title}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {section.id === 'audio' && activeEpisode && (
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">Archive_Feed</h4>
              {section.episodes.map((ep, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedEpisodeIndex(i)}
                  className={`w-full group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-left ${
                    selectedEpisodeIndex === i ? 'border-fuchsia-500/50 bg-white/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-fuchsia-500">
                      <StudioMic size={18} />
                    </div>
                    <span className="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">{ep.title}</span>
                  </div>
                  <ChevronRight size={16} className="opacity-20 group-hover:opacity-100" />
                </button>
              ))}
            </div>
            <div className="lg:col-span-2">
              <AudioPlayer track={activeEpisode} color={section.color} />
            </div>
          </div>
        )}

        {section.id === 'writing' && <TerminalReader documents={section.documents} color={section.color} />}
        {section.id === 'gallery' && section.categories.map((cat, i) => <GalleryStage key={i} category={cat} color={section.color} />)}

        {section.id === 'ai' && (
          <div className="flex flex-col md:flex-row items-center gap-16 py-8">
            <div className="flex-1 space-y-8">
              <div className="w-16 h-1 rounded-full" style={{ backgroundColor: section.color }} />
              <p className="text-4xl font-light text-white leading-tight">{section.impactText}</p>
            </div>
            <div className="w-full md:w-80 space-y-4">
              {section.tech.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">{t.label}</p>
                  <p className="text-sm font-bold text-white">{t.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {['human', 'editorial', 'contact'].includes(section.id) && (
          <div className="p-12 text-center border border-white/5 rounded-3xl bg-white/5 italic text-slate-500">
            Details for {section.title} would render here in a full page view.
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  const navigateTo = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setActiveSection(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020202] text-slate-200 p-4 md:p-8 font-sans selection:bg-white/20">
      {activeSection ? <SectionPage section={activeSection} onBack={goHome} /> : <HomePage onNavigate={navigateTo} />}

      {!activeSection && (
        <footer className="max-w-6xl mx-auto flex justify-between items-center text-[10px] font-mono text-slate-700 tracking-widest pt-12 border-t border-white/5">
          <p>© 2025 GABE RUIZ // MASS COMM</p>
          <p>STATE_ROUTING ENABLED</p>
        </footer>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-right { from { transform: translateX(20px); } to { transform: translateX(0); } }
        @keyframes slide-in-from-bottom { from { transform: translateY(20px); } to { transform: translateY(0); } }

        .animate-in { animation-duration: 500ms; animation-fill-mode: both; }
        .fade-in { animation-name: fade-in; }
        .slide-in-from-right-8 { animation-name: slide-in-from-right; }
        .slide-in-from-bottom-4 { animation-name: slide-in-from-bottom; }
      `}</style>
    </div>
  );
}
