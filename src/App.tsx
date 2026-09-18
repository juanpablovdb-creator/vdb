import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { GigMarquee } from "./components/Marquee";
import { Card, WorkCard, SpeakingCard } from "./components/Card";
import { GrowthCase } from "./components/GrowthCase";
import { ContactSection } from "./components/ContactSection";
import {
  projects,
  growthCases,
  companies,
  previousWorkFullTime,
  previousWorkConsulting,
  speaking,
} from "./data/content";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section id="companies" className="section">
          <div className="container">
            <p className="section-label">Ventures</p>
            <h2 className="section-title">Companies</h2>
            <div className="card-grid card-grid--companies">
              {companies.map((item) => (
                <Card key={item.id} item={item} size="large" />
              ))}
            </div>
          </div>
        </section>

        <section id="growth" className="section">
          <div className="container">
            <p className="section-label">Growth</p>
            <h2 className="section-title">Growth</h2>
            <p className="section-intro">
              Product, pipeline, and recovery. Three cases where the motion was commercial, not just the tool.
            </p>
            <div className="card-grid card-grid--growth">
              {growthCases.map((item) => (
                <GrowthCase key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-label">Engineering</p>
            <h2 className="section-title">Engineering Projects</h2>
            <p className="section-intro">
              Tools I shipped in code. The systems behind outbound, ops, and production.
            </p>
            <div className="card-grid card-grid--projects">
              {projects.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="previous-work" className="section">
          <div className="container">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Previous Work</h2>

            <div className="work-group">
              <p className="work-group-label">Full-time & founder roles</p>
              <div className="card-grid card-grid--work">
                {previousWorkFullTime.map((item) => (
                  <WorkCard
                    key={item.id}
                    title={item.title}
                    company={item.company}
                    period={item.period}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div id="consultancy" className="work-group work-group--consulting">
            <div className="container">
              <p className="work-group-label">Consulting engagements</p>
            </div>
            <GigMarquee />
            <div className="container">
              <div className="card-grid card-grid--work">
                {previousWorkConsulting.map((item) => (
                  <WorkCard
                    key={item.id}
                    title={item.title}
                    company={item.company}
                    period={item.period}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <p className="section-label">Teaching</p>
            <h2 className="section-title">Education & Speaking</h2>
            <div className="card-grid card-grid--work">
              {speaking.map((item) => (
                <SpeakingCard
                  key={item.id}
                  title={item.title}
                  venue={item.venue}
                  audience={item.audience}
                  topic={item.topic}
                  inquiryForm={item.inquiryForm}
                />
              ))}
            </div>
          </div>
        </section>

        {/* TODO: restore <AudiovisualSection /> once photo/video assets are ready, then redeploy. */}
        <ContactSection />
      </main>
    </>
  );
}
