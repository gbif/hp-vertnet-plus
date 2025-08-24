var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }});

var siteConfig = {
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey', 'datasetKey', 'datasetSearch', 'literature'], // what widgets do you include on your site. If not included we will link to gbif.org (for showing individual datasets for example)
    alwaysUseHrefs: true, // if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
  },
  availableCatalogues: ['INSTITUTION', 'COLLECTION', 'OCCURRENCE', 'DATASET', 'LITERATURE'],
  
  occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
      // excludedFilters: ['occurrenceStatus', 'networkKey', 'hostingOrganizationKey', 'protocol', 'publishingCountryCode', 'institutionCode', 'collectionCode'],
    highlightedFilters: ['taxonKey', 'verbatimScientificName', 'institutionKey', 'collectionKey', 'catalogNumber', 'recordedBy', 'identifiedBy'],
    availableTableColumns: ['features', 'institutionKey', 'collectionKey', 'catalogNumber', 'country', 'year', 'recordedBy', 'identifiedBy'], 
    mapSettings: {
      lat: 60.0344351910359,
      lng: -111.28467879517733,
      zoom: 0.9115440763665068
     },
    
    rootPredicate: {
      "type": "and", "predicates": [
        { "type": "equals", "key": "networkKey", "value": "99d66b6c-9087-452f-a9d4-f15f2c2d0e7e" },
        { "type": "equals", "key": "taxonKey", "value": "44" }
      ]
    },
    highlightedFilters: ['basisOfRecord', 'taxonKey', 'gadmGid', 'institutionCode', 'year'],
    excludedFilters: ['protocol']
  }
},

     occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS', "CLUSTERS", "DASHBOARD"] // what tabs should be shown
  },
  //routes: {
    //occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      //route: '/data'
    //},

  collection: {
    // filters on the grscicoll institution v1 API https://www.gbif.org/developer/summary
    // https://hp-theme.gbif-staging.org/data-exploration-config
    rootFilter: {
      predicate: {type: 'equals', key: 'networkKey', value: '99d66b6c-9087-452f-a9d4-f15f2c2d0e7e'},
      { "type": "equals", "key": "taxonKey", "value": "44" }
      displayOnNHCPortal: true,
      active: true
    },
    //excludedFilters: ['countrySingleGrSciColl'],// no reason to show a filter on country, when there is only one
  },

  institution: {
    rootFilter: {
      {type: 'equals', key: 'networkKey', value: '99d66b6c-9087-452f-a9d4-f15f2c2d0e7e'},
      { "type": "equals", "key": "taxonKey", "value": "44" }
      displayOnNHCPortal: true,
      active: true
    },
    //excludedFilters: ['countrySingleGrSciColl'],// no reason to show a filter on country, when there is only one
    mapSettings: {
      enabled: true, // show a map on institution search?
      lat: 60.0344351910359,
      lng: -111.28467879517733,
      zoom: 0.9115440763665068
    },
  },

  dataset: {
    rootFilter: {
      {type: 'equals', key: 'networkKey', value: '99d66b6c-9087-452f-a9d4-f15f2c2d0e7e'},
      { "type": "equals", "key": "taxonKey", "value": "44" }
    },
    highlightedFilters: ['q', 'anyPublisherKey', 'datasetType', 'license'],
    excludedFilters: ['publishingCountryCode'],
  },

  literature: {
    rootFilter: {
      {type: 'equals', key: 'networkKey', value: '99d66b6c-9087-452f-a9d4-f15f2c2d0e7e'},
      { "type": "equals", "key": "taxonKey", "value": "44" }
    },
    highlightedFilters: ['q', 'scientificName', 'year']
  },
};

//if (pageLang === 'es')  {siteConfig.routes.occurrenceSearch.route = '/datos';}
