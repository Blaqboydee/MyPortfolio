import { useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Font,
  pdf,
} from "@react-pdf/renderer";
import {
  skills,
  projects,
  education,
  personalByRegion,
  experienceByRegion,
  type Region,
} from "../data/portfolio";
import { useRegion } from "../context/RegionContext";

type PersonalData = (typeof personalByRegion)[Region];
type ExperienceData = (typeof experienceByRegion)[Region];

// ─── Register Computer Modern ─────────────────────────────────────────────────

Font.register({
  family: "ComputerModern",
  fonts: [
    { src: "/fonts/cmu-serif-roman.ttf", fontWeight: 400 },
    { src: "/fonts/cmu-serif-bold.ttf", fontWeight: 700 },
    { src: "/fonts/cmu-serif-italic.ttf", fontWeight: 400, fontStyle: "italic" },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

// ─── Tokens ───────────────────────────────────────────────────────────────────

const DARK  = "#0f172a";
const MID   = "#374151";
const MUTED = "#6b7280";
const LINE  = "#d1d5db";

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  page: {
    fontFamily: "ComputerModern",
    fontWeight: 400,
    fontSize: 10,
    color: DARK,
    paddingTop: 44,
    paddingBottom: 44,
    paddingHorizontal: 52,
  },

  // ── Header ──
  headerWrap: {
    alignItems: "center",
    marginBottom: 18,
  },
  headerName: {
    fontSize: 22,
    fontWeight: 700,
    color: DARK,
    marginBottom: 4,
    textAlign: "center",
  },
  headerMeta: {
    fontSize: 9,
    fontWeight: 400,
    color: MID,
    marginBottom: 2,
    textAlign: "center",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  contactLink: {
    fontSize: 9,
    color: DARK,
    textDecoration: "none",
    marginRight: 4,
  },
  contactSep: {
    fontSize: 9,
    color: MUTED,
    marginRight: 4,
  },

  // ── Section ──
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    color: DARK,
    marginBottom: 3,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: LINE,
    marginBottom: 8,
  },

  // ── Education ──
  eduItem: {
    marginBottom: 7,
  },
  eduTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  eduLeft: {
    flex: 1,
    paddingRight: 8,
  },
  eduInstitution: {
    fontSize: 9.5,
    fontWeight: 700,
    color: DARK,
  },
  eduDegree: {
    fontSize: 9,
    fontWeight: 400,
    color: MID,
    marginTop: 1,
  },
  eduRight: {
    alignItems: "flex-end",
    flexShrink: 0,
  },
  eduLocation: {
    fontSize: 9,
    fontWeight: 400,
    color: MID,
  },
  eduPeriod: {
    fontSize: 9,
    fontWeight: 400,
    color: MUTED,
    marginTop: 1,
  },

  // ── Experience ──
  expItem: {
    marginBottom: 9,
  },
  expTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  expLeft: {
    flex: 1,
    paddingRight: 8,
  },
  expOrg: {
    fontSize: 9.5,
    fontWeight: 700,
    color: DARK,
  },
  expRole: {
    fontSize: 9,
    fontWeight: 400,
    fontStyle: "italic",
    color: MID,
    marginTop: 1,
  },
  expRight: {
    alignItems: "flex-end",
    flexShrink: 0,
  },
  expPeriod: {
    fontSize: 9,
    fontWeight: 400,
    color: MUTED,
  },
  expLocation: {
    fontSize: 9,
    fontWeight: 400,
    color: MID,
    marginBottom: 1,
  },
  expBullet: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 3,
  },
  expBulletDot: {
    fontSize: 9,
    color: MID,
    width: 10,
  },
  expDesc: {
    fontSize: 9,
    fontWeight: 600,
    color: MID,
    lineHeight: 1.55,
    flex: 1,
  },

  // ── Projects ──
  projItem: {
    marginBottom: 8,
  },
  projTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  projName: {
    fontSize: 9.5,
    fontWeight: 700,
    color: DARK,
    flex: 1,
    paddingRight: 8,
  },
  projLink: {
    fontSize: 8.5,
    fontWeight: 400,
    color: MUTED,
    textDecoration: "none",
    flexShrink: 0,
  },
  projDesc: {
    fontSize: 9,
    fontWeight: 600,
    color: MID,
    lineHeight: 1.55,
    marginTop: 2,
    marginBottom: 3,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: 8,
    fontWeight: 500,
    color: MUTED,
    marginRight: 6,
  },

  // ── Skills ──
  skillRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  skillCategory: {
    fontSize: 9,
    fontWeight: 700,
    color: DARK,
    width: 72,
    flexShrink: 0,
  },
  skillList: {
    fontSize: 9,
    fontWeight: 600,
    color: MID,
    flex: 1,
    lineHeight: 1.5,
  },
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

const featuredProjects = projects.filter((p) => p.featured);

const getExperienceDetails = (job: { details?: readonly string[]; desc: string }): readonly string[] => {
  if (Array.isArray(job.details) && job.details.length > 0) {
    return job.details;
  }

  return [job.desc];
};

// ─── Document ─────────────────────────────────────────────────────────────────

const CVDocument = ({
  personal,
  experience,
}: {
  personal: PersonalData;
  experience: ExperienceData;
}) => (
  <Document title={`${personal.name} — CV`} author={personal.name}>
    <Page size="A4" style={s.page}>

      {/* ── Header ── */}
      <View style={s.headerWrap}>
        <Text style={s.headerName}>{personal.name.toUpperCase()}</Text>
        <Text style={s.headerMeta}>{personal.location}</Text>
        <View style={s.contactRow}>
          <Link src={`mailto:${personal.email}`} style={s.contactLink}>{personal.email}</Link>
          <Text style={s.contactSep}>·</Text>
          <Text style={s.contactLink}>{personal.phone}</Text>
          <Text style={s.contactSep}>·</Text>
          <Link src={personal.github} style={s.contactLink}>github.com/Blaqboydee</Link>
          <Text style={s.contactSep}>·</Text>
          <Link src={personal.linkedin} style={s.contactLink}>LinkedIn</Link>
        </View>
      </View>

      {/* ── Education ── */}
      <Text style={s.sectionTitle}>Education</Text>
      <View style={s.divider} />
      <View style={s.section}>
        {education.map((edu, i) => (
          <View key={i} style={s.eduItem}>
            <View style={s.eduTopRow}>
              <View style={s.eduLeft}>
                <Text style={s.eduInstitution}>{edu.institution}</Text>
                <Text style={s.eduDegree}>{edu.degree}</Text>
              </View>
              <View style={s.eduRight}>
                <Text style={s.eduLocation}>{edu.location}</Text>
                <Text style={s.eduPeriod}>{edu.period}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* ── Experience ── */}
      <Text style={s.sectionTitle}>Work Experience</Text>
      <View style={s.divider} />
      <View style={s.section}>
        {experience.map((job, i) => (
          <View key={i} style={s.expItem}>
            <View style={s.expTopRow}>
              <View style={s.expLeft}>
                <Text style={s.expOrg}>{job.org}</Text>
                <Text style={s.expRole}>{job.role}</Text>
              </View>
              <View style={s.expRight}>
                {job.location ? <Text style={s.expLocation}>{job.location}</Text> : null}
                <Text style={s.expPeriod}>{job.period}</Text>
              </View>
            </View>
            {getExperienceDetails(job).map((detail, detailIndex) => (
              <View key={detailIndex} style={s.expBullet}>
                <Text style={s.expBulletDot}>•</Text>
                <Text style={s.expDesc}>{detail}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* ── Projects ── */}
      <Text style={s.sectionTitle}>Projects</Text>
      <View style={s.divider} />
      <View style={s.section}>
        {featuredProjects.map((proj, i) => (
          <View key={i} style={s.projItem}>
            <View style={s.projTopRow}>
              <Text style={s.projName}>{proj.name}</Text>
              <Link src={proj.live} style={s.projLink}>{proj.live.replace("https://", "")}</Link>
            </View>
            <Text style={s.projDesc}>{proj.description}</Text>
            <View style={s.tagRow}>
              {proj.tech.map((t, j) => (
                <Text key={j} style={s.tag}>{t}{j < proj.tech.length - 1 ? " ·" : ""}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* ── Skills ── */}
      <Text style={s.sectionTitle}>Skills</Text>
      <View style={s.divider} />
      <View style={s.section}>
        {Object.entries(skills).map(([category, list], i) => (
          <View key={i} style={s.skillRow}>
            <Text style={s.skillCategory}>{category}</Text>
            <Text style={s.skillList}>{list.join(", ")}</Text>
          </View>
        ))}
      </View>

    </Page>
  </Document>
);

// ─── Download Button ──────────────────────────────────────────────────────────

export default function CVDownloadButton() {
  const { region, personal, experience } = useRegion();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(
        <CVDocument personal={personal} experience={experience} />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `001_Adeoluwa_Adegoke_CV_${region.toUpperCase()}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-block text-[#bbb] text-[12px] sm:text-[13px] px-6 py-3 border border-[#444] rounded tracking-[0.04em] hover:text-white hover:border-[#888] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Generating…" : `Download CV (${region.toUpperCase()})`}
    </button>
  );
}