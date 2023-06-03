import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
//TODO get node packe for react - pdf react embed https://react-pdf.org/

import "./resume.css";
import resumeImage from "../../assets/Screenshot 2023-06-02 at 10.06.10 AM.png";

export default function Resume() {
  /* <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Page src={resume} />
          </View>
        </Page>
      </Document> */

  return (
    <section id="resume">
      <img src={resumeImage} id="resumeImage" alt="resume" />
    </section>
  );
}
