import CampSection from "../components/CampSection";
import FeaturesSection from "../components/FeaturesSection";
import GetAppSection from "../components/GetAppSection";
import GuideSection from "../components/GuideSection";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<CampSection />
			<GuideSection />
			<FeaturesSection />
			<GetAppSection />
		</>
	);
}
