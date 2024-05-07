import React from 'react';
import '../App.css';
import { ArrowRight, ArrowRightLeft, Rocket } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay,Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const projects = [

  {
    comment: "Enhance fortune 50 company’s insights teams research capabilities",
  },
  {
    
    comment: "Enhance fortune 50 company’s insights teams research capabilities",
    
  },
  {
    
    comment: "Enhance fortune 50 company’s insights teams research capabilities",
    
  },
]

const HeroSection = () => {
  return (
    <section className='min-h-screen flex flex-col items-center py-8 justify-center'>
      <h1 className='styleFont text-center '>Success stories</h1>
      <h2 className='heroHeading text-center text-3xl md:text-5xl lg:text-6xl'>Every success journey</h2>
      <h2 className='heroHeading  text-center text-3xl md:text-5xl lg:text-6xl'>we've encountered.</h2>
      <div className='flex mt-4 flex-col lg:flex-row items-center justify-center w-full   '>
        <div className=' select-none flex flex-col items-center lg:w-2/3 '>
          <div className='relative '>
            <img src="/girl.png" className='  lg:h-[546px] rounded-2xl w-full md:w-full lg:w-[506px] object-fill' alt="girl" />
            <div className='bg-white absolute top-16 -left-6 md:-left-14 lg:-left-32  w-[140px] md:w-[200px] lg:h-[200px] p-4 rounded-2xl lg:w-[267.82px]'>
              <div className='flex relative'>
                <div className='-rotate-12 -top-12 absolute lg:-top-16  -left-12 '>
                <svg width="103" height="103" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.1859 46.4413C29.7668 47.0822 30.3446 47.7255 30.9061 48.3851C31.2077 48.7311 31.5068 49.0823 31.8308 49.4068C33.5621 51.1369 35.3154 52.8474 37.0044 54.6197C38.039 55.7157 39.0622 56.8225 40.0739 57.94L41.5861 59.6208L43.0793 61.3183C43.3725 61.6697 43.6367 62.0441 43.8694 62.4377C43.972 62.5946 44.0354 62.7738 44.0544 62.9603C44.0734 63.1469 44.0474 63.3355 43.9786 63.5107C43.7988 63.9999 43.2619 64.1319 42.77 63.7545C42.4562 63.5013 42.1757 63.2098 41.9351 62.8869C41.3727 62.162 40.7814 61.464 40.161 60.7928C39.5431 60.1194 38.8975 59.4713 38.224 58.8487C37.8526 58.5047 37.4441 58.1668 37.1621 57.761C36.2596 56.4657 35.0968 55.3913 34.0957 54.1804C33.3509 53.2808 32.5366 52.4366 31.7638 51.5587L29.6945 49.2123C29.0003 48.4343 28.3251 47.6381 27.6329 46.8574C27.372 46.5456 27.1321 46.2171 26.9148 45.8738C26.7175 45.544 26.5387 45.2035 26.3795 44.8539C26.2379 44.5449 26.4146 44.4042 26.7546 44.5948C27.2419 44.8692 27.709 45.1773 28.1527 45.5166C28.3351 45.6558 28.5101 45.8061 28.6787 45.9637C28.8404 46.1279 29.0027 46.2926 29.164 46.4564L29.1859 46.4413Z" fill="black" />
              <path d="M51.6312 34.9063L51.9159 35.9745L52.1748 37.0511C52.2673 37.4316 52.3601 37.8141 52.4848 38.1848C52.6499 38.6797 52.8211 39.1726 52.9943 39.6648L53.5051 41.1436L54.5327 44.0978L55.7889 47.7383L57.0653 51.3722C57.1844 51.7439 57.2764 52.1238 57.3407 52.5089C57.3736 52.6656 57.3691 52.828 57.3276 52.9832C57.2861 53.1383 57.2087 53.2819 57.1017 53.4024C56.8134 53.7414 56.35 53.6858 56.0677 53.2325C55.8906 52.9339 55.7532 52.6137 55.6586 52.2798C55.1991 50.7722 54.644 49.2956 53.9967 47.8587C53.7927 47.4711 53.634 47.0615 53.5237 46.6376C53.257 45.3034 52.7206 44.0516 52.3761 42.7424C52.121 41.7699 51.7955 40.8143 51.5353 39.8417C51.0781 38.1055 50.6384 36.366 50.2627 34.6105C50.1129 33.9456 50.0749 33.26 50.1503 32.5814C50.1823 32.2877 50.4075 32.2459 50.5799 32.5291C50.8237 32.9366 51.0404 33.3598 51.2284 33.7957C51.377 34.159 51.5037 34.5309 51.6078 34.9093L51.6312 34.9063Z" fill="black" />
              <path d="M75.1791 37.6372C74.9739 38.2443 74.7658 38.8509 74.5549 39.4568C74.429 39.7738 74.3222 40.0978 74.2349 40.4271C74.0217 41.3087 73.828 42.1952 73.6346 43.0811C73.44 43.9668 73.24 44.8504 73.0257 45.7302C72.7642 46.8142 72.4914 47.8952 72.2211 48.9768L71.3921 52.2171C71.2943 52.5454 71.1565 52.8609 70.9819 53.1565C70.8246 53.4466 70.4919 53.5812 70.0897 53.62C69.5037 53.6765 68.968 53.3605 68.9376 52.8861C68.9279 52.5829 68.9816 52.2807 69.0954 51.9986C69.5646 50.7066 69.8793 49.3651 70.0332 48.0019C70.0773 47.6239 70.0935 47.2225 70.2648 46.8871C70.8065 45.8155 70.9718 44.6394 71.3867 43.5343C71.6919 42.7128 71.9188 41.8654 72.2083 41.0384C72.4663 40.3009 72.73 39.5656 72.9994 38.8325L73.8532 36.648C74.0728 36.077 74.4262 35.5655 74.8839 35.1562C74.9276 35.1121 74.9835 35.0819 75.0444 35.0695C75.1054 35.0571 75.1685 35.063 75.2258 35.0866C75.2831 35.1101 75.3319 35.1501 75.366 35.2016C75.4 35.253 75.4178 35.3134 75.417 35.3751C75.4324 35.7939 75.4227 36.2134 75.3881 36.6313C75.3341 36.9681 75.2552 37.3006 75.1521 37.6261L75.1791 37.6372Z" fill="black" />
              <path d="M86.2467 53.226C86.1272 53.3506 86.0123 53.4794 85.885 53.597L85.5015 53.9487C85.3628 54.0695 85.2346 54.2017 85.118 54.3437C84.8209 54.7336 84.5376 55.1359 84.234 55.5199C83.9347 55.9076 83.6332 56.2935 83.3184 56.6675C82.9313 57.1286 82.5365 57.5828 82.1268 58.0236L80.8982 59.3464C80.7597 59.4759 80.5983 59.5786 80.4222 59.6494C80.254 59.7288 79.9999 59.6487 79.7191 59.4875C79.3101 59.2526 79.0138 58.848 79.0922 58.5905C79.1461 58.4346 79.2482 58.2995 79.384 58.2046C79.9697 57.7512 80.4598 57.1875 80.8259 56.5461C80.9298 56.3677 81.0144 56.1608 81.1976 56.0616C81.7776 55.7401 82.1138 55.1923 82.6035 54.7875C82.9698 54.489 83.2655 54.123 83.6224 53.8145C84.2559 53.2617 84.8745 52.6957 85.5285 52.1618C85.7958 51.9368 86.1263 51.7995 86.4744 51.769C86.5172 51.766 86.56 51.7723 86.5999 51.7875C86.6399 51.8028 86.6759 51.8265 86.7055 51.857C86.7352 51.8876 86.7577 51.9243 86.7715 51.9645C86.7853 52.0047 86.7901 52.0475 86.7855 52.0899C86.7562 52.2056 86.7225 52.3208 86.6849 52.4339C86.6503 52.5458 86.6061 52.6545 86.5529 52.7589C86.4594 52.9184 86.3515 53.0691 86.2304 53.2091L86.2467 53.226Z" fill="black" />
              <path d="M26.1184 72.4885C26.5269 72.549 26.9341 72.6136 27.3398 72.6823C27.5537 72.724 27.77 72.7529 27.9876 72.7687C28.5679 72.7859 29.149 72.8095 29.7303 72.8441C30.3113 72.8811 30.8903 72.9401 31.4672 73.0212C32.1758 73.1284 32.8814 73.2568 33.5805 73.4148C34.2795 73.5726 34.9737 73.7492 35.6632 73.9447C35.8738 74.0151 36.0707 74.1203 36.2457 74.256C36.4217 74.3784 36.4794 74.6378 36.4658 74.951C36.4456 75.4072 36.1899 75.826 35.8916 75.8551C35.7047 75.8653 35.5185 75.8274 35.3512 75.7449C34.5824 75.4031 33.7519 75.2171 32.9082 75.1976C32.6741 75.1893 32.4253 75.2122 32.2186 75.1093C31.5565 74.7767 30.8212 74.7793 30.1244 74.6C29.8646 74.5349 29.6014 74.4838 29.3359 74.447C29.0712 74.4045 28.8053 74.3701 28.5408 74.3245C27.5977 74.1629 26.6488 74.0089 25.6917 73.8986C25.2908 73.8394 24.9203 73.6539 24.6348 73.3692C24.4875 73.2439 24.4989 73.0428 24.6776 72.8796L24.8693 72.7381C24.898 72.7146 24.9311 72.697 24.9666 72.6861L25.0643 72.6502C25.1935 72.6038 25.3254 72.5653 25.4593 72.5347C25.567 72.5111 25.6769 72.499 25.7871 72.4986C25.8965 72.503 26.006 72.5122 26.1152 72.5148L26.1184 72.4885Z" fill="black" />
            </svg>
                </div>
                <h1 className='font-bold text-3xl lg:text-[64px]'>40%</h1>
              </div>
              <div>
                <p className=' text-[12px] lg:mt-6 lg:text-[18px] text-[#828282]'>Achieved reduction in project execution time by optimizing team availability</p>
              </div>
            </div>

            <div className='bg-white absolute bottom-4 -left-12 md:h-[88px] p-4 flex gap-4 items-center rounded-2xl md:w-[254px]'>
              <div className='bg-slate-100 cursor-pointer p-3 rounded-full '>
                <Rocket color='#2DA950'/>
              </div>
              <div>
                <h1 className=' text-xl md:text-[24px] font-bold text-[#1C1C1C]'>10 DAYS</h1>
                <h1 className= ' text-xs md:text-smtext-slate-500'>Staff Deployment</h1>
              </div>
            </div>

            <div className='bg-[#002E18] absolute  bottom-4 md:-bottom-12  -right-10 md:-right-12    w-[200px] lg:h-[239px] p-4 flex flex-col gap-4 items-center rounded-2xl text-white md:w-[290px]'>
              <h1 className=' text-[24px] md:text-[63.37px]'>$0.5 <span className='text-[22.81px] text-[#A6A3A0]'>MILLION</span></h1>
              <p className='text-[#CCCCCC] text-[12px] md:text-[18px]'>Reduced client expenses by saving on hiring and employee costs.</p>
            </div>
          </div>
        </div>
        <div className=' mt-6 md:mt-16 w-full md:w-1/2 lg:w-1/3 bg-white'>
        
          <div className=' '>
            <Swiper autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}  pagination={true} modules={[Pagination,Autoplay]} className="mySwiper">
              {
                projects.map((item,index)=>{
                  return(
                    <SwiperSlide  className='  font-bold mb-8 lg:mb-4 text-center md:text-left   text-[20px] md:text-[25px]  lg:text-[40px]' key={index}>{item.comment}</SwiperSlide>
                  )
                })
              }
              
            </Swiper>
          </div>
          <button className=' w-full lg:w-[245px] flex justify-center text-white items-center gap-6 bg-[#1C1C1C] hover:bg-[#4E4E4E] duration-500 ease-linear h-20  p-3 rounded-full'>
            Explore More
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
