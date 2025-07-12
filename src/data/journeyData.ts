export interface JourneyCard {
  title: string
  subtitle: string
  description: string
  bgColor: string
  alignment: string
  imageUrl: string
  altTitle?: string
  altSubtitle?: string
  altDescription?: string
  altImageUrl?: string
}

export const journeyCardsData: JourneyCard[] = [
  {
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: "bg-[#f45b5b]",
    alignment: "items-end text-right",
    imageUrl: "/1.png",
    // Alternate content for hover
    altTitle: "",
    altSubtitle: "",
    altDescription: "",
    altImageUrl: "/5.png",
  },
  {
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bgColor: "bg-[#5492a0]",
    alignment: "items-start text-left",
    imageUrl: "/2.png",
    // Alternate content for hover
    altTitle: "",
    altSubtitle: "",
    altDescription: "",
    altImageUrl: "/6.png",
  },
  {
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: "bg-[#6c64a7]",
    alignment: "items-end text-right",
    imageUrl: "/3.png",
  },
  {
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: "bg-[#a78864]",
    alignment: "items-start text-left",
    imageUrl: "/4.png",
  },
]