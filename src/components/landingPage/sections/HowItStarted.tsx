import Image from 'next/image';
import PageHeader from '../PageHeader';

interface ProfileData {
  id: number;
  imageUrl: string;
  bigTitle?: string;
  smallTitle?: string;
  description: string;
  quotedText?: string;
}

const ProfileDataList: ProfileData[] = [
  {
    id: 1,
    imageUrl: '/images/code-tag.png',
    bigTitle: 'How It Started',
    smallTitle: 'THE JOURNEY',
    description:
      'Kedus Bible has its roots in the cherished childhood memories of its founder. Growing up, he experienced the profound impact of nightly family prayer sessions – a tradition passed down from his grandparents and lovingly upheld by his parents. Every evening, his family of seven would gather, each member sharing a Bible verse on their respective days and uniting in prayer. These moments shaped his spiritual journey and left a lasting impression.',
  },
  {
    id: 2,
    imageUrl: '',
    description:
      'Years later, as a college student studying Computer Science, he created the first version of Kedus Bible. Driven by a mission to make the bible accessible, to foster familial fellowship through daily devotionals, and to provide spiritual resources for communities in East Africa and beyond. Today, Kedus Bible has over 25k and growing users across Android and iOS, shaping the lives of families and individuals that use it.',
    quotedText:
      'Our mission remains steadfast, to ensure the transformative power of the scripture is within reach for all.',
  },
];

const HowItStarted = () => {
  return (
    <div className='xl:w-[90%] xl:mt-52 mt-32 mb-28 lg:px-32 px-8 mx-auto'>
      {ProfileDataList.map((item, id) => (
        <>
          {item.id % 2 !== 0 ? (
            <div className='grid lg:grid-cols-4 gap-20 lg:mb-16 mb-2' key={id}>
              <div className='flex flex-col justify-center col-span-2'>
                <div>
                  <PageHeader
                    bigTitle={`${item.bigTitle}`}
                    smallTitle={item.smallTitle}
                  />
                </div>
                <p className='font-sans text-xl'>{item.description}</p>
              </div>
              <div className='col-span-2 flex items-center justify-center'>
                <Image src={item.imageUrl} alt='' width={500} height={500} />
              </div>
            </div>
          ) : (
            <div
              className='grid lg:grid-cols-4 gap-20 lg:mb-16 mb-0 pt-12'
              key={id}
            >
              <div className='col-span-2 flex items-center justify-center lg:block hidden'>
                <div className='font-bold text-[120px] text-[#6e6e6e] pb-4 mt-6'>
                  Cont.
                </div>
              </div>
              <div className='flex flex-col justify-center col-span-2'>
                <p className='font-sans text-xl'>{item.description}</p>
                <blockquote className='relative mt-12'>
                  <svg
                    className='absolute -top-6 -start-14 size-16 text-gray-100 dark:text-neutral-700'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      d='M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z'
                      fill='#EED590'
                    ></path>
                  </svg>
                  <div className='relative z-10'>
                    <p className='text-[20px] text-gray-300:leading-normal dark:text-black'>
                      <em className=''>{item.quotedText}</em>
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default HowItStarted;
