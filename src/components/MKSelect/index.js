import React, { useState, useEffect } from "react";
import axios from "axios";

function MKSelect() {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [towns, setTowns] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTown, setSelectedTown] = useState("");

  useEffect(() => {
    async function fetchProvinces() {
      const response = await axios.get("http://test1");
      setProvinces(response.data);
    }
    fetchProvinces();
  }, []);

  useEffect(() => {
    async function fetchCities() {
      const response = await axios.get(`http://test2?province=${selectedProvince}`);
      setCities(response.data);
    }
    if (selectedProvince) {
      fetchCities();
    }
  }, [selectedProvince]);

  useEffect(() => {
    async function fetchTowns() {
      const response = await axios.get(`http://test3?city=${selectedCity}`);
      setTowns(response.data);
    }
    if (selectedCity) {
      fetchTowns();
    }
  }, [selectedCity]);

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity("");
    setSelectedTown("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedTown("");
  };

  const handleTownChange = (e) => {
    setSelectedTown(e.target.value);
  };

  return (
    <div>
      <select value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">시/도 선택</option>
        {provinces.map((province) => (
          <option key={province.id} value={province.id}>
            {province.name}
          </option>
        ))}
      </select>
      <select value={selectedCity} onChange={handleCityChange} disabled={!selectedProvince}>
        <option value="">시/군/구 선택</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <select value={selectedTown} onChange={handleTownChange} disabled={!selectedCity}>
        <option value="">읍/면/동 선택</option>
        {towns.map((town) => (
          <option key={town.id} value={town.id}>
            {town.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MKSelect;
