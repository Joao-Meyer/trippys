/* eslint-disable react/no-unescaped-entities */
import {
  ButtonDiscordImage,
  ButtonXImage,
  CalvinHeadImage,
  CalvinPresentationImage,
  HomeFirstSectionImage,
  HomeFooterImage,
  HomeNFT1Image,
  HomeNFT2Image,
  HomeNFT3Image,
  HomeNFT4Image,
  HomeNFT5Image,
  HomeNFT6Image,
  HomeNFT7Image,
  TabletHomeFirstSectionImage
} from 'main/assets';
import { IoChevronDownSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

export const AuthTemplate: FC = () => {
  const [firstAnimation, setFirstAnimation] = useState<boolean>(true);
  const [secondAnimation, setSecondAnimation] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstAnimation(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondAnimation(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={'flex flex-col items-center overflow-x-hidden relative'}>
      <img
        alt={'Trippys on Blast'}
        className={'hidden laptop:block min-w-[1920px] absolute -z-10 -top-[120px]'}
        src={HomeFirstSectionImage}
      />

      <div
        className={`hidden laptop:block min-w-[1920px] h-[2284px] z-0 absolute transition-all duration-1000 ${firstAnimation ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(to bottom, #00000070 960px, #00000000 1360px)'
        }}
      />

      <img
        alt={'Trippys on Blast'}
        className={'block laptop:hidden min-w-[1140px] absolute -z-10'}
        src={TabletHomeFirstSectionImage}
      />

      <div
        className={`block laptop:hidden min-w-[1140px] h-[1427px] z-0 absolute transition-all duration-1000 ${firstAnimation ? 'opacity-0' : 'opacity-100'}`}
        style={{
          background: 'linear-gradient(to bottom, #00000070 640px, #00000000 880px)'
        }}
      />

      <div className={'h-[1427px] laptop:h-[2284px] w-[100%] relative flex flex-col items-center'}>
        <div className={'flex flex-col w-[100%] h-[100vh] max-h-[1080px] max-w-[1920px] relative'}>
          <img
            alt={'Calvin head'}
            className={`hidden laptop:block absolute top-[30px] left-[60px] transition-all duration-1000 ${secondAnimation ? 'opacity-0' : 'opacity-100'}`}
            src={CalvinHeadImage}
          />

          <div
            className={`flex flex-col items-center laptop:items-start laptop:absolute top-0 laptop:ml-[200px] mt-[80px] laptop:mt-[120px] transition-transform duration-1000 transform ${firstAnimation ? '-translate-x-[1000px]' : 'translate-x-0'}`}
          >
            <p
              className={
                'font-superCool leading-[1.25] text-[32px] laptop:text-[60px] text-[#FCFC03] drop-shadow-[0px_5px_2px_#00000080]'
              }
            >
              Welcome to
            </p>

            <p
              className={
                'font-superCool leading-[1.25] text-[80px] laptop:text-[180px] text-[#FCFC03] uppercase drop-shadow-[0px_5px_2px_#00000080] laptop:drop-shadow-[0px_10px_2px_#00000080]'
              }
            >
              Trippys
            </p>
          </div>

          <div
            className={`flex flex-col laptop:absolute laptop:right-[40px] mt-[40px] laptop:h-[calc(100%-80px)] justify-between items-center laptop:items-end transition-opacity duration-1000 ${secondAnimation ? 'opacity-0' : 'opacity-100'}`}
          >
            <svg
              className={'hidden laptop:block'}
              fill={'none'}
              height={'124'}
              viewBox={'0 0 124 124'}
              width={'124'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              <path
                d={
                  'M2 2H60.3431C61.404 2 62.4214 2.42143 63.1716 3.17157L120.828 60.8284C121.579 61.5786 122 62.596 122 63.6569V122'
                }
                stroke={'#FCFC03'}
                strokeLinecap={'square'}
                strokeWidth={'4'}
              />
            </svg>

            <div className={'flex flex-row laptop:flex-col gap-[20px] items-center'}>
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
              className={'hidden laptop:block'}
              fill={'none'}
              height={'165'}
              viewBox={'0 0 124 165'}
              width={'124'}
              xmlns={'http://www.w3.org/2000/svg'}
            >
              <path
                d={
                  'M2 163H60.3431C61.404 163 62.4214 162.579 63.1716 161.828L120.828 104.172C121.579 103.421 122 102.404 122 101.343V43'
                }
                stroke={'#FCFC03'}
                strokeLinecap={'square'}
                strokeWidth={'4'}
              />

              <path d={'M122 28V20'} stroke={'#FCFD06'} strokeWidth={'4'} />
              <path d={'M122 8V0'} stroke={'#FCFD06'} strokeWidth={'4'} />
            </svg>
          </div>

          <div
            className={`w-full laptop:w-auto flex flex-col gap-[10px] laptop:gap-[20px] laptop:mt-0 absolute bottom-[80px] laptop:bottom-[80px] laptop:ml-[200px] items-center transition-transform duration-1000 transform ${secondAnimation ? '-translate-x-[500px]' : 'translate-x-0'}`}
          >
            <div
              className={
                'relative w-[54px] h-[90px] laptop:w-[72px] laptop:h-[120px] flex flex-col items-center border-[2px] laptop:border-[4px] border-[#FCFC03]'
              }
            >
              <IoChevronDownSharp
                className={
                  'absolute text-[#FCFC03] animate-tablet-float-up-down laptop:animate-float-up-down w-[36px] h-[36px] laptop:w-[48px] laptop:h-[48px]'
                }
              />
            </div>

            <p className={'text-[#FCFC03] text-[20px] font-[500] font-orbitron'}>Scroll</p>
          </div>

          <p
            className={`hidden laptop:block absolute w-full text-center bottom-[30px] text-[#FCFC03] font-[500] uppercase font-orbitron transition-opacity duration-1000 transform ${secondAnimation ? 'opacity-0' : 'opacity-100'}`}
          >
            Trippys on Blast
          </p>
        </div>

        <h2
          className={
            'absolute w-[320px] laptop:w-[1140px] text-right text-[24px] laptop:text-[40px] text-[#FFFFFF] top-[979px] laptop:top-[1460px]'
          }
        >
          ... The collection that will accompany you on your travels
        </h2>

        <h2
          className={
            'absolute w-[320px] laptop:w-[1140px] text-left text-[24px] laptop:text-[40px] text-[#FFFFFF] top-[1167px] laptop:top-[1980px]'
          }
        >
          And in your wallet ...
        </h2>
      </div>

      <div
        className={
          'max-w-[320px] laptop:max-w-[1140px] flex flex-col mt-[80px] laptop:mt-[156px] gap-[40px] laptop:gap-[80px]'
        }
      >
        <h2 className={'text-[#424242] text-[24px] laptop:text-[40px] uppercase'}>
          Do you already know our avatar Calvin?
        </h2>

        <div
          className={
            'flex flex-col-reverse laptop:flex-row gap-[40px] laptop:gap-[160px] laptop:max-w-[1140px]'
          }
        >
          <p
            className={
              'text-[#424242] text-justify text-[16px] laptop:text-[20px] leading-[1.5] font-[500]'
            }
          >
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
            className={'w-[320px] laptop:w-[400px] h-[320px] laptop:h-[400px]'}
            src={CalvinPresentationImage}
          />
        </div>
      </div>

      <div
        className={
          'flex flex-col items-center bg-gradient-to-b from-[#2F2F2F] via-[#2F2F2F] to-[#000000] w-[100%] pt-[40px] mt-[120px] laptop:mt-[200px]'
        }
      >
        <hr className={'w-[100px] border-[#FCFC03] border-[2px] radius-[40px] rounded-full'} />

        <div
          className={
            'flex flex-col max-w-[320px] laptop:max-w-[1140px] pt-[80px] laptop:pt-[160px] gap-[80px] laptop:gap-[200px] pb-[120px] laptop:pb-[220px]'
          }
        >
          <div className={'flex items-center flex-col gap-[40px] laptop:gap-[80px]'}>
            <h2 className={'text-[#FCFC03] text-[24px] laptop:text-[40px] text-right w-[100%]'}>
              Just trip, what else?
            </h2>

            <p
              className={
                'text-[16px] laptop:text-[20px] text-[#FFFFFF] font-[500] text-justify leading-[1.5]'
              }
            >
              Trippys NFT is about fun and good vibes, always trying to hit a laugh and sometimes
              reflections. Let's wander through what imagination, the unspeakable and maybe a little
              bit of psychoactives can show us with the stylish collection pieces. Have fun!!
            </p>

            <div className={'flex flex-col laptop:flex-row gap-[40px] laptop:gap-[120px]'}>
              <img
                alt={'Trippys NFT'}
                className={'w-[320px] laptop:w-[400px] h-[320px] laptop:h-[400px]'}
                src={HomeNFT1Image}
              />

              <div className={'flex flex-row flex-wrap gap-[40px]'}>
                <img
                  alt={'Trippys NFT'}
                  className={'w-[140px] laptop:w-[180px] h-[140px] laptop:h-[180px]'}
                  src={HomeNFT2Image}
                />

                <img
                  alt={'Trippys NFT'}
                  className={'w-[140px] laptop:w-[180px] h-[140px] laptop:h-[180px]'}
                  src={HomeNFT3Image}
                />

                <img
                  alt={'Trippys NFT'}
                  className={'w-[140px] laptop:w-[180px] h-[140px] laptop:h-[180px]'}
                  src={HomeNFT4Image}
                />

                <img
                  alt={'Trippys NFT'}
                  className={'w-[140px] laptop:w-[180px] h-[140px] laptop:h-[180px]'}
                  src={HomeNFT5Image}
                />

                <img
                  alt={'Trippys NFT'}
                  className={'w-[140px] laptop:w-[180px] h-[140px] laptop:h-[180px]'}
                  src={HomeNFT6Image}
                />

                <img
                  alt={'Trippys NFT'}
                  className={'w-[140px] laptop:w-[180px] h-[140px] laptop:h-[180px]'}
                  src={HomeNFT7Image}
                />
              </div>
            </div>
          </div>

          <div className={'flex flex-col gap-[80px]'}>
            <h2 className={'text-[#FFFFFF] text-[24px] laptop:text-[40px] text-center'}>
              Follow us on Twitter so you don't miss any updates and Set your NFT, until our next
              trip!
            </h2>

            <div className={'flex justify-center md:justify-start gap-[20px] laptop:gap-[40px]'}>
              <a
                aria-labelledby={'Twitter'}
                href={'https://twitter.com/TrippysNFT'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <img
                  alt={'Twitter'}
                  className={'w-[50px] laptop:w-[64px] h-[50px] laptop:h-[64px]'}
                  src={ButtonDiscordImage}
                />
              </a>

              <a
                aria-labelledby={'X'}
                href={'https://discord.gg/p9zGAacTYw'}
                rel={'noreferrer'}
                target={'_blank'}
              >
                <img
                  alt={'X'}
                  className={'w-[50px] laptop:w-[64px] h-[50px] laptop:h-[64px]'}
                  src={ButtonXImage}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={'flex flex-col items-center relative w-[100%] max-h-[1080px] max-w-[1920px]'}>
        <img alt={'Trippys on Blast'} className={'w-[100%] h-full'} src={HomeFooterImage} />

        <svg
          className={'hidden laptop:block absolute left-[40px] bottom-[40px]'}
          fill={'none'}
          height={'124'}
          viewBox={'0 0 124 124'}
          width={'124'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M122 122H63.6569C62.596 122 61.5786 121.579 60.8284 120.828L3.17157 63.1716C2.42143 62.4214 2 61.404 2 60.3431V2'
            }
            stroke={'#FCFC03'}
            strokeLinecap={'square'}
            strokeWidth={'4'}
          />
        </svg>

        <svg
          className={'hidden laptop:block absolute right-[40px] bottom-[40px]'}
          fill={'none'}
          height={'124'}
          viewBox={'0 0 124 124'}
          width={'124'}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M2 122H60.3431C61.404 122 62.4214 121.579 63.1716 120.828L120.828 63.1716C121.579 62.4214 122 61.404 122 60.3431V2'
            }
            stroke={'#FCFC03'}
            strokeLinecap={'square'}
            strokeWidth={'4'}
          />
        </svg>
      </div>
    </div>
  );
};
