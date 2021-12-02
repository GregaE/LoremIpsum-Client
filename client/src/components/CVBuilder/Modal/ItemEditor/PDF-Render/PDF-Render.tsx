import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import { PDFBLockLarge } from './PDFBlockLarge';
import { PDFProfile } from './PDFBlockProfile';
import { PDFBlockSmall } from './PDFBlockSmall';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Regular.ttf`,
    },
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Bold.ttf`,
      fontWeight: 'bold',
    },
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Medium.ttf`,
      fontWeight: 'medium',
    },
    {
      src: `https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.11.0/font/roboto/Roboto-Light.ttf`,
      fontWeight: 'light',
    },
  ],
});
// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    padding: 25,

    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#FFF',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    textAlign: 'left',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '15px',
  },

  text: {
    flexDirection: 'column',
    marginBottom: 20,
  },
});

export default function PDFRender() {
  return (
    <PDFViewer
      showToolbar={false}
      style={{ height: '100%', display: 'flex', width: '100%' }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <PDFProfile personalDetails={PDFMock.personalDetails} />
            <PDFBlockSmall
              category={PDFMock.skills.name}
              dataList={PDFMock.skills.skills_list}
            />
            <PDFBlockSmall
              category="Certificates"
              dataList={PDFMock.certificates}
            />
            <PDFBLockLarge
              category={PDFMock.work_experience.name}
              dataList={PDFMock.work_experience.experience_list}
            />
            <PDFBLockLarge
              category={PDFMock.education.name}
              dataList={PDFMock.education.list}
            />
            <PDFBlockSmall
              category={PDFMock.languages.name}
              dataList={PDFMock.languages.list}
            />
            <PDFBLockLarge
              category={PDFMock.education.name}
              dataList={PDFMock.education.list}
            />
            <PDFBLockLarge
              category={PDFMock.work_experience.name}
              dataList={PDFMock.work_experience.experience_list}
            />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

const PDFMock = {
  personalDetails: {
    first_name: 'Eugen',
    last_name: 'Nikolajev',
    phone_number: '123456789',
    email: 'carl.marx@gmail.com',
    street: 'Rambla',
    postcode: '65326',
    city: 'Barcelona',
    country: 'Spain',
    headline:
      'I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have more than 2 years of experience in managing and leading teams across multiple sectors. I am eager to learn, I enjoy overcoming challenges, and I have a genuine interest in Business Management and making organisations successful.',
  },
  skills: {
    name: 'Skills',
    skills_list: [
      {
        id: 'ckwkxcfeq0013l5uf5ehs8zz7',
        name: 'Time management and digital time',
        description: 'I can tell the digital time and also on the analog watch',
      },
      {
        id: 'ckwkxcfeq0013l5uf5ashs8zz7',
        name: 'Time management and digital time',
        description: 'I can tell the digital time and also on the analog watch',
      },
      {
        id: 'ckwkxcfeq0013l5uf5ers8zz7',
        name: 'Time management and digital time',
        description: 'I can tell the digital time and also on the analog watch',
      },
    ],
  },
  languages: {
    name: 'Languages',
    list: [
      {
        id: 'ckwkxcfeq0013l5uf5ehs8zz7',
        language_name: 'Inglese',
        level: 'A2',
      },
      {
        id: 'ckwkxcfeq0013l5uf5ashs8zz7',
        language_name: 'Spanish',
        level: 'C2',
      },
      {
        id: 'ckwkxcfeq0013l5uf5ers8zz7',
        language_name: 'Russian - suka',
        level: 'B2',
      },
    ],
  },
  education: {
    name: 'Education',
    list: [
      {
        id: 'ckwnnorez0224ueuf4t8ug0jn',
        degree: 'Electric Engineer',
        school: 'University of Electric Engineering',
        city: 'City of the eletric engineers',
        country: 'Germany',
        description: 'I am an eletric engineer',
        beginMonth: '',
        beginYear: '',
        endMonth: '',
        endYear: '',
      },
      {
        id: 'ckwnnplcd0231ueufvoag12ny',
        degree: 'Mechanic Engineer',
        school: 'University of Mechanic Engineering',
        city: 'City of the mechanic engineers',
        country: 'Germany',
        description: 'I am an mechanic engineer',
        beginMonth: '',
        beginYear: '',
        endMonth: '',
        endYear: '',
      },
    ],
  },
  work_experience: {
    name: 'Work Experience',
    experience_list: [
      {
        id: 'ckwkzdgbr0002ogufepmflr72',
        job_title: 'Cocksucker',
        company: 'Endesa',
        city: 'Barcelona',
        country: 'Espain',
        description: "It's a hard job but someone's gotta do it",
        beginMonth: 'Jul',
        beginYear: '1997',
        endMonth: 'Jul',
        endYear: '1999',
      },
      {
        id: 'ckwl28p4f00006tufroz7pgwf',
        job_title: 'Manager of flex',
        company: 'Endesa',
        city: 'Barcelona',
        country: 'Espain',
        description: "It's a hard job but someone's gotta do it",
        beginMonth: 'Nov',
        beginYear: '2012',
        endMonth: 'Jul',
        endYear: '2015',
      },
      {
        id: 'ckwnl64ga0001grufc6tbabei',
        job_title: 'CEO of Gipsies',
        company: 'Endesa',
        city: 'Barcelona',
        country: 'Espain',
        description: "It's a hard job but \nsomeone's gotta do it",
        beginMonth: 'Jun',
        beginYear: '1997',
        endMonth: 'Jun',
        endYear: '2021',
      },
      {
        id: 'ckwnlbny30021grufyz4uploi',
        job_title: 'Delivering food',
        company: 'Glovo',
        city: 'Barcelona',
        country: 'Espain',
        description: "It's a hard job but someone's gotta do it",
        beginMonth: 'Jun',
        beginYear: '2015',
        endMonth: 'Jun',
        endYear: '2021',
      },
      {
        id: 'ckwnlccbk0001kbufdqpk7o11',
        job_title: 'Delivering more food',
        company: 'Glovo',
        city: 'Barcelona',
        country: 'Espain',
        description: "It's a hard job but someone's gotta do it",
        beginMonth: 'Jun',
        beginYear: '2015',
        endMonth: 'Jun',
        endYear: '2021',
      },
    ],
  },
  certificates: [
    {
      id: 'ckwkpvceh003094uf50ct9jqy',
      name: 'Cocksucking Cert',
      description: 'Also self-explanatory',
    },
    {
      id: 'ckwkpvk60003794uf15g1mech',
      name: 'Super Cocksucking Cert',
      description: 'Also self-explanatory',
    },
    {
      id: 'ckwkqbl5p0001w3uf4rf8snij',
      name: 'Mega Cocksucking Cert',
      description: 'Also self-explanatory',
    },
    {
      id: 'ckwkqc3440001zgufgrcwh7nu',
      name: 'Giga Cocksucking Cert',
      description: 'Also self-explanatory',
    },
    {
      id: 'ckwkpv34k002494ufiexxyj4w',
      name: 'Finally normal certificate',
      description: 'no need for rude certificates',
    },
  ],
};
