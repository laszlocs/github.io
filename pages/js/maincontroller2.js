
app.controller("MainController", function($scope){

  $scope.emberek = [
    { id: 0, nev: 'Csókos_Ádám', telefon: '06-30-681-6202', rokon:1 },
    { id: 1, nev: 'Csókos_Lászlóné', telefon: '06-30-477-2912', rokon:1 },
    { id: 2, nev: 'Csókos_László', telefon: '06-30-681-0400', rokon:1 },
    { id: 3, nev: 'Csókos_Dávid', telefon: '06-30-949-0054', rokon:1 },
    { id: 4, nev: 'Visegrádi_', telefon: '06-1-270-6965', rokon:1 },
    { id: 5, nev: 'Bajor_László', telefon: '06-1-252-4582', rokon:0 },
    { id: 6, nev: 'Benedecki_Ica', telefon: '06-30-295-0768', rokon:1 },
    { id: 7, nev: 'Bálint_József', telefon: '06-20-378-2129', rokon:0 },
    { id: 8, nev: 'Kertész_Viktor', telefon: '06-30-373-6422', rokon:0 },
    { id: 9, nev: 'Vízkert_Tibor', telefon: '06-30-379-4677', rokon:0 }
  ];

  $scope.uj_nev = "";
  //$scope.uj_kor = 0;
  $scope.uj_tel = "";
  $scope.uj_rokon = 0;

  $scope.felvetel = function() {
    if ($scope.uj_nev != null && $scope.uj_nev != "") {
      if ($scope.uj_rokon == null || $scope.uj_rokon == "") {
        $scope.uj_rokon=0;
      }
      $scope.emberek.push(
        { id: $scope.emberek.length, nev: $scope.uj_nev, 
        telefon: $scope.uj_tel, rokon: $scope.uj_rokon }
      );
    }
  }
/* $scope.emberek.push(
        { id: $scope.emberek.length, nev: $scope.uj_nev, eletkor: $scope.uj_kor, telefon: $scope.uj_tel, rokon: $scope.uj_rokon }
      );
*/



});

