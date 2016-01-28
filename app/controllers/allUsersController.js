app.controller("allUsersController", function($scope, registerService, getDataServices) {

    var self = this;
    self.pageTitle = "Registered Users";

    getDataServices.getallusers(function(resp) {
        $scope.allusersData = resp;

        self.gridOptions = {
            data: "allusersData",
            columnDefs: [{
                field: 'name',
                displayName: 'NAME'
            }, {
                field: 'email',
                displayName: 'EMAIL'
            }, {
                field: 'deptname',
                displayName: 'DEPARTMENT'
            }, {
                field: 'skills',
                displayName: 'SKILLS'
            }, {
                field: 'languages',
                displayName: 'LANGUAGES'
            }]
        };
    });

});
