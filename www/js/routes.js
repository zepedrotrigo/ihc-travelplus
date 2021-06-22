angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.book'
      2) Using $state.go programatically:
        $state.go('tabsController.book');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page2
      /page1/tab3/page2
      /page1/tab4/page2
  */
  .state('tabsController.book', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/book.html',
        controller: 'bookCtrl'
      },
      'tab3': {
        templateUrl: 'templates/book.html',
        controller: 'bookCtrl'
      },
      'tab4': {
        templateUrl: 'templates/book.html',
        controller: 'bookCtrl'
      }
    }
  })

  .state('tabsController.searchAndExplore', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/searchAndExplore.html',
        controller: 'searchAndExploreCtrl'
      }
    }
  })

  .state('tabsController.myFlights', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/myFlights.html',
        controller: 'myFlightsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.profile', {
    url: '/page5',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('searchFlight', {
    url: '/page6',
    templateUrl: 'templates/searchFlight.html',
    controller: 'searchFlightCtrl'
  })

  .state('tabsController.favorites', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.alterarPalavraPasse', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/alterarPalavraPasse.html',
        controller: 'alterarPalavraPasseCtrl'
      }
    }
  })

  .state('tabsController.criarConta', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/criarConta.html',
        controller: 'criarContaCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.pagamento', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/pagamento.html',
        controller: 'pagamentoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/page2')


});