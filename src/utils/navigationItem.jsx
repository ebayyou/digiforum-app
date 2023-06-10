import { Home, Grammerly, Hashtag, Quant, MedalStar } from 'iconsax-react';

const navigationItem = [
  {
    id: '1',
    text: 'Home',
    link: '/',
    icon: (
      <Home
        className="link__icon"
        size="30"
        color="#999999"
      />
    ),
    iconActive: (
      <Home
        className="link__icon-active"
        size="30"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '2',
    text: 'About',
    link: '/about',
    icon: (
      <Grammerly
        className="link__icon"
        size="30"
        color="#999999"
      />
    ),
    iconActive: (
      <Grammerly
        className="link__icon-active"
        size="30"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '3',
    text: 'Threads',
    link: '/threads',
    icon: (
      <Hashtag
        className="link__icon"
        size="30"
        color="#999999"
      />
    ),
    iconActive: (
      <Hashtag
        className="link__icon-active"
        size="30"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '4',
    text: 'Community',
    link: '/community',
    icon: (
      <Quant
        className="link__icon"
        size="30"
        color="#999999"
      />
    ),
    iconActive: (
      <Quant
        className="link__icon-active"
        size="30"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
  {
    id: '5',
    text: 'Leaderboards',
    link: '/leaderboards',
    icon: (
      <MedalStar
        className="link__icon"
        size="30"
        color="#999999"
      />
    ),
    iconActive: (
      <MedalStar
        className="link__icon-active"
        size="30"
        color="#d1caff"
        variant="Bold"
      />
    ),
  },
];

export default navigationItem;
