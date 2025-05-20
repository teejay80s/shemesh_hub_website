import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white  shadow-custom w-full max-w-[630px] h-[200px]">
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="testimonials"
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations , on time within budget and top quality
              work, highly recommend!
            </p>
            <p className="font-primary font-semibold text-primary">John Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 2 */}

      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="testimonials"
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations , on time within budget and top quality
              work, highly recommend!
            </p>
            <p className="font-primary font-semibold text-primary">John Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 3 */}

      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="testimonials"
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations , on time within budget and top quality
              work, highly recommend!
            </p>
            <p className="font-primary font-semibold text-primary">John Doe</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 4 */}

      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* Avatar */}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="testimonials"
            />
          </div>

          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Exceeded expectations , on time within budget and top quality
              work, highly recommend!
            </p>
            <p className="font-primary font-semibold text-primary">John Doe</p>
          </div>
        </div>
      </SwiperSlide>

      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
