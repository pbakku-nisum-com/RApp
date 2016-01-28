app.factory('registerService', function($http) {

    return {
        saveUser: function(userData, cb) {
            
            var stringData = JSON.stringify(userData);
            var baseUrl = 'http://localhost:8080/userapp-rest/api';
            var url = baseUrl + '/v1/user/';
            console.log(stringData);
            $http.post(url, stringData)
                .success(function(data, status, headers, config) {
                    cb("success");
                })
                .error(function(data, status, header, config) {

                });

        }
    };

});
