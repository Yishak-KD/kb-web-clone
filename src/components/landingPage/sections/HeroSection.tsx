import CardSection from '@/components/CardSection';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga4';

interface CardItemContents {
  id: number;
  title: string;
  detailTitle?: string;
  backgroundImage: string;
  detailIcon: string;
  image?: string;
  footerItem?: string;
  redirect: string;
}

const CardItems: CardItemContents[] = [
  {
    id: 1,
    title: 'Never miss your daily devotionals!',
    backgroundImage: '/images/blue.svg',
    detailIcon: '/images/whitearrow.svg',
    detailTitle: 'See more',
    footerItem: '/images/group1.svg',
    redirect: '/#dailyDevotions',
  },
  {
    id: 2,
    title: 'Enjoy audio bible!',
    backgroundImage: '/images/bg2.svg',
    detailIcon: '/images/arrow2.svg',
    detailTitle: 'Visit section',
    image: '/images/mdplayer.svg',
    redirect: '#audioBible',
  },
  {
    id: 3,
    title: 'Join our fundraising!',
    backgroundImage: '/images/bg3.svg',
    detailIcon: '/images/whitearrow.svg',
    detailTitle: 'Donate Now!',
    redirect: '#donateNow',
  },
  {
    id: 4,
    title: 'Start reading!',
    backgroundImage: '/images/bg4.svg',
    detailIcon: '/images/arrow3.svg',
    detailTitle: '',
    redirect: '#features',
  },
  {
    id: 5,
    title: 'How it All Started!',
    backgroundImage: '/images/bg5.svg',
    detailIcon: '/images/arrow4.svg',
    detailTitle: 'View features',
    footerItem: '',
    redirect: '#features',
  },
];

const HeroSection = () => {
  const trackOutboundLinkPlaystore = (url: string) => {
    ReactGA.event({
      category: 'Outbound Link for Playstore',
      action: 'clicked_playstore_link',
      label: url,
    });
  };
  const trackOutboundLinkAppstore = (url: string) => {
    ReactGA.event({
      category: 'Outbound Link for App store',
      action: 'clicked_appstore_link',
      label: url,
    });
  };
  return (
    <div className='mb-32 pt-40' id='home'>
      <div className='xl:lg:w-4/5 w-full m-auto'>
        <div className='text-center lg:w-2/4 md:w-[55%] w-3/4 m-auto'>
          <h1 className='xl:text-8xl lg:text-6xl text-4xl font-semibold mb-4'>
            Kedus <span className='text-[#EED590]'>Bible</span>
          </h1>
          <h3 className='font-semibold mb-4'>
            Amharic, Afaan Oromo, Tigrigna & English
          </h3>
          <p className='leading-7 text-lg mb-5'>
            Enrich your spiritual journey with a thoughtfully designed mobile
            application by accessing the Bible in multiple languages, read daily
            devotionals, and take highlights & notes.
          </p>
        </div>
        <div className='flex flex-row items-center justify-center lg:space-x-6 space-x-2'>
          <Link
            href={
              'https://play.google.com/store/apps/details?id=com.aevue.kedus_bible_flutter'
            }
            target='_blank'
          >
            <Image
              src={'/images/playstore.svg'}
              height={155}
              width={155}
              alt=''
              onClick={() =>
                trackOutboundLinkPlaystore(
                  'https://play.google.com/store/apps/details?id=com.aevue.kedus_bible_flutter'
                )
              }
            />
          </Link>
          <Link
            href={'https://apps.apple.com/us/app/id1501044432'}
            target='_blank'
          >
            <Image
              src={'/images/appstore.svg'}
              height={150}
              width={150}
              alt=''
              onClick={() =>
                trackOutboundLinkAppstore(
                  'https://apps.apple.com/us/app/id1501044432'
                )
              }
            />
          </Link>
        </div>
      </div>
      <CardSection items={CardItems} />
    </div>
  );
};

export default HeroSection;
