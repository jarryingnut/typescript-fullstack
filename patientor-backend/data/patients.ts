import {gender, patient} from '../src/types/patientEntry';
//import toNewPatientEntry from '../src/utils';

const patientsData: Array<patient> = [

    {
        "id": "d2773336-f723-11e9-8f0b-362b9e155667",
        "name": "John McClane",
        "dateOfBirth": "1986-07-09",
        "ssn": "090786-122X",
        "gender": gender.Male,
        "occupation": "New york city cop"
    },
    {
        "id": "d2773598-f723-11e9-8f0b-362b9e155667",
        "name": "Martin Riggs",
        "dateOfBirth": "1979-01-30",
        "ssn": "300179-77A",
        "gender": gender.Male,
        "occupation": "Cop"
    },
    {
        "id": "d27736ec-f723-11e9-8f0b-362b9e155667",
        "name": "Hans Gruber",
        "dateOfBirth": "1970-04-25",
        "ssn": "250470-555L",
        "gender": gender.Female,
        "occupation": "Technician"
    },
    {
        "id": "d2773822-f723-11e9-8f0b-362b9e155667",
        "name": "Dana Scully",
        "dateOfBirth": "1974-01-05",
        "ssn": "050174-432N",
        "gender": gender.Female,
        "occupation": "Forensic Pathologist"
    },
    {
        "id": "d2773c6e-f723-11e9-8f0b-362b9e155667",
        "name": "Matti Luukkainen",
        "dateOfBirth": "1971-04-09",
        "ssn": "090471-8890",
        "gender": gender.Male,
        "occupation": "Digital evangelist"
    }
];

// const patientEntries: patient[] = patientsData.map(obj => {
//     const object = toNewPatient(obj) as patient;
//     object.id = obj.id;
//     return object;
// });

// const patientsEntries = patientsData.map((patient) => {
//   const object = toNewPatientEntry(patient) as patient;
//   object.id = patient.id;
//   return object;
// });

export default patientsData;