import React from 'react'
import HomePageHero from '../../components/homeHero/HomePageHero'
import HomePageTitle from '../../components/homePageTitle/HomePageTitle'
import Card from '../../components/Card/Card'
import HomePageBestSeller from '../../components/homePageBestSeller/HomePageBestSeller'
import PolicySection from '../../components/policySection/PolicySection'
import Subscribe from '../../components/subscribe/Subscribe'

const home = () => {
  return (
    <div className='container'>
      {/* hero */}
        <HomePageHero  />
        <HomePageTitle />
        <div className='flex gap-5 flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>


        <HomePageBestSeller />
        <div className='flex gap-5 flex-wrap justify-center'>
        <Card />
        <Card />
        <Card />
        </div>

        <PolicySection />
        <Subscribe />

    </div>
  )
}

export default home
