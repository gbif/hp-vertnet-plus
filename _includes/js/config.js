var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    }
  },
  occurrence: {
    rootPredicate: {
      "type": "and", "predicates": [
        { "type": "equals", "key": "networkKey", "value": "99d66b6c-9087-452f-a9d4-f15f2c2d0e7e" },
        { "type": "equals", "key": "taxonKey", "value": "44" }
      ]
    },
    highlightedFilters: ['basisOfRecord', 'taxonKey', 'gadmGid', 'institutionCode', 'year'],
    excludedFilters: ['protocol']
  }
};
