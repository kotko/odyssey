/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type { ThemeOptions } from "@mui/material";
//import radioClasses from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { tableBodyClasses } from "@mui/material/TableBody";
import { tableCellClasses } from "@mui/material/TableCell";
import { tableHeadClasses } from "@mui/material/TableHead";
import { tableRowClasses } from "@mui/material/TableRow";
import { tableSortLabelClasses } from "@mui/material/TableSortLabel";
import {
  AlertTriangleFilledIcon,
  ArrowDownIcon,
  CheckCircleFilledIcon,
  InformationCircleFilledIcon,
} from "../../components/Icon";

export const components: ThemeOptions["components"] = {
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        error: <AlertTriangleFilledIcon />,
        info: <InformationCircleFilledIcon />,
        success: <CheckCircleFilledIcon />,
        warning: <AlertTriangleFilledIcon />,
      },
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        padding: theme.spacing(4),
        gap: theme.spacing(4),
        color: theme.palette.text.primary,
        ...(ownerState.severity && {
          backgroundColor: theme.palette[ownerState.severity].lighter,
          borderColor: theme.palette[ownerState.severity].light,
        }),
        ...(ownerState.variant === "banner" && {
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0,
        }),
        ...(ownerState.variant === "infobox" && {
          borderStyle: "solid",
          borderWidth: 1,
          "&:not(:last-child)": {
            marginBottom: theme.spacing(4),
          },
        }),
        ...(ownerState.variant === "toast" && {
          maxWidth: theme.mixins.maxWidth,
          borderStyle: "solid",
          borderWidth: 1,
          position: "relative",
          alignItems: "start",
        }),
      }),
      action: ({ ownerState, theme }) => ({
        ...(ownerState.variant === "banner" && {
          padding: 0,
          marginRight: 0,
          top: "50%",
          right: theme.spacing(4),
          position: "absolute",
          transform: "translateY(-50%)",
        }),
        ...(ownerState.variant === "toast" && {
          position: "absolute",
          top: `calc(${theme.spacing(4)} - ${theme.spacing(1)} + ${
            theme.mixins.borderWidth
          })`,
          right: `calc(${theme.spacing(4)} - ${theme.spacing(1)} + ${
            theme.mixins.borderWidth
          })`,
          padding: 0,
          marginLeft: 0,
          marginRight: 0,
        }),
      }),
      icon: ({ ownerState, theme }) => ({
        marginRight: 0,
        padding: 0,
        fontSize: "1.429rem",
        opacity: 1,
        ...(ownerState.severity && {
          color: theme.palette[ownerState.severity].main,
        }),
        ...(ownerState.severity === "warning" && {
          color: theme.palette[ownerState.severity].dark,
        }),
      }),
      message: ({ ownerState, theme }) => ({
        padding: 0,
        lineHeight: theme.typography.body1.lineHeight,
        overflow: "visible",
        ...(ownerState.variant === "banner" && {
          display: "flex",
          justifyContent: "space-between",
          gap: theme.spacing(4),
        }),
        ...(ownerState.variant === "toast" && {
          flexGrow: 1,
        }),
      }),
    },
  },
  MuiAlertTitle: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginTop: 0,
        marginBottom: theme.spacing(1),
        lineHeight: theme.typography.h6.lineHeight,
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.fontWeightBold,
      }),
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "primary" },
        style: ({ theme }) => ({
          fontWeight: 600,
          color: theme.palette.common.white,
          borderColor: "transparent",
          backgroundColor: theme.palette.primary.main,

          "&:hover, &:focus-visible": {
            backgroundColor: theme.palette.primary.dark,
          },

          "&:focus-visible": {
            outlineColor: theme.palette.primary.main,
          },

          "&:active": {
            backgroundColor: theme.palette.primary.main,
          },

          "&:disabled": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.light,
          },
        }),
      },
      {
        props: { variant: "secondary" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.grey[50],
          borderColor: theme.palette.grey[200],
          color: theme.palette.text.primary,
          "&:hover, &:focus-visible": {
            backgroundColor: theme.palette.primary.lighter,
            borderColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
          },

          "&:focus-visible": {
            outlineColor: theme.palette.primary.main,
          },

          "&:active": {
            borderColor: theme.palette.primary.main,
          },

          "&:disabled": {
            borderColor: theme.palette.grey[100],
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.grey[500],
          },
        }),
      },
      {
        props: { variant: "danger" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.error.main,
          color: theme.palette.common.white,
          borderColor: "transparent",

          "&:hover": {
            backgroundColor: theme.palette.error.dark,
          },

          "&:focus-visible": {
            outlineColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.dark,
          },

          "&:active": {
            backgroundColor: theme.palette.error.main,
          },

          "&:disabled": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.error.light,
          },
        }),
      },
      {
        props: { variant: "floating" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          color: theme.palette.text.primary,
          borderColor: "transparent",

          "&:hover, &:focus-visible": {
            backgroundColor: "rgba(29, 29, 33, 0.1)",
            borderColor: "transparent",
          },
          "&:focus-visible": {
            outlineColor: theme.palette.primary.main,
          },
          "&:active": {
            backgroundColor: "rgba(29, 29, 33, 0.2)",
            borderColor: "transparent",
          },
          "&:disabled": {
            backgroundColor: "rgba(235, 235, 237, 0.6)",
            color: theme.palette.text.secondary,
            borderColor: "transparent",
          },
        }),
      },
      {
        props: { size: "s" },
        style: ({ theme }) => ({
          paddingBlock: `calc(${theme.spacing(2)} - 1px)`,
          paddingInline: `calc(${theme.spacing(3)} - 1px)`,
          fontSize: "1rem",
        }),
      },
      {
        props: { size: "l" },
        style: ({ theme }) => ({
          paddingBlock: `calc(${theme.spacing(4)} - 1px)`,
          paddingInline: `calc(${theme.spacing(4)} - 1px)`,
        }),
      },
      {
        props: { fullWidth: true },
        style: ({ theme }) => ({
          display: "block",
          width: "100%",
          marginBlock: "0",
          marginInline: "0",

          "&:not(:last-child)": {
            marginBlockEnd: theme.spacing(4),
          },
        }),
      },
      {
        // icon only
        props: { children: "" },
        style: {
          minWidth: "auto",

          ".MuiButton-startIcon": {
            margin: "0",
          },
        },
      },
    ],
    styleOverrides: {
      root: ({ theme }) => ({
        fontWeight: 600,
        minWidth: "unset",
        padding: `calc(${theme.spacing(3)} - 1px) ${theme.spacing(3)}`,
        display: "inline-block",
        position: "relative",
        marginBlock: "0",
        marginInline: "0",
        transitionProperty:
          "color, background-color, border-color, outline-offset, outline-color",
        transitionDuration: "100ms",
        transitionTimingFunction: "linear",
        borderWidth: theme.mixins.borderWidth,
        borderStyle: theme.mixins.borderStyle,
        outlineColor: "transparent",
        outlineOffset: "0",
        fontSize: theme.typography.body1.fontSize,
        lineHeight: "1.14285714",
        whiteSpace: "nowrap",

        ".MuiButton-root + &": {
          marginInlineStart: theme.spacing(2),
        },

        "&:focus-visible": {
          outlineOffset: "2px",
          outlineStyle: "solid",
          outlineWidth: "2px",
        },

        "&:disabled": {
          cursor: "not-allowed",
          pointerEvents: "inherit", // in order to have cursor: not-allowed, must change pointer-events from "none"
        },

        ".MuiButton-startIcon > *:nth-of-type(1)": {
          fontSize: "inherit",
        },
      }),
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      boxSizing: "border-box",
      fontFeatureSettings: "'lnum','pnum'",
      fontVariant: "normal",
    },
  },
  MuiCheckbox: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "4px",
        "&:hover": {
          backgroundColor: "transparent",
        },
        padding: 0,
        ".Mui-error > &": {
          color: theme.palette.error.main,
          "&:hover": {
            color: theme.palette.error.dark,
          },
        },
        ".Mui-error > &.Mui-checked": {
          "&:hover": {
            color: theme.palette.error.dark,
          },
        },
        "&.Mui-focusVisible": {
          outlineColor: theme.palette.primary.main,
          outlineOffset: 0,
          outlineStyle: "solid",
          outlineWidth: "2px",
        },
      }),
    },
  },
  MuiCircularProgress: {
    defaultProps: {
      // TODO: defaultProps cannot take a theme object; needs workaround
      size: "1.14285714rem",
      thickness: 8,
      color: "primary",
      disableShrink: false,
      variant: "indeterminate",
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...(ownerState.color !== "inherit" && {
          color: theme.palette.primary.dark,
        }),
      }),
      circle: ({ ownerState }) => ({
        ...(ownerState.variant === "indeterminate" && {
          strokeDasharray: "160%, 360%",
        }),
      }),
    },
  },
  MuiFormControl: {
    defaultProps: {
      margin: "normal",
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        width: "100%",
        maxWidth: "32rem",
        ...(ownerState.margin === "normal" && {
          marginTop: 0,
          marginBottom: theme.spacing(5),
          "&:last-child": {
            marginBottom: 0,
          },
        }),
        ...(ownerState.margin === "dense" && {
          marginTop: 0,
          marginBottom: theme.spacing(5),
          "&:last-child": {
            marginBottom: 0,
          },
        }),
        ...(ownerState.fullWidth && {
          maxWidth: "100%",
        }),
      }),
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        gap: theme.spacing(2),
        marginLeft: 0,
        marginRight: 0, // used for row presentation of radio/checkbox
        ...(ownerState.labelPlacement === "start" && {
          marginLeft: 0, // used for row presentation of radio/checkbox
          marginRight: 0,
        }),
        ...(ownerState.labelPlacement === "top" && {
          marginLeft: 0,
        }),
        ...(ownerState.labelPlacement === "bottom" && {
          marginLeft: 0,
        }),
        "&:not(:last-child)": {
          marginBottom: theme.spacing(2),
        },
        "&.Mui-disabled": {
          pointerEvents: "none",
        },
        //[`&:hover ${radioClasses.root}:not(${radioClasses.checked})`]: {
        //color: theme.palette.text.primary,
        //},
        "&:hover .MuiRadio-root, &:hover .MuiCheckbox-root": {
          color: theme.palette.text.primary,
        },
        "&:hover .MuiRadio-root.Mui-checked, &:hover .MuiCheckbox-root.Mui-checked":
          {
            color: theme.palette.primary.dark,
          },
        "&.Mui-error:hover .MuiRadio-root, &.Mui-error:hover .MuiCheckbox-root":
          {
            color: theme.palette.error.dark,
          },
        "&.Mui-error:hover .MuiRadio-root.Mui-checked, &.Mui-error:hover .MuiCheckbox-root.Mui-checked":
          {
            color: theme.palette.error.dark,
          },
      }),
    },
  },
  MuiFormHelperText: {
    defaultProps: {
      variant: "standard",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        lineHeight: "1.33333333",
        marginTop: theme.spacing(2),
        ".MuiFormLabel-root + &": {
          marginTop: `-${theme.spacing(1)}`,
          color: theme.palette.text.secondary,
        },
        marginBottom: theme.spacing(2),
        "&:last-child": {
          marginBottom: 0,
        },
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        lineHeight: "1.14285714",
        fontSize: "1rem",
        fontWeight: 600,
        marginBottom: theme.spacing(2),
        "&.Mui-focused, &.Mui-error, &.Mui-disabled": {
          color: theme.palette.text.primary,
        },
      }),
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(1),
        fontSize: theme.typography.body1.fontSize,
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
        borderColor: "transparent",
        borderRadius: theme.mixins.borderRadius,

        "&:hover, &:focus-visible": {
          backgroundColor: "rgba(29, 29, 33, 0.1)",
          borderColor: "transparent",
        },
        "&:focus-visible": {
          outlineColor: theme.palette.primary.main,
        },
        "&:active": {
          backgroundColor: "rgba(29, 29, 33, 0.2)",
          borderColor: "transparent",
        },
        "&:disabled": {
          backgroundColor: "rgba(235, 235, 237, 0.6)",
          color: theme.palette.text.secondary,
          borderColor: "transparent",
        },
      }),
    },
  },
  MuiInputAdornment: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        display: "flex",
        ...(ownerState.position === "start" && {
          marginRight: 0,
        }),
        ...(ownerState.position === "end" && {
          marginLeft: 0,
        }),
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        lineHeight: "1.14285714",
      },
      input: {
        boxSizing: "border-box",
        height: "auto",
      },
    },
  },
  MuiInputLabel: {
    defaultProps: {
      disableAnimation: true,
      shrink: false,
    },
    styleOverrides: {
      root: ({ ownerState }) => ({
        // @ts-expect-error: Incorrect typing in MUI
        ...(ownerState.formControl && {
          position: "initial",
          transform: "none",
        }),
        ...(ownerState.variant === "outlined" && {
          pointerEvents: "initial",
          transform: "none",
          maxWidth: "100%",
          ...(ownerState.size === "small" && {
            transform: "none",
          }),
        }),
      }),
    },
  },
  MuiLink: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
        textDecoration: "none",

        "&:hover": {
          color: theme.palette.primary.main,
          textDecoration: "underline",
        },

        "&:focus-visible": {
          outlineColor: theme.palette.primary.main,
          outlineOffset: "2px",
          outlineStyle: "solid",
          outlineWidth: "1px",
        },

        "&:visited": {
          color: theme.palette.primary.main,
        },

        ".Link-indicator, .Link-icon": {
          display: "inline-block",
          height: "1em",
          lineHeight: 1,
        },

        ".Link-indicator": {
          marginInlineStart: theme.spacing(2),
        },

        ".Link-icon": {
          marginInlineEnd: theme.spacing(2),
        },
        svg: {
          fontSize: "1rem",
          height: "1em",
          position: "relative",
          top: "-0.0625em",
          verticalAlign: "middle",
          width: "1em",
        },
      }),
    },
    variants: [
      {
        props: { variant: "monochrome" },
        style: ({ theme }) => ({
          color: theme.palette.text.primary,
          textDecoration: "underline",

          "&:hover": {
            color: theme.palette.text.secondary,
          },

          "&:focus-visible": {
            outlineColor: theme.palette.primary.main,
            outlineOffset: "2px",
            outlineStyle: "solid",
            outlineWidth: "1px",
          },

          "&:visited": {
            color: theme.palette.text.primary,
          },
        }),
      },
    ],
  },
  MuiNativeSelect: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      icon: ({ theme }) => ({
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      notched: false,
      minRows: 3,
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.text.primary,
        },
        [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
        [`&.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: theme.palette.error.main,
          },
        [`&.${outlinedInputClasses.error}:hover .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: theme.palette.error.dark,
          },
        [`&.${outlinedInputClasses.error}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: theme.palette.error.main,
          },
        [`&.${outlinedInputClasses.disabled} .${outlinedInputClasses.notchedOutline}`]:
          {
            borderColor: theme.palette.action.disabled,
          },
        [`&.${outlinedInputClasses.disabled}`]: {
          backgroundColor: theme.palette.grey[50],
          pointerEvents: "none",
        },
        ...(ownerState.startAdornment && {
          paddingLeft: theme.spacing(3),
        }),
        ...(ownerState.endAdornment && {
          paddingRight: theme.spacing(3),
        }),
        ...(ownerState.multiline && {
          padding: "0",
          ...(ownerState.size === "small" && {
            padding: "0",
          }),
        }),
      }),
      input: ({ theme }) => ({
        padding: `calc(${theme.spacing(3)} - 1px) ${theme.spacing(3)}`,
        borderWidth: theme.mixins.borderWidth,
        borderStyle: theme.mixins.borderStyle,
        borderColor: "transparent",
      }),
      notchedOutline: ({ theme }) => ({
        borderColor: theme.palette.grey[500],
      }),
    },
  },
  MuiRadio: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "&:hover": {
          backgroundColor: "transparent",
        },
        padding: 0,
        ".Mui-error > &": {
          color: theme.palette.error.main,
          "&:hover": {
            color: theme.palette.error.dark,
          },
        },
        "&.Mui-focusVisible": {
          outlineColor: theme.palette.primary.main,
          outlineOffset: 0,
          outlineStyle: "solid",
          outlineWidth: "2px",
        },
      }),
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
      },
    },
  },
  MuiSvgIcon: {
    defaultProps: {
      fontSize: "inherit",
      color: "inherit",
    },
  },
  MuiTab: {
    defaultProps: {
      iconPosition: "start",
    },
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        maxWidth: `calc(${theme.mixins.maxWidth} / 2)`,
        minWidth: "unset",
        minHeight: "unset",
        padding: `${theme.spacing(4)} 0`,
        lineHeight: theme.typography.body1.lineHeight,
        overflow: "visible",
        ...(ownerState.selected == true && {
          color: theme.palette.text.primary,
        }),
        ...(ownerState.textColor === "inherit" && {
          color: "inherit",
          opacity: 1,
        }),
        ...(ownerState.wrapped && {
          fontSize: theme.typography.subtitle1.fontSize,
          lineHeight: theme.typography.subtitle1.lineHeight,
        }),
        "&:hover": {
          color: theme.palette.primary.main,
        },
        "&:focus-visible::before, &.Mui-focusVisible::before": {
          content: "''",
          position: "absolute",
          top: theme.spacing(4),
          right: `calc(-1 * ${theme.spacing(2)})`,
          bottom: theme.spacing(4),
          left: `calc(-1 * ${theme.spacing(2)})`,
          borderWidth: theme.mixins.borderWidth,
          borderStyle: theme.mixins.borderStyle,
          borderColor: theme.palette.primary.main,
          borderRadius: theme.mixins.borderRadius,
        },
        "&.Mui-selected": {
          color: theme.palette.text.primary,
          fontWeight: theme.typography.fontWeightBold,
          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
        "&.Mui-disabled": {
          cursor: "not-allowed",
          pointerEvents: "unset",
          "&:hover": {
            color: theme.palette.text.disabled,
          },
        },
      }),
    },
  },
  MuiTable: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        display: "table",
        width: "auto",
        borderCollapse: "separate",
        borderSpacing: 0,
        border: `${theme.mixins.borderWidth} ${theme.mixins.borderStyle} ${theme.palette.grey[100]}`,
        borderRadius: theme.mixins.borderRadius,
        marginBlock: theme.spacing(0),
        marginInline: theme.spacing(0),
        lineHeight: "1.14285714",

        "&:only-child": {
          marginBlockEnd: 0,
        },

        ...(ownerState.stickyHeader && {
          borderCollapse: "separate",
        }),
      }),
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme, ownerState }) => ({
        ...theme.typography.body1,
        maxWidth: theme.mixins.maxWidth,
        borderBottom: `${theme.mixins.borderWidth} ${theme.mixins.borderStyle} ${theme.palette.grey[100]}`,
        textAlign: "start",
        verticalAlign: "baseline",
        padding: "unset",
        paddingBlock: theme.spacing(4),
        paddingInline: theme.spacing(4),
        overflowWrap: "break-word",

        [`.${tableBodyClasses.root} .${tableRowClasses.root}:last-of-type &`]: {
          borderBottom: 0,
        },

        [`.${tableRowClasses.selected} &`]: {
          borderBottomColor: theme.palette.primary.light,
        },

        [`.${tableRowClasses.selected}:hover &`]: {
          borderBottomColor: theme.palette.primary.main,
        },

        ...(ownerState.variant === "action" && {
          paddingBlock: 0,
        }),

        ...(ownerState.variant === "body" && {
          color: theme.palette.text.primary,
        }),

        ...(ownerState.variant === "date" && {
          whiteSpace: "nowrap",
        }),

        ...(ownerState.variant === "footer" && {
          color: theme.palette.text.secondary,
          lineHeight: theme.typography.body1.lineHeight,
          fontSize: theme.typography.body1.fontSize,
        }),

        [`.${tableHeadClasses.root} &`]: {
          color: theme.palette.text.secondary,
          lineHeight: theme.typography.body1.lineHeight,
          fontWeight: theme.typography.fontWeightBold,
          backgroundColor: theme.palette.grey[50],
        },

        ...(ownerState.variant === "head" && {
          lineHeight: theme.typography.body1.lineHeight,
          fontWeight: theme.typography.fontWeightBold,
        }),

        ...(ownerState.variant === "number" && {
          textAlign: "right",
          fontFeatureSettings: '"lnum", "tnum"',
        }),

        ...(ownerState.padding === "checkbox" && {
          width: 48, // prevent the checkbox column from growing
          padding: "0 0 0 4px",
        }),

        ...(ownerState.padding === "none" && {
          padding: 0,
        }),

        ...(ownerState.align === "left" && {
          textAlign: "left",
        }),

        ...(ownerState.align === "center" && {
          textAlign: "center",
        }),

        ...(ownerState.align === "right" && {
          textAlign: "right",
          flexDirection: "row-reverse",
        }),

        ...(ownerState.align === "justify" && {
          textAlign: "justify",
        }),
      }),
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        width: "unset",
        maxWidth: "100%",
        marginBlockStart: theme.spacing(0),
        marginBlockEnd: theme.spacing(4),
        marginInline: 0,
        overflowX: "auto",

        "&:last-child": {
          marginBlock: 0,
        },
      }),
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: ({ theme }) => ({
        verticalAlign: "unset",
        [`&.${tableRowClasses.hover}:hover`]: {
          backgroundColor: theme.palette.grey[50],
        },
        [`&.${tableRowClasses.selected}`]: {
          backgroundColor: theme.palette.primary.lighter,
          "&:hover": {
            backgroundColor: theme.palette.primary.lighter,
          },
        },
      }),
    },
  },
  MuiTableSortLabel: {
    defaultProps: {
      IconComponent: ArrowDownIcon,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "flex-start",
        flexDirection: "inherit",
        alignItems: "center",
        "&:focus-visible": {
          color: theme.palette.text.primary,
          outlineOffset: theme.spacing(4),
          outlineStyle: "solid",
          outlineWidth: "2px",
          outlineColor: theme.palette.primary.main,
        },
        "&:hover": {
          color: theme.palette.text.primary,
          [`& .${tableSortLabelClasses.icon}`]: {
            opacity: 1,
          },
        },
        [`&.${tableSortLabelClasses.active}`]: {
          color: theme.palette.text.secondary,
          [`& .${tableSortLabelClasses.icon}`]: {
            opacity: 1,
            color: "inherit",
          },
        },
      }),
      icon: ({ theme, ownerState }) => ({
        fontSize: "inherit",
        marginRight: 0,
        marginLeft: 0,
        opacity: 0,
        color: "inherit",
        transition: theme.transitions.create(["opacity", "transform"], {
          duration: theme.transitions.duration.shorter,
        }),
        userSelect: "none",

        [`.${tableCellClasses.alignRight} &`]: {
          marginInlineEnd: theme.spacing(2),
        },

        [`.${tableCellClasses.alignLeft} &`]: {
          marginInlineStart: theme.spacing(2),
        },

        ...(ownerState.direction === "desc" && {
          transform: "rotate(0deg)",
        }),
        ...(ownerState.direction === "asc" && {
          transform: "rotate(180deg)",
        }),
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: "unset",
        marginBottom: theme.spacing(5),
      }),
      flexContainer: ({ theme }) => ({
        gap: theme.spacing(5),
        borderBottom: `${theme.mixins.borderWidth} ${theme.mixins.borderStyle} ${theme.palette.divider}`,
      }),
    },
  },
  MuiTypography: {
    defaultProps: {
      fontFamily:
        "'Public Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Helvetica Neue', 'Noto Sans Arabic', sans-serif",
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "p",
        body1: "p",
        inherit: "p",
        kbd: "kbd",
        legend: "legend",
      },
    },
    styleOverrides: {
      paragraph: ({ theme }) => ({
        marginBottom: theme.spacing(4),
      }),
      root: ({ theme, ownerState }) => ({
        ...(ownerState.variant === "kbd" && {
          display: "inline-block",
          minWidth: `calc(${theme.typography.subtitle1.fontSize} * ${theme.typography.h5.lineHeight})`,
          borderStyle: theme.mixins.borderStyle,
          borderWidth: theme.mixins.borderWidth,
          borderRadius: theme.mixins.borderRadius,
          borderColor: theme.palette.grey[200],
          backgroundColor: theme.palette.grey[50],
          padding: `calc(${theme.spacing(1)} / 2) ${theme.spacing(1)}`,
          fontSize: theme.typography.subtitle1.fontSize,
          fontWeight: theme.typography.fontWeightRegular,
          lineHeight: theme.typography.h5.lineHeight,
          boxShadow: `0 1px 1px 0 hsla(240, 6%, 12%, 0.05)`,
        }),
      }),
    },
  },
};
