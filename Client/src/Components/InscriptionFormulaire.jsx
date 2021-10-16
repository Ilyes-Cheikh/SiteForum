import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import {Button,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import axios from "axios";

import "../Assets/css/InscriptionFormulaire.css";

function InscriptionFormulaire() {
  const baseURL = "http://localhost:4000";

  const [Nom, setNom] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
  const [Birthday, setBirthday] = useState(new Date());

  const [Status, setStatus] = useState('');
  const [Universite, setUniversite] = useState('');
  const [Classe, setClasse] = useState('');
  const [Vaccine, setVaccine] = useState(false);

  const [Response, setResponse] = useState({})

  const handleNomChange = (event) => {
    setNom(event.target.value);
  };
  const handlePrenomChange = (event) => {
    setPrenom(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };
  const handleUniversiteChange = (event) => {
    setUniversite(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    setClasse('')
    setUniversite('')
  };
  const handleClasseChange = (event) => {
    setClasse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      Nom: Nom,
      prenom: Prenom,
      Email: Email,
      Birthday: Birthday,
      Status: Status,
      Universite: Universite || null,
      Classe: Classe || null,
      Vaccine: Vaccine
}
    console.log(user);
    axios
      .post(baseURL, user)
      .then((response) => {
        setResponse(response.data);
      });
  };


  return (
    <div className="Inscr_form">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <p className="h5 text-center mb-4" className='inscri-title'>Inscription</p>
              <div className="grey-text">
                <MDBInput
                  required
                  label="Nom"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value ={Nom}
                  onChange={handleNomChange}

                />
                <MDBInput
                  required
                  label="Prénom"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  iconRegular
                  value ={Prenom}
                  onChange={handlePrenomChange}
                />
                <MDBInput
                  required
                  label="e-mail"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  value ={Email}
                  onChange={handleEmailChange}
                />
                <MDBInput
                  required
                  label="Date de naissance"
                  icon="calendar-alt"
                  group
                  type="date"
                  validate
                  error="wrong"
                  success="right"
                  hint="Placeholder"
                  value ={Birthday}
                  onChange={handleBirthdayChange}
                  onBlur={handleBirthdayChange}
                />

                <FormControl fullWidth >
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Status}
                    label="Status"
                    onChange={handleStatusChange}
                  >
                    <MenuItem value={"Etudiant"}>Etudiant</MenuItem>
                    <MenuItem value={"Diplomé"}>Jeune Diplomé</MenuItem>
                    <MenuItem value={"Employé"}>Employé</MenuItem>
                  </Select>
                </FormControl>
                {Status == "Etudiant" ? (
                  <MDBInput
                    required
                    label="Université"
                    icon="university"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value ={Universite}
                    onChange={handleUniversiteChange}
                  />
                ) : null}

                {Status == "Etudiant" ? (
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label2">
                      Classe
                    </InputLabel>
                    <Select
                      required
                      labelId="demo-simple-select-label2"
                      id="demo-simple-select2"
                      value={Classe}
                      label="Classe"
                      onChange={handleClasseChange}
                    >
                      <MenuItem value={1}>1ere année</MenuItem>
                      <MenuItem value={2}>2ème année</MenuItem>
                      <MenuItem value={3}>3ème année</MenuItem>
                    </Select>
                  </FormControl>
                ) : null}
              </div>

              {Status == "Etudiant" && Classe == 3 ? (
                <MDBInput
                  label="CV"
                  icon="file-alt"
                  group
                  type="file"
                  validate
                  error="wrong"
                  success="right"
                  hint="Placeholder"
                />
              ) : null}

              <div class="custom-control custom-checkbox">
                <input
                  required
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultUnchecked2"
                  onChange={() => setVaccine(!Vaccine)}
                ></input>
                <label class="custom-control-label" for="defaultUnchecked2">
                  Je suis vacciné(e)
                </label>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled = {!(!Vaccine || true)}
                  variant="contained"
                  sx={{
                    backgroundColor: "#2ea3dd",
                  }}
                >
                  Inscrire
                </Button>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default InscriptionFormulaire;
