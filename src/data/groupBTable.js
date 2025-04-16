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
    mecze: 2,
    runyPlus: 44,
    runyMinus: 8,
    zwyciestwa: 2,
    remisy: 0,
    przegrane: 0,
    punkty: 4,
  },
  {
    poz: 2,
    druzyna: {
      nazwa: 'Falcons Łódź',
      logo: FalconsLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 19,
    runyMinus: 10,
    zwyciestwa: 1,
    remisy: 0,
    przegrane: 1,
    punkty: 2,
  },
  {
    poz: 3,
    druzyna: {
      nazwa: 'Giganci Zielona Góra',
      logo: GiganciLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 10,
    runyMinus: 19,
    zwyciestwa: 1,
    remisy: 0,
    przegrane: 1,
    punkty: 2,
  },

  {
    poz: 4,
    druzyna: {
      nazwa: 'Demony Miejska Górka',
      logo: DemonyLogo, // Załóżmy, że masz logo o takiej nazwie
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
    poz: 5,
    druzyna: {
      nazwa: 'Szczecin Titans',
      logo: TitansLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 8,
    runyMinus: 44,
    zwyciestwa: 0,
    remisy: 0,
    przegrane: 2,
    punkty: 0,
  },
]

export default groupBTable
