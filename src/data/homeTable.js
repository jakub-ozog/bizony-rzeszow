import BizonyLogo from '@/assets/logo/bizony.webp'
import KingsLogo from '@/assets/logo/kings.webp'
import RawaLogo from '@/assets/logo/rawa.webp'
import WizardsLogo from '@/assets/logo/wizards.webp'

export const homeTable = [
  {
    poz: 1,
    druzyna: {
      nazwa: 'Wizards Opole',
      logo: WizardsLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 33,
    runyMinus: 27,
    zwyciestwa: 1,
    remisy: 0,
    przegrane: 1,
    punkty: 2,
  },
  {
    poz: 2,
    druzyna: {
      nazwa: 'Bizony Rzeszów',
      logo: BizonyLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 2,
    runyPlus: 27,
    runyMinus: 33,
    zwyciestwa: 1,
    remisy: 0,
    przegrane: 1,
    punkty: 2,
  },

  {
    poz: 3,
    druzyna: {
      nazwa: 'Kraków Kings',
      logo: KingsLogo, // Załóżmy, że masz logo o takiej nazwie
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
      nazwa: 'Rawa Katowice',
      logo: RawaLogo, // Załóżmy, że masz logo o takiej nazwie
    },
    mecze: 0,
    runyPlus: 0,
    runyMinus: 0,
    zwyciestwa: 0,
    remisy: 0,
    przegrane: 0,
    punkty: 0,
  },
]
