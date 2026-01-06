import React, { useState, useEffect, useRef } from "react";
import {
  MonitorPlay,
  Feather,
  Image as ImageIcon,
  Mail,
  Layout,
  Users,
  ArrowUpRight,
  X,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Cpu,
  Send,
  FileText,
  Volume2,
  VolumeX,
  Code2,
  Zap,
  Terminal,
} from "lucide-react";

// --- Custom Icon: Studio Microphone (Clean Capsule) ---
const StudioMic = ({ size = 24, className = "" }) => (
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

/* ==============================================================================
  DATA & CONTENT MANAGEMENT
  ==============================================================================
*/
const portfolioData = {
  header: {
    name: "GABE RUIZ",
    title: "Mass Communication",
    subTitle: "Human Connection",
    headshot:
      "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/GRheadshot.png?raw=true",
    intro:
      "Exploring the intersections of technology, design, and human connection.",
    about:
      "Hi, my name is Gabe. I'm a people-driven, versatile communication specialist. I work in the realms of Multimedia Production, Human Dynamics, and the spaces in which they intersect.",
  },
  sections: {
    video: {
      id: "video",
      title: "Video Projects",
      subtitle: "Editing & Broadcast",
      color: "#06b6d4",
      icon: MonitorPlay,
      content: {
        editing: [
          {
            title: "2024 Presidential Election Coverage",
            desc: "Lead Anchor for live broadcast coverage of the 2024 election results. Managed real-time updates and panel discussions.",
            tag: "Live Broadcast",
            youtubeId: "RvW3siTq16A",
          },
          {
            title: "All America Concert Band - FULL DOCUMENTARY",
            desc: "A comprehensive look at the history and impact of the All America Concert Band.",
            tag: "Videography And Editing",
            youtubeId: "ADY83ZG3ZJw",
          },
        ],
        camera: [],
      },
    },
    audio: {
      id: "audio",
      title: "Audio Production",
      subtitle: "Podcasting, Sound Design, Mixing",
      color: "#d946ef",
      icon: StudioMic,
      episodes: [
        {
          title: "'The A.E.D.A Logs': Solaris Pt. 1",
          url: "/the-aeda-logs.mp3",
        },
        {
          title: "'Facultea' Podcast Clip - Dr. Jen Peterson",
          url: "/facultea-peterson.mp3",
        },
        {
          title: "'Facultea' Podcast Clip - Dr. Elizabeth Coody",
          url: "/facultea-coody.mp3",
        },
        {
          title: "'True Story' Full Intro Theme",
          url: "/true-story-intro-theme.mp3",
        },
      ],
    },
    writing: {
      id: "writing",
      title: "Writing Archive",
      subtitle: "Journalism, Essays, Blogposts",
      color: "#f43f5e",
      icon: Feather,
      documents: [
        {
          title: "Ratatouille Is Capitalist Propaganda And Alarmingly Racist",
          summary:
            "An essay critiquing Pixar's Ratatouille as deceptive social commentary, depicting the protagonist Remy as a racialized 'other' unable to truly escape his social station.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.rat.pdf?raw=true",
        },
        {
          title:
            "Doom Scrolling: How It Impacts Us And What You Can Do About It",
          summary:
            "An article examining the negative impacts of doom scrolling on student productivity and societal trust as a result of profit-driven algorithms prioritizing engagement over mental well-being.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.doomscrolling.pdf?raw=true",
        },
        {
          title: "Is It Just Me, or Are People Ruder Now? (It's Both)",
          summary:
            "An article investigating whether people have become ruder since the COVID-19 pandemic, describing the perceived shift as both 'behavioral' social atrophy and a 'perceptive' bias amplified by social media algorithms.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.ruder.pdf?raw=true",
        },
        {
          title: "To Pin A Butterfly: A Literary (Psycho)Analysis",
          summary:
            "An essay analyzing David Henry Hwang's 'M. Butterfly' through a psychoanalytic lens, arguing that the protagonist's romantic relationship is a delusional defense mechanism against masculine insecurity.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.butterfly.pdf?raw=true",
        },
        {
          title: "How To Make Enemies And Fuel The Opposition",
          summary:
            "A political analysis exploring the nature of polarized politics from the framing of discourse surrounding the crisis in Gaza.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.makingenemies.pdf?raw=true",
        },
        {
          title: "'A Rock Sails By' Is Out Of This World",
          summary:
            "A creative review of Sean Grennan's play 'A Rock Sails By', speaking to its presentation of cosmic mystery and grounded human emotion through the story of an astrophysicist grappling with her dementia diagnosis.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.arocksailsby.pdf?raw=true",
        },
        {
          title: "Finishing Fall Semester Strong",
          summary:
            "A short blog post providing advice for students approaching final exams, encouraging them to trust their semester-long preparation and prioritize sustainable focus.",
          url: "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/writing.finals.pdf?raw=true",
        },
      ],
    },
    gallery: {
      id: "gallery",
      title: "Graphic Design",
      subtitle: "Vector Art, Photoshop, Mixed Media",
      color: "#f97316",
      icon: ImageIcon,
      categories: [
        {
          name: "Pattern Series",
          images: [
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/pattern.startablet.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/pattern.colorlasagna.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/pattern.matrix.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/pattern.braids.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/pattern.school.png?raw=true",
          ],
        },
        {
          name: "Logos",
          images: [
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/logo.inc.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/logo.facultea.png?raw=true",
          ],
        },
        {
          name: "Mixed Media",
          images: [
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/mixedmedia.hand.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/mixedmedia.visitor.png?raw=true",
            "https://github.com/TheGreatGabesby/Portfolio-Assets/blob/main/mixedmedia.key.png?raw=true",
          ],
        },
      ],
    },
    human: {
      id: "human",
      title: "Human Relations",
      subtitle: "Leadership, Networking, Community",
      color: "#007fff",
      icon: Users,
      items: [
        {
          title: "Public Speaking Arts",
          role: "Club President",
          desc: "Planning & Facilitating Group Meetings, Events, Outreach, & Discussions.",
        },
        {
          title: "Growing Community Connections",
          role: "Networking Host",
          desc: "Promotional On-Air Interviews with Siouxland Non-profit Leaders & Representitives.",
        },
        {
          title: "Journalistic Advising",
          role: "Student Consultant",
          desc: "Assisting First-Year Journalism Students through applied SPJ Standards of Writing & Ethics.",
        },
        {
          title: "Campus Engagement",
          role: "Student Outreach",
          desc: "Coordinating, Conducting, & Editing Interviews with Students Across Campus.",
        },
      ],
    },
    ai: {
      id: "ai",
      title: "LLM Coding",
      subtitle: "Applied AI & Web Development",
      color: "#a855f7",
      icon: Cpu,
      impactText:
        "I built the website you're currently visiting from scratch, leveraging an in-depth understanding of AI Prompt Optimization and Design Principles.",
      tech: [
        { label: "Architecture", value: "React Single-File SPA" },
        { label: "Styling", value: "Tailwind Utility CSS" },
        { label: "Interface", value: "Responsive Bento Grid" },
      ],
    },
    editorial: {
      id: "editorial",
      title: "Editorial Work",
      subtitle: "Editorial Direction & Design",
      color: "#eab308",
      icon: Layout,
      roles: [
        {
          org: "The Collegian Reporter",
          role: "Editor-in-Chief",
          desc: "Manage Student News Stories, oversee content development.",
          link: "https://wordpress.morningside.edu/thecr/",
        },
        {
          org: "Walt Whitman's Literary Legacy",
          role: "Design Editor",
          desc: "Layout & typography for undergraduate research.",
          link: "https://drive.google.com/file/d/1oRWPoqrV-8YNa08U2TIPWAuu0KmxMEj3/view",
        },
      ],
    },
    contact: {
      id: "contact",
      title: "Contact",
      subtitle: "Get in touch",
      color: "#10b981",
      icon: Mail,
    },
  },
};

/* ==============================================================================
  UI COMPONENTS
  ==============================================================================
*/

// --- 1. Audio Player ---
const AudioPlayer = ({ track, color }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [track]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.log("Playback blocked", e));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setCurrentTime(current);
      if (total) setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (audioRef.current && duration) {
      audioRef.current.currentTime = (newProgress / 100) * duration;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-md">
      <audio
        ref={audioRef}
        src={track.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-black shadow-lg transition-transform ${
              isPlaying ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundColor: color }}
          >
            <StudioMic size={20} />
          </div>
          <div className="overflow-hidden text-left">
            <div className="text-white font-bold text-sm truncate pr-4">
              Now Playing
            </div>
            <div className="text-white/60 text-xs font-mono leading-tight mt-1">
              {track.title.includes(" - ") ? (
                <>
                  <div className="truncate">{track.title.split(" - ")[0]}</div>
                  <div className="truncate opacity-80">
                    - {track.title.split(" - ")[1]}
                  </div>
                </>
              ) : (
                <div className="truncate">{track.title}</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="h-8 flex items-end gap-1 mb-4 opacity-70 justify-between px-2">
        {[...Array(30)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className="w-1 bg-current rounded-full transition-all duration-300"
            style={{
              height: isPlaying
                ? `${Math.max(20, Math.random() * 100)}%`
                : "20%",
              backgroundColor: isPlaying ? color : "#334155",
              opacity: isPlaying ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      <div className="mb-4 flex items-center gap-3">
        <span className="text-[10px] font-mono text-slate-400 w-8 text-right">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white"
          style={{ accentColor: color }}
        />
        <span className="text-[10px] font-mono text-slate-400 w-8">
          {formatTime(duration)}
        </span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 w-1/4 group">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            {isMuted || volume === 0 ? (
              <VolumeX size={16} />
            ) : (
              <Volume2 size={16} />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              setIsMuted(false);
            }}
            className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-white opacity-50 group-hover:opacity-100 transition-opacity"
            style={{ accentColor: color }}
          />
        </div>

        <div className="flex items-center justify-center gap-6">
          <SkipBack
            size={20}
            className="text-slate-400 hover:text-white cursor-pointer hover:scale-110 transition-transform"
            onClick={() => {
              if (audioRef.current) audioRef.current.currentTime -= 10;
            }}
          />
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl"
            style={{ backgroundColor: color, color: "#000" }}
          >
            {isPlaying ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" className="ml-1" />
            )}
          </button>
          <SkipForward
            size={20}
            className="text-slate-400 hover:text-white cursor-pointer hover:scale-110 transition-transform"
            onClick={() => {
              if (audioRef.current) audioRef.current.currentTime += 10;
            }}
          />
        </div>
        <div className="w-1/4"></div>
      </div>
    </div>
  );
};

// --- 5. Gallery Stage ---
const GalleryStage = ({ category, color }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = category.images[selectedIndex];

  return (
    <div className="space-y-4 mb-10">
      <div className="flex items-center justify-between">
        <h5 className="text-sm font-mono text-slate-400 uppercase tracking-widest">
          {category.name}
        </h5>
        <span className="text-xs font-mono text-slate-600">
          {selectedIndex + 1} / {category.images.length}
        </span>
      </div>
      <div
        className="w-full aspect-video bg-black/50 rounded-2xl overflow-hidden border border-white/10 relative group transition-all duration-500"
        style={{ boxShadow: `0 0 30px ${color}10`, borderColor: `${color}20` }}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          <img
            src={activeImage}
            alt="Gallery Main"
            loading="lazy"
            className="w-full h-full object-contain z-10"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
        {category.images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`relative aspect-square rounded-lg overflow-hidden border transition-all duration-300 ${
              selectedIndex === idx
                ? "scale-95 brightness-110"
                : "opacity-50 hover:opacity-100 hover:scale-105"
            }`}
            style={{
              borderColor: selectedIndex === idx ? color : "transparent",
              borderWidth: selectedIndex === idx ? "2px" : "1px",
            }}
          >
            <img
              src={img}
              alt="thumbnail"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// --- 3. Neon Card ---
const NeonCard = ({ item, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <button
      onClick={() => onClick(item)}
      className={`group relative p-6 rounded-3xl bg-[#0a0a0a] border border-opacity-40 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden cursor-pointer w-full text-left ${className}`}
      style={{
        borderColor: item.color,
        boxShadow: isHovered ? `0 0 20px ${item.color}40` : "none",
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: item.color }}
      />
      <div className="relative z-10 flex justify-between items-start w-full">
        <div
          className="p-3 rounded-full bg-black/50 border border-white/10 text-white"
          style={{ color: item.color }}
        >
          <Icon size={24} />
        </div>
        <ArrowUpRight
          className={`transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          color={item.color}
          size={24}
        />
      </div>
      <div className="relative z-10 mt-6 text-left w-full">
        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">
          {item.title}
        </h3>
        <p
          className="text-sm font-medium opacity-60"
          style={{ color: isHovered ? item.color : "#94a3b8" }}
        >
          {item.subtitle}
        </p>
      </div>
    </button>
  );
};

// --- 6. Terminal Reader ---
const TerminalReader = ({ documents, color }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const docs = documents || [];
  const activeDoc = docs[selectedIndex];

  return (
    <div className="flex flex-col h-[600px] border border-white/10 rounded-2xl overflow-hidden bg-[#050505] shadow-2xl relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rose-500/5 blur-3xl pointer-events-none" />
      <div className="flex border-b border-white/10 bg-white/5 relative z-10 px-6 py-4 items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          // WRITING_ARCHIVE
        </span>
      </div>
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row relative z-10">
        <div className="w-full md:w-1/3 border-r border-white/10 overflow-y-auto bg-black/40 custom-scrollbar">
          {docs.map((doc, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`w-full text-left p-4 border-b border-white/5 transition-all hover:pl-6 ${
                selectedIndex === idx ? "bg-white/5" : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FileText
                  size={14}
                  className={
                    selectedIndex === idx ? "text-rose-400" : "text-slate-600"
                  }
                />
                <span
                  className={`text-xs font-mono ${
                    selectedIndex === idx
                      ? "text-rose-400 opacity-100"
                      : "text-slate-600 opacity-50"
                  }`}
                >
                  DOC_{String(idx + 1).padStart(3, "0")}
                </span>
              </div>
              <div
                className={`font-bold text-sm line-clamp-1 ${
                  selectedIndex === idx ? "text-white" : "text-slate-400"
                }`}
              >
                {doc.title}
              </div>
            </button>
          ))}
        </div>
        <div className="flex-1 p-8 overflow-y-auto relative bg-[#0a0a0a]">
          <div className="relative z-10 max-w-lg">
            <span
              className="inline-block px-2 py-1 rounded text-[10px] font-mono mb-4 text-black font-bold"
              style={{ backgroundColor: color }}
            >
              PREVIEW
            </span>
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight mt-4">
              {activeDoc?.title}
            </h3>
            <div className="text-slate-400 text-sm leading-relaxed font-mono border-l-2 border-white/10 pl-4 mb-8">
              {activeDoc?.summary}
            </div>
            <button
              className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all hover:scale-105"
              onClick={() => window.open(activeDoc.url, "_blank")}
            >
              <span className="text-xs font-mono uppercase tracking-wider text-white group-hover:text-rose-400">
                OPEN DOCUMENT
              </span>
              <ArrowUpRight
                size={16}
                className="text-rose-500 transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 4. Content Renderer ---
const ContentRenderer = ({ section }) => {
  const [currentTrack, setCurrentTrack] = useState(
    section.id === "audio" ? section.episodes?.[0] : null
  );
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const myEmail = "gabe.ruiz.connects@gmail.com";
    const subject = encodeURIComponent(
      `Portfolio Contact: ${contactForm.name}`
    );
    const body = encodeURIComponent(
      `${contactForm.message}%0D%0A%0D%0AFrom: ${contactForm.email}`
    );
    window.open(`mailto:${myEmail}?subject=${subject}&body=${body}`, "_self");
  };

  switch (section.id) {
    case "video":
      return (
        <div className="grid md:grid-cols-1 gap-10 text-left">
          <div className="space-y-12">
            {section.content.editing.map((item) => (
              <div
                key={item.title}
                className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="p-6 bg-[#0a0a0a] border-b border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-xl font-bold text-white">
                      {item.title}
                    </h5>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-cyan-400 border border-cyan-400/20">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
                {item.youtubeId && (
                  <div className="aspect-video w-full relative">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${item.youtubeId}`}
                      title={item.title}
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    case "audio":
      return (
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="text-xl font-bold text-white mb-6">
              Latest Episodes
            </h4>
            <div className="space-y-3">
              {section.episodes.map((ep) => (
                <div
                  key={ep.title}
                  onClick={() => setCurrentTrack(ep)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-colors cursor-pointer ${
                    currentTrack?.title === ep.title
                      ? "bg-white/10 border-white/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-full bg-black/40 text-slate-400">
                      {currentTrack?.title === ep.title ? (
                        <StudioMic size={14} className="text-fuchsia-400" />
                      ) : (
                        <Play size={14} fill="currentColor" />
                      )}
                    </div>
                    <div className="text-sm font-medium text-slate-200 truncate">
                      {ep.title.includes(" - ") ? (
                        <div className="flex flex-col">
                          <span>{ep.title.split(" - ")[0]}</span>
                          <span className="text-xs text-slate-400">
                            - {ep.title.split(" - ")[1]}
                          </span>
                        </div>
                      ) : (
                        <span>{ep.title}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-white">Now Playing</h4>
            {currentTrack && (
              <AudioPlayer track={currentTrack} color={section.color} />
            )}
          </div>
        </div>
      );
    case "gallery":
      return (
        <div className="space-y-2 text-left">
          <div className="mb-8 border-l-2 border-orange-500/30 pl-4">
            <h4 className="text-2xl font-light text-white mb-2">
              Visual Artifacts
            </h4>
            <p className="text-slate-400 text-sm max-w-2xl">
              A curated collection of digital photography and abstract
              processing.
            </p>
          </div>
          {section.categories.map((cat, index) => (
            <GalleryStage key={index} category={cat} color={section.color} />
          ))}
        </div>
      );
    case "writing":
      return (
        <TerminalReader documents={section.documents} color={section.color} />
      );

    case "ai":
      return (
        <div className="min-h-[400px] flex flex-col md:flex-row items-center gap-12 px-2 relative overflow-hidden text-left">
          <div
            className="absolute -left-20 -top-20 w-80 h-80 opacity-[0.05] blur-[120px] rounded-full pointer-events-none"
            style={{ backgroundColor: section.color }}
          />

          <div className="relative z-10 flex-1 max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={24} style={{ color: section.color }} />
              <div className="h-px w-12 bg-white/10" />
            </div>
            <p className="text-3xl md:text-4xl text-slate-200 font-normal leading-tight tracking-tight mb-8">
              {section.impactText}
            </p>
            <div
              className="h-1.5 w-16 rounded-full opacity-60"
              style={{ backgroundColor: section.color }}
            />
          </div>

          <div className="relative z-10 w-full md:w-72 space-y-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h5 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-6">
                Development Stack
              </h5>
              <div className="space-y-5">
                {section.tech.map((t, idx) => (
                  <div key={idx} className="group">
                    <div className="text-[10px] font-mono text-slate-600 uppercase mb-1">
                      {t.label}
                    </div>
                    <div className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: section.color }}
                      />
                      {t.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 opacity-30 italic text-xs text-slate-500">
              <Zap size={14} />
              <span>optimized for intelligence</span>
            </div>
          </div>
        </div>
      );

    case "contact":
      return (
        <div className="max-w-xl mx-auto text-left">
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-500">
                  IDENTIFIER
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={contactForm.name}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-500">
                  RETURN ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-500">
                TRANSMISSION
              </label>
              <textarea
                rows={6}
                placeholder="Message content..."
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              <span>Send Transmission</span>
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      );
    default:
      return (
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {(section.items || section.roles || []).map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <h5 className="text-xl font-bold text-white mb-1">
                {item.title || item.org}
              </h5>
              <div
                className="text-sm font-mono mb-4 opacity-80"
                style={{ color: section.color }}
              >
                {item.role || "Role"}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center gap-2 text-xs font-mono hover:text-white transition-colors"
                >
                  VIEW LINK <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      );
  }
};

/* ==============================================================================
  MAIN APP COMPONENT
  ==============================================================================
*/
export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeSection ? "hidden" : "unset";
  }, [activeSection]);

  return (
    <div className="min-h-screen w-full bg-[#030303] text-slate-200 p-4 md:p-8 lg:p-12 font-sans selection:bg-white/20">
      <div className="max-w-7xl mx-auto mb-12 border-b border-white/10 pb-8">
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <div className="flex flex-col md:flex-row gap-12 items-start flex-1">
            {/* UPDATED HEADSHOT: STATIC AND PROPORTIONAL */}
            <div className="w-full md:w-64 lg:w-72 aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 relative shrink-0">
              <img
                src={portfolioData.header.headshot}
                alt="Gabe Ruiz"
                className="w-full h-full object-cover"
                style={{ objectPosition: "70% center" }}
              />
            </div>

            <div className="space-y-8 flex-1 text-left pt-2">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-4">
                  {portfolioData.header.name}
                </h1>
                <h2 className="text-xl md:text-2xl font-light text-slate-400 tracking-widest uppercase flex items-center gap-3">
                  {portfolioData.header.title}
                  {/* REFINED DASH: Matches color and weight of surrounding text for understated look */}
                  <span className="text-slate-400 font-light">—</span>
                  {portfolioData.header.subTitle}
                </h2>
              </div>

              <div className="space-y-3 border-l-2 border-emerald-500/20 pl-6 max-w-2xl">
                <p className="text-emerald-400 font-mono text-sm tracking-[0.2em] uppercase font-bold">
                  About:
                </p>
                <p className="text-slate-400 text-lg leading-relaxed font-light italic">
                  {portfolioData.header.about}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end shrink-0 pt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-mono text-xs tracking-widest">
                SYSTEM ONLINE
              </span>
            </div>
            <div className="text-[10px] text-slate-600 font-mono">
              V.3.0.4 [NEON]
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-6 mb-24">
        <NeonCard
          item={portfolioData.sections.video}
          onClick={setActiveSection}
          className="lg:col-span-2"
        />
        <NeonCard
          item={portfolioData.sections.audio}
          onClick={setActiveSection}
        />
        <NeonCard
          item={portfolioData.sections.writing}
          onClick={setActiveSection}
        />
        <NeonCard
          item={portfolioData.sections.gallery}
          onClick={setActiveSection}
          className="lg:row-span-2"
        />
        <NeonCard
          item={portfolioData.sections.human}
          onClick={setActiveSection}
          className="lg:col-span-2"
        />
        <NeonCard
          item={portfolioData.sections.editorial}
          onClick={setActiveSection}
        />
        <NeonCard
          item={portfolioData.sections.ai}
          onClick={setActiveSection}
          className="lg:col-span-2"
        />
        <NeonCard
          item={portfolioData.sections.contact}
          onClick={setActiveSection}
          className="lg:col-span-1"
        />
      </div>

      <footer className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs font-mono">
        <div>© 2025 GABE RUIZ. ALL RIGHTS RESERVED.</div>
        <div>DESIGNED WITH REACT & TAILWIND</div>
      </footer>

      {activeSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            onClick={() => setActiveSection(null)}
          />
          <div className="relative w-full max-w-5xl bg-[#0f0f0f] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full md:h-auto md:max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0a0a0a]">
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-full bg-white/5"
                  style={{ color: activeSection.color }}
                >
                  <activeSection.icon size={24} />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">
                    {activeSection.title}
                  </h2>
                  <p
                    className="text-sm font-mono opacity-60"
                    style={{ color: activeSection.color }}
                  >
                    {activeSection.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveSection(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <ContentRenderer section={activeSection} />
            </div>
          </div>
        </div>
      )}
      <style
        dangerouslySetInnerHTML={{
          __html: `.custom-scrollbar::-webkit-scrollbar { width: 8px; } .custom-scrollbar::-webkit-scrollbar-track { background: #0a0a0a; } .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }`,
        }}
      />
    </div>
  );
}
