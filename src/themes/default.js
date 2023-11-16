const defaultTheme = {
    components: {
        MuiListItem: {
        defaultProps: { disablePadding: true }
        }
    },
    spacing: (value) => `${value / 2}rem`,
    typography: {
        htmlFontSize: 16,
        fontSize: 14,
        fontFamily: 'Calibri, Helvetica, Verdana, Trebuchet MS, Lato, sans-serif'
    }
}

export default defaultTheme;
