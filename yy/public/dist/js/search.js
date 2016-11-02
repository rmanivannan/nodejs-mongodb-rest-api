angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchFish   = '';     // set the default search/filter term
  // create the list of client project rolls 
  $scope.sushi = [
	  { cuid: '1001', fname: 'Samaira', lname: 'Sahni', orderno: 'MU0DF210', location: 'C.R. Park', city: 'New Delhi', sdate: '19 Sep 2016', edate: 'TBD', installer: '--not assigned--', status: 'A: Order received', },
	  { cuid: '0001', fname: 'Rajesh', lname: 'Chowdhary', orderno: 'MU0DF230', location: 'Najafgarh', city: 'New Delhi', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'A: Order allocated', }, 
	  { cuid: '0002', fname: 'Sundaram', lname: 'Achyuta', orderno: 'MU0DF231', location: 'Rohini', city: 'New Delhi', sdate: '04 Sep 2016', edate: '23 Sep 2016', installer: 'JOIC Power', status: 'B: Contract sent', }, 	 
	  { cuid: '0003', fname: 'Ganesh', lname: 'Sribal Gopala', orderno: 'MU0DF232', location: 'Gk1', city: 'New Delhi', sdate: '03 Oct 2016', edate: '23 Sep 2016', installer: '--not assigned--', status: 'C: Contract approved', },	 
	  { cuid: '0004', fname: 'Hari', lname: 'Rajahansa', orderno: 'MU0DF233', location: 'Patparganj', city: 'New Delhi', sdate: '23 Sep 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'D: Payment made', },	 
	  { cuid: '0005', fname: 'Saumitra', lname: 'Gore', orderno: 'MU0DF234', location: 'Sushant Lok', city: 'Gurgon', sdate: '03 Dec 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'E: Payment complete', },
	  { cuid: '0006', fname: 'Sunita', lname: 'Chaturvedi', orderno: 'MU0DF235', location: 'New Friends Colony', city: 'New Delhi', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'F: Design uploaded', },
	  { cuid: '0007', fname: 'Mohit', lname: 'Purohit', orderno: 'MU0DF236', location: 'Emaar Palm Springs', city: 'Gurgaon', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'ABC Technologies', status: 'G: Design approved', },	  	 
	  { cuid: '0008', fname: 'Kamalmitra', lname: 'Sanjivi', orderno: 'MU0DF237', location: 'Rohini', city: 'New Delhi', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'H: Installation in progress', },
	  { cuid: '0009', fname: 'Janardana', lname: 'Amburle', orderno: 'MU0DF238', location: 'Teg Bahaddur Nagar', city: 'New Delhi', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'I: Installation approved', },	  
	  { cuid: '0010', fname: 'Mia', lname: 'Ulani', orderno: 'MU0DF239', location: 'Lajpat Nagar', city: 'New Delhi', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'Santosh Traders', status: 'J: Order closed', }, 
	  { cuid: '0011', fname: 'Francis', lname: "D'mello", orderno: 'MU0DF240', location: 'Srinivaspuri', city: 'New Delhi', sdate: '03 Sep 2016', edate: '23 Sep 2016', installer: 'Orion Technologies', status: 'K: Order cancelled', }	 	  	  	  	  	  	  	   
  ];
  
});

			        