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
import { personal, skills, projects, experience } from "../data/portfolio";

// ─── Register Calibri (local system TTF, react-pdf compatible) ───────────────

Font.register({
  family: "Calibri",
  fonts: [
    { src: "/fonts/calibril.ttf", fontWeight: 300 },
    { src: "/fonts/calibri.ttf",  fontWeight: 400 },
    { src: "/fonts/calibri.ttf",  fontWeight: 500 },
    { src: "/fonts/calibrib.ttf", fontWeight: 600 },
    { src: "/fonts/calibrib.ttf", fontWeight: 700 },
    { src: "/fonts/calibrii.ttf", fontWeight: 400, fontStyle: "italic" },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

// ─── Tokens ───────────────────────────────────────────────────────────────────

const ACCENT  = "#0f172a";
const MID     = "#475569";
const MUTED   = "#94a3b8";
const LINE    = "#e2e8f0";
const SIDEBAR = "#f8fafc";

// ─── Styles ───────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  page: {
    fontFamily: "Calibri",
    fontWeight: 400,
    fontSize: 9,
    color: ACCENT,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },

  // ── Two-column page shell ──
  body: {
    flexDirection: "row",
  },
  main: {
    width: "62%",
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 40,
    paddingRight: 22,
  },
  sidebar: {
    width: "38%",
    backgroundColor: SIDEBAR,
    borderLeftWidth: 1,
    borderLeftColor: LINE,
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 22,
    paddingRight: 28,
  },

  // ── Header (spans full width, sits above body columns) ──
  header: {
    backgroundColor: ACCENT,
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 44,
    marginBottom: 0,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  titleLine: {
    fontSize: 10,
    fontWeight: 300,
    color: "#94a3b8",
    marginBottom: 14,
    letterSpacing: 0.2,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactLink: {
    fontSize: 8,
    fontWeight: 400,
    color: "#cbd5e1",
    textDecoration: "none",
    marginRight: 6,
  },
  contactSep: {
    fontSize: 8,
    color: "#475569",
    marginRight: 6,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: LINE,
    marginBottom: 10,
  },

  // ── Section ──
  section: { marginBottom: 12 },
  sectionTitle: {
    fontSize: 7,
    fontWeight: 600,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: MUTED,
    marginBottom: 8,
  },

  // ── Experience ──
  expItem: { marginBottom: 8 },
  expTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  expRole: {
    fontSize: 9,
    fontWeight: 600,
    flex: 1,
    paddingRight: 8,
  },
  expPeriod: {
    fontSize: 7.5,
    fontWeight: 400,
    color: MUTED,
    flexShrink: 0,
  },
  expOrg: {
    fontSize: 8,
    fontWeight: 500,
    color: MID,
    marginBottom: 2,
  },
  expDesc: {
    fontSize: 8,
    fontWeight: 300,
    color: MID,
    lineHeight: 1.45,
  },

  // ── Projects ──
  projItem: { marginBottom: 9 },
  projTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  projName: {
    fontSize: 9,
    fontWeight: 600,
    flex: 1,
    paddingRight: 8,
  },
  projLink: {
    fontSize: 7,
    fontWeight: 400,
    color: MUTED,
    textDecoration: "none",
    flexShrink: 0,
  },
  projDesc: {
    fontSize: 8,
    fontWeight: 300,
    color: MID,
    lineHeight: 1.45,
    marginBottom: 4,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    fontSize: 7,
    fontWeight: 400,
    color: MUTED,
    borderWidth: 1,
    borderColor: LINE,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    marginRight: 3,
    marginBottom: 2,
  },

  // ── Sidebar: Skills ──
  skillGroup: { marginBottom: 8 },
  skillLabel: {
    fontSize: 8,
    fontWeight: 600,
    color: ACCENT,
    marginBottom: 2,
  },
  skillList: {
    fontSize: 8,
    fontWeight: 300,
    color: MID,
    lineHeight: 1.45,
  },

  // ── Sidebar: About ──
  aboutText: {
    fontSize: 8,
    fontWeight: 300,
    color: MID,
    lineHeight: 1.5,
    marginBottom: 5,
  },
});

// ─── Document ─────────────────────────────────────────────────────────────────

const featuredProjects = projects.filter((p) => p.featured);

const CVDocument = () => (
  <Document title={`${personal.name} — CV`} author={personal.name}>
    <Page size="A4" style={s.page}>

      {/* ── Dark header banner ─────────────────── */}
      <View style={s.header}>
        <Text style={s.name}>{personal.name}</Text>
        <Text style={s.titleLine}>{personal.title}  ·  {personal.location}</Text>
        <View style={s.contactRow}>
          <Link src={`mailto:${personal.email}`} style={s.contactLink}>{personal.email}</Link>
          <Text style={s.contactSep}>·</Text>
          <Link src={personal.github} style={s.contactLink}>github.com/Blaqboydee</Link>
          <Text style={s.contactSep}>·</Text>
          <Link src={personal.linkedin} style={s.contactLink}>LinkedIn</Link>
          <Text style={s.contactSep}>·</Text>
          <Text style={{ ...s.contactLink, textDecoration: "none" }}>{personal.whatsapp}</Text>
        </View>
      </View>

      {/* ── Body: main + sidebar ───────────────── */}
      <View style={s.body}>

        {/* Main column */}
        <View style={s.main}>

          {/* Experience */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Experience</Text>
            <View style={s.divider} />
            {experience.map((job, i) => (
              <View key={i} style={s.expItem}>
                <View style={s.expTopRow}>
                  <Text style={s.expRole}>{job.role}</Text>
                  <Text style={s.expPeriod}>{job.period}</Text>
                </View>
                <Text style={s.expOrg}>{job.org}</Text>
                <Text style={s.expDesc}>{job.desc}</Text>
              </View>
            ))}
          </View>

          {/* Projects */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Featured Projects</Text>
            <View style={s.divider} />
            {featuredProjects.map((proj, i) => (
              <View key={i} style={s.projItem}>
                <View style={s.projTopRow}>
                  <Text style={s.projName}>{proj.name}</Text>
                  <Link src={proj.live} style={s.projLink}>{proj.live.replace("https://", "")}</Link>
                </View>
                <Text style={s.projDesc}>{proj.description}</Text>
                <View style={s.tagRow}>
                  {proj.tech.map((t, j) => (
                    <Text key={j} style={s.tag}>{t}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

        </View>

        {/* Sidebar */}
        <View style={s.sidebar}>

          {/* About */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>About</Text>
            <View style={s.divider} />
            {personal.about.map((para, i) => (
              <Text key={i} style={s.aboutText}>{para}</Text>
            ))}
          </View>

          {/* Skills */}
          <View style={s.section}>
            <Text style={s.sectionTitle}>Skills</Text>
            <View style={s.divider} />
            {Object.entries(skills).map(([category, list], i) => (
              <View key={i} style={s.skillGroup}>
                <Text style={s.skillLabel}>{category}</Text>
                <Text style={s.skillList}>{list.join(", ")}</Text>
              </View>
            ))}
          </View>

        </View>
      </View>

    </Page>
  </Document>
);

// ─── Download Button ──────────────────────────────────────────────────────────

export default function CVDownloadButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<CVDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Adeoluwa_Adegoke_CV.pdf";
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
      {loading ? "Generating…" : "Download CV"}
    </button>
  );
}
