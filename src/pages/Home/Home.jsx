import React from 'react'
import Navbar from '../Navbar/Navbar'
import Jobsection from '../Jobsection/Jobsection'
import Filterjob from '../Featurejob/Filterjob'
import FeatureJobCard from '../Featurejob/FeatureJobCard'
import BrowsCategories from '../Browscategoriesjob/BrowsCategories'
import Createaccountsection from '../createaccountsection/Createaccountsection'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Jobsection/>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-4 p-4">
              <div className="w-full lg:w-1/4">
             <Filterjob />
             </div>
             <div className="w-full lg:w-3/4">
              <FeatureJobCard />
             </div>
            </div>

            <div>
           <BrowsCategories/>
           </div>
           <Createaccountsection/>
           <Footer/>
        </div>
    )
}
