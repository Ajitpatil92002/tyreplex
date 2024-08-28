import BusinessCard from "@/components/businessCard";
import DealsBrand from "@/components/deals";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import TyreCard from "@/components/tyrecard";
import TyreHeader from "@/components/tyreHeader";

export default function Home() {
	const businessData = {
		name: 'SHREE HEMKUNT TYRES AND SERVICES',
		verified: true,
		rating: 4.9,
		reviewCount: 2278,
		location: {
			address: '123 Main Street, City, Country',
			landmark: 'Near Central Park',
		},
		timings: 'Monday to Sunday - 10:00 AM to 8:00 PM',
		directionsLink: 'https://www.google.com/maps/place/123+Main+Street,+City,+Country',
		images: [
			'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
			'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
			"https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300", "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300"
		],
		reviews: [
			{
				username: "Md Nasir",
				userImg: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
				review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. "
			},
			{
				username: "Rohit Bhati",
				userImg: "https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo",
				review: "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend"
			},
			{
				username: "Pradeep Kumar",
				userImg: "https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo",
				review: "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience"
			},
			{
				username: "Md Nasir",
				userImg: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
				review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. "
			},
			{
				username: "Md Nasir",
				userImg: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
				review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. "
			},
			{
				username: "Md Nasir",
				userImg: "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
				review: "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate. "
			},
		]
	};

	return (
		<div className="space-y-4 p-2 md:p-0">
			<Header />
			<div className="h-10">
			</div>
			<BusinessCard {...businessData} />
			<SectionContainer>
				<DealsBrand />
			</SectionContainer>
			<SectionContainer>
				<Services />
			</SectionContainer>
			<SectionContainer className="p-4">
				<TyreHeader />
				<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
					{[...Array(10)].map((_, i) => (
						<TyreCard key={i} />
					))}
				</div>
			</SectionContainer>
			<SectionContainer>
				<Footer />
			</SectionContainer>
		</div>
	);
}


interface SectionContainerProps {
	children: React.ReactNode;
	className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '' }) => {
	return (
		<div className={`mt-10 flex justify-center ${className}`}>
			<div className="max-w-7xl w-full space-y-10">
				{children}
			</div>
		</div>
	);
};
