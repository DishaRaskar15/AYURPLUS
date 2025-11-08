import React, { useEffect, useState } from 'react';

const MyProfile = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    email: '',
    mobile: '',
    address: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setPatientData(user);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('currentUser', JSON.stringify(patientData));
    alert('Profile updated successfully!');
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#f4fdf6',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#0d7d47',
    },
    quote: {
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#666',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    label: {
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '10px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
      resize: 'vertical',
      minHeight: '80px',
    },
    button: {
      padding: '12px',
      backgroundColor: '#0d7d47',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0a5c35',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome to Your Profile</h2>
      <p style={styles.quote}>"Health is the greatest gift, contentment the greatest wealth." – Buddha</p>
      <p style={styles.quote}>"Take care of your body. It's the only place you have to live." – Jim Rohn</p>

      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Full Name:
          <input
            style={styles.input}
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          Age:
          <input
            style={styles.input}
            type="number"
            name="age"
            value={patientData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            style={styles.input}
            type="email"
            name="email"
            value={patientData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          Mobile:
          <input
            style={styles.input}
            type="tel"
            name="mobile"
            value={patientData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label style={styles.label}>
          Address:
          <textarea
            style={styles.textarea}
            name="address"
            value={patientData.address}
            onChange={handleChange}
            required
          />
        </label>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
