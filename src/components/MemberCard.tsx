
import { MemberItem } from "@/data/members";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MemberCardProps {
  member: MemberItem;
}

const MemberCard = ({ member }: MemberCardProps) => {
  const { name, role, organization, image, expertise } = member;

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-ctf-teal font-medium">{role}</CardDescription>
        <p className="text-sm text-gray-600">{organization}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mt-2">
          {expertise.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-ctf-blue/10 text-ctf-blue">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
