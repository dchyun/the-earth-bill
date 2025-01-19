function renderOrganizations(organizations) {
  let orgGrid = document.querySelector('.org-name-grid');

  for (var key in organizations) {
    let orgName = document.createElement('span');
    orgName.classList.add('org-name');
    orgName.innerHTML = key;
    let orgs = orgGrid.childNodes;
    var inserted = false;
    for (var i = 0; i < orgs.length; i++) {
      if (key < orgs[i].innerText) {
        orgGrid.insertBefore(orgName, orgs[i]);
        inserted = true;
      }
    }
    if (!(inserted)) { orgGrid.appendChild(orgName) }
  }
}

function renderCitizens(citizens) {
  let citizenTable = document.querySelector('.citizen-table');

  let winPercentage = .07;
  for (var key in citizens) {
    let dieRoll = Math.random();
    if (dieRoll <= winPercentage) {
      let citizenRow = document.createElement('tr');
      let citizenFName = document.createElement('td');
      citizenFName.innerHTML = citizens[key]["First name."];
      citizenRow.appendChild(citizenFName);
      let citizenLName = document.createElement('td');
      citizenLName.innerHTML = citizens[key]["Last name."];
      citizenRow.appendChild(citizenLName);
      let citizenDistrict = document.createElement('td');
      citizenDistrict.innerHTML = citizens[key]["Congressional District"];
      citizenRow.appendChild(citizenDistrict);
      let citizenOrg = document.createElement('td');
      citizenOrg.innerHTML = citizens[key]["Group affiliation, if any."];
      citizenRow.appendChild(citizenOrg);
      citizenTable.appendChild(citizenRow);
    }
  }
}

let requestURLOrg = './assets/data/organization_supporters.json';
let requestOrg = new XMLHttpRequest();
requestOrg.open('GET', requestURLOrg);
requestOrg.responseType = 'json';
requestOrg.send();
requestOrg.onload = function() {
  let data = requestOrg.response[0]
  renderOrganizations(data.organizations);
}

let requestURLCit = './assets/data/citizen_supporters.json';
let requestCit = new XMLHttpRequest();
requestCit.open('GET', requestURLCit);
requestCit.responseType = 'json';
requestCit.send();
requestCit.onload = function() {
  let data = requestCit.response
  renderCitizens(data);
}
