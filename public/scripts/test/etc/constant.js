// extract from board.html:

var appPathStart =   "/" + window.location.pathname.split('/')[1];
var appVersion = '1.2.2.0';
var environment = 'development';

// Set browser tab title to reflect board
//TODO put this back in
window.document.title = window.location.pathname.split('/')[2] + ' ' + moment(window.location.pathname.split('/')[3],"YYYYMMDD").format("ddd MM/DD/YY");

// get rid of this once sign off date gets sign off
var signOffTime = moment(window.location.pathname.split('/')[3],"YYYYMMDD").toDate();
signOffTime.setHours(6,00);

// Angular application module
angular.module('OpsBoard')
  .constant('states', {
    equipment : {
      available: 'Available',
      down: 'Down',
      hidden: 'Hidden',
      pendingLoad: 'Pending Load',
      pendingDetach: 'Pending Detach',
      pendingAttach: 'Pending Attach',
      detached: 'Detached',
      onLocation: ['Available', 'Down', 'Pending Load']
    },
    personnel : {
      assigned: 'Assigned',
      available: 'Available',
      detached: 'Detached',
      hidden: 'Hidden',
      partiallyAvailable: 'PartiallyAvailable',
      unavailable: 'Unavailable'
    }
  })
  .constant('groups', {
    equipment : {
      rearLoader: 'Rear Loaders',
      dualBins: 'Dual Bins',
      alleyTruck: 'Alley Trucks',
      hoistFittedChassis: 'Hoist-Fitted Chassis',
      mechanicalBrooms: 'Mechanical Brooms',
      roRo: 'RO-ROs',
      ezPacks: 'E-Z Packs',
      miscellaneous: 'Miscellaneous',
      snow: 'Snow'
    },
    personnel : {
      commissioners: ['COMM','DYCOMM'],
      chiefs : ['GS V', 'GS IV', 'GS III', 'GS II'],
      superintendents : 'GS I',
      supervisors : 'SUP',
      sanitationWorkers : 'SW',
      civilians : 'Civilian'
    }
  })
  .constant('officerMdaCodes',['7','7A'])
  .constant('unsupportedMdaCodes', ['8'])
  .constant('titles', {
    'comm:' : 'COMM',
    'dycomm' : 'DYCOMM',
    'gsI' : 'GS I',
    'gsII' : 'GS II',
    'gsIII' : 'GS III',
    'sup' : 'SUP',
    'sw' : 'SW',
    'civilian' : 'Civilian'
  })
  .constant('titleHierarchy', ['COMM', 'DYCOMM', 'GS V', 'GS IV', 'GS III','GS II', 'GS I', 'SUP', 'SW', 'Civilian'])
  .constant('departmentTypeHierarchy', ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'S11', 'S12', 'S13', 'S14', 'A', 'G', 'B', 'D', 'M'])
  .constant('binStatus', {
    equipment : {
      relay: 'RELAY',
      rollover: 'ROLLOVER'
    }
  })
  .constant('materialGroups', {
    equipment : {
      collection: 'COLLECTION',
      recycling: 'RECYCLING',
      miscellaneous: 'MISCELLANEOUS',
      snow: 'SNOW',
    }
  })
  .constant('detachmentHistory', {
    equipment : {
      'A': 'Accepted',
      'P': 'Initiated Detach',
      'C': 'Canceled'
    }
  })
  .constant('materialSubGroups', {
    equipment : {
      organics: 'ORGANICS',
      mgp: 'MGP',
      paper: 'PAPER',
      recyclingMisc: 'RECYCLING MISC'
    }
  })
  .constant('plowTypes', {
    'NO_PLOW': 'None',
    'REGULAR_PLOW' : 'Regular',
    'MINI_V_PLOW' : 'Mini V',
    'LARGE_V_PLOW' : 'Large V'

  })
  .constant('loads', {'NONE' : 'Not Loaded', 'SALT' : 'Salt', 'SAND' : 'Sand'}  )
  .constant('plowDirections', ['Right','Left','Straight','Straight w/ Wings'])
  .constant('signOffTime', signOffTime)
  .constant('equipmentStatuses', ['Empty', 'Relay', 'Rollover'])
  .constant('user', {"username" : 'william jiang'})
  .constant('urls', {logout: '/logout'})
  .constant('boardtypes', {
    district: 'D',
    boro: 'B',
    broomDepot: 'M',
    lotCleaning: 'L',
    splinter: 'S',
    hybrid: 'H'
  })
  .constant('links', {
    manuals: 'https://citypoint.csc.nycnet/sites/dsny/MANUAL/Shared Documents/Forms/AllItems.aspx?RootFolder=/sites/dsny/MANUAL/Shared Documents/SMART Documents and Training Manuals&FolderCTID=&View={68C0D9C0-F54A-4E82-896D-55027879A570}'
  })
  .constant('itemsPerPage', 5)
  .constant('durations', [{
    duration: 1,
    label: '1/8'
  }, {
    duration: 2,
    label: '1/4'
  }, {
    duration: 3,
    label: '3/8'
  }, {
    duration: 4,
    label: '1/2'
  }, {
    duration: 5,
    label: '5/8'
  }, {
    duration: 6,
    label: '3/4'
  }, {
    duration: 7,
    label: '7/8'
  }]
)
  .constant('serverConfig', {
    templateUrl: '',
    appVersion: appVersion,
    environment: environment
  });

// jQuery creates it's own event object, and it doesn't have a
// dataTransfer property yet. This adds dataTransfer to the event object
// Required for drag and drop.
jQuery.event.props.push('dataTransfer');