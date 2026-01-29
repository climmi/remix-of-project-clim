import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <div className="relative">
          {/* Project image */}
          <div className="aspect-video bg-secondary">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs uppercase tracking-widest text-accent font-display">
                  {project.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mt-4 leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Materials */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display">
                  Materials
                </h4>
                <ul className="space-y-1">
                  {project.materials.map((material, index) => (
                    <li key={index} className="text-foreground">
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Techniques */}
              <div>
                <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-3 font-display">
                  Techniques
                </h4>
                <ul className="space-y-1">
                  {project.techniques.map((technique, index) => (
                    <li key={index} className="text-foreground">
                      {technique}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* External link */}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent/80 transition-colors font-display"
              >
                View more
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
