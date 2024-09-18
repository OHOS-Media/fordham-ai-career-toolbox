import FeatureElement from "./FeatureElement";

const featureSectionData = {
  title: "Our Features Get You Ahead",
  features: [
    {title: 'Job Description Analyzer', description: 'Get AI-recommended keywords to tailor your resume to any job description.', iconPath: '/assets/Briefcase.svg', iconAlt: 'Briefcase Icon'},
    {title: 'Keyword Generator', description: 'Discover key terms that boost your visibility in job applications.', iconPath: '/assets/Robot.svg', iconAlt: 'Robot Icon'},
    {title: 'AI Resume Enhancer', description: 'Receive AI-generated bullet points that elevate your resume content.', iconPath: '/assets/Profile.svg', iconAlt: 'Profile Icon'},
    {title: 'Resume Refinement Tool', description: 'Refine and enhance your resume bullet points with AI for maximum impact.', iconPath: '/assets/Document.svg', iconAlt: 'Document Icon'},
  ]
};

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 py-16 px-10 rounded-lg">
      <h2 className="h2">{featureSectionData.title}</h2>

      <div className="flex justify-between items-start mt-10 gap-6">
        {featureSectionData.features.map((feature, idx) => (
          <FeatureElement feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
