
import { NewsItem } from "@/data/news";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  const { id, title, date, excerpt, category, image } = news;
  
  const formattedDate = new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

  return (
    <Link to={`/news/${id}`} className="block h-full">
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <CardHeader className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="bg-ctf-teal/10 text-ctf-teal border-ctf-teal/30">
              {category}
            </Badge>
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default NewsCard;
