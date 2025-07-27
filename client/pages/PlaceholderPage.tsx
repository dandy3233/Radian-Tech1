import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Construction className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground">
              {description || 'This page is under construction. Please check back later or continue exploring our site.'}
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Want to help us build this page? Continue prompting to tell us what content you'd like to see here.
            </p>
            
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
