// // get the form
// const filterIssueForm = document.getElementById("filter-issue-form");

// // get the details of the issue in json
// const issueJson = document.getElementById('issue-data').getAttribute('data');

// // parse the data
// let issue = JSON.parse(issueJson);

// // get the element where we display out result of the filter
// let issueList = document.getElementById('issues-list');

// filterIssueForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
    
//     console.log("got called")
//     // create a empty array to store the data
//     let filteredIssue = [];

//     // get elements from form
//     let labelList = filterIssueForm.querySelectorAll("input[type=checkbox]");
//     // filter the elements from the label list
//     let labelElements = [...labelList].filter((Element)=>Element.checked);

//     // here filter the data by his input type and name
//     let authorVal = filterIssueForm.querySelector("input[type=radio][name=author]:checked");

//     // Here we have map the data to get value of the labelElements
//     let [...labelArr] = labelElements.map((Element) => Element.value);

//     // Here we have push the data into our filtered issue array
//     issue.map((el)=>{
//         if(el.author === authorVal){
//             if(filteredIssue.includes(el)){
//                 filteredIssue.push(el);
//             }
//         }
//         // Here we have push the data into our filtered issue array
//         labelArr.map((label)=>{
//             if(el.labels.includes(label)){
//                 if(!filteredIssue.includes(el)){
//                      filteredIssue.push(el);               
//                 }
//             }
//         });
//     });

//     issueList.innerHTML = ' ';

//     // here we show the conatiner
    


// Get the form
// Get the form
const filterIssueForm = document.getElementById("filter-issue-form");

// Get the details of the issue in JSON
const issueJson = document.getElementById('issue-data').getAttribute('data');

// Parse the data
let issues = JSON.parse(issueJson); // Renamed to 'issues' for clarity

// Get the element where we display the result of the filter
let issueList = document.getElementById('issues-list');

filterIssueForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log("Filter submitted");

    // Get checked labels
    let labelArr = Array.from(filterIssueForm.querySelectorAll("input[type=checkbox]:checked")).map(element => element.value);

    // Get selected author
    let authorVal = filterIssueForm.querySelector("input[type=radio][name=author]:checked").value;

    // Filter issues based on author and labels
    let filteredIssue = issues.filter(el => {
        let labelMatch = labelArr.length === 0 || labelArr.some(label => el.labels.includes(label)); // Checks if any selected label matches
        let authorMatch = !authorVal || el.author === authorVal; // Checks if the author matches or if 'None' was selected
        return labelMatch && authorMatch;
    });

    // Clear previous results
    issueList.innerHTML = '';

    // Display the filtered issues
    filteredIssue.forEach((issue)=>{
        let Div = document.createElement('div');
     
        Div.innerHTML = `
        <div class="card w-100" >
      <div class="card-body"  style="margin-top:5px">
        <h4 class="card-title" >Title : ${issue.title} </h4>
        <h5 class="card-title">Author : ${issue.author}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          Description : ${issue.description}
        </h6>
      </div>
    </div>
    `;
    issueList.appendChild(Div);
    })
});
