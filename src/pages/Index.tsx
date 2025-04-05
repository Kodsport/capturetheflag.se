
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { newsData, NewsItem } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { sponsorsData } from "@/data/sponsors";

const Index = () => {
  const [featuredNews, setFeaturedNews] = useState<NewsItem[]>([]);
  const [recentNews, setRecentNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Set featured news (first article)
    setFeaturedNews([newsData[0]]);
    
    // Set recent news (remaining articles)
    setRecentNews(newsData.slice(1));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Capture The Flag - Sverige
            </h1>
            <p className="text-xl mb-8">
              Främjar Capture The Flag-tävlingar och cybersäkerhetsutbildning i Sverige
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-ctf-teal hover:bg-ctf-teal/80 text-white">
                Bli medlem
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                Läs mer om oss
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-ctf-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-ctf-blue">
              Senaste nytt
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Link to={`/news/${featuredNews[0].id}`} className="group">
                <div className="hover:shadow-lg rounded-lg transition-shadow p-2">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-ctf-blue transition-colors">
                    {featuredNews[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredNews[0].excerpt}
                  </p>
                  <Button className="bg-ctf-blue hover:bg-ctf-blue/80">
                    Läs mer
                  </Button>
                </div>
              </Link>
              
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Link to={`/news/${featuredNews[0].id}`}>
                  <img 
                    src={featuredNews[0].image} 
                    alt={featuredNews[0].title}
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-ctf-blue">
            Nyheter och uppdateringar
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-ctf-blue text-ctf-blue hover:bg-ctf-blue hover:text-white">
              Visa alla nyheter
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-ctf-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Gå med i CTF-Sverige idag</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Bli en del av Sveriges ledande nätverk för CTF-entusiaster och cybersäkerhetsexperter.
          </p>
          <Button className="bg-white text-ctf-blue hover:bg-ctf-teal hover:text-white">
            Ansök om medlemskap
          </Button>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-ctf-blue">
            Våra sponsorer
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {sponsorsData.map((sponsor) => (
              <a 
                key={sponsor.id} 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 shadow rounded-lg w-[200px] h-[100px] flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                {sponsor.logo === "/placeholder.svg" ? (
                  <span className="text-gray-400 font-medium text-lg">{sponsor.name}</span>
                ) : (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                )}
              </a>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Intresserad av att bli sponsor? Kontakta oss för mer information.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-ctf-blue text-ctf-blue hover:bg-ctf-blue hover:text-white">
                Kontakta oss
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
