export interface CaseStudyFigure {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
  fit?: "cover" | "contain" | "natural";
}

export interface CaseStudyCard {
  href: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

export type CaseStudyBlock =
  | { type: "copy"; label: string; paragraphs: string[] }
  | { type: "figure"; figure: CaseStudyFigure }
  | { type: "gallery"; label?: string; intro?: string; columns?: 1 | 2 | 3; images: CaseStudyFigure[] }
  | { type: "cards"; label: string; intro?: string; items: CaseStudyCard[] }
  | { type: "logos"; label?: string; intro?: string; images: CaseStudyFigure[] }
  | { type: "link"; href: string; label: string };

export interface CaseStudy {
  path: string;
  title: string;
  role: string;
  period: string;
  documentTitle: string;
  homeHref?: string;
  homeLabel?: string;
  hero?: CaseStudyFigure;
  blocks: CaseStudyBlock[];
}

const vloomImg = (file: string) => `/images/case-studies/vloom/${file}`;

export const vloomCaseStudy: CaseStudy = {
  path: "/vloom",
  title: "Vloom",
  role: "CEO & Co-founder",
  period: "2023–present",
  documentTitle: "Vloom | VDB",
  homeHref: "/",
  homeLabel: "Back to home",
  hero: {
    src: "/images/companies/vloom-1.webp",
    alt: "Vloom homepage hero. Grow your brand with video content.",
    caption: "wearevloom.com",
    href: "https://wearevloom.com/",
    fit: "natural",
  },
  blocks: [
    {
      type: "copy",
      label: "Context",
      paragraphs: [
        "Vloom started in 2023 with a different hypothesis than the one it runs on today: video editing for content creators, betting that the creator economy would keep growing and that creators would buy from us directly. The hypothesis did not work. Influencer marketing already had that problem solved. The pivot was toward companies, offering creative services with technology behind them, not just editing.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/companies/vloom-2.webp",
        alt: "Vloom site showing the brands and teams that trust the company",
        caption: "Trusted by 100+ creators, founders, and marketing teams",
        href: "https://wearevloom.com/",
        fit: "natural",
      },
    },
    {
      type: "logos",
      label: "Clients on the site",
      intro: "A slice of the roster that shows up on wearevloom.com today.",
      images: [
        { src: vloomImg("client-koinly.webp"), alt: "Koinly" },
        { src: vloomImg("client-billion-minds.webp"), alt: "Billion Minds" },
        { src: vloomImg("kitsuco-mark.webp"), alt: "Kitsuco" },
        { src: vloomImg("client-wrestle-u.webp"), alt: "Wrestling University" },
        { src: vloomImg("client-felipe-vergara.webp"), alt: "Felipe Vergara" },
        { src: vloomImg("client-dapta.webp"), alt: "Dapta" },
        { src: vloomImg("client-deeplook.webp"), alt: "Deeplook" },
        { src: vloomImg("client-avasta.webp"), alt: "Avasta" },
        { src: vloomImg("client-kinnto.webp"), alt: "Kinnto" },
        { src: vloomImg("client-porter.webp"), alt: "Porter" },
      ],
    },
    {
      type: "copy",
      label: "What was built",
      paragraphs: [
        "Vloom solves a specific problem for companies that produce video constantly: scale, consistency, and high quality from experts who stay with the creative process, while everything operational behind the scenes is fully automated.",
        "The difference versus a traditional agency is how Vloom integrates with the client, not the other way around. Vloom connects directly to the tools the client already uses, whether Trello, Notion, or Airtable, takes the project in from there, produces it, delivers it, and when revisions come in, the team finds out immediately without the client having to message anyone.",
        "The real flow: the project is posted on Vloom's platform or straight into the client's system, it syncs internally, and a dedicated Slack channel is created for that project. Deliveries go out through Frame, where the client leaves exact timecode notes, and those notes trigger automatic notifications to the internal team via Slack bots connected with Zapier, so the revision starts before the client has to ask again.",
      ],
    },
    {
      type: "gallery",
      label: "The operating flow",
      intro: "Intake lands in Slack, ops gets a project channel, and Frame notes ping the team automatically.",
      columns: 1,
      images: [
        {
          src: vloomImg("slack-new-project.webp"),
          alt: "Vloomy Slack bot posting a new Vireo Video project with brief, assets, and deadline",
          caption: "New project synced from the client intake into Slack and Airtable",
          fit: "contain",
        },
        {
          src: vloomImg("slack-project-received.webp"),
          alt: "Zapier Slack alert tagging ops on a new project with its deadline",
          caption: "Ops ping when a project is received",
          fit: "contain",
        },
        {
          src: vloomImg("slack-revisions.webp"),
          alt: "Vloom Bot Revisions posting Frame notification alerts for Matt Clarke, Felipe Vergara, and other accounts",
          caption: "Automatic Frame revision alerts in Slack",
          fit: "contain",
        },
      ],
    },
    {
      type: "copy",
      label: "Role",
      paragraphs: [
        "I lead sales, own all of the company's financial data, and make the strategic decisions.",
      ],
    },
    {
      type: "copy",
      label: "Team and operations",
      paragraphs: [
        "The team reached 20 people at one point, but a vertical that had been opened was producing almost no profit. Closing it brought the team to 9, and the company became more profitable with fewer people. Today the team is 2 in sales, 1 in paid media, 5 in operations, plus Juan Pablo.",
      ],
    },
    {
      type: "copy",
      label: "Results",
      paragraphs: [
        "318% growth between year one and year two. This year's growth in gross revenue is more modest (~10%), but profitability is higher after closing the low-margin vertical.",
        "This year the company has worked with 44 active clients, with three accounts (Koinly, Kitsuco, and Vireo Video) representing about 30% of revenue for the period. Some of the most consistent clients (paid in 8 of 8 months) include Felipe Vergara and Borja Castelar.",
      ],
    },
    {
      type: "cards",
      label: "Client case studies",
      intro: "Full writeups live on the Vloom site. These three are the public ones.",
      items: [
        {
          href: "https://wearevloom.com/kitsuco-case-study/",
          title: "Kitsuco",
          subtitle: "12X ROAS and $110K in B2B sales through the Panama store",
          image: vloomImg("kitsuco-cover.webp"),
          alt: "Kitsuco case study cover with a 15x return on ad spend quote",
        },
        {
          href: "https://wearevloom.com/billion-minds-case-study/",
          title: "Billion Minds",
          subtitle: "12X production capacity and a 150% jump in published courses",
          image: vloomImg("billion-minds-cover.webp"),
          alt: "Billion Minds case study cover with founder Paul Slater",
        },
        {
          href: "https://wearevloom.com/case-studies/wrestle-u/",
          title: "Wrestle U",
          subtitle: "+200K views and +4K subscribers in 30 days",
          image: vloomImg("wrestle-thumb-1.webp"),
          alt: "Wrestle U YouTube thumbnail produced by Vloom",
        },
      ],
    },
    {
      type: "gallery",
      label: "Wrestle U deliverables",
      intro: "Thumbnails Vloom produced for the channel. Open the full case study for the workflow behind them.",
      columns: 3,
      images: [
        {
          src: vloomImg("wrestle-thumb-1.webp"),
          alt: "Wrestle U thumbnail, bully big guys",
          href: "https://wearevloom.com/case-studies/wrestle-u/",
        },
        {
          src: vloomImg("wrestle-thumb-2.webp"),
          alt: "Wrestle U thumbnail, stop getting pushed around",
          href: "https://wearevloom.com/case-studies/wrestle-u/",
        },
        {
          src: vloomImg("wrestle-thumb-3.webp"),
          alt: "Wrestle U thumbnail, time to throw",
          href: "https://wearevloom.com/case-studies/wrestle-u/",
        },
      ],
    },
    {
      type: "gallery",
      label: "Portfolio",
      intro: "Video thumbnails pulled from wearevloom.com/portfolio. Motion, short form, long form, AI avatars, and ads.",
      columns: 3,
      images: [
        {
          src: vloomImg("yt-01.webp"),
          alt: "Portfolio explainer, route from A to B",
          href: "https://www.youtube.com/watch?v=Cgky2DAj3NA",
          caption: "Explainer",
        },
        {
          src: vloomImg("yt-02.webp"),
          alt: "Portfolio short form, sculpted dragon",
          href: "https://www.youtube.com/watch?v=zasdT_vaUNo",
          caption: "Short form",
        },
        {
          src: vloomImg("yt-03.webp"),
          alt: "Portfolio explainer, YouTube strategies ranking",
          href: "https://www.youtube.com/watch?v=Qhg09bbhN5w",
          caption: "Explainer",
        },
        {
          src: vloomImg("yt-04.webp"),
          alt: "Portfolio long form, Technomile C-suite security",
          href: "https://www.youtube.com/watch?v=lxDbK6EjRHg",
          caption: "Long form",
        },
        {
          src: vloomImg("yt-05.webp"),
          alt: "Portfolio AI avatar, illustrated narrative",
          href: "https://www.youtube.com/watch?v=qHIkAGAS5bw",
          caption: "AI avatar",
        },
        {
          src: vloomImg("yt-06.webp"),
          alt: "Portfolio short form",
          href: "https://www.youtube.com/watch?v=4Pb4C2Ty3qc",
          caption: "Short form",
        },
        {
          src: vloomImg("yt-07.webp"),
          alt: "Portfolio explainer",
          href: "https://www.youtube.com/watch?v=gGVYrSL9Fpo",
          caption: "Explainer",
        },
        {
          src: vloomImg("yt-08.webp"),
          alt: "Portfolio video ad, product demo",
          href: "https://www.youtube.com/watch?v=8Rpvl9IYPhw",
          caption: "Video ad",
        },
        {
          src: vloomImg("yt-09.webp"),
          alt: "Portfolio video ad",
          href: "https://www.youtube.com/watch?v=28UPrPBvwUY",
          caption: "Video ad",
        },
        {
          src: vloomImg("yt-10.webp"),
          alt: "Portfolio video ad",
          href: "https://www.youtube.com/watch?v=Hmu2sQU9wjA",
          caption: "Video ad",
        },
        {
          src: vloomImg("yt-11.webp"),
          alt: "Portfolio explainer",
          href: "https://www.youtube.com/watch?v=uScEZCTPwIE",
          caption: "Explainer",
        },
        {
          src: vloomImg("yt-12.webp"),
          alt: "Portfolio explainer",
          href: "https://www.youtube.com/watch?v=DgUj4gLYMlc",
          caption: "Explainer",
        },
      ],
    },
    {
      type: "link",
      href: "https://wearevloom.com/portfolio/",
      label: "See the full portfolio on wearevloom.com",
    },
    {
      type: "figure",
      figure: {
        src: "/images/companies/vloom-4.webp",
        alt: "Paul Slater of Billion Minds quoting Vloom on video quality and output",
        caption: "Paul Slater, Billion Minds, on the Vloom homepage",
        href: "https://wearevloom.com/billion-minds-case-study/",
        fit: "natural",
      },
    },
  ],
};

export const caseStudiesByPath: Record<string, CaseStudy> = {
  [vloomCaseStudy.path]: vloomCaseStudy,
};
