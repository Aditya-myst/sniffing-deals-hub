
import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Button from './Button';

interface SearchBarProps {
  variant?: 'default' | 'large';
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  variant = 'default',
  className
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Encode the search term for URL
      const encodedSearch = encodeURIComponent(searchTerm.trim());
      navigate(`/results?q=${encodedSearch}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className={cn(
        "relative group",
        variant === 'large' ? 'w-full max-w-3xl' : 'w-full max-w-xl',
        className
      )}
    >
      <div 
        className={cn(
          "flex items-center overflow-hidden transition-all duration-300 ease-apple",
          "border border-border bg-white shadow-subtle",
          isFocused ? "shadow-md border-primary/30 ring-4 ring-primary/10" : "hover:border-border/80",
          variant === 'large' ? 'rounded-2xl h-16' : 'rounded-xl h-12'
        )}
      >
        <div className="flex items-center flex-grow pl-4">
          <Search 
            className={cn(
              "text-muted-foreground transition-all duration-200",
              isFocused ? "text-primary" : "",
              variant === 'large' ? 'h-5 w-5 mr-3' : 'h-4 w-4 mr-2'
            )} 
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Enter a product or website..."
            className={cn(
              "flex-grow bg-transparent outline-none text-foreground",
              "placeholder:text-muted-foreground",
              variant === 'large' ? 'text-lg py-4' : 'text-base py-2'
            )}
          />
        </div>
        
        <div className="px-2">
          <Button
            type="submit"
            variant="primary"
            size={variant === 'large' ? 'lg' : 'md'}
            className={cn(
              "transition-all duration-300",
              "opacity-0 translate-x-4 scale-95",
              searchTerm.length > 0 && "opacity-100 translate-x-0 scale-100"
            )}
            icon={<ArrowRight className="h-5 w-5" />}
            iconPosition="right"
          >
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
