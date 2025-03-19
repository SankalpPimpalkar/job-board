import React from "react";
import Navbar from "../Navbar/Navbar";
import Jobsection from "../Jobsection/Jobsection";
import Filterjob from "../Featurejob/Filterjob";
import FeatureJobCard from "../Featurejob/FeatureJobCard";
import BrowsCategories from "../Browscategoriesjob/BrowsCategories";
import Createaccountsection from "../createaccountsection/Createaccountsection";
import Footer from "../Footer/Footer";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Jobsection />
			<div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row p-4">
				<div className="w-full lg:w-1/4">
					<Filterjob />
				</div>
				<div className="w-full lg:w-3/4">
					<FeatureJobCard />
				</div>
			</div>

			<div>
				<BrowsCategories />
			</div>
			<Createaccountsection />
			<Footer />
		</div>
	);
}
