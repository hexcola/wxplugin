/**
 * Created by gamer on 2015/7/15.
 */

var wxpluginApp = angular.module('wxpluginApp', []);

wxpluginApp.controller('loginController', ['$scope', '$http', function ($scope, $http) {
    $scope.qrcodeUrl='/images/login_replace.png';
    $scope.userAvatar='/images/login_replace.png';


    // go get the qrcode url
    $http.get('/qrcode').success(function (response) {
        // temp data.
        //$scope.uuid = '12345678';
        $scope.uuid = response;
        $scope.qrcodeUrl = 'https://login.weixin.qq.com/qrcode/' + $scope.uuid;

        // keep checking if user was scan and confirmed
        checkIfScanAndConfirmed();
    });

    function checkIfScanAndConfirmed() {
        $http.get('/login/' + $scope.uuid).success(function (response) {
            console.log("Check if player was login : " + response);

            if(typeof(response) == 'string'){
                if(response.indexOf('window.code=408') !=-1){
                    checkIfScanAndConfirmed();
                }else if(response.indexOf('window.code=201') !=-1){
                    //$scope.userAvatar = response.substr(response.indexOf('userAvatar') + 12);
                    $scope.userAvatar = response.substring(response.indexOf('userAvatar') + 14 , response.lastIndexOf("'"));
                    // check if user was confirmed.
                    checkIfScanAndConfirmed();
                }
            } else{
                // here suppose be json file.
                console.log(response);

                $scope.pass_ticket = response.error.pass_ticket[0];
                $scope.skey = response.error.skey[0];
                $scope.wxsid= response.error.wxsid[0];
                $scope.wxuin= response.error.wxuin[0];

                webwxinit();
            }
        });
    };

    function webwxinit(){

        console.log($scope.skey);

        var payload ={
            BaseRequest:{
                DeviceID: 'e965569521998987',
                Sid: $scope.wxsid,
                Skey: $scope.skey,
                Uin: $scope.wxuin
            }
        };
        $http.post('/init/'+ $scope.pass_ticket, payload).success(function (response) {

        });
    };

}]);
