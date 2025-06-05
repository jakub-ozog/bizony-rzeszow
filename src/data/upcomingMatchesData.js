import BizonyLogo from '@/assets/logo/bizony.webp'
// import WizardsLogo from '@/assets/logo/wizards.webp'
import KingsLogo from '@/assets/logo/kings.webp'
import RawaLogo from '@/assets/logo/rawa.webp'

const upcomingMatches = [
  // {
  //   id: 1,
  //   team1: 'Kraków Kings',
  //   team2: 'Bizony Rzeszów',
  //   date: '27.04.2025',
  //   time: '11:00',
  //   team1Logo: KingsLogo,
  //   team2Logo: BizonyLogo,
  //   location: 'Żory',
  //   gameType: 'Towarzyski',
  //   dateTime: new Date('2025-04-13T11:00:00'),
  //   locationDetails: 'Minimalna 2, 44-247 Żory',
  // },

  {
    id: 2,
    team2: 'Bizony Rzeszów',
    team1: 'Kraków Kings',
    date: '07.06.2025',
    time: '11:00',
    team2Logo: BizonyLogo,
    team1Logo: KingsLogo,
    location: 'Żory',
    locationDetails: 'Minimalna 2, 44-247 Żory',
    gameType: 'BLB',
    dateTime: new Date('2025-06-08T11:00:00'),
  },
  {
    id: 3,
    team1: 'Bizony Rzeszów',
    team2: 'Rawa Katowice',
    date: '15.06.2025',
    time: '11:00',
    team1Logo: BizonyLogo,
    team2Logo: RawaLogo,
    location: 'Katowice',
    locationDetails: 'Asnyka 27, 40-696 Katowice',
    gameType: 'BLB',
    dateTime: new Date('2025-05-25T11:00:00'),
  },
]

export default upcomingMatches
