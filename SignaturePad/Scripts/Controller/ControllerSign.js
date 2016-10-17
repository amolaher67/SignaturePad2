angular.module('starter.controllers', [])
app.controller('SignModalCtrl', ['$scope', '$http', 'signService', function ($scope, $http, signService) {

    $scope.sign = {};

    

    var canvas = document.getElementById('signatureCanvas');
    var signaturePad = new SignaturePad(canvas);

    $scope.clearCanvas = function () {
        signaturePad.clear();
        $scope.sign.name = '';
        $('#divShow').hide();
        $('#txtYourName').css({
            "border": "",
        });
        $('#divShow').hide();
    }

    $scope.saveCanvas = function () {

        if ($('#txtYourName').val() == '') {
            $('#txtYourName').focus();
            $('#txtYourName').css({
                "border": "1px solid red",
            });
            return false;
        }

        var sigImg = signaturePad.toDataURL().replace('data:image/png;base64,', '');
        var name = $scope.sign.name;

        var xml = JSON.stringify({ 'name': name, 'imageData': sigImg });

        signService.Add(name, sigImg).success(function (response) {

            $scope.Signatures = sigImg
            $scope.sign = {};

            $('#txtYourName').css({
                "border": "",
            });
            signaturePad.clear();
            
            alert("Image Saved");

        })
        .error(function (response) {

          alert("Error Occurred");

        });
    }

    $scope.showCanvas = function () {
        var sigImg = signaturePad.toDataURL();
        $scope.signature = sigImg;
        $('#divShow').show();
    }

    //$scope.delete = function (id) {
    //    signService.Delete(id).success(function (response) {
    //        signService.get().success(function (data) {
    //            $scope.Signatures = JSON.parse(data.d);
    //            $scope.sign = {};
    //        });
    //    });
    //};

}]);
