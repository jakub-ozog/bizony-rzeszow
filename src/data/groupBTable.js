import DemonyLogo from '@/assets/logo/demony.webp'
import FalconsLogo from '@/assets/logo/falcons.webp'
import GiganciLogo from '@/assets/logo/giganci.webp'
import GoatsLogo from '@/assets/logo/goats.webp'
import TitansLogo from '@/assets/logo/titans.webp'

export const groupBTable = [
  {
    poz: 1,
    druzyna: {
      nazwa: 'Goats Poznań',
      logo: GoatsLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 8,
    runyPlus: 132,
    runyMinus: 53,
    zwyciestwa: 7,
    remisy: 0,
    przegrane: 1,
    punkty: 14,
  },
  {
    poz: 2,
    druzyna: {
      nazwa: 'Demony Miejska Górka',
      logo: DemonyLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 6,
    runyPlus: 78,
    runyMinus: 44,
    zwyciestwa: 4,
    remisy: 0,
    przegrane: 2,
    punkty: 8,
  },
  {
    poz: 3,
    druzyna: {
      nazwa: 'Falcons Łódź',
      logo: FalconsLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 6,
    runyPlus: 43,
    runyMinus: 58,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 4,
    punkty: 4,
  },

  {
    poz: 4,
    druzyna: {
      nazwa: 'Giganci Zielona Góra',
      logo: GiganciLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 6,
    runyPlus: 50,
    runyMinus: 78,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 4,
    punkty: 4,
  },
  {
    poz: 5,
    druzyna: {
      nazwa: 'Szczecin Titans',
      logo: TitansLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 6,
    runyPlus: 32,
    runyMinus: 102,
    zwyciestwa: 1,
    remisy: 0,
    przegrane: 5,
    punkty: 2,
  },
]

export default groupBTable
