var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { "type": "and", "predicates": [
     { "type": "equals", "key": "networkKey", "value": "99d66b6c-9087-452f-a9d4-f15f2c2d0e7e"},
     { "type": "equals", "key": "taxonKey", "value": "44"}
  ]}
};
