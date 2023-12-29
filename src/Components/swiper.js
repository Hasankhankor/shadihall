import { useEffect } from "react";
import Swiper from "swiper";

const SwiperComponent = () => {
	useEffect(() => {
		const swiper = new Swiper(".swiper-container", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 2.5,
			},
			keyboard: {
				enabled: true,
			},
			mousewheel: {
				thresholdDelta: 70,
			},
			spaceBetween: 30,
			loop: false,
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});

		swiper.slideTo(1, false, false);

		return () => {
			swiper.destroy();
		};
	}, []); // Empty dependency array to ensure the effect runs once

	return (
		<>
			<main>
				<div
					style={{
						position: "relative",
						width: "100%",
						height: "100%",
						overflow: "hidden",
					}}
				>
					<div
						className="swiper-container"
						style={{
							width: "100%",
							height: "100%",
						}}
					>
						<div
							className="swiper-wrapper"
							style={{
								display: "flex",
								transitionProperty: "transform",
							}}
						>
							<div
								className="swiper-slide"
								style={{
									width: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									backgroundColor: "#fff",
									borderRadius: "10px",
									overflow: "hidden",
									marginRight: "15px",
								}}
							>
								<div
									className="swiper-slide-img"
									style={{
										position: "relative",
										flex: "1 0 70%",
										overflow: "hidden",
										borderRadius: "10px",
									}}
								>
									<img
										src="https://images.unsplash.com/photo-1543335785-8aadf6d8183c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
										alt=""
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											borderRadius: "10px",
										}}
									/>
									<svg
										data-name="Layer 1"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 1200 120"
										preserveAspectRatio="none"
										style={{
											position: "absolute",
											bottom: "0",
											left: "0",
											width: "100%",
											height: "100%",
										}}
									>
										{/* SVG Path Data */}
									</svg>
								</div>
								<div
									className="swiper-slide-content"
									style={{
										flex: "1 0 30%",
										padding: "15px",
									}}
								>
									<div>
										<h2
											style={{
												fontSize: "24px",
												marginBottom: "10px",
											}}
										>
											louvre
										</h2>
										<p
											style={{
												fontSize: "16px",
												marginBottom: "15px",
											}}
										>
											National art museum in Paris, France. It is located on the
											Right Bank of the Seine in the citys 1st arrondissement
											(district or ward) and home to some of the most canonical
											works of Western art, including the Mona Lisa and the
											Venus de Milo.
										</p>
										<a
											className="show-more"
											href="https://en.wikipedia.org/wiki/Louvre"
											target="_blank"
											style={{
												fontSize: "16px",
												color: "#0070f3",
												display: "inline-flex",
												alignItems: "center",
											}}
										>
											Show more
										</a>
									</div>
								</div>
							</div>

							{/* Additional slides go here */}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default SwiperComponent;
