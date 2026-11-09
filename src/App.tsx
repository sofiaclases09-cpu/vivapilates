import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Profiles } from './components/Profiles';
import { Community } from './components/Community';
import { FaqSection } from './components/FaqSection';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BreathPhase } from './types';

export default function App() {
  // Somatic Breathing Rhythm State (4-2-4 Inhalar - Sostener - Soltar)
  const [breathPhase, setBreathPhase] = useState<BreathPhase>('inhale');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const runCycle = () => {
      setBreathPhase('inhale');
      timeoutId = setTimeout(() => {
        setBreathPhase('hold');
        timeoutId = setTimeout(() => {
          setBreathPhase('exhale');
          timeoutId = setTimeout(runCycle, 4000);
        }, 2000);
      }, 4000);
    };
    runCycle();
    return () => clearTimeout(timeoutId);
  }, []);

  // Welcome Conversation Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ambient soundscape player (/sintonizar.mp3 with 432Hz harmonic tone fallback)
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioOscillator, setAudioOscillator] = useState<OscillatorNode | null>(null);

  useEffect(() => {
    const audio = new Audio('/sintonizar.mp3');
    audio.loop = true;
    audio.volume = 0.35;

    const onPlay = () => setIsPlayingSound(true);
    const onPause = () => setIsPlayingSound(false);
    const onEnded = () => setIsPlayingSound(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onEnded);
      audio.pause();
    };
  }, []);

  const toggleCalmTone = async () => {
    try {
      if (isPlayingSound) {
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
        }
        if (audioOscillator) {
          audioOscillator.stop();
          audioOscillator.disconnect();
          setAudioOscillator(null);
        }
        setIsPlayingSound(false);
        return;
      }

      // Try playing sintonizar.mp3
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlayingSound(true);
          return;
        } catch (audioErr) {
          console.info('sintonizar.mp3 usando fallback armónico 432Hz:', audioErr);
        }
      }

      // Fallback: Web Audio API sine oscillator at 432Hz
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioContext || new AudioCtx();
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
      setAudioContext(ctx);

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(432, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      setAudioOscillator(osc);
      setIsPlayingSound(true);
    } catch (e) {
      console.warn('Audio Context not available', e);
    }
  };

  // WhatsApp link helper
  const openWhatsApp = (customText?: string) => {
    const defaultMsg =
      'Hola VIVA Pilates, me gustaría agendar una conversación de bienvenida y conocer el estudio en Providencia.';
    const text = encodeURIComponent(customText || defaultMsg);
    window.open(`https://wa.me/56965258234?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="viva-app-container" className="min-h-screen bg-[#F6F2EA] text-[#4A4540] relative overflow-x-hidden selection:bg-[#BA4F12]/20 selection:text-[#5E4E63]">
      {/* Organic Ambient Light Bleeds */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#5E4E63]/10 blur-[130px] animate-pulse-glow" />
        <div className="absolute top-[35%] -right-40 w-[550px] h-[550px] rounded-full bg-[#BA4F12]/8 blur-[140px]" />
        <div className="absolute top-[70%] left-[10%] w-[650px] h-[650px] rounded-full bg-[#606E51]/10 blur-[150px]" />
      </div>

      {/* 1. Header & Navigation */}
      <Navbar
        isPlayingSound={isPlayingSound}
        toggleCalmTone={toggleCalmTone}
        openWhatsApp={openWhatsApp}
        onOpenBookingModal={() => setIsModalOpen(true)}
      />

      {/* 2. Main Content Landmarks */}
      <main id="main-content" role="main">
        <Hero
          breathPhase={breathPhase}
          onOpenBookingModal={() => setIsModalOpen(true)}
        />
        <Philosophy />
        <Profiles onOpenBookingModal={() => setIsModalOpen(true)} />
        <Community
          openWhatsApp={openWhatsApp}
          onOpenBookingModal={() => setIsModalOpen(true)}
        />
        <FaqSection
          openWhatsApp={openWhatsApp}
          onOpenBookingModal={() => setIsModalOpen(true)}
        />
        <Location openWhatsApp={openWhatsApp} />
      </main>

      {/* 3. Semantic Footer */}
      <Footer onOpenBookingModal={() => setIsModalOpen(true)} />

      {/* 4. Floating WhatsApp Quick Action */}
      <FloatingWhatsApp openWhatsApp={openWhatsApp} />

      {/* 5. Booking & Welcome Conversation Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        openWhatsApp={openWhatsApp}
      />
    </div>
  );
}
