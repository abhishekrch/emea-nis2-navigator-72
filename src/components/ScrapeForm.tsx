import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Key } from 'lucide-react';

interface ScrapeResult {
  success: boolean;
  markdown?: string;
  html?: string;
  url?: string;
  title?: string;
}

export const ScrapeForm = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [scrapeResult, setScrapeResult] = useState<ScrapeResult | null>(null);
  const [showApiKeyInput, setShowApiKeyInput] = useState(!FirecrawlService.getApiKey());

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      FirecrawlService.saveApiKey(apiKey.trim());
      setShowApiKeyInput(false);
      toast({
        title: "Success",
        description: "API key saved successfully",
        duration: 3000,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setScrapeResult(null);
    
    try {
      const apiKey = FirecrawlService.getApiKey();
      if (!apiKey) {
        toast({
          title: "Error",
          description: "Please set your API key first",
          variant: "destructive",
          duration: 3000,
        });
        setShowApiKeyInput(true);
        return;
      }

      console.log('Starting scrape for URL:', url);
      const result = await FirecrawlService.scrapeWebsite(url);
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Website scraped successfully",
          duration: 3000,
        });
        setScrapeResult(result.data);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to scrape website",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error scraping website:', error);
      toast({
        title: "Error",
        description: "Failed to scrape website",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (showApiKeyInput) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Setup Firecrawl API Key
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your Firecrawl API key to enable website scraping functionality.
          </p>
          <Input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Firecrawl API key"
          />
          <Button onClick={handleApiKeySubmit} className="w-full">
            Save API Key
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Scrape NIS2 Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="url" className="text-sm font-medium">
                Website URL
              </label>
              <Input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/nis2-requirements"
                required
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? "Scraping..." : "Scrape Website"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowApiKeyInput(true)}
              >
                <Key className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {scrapeResult && (
        <Card>
          <CardHeader>
            <CardTitle>Scraped Content</CardTitle>
            <div className="flex gap-2">
              <Badge variant="outline">{scrapeResult.url}</Badge>
              <Badge variant="secondary">{scrapeResult.title}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scrapeResult.markdown && (
                <div>
                  <h4 className="font-medium mb-2">Content (Markdown)</h4>
                  <div className="bg-muted p-4 rounded-lg max-h-96 overflow-auto">
                    <pre className="text-sm whitespace-pre-wrap">
                      {scrapeResult.markdown.substring(0, 2000)}
                      {scrapeResult.markdown.length > 2000 && '...'}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};