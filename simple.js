// the same data subset as before - no need to modify it
let campgrounds = [
	{ number: 1, view: 'ocean', partySize: 8, isReserved: false },
	{ number: 5, view: 'ocean', partySize: 4, isReserved: false },
	{ number: 12, view: 'ocean', partySize: 4, isReserved: true },
	{ number: 18, view: 'forest', partySize: 4, isReserved: false },
	{ number: 23, view: 'forest', partySize: 4, isReserved: true },
];

// Prompt: write function findMyCampsites
function findMyCampsites(campgrounds, view, size) {
	const campgroundsNumbersList = [];

	for (let campground of campgrounds) {
		if (
			!campground.isReserved &&
			campground.view === view &&
			campground.partySize >= size
		) {
			campgroundsNumbersList.push(campground.number);
		}
	}
	
	return campgroundsNumbersList;
}

// This is to run the tests. You can ignore it but don't delete it!

//example input/output
console.log(findMyCampsites(campgrounds, 'ocean', 4)); //-> [1, 5]
console.log(findMyCampsites(campgrounds, 'ocean', 8)); //-> [1]
console.log(findMyCampsites(campgrounds, 'forest', 4)); //-> [18]
console.log(findMyCampsites(campgrounds, 'forest', 6)); //-> 'Sorry, no campsites with that view are available to host your party'

require('./index.test.js');
void 0;
