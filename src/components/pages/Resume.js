import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import resume from "../assets/Copy of Copy of Alex Horning - Resume June 2021.pdf";
//TODO get node packe for react - pdf react embed https://react-pdf.org/
import { Page, Document, View, Image, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

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

  return (
    <section>
      <p className="d-flex justify-content-center">Insert Resume Here</p>

      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Page src={resume}/>
          </View>
        </Page>
      </Document>
    </section>
  );
}
