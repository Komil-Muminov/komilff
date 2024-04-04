import { Swiper, SwiperSlide } from "swiper/react";
import Km from "./Km.jpg";
import Km1 from "./Km1.jpg";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./slider.css";
import slider from "./slider.jpg";
const Slider = () => {
	return (
		<>
			<section className="sections">
				<div className="container">
					<div className="slider__content">
						<Swiper
							aria-label="Слайдер"
							navigation={true}
							modules={[Navigation]}
							className="mySwiper"
						>
							<SwiperSlide>
								<img src={slider} alt="" className="slider_img" />
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<img src={Km} alt="" className="slider_img" />
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<img src={Km1} alt="" className="slider_img" />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default Slider;
