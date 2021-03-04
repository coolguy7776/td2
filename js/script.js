/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
	const startIndex = (page * 10) - 10; 
	const endIndex = (page * 10) - 1;
	const studentList = document.querySelector("ul.student-list");
	studentList.innerHTML = "";



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
	// Finding number of pages by dividing total items by items per page
	const numOfPages = Math.ceil(list.length / 10);
	const linkList = document.querySelector("ul.link-list");
	linkList.innerHTML = "";

	// looping through the number of pages to generate a button for each number
	for(var i = 1; i <= numOfPages; i++) {
		const button = 
		`<li>
		  <button type="button">${i}</button>
		</li>`;

		linkList.insertAdjacentHTML('beforeend', button);
	}

	// ensuring the first button is active since you start on the first page
	document.querySelector("button:first-child").className = "active";
	
	// event on clicking another page button which will deselect the previously active one and make the selected one active instead, as well as show the page that was clicked on
	linkList.addEventListener("click", function(evt) {
		if (evt.target.tagName === "BUTTON") {
			document.querySelector(".active:first-child").className = "";
			evt.target.className = "active";
			showPage(list, evt.target.textContent);
		}
	});
}


// Call functions
showPage(data, 1);
addPagination(data);