export const myTheme = {
    light: {
        token: {
            fontFamily: 'IRANSans',
            colorPrimary: '#2E5077',
            borderRadius: 10,

            padding: 10, // not available
            // Alias Token
            colorBgContainer: '#fff',
            colorBgBase: "#ffffff",

            colorText: '#282633',
        },
        components: {

            Card: {
                headerBg: '#2E5077', colorTextHeading: '#ffffff',headerHeight:40
            },
            Table: {
                borderRadius: 20,
                padding: 20,
                colorFillContent: 'green',
                boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
                colorTextHeading: '#4c4c4c',
                colorHighlight: 'blue',
                // colorBgContainer: '#fff',
                colorText: 'gray',
            },
            Menu: {
                // itemSelectedBg:'#2E5077',
                // itemSelectedColor:'#ffffff',
                itemColor: 'rgba(0, 0, 0, 0.88)',
                itemHoverBg:'#fff8e6',
                algorithm: true, // Enable algorithm
            },
            Button: {
                borderRadius:10,
                colorPrimary: '#2E5077',
                algorithm: true, // Enable algorithm
                defaultHoverBorderColor:"unset",
                // defaultHoverColor:"#ffffff",
                // defaultHoverBg:"#52c41a"
            },
            Input: {


                hoverBg: '#f5f7fa',
                activeBg: '#fff',
                lineHeight: 2.7145,
                colorText: '#4c4c4c',
                borderRadius: '10px',
                colorPrimary: '#2E5077',
                algorithm: true, // Enable algorithm
            },

        },
    },
    dark: {
        token: {
            fontFamily: 'IRANSans',
            colorPrimary: '#2E5077',

            padding: '25px', // not available
            // Alias Token
            colorBgContainer: '#1d1b29',
            colorBgBase: "#111d2c",
            colorTextDescription: "white",
            colorBgHeader: "white",
            colorText: '#fff',


        },
        components: {
            Card: {
                headerBg: '#2E5077', colorTextHeading: '#ffffff',headerHeight:40
            },
            Table: {
                borderRadius: 20,
                padding: 20,
                colorFillContent: 'green',
                boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
                colorTextHeading: '#fff',
                colorHighlight: 'blue',
                // colorBgContainer: '#000',
                colorText: 'gray',
            },
            Menu: {
                // fontSize:"14px",
                // color: '#fff',
                // colorPrimary: '#2E5077',
                // algorithm: true, // Enable algorithm
            },
            Button: {
                borderRadius:10,
                colorPrimary: '#2E5077',
                algorithm: true, // Enable algorithm
            },
            Input: {
                lineHeight: 3,
                colorText: '#fff',
                colorTextPlaceholder: 'gray',
                // colorBorder: '#fff',
                borderRadius: '10px',
                colorPrimary: '#eb2f96',
                algorithm: true, // Enable algorithm
            }
        },
    },
}
