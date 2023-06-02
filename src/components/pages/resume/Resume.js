import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "../../assets/Copy of Copy of Alex Horning - Resume June 2021.pdf";
//TODO get node packe for react - pdf react embed https://react-pdf.org/
import { Page, Document, View, Image, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import "./resume.css";
import resumeImage from "../../assets/Screenshot 2023-06-02 at 10.06.10 AM.png";

export default function Resume() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  /* <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Page src={resume} />
          </View>
        </Page>
      </Document> */

  return (
    <section id="resume">
      <img src={resumeImage} id="resumeImage" />
    </section>
  );
}
