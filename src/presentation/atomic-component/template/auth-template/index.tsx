/* eslint-disable react/no-unescaped-entities */
import {
  ButtonDiscordImage,
  ButtonXImage,
  CalvinPresentationImage,
  HomeFirstSectionBeforeImage,
  HomeFooterImage,
  HomeNFT1Image,
  HomeNFT2Image,
  HomeNFT3Image,
  HomeNFT4Image,
  HomeNFT5Image,
  HomeNFT6Image,
  HomeNFT7Image,
  ScrollDownImage
} from 'main/assets';
import { type FC, useEffect, useState } from 'react';

export const AuthTemplate: FC = () => {
  const [showFirstImage, setShowFirstImage] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstImage(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={'flex flex-col items-center overflow-x-hidden relative'}>
      <img
        alt={'Trippys on Blast'}
        className={'min-w-[1920px] absolute -z-10'}
        src={HomeFirstSectionBeforeImage}
      />

      <div
        className={`min-w-[1920px] h-[2404px] z-0 absolute transition-all duration-1000 ${showFirstImage ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(to bottom, #00000040 1080px, #00000000 1480px)'
        }}
      />

      <div className={'h-[2404px] w-[100%] relative flex flex-col  items-center'}>
        <div className={'flex flex-col w-[100%] h-[100vh] max-h-[1080px] max-w-[1920px] relative'}>
          <div className={'flex flex-col absolute top-0 left-0 ml-[200px] mt-[120px]'}>
            <p className={'font-superCool leading-[1.5] text-[60px] text-[#FCFC03]'}>Welcome to</p>
            <p className={'font-superCool leading-[1.5] text-[180px] text-[#FCFC03]'}>Trippys</p>
          </div>

          <div
            className={'flex flex-col gap-[20px] absolute bottom-[80px] ml-[200px] items-center'}
          >
            <img alt={'Scroll Down'} src={ScrollDownImage} />
            <p className={'text-[#FCFC03] text-[20px]'}>Scroll</p>
          </div>

          <div
            className={
              'flex flex-col absolute right-[40px] mt-[40px] h-[calc(100%-80px)] justify-between items-end'
            }
          >
            <svg
              className={'transform-none origin-[50% 50%] cursor-none max-h-none'}
              height={'124'}
              viewBox={'0 0 1240 1240'}
              width={'124'}
            >
              <g className={'transform-none'} fill={'#FCFC03'}>
                <g>
                  <path
                    d={
                      'M1200 932 l0 -307 -293 -293 -292 -292 -308 0 c-300 0 -307 0 -307 -20 0 -20 7 -20 300 -20 242 0 306 3 328 14 33 18 585 572 601 603 7 14 11 123 11 322 0 294 0 301 -20 301 -20 0 -20 -7 -20 -308z'
                    }
                  />
                </g>
              </g>
            </svg>

            <div className={'flex flex-col gap-[20px] items-center'}>
              <a
                aria-labelledby={'Twitter'}
                href={'https://twitter.com/TrippysNFT'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <img alt={'Twitter'} src={ButtonDiscordImage} />
              </a>

              <a
                aria-labelledby={'X'}
                href={'https://discord.gg/p9zGAacTYw'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <img alt={'X'} src={ButtonXImage} />
              </a>
            </div>

            <svg
              className={'transform-none origin-[50% 50%] cursor-none max-h-none'}
              height={'164'}
              viewBox={'0 0 1240 1640'}
              width={'124'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              <g className={'transform-none'} fill={'#FCFC03'}>
                <g>
                  <path
                    d={
                      'M0 1620 c0 -20 7 -20 308 -20 l307 0 293 -293 292 -292 0 -308 c0 -300 0 -307 20 -307 20 0 20 7 20 300 0 242 -3 306 -14 328 -18 33 -572 585 -603 601 -14 7 -123 11 -322 11 -294 0 -301 0 -301 -20z'
                    }
                  />

                  <path
                    d={
                      'M1200 240 c0 -33 3 -40 20 -40 17 0 20 7 20 40 0 33 -3 40 -20 40 -17 0 -20 -7 -20 -40z'
                    }
                  />

                  <path
                    d={
                      'M1200 40 c0 -33 3 -40 20 -40 17 0 20 7 20 40 0 33 -3 40 -20 40 -17 0 -20 -7 -20 -40z'
                    }
                  />
                </g>
              </g>
            </svg>
          </div>

          <p
            className={
              'absolute w-full text-center bottom-[30px] text-[#FCFC03] font-[600] uppercase'
            }
          >
            Trippys on Blast
          </p>
        </div>

        <h2 className={'absolute w-[1140px] text-right text-[40px] text-[#FFFFFF] top-[1580px]'}>
          ... The collection that will accompany you on your travels
        </h2>

        <h2 className={'absolute w-[1140px] text-left text-[40px] text-[#FFFFFF] top-[2100px]'}>
          And in your wallet ...
        </h2>
      </div>

      <div className={'max-w-[1140px] flex flex-col mt-[200px]'}>
        <h2 className={'text-[#424242] text-[40px] uppercase'}>
          Do you already know our avatar Calvin
        </h2>

        <div className={'flex gap-[160px] py-10 mx-auto max-w-[1140px]'}>
          <p className={'text-[#424242] text-justify text-[20px] leading-[1.5] font-[500]'}>
            Meet Calvin, the chill NFT Avatar! With his laid-back vibe, slightly squinted eyes, and
            a serene smile, Calvin is all about that carefree, no-worries attitude. He's totally
            into Reggae, Hippies, and everything from the Woodstock era.
            <br />
            Calvin doesn't need shades to stay cool; he rocks his relaxed look effortlessly. You can
            catch him grooving to Bob Marley, his rasta-style locks swaying to the beat.
            <br />
            When he's not exploring the NFT world, Calvin's probably tending to his herb garden or
            doodling mandalas. His motto? "Live and let live." Calvin's always ready to spread good
            vibes in his digital journey.
          </p>

          <img
            alt={'Road trip illustration with a van, mountains, and text about travel'}
            className={'w-[400px] h-[400px]'}
            src={CalvinPresentationImage}
          />
        </div>
      </div>

      <div
        className={
          'flex flex-col items-center bg-gradient-to-b from-[#2F2F2F] via-[#2F2F2F] to-[#000000] w-[100%] pt-[40px] mt-[200px]'
        }
      >
        <hr className={'w-[100px] border-[#FCFC03] border-[2px] radius-[40px] rounded-full'} />

        <div className={'flex flex-col max-w-[1140px] pt-[160px] gap-[200px] pb-[220px]'}>
          <div className={'flex items-center flex-col gap-[80px]'}>
            <h2 className={'text-[#FCFC03] text-[40px] text-right w-[100%]'}>
              Just trip, what else?
            </h2>

            <p className={'text-[20px] text-[#FFFFFF] font-[500] text-justify leading-[1.5]'}>
              Trippys NFT is about fun and good vibes, always trying to hit a laugh and sometimes
              reflections. Let's wander through what imagination, the unspeakable and maybe a little
              bit of psychoactives can show us with the stylish collection pieces. Have fun!!
            </p>

            <div className={'flex flex-row gap-[120px]'}>
              <img alt={''} className={'w-[400px] h-[400px]'} src={HomeNFT1Image} />

              <div className={'flex flex-col justify-between'}>
                <div className={'flex flex-row gap-[40px]'}>
                  <img alt={''} src={HomeNFT2Image} />
                  <img alt={''} src={HomeNFT3Image} />
                  <img alt={''} src={HomeNFT4Image} />
                </div>

                <div className={'flex flex-row gap-[40px]'}>
                  <img alt={''} src={HomeNFT5Image} />
                  <img alt={''} src={HomeNFT6Image} />
                  <img alt={''} src={HomeNFT7Image} />
                </div>
              </div>
            </div>
          </div>

          <div className={'flex flex-col gap-[80px]'}>
            <h2 className={'text-[#FFFFFF] text-[40px] text-center'}>
              Follow us on Twitter so you don't miss any updates and Set your NFT, until our next
              trip!
            </h2>

            <div className={'flex justify-center md:justify-start gap-[40px]'}>
              <a
                aria-labelledby={'Twitter'}
                href={'https://twitter.com/TrippysNFT'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <img alt={'Twitter'} src={ButtonDiscordImage} />
              </a>

              <a
                aria-labelledby={'X'}
                href={'https://discord.gg/p9zGAacTYw'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <img alt={'X'} src={ButtonXImage} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img alt={'Trippys on Blast'} className={'min-w-[1920px]'} src={HomeFooterImage} />
    </div>
  );
};
