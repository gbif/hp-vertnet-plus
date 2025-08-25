var siteTheme = gbifReactComponents.themeBuilder.extend({
    baseTheme: 'light', extendWith: {
        primary: themeStyle.colors.primary
    }
});

const vertnetNetworkKey = '99d66b6c-9087-452f-a9d4-f15f2c2d0e7e';

var siteConfig = {
    "version": 3,
    "pages": [
        {
            "id": "occurrenceSearch"
        },
        {
            "id": "datasetSearch"
        },
        {
            "id": "datasetKey"
        },
        {
            "id": "literatureSearch"
        },
        {
            "id": "publisherSearch"
        },
        {
            "id": "publisherKey"
        },
        // {
        //     "id": "institutionSearch"
        // },
        // {
        //     "id": "institutionKey"
        // },
        // {
        //     "id": "collectionSearch"
        // },
        // {
        //     "id": "collectionKey"
        // },
    ],
    "disableInlineTableFilterButtons": false,
    "availableCatalogues": [
        "OCCURRENCE",
        "DATASET",
        "LITERATURE",
        "PUBLISHER",
        // "INSTITUTION",
        // "COLLECTION",
    ],
    "dataHeader": {
        "enableApiPopup": false,
        "enableInfoPopup": false
    },
    "theme": {
        "primary": themeStyle.colors.primary,
        "borderRadius": 3,
        "stickyOffset": "0px"
    },
    "maps": {
        locale: 'en',
        mapStyles: {
            defaultProjection: 'MERCATOR',
            defaultMapStyle: 'BRIGHT',
            options: {
                // just remove individual lines to remove that projection option
                ARCTIC: ['NATURAL', 'BRIGHT'],
                PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
                MERCATOR: ['NATURAL', 'BRIGHT', 'DARK'],
                ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK'],
            },
        },
    },
    "languages": [
        {
            "code": "en",
            "localeCode": "en",
            "label": "English",
            "default": true,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        },
        {
            "code": "es",
            "localeCode": "es",
            "label": "Español",
            "default": false,
            "textDirection": "ltr",
            "cmsLocale": "es",
            "vocabularyLocale": "es-ES",
            "iso3LetterCode": "spa",
            "gbifOrgLocalePrefix": "/es",
            "grSciCollLocalePrefix": "/es",
            "mapTileLocale": "es"
        },
        {
            "code": "fr",
            "localeCode": "en",
            "label": "English",
            "default": false,
            "textDirection": "ltr",
            "iso3LetterCode": "eng",
            "cmsLocale": "en-GB",
            "gbifOrgLocalePrefix": "",
            "mapTileLocale": "en"
        }
    ],
    "messages": {},
    "occurrenceSearch": {
        mapSettings: {
            userLocationEnabled: false,// show an option on the occurrence map to zoom to the users location
        },
        "scope": {
            "type": "and",
            "predicates": [
                {
                    "type": "equals",
                    "key": "networkKey",
                    "value": vertnetNetworkKey
                },
                {
                    "type": "equals",
                    "key": "taxonKey",
                    "value": "44"
                }
            ]
        },
        "highlightedFilters": [
            "basisOfRecord",
            "taxonKey",
            "gadmGid",
            "institutionCode",
            "year"
        ],
        "excludedFilters": [
            "protocol",
            "networkKey",
        ],
        "defaultEnabledTableColumns": [
            "features",
            "institutionKey",
            "collectionKey",
            "catalogNumber",
            "country",
            "year",
            "recordedBy",
            "identifiedBy"
        ],
        defaultTab: 'table',
        "tabs": [
            "table",
            "gallery",
            "map",
            "datasets",
            "clusters",
            "dashboard",
            "download"
        ],
    },
    "collectionSearch": {
        excludedFilters: ['country', 'active'],
        // I do not believe we can set a reasonable scope with the current APIs
        scope: {
            displayOnNHCPortal: true,
            active: true
        },
    },
    // I do not believe we can set a reasonable scope with the current APIs
    "institutionSearch": {
        scope: {
            displayOnNHCPortal: true,
            active: true
        }
    },
    "datasetSearch": {
        excludedFilters: ['networkKey'],
        highlightedFilters: ['q', 'type', 'publishingOrg', 'license'],
        // defaultTableColumns: ['title', 'description', 'publisher', 'type', 'occurrenceCount', 'literatureCount'],
        scope: {
            networkKey: [vertnetNetworkKey]
        },
    },
    "publisherSearch": {
        // I do not believe we can set a reasonable scope with the current APIs
        scope: {
            networkKey: vertnetNetworkKey
        }
    },
    "literatureSearch": {
        "scope": {
            "type": "equals",
            "key": "gbifNetworkKey",
            "value": vertnetNetworkKey
        },
        highlightedFilters: ['q', 'gbifTaxonKey', 'year']
    }
};
