app.factory("getDataServices", function($http) {

    var getServices = {
        getSkills: function getSkills(cb) {
            var skillsData = [{
                id: 1,
                name: 'Javascript'
            }, {
                id: 2,
                name: 'Java'
            }];
            cb(skillsData);
        },
        getLanguages: function getLanguages(cb) {
            var languagesData = [{
                id: 1,
                name: "TELUGU"
            }, {
                id: 2,
                name: "ENGLISH"
            }, {
                id: 3,
                name: "HINDHI"
            }];
            cb(languagesData);
        },
        getAllUsers: function getAllUsers(cb) {
            var allusersData = [{
                    id: 1,
                    name: "Pavan",
                    email: "bakkupavan@gmail.com",
                    deptname: "UI",
                    skills: 'Javascript, Java',
                    languages: 'Telugu, English'
                }, {
                    id: 2,
                    name: "Sai",
                    email: "sai@gmail.com",
                    deptname: "UI",
                    skills: 'Javascript, Java',
                    languages: 'Telugu, English'
                }, {
                    id: 3,
                    name: "Naresh",
                    email: "naresh@gmail.com",
                    deptname: "UI",
                    skills: 'Javascript, Java',
                    languages: 'Telugu, English'
                }];
            cb(allusersData);

            /*var baseUrl = 'http://localhost:8080/userapp-rest/api';
            var url = baseUrl + '/v1/user/';

            $http.get(url).
            success(function(data, status, headers, config) {
                console.log(data);
                cb(data);
            }).
            error(function(data, status, headers, config) {
                console.log(status)
            });*/
        },
    };

    return {
        getskills: getServices.getSkills,
        getlanguages: getServices.getLanguages,
        getallusers: getServices.getAllUsers,
    };

});
