import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { client } from "@/src/sanity/lib/client";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconWorld } from "@tabler/icons-react";
import { useState, useEffect } from "react";

// Query to fetch about page data
export const aboutPageQuery = `
*[_type == "aboutPage"][0] {
  title,
  description,
  "teamMembers": teamMembers[]-> {
    name,
    role,
    student,
    studentInformation {
      school,
      major,
      graduation
    },
    teamMemberInformation {
      company,
      responsibilities
    },
    socialMediaLinks {
      linkedIn,
      gitHub,
      website
    }
  }
}
`;
// Fetch data at build time
export async function getStaticProps() {
  const aboutData = await client.fetch(aboutPageQuery);

  return {
    props: {
      aboutData,
    },
    revalidate: 60, // Revalidate every minute
  };
}

export default function About({ aboutData }) {
  const { title, description, teamMembers } = aboutData;

  // Format team members data to match the expected structure
  const formattedTeamMembers = teamMembers
    .map((member) => ({
      name: member.name,
      role: member.role,
      affiliation: member.student
        ? member.studentInformation?.school
        : member.teamMemberInformation?.company,
      major: member.student ? member.studentInformation?.major : null,
      graduation: member.student ? member.studentInformation?.graduation : null,
      responsibilities: member.student ? null : member.teamMemberInformation?.responsibilities,
      links: {
        linkedin: member.socialMediaLinks?.linkedIn || null,
        github: member.socialMediaLinks?.gitHub || null,
        portfolio: member.socialMediaLinks?.website || null,
      },
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const [mounted, setMounted] = useState(false);
  const letterIndex = [
    ...new Set(formattedTeamMembers.map((member) => member.name[0].toUpperCase())),
  ];
  const [activeLetter, setActiveLetter] = useState(letterIndex[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <PageContainer marginBottom={true} className="relative">
        <GradientContainer>
          <div className="w-full flex flex-col items-center gap-2 py-20 px-10">
            <h1 className="h4 md:h3 text-fordham-white">{title || "About us"}</h1>
            <p className="body-txt-md px-0 md:px-20 text-center font-light text-fordham-light-gray/60">
              {description ||
                "We're grateful to have an amazing team of talented, dedicated individuals driving our product forward. Together, we're building something incredible."}
            </p>
          </div>

          <div className="relative">
            <div className="team-members-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-10 md:mr-0">
              {formattedTeamMembers.map((member, index) => {
                const isFirstWithLetter =
                  index === 0 ||
                  member.name[0].toUpperCase() !==
                    formattedTeamMembers[index - 1].name[0].toUpperCase();

                return (
                  <div
                    key={index}
                    id={isFirstWithLetter ? member.name[0].toUpperCase() : undefined}
                    className="team-member-card bg-fordham-white/5 p-6 rounded-[16px] flex flex-col"
                  >
                    <div className="mb-5">
                      <h2 className="text-2xl text-fordham-white font-semibold mb-1">
                        {member.name}
                      </h2>
                      <p className="text-base text-fordham-light-gray/60">{member.role}</p>
                    </div>

                    <div className="border-b border-fordham-dark-gray"></div>

                    <div className="py-5 flex-grow">
                      <div className="space-y-4">
                        {member.affiliation && (
                          <div>
                            <p className="text-base mb-2 text-fordham-light-gray/60">Affiliation</p>
                            <p className="text-fordham-white">{member.affiliation}</p>
                          </div>
                        )}

                        {member.major && (
                          <div>
                            <p className="text-base mb-2 text-fordham-light-gray/60">Major</p>
                            <p className="text-gray-300">{member.major}</p>
                          </div>
                        )}

                        {member.responsibilities && (
                          <div>
                            <p className="text-base mb-2 text-fordham-light-gray/60">
                              Responsibilities
                            </p>
                            <p className="text-gray-300">{member.responsibilities}</p>
                          </div>
                        )}

                        {member.graduation && (
                          <div>
                            <p className="text-base mb-2 text-fordham-light-gray/60">Graduation</p>
                            <p className="text-gray-300">{member.graduation}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="border-b border-fordham-dark-gray"></div>

                    <div className="flex space-x-4 pt-5">
                      {member.links.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[40px] h-[40px] flex items-center justify-center text-white bg-fordham-dark-gray rounded-full hover:bg-fordham-dark-gray/80 transition"
                        >
                          <IconBrandLinkedinFilled className="w-4 h-4" />
                        </a>
                      )}
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[40px] h-[40px] flex items-center justify-center text-white bg-fordham-dark-gray rounded-full hover:bg-fordham-dark-gray/80 transition"
                        >
                          <IconBrandGithubFilled className="w-4 h-4" />
                        </a>
                      )}
                      {member.links.portfolio && (
                        <a
                          href={member.links.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[40px] h-[40px] flex items-center justify-center text-white bg-fordham-dark-gray rounded-full hover:bg-fordham-dark-gray/80 transition"
                        >
                          <IconWorld className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </GradientContainer>
        {mounted && (
          <ScrollingLetterIndex
            letterIndex={letterIndex}
            activeLetter={activeLetter}
            setActiveLetter={setActiveLetter}
          />
        )}
      </PageContainer>
    </>
  );
}

const ScrollingLetterIndex = ({ letterIndex, activeLetter, setActiveLetter }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerBounds, setContainerBounds] = useState({
    top: 0,
    bottom: 0,
    height: 0,
  });

  useEffect(() => {
    const updateBounds = () => {
      const container = document.querySelector(".team-members-grid");
      if (container) {
        const rect = container.getBoundingClientRect();
        const scrollTop = window.scrollY;
        setContainerBounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
          height: rect.height,
        });
      }
    };

    // Initial calculation
    updateBounds();

    // Update on scroll - only for position calculation, not letter selection
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  const calculatePosition = () => {
    if (typeof window === "undefined") return 0;

    const windowHeight = window.innerHeight;
    const indexHeight = 40 * letterIndex.length;
    const buffer = 100;

    // Get the first team member card
    const firstCard = document.querySelector(".team-member-card");
    const firstCardTop = firstCard
      ? firstCard.getBoundingClientRect().top + window.scrollY
      : containerBounds.top;

    const maxScroll = containerBounds.bottom - indexHeight + buffer;
    const minScroll = firstCardTop; // Start from the top of the first card

    let currentPosition = scrollPosition + windowHeight / 2;

    return Math.max(minScroll, Math.min(maxScroll, currentPosition)) - 200;
  };

  return (
    <div
      className="md:-right-20 right-2 flex flex-col items-center text-sm gap-2 px-1 py-2 z-50 rounded-[40px] bg-fordham-white/5"
      style={{
        position: "absolute",
        top: `${calculatePosition()}px`,
        transform: "translateY(-50%)",
        transition: "top 0.1s ease-out",
      }}
    >
      {letterIndex.map((letter) => (
        <a
          key={letter}
          href={`#${letter}`}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(letter);
            if (element) {
              const windowHeight = window.innerHeight;
              const elementHeight = element.offsetHeight;
              const elementTop = element.getBoundingClientRect().top + window.scrollY;

              // Calculate position to center element vertically
              const centerPosition = elementTop - windowHeight / 2 + elementHeight / 2;

              window.scrollTo({
                top: centerPosition,
                behavior: "smooth",
              });
              setActiveLetter(letter);
            }
          }}
          className={`py-1 px-2 rounded-full transition ${
            activeLetter === letter
              ? "bg-fordham-brown text-fordham-white"
              : "text-fordham-light-gray/60 hover:text-fordham-white"
          }`}
        >
          {letter}
        </a>
      ))}
    </div>
  );
};
