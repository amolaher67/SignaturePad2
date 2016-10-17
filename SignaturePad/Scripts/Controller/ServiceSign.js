
app.factory('signService', ['$http', function ($http) {
    return {

        

        Add: function (name, imagedata) {
            return $http({
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                url: 'http://192.168.0.124/API/api/UploadFile/AddNewSignature',
                data: { name: name, imageData: imagedata }
            });
        },

        

    };
}]);

