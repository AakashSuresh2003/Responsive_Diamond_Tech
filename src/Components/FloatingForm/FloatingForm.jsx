import React, { useState } from "react";
import "./FloatingForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReCAPTCHA from "react-google-recaptcha";
import CircularProgress from "@mui/material/CircularProgress"; 

const FloatingFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    address: "",
    stoneProcessing: false,
    woodProcessing: false,
    laserMachines: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [apiResponse, setApiResponse] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name || formData.name.length < 3 || formData.name.length > 256) {
      errors.name = "Name must be between 3 and 256 characters";
    }
    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone || formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (formData.address) {
      if (formData.address.length < 3 || formData.address.length > 256) {
        errors.address = "Address must be between 3 and 256 characters";
      } else if (/[^a-zA-Z0-9 ]/g.test(formData.address)) {
        errors.address = "Address must not contain symbols";
      }
    }
    if (!formData.city) {
      errors.city = "City is required";
    }
    if (!formData.stoneProcessing && !formData.woodProcessing && !formData.laserMachines) {
      errors.category = "At least one category must be selected";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captchaVerified && validateForm()) {
      setLoading(true); 
      try {
        const response = await fetch("http://localhost:4001/api/v1/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        
        if (response.ok) {
          setApiResponse(result.message || "Form submitted successfully!");
          setIsSubmitted(true); 
        } else {
          setApiResponse(result.message || "Submission failed. Please try again.");
        }
      } catch (error) {
        setApiResponse("Error submitting form. Please try again.");
      } finally {
        setLoading(false); 
      }
    } else {
      alert("Please complete the CAPTCHA and correct the errors in the form");
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleDone = () => {
    setIsSubmitted(false); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Enquire</h2>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <TextField
              className="MuiTextField-root"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            <TextField
              className="MuiTextField-root"
              label="Organization Name"
              name="Org_name"
              value={formData.Org_name}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!formErrors.Org_name}
              helperText={formErrors.Org_name}
            />
            <TextField
              className="MuiTextField-root"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            <TextField
              className="MuiTextField-root"
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!formErrors.phone}
              helperText={formErrors.phone}
            />
            <TextField
              className="MuiTextField-root"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!formErrors.address}
              helperText={formErrors.address}
            />
            <TextField
              className="MuiTextField-root"
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              error={!!formErrors.city}
              helperText={formErrors.city}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="stoneProcessing"
                  checked={formData.stoneProcessing}
                  onChange={handleChange}
                />
              }
              label="Stone Processing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="woodProcessing"
                  checked={formData.woodProcessing}
                  onChange={handleChange}
                />
              }
              label="Wood Processing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="laserMachines"
                  checked={formData.laserMachines}
                  onChange={handleChange}
                />
              }
              label="Laser Machines"
            />
            {formErrors.category && <div className="error">{formErrors.category}</div>}
            <TextField
              className="MuiTextField-root"
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <ReCAPTCHA
              sitekey="6LfWhxMqAAAAAB4xxkpF7iBcU7ggp7XekCxw4woV"
              onChange={handleCaptchaChange}
            />
            <div className="submit-button">
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <h3>{apiResponse}</h3>
            <Button variant="contained" color="primary" onClick={handleDone}>
              Done
            </Button>
          </div>
        )}
        {loading && (
          <div className="loader-overlay">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingFormModal;
