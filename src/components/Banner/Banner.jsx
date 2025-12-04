import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import s from './Banner.module.css'


const Banner = ({ artists = [], isSearching = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const safeArtists = Array.isArray(artists) ? artists : [];

  if (!safeArtists.length) return null;

  useEffect(() => {
    if (isSearching) return;
    if (!safeArtists.length) return;
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % safeArtists.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [safeArtists.length, isPaused, isSearching]);

  const currentArtist = safeArtists[currentIndex];
if (!currentArtist) return null;

  const image =
    currentArtist.picture_xl ||
    currentArtist.picture_big ||
    currentArtist.picture_medium ||
    '../../../public/main-logo.svg';
const name = isSearching
  ? currentArtist.title ||
    currentArtist.name ||
    currentArtist.artist?.name ||
    'Unknown'
    : currentArtist.name || 'Unknown';
  
  return (
    <div
      className={s.banner}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Artist banner"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentArtist.id}
          src={image}
          alt={name}
          className={s.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      <div className={s.overlay}>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={s.name}
        >
          {name}
        </motion.h2>
      </div>
    </div>
  );
};

export default Banner