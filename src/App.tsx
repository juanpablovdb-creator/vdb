import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Card, WorkCard, SpeakingCard } from "./components/Card";
import { AudiovisualSection } from "./components/AudiovisualSection";
import { ContactSection } from "./components/ContactSection";
import {
  proyectos,
  companies,
  previousWork,
  speaking,
  consultancy,
} from "./data/content";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <section id="proyectos" className="section">
          <div className="container">
            <p className="section-label">Engineering</p>
            <h2 className="section-title">Proyectos de Ingeniería</h2>
            <div className="card-grid card-grid--projects">
              {proyectos.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

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

        <section id="previous-work" className="section">
          <div className="container">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Previous Work</h2>
            <div className="card-grid card-grid--work">
              {previousWork.map((item) => (
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
                />
              ))}
            </div>
          </div>
        </section>

        <section id="consultancy" className="section">
          <div className="container">
            <p className="section-label">Consulting</p>
            <h2 className="section-title">Consultancy & Side Gigs</h2>
            <div className="card-grid card-grid--compact">
              {consultancy.map((item) => (
                <Card key={item.id} item={item} size="compact" />
              ))}
            </div>
          </div>
        </section>

        <AudiovisualSection />
        <ContactSection />
      </main>
    </>
  );
}
