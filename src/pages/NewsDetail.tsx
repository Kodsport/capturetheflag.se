
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { newsData, NewsItem } from "@/data/news";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | undefined>(undefined);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    if (id) {
      const article = newsData.find(item => item.id === parseInt(id));
      setNewsItem(article);
    }
  }, [id]);

  if (!newsItem) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex-grow">
          <h1 className="text-2xl font-bold">{t('newsdetail.not_found')}</h1>
          <Link to="/">
            <Button className="mt-4" variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('common.home')}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Intl.DateTimeFormat(i18n.language === "en" ? "en-US" : "sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(newsItem.date));

  const content = newsItem.content || newsItem.excerpt;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">{t('common.home')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/news">{t('common.news')}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{newsItem.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <article className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden mb-8 shadow-md">
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className="w-full h-[400px] object-cover" 
            />
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <Badge variant="outline" className="bg-ctf-teal/10 text-ctf-teal border-ctf-teal/30">
              {newsItem.category}
            </Badge>
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-ctf-blue">{newsItem.title}</h1>
          
          <div className="prose prose-lg max-w-none mb-8">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <Link to="/news">
            <Button variant="outline" className="mt-8">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('homepage.news.more_news')}
            </Button>
          </Link>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
