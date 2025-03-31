import BizonyLogo from '@/assets/logo/bizony.webp'
import WizardsLogo from '@/assets/logo/kings.webp'
import KingsLogo from '@/assets/logo/kings.webp'
import RawaLogo from '@/assets/logo/rawa.webp'

const upcomingMatches = [
  {
    id: 1,
    team1: 'Bizony Rzeszów',
    team2: 'Wizards Opole',
    date: '13.04.2025',
    time: '11:00',
    team1Logo: BizonyLogo,
    team2Logo: WizardsLogo,
    location: 'Żory',
    gameType: 'BLB',
    dateTime: new Date('2025-04-13T11:00:00'),
    locationDetails: 'Minimalna 2, 44-247 Żory',
  },
  {
    id: 2,
    team1: 'Bizony Rzeszów',
    team2: 'Rawa Katowice',
    date: '25.05.2025',
    time: '11:00',
    team1Logo: BizonyLogo,
    team2Logo: RawaLogo,
    location: 'Katowice',
    locationDetails: 'Asnyka 27, 40-696 Katowice',
    gameType: 'BLB',
    dateTime: new Date('2025-05-25T11:00:00'),
  },
  {
    id: 3,
    team2: 'Bizony Rzeszów',
    team1: 'Kraków Kings',
    date: '08.06.2025',
    time: '11:00',
    team2Logo: BizonyLogo,
    team1Logo: KingsLogo,
    location: 'Rzeszów',
    locationDetails: 'Salos, Witolda Świadka 5a, 35-310 Rzeszów',
    gameType: 'BLB',
    dateTime: new Date('2025-06-08T11:00:00'),
  },
]

export default upcomingMatches
