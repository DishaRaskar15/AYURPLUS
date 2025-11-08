import arrowicon from './arrowicon.jpg'
import chatlogo from "./chatlogo.jpg"
import crossicon from "./crossicon.webp"
import d1 from "./d1.jpg"
import d2 from "./d2.jpg"
import d3 from "./d3.jpg"
import d4 from "./d4.jpg"
import d5 from "./d5.jpg"
import d6 from "./d6.jpg"
import d7 from "./d7.webp"
import d8 from "./d8.avif"
import d10 from "./d10.webp"
import d11 from "./d11.jpg"
import Logo from "./logo.png"
import profile from "./profile.png"
import dropdown from "./dropdown.jpg"
import dicon from "./dicon.png"
import group_profiles from "./group_profiles.png"
import header_img from './header_img.png'
import arrow_icon from './arrow_icon.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from'./Gynecologist.svg'
import Pediatricians from './Pediatricians.svg'
import Neurologist from './Neurologist.svg'
import Dermatologist from './Dermatologist.svg'
import Qr from './Qr.jpeg'

export const Assets ={
    arrowicon,
    chatlogo,
    crossicon,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d10,
    d11,
    Logo,
    profile,
    dropdown,
    dicon,
    group_profiles,
    header_img,
    arrow_icon,
    Gastroenterologist,
    General_physician,
    Gynecologist,
    Pediatricians,
    Neurologist,
    Dermatologist,
    Qr

}

export const specialityData = [
    {
      speciality: 'General_Physician',
      image: General_physician,
    },
    {
      speciality: 'Gynecologist',
      image: Gynecologist,
    },
    {
      speciality: 'Dermatologist',
      image: Dermatologist,
    },
    {
      speciality: 'Pediatrician',  // Corrected to "Pediatrician"
      image: Pediatricians,
    },
    {
      speciality: 'Neurologist',
      image: Neurologist,
    },
    {
      speciality: 'Gastroenterologist',
      image: Gastroenterologist,
    },
  ];
  export const doctors = [
    {
      _id: 'd1',
      name: 'Dr Aakash Bansude',
      image: d1,
      speciality: "General_Physician",  // Updated speciality name
      degree: "MBBS",
      experience: "4 years",
      about: "Dr. Akash has a strong commitment to delivering comprehensive medical care.",
      fees: 200,
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
    {
      _id: 'd2',
      name: 'Dr Priya Sharma',
      image: d2,
      speciality: "Dermatologist",  // Correct speciality name
      degree: "MD (Dermatology)",
      experience: "6 years",
      about: "Dr. Priya specializes in skin health and cosmetic treatments.",
      fees: 500,
      address: {
        line1: 'MG Road, Block A',
        line2: 'Sector 5, Mumbai',
      },
    },
    {
      _id: 'd3',
      name: 'Dr Rohan Mehta',
      image: d3,
      speciality: "Gynecologist",  // Correct speciality name
      degree: "MD (Gynecologist)",
      experience: "8 years",
      about: "Dr. Rohan is an expert in interventional gynecology.",
      fees: 500,
      address: {
        line1: 'Park Avenue',
        line2: 'Central Zone, Delhi',
      },
    },
    {
      _id: 'd4',
      name: 'Dr Amit Deshmukh',
      image: d4,
      speciality: "General_Physician",  // Updated speciality name
      degree: "MBBS",
      experience: "10 years",
      about: "Dr. Amit has a lot of experience.",
      fees: 300,
      address: {
        line1: 'Green Park Street',
        line2: 'Sector 21, Pune',
      },
    },
    {
      _id: 'd5',
      name: 'Dr Vishal Gupta',
      image: d5,
      speciality: "General_Physician",  // Updated speciality name
      degree: "MBBS",
      experience: "8 years",
      about: "Dr. Vishal is an expert in ear, nose, and throat treatments.",
      fees: 200,
      address: {
        line1: 'Heritage Plaza',
        line2: 'Sector 14, Ahmedabad',
      },
    },
    {
      _id: 'd6',
      name: 'Dr Neeraj Sinha',
      image: d6,
      speciality: "Neurologist",  // Correct speciality name
      degree: "MS (Neurology)",
      experience: "9 years",
      about: "Dr. Neeraj is a specialist in brain and nervous system disorders.",
      fees: 500,
      address: {
        line1: 'City Light Area',
        line2: 'Sector 12, Hyderabad',
      },
    },
    {
      _id: 'd7',
      name: 'Dr Arjun Nair',
      image: d7,
      speciality: "Gastroenterologist",  // Correct speciality name
      degree: "MS (Gastroenterology)",
      experience: "9 years",
      about: "Dr. Arjun specializes in digestive system health and diseases.",
      fees: 650,
      address: {
        line1: 'Silver Oak Road',
        line2: 'Downtown, Thiruvananthapuram',
      },
    },
    {
      _id: 'd8',
      name: 'Dr Sahil Joshi',
      image: d8,
      speciality: "Gynecologist",  // Correct speciality name
      degree: "MD (Gynecologist)",
      experience: "7 years",
      about: "Dr. Sahil is an expert in gynecology.",
      fees: 450,
      address: {
        line1: 'Palm Street',
        line2: 'North City, Lucknow',
      },
    },
    {
      _id: 'd10',
      name: 'Dr Sneha Patil',
      image: d10,
      speciality: "Pediatrician",  // Correct speciality name
      degree: "MD (Pediatrics)",
      experience: "5 years",
      about: "Dr. Sneha is passionate about child healthcare and wellness.",
      fees: 250,
      address: {
        line1: 'Lakeview Colony',
        line2: 'West End, Bangalore',
      },
    },
    {
      _id: 'd11',
      name: 'Dr Karan Malhotra',
      image: d11,
      speciality: "Pediatrician",  // Correct speciality name
      degree: "MCh (Pediatrician)",
      experience: "11 years",
      about: "Dr. Karan is passionate about child healthcare and wellness.",
      fees: 200,
      address: {
        line1: 'Hilltop Residency',
        line2: 'Sector 9, Chandigarh',
      },
    },
  ];
  