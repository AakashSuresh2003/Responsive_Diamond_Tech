import React, { useState } from "react";
import "./FloatingForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ReCAPTCHA from "react-google-recaptcha";

const FloatingFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
    stoneProcessing: false,
    woodProcessing: false,
    laserMachines: false,
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (formData.name.length < 3 || formData.name.length > 256) {
      errors.name = "Name should be between 3 and 256 characters";
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number should be 10 digits";
    }

    if (
      !formData.stoneProcessing &&
      !formData.woodProcessing &&
      !formData.laserMachines
    ) {
      errors.checkbox = "Select at least one option";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified && validateForm()) {
      // Submit form data
      console.log("Form submitted:", formData);
      onClose();
    } else if (!captchaVerified) {
      alert("Please complete the CAPTCHA");
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Enquire</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 256, minLength: 3 }}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            inputProps={{ maxLength: 10 }}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
          />
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
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
          {formErrors.checkbox && (
            <p className="error-text">{formErrors.checkbox}</p>
          )}
          <TextField
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
      </div>
    </div>
  );
};

export default FloatingFormModal;
