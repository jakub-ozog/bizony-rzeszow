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
    gameType: 'BLB',
    dateTime: new Date('2025-05-25T11:00:00'),
  },
  {
    id: 3,
    team1: 'Bizony Rzeszów',
    team2: 'Kraków Kings',
    date: '08.06.2025',
    time: '11:00',
    team1Logo: BizonyLogo,
    team2Logo: KingsLogo,
    location: 'Rzeszów',
    gameType: 'BLB',
    dateTime: new Date('2025-06-08T11:00:00'),
  },
]

export default upcomingMatches
