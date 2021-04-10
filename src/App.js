import React, { useState, useEffect } from 'react';
import Wrapper from './components/wrapper/wrapper';
import Title from './components/title/title';
import EmployeeTable from './components/table/table';
import SortBySelect from './components/sortBy/sortBy';
import FilterBySelect from './components/filterBy/filterBy';
import API from './utils/API'

function App() {

  const [employees, setEmployees] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  useEffect(async () => {
    await getEmployees();
}, [])

  const sortByFirstName = async () => {
    const sortedFirstName = employees.sort((a, b) => a.name.first - b.name.first);
    console.log(sortedFirstName)
  }

  const sortByLastName = () => {
    const sortedLastName = employees.sort((a, b) => a.name.last - b.name.last);
    console.log(sortedLastName)
  }

  const filterByAge = (age) => {
    let filteredList = []
    switch(age) {
      case 15: filteredList = originalList.filter(e => e.dob.age >= 0 && e.dob.age <= 25)
      setEmployees(filteredList);
      console.log(employees)
      break;
      case 25: filteredList = originalList.filter(e => e.dob.age >= 26 && e.dob.age <= 35)
      setEmployees(filteredList);
      console.log(employees)
      break;
      case 36: filteredList = originalList.filter(e => e.dob.age >= 36)
      setEmployees(filteredList);
      break;
      case 36: filteredList = originalList
      setEmployees(filteredList);
      break;
      default: filteredList = originalList
      setEmployees(filteredList);
    }
  }

  const getEmployees = () => {
    API.search()
        .then(res => {
          console.log(res.data.results)
          setEmployees(res.data.results);
          setOriginalList(res.data.results);
        })
}

  return (
    <Wrapper>
      <Title />
      <FilterBySelect filterBy={filterByAge} />
      <SortBySelect category={"First Name Sort"} />
      <SortBySelect category={"Last Name Sort"} />
      <EmployeeTable employees={employees}/>
    </Wrapper>
  );
}

export default App;
