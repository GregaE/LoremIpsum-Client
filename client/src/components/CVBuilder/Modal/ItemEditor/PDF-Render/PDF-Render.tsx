import ReactDOM from "react-dom";
import Preview from "../../../Builder/Preview/Preview";
import { PDFViewer } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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
    flexGrow: 0,
  },
});

export default function PDFRender() {
  return (
    <PDFViewer style={{ height: "70vh", display: "flex", width: "50vw" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            <View>
              <Text>
                <Preview/>
              </Text>
            </View>
          </Page>
        </Document>
    </PDFViewer>
  )
}
  
ReactDOM.render(<PDFRender/>, document.getElementById("root"));