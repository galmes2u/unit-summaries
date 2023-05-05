const allTableDivs = $(".build-table");

const tableData = {
  windowObj: [
    { subject: "Window Object Basics", units: "01, 02" }
  ],
  docObj: [
    { subject: "Selecting elements on the page", units: "05, 06" },
    { subject: "Getting and Setting Attributes on DOM Elements", units: "05, 06" },
    { subject: "Creating new DOM elements", units: "07, 08" }
  ],
  callbackFns: [
    { subject: "First look at callback functions", units: "09, 10" },
    { subject: "Callback functions w/ the event object", units: "11, 12" }
  ],
  eventListeners: [
    { subject: "Event Listeners", units: "11, 12" }
  ],
  eventBubbling: [
    { subject: "Event Bubbling", units: "17, 18" }
  ],
  localStorage: [
    { subject: "Local Storage", units: "21, 26" }
  ],
  unitTesting: [
    { subject: "Unit Testing", units: "11 through 18" }
  ],
  tdd: [
    { subject: "TDD", units: "19, 20" }
  ],
  promises: [
    { subject: "Promises", units: "21 through 26" }
  ],
  expressSetup: [
    { subject: "Express Setup", units: "01, 02" }
  ],
  routeListeners: [
    { subject: "Route Listeners", units: "01, 02, 03, 04" }
  ],
  reqResponse: [
    { subject: "Request and Response", units: "01 through 08" }
  ],
  routeWildcards: [
    { subject: "Route Wildcards", units: "05, 06" }
  ],
  staticAssets: [
    { subject: "Static Assets Folder", units: "09, 10" }
  ],
  postAndPut: [
    { subject: "POST and PUT requests", units: "13 to 16" }
  ],
  modularRouting: [
    { subject: "Modular Routing", units: "21, 22" }
  ]
}




function buildTable(contentsArr){
  let table = `<table class="table">
  <thead>
    <tr>
      <th>Subject</th>
      <th>Activities</th>
    </tr>
  </thead>
  <tbody>
  `;

  contentsArr.forEach( row => {
    table += `<tr>
      <td>${row.subject}</td>
      <td>${row.units}</td>
    </tr>
  `
  })

  table += `</tbody>
</table>`

  return $(table);
}


$.each(allTableDivs, function(item, elem){
  const div = $(elem)
  const sub = div.attr("data-subject")
  const table = buildTable( tableData[sub] );
  div.append(table)
})
