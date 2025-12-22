import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar, GitCommitHorizontal, Shield, FileText, CircleHelp } from "lucide-react";
import { Project } from './ProjectCard';

interface ProjectDetailsSheetProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailsSheet: React.FC<ProjectDetailsSheetProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl md:max-w-2xl p-0">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b">
            <SheetHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="px-3 py-1">
                  v{project.version}
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  Last updated: {project.lastUpdated}
                </div>
              </div>
              <SheetTitle className="text-2xl font-bold">{project.title}</SheetTitle>
              <SheetDescription className="text-base mt-2">
                {project.description}
              </SheetDescription>
            </SheetHeader>
            
            <div className="flex gap-2 mt-4">
              {project.link && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Project
                  </a>
                </Button>
              )}
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-6">
              <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <Tabs defaultValue="details" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-6">
                  <TabsTrigger value="details">Project Details</TabsTrigger>
                  <TabsTrigger value="policies">Policies & Legal</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-6">
                  <section>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <GitCommitHorizontal className="w-5 h-5 mr-2" />
                      Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </section>

                  <Separator />

                  <section>
                    <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  
                  <Separator />
                  
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </section>
                </TabsContent>

                <TabsContent value="policies" className="space-y-6">
                  <div className="space-y-6">
                    <section className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 flex items-center text-primary">
                        <Shield className="w-5 h-5 mr-2" />
                        Privacy Policy
                      </h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {project.policies.privacy}
                      </p>
                    </section>

                    <section className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 flex items-center text-primary">
                        <FileText className="w-5 h-5 mr-2" />
                        Terms of Service
                      </h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {project.policies.terms}
                      </p>
                    </section>

                    <section className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 flex items-center text-primary">
                        <CircleHelp className="w-5 h-5 mr-2" />
                        Support Policy
                      </h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {project.policies.support}
                      </p>
                    </section>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};
