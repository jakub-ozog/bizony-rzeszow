import CentauryLogo from '@/assets/logo/centaury.webp'
import LisyLogo from '@/assets/logo/lisy.webp'
import MarinersLogo from '@/assets/logo/mariners.webp'
import PiraciLogo from '@/assets/logo/piraci.webp'
import DragonsLogo from '@/assets/logo/dragons.webp'

export const groupATable = [
  {
    poz: 1,
    druzyna: {
      nazwa: 'Centaury Warszawa',
      logo: CentauryLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 4,
    runyPlus: 68,
    runyMinus: 19,
    zwyciestwa: 4,
    remisy: 0,
    przegrane: 0,
    punkty: 8,
  },

  {
    poz: 2,
    druzyna: {
      nazwa: 'Piraci Władysławowo',
      logo: PiraciLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 4,
    runyPlus: 50,
    runyMinus: 17,
    zwyciestwa: 4,
    remisy: 0,
    przegrane: 0,
    punkty: 8,
  },
  {
    poz: 3,
    druzyna: {
      nazwa: 'Mariners Gdańsk',
      logo: MarinersLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 6,
    runyPlus: 49,
    runyMinus: 58,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 4,
    punkty: 4,
  },
  {
    poz: 4,
    druzyna: {
      nazwa: 'Warsaw Dragons',
      logo: DragonsLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 6,
    runyPlus: 52,
    runyMinus: 64,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 4,
    punkty: 4,
  },
  {
    poz: 5,
    druzyna: {
      nazwa: 'Lisy Białystok',
      logo: LisyLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 4,
    runyPlus: 8,
    runyMinus: 69,
    zwyciestwa: 0,
    remisy: 0,
    przegrane: 4,
    punkty: 0,
  },
]

export default groupATable
