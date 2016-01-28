app.controller("registerController", function($scope, registerService, getDataServices) {
    var self = this;
    $scope.user = {};
    self.pageTitle = "Register Here";
    $scope.selectedSkills = [];

    getDataServices.getskills(function(resp){
        $scope.skillset = resp;
    });

    getDataServices.getlanguages(function(resp){
        $scope.languages = resp;
    });  

    $scope.getSelectedFromObject = function(obj) {
        if (obj) {
            var keys = Object.keys(obj);
            var filtered = keys.filter(function(key) {
                return obj[key];
            });
            return filtered;
        } else {
            return "";
        }
    }

    $scope.setInterestLang = function(selectedLang) {
        $scope.selelangs = [];
        for (var i = 0; i < selectedLang.length; i++) {
            $scope.selelangs.push(selectedLang[i].name.toLowerCase());
        }
    }

    $scope.saveUser = function() {

        if ($scope.registrationForm.$valid) {
            console.log(JSON.stringify($scope.user));

            var strSkills = $scope.getSelectedFromObject($scope.selectedSkills).toString();
            console.log("Skills", strSkills);

            var strLanguages = $scope.selelangs.toString();
            console.log("Languages", strLanguages);

            $scope.user.skills = strSkills;
            $scope.user.languages = strLanguages;

            // POST call
            registerService.saveUser($scope.user, function(resp){
                console.log(resp);
            });
        }

    }

    $scope.resetForm = function() {
        $scope.user = {};
        $scope.registrationForm.$setPristine();
    }

});
