(() => {
  'use strict';

  try {
    const SIM = {
      pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; },
      greet(poi, m) {
        const n = poi.name[m] || poi.name.adult;
        return m === 'kids'
          ? `¡Hola! 👋 Estás en ${n}, ¡una aventura chulísima! Escucha lo esencial y elige qué quieres descubrir después.`
          : `Bienvenido a ${n}. Aquí tienes la información esencial. Explora las propuestas interactivas para profundizar a tu ritmo.`;
      }
    };

    const STATE = {
      mode: 'adult',
      category: 'all',
      activePoiId: null,
      activeTab: 'history',
      sheet: 'closed',
      audio: { playing: false, currentTime: 0, duration: 60, timer: null },
      ai: { history: [] }
    };

    const ICONS = {
      plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
      minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
      target: `<svg viewBox="0 0 24 24" fill="
