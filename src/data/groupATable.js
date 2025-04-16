import CentauryLogo from '@/assets/logo/centaury.webp'
import LisyLogo from '@/assets/logo/lisy.webp'
import MarinersLogo from '@/assets/logo/mariners.webp'
import PiraciLogo from '@/assets/logo/piraci.webp'
import DragonsLogo from '@/assets/logo/dragons.webp'

export const groupATable = [
  {
    poz: 1,
    druzyna: {
      nazwa: 'Piraci Władysławowo',
      logo: PiraciLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 28,
    runyMinus: 6,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 0,
    punkty: 4,
  },

  {
    poz: 2,
    druzyna: {
      nazwa: 'Centaury Warszawa',
      logo: CentauryLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 28,
    runyMinus: 14,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 0,
    punkty: 4,
  },
  {
    poz: 3,
    druzyna: {
      nazwa: 'Lisy Białystok',
      logo: LisyLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 0,
    runyPlus: 0,
    runyMinus: 0,
    zwyciestwa: 0,
    remisy: 0,
    przegrane: 0,
    punkty: 0,
  },
  {
    poz: 4,
    druzyna: {
      nazwa: 'Warsaw Dragons',
      logo: DragonsLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 14,
    runyMinus: 28,
    zwyciestwa: 0,
    remisy: 0,
    przegrane: 2,
    punkty: 0,
  },
  {
    poz: 5,
    druzyna: {
      nazwa: 'Mariners Gdańsk',
      logo: MarinersLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 6,
    runyMinus: 28,
    zwyciestwa: 0,
    remisy: 0,
    przegrane: 2,
    punkty: 0,
  },
]

export default groupATable
