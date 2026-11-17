// All page text and image references live here, so the content can be
// edited without touching the layout components.
import heroMug from '../assets/hero-mug.svg'
import latte from '../assets/drink-latte.svg'
import matcha from '../assets/drink-matcha.svg'
import chai from '../assets/drink-chai.svg'
import nook from '../assets/space-reading-nook.svg'
import windowSeats from '../assets/space-window-seats.svg'
import counter from '../assets/space-counter.svg'

export const cafe = {
  name: 'Campus Corner',
  headline: 'A quiet table between classes.',
  welcome:
    'Welcome to Campus Corner, the student café where you can read, chat or simply take a break. Grab a drink and stay as long as your timetable allows.',
  heroImage: heroMug,
  heroAlt: 'A steaming coffee mug',

  about: {
    title: 'The space',
    paragraphs: [
      'Campus Corner is a small, calm café run for students. We keep the music low, the lamps warm and the Wi-Fi free.',
      'Take the armchair corner for reading, a window stool for a quick chat, or a seat by the counter when you only have ten minutes.'
    ],
    points: ['Quiet reading corner', 'Free Wi-Fi and charging sockets', 'Study-group tables for four']
  },

  drinksTitle: 'Three drinks to start with',
  drinksNote: 'Prices are sample prices.',
  drinks: [
    {
      name: 'Iced oat latte',
      image: latte,
      price: '$4.50',
      size: '350 ml',
      taste: 'Smooth and lightly sweet',
      caffeine: 'Medium',
      bestFor: 'A long study session'
    },
    {
      name: 'Iced matcha latte',
      image: matcha,
      price: '$5.00',
      size: '350 ml',
      taste: 'Fresh and grassy',
      caffeine: 'Low',
      bestFor: 'A calm afternoon'
    },
    {
      name: 'Hot spiced chai',
      image: chai,
      price: '$4.00',
      size: '300 ml',
      taste: 'Warm and spicy',
      caffeine: 'Low',
      bestFor: 'A rainy day'
    }
  ],

  galleryTitle: 'Look around',
  gallery: [
    { src: nook, alt: 'The reading nook with an armchair and lamp', caption: 'Reading nook' },
    { src: windowSeats, alt: 'Window stools facing the garden', caption: 'Window seats' },
    { src: counter, alt: 'The counter under warm pendant lamps', caption: 'The counter' }
  ],

  visit: {
    title: 'Visit us',
    sampleNote: 'Sample details: replace these with the real café information.',
    // Index matches Date.getDay(): 0 = Sunday ... 6 = Saturday
    hours: [
      { day: 'Sunday', time: 'Closed' },
      { day: 'Monday', time: '8:00 – 19:00' },
      { day: 'Tuesday', time: '8:00 – 19:00' },
      { day: 'Wednesday', time: '8:00 – 19:00' },
      { day: 'Thursday', time: '8:00 – 19:00' },
      { day: 'Friday', time: '8:00 – 19:00' },
      { day: 'Saturday', time: '9:00 – 17:00' }
    ],
    locationTitle: 'Where to find us',
    address: ['Student Centre, Level 1', 'Next to the Main Library', 'Sample University Campus'],
    contactTitle: 'Get in touch',
    email: 'hello@campuscorner.example',
    phone: '+00 0000 0000'
  }
}
