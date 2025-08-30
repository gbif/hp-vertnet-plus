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
            "id": "occurrenceKey"
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
        // Available Filters as per 28 august 2025: [
        //     "q",
        //     "country",
        //     "publishingCountry",
        //     "institutionKey",
        //     "collectionKey",
        //     "datasetKey",
        //     "taxonKey",
        //     "publishingOrg",
        //     "hostingOrganizationKey",
        //     "networkKey",
        //     "gadmGid",
        //     "institutionCode",
        //     "collectionCode",
        //     "recordNumber",
        //     "establishmentMeans",
        //     "sex",
        //     "lifeStage",
        //     "license",
        //     "basisOfRecord",
        //     "mediaType",
        //     "month",
        //     "continent",
        //     "protocol",
        //     "dwcaExtension",
        //     "iucnRedListCategory",
        //     "typeStatus",
        //     "issue",
        //     "taxonomicIssue",
        //     "occurrenceStatus",
        //     "projectId",
        //     "recordedById",
        //     "identifiedById",
        //     "occurrenceId",
        //     "organismId",
        //     "higherGeography",
        //     "eventId",
        //     "fieldNumber",
        //     "isInCluster",
        //     "isSequenced",
        //     "year",
        //     "coordinateUncertaintyInMeters",
        //     "depth",
        //     "organismQuantity",
        //     "relativeOrganismQuantity",
        //     "sampleSizeValue",
        //     "elevation",
        //     "catalogNumber",
        //     "preparations",
        //     "biostratigraphy",
        //     "lithostratigraphy",
        //     "geologicalTime",
        //     "sampleSizeUnit",
        //     "locality",
        //     "waterBody",
        //     "stateProvince",
        //     "datasetId",
        //     "samplingProtocol",
        //     "verbatimScientificName",
        //     "recordedBy",
        //     "identifiedBy",
        //     "geometry",
        //     "eventDate",
        //     "taxonId",
        //     "islandGroup",
        //     "island",
        //     "programme",
        //     "datasetName",
        //     "gbifRegion",
        //     "gbifId",
        //     "endDayOfYear",
        //     "startDayOfYear",
        //     "organismQuantityType",
        //     "pathway",
        //     "previousIdentifications",
        //     "associatedSequences",
        //     "degreeOfEstablishment",
        //     "lastInterpreted",
        //     "publishedByGbifRegion",
        //     "georeferencedBy",
        //     "repatriated",
        //     "distanceFromCentroidInMeters"
        // ],
        "highlightedFilters": [
            "basisOfRecord",
            "scientificName",
            "institutionCode",
            "collectionCode",
            "stateProvince",
            "country"
            "eventDate"
        ],
        "excludedFilters": [
            "protocol",
            "networkKey",
        ],
        /*
        available column options as per 28 august 2025
        the latest is available by going to /occurrence/search open developer tools and writting "gbif".
        [
            "scientificName",
            "commonName",
            "features",
            "media",
            "country",
            "coordinates",
            "year",
            "eventDate",
            "basisOfRecord",
            "datasetKey",
            "publishingOrg",
            "catalogNumber",
            "recordedBy",
            "identifiedBy",
            "recordNumber",
            "typeStatus",
            "preparations",
            "collectionCode",
            "specimenTriplet",
            "institutionCode",
            "institutionKey",
            "collectionKey",
            "locality",
            "fieldNumber",
            "individualCount",
            "higherGeography",
            "stateProvince",
            "establishmentMeans",
            "sex",
            "lifeStage",
            "iucnRedListCategory"
        ]
        */
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
