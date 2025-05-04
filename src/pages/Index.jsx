import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function Index() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            {isLoading ? (<Loader />) : (
                <div className="container mx-auto px-6 sm:px-12">
                    <CustomCursor />
                    <Header />
                    <main>
                        <Hero />
                        <About />
                        <Projects />
                        <Skills />
                        <Contact />
                    </main>
                    <Footer />
                    <ScrollToTop />
                </div>
            )}
        </>
    )
}

export default Index