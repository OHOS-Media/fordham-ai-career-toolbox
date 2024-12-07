import PageContainer from "@/components/PageContainer";
import GradientContainer from "@/components/ui/GradientContainer";
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconWorld } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export default function About() {
  const teamMembers = [
    {
      name: "Kent Scholla",
      role: "Program Leader",
      affiliation: "Gabelli Gen A.I. Incubator",
      responsibilities:
        "Leading the Gabelli Gen A.I. Incubator program and fostering innovation in artificial intelligence applications.",
      links: {
        linkedin: "https://www.linkedin.com/in/kentscholla",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Bach Le",
      role: "OHOS Lead Manager",
      affiliation: "OHOS Media",
      responsibilities:
        "Leading the OHOS team and driving strategic initiatives with expertise from Fordham Gabelli School of Business.",
      links: {
        linkedin: "https://www.linkedin.com/in/bachhoangle/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Cass Walters",
      role: "Software Engineer",
      affiliation: "OHOS Media",
      responsibilities:
        "Developing and implementing technical solutions for OHOS Media's innovative platforms.",
      links: {
        linkedin: "#",
        github: "#",
        portfolio: "#",
      },
    },
    {
      name: "Chanbin Moon",
      role: "UX Designer",
      affiliation: "OHOS Media",
      responsibilities:
        "Creating user-centered designs and enhancing the user experience across OHOS Media's platforms.",
      links: {
        linkedin: "#",
        github: null,
        portfolio: "#",
      },
    },
    {
      name: "Tanisha Shah",
      role: "UX Designer",
      affiliation: "OHOS Media",
      responsibilities:
        "Designing intuitive user interfaces and improving user experience for OHOS Media's products.",
      links: {
        linkedin: "#",
        github: null,
        portfolio: "#",
      },
    },
    {
      name: "Daniel Groner",
      role: "Associate Clinical Professor",
      affiliation: "Fordham Gabelli School of Business",
      responsibilities:
        "Teaching Information, Technology, and Operations while providing academic guidance to the project.",
      links: {
        linkedin: null,
        github: null,
        portfolio:
          "https://www.fordham.edu/gabelli-school-of-business/faculty/full-time-faculty/daniel-groner/",
      },
    },
    {
      name: "Akulina Kashchei",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Economics and Global Business",
      graduation: "2026",
      links: {
        linkedin: "https://www.linkedin.com/in/akulina-kashchei/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Ciaran Scott",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Information Systems with concentration in Fintech",
      graduation: "2025",
      links: {
        linkedin: "https://www.linkedin.com/in/ciaran-scott-/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Dieu Anh Nguyen",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Information Systems with concentration in Fintech and minor in Economics",
      graduation: "2026",
      links: {
        linkedin: "https://www.linkedin.com/in/dieuanh-julia-nguyen/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Eden Kavanaugh",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Information Systems with concentration in Global Business",
      graduation: "2025",
      links: {
        linkedin: "https://www.linkedin.com/in/edenkavanagh/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Jacqueline Kilb",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Information Systems with concentration in Process and Quality Analytics",
      graduation: "2025",
      links: {
        linkedin: "https://www.linkedin.com/in/jacqueline-kilb/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "James Sprizzo",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Finance",
      graduation: "2025",
      links: {
        linkedin: "https://www.linkedin.com/in/james-sprizzo/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Kelly Andreasen",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Information Systems",
      graduation: "2025",
      links: {
        linkedin: "https://www.linkedin.com/in/kellyandreasen/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Megan Kuck",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Accounting Information Systems",
      graduation: "2026",
      links: {
        linkedin: "https://www.linkedin.com/in/megan-kuck/",
        github: null,
        portfolio: null,
      },
    },
    {
      name: "Ray Rico",
      role: "Summer Intern",
      affiliation: "Fordham Gabelli School of Business",
      major: "Global Business with concentration in Digital Media and Technology",
      graduation: "2025",
      links: {
        linkedin: "https://www.linkedin.com/in/raymondgrico/",
        github: null,
        portfolio: null,
      },
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
  const [mounted, setMounted] = useState(false);
  const letterIndex = [...new Set(teamMembers.map((member) => member.name[0].toUpperCase()))];
  const [activeLetter, setActiveLetter] = useState(letterIndex[0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <PageContainer marginBottom={true} className="relative">
        <GradientContainer>
          <div className=" w-full flex flex-col items-center gap-2 py-20 px-10">
            <h1 className="h4 md:h3 text-fordham-white">About us</h1>
            <p className="body-txt-md px-0 md:px-20 text-center font-light text-fordham-light-gray/60">
              We're grateful to have an amazing team of talented, dedicated individuals driving our
              product forward. Together, we're building something incredible.
            </p>
          </div>

          <div className="relative">
            <div className="team-members-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mr-10 md:mr-0">
              {teamMembers.map((member, index) => {
                const isFirstWithLetter =
                  index === 0 ||
                  member.name[0].toUpperCase() !== teamMembers[index - 1].name[0].toUpperCase();

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
                        <div>
                          <p className="text-base mb-2 text-fordham-light-gray/60">Affiliation</p>
                          <p className="text-fordham-white">{member.affiliation}</p>
                        </div>

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
                      <a
                        href={member.links.linkedin}
                        className="w-[40px] h-[40px] flex items-center justify-center text-white bg-fordham-dark-gray rounded-full hover:bg-fordham-dark-gray/80 transition"
                      >
                        <IconBrandLinkedinFilled className="w-4 h-4" />
                      </a>
                      <a
                        href={member.links.github}
                        className="w-[40px] h-[40px] flex items-center justify-center text-white bg-fordham-dark-gray rounded-full hover:bg-fordham-dark-gray/80 transition"
                      >
                        <IconBrandGithubFilled className="w-4 h-4" />
                      </a>
                      <a
                        href={member.links.portfolio}
                        className="w-[40px] h-[40px] flex items-center justify-center text-white bg-fordham-dark-gray rounded-full hover:bg-fordham-dark-gray/80 transition"
                      >
                        <IconWorld className="w-4 h-4" />
                      </a>
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

    return Math.max(minScroll, Math.min(maxScroll, currentPosition)) - 100;
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
