import ReactDOM from "react-dom";
import Preview from "../../../Builder/Preview/Preview";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: "center",
    flexDirection: "column",
  },
  text: {
    flexDirection: "column",
    marginBottom: 20,
  }
});

export default function PDFRender() {
  return (
    <PDFViewer style={{ height: "100%", display: "flex", width: "50vw" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.text}>
                <Preview/>
              </Text>
              {/* <Text style={styles.text}>
                <p>SKILLS</p>
              </Text>
              <Text>
                  <p>first skill</p>
                </Text>
              <Text style={styles.text}>
                <p>EDUCATION</p>
              </Text>
              <Text style={styles.text}>
                <p>LANGUAGES</p>
              </Text>
              <Text style={styles.text}>
                <p>WORK EXPERIENCE</p>
              </Text> */}
            </View>
          </Page>
        </Document>
    </PDFViewer>
  )
}

ReactDOM.render(<PDFRender/>, document.getElementById("root"));