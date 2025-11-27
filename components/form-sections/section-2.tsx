"use client"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, GitBranch, Wrench } from "lucide-react"

interface Section2Props {
  formData: {
    primary_skillset: string
    git_proficiency: string
    technologies: string[]
  }
  onChange: (field: string, value: string | string[]) => void
  errors: Record<string, string>
}

export function Section2Expertise({ formData, onChange, errors }: Section2Props) {
  const skillsets = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile Development",
    "Data Science & Analytics",
    "Machine Learning / AI",
    "DevOps & Cloud",
    "UI/UX Design",
    "Cybersecurity",
    "Game Development",
    "Blockchain Development",
    "Other"
  ]

  const technologies = [
    { id: "javascript", label: "JavaScript/TypeScript", icon: "JS" },
    { id: "html", label: "HTML", icon: "HTML" },
    { id: "css", label: "CSS", icon: "CSS" },
    { id: "python", label: "Python", icon: "PY" },
    { id: "react", label: "React/Next.js", icon: "⚛️" },
    { id: "nodejs", label: "Node.js", icon: "🟢" },
    { id: "java", label: "Java", icon: "☕" },
    { id: "csharp", label: "C#/.NET", icon: "#" },
    { id: "go", label: "Go", icon: "GO" },
    { id: "rust", label: "Rust", icon: "🦀" },
    { id: "docker", label: "Docker/Kubernetes", icon: "🐳" },
    { id: "aws", label: "AWS/Cloud", icon: "☁️" },
    { id: "sql", label: "SQL/Databases", icon: "🗃️" },
    { id: "flutter", label: "Flutter/Dart", icon: "💙" },
    { id: "ml", label: "TensorFlow/PyTorch", icon: "🧠" },
    { id: "figma", label: "Figma/Design Tools", icon: "🎨" },
  ]

  const handleTechnologyToggle = (techId: string) => {
    const currentTech = formData.technologies || []
    if (currentTech.includes(techId)) {
      onChange("technologies", currentTech.filter(t => t !== techId))
    } else {
      onChange("technologies", [...currentTech, techId])
    }
  }

  return (
    <div className="space-y-8">
      {/* Primary Skillset */}
      <Card className="form-section">
        <CardHeader>
          <CardTitle className="text-vibe-teal flex items-center gap-2">
            <Code2 className="w-5 h-5" aria-hidden="true" />
            Primary Skillset
          </CardTitle>
          <CardDescription>What&apos;s your main area of expertise?</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="primary_skillset" className="sr-only">
              Primary Skillset
            </Label>
            <Select
              value={formData.primary_skillset}
              onValueChange={(value) => onChange("primary_skillset", value)}
            >
              <SelectTrigger
                id="primary_skillset"
                aria-required="true"
                aria-invalid={!!errors.primary_skillset}
                aria-describedby={errors.primary_skillset ? "primary_skillset_error" : undefined}
                className={errors.primary_skillset ? "border-vibe-red" : ""}
              >
                <SelectValue placeholder="Select your primary skillset" />
              </SelectTrigger>
              <SelectContent>
                {skillsets.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.primary_skillset && (
              <p id="primary_skillset_error" className="text-sm text-vibe-red" role="alert">
                {errors.primary_skillset}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Git & GitHub Proficiency */}
      <Card className="form-section">
        <CardHeader>
          <CardTitle className="text-vibe-red flex items-center gap-2">
            <GitBranch className="w-5 h-5" aria-hidden="true" />
            Git & GitHub Proficiency
          </CardTitle>
          <CardDescription>How comfortable are you with version control?</CardDescription>
        </CardHeader>
        <CardContent>
          <fieldset>
            <legend className="sr-only">Git and GitHub Proficiency Level</legend>
            <RadioGroup
              value={formData.git_proficiency}
              onValueChange={(value) => onChange("git_proficiency", value)}
              className="space-y-3"
              aria-required="true"
              aria-invalid={!!errors.git_proficiency}
              aria-describedby={errors.git_proficiency ? "git_proficiency_error" : undefined}
            >
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-vibe-mint/10 transition-colors">
                <RadioGroupItem value="beginner" id="git-beginner" />
                <Label htmlFor="git-beginner" className="flex-1 cursor-pointer">
                  <span className="font-medium">Beginner</span>
                  <span className="block text-sm text-vibe-dark/60">
                    New to Git, learning basic commands
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-vibe-mint/10 transition-colors">
                <RadioGroupItem value="intermediate" id="git-intermediate" />
                <Label htmlFor="git-intermediate" className="flex-1 cursor-pointer">
                  <span className="font-medium">Intermediate</span>
                  <span className="block text-sm text-vibe-dark/60">
                    Comfortable with branches, commits, PRs
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-vibe-mint/10 transition-colors">
                <RadioGroupItem value="advanced" id="git-advanced" />
                <Label htmlFor="git-advanced" className="flex-1 cursor-pointer">
                  <span className="font-medium">Advanced</span>
                  <span className="block text-sm text-vibe-dark/60">
                    Expert in rebasing, CI/CD, Git workflows
                  </span>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-vibe-mint/10 transition-colors">
                <RadioGroupItem value="never-used" id="git-never" />
                <Label htmlFor="git-never" className="flex-1 cursor-pointer">
                  <span className="font-medium">Never Used</span>
                  <span className="block text-sm text-vibe-dark/60">
                    Haven&apos;t worked with Git yet
                  </span>
                </Label>
              </div>
            </RadioGroup>
            {errors.git_proficiency && (
              <p id="git_proficiency_error" className="text-sm text-vibe-red mt-2" role="alert">
                {errors.git_proficiency}
              </p>
            )}
          </fieldset>
        </CardContent>
      </Card>

      {/* Technologies/Tools Familiarity */}
      <Card className="form-section">
        <CardHeader>
          <CardTitle className="text-vibe-orange flex items-center gap-2">
            <Wrench className="w-5 h-5" aria-hidden="true" />
            Technologies & Tools
          </CardTitle>
          <CardDescription>Select all the technologies you&apos;re familiar with</CardDescription>
        </CardHeader>
        <CardContent>
          <fieldset>
            <legend className="sr-only">Select technologies you are familiar with</legend>
            <div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
              role="group"
              aria-describedby={errors.technologies ? "technologies_error" : undefined}
            >
              {technologies.map((tech) => {
                const isSelected = formData.technologies?.includes(tech.id)
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => handleTechnologyToggle(tech.id)}
                    className={`
                      p-3 rounded-xl border-2 transition-all duration-200
                      flex items-center gap-2 text-left
                      ${isSelected 
                        ? "border-vibe-teal bg-vibe-teal/10 text-vibe-dark" 
                        : "border-vibe-light bg-white hover:border-vibe-mint"
                      }
                    `}
                    aria-pressed={isSelected}
                  >
                    <span className="text-lg" aria-hidden="true">{tech.icon}</span>
                    <span className="text-sm font-medium">{tech.label}</span>
                  </button>
                )
              })}
            </div>
            {errors.technologies && (
              <p id="technologies_error" className="text-sm text-vibe-red mt-2" role="alert">
                {errors.technologies}
              </p>
            )}
            {formData.technologies?.length > 0 && (
              <p className="text-sm text-vibe-dark/60 mt-4">
                Selected: {formData.technologies.length} technolog{formData.technologies.length === 1 ? 'y' : 'ies'}
              </p>
            )}
          </fieldset>
        </CardContent>
      </Card>
    </div>
  )
}
