var dp = Object.defineProperty;
var pp = (n, e, t) =>
  e in n ? dp(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t);
var Ve = (n, e, t) => (pp(n, typeof e != "symbol" ? e + "" : e, t), t);
import {
  g as yu,
  R as gt,
  r as H,
  _ as Op,
  j as C,
  e as gp,
  c as me,
  f as ce,
  h as ot,
  l as xu,
  L as mp,
  u as Sp,
  i as bp,
  k as jn,
  v as Ln,
  F as $t,
  C as ke,
  a as yp,
  S as At,
  B as Oi,
  H as xp,
  m as Sl,
  n as kp,
  o as te,
  p as Dp,
  T as It,
  G as Cp,
  q as Qs,
  s as oa,
  I as ku,
  t as sn,
  w as vp,
  E as wp,
  x as Qp,
  y as la,
  P as aa,
  z as Pp,
  A as Ap,
  D as Mp,
  J as $p,
  K as Ep,
  M as Bp,
  N as Rp,
  O as Tp,
  Q as Fp,
  U as Du,
  V as ha,
  W as ua,
} from "./sanity-206b9142.js";
var Cu = { exports: {} },
  zp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Zp = zp,
  Wp = Zp;
function vu() {}
function wu() {}
wu.resetWarningCache = vu;
var jp = function () {
  function n(i, r, s, o, l, a) {
    if (a !== Wp) {
      var h = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((h.name = "Invariant Violation"), h);
    }
  }
  n.isRequired = n;
  function e() {
    return n;
  }
  var t = {
    array: n,
    bigint: n,
    bool: n,
    func: n,
    number: n,
    object: n,
    string: n,
    symbol: n,
    any: n,
    arrayOf: e,
    element: n,
    elementType: n,
    instanceOf: e,
    node: n,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: wu,
    resetWarningCache: vu,
  };
  return (t.PropTypes = t), t;
};
Cu.exports = jp();
var Qu = Cu.exports;
const V = yu(Qu);
var bl = { exports: {} },
  Lp = [
    "alignContent",
    "MozAlignContent",
    "WebkitAlignContent",
    "MSAlignContent",
    "OAlignContent",
    "alignItems",
    "MozAlignItems",
    "WebkitAlignItems",
    "MSAlignItems",
    "OAlignItems",
    "alignSelf",
    "MozAlignSelf",
    "WebkitAlignSelf",
    "MSAlignSelf",
    "OAlignSelf",
    "all",
    "MozAll",
    "WebkitAll",
    "MSAll",
    "OAll",
    "animation",
    "MozAnimation",
    "WebkitAnimation",
    "MSAnimation",
    "OAnimation",
    "animationDelay",
    "MozAnimationDelay",
    "WebkitAnimationDelay",
    "MSAnimationDelay",
    "OAnimationDelay",
    "animationDirection",
    "MozAnimationDirection",
    "WebkitAnimationDirection",
    "MSAnimationDirection",
    "OAnimationDirection",
    "animationDuration",
    "MozAnimationDuration",
    "WebkitAnimationDuration",
    "MSAnimationDuration",
    "OAnimationDuration",
    "animationFillMode",
    "MozAnimationFillMode",
    "WebkitAnimationFillMode",
    "MSAnimationFillMode",
    "OAnimationFillMode",
    "animationIterationCount",
    "MozAnimationIterationCount",
    "WebkitAnimationIterationCount",
    "MSAnimationIterationCount",
    "OAnimationIterationCount",
    "animationName",
    "MozAnimationName",
    "WebkitAnimationName",
    "MSAnimationName",
    "OAnimationName",
    "animationPlayState",
    "MozAnimationPlayState",
    "WebkitAnimationPlayState",
    "MSAnimationPlayState",
    "OAnimationPlayState",
    "animationTimingFunction",
    "MozAnimationTimingFunction",
    "WebkitAnimationTimingFunction",
    "MSAnimationTimingFunction",
    "OAnimationTimingFunction",
    "backfaceVisibility",
    "MozBackfaceVisibility",
    "WebkitBackfaceVisibility",
    "MSBackfaceVisibility",
    "OBackfaceVisibility",
    "background",
    "MozBackground",
    "WebkitBackground",
    "MSBackground",
    "OBackground",
    "backgroundAttachment",
    "MozBackgroundAttachment",
    "WebkitBackgroundAttachment",
    "MSBackgroundAttachment",
    "OBackgroundAttachment",
    "backgroundBlendMode",
    "MozBackgroundBlendMode",
    "WebkitBackgroundBlendMode",
    "MSBackgroundBlendMode",
    "OBackgroundBlendMode",
    "backgroundClip",
    "MozBackgroundClip",
    "WebkitBackgroundClip",
    "MSBackgroundClip",
    "OBackgroundClip",
    "backgroundColor",
    "MozBackgroundColor",
    "WebkitBackgroundColor",
    "MSBackgroundColor",
    "OBackgroundColor",
    "backgroundImage",
    "MozBackgroundImage",
    "WebkitBackgroundImage",
    "MSBackgroundImage",
    "OBackgroundImage",
    "backgroundOrigin",
    "MozBackgroundOrigin",
    "WebkitBackgroundOrigin",
    "MSBackgroundOrigin",
    "OBackgroundOrigin",
    "backgroundPosition",
    "MozBackgroundPosition",
    "WebkitBackgroundPosition",
    "MSBackgroundPosition",
    "OBackgroundPosition",
    "backgroundRepeat",
    "MozBackgroundRepeat",
    "WebkitBackgroundRepeat",
    "MSBackgroundRepeat",
    "OBackgroundRepeat",
    "backgroundSize",
    "MozBackgroundSize",
    "WebkitBackgroundSize",
    "MSBackgroundSize",
    "OBackgroundSize",
    "blockSize",
    "MozBlockSize",
    "WebkitBlockSize",
    "MSBlockSize",
    "OBlockSize",
    "border",
    "MozBorder",
    "WebkitBorder",
    "MSBorder",
    "OBorder",
    "borderBlockEnd",
    "MozBorderBlockEnd",
    "WebkitBorderBlockEnd",
    "MSBorderBlockEnd",
    "OBorderBlockEnd",
    "borderBlockEndColor",
    "MozBorderBlockEndColor",
    "WebkitBorderBlockEndColor",
    "MSBorderBlockEndColor",
    "OBorderBlockEndColor",
    "borderBlockEndStyle",
    "MozBorderBlockEndStyle",
    "WebkitBorderBlockEndStyle",
    "MSBorderBlockEndStyle",
    "OBorderBlockEndStyle",
    "borderBlockEndWidth",
    "MozBorderBlockEndWidth",
    "WebkitBorderBlockEndWidth",
    "MSBorderBlockEndWidth",
    "OBorderBlockEndWidth",
    "borderBlockStart",
    "MozBorderBlockStart",
    "WebkitBorderBlockStart",
    "MSBorderBlockStart",
    "OBorderBlockStart",
    "borderBlockStartColor",
    "MozBorderBlockStartColor",
    "WebkitBorderBlockStartColor",
    "MSBorderBlockStartColor",
    "OBorderBlockStartColor",
    "borderBlockStartStyle",
    "MozBorderBlockStartStyle",
    "WebkitBorderBlockStartStyle",
    "MSBorderBlockStartStyle",
    "OBorderBlockStartStyle",
    "borderBlockStartWidth",
    "MozBorderBlockStartWidth",
    "WebkitBorderBlockStartWidth",
    "MSBorderBlockStartWidth",
    "OBorderBlockStartWidth",
    "borderBottom",
    "MozBorderBottom",
    "WebkitBorderBottom",
    "MSBorderBottom",
    "OBorderBottom",
    "borderBottomColor",
    "MozBorderBottomColor",
    "WebkitBorderBottomColor",
    "MSBorderBottomColor",
    "OBorderBottomColor",
    "borderBottomLeftRadius",
    "MozBorderBottomLeftRadius",
    "WebkitBorderBottomLeftRadius",
    "MSBorderBottomLeftRadius",
    "OBorderBottomLeftRadius",
    "borderBottomRightRadius",
    "MozBorderBottomRightRadius",
    "WebkitBorderBottomRightRadius",
    "MSBorderBottomRightRadius",
    "OBorderBottomRightRadius",
    "borderBottomStyle",
    "MozBorderBottomStyle",
    "WebkitBorderBottomStyle",
    "MSBorderBottomStyle",
    "OBorderBottomStyle",
    "borderBottomWidth",
    "MozBorderBottomWidth",
    "WebkitBorderBottomWidth",
    "MSBorderBottomWidth",
    "OBorderBottomWidth",
    "borderCollapse",
    "MozBorderCollapse",
    "WebkitBorderCollapse",
    "MSBorderCollapse",
    "OBorderCollapse",
    "borderColor",
    "MozBorderColor",
    "WebkitBorderColor",
    "MSBorderColor",
    "OBorderColor",
    "borderImage",
    "MozBorderImage",
    "WebkitBorderImage",
    "MSBorderImage",
    "OBorderImage",
    "borderImageOutset",
    "MozBorderImageOutset",
    "WebkitBorderImageOutset",
    "MSBorderImageOutset",
    "OBorderImageOutset",
    "borderImageRepeat",
    "MozBorderImageRepeat",
    "WebkitBorderImageRepeat",
    "MSBorderImageRepeat",
    "OBorderImageRepeat",
    "borderImageSlice",
    "MozBorderImageSlice",
    "WebkitBorderImageSlice",
    "MSBorderImageSlice",
    "OBorderImageSlice",
    "borderImageSource",
    "MozBorderImageSource",
    "WebkitBorderImageSource",
    "MSBorderImageSource",
    "OBorderImageSource",
    "borderImageWidth",
    "MozBorderImageWidth",
    "WebkitBorderImageWidth",
    "MSBorderImageWidth",
    "OBorderImageWidth",
    "borderInlineEnd",
    "MozBorderInlineEnd",
    "WebkitBorderInlineEnd",
    "MSBorderInlineEnd",
    "OBorderInlineEnd",
    "borderInlineEndColor",
    "MozBorderInlineEndColor",
    "WebkitBorderInlineEndColor",
    "MSBorderInlineEndColor",
    "OBorderInlineEndColor",
    "borderInlineEndStyle",
    "MozBorderInlineEndStyle",
    "WebkitBorderInlineEndStyle",
    "MSBorderInlineEndStyle",
    "OBorderInlineEndStyle",
    "borderInlineEndWidth",
    "MozBorderInlineEndWidth",
    "WebkitBorderInlineEndWidth",
    "MSBorderInlineEndWidth",
    "OBorderInlineEndWidth",
    "borderInlineStart",
    "MozBorderInlineStart",
    "WebkitBorderInlineStart",
    "MSBorderInlineStart",
    "OBorderInlineStart",
    "borderInlineStartColor",
    "MozBorderInlineStartColor",
    "WebkitBorderInlineStartColor",
    "MSBorderInlineStartColor",
    "OBorderInlineStartColor",
    "borderInlineStartStyle",
    "MozBorderInlineStartStyle",
    "WebkitBorderInlineStartStyle",
    "MSBorderInlineStartStyle",
    "OBorderInlineStartStyle",
    "borderInlineStartWidth",
    "MozBorderInlineStartWidth",
    "WebkitBorderInlineStartWidth",
    "MSBorderInlineStartWidth",
    "OBorderInlineStartWidth",
    "borderLeft",
    "MozBorderLeft",
    "WebkitBorderLeft",
    "MSBorderLeft",
    "OBorderLeft",
    "borderLeftColor",
    "MozBorderLeftColor",
    "WebkitBorderLeftColor",
    "MSBorderLeftColor",
    "OBorderLeftColor",
    "borderLeftStyle",
    "MozBorderLeftStyle",
    "WebkitBorderLeftStyle",
    "MSBorderLeftStyle",
    "OBorderLeftStyle",
    "borderLeftWidth",
    "MozBorderLeftWidth",
    "WebkitBorderLeftWidth",
    "MSBorderLeftWidth",
    "OBorderLeftWidth",
    "borderRadius",
    "MozBorderRadius",
    "WebkitBorderRadius",
    "MSBorderRadius",
    "OBorderRadius",
    "borderRight",
    "MozBorderRight",
    "WebkitBorderRight",
    "MSBorderRight",
    "OBorderRight",
    "borderRightColor",
    "MozBorderRightColor",
    "WebkitBorderRightColor",
    "MSBorderRightColor",
    "OBorderRightColor",
    "borderRightStyle",
    "MozBorderRightStyle",
    "WebkitBorderRightStyle",
    "MSBorderRightStyle",
    "OBorderRightStyle",
    "borderRightWidth",
    "MozBorderRightWidth",
    "WebkitBorderRightWidth",
    "MSBorderRightWidth",
    "OBorderRightWidth",
    "borderSpacing",
    "MozBorderSpacing",
    "WebkitBorderSpacing",
    "MSBorderSpacing",
    "OBorderSpacing",
    "borderStyle",
    "MozBorderStyle",
    "WebkitBorderStyle",
    "MSBorderStyle",
    "OBorderStyle",
    "borderTop",
    "MozBorderTop",
    "WebkitBorderTop",
    "MSBorderTop",
    "OBorderTop",
    "borderTopColor",
    "MozBorderTopColor",
    "WebkitBorderTopColor",
    "MSBorderTopColor",
    "OBorderTopColor",
    "borderTopLeftRadius",
    "MozBorderTopLeftRadius",
    "WebkitBorderTopLeftRadius",
    "MSBorderTopLeftRadius",
    "OBorderTopLeftRadius",
    "borderTopRightRadius",
    "MozBorderTopRightRadius",
    "WebkitBorderTopRightRadius",
    "MSBorderTopRightRadius",
    "OBorderTopRightRadius",
    "borderTopStyle",
    "MozBorderTopStyle",
    "WebkitBorderTopStyle",
    "MSBorderTopStyle",
    "OBorderTopStyle",
    "borderTopWidth",
    "MozBorderTopWidth",
    "WebkitBorderTopWidth",
    "MSBorderTopWidth",
    "OBorderTopWidth",
    "borderWidth",
    "MozBorderWidth",
    "WebkitBorderWidth",
    "MSBorderWidth",
    "OBorderWidth",
    "bottom",
    "MozBottom",
    "WebkitBottom",
    "MSBottom",
    "OBottom",
    "boxDecorationBreak",
    "MozBoxDecorationBreak",
    "WebkitBoxDecorationBreak",
    "MSBoxDecorationBreak",
    "OBoxDecorationBreak",
    "boxShadow",
    "MozBoxShadow",
    "WebkitBoxShadow",
    "MSBoxShadow",
    "OBoxShadow",
    "boxSizing",
    "MozBoxSizing",
    "WebkitBoxSizing",
    "MSBoxSizing",
    "OBoxSizing",
    "breakAfter",
    "MozBreakAfter",
    "WebkitBreakAfter",
    "MSBreakAfter",
    "OBreakAfter",
    "breakBefore",
    "MozBreakBefore",
    "WebkitBreakBefore",
    "MSBreakBefore",
    "OBreakBefore",
    "breakInside",
    "MozBreakInside",
    "WebkitBreakInside",
    "MSBreakInside",
    "OBreakInside",
    "captionSide",
    "MozCaptionSide",
    "WebkitCaptionSide",
    "MSCaptionSide",
    "OCaptionSide",
    "caretColor",
    "MozCaretColor",
    "WebkitCaretColor",
    "MSCaretColor",
    "OCaretColor",
    "ch",
    "MozCh",
    "WebkitCh",
    "MSCh",
    "OCh",
    "clear",
    "MozClear",
    "WebkitClear",
    "MSClear",
    "OClear",
    "clip",
    "MozClip",
    "WebkitClip",
    "MSClip",
    "OClip",
    "clipPath",
    "MozClipPath",
    "WebkitClipPath",
    "MSClipPath",
    "OClipPath",
    "cm",
    "MozCm",
    "WebkitCm",
    "MSCm",
    "OCm",
    "color",
    "MozColor",
    "WebkitColor",
    "MSColor",
    "OColor",
    "columnCount",
    "MozColumnCount",
    "WebkitColumnCount",
    "MSColumnCount",
    "OColumnCount",
    "columnFill",
    "MozColumnFill",
    "WebkitColumnFill",
    "MSColumnFill",
    "OColumnFill",
    "columnGap",
    "MozColumnGap",
    "WebkitColumnGap",
    "MSColumnGap",
    "OColumnGap",
    "columnRule",
    "MozColumnRule",
    "WebkitColumnRule",
    "MSColumnRule",
    "OColumnRule",
    "columnRuleColor",
    "MozColumnRuleColor",
    "WebkitColumnRuleColor",
    "MSColumnRuleColor",
    "OColumnRuleColor",
    "columnRuleStyle",
    "MozColumnRuleStyle",
    "WebkitColumnRuleStyle",
    "MSColumnRuleStyle",
    "OColumnRuleStyle",
    "columnRuleWidth",
    "MozColumnRuleWidth",
    "WebkitColumnRuleWidth",
    "MSColumnRuleWidth",
    "OColumnRuleWidth",
    "columnSpan",
    "MozColumnSpan",
    "WebkitColumnSpan",
    "MSColumnSpan",
    "OColumnSpan",
    "columnWidth",
    "MozColumnWidth",
    "WebkitColumnWidth",
    "MSColumnWidth",
    "OColumnWidth",
    "columns",
    "MozColumns",
    "WebkitColumns",
    "MSColumns",
    "OColumns",
    "content",
    "MozContent",
    "WebkitContent",
    "MSContent",
    "OContent",
    "counterIncrement",
    "MozCounterIncrement",
    "WebkitCounterIncrement",
    "MSCounterIncrement",
    "OCounterIncrement",
    "counterReset",
    "MozCounterReset",
    "WebkitCounterReset",
    "MSCounterReset",
    "OCounterReset",
    "cursor",
    "MozCursor",
    "WebkitCursor",
    "MSCursor",
    "OCursor",
    "deg",
    "MozDeg",
    "WebkitDeg",
    "MSDeg",
    "ODeg",
    "direction",
    "MozDirection",
    "WebkitDirection",
    "MSDirection",
    "ODirection",
    "display",
    "MozDisplay",
    "WebkitDisplay",
    "MSDisplay",
    "ODisplay",
    "dpcm",
    "MozDpcm",
    "WebkitDpcm",
    "MSDpcm",
    "ODpcm",
    "dpi",
    "MozDpi",
    "WebkitDpi",
    "MSDpi",
    "ODpi",
    "dppx",
    "MozDppx",
    "WebkitDppx",
    "MSDppx",
    "ODppx",
    "em",
    "MozEm",
    "WebkitEm",
    "MSEm",
    "OEm",
    "emptyCells",
    "MozEmptyCells",
    "WebkitEmptyCells",
    "MSEmptyCells",
    "OEmptyCells",
    "ex",
    "MozEx",
    "WebkitEx",
    "MSEx",
    "OEx",
    "filter",
    "MozFilter",
    "WebkitFilter",
    "MSFilter",
    "OFilter",
    "flexBasis",
    "MozFlexBasis",
    "WebkitFlexBasis",
    "MSFlexBasis",
    "OFlexBasis",
    "flexDirection",
    "MozFlexDirection",
    "WebkitFlexDirection",
    "MSFlexDirection",
    "OFlexDirection",
    "flexFlow",
    "MozFlexFlow",
    "WebkitFlexFlow",
    "MSFlexFlow",
    "OFlexFlow",
    "flexGrow",
    "MozFlexGrow",
    "WebkitFlexGrow",
    "MSFlexGrow",
    "OFlexGrow",
    "flexShrink",
    "MozFlexShrink",
    "WebkitFlexShrink",
    "MSFlexShrink",
    "OFlexShrink",
    "flexWrap",
    "MozFlexWrap",
    "WebkitFlexWrap",
    "MSFlexWrap",
    "OFlexWrap",
    "float",
    "MozFloat",
    "WebkitFloat",
    "MSFloat",
    "OFloat",
    "font",
    "MozFont",
    "WebkitFont",
    "MSFont",
    "OFont",
    "fontFamily",
    "MozFontFamily",
    "WebkitFontFamily",
    "MSFontFamily",
    "OFontFamily",
    "fontFeatureSettings",
    "MozFontFeatureSettings",
    "WebkitFontFeatureSettings",
    "MSFontFeatureSettings",
    "OFontFeatureSettings",
    "fontKerning",
    "MozFontKerning",
    "WebkitFontKerning",
    "MSFontKerning",
    "OFontKerning",
    "fontLanguageOverride",
    "MozFontLanguageOverride",
    "WebkitFontLanguageOverride",
    "MSFontLanguageOverride",
    "OFontLanguageOverride",
    "fontSize",
    "MozFontSize",
    "WebkitFontSize",
    "MSFontSize",
    "OFontSize",
    "fontSizeAdjust",
    "MozFontSizeAdjust",
    "WebkitFontSizeAdjust",
    "MSFontSizeAdjust",
    "OFontSizeAdjust",
    "fontStretch",
    "MozFontStretch",
    "WebkitFontStretch",
    "MSFontStretch",
    "OFontStretch",
    "fontStyle",
    "MozFontStyle",
    "WebkitFontStyle",
    "MSFontStyle",
    "OFontStyle",
    "fontSynthesis",
    "MozFontSynthesis",
    "WebkitFontSynthesis",
    "MSFontSynthesis",
    "OFontSynthesis",
    "fontVariant",
    "MozFontVariant",
    "WebkitFontVariant",
    "MSFontVariant",
    "OFontVariant",
    "fontVariantAlternates",
    "MozFontVariantAlternates",
    "WebkitFontVariantAlternates",
    "MSFontVariantAlternates",
    "OFontVariantAlternates",
    "fontVariantCaps",
    "MozFontVariantCaps",
    "WebkitFontVariantCaps",
    "MSFontVariantCaps",
    "OFontVariantCaps",
    "fontVariantEastAsian",
    "MozFontVariantEastAsian",
    "WebkitFontVariantEastAsian",
    "MSFontVariantEastAsian",
    "OFontVariantEastAsian",
    "fontVariantLigatures",
    "MozFontVariantLigatures",
    "WebkitFontVariantLigatures",
    "MSFontVariantLigatures",
    "OFontVariantLigatures",
    "fontVariantNumeric",
    "MozFontVariantNumeric",
    "WebkitFontVariantNumeric",
    "MSFontVariantNumeric",
    "OFontVariantNumeric",
    "fontVariantPosition",
    "MozFontVariantPosition",
    "WebkitFontVariantPosition",
    "MSFontVariantPosition",
    "OFontVariantPosition",
    "fontWeight",
    "MozFontWeight",
    "WebkitFontWeight",
    "MSFontWeight",
    "OFontWeight",
    "fr",
    "MozFr",
    "WebkitFr",
    "MSFr",
    "OFr",
    "grad",
    "MozGrad",
    "WebkitGrad",
    "MSGrad",
    "OGrad",
    "grid",
    "MozGrid",
    "WebkitGrid",
    "MSGrid",
    "OGrid",
    "gridArea",
    "MozGridArea",
    "WebkitGridArea",
    "MSGridArea",
    "OGridArea",
    "gridAutoColumns",
    "MozGridAutoColumns",
    "WebkitGridAutoColumns",
    "MSGridAutoColumns",
    "OGridAutoColumns",
    "gridAutoFlow",
    "MozGridAutoFlow",
    "WebkitGridAutoFlow",
    "MSGridAutoFlow",
    "OGridAutoFlow",
    "gridAutoRows",
    "MozGridAutoRows",
    "WebkitGridAutoRows",
    "MSGridAutoRows",
    "OGridAutoRows",
    "gridColumn",
    "MozGridColumn",
    "WebkitGridColumn",
    "MSGridColumn",
    "OGridColumn",
    "gridColumnEnd",
    "MozGridColumnEnd",
    "WebkitGridColumnEnd",
    "MSGridColumnEnd",
    "OGridColumnEnd",
    "gridColumnGap",
    "MozGridColumnGap",
    "WebkitGridColumnGap",
    "MSGridColumnGap",
    "OGridColumnGap",
    "gridColumnStart",
    "MozGridColumnStart",
    "WebkitGridColumnStart",
    "MSGridColumnStart",
    "OGridColumnStart",
    "gridGap",
    "MozGridGap",
    "WebkitGridGap",
    "MSGridGap",
    "OGridGap",
    "gridRow",
    "MozGridRow",
    "WebkitGridRow",
    "MSGridRow",
    "OGridRow",
    "gridRowEnd",
    "MozGridRowEnd",
    "WebkitGridRowEnd",
    "MSGridRowEnd",
    "OGridRowEnd",
    "gridRowGap",
    "MozGridRowGap",
    "WebkitGridRowGap",
    "MSGridRowGap",
    "OGridRowGap",
    "gridRowStart",
    "MozGridRowStart",
    "WebkitGridRowStart",
    "MSGridRowStart",
    "OGridRowStart",
    "gridTemplate",
    "MozGridTemplate",
    "WebkitGridTemplate",
    "MSGridTemplate",
    "OGridTemplate",
    "gridTemplateAreas",
    "MozGridTemplateAreas",
    "WebkitGridTemplateAreas",
    "MSGridTemplateAreas",
    "OGridTemplateAreas",
    "gridTemplateColumns",
    "MozGridTemplateColumns",
    "WebkitGridTemplateColumns",
    "MSGridTemplateColumns",
    "OGridTemplateColumns",
    "gridTemplateRows",
    "MozGridTemplateRows",
    "WebkitGridTemplateRows",
    "MSGridTemplateRows",
    "OGridTemplateRows",
    "height",
    "MozHeight",
    "WebkitHeight",
    "MSHeight",
    "OHeight",
    "hyphens",
    "MozHyphens",
    "WebkitHyphens",
    "MSHyphens",
    "OHyphens",
    "hz",
    "MozHz",
    "WebkitHz",
    "MSHz",
    "OHz",
    "imageOrientation",
    "MozImageOrientation",
    "WebkitImageOrientation",
    "MSImageOrientation",
    "OImageOrientation",
    "imageRendering",
    "MozImageRendering",
    "WebkitImageRendering",
    "MSImageRendering",
    "OImageRendering",
    "imageResolution",
    "MozImageResolution",
    "WebkitImageResolution",
    "MSImageResolution",
    "OImageResolution",
    "imeMode",
    "MozImeMode",
    "WebkitImeMode",
    "MSImeMode",
    "OImeMode",
    "in",
    "MozIn",
    "WebkitIn",
    "MSIn",
    "OIn",
    "inherit",
    "MozInherit",
    "WebkitInherit",
    "MSInherit",
    "OInherit",
    "initial",
    "MozInitial",
    "WebkitInitial",
    "MSInitial",
    "OInitial",
    "inlineSize",
    "MozInlineSize",
    "WebkitInlineSize",
    "MSInlineSize",
    "OInlineSize",
    "isolation",
    "MozIsolation",
    "WebkitIsolation",
    "MSIsolation",
    "OIsolation",
    "justifyContent",
    "MozJustifyContent",
    "WebkitJustifyContent",
    "MSJustifyContent",
    "OJustifyContent",
    "khz",
    "MozKhz",
    "WebkitKhz",
    "MSKhz",
    "OKhz",
    "left",
    "MozLeft",
    "WebkitLeft",
    "MSLeft",
    "OLeft",
    "letterSpacing",
    "MozLetterSpacing",
    "WebkitLetterSpacing",
    "MSLetterSpacing",
    "OLetterSpacing",
    "lineBreak",
    "MozLineBreak",
    "WebkitLineBreak",
    "MSLineBreak",
    "OLineBreak",
    "lineHeight",
    "MozLineHeight",
    "WebkitLineHeight",
    "MSLineHeight",
    "OLineHeight",
    "listStyle",
    "MozListStyle",
    "WebkitListStyle",
    "MSListStyle",
    "OListStyle",
    "listStyleImage",
    "MozListStyleImage",
    "WebkitListStyleImage",
    "MSListStyleImage",
    "OListStyleImage",
    "listStylePosition",
    "MozListStylePosition",
    "WebkitListStylePosition",
    "MSListStylePosition",
    "OListStylePosition",
    "listStyleType",
    "MozListStyleType",
    "WebkitListStyleType",
    "MSListStyleType",
    "OListStyleType",
    "margin",
    "MozMargin",
    "WebkitMargin",
    "MSMargin",
    "OMargin",
    "marginBlockEnd",
    "MozMarginBlockEnd",
    "WebkitMarginBlockEnd",
    "MSMarginBlockEnd",
    "OMarginBlockEnd",
    "marginBlockStart",
    "MozMarginBlockStart",
    "WebkitMarginBlockStart",
    "MSMarginBlockStart",
    "OMarginBlockStart",
    "marginBottom",
    "MozMarginBottom",
    "WebkitMarginBottom",
    "MSMarginBottom",
    "OMarginBottom",
    "marginInlineEnd",
    "MozMarginInlineEnd",
    "WebkitMarginInlineEnd",
    "MSMarginInlineEnd",
    "OMarginInlineEnd",
    "marginInlineStart",
    "MozMarginInlineStart",
    "WebkitMarginInlineStart",
    "MSMarginInlineStart",
    "OMarginInlineStart",
    "marginLeft",
    "MozMarginLeft",
    "WebkitMarginLeft",
    "MSMarginLeft",
    "OMarginLeft",
    "marginRight",
    "MozMarginRight",
    "WebkitMarginRight",
    "MSMarginRight",
    "OMarginRight",
    "marginTop",
    "MozMarginTop",
    "WebkitMarginTop",
    "MSMarginTop",
    "OMarginTop",
    "mask",
    "MozMask",
    "WebkitMask",
    "MSMask",
    "OMask",
    "maskClip",
    "MozMaskClip",
    "WebkitMaskClip",
    "MSMaskClip",
    "OMaskClip",
    "maskComposite",
    "MozMaskComposite",
    "WebkitMaskComposite",
    "MSMaskComposite",
    "OMaskComposite",
    "maskImage",
    "MozMaskImage",
    "WebkitMaskImage",
    "MSMaskImage",
    "OMaskImage",
    "maskMode",
    "MozMaskMode",
    "WebkitMaskMode",
    "MSMaskMode",
    "OMaskMode",
    "maskOrigin",
    "MozMaskOrigin",
    "WebkitMaskOrigin",
    "MSMaskOrigin",
    "OMaskOrigin",
    "maskPosition",
    "MozMaskPosition",
    "WebkitMaskPosition",
    "MSMaskPosition",
    "OMaskPosition",
    "maskRepeat",
    "MozMaskRepeat",
    "WebkitMaskRepeat",
    "MSMaskRepeat",
    "OMaskRepeat",
    "maskSize",
    "MozMaskSize",
    "WebkitMaskSize",
    "MSMaskSize",
    "OMaskSize",
    "maskType",
    "MozMaskType",
    "WebkitMaskType",
    "MSMaskType",
    "OMaskType",
    "maxHeight",
    "MozMaxHeight",
    "WebkitMaxHeight",
    "MSMaxHeight",
    "OMaxHeight",
    "maxWidth",
    "MozMaxWidth",
    "WebkitMaxWidth",
    "MSMaxWidth",
    "OMaxWidth",
    "minBlockSize",
    "MozMinBlockSize",
    "WebkitMinBlockSize",
    "MSMinBlockSize",
    "OMinBlockSize",
    "minHeight",
    "MozMinHeight",
    "WebkitMinHeight",
    "MSMinHeight",
    "OMinHeight",
    "minInlineSize",
    "MozMinInlineSize",
    "WebkitMinInlineSize",
    "MSMinInlineSize",
    "OMinInlineSize",
    "minWidth",
    "MozMinWidth",
    "WebkitMinWidth",
    "MSMinWidth",
    "OMinWidth",
    "mixBlendMode",
    "MozMixBlendMode",
    "WebkitMixBlendMode",
    "MSMixBlendMode",
    "OMixBlendMode",
    "mm",
    "MozMm",
    "WebkitMm",
    "MSMm",
    "OMm",
    "ms",
    "MozMs",
    "WebkitMs",
    "MSMs",
    "OMs",
    "objectFit",
    "MozObjectFit",
    "WebkitObjectFit",
    "MSObjectFit",
    "OObjectFit",
    "objectPosition",
    "MozObjectPosition",
    "WebkitObjectPosition",
    "MSObjectPosition",
    "OObjectPosition",
    "offsetBlockEnd",
    "MozOffsetBlockEnd",
    "WebkitOffsetBlockEnd",
    "MSOffsetBlockEnd",
    "OOffsetBlockEnd",
    "offsetBlockStart",
    "MozOffsetBlockStart",
    "WebkitOffsetBlockStart",
    "MSOffsetBlockStart",
    "OOffsetBlockStart",
    "offsetInlineEnd",
    "MozOffsetInlineEnd",
    "WebkitOffsetInlineEnd",
    "MSOffsetInlineEnd",
    "OOffsetInlineEnd",
    "offsetInlineStart",
    "MozOffsetInlineStart",
    "WebkitOffsetInlineStart",
    "MSOffsetInlineStart",
    "OOffsetInlineStart",
    "opacity",
    "MozOpacity",
    "WebkitOpacity",
    "MSOpacity",
    "OOpacity",
    "order",
    "MozOrder",
    "WebkitOrder",
    "MSOrder",
    "OOrder",
    "orphans",
    "MozOrphans",
    "WebkitOrphans",
    "MSOrphans",
    "OOrphans",
    "outline",
    "MozOutline",
    "WebkitOutline",
    "MSOutline",
    "OOutline",
    "outlineColor",
    "MozOutlineColor",
    "WebkitOutlineColor",
    "MSOutlineColor",
    "OOutlineColor",
    "outlineOffset",
    "MozOutlineOffset",
    "WebkitOutlineOffset",
    "MSOutlineOffset",
    "OOutlineOffset",
    "outlineStyle",
    "MozOutlineStyle",
    "WebkitOutlineStyle",
    "MSOutlineStyle",
    "OOutlineStyle",
    "outlineWidth",
    "MozOutlineWidth",
    "WebkitOutlineWidth",
    "MSOutlineWidth",
    "OOutlineWidth",
    "overflow",
    "MozOverflow",
    "WebkitOverflow",
    "MSOverflow",
    "OOverflow",
    "overflowWrap",
    "MozOverflowWrap",
    "WebkitOverflowWrap",
    "MSOverflowWrap",
    "OOverflowWrap",
    "overflowX",
    "MozOverflowX",
    "WebkitOverflowX",
    "MSOverflowX",
    "OOverflowX",
    "overflowY",
    "MozOverflowY",
    "WebkitOverflowY",
    "MSOverflowY",
    "OOverflowY",
    "padding",
    "MozPadding",
    "WebkitPadding",
    "MSPadding",
    "OPadding",
    "paddingBlockEnd",
    "MozPaddingBlockEnd",
    "WebkitPaddingBlockEnd",
    "MSPaddingBlockEnd",
    "OPaddingBlockEnd",
    "paddingBlockStart",
    "MozPaddingBlockStart",
    "WebkitPaddingBlockStart",
    "MSPaddingBlockStart",
    "OPaddingBlockStart",
    "paddingBottom",
    "MozPaddingBottom",
    "WebkitPaddingBottom",
    "MSPaddingBottom",
    "OPaddingBottom",
    "paddingInlineEnd",
    "MozPaddingInlineEnd",
    "WebkitPaddingInlineEnd",
    "MSPaddingInlineEnd",
    "OPaddingInlineEnd",
    "paddingInlineStart",
    "MozPaddingInlineStart",
    "WebkitPaddingInlineStart",
    "MSPaddingInlineStart",
    "OPaddingInlineStart",
    "paddingLeft",
    "MozPaddingLeft",
    "WebkitPaddingLeft",
    "MSPaddingLeft",
    "OPaddingLeft",
    "paddingRight",
    "MozPaddingRight",
    "WebkitPaddingRight",
    "MSPaddingRight",
    "OPaddingRight",
    "paddingTop",
    "MozPaddingTop",
    "WebkitPaddingTop",
    "MSPaddingTop",
    "OPaddingTop",
    "pageBreakAfter",
    "MozPageBreakAfter",
    "WebkitPageBreakAfter",
    "MSPageBreakAfter",
    "OPageBreakAfter",
    "pageBreakBefore",
    "MozPageBreakBefore",
    "WebkitPageBreakBefore",
    "MSPageBreakBefore",
    "OPageBreakBefore",
    "pageBreakInside",
    "MozPageBreakInside",
    "WebkitPageBreakInside",
    "MSPageBreakInside",
    "OPageBreakInside",
    "pc",
    "MozPc",
    "WebkitPc",
    "MSPc",
    "OPc",
    "perspective",
    "MozPerspective",
    "WebkitPerspective",
    "MSPerspective",
    "OPerspective",
    "perspectiveOrigin",
    "MozPerspectiveOrigin",
    "WebkitPerspectiveOrigin",
    "MSPerspectiveOrigin",
    "OPerspectiveOrigin",
    "pointerEvents",
    "MozPointerEvents",
    "WebkitPointerEvents",
    "MSPointerEvents",
    "OPointerEvents",
    "position",
    "MozPosition",
    "WebkitPosition",
    "MSPosition",
    "OPosition",
    "pt",
    "MozPt",
    "WebkitPt",
    "MSPt",
    "OPt",
    "px",
    "MozPx",
    "WebkitPx",
    "MSPx",
    "OPx",
    "q",
    "MozQ",
    "WebkitQ",
    "MSQ",
    "OQ",
    "quotes",
    "MozQuotes",
    "WebkitQuotes",
    "MSQuotes",
    "OQuotes",
    "rad",
    "MozRad",
    "WebkitRad",
    "MSRad",
    "ORad",
    "rem",
    "MozRem",
    "WebkitRem",
    "MSRem",
    "ORem",
    "resize",
    "MozResize",
    "WebkitResize",
    "MSResize",
    "OResize",
    "revert",
    "MozRevert",
    "WebkitRevert",
    "MSRevert",
    "ORevert",
    "right",
    "MozRight",
    "WebkitRight",
    "MSRight",
    "ORight",
    "rubyAlign",
    "MozRubyAlign",
    "WebkitRubyAlign",
    "MSRubyAlign",
    "ORubyAlign",
    "rubyMerge",
    "MozRubyMerge",
    "WebkitRubyMerge",
    "MSRubyMerge",
    "ORubyMerge",
    "rubyPosition",
    "MozRubyPosition",
    "WebkitRubyPosition",
    "MSRubyPosition",
    "ORubyPosition",
    "s",
    "MozS",
    "WebkitS",
    "MSS",
    "OS",
    "scrollBehavior",
    "MozScrollBehavior",
    "WebkitScrollBehavior",
    "MSScrollBehavior",
    "OScrollBehavior",
    "scrollSnapCoordinate",
    "MozScrollSnapCoordinate",
    "WebkitScrollSnapCoordinate",
    "MSScrollSnapCoordinate",
    "OScrollSnapCoordinate",
    "scrollSnapDestination",
    "MozScrollSnapDestination",
    "WebkitScrollSnapDestination",
    "MSScrollSnapDestination",
    "OScrollSnapDestination",
    "scrollSnapType",
    "MozScrollSnapType",
    "WebkitScrollSnapType",
    "MSScrollSnapType",
    "OScrollSnapType",
    "shapeImageThreshold",
    "MozShapeImageThreshold",
    "WebkitShapeImageThreshold",
    "MSShapeImageThreshold",
    "OShapeImageThreshold",
    "shapeMargin",
    "MozShapeMargin",
    "WebkitShapeMargin",
    "MSShapeMargin",
    "OShapeMargin",
    "shapeOutside",
    "MozShapeOutside",
    "WebkitShapeOutside",
    "MSShapeOutside",
    "OShapeOutside",
    "tabSize",
    "MozTabSize",
    "WebkitTabSize",
    "MSTabSize",
    "OTabSize",
    "tableLayout",
    "MozTableLayout",
    "WebkitTableLayout",
    "MSTableLayout",
    "OTableLayout",
    "textAlign",
    "MozTextAlign",
    "WebkitTextAlign",
    "MSTextAlign",
    "OTextAlign",
    "textAlignLast",
    "MozTextAlignLast",
    "WebkitTextAlignLast",
    "MSTextAlignLast",
    "OTextAlignLast",
    "textCombineUpright",
    "MozTextCombineUpright",
    "WebkitTextCombineUpright",
    "MSTextCombineUpright",
    "OTextCombineUpright",
    "textDecoration",
    "MozTextDecoration",
    "WebkitTextDecoration",
    "MSTextDecoration",
    "OTextDecoration",
    "textDecorationColor",
    "MozTextDecorationColor",
    "WebkitTextDecorationColor",
    "MSTextDecorationColor",
    "OTextDecorationColor",
    "textDecorationLine",
    "MozTextDecorationLine",
    "WebkitTextDecorationLine",
    "MSTextDecorationLine",
    "OTextDecorationLine",
    "textDecorationStyle",
    "MozTextDecorationStyle",
    "WebkitTextDecorationStyle",
    "MSTextDecorationStyle",
    "OTextDecorationStyle",
    "textEmphasis",
    "MozTextEmphasis",
    "WebkitTextEmphasis",
    "MSTextEmphasis",
    "OTextEmphasis",
    "textEmphasisColor",
    "MozTextEmphasisColor",
    "WebkitTextEmphasisColor",
    "MSTextEmphasisColor",
    "OTextEmphasisColor",
    "textEmphasisPosition",
    "MozTextEmphasisPosition",
    "WebkitTextEmphasisPosition",
    "MSTextEmphasisPosition",
    "OTextEmphasisPosition",
    "textEmphasisStyle",
    "MozTextEmphasisStyle",
    "WebkitTextEmphasisStyle",
    "MSTextEmphasisStyle",
    "OTextEmphasisStyle",
    "textIndent",
    "MozTextIndent",
    "WebkitTextIndent",
    "MSTextIndent",
    "OTextIndent",
    "textOrientation",
    "MozTextOrientation",
    "WebkitTextOrientation",
    "MSTextOrientation",
    "OTextOrientation",
    "textOverflow",
    "MozTextOverflow",
    "WebkitTextOverflow",
    "MSTextOverflow",
    "OTextOverflow",
    "textRendering",
    "MozTextRendering",
    "WebkitTextRendering",
    "MSTextRendering",
    "OTextRendering",
    "textShadow",
    "MozTextShadow",
    "WebkitTextShadow",
    "MSTextShadow",
    "OTextShadow",
    "textTransform",
    "MozTextTransform",
    "WebkitTextTransform",
    "MSTextTransform",
    "OTextTransform",
    "textUnderlinePosition",
    "MozTextUnderlinePosition",
    "WebkitTextUnderlinePosition",
    "MSTextUnderlinePosition",
    "OTextUnderlinePosition",
    "top",
    "MozTop",
    "WebkitTop",
    "MSTop",
    "OTop",
    "touchAction",
    "MozTouchAction",
    "WebkitTouchAction",
    "MSTouchAction",
    "OTouchAction",
    "transform",
    "MozTransform",
    "WebkitTransform",
    "msTransform",
    "OTransform",
    "transformBox",
    "MozTransformBox",
    "WebkitTransformBox",
    "MSTransformBox",
    "OTransformBox",
    "transformOrigin",
    "MozTransformOrigin",
    "WebkitTransformOrigin",
    "MSTransformOrigin",
    "OTransformOrigin",
    "transformStyle",
    "MozTransformStyle",
    "WebkitTransformStyle",
    "MSTransformStyle",
    "OTransformStyle",
    "transition",
    "MozTransition",
    "WebkitTransition",
    "MSTransition",
    "OTransition",
    "transitionDelay",
    "MozTransitionDelay",
    "WebkitTransitionDelay",
    "MSTransitionDelay",
    "OTransitionDelay",
    "transitionDuration",
    "MozTransitionDuration",
    "WebkitTransitionDuration",
    "MSTransitionDuration",
    "OTransitionDuration",
    "transitionProperty",
    "MozTransitionProperty",
    "WebkitTransitionProperty",
    "MSTransitionProperty",
    "OTransitionProperty",
    "transitionTimingFunction",
    "MozTransitionTimingFunction",
    "WebkitTransitionTimingFunction",
    "MSTransitionTimingFunction",
    "OTransitionTimingFunction",
    "turn",
    "MozTurn",
    "WebkitTurn",
    "MSTurn",
    "OTurn",
    "unicodeBidi",
    "MozUnicodeBidi",
    "WebkitUnicodeBidi",
    "MSUnicodeBidi",
    "OUnicodeBidi",
    "unset",
    "MozUnset",
    "WebkitUnset",
    "MSUnset",
    "OUnset",
    "verticalAlign",
    "MozVerticalAlign",
    "WebkitVerticalAlign",
    "MSVerticalAlign",
    "OVerticalAlign",
    "vh",
    "MozVh",
    "WebkitVh",
    "MSVh",
    "OVh",
    "visibility",
    "MozVisibility",
    "WebkitVisibility",
    "MSVisibility",
    "OVisibility",
    "vmax",
    "MozVmax",
    "WebkitVmax",
    "MSVmax",
    "OVmax",
    "vmin",
    "MozVmin",
    "WebkitVmin",
    "MSVmin",
    "OVmin",
    "vw",
    "MozVw",
    "WebkitVw",
    "MSVw",
    "OVw",
    "whiteSpace",
    "MozWhiteSpace",
    "WebkitWhiteSpace",
    "MSWhiteSpace",
    "OWhiteSpace",
    "widows",
    "MozWidows",
    "WebkitWidows",
    "MSWidows",
    "OWidows",
    "width",
    "MozWidth",
    "WebkitWidth",
    "MSWidth",
    "OWidth",
    "willChange",
    "MozWillChange",
    "WebkitWillChange",
    "MSWillChange",
    "OWillChange",
    "wordBreak",
    "MozWordBreak",
    "WebkitWordBreak",
    "MSWordBreak",
    "OWordBreak",
    "wordSpacing",
    "MozWordSpacing",
    "WebkitWordSpacing",
    "MSWordSpacing",
    "OWordSpacing",
    "wordWrap",
    "MozWordWrap",
    "WebkitWordWrap",
    "MSWordWrap",
    "OWordWrap",
    "writingMode",
    "MozWritingMode",
    "WebkitWritingMode",
    "MSWritingMode",
    "OWritingMode",
    "zIndex",
    "MozZIndex",
    "WebkitZIndex",
    "MSZIndex",
    "OZIndex",
    "fontSize",
    "MozFontSize",
    "WebkitFontSize",
    "MSFontSize",
    "OFontSize",
    "flex",
    "MozFlex",
    "WebkitFlex",
    "MSFlex",
    "OFlex",
    "fr",
    "MozFr",
    "WebkitFr",
    "MSFr",
    "OFr",
    "overflowScrolling",
    "MozOverflowScrolling",
    "WebkitOverflowScrolling",
    "MSOverflowScrolling",
    "OOverflowScrolling",
    "userSelect",
    "MozUserSelect",
    "WebkitUserSelect",
    "MSUserSelect",
    "OUserSelect",
  ];
bl.exports;
(function (n) {
  var e = Lp,
    t = Qu;
  (n.exports = function (i, r, s) {
    var o = i[r];
    if (o) {
      var l = [];
      if (
        (Object.keys(o).forEach(function (a) {
          e.indexOf(a) === -1 && l.push(a);
        }),
        l.length)
      )
        throw new Error("Prop " + r + " passed to " + s + ". Has invalid keys " + l.join(", "));
    }
  }),
    (n.exports.isRequired = function (i, r, s) {
      if (!i[r]) throw new Error("Prop " + r + " passed to " + s + " is required");
      return n.exports(i, r, s);
    }),
    (n.exports.supportingArrays = t.oneOfType([t.arrayOf(n.exports), n.exports]));
})(bl);
var qp = bl.exports;
const ui = yu(qp);
function Pu() {
  var n = this.constructor.getDerivedStateFromProps(this.props, this.state);
  n != null && this.setState(n);
}
function Au(n) {
  function e(t) {
    var i = this.constructor.getDerivedStateFromProps(n, t);
    return i ?? null;
  }
  this.setState(e.bind(this));
}
function Mu(n, e) {
  try {
    var t = this.props,
      i = this.state;
    (this.props = n),
      (this.state = e),
      (this.__reactInternalSnapshotFlag = !0),
      (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(t, i));
  } finally {
    (this.props = t), (this.state = i);
  }
}
Pu.__suppressDeprecationWarning = !0;
Au.__suppressDeprecationWarning = !0;
Mu.__suppressDeprecationWarning = !0;
function Ip(n) {
  var e = n.prototype;
  if (!e || !e.isReactComponent) throw new Error("Can only polyfill class components");
  if (
    typeof n.getDerivedStateFromProps != "function" &&
    typeof e.getSnapshotBeforeUpdate != "function"
  )
    return n;
  var t = null,
    i = null,
    r = null;
  if (
    (typeof e.componentWillMount == "function"
      ? (t = "componentWillMount")
      : typeof e.UNSAFE_componentWillMount == "function" && (t = "UNSAFE_componentWillMount"),
    typeof e.componentWillReceiveProps == "function"
      ? (i = "componentWillReceiveProps")
      : typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        (i = "UNSAFE_componentWillReceiveProps"),
    typeof e.componentWillUpdate == "function"
      ? (r = "componentWillUpdate")
      : typeof e.UNSAFE_componentWillUpdate == "function" && (r = "UNSAFE_componentWillUpdate"),
    t !== null || i !== null || r !== null)
  ) {
    var s = n.displayName || n.name,
      o =
        typeof n.getDerivedStateFromProps == "function"
          ? "getDerivedStateFromProps()"
          : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
        s +
        " uses " +
        o +
        " but also contains the following legacy lifecycles:" +
        (t !== null
          ? `
  ` + t
          : "") +
        (i !== null
          ? `
  ` + i
          : "") +
        (r !== null
          ? `
  ` + r
          : "") +
        `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (
    (typeof n.getDerivedStateFromProps == "function" &&
      ((e.componentWillMount = Pu), (e.componentWillReceiveProps = Au)),
    typeof e.getSnapshotBeforeUpdate == "function")
  ) {
    if (typeof e.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    e.componentWillUpdate = Mu;
    var l = e.componentDidUpdate;
    e.componentDidUpdate = function (h, u, c) {
      var f = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : c;
      l.call(this, h, u, f);
    };
  }
  return n;
}
function yl(n, e) {
  if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ca(n, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(n, i.key, i);
  }
}
function xl(n, e, t) {
  return e && ca(n.prototype, e), t && ca(n, t), n;
}
function $u(n, e, t) {
  return (
    e in n
      ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (n[e] = t),
    n
  );
}
function fa(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    e &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(n, r).enumerable;
      })),
      t.push.apply(t, i);
  }
  return t;
}
function Ps(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? fa(Object(t), !0).forEach(function (i) {
          $u(n, i, t[i]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
        : fa(Object(t)).forEach(function (i) {
            Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
          });
  }
  return n;
}
function kl(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (n.prototype = Object.create(e && e.prototype, {
    constructor: { value: n, writable: !0, configurable: !0 },
  })),
    e && ho(n, e);
}
function Br(n) {
  return (
    (Br = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Br(n)
  );
}
function ho(n, e) {
  return (
    (ho =
      Object.setPrototypeOf ||
      function (i, r) {
        return (i.__proto__ = r), i;
      }),
    ho(n, e)
  );
}
function _p() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function wi(n) {
  if (n === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function Vp(n, e) {
  return e && (typeof e == "object" || typeof e == "function") ? e : wi(n);
}
function Dl(n) {
  return function () {
    var e = Br(n),
      t;
    if (_p()) {
      var i = Br(this).constructor;
      t = Reflect.construct(e, arguments, i);
    } else t = e.apply(this, arguments);
    return Vp(this, t);
  };
}
var Rr = (function (n) {
  kl(t, n);
  var e = Dl(t);
  function t() {
    return yl(this, t), e.apply(this, arguments);
  }
  return (
    xl(t, [
      {
        key: "render",
        value: function () {
          var r = this.props,
            s = r.children,
            o = r.className,
            l = r.split,
            a = r.style,
            h = r.size,
            u = r.eleRef,
            c = ["Pane", l, o],
            f = { flex: 1, position: "relative", outline: "none" };
          return (
            h !== void 0 &&
              (l === "vertical" ? (f.width = h) : ((f.height = h), (f.display = "flex")),
              (f.flex = "none")),
            (f = Object.assign({}, f, a || {})),
            gt.createElement("div", { ref: u, className: c.join(" "), style: f }, s)
          );
        },
      },
    ]),
    t
  );
})(gt.PureComponent);
Rr.propTypes = {
  className: V.string.isRequired,
  children: V.node.isRequired,
  size: V.oneOfType([V.string, V.number]),
  split: V.oneOf(["vertical", "horizontal"]),
  style: ui,
  eleRef: V.func,
};
Rr.defaultProps = {};
var Eu = "Resizer",
  Cl = (function (n) {
    kl(t, n);
    var e = Dl(t);
    function t() {
      return yl(this, t), e.apply(this, arguments);
    }
    return (
      xl(t, [
        {
          key: "render",
          value: function () {
            var r = this.props,
              s = r.className,
              o = r.onClick,
              l = r.onDoubleClick,
              a = r.onMouseDown,
              h = r.onTouchEnd,
              u = r.onTouchStart,
              c = r.resizerClassName,
              f = r.split,
              d = r.style,
              p = [c, f, s];
            return gt.createElement("span", {
              role: "presentation",
              className: p.join(" "),
              style: d,
              onMouseDown: function (g) {
                return a(g);
              },
              onTouchStart: function (g) {
                g.preventDefault(), u(g);
              },
              onTouchEnd: function (g) {
                g.preventDefault(), h(g);
              },
              onClick: function (g) {
                o && (g.preventDefault(), o(g));
              },
              onDoubleClick: function (g) {
                l && (g.preventDefault(), l(g));
              },
            });
          },
        },
      ]),
      t
    );
  })(gt.Component);
Cl.propTypes = {
  className: V.string.isRequired,
  onClick: V.func,
  onDoubleClick: V.func,
  onMouseDown: V.func.isRequired,
  onTouchStart: V.func.isRequired,
  onTouchEnd: V.func.isRequired,
  split: V.oneOf(["vertical", "horizontal"]),
  style: ui,
  resizerClassName: V.string.isRequired,
};
Cl.defaultProps = { resizerClassName: Eu };
function da(n, e) {
  if (n.selection) n.selection.empty();
  else
    try {
      e.getSelection().removeAllRanges();
    } catch {}
}
function pa(n, e, t, i) {
  if (typeof i == "number") {
    var r = typeof e == "number" ? e : 0,
      s = typeof t == "number" && t >= 0 ? t : 1 / 0;
    return Math.max(r, Math.min(s, i));
  }
  return n !== void 0 ? n : e;
}
function Xp(n) {
  return gt.Children.toArray(n).filter(function (e) {
    return e;
  });
}
var Dn = (function (n) {
  kl(t, n);
  var e = Dl(t);
  function t(i) {
    var r;
    yl(this, t),
      (r = e.call(this, i)),
      (r.onMouseDown = r.onMouseDown.bind(wi(r))),
      (r.onTouchStart = r.onTouchStart.bind(wi(r))),
      (r.onMouseMove = r.onMouseMove.bind(wi(r))),
      (r.onTouchMove = r.onTouchMove.bind(wi(r))),
      (r.onMouseUp = r.onMouseUp.bind(wi(r)));
    var s = i.size,
      o = i.defaultSize,
      l = i.minSize,
      a = i.maxSize,
      h = i.primary,
      u = s !== void 0 ? s : pa(o, l, a, null);
    return (
      (r.state = {
        active: !1,
        resized: !1,
        pane1Size: h === "first" ? u : void 0,
        pane2Size: h === "second" ? u : void 0,
        instanceProps: { size: s },
      }),
      r
    );
  }
  return (
    xl(
      t,
      [
        {
          key: "componentDidMount",
          value: function () {
            document.addEventListener("mouseup", this.onMouseUp),
              document.addEventListener("mousemove", this.onMouseMove),
              document.addEventListener("touchmove", this.onTouchMove),
              this.setState(t.getSizeUpdate(this.props, this.state));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            document.removeEventListener("mouseup", this.onMouseUp),
              document.removeEventListener("mousemove", this.onMouseMove),
              document.removeEventListener("touchmove", this.onTouchMove);
          },
        },
        {
          key: "onMouseDown",
          value: function (r) {
            var s = Object.assign({}, r, { touches: [{ clientX: r.clientX, clientY: r.clientY }] });
            this.onTouchStart(s);
          },
        },
        {
          key: "onTouchStart",
          value: function (r) {
            var s = this.props,
              o = s.allowResize,
              l = s.onDragStarted,
              a = s.split;
            if (o) {
              da(document, window);
              var h = a === "vertical" ? r.touches[0].clientX : r.touches[0].clientY;
              typeof l == "function" && l(), this.setState({ active: !0, position: h });
            }
          },
        },
        {
          key: "onMouseMove",
          value: function (r) {
            var s = Object.assign({}, r, { touches: [{ clientX: r.clientX, clientY: r.clientY }] });
            this.onTouchMove(s);
          },
        },
        {
          key: "onTouchMove",
          value: function (r) {
            var s = this.props,
              o = s.allowResize,
              l = s.maxSize,
              a = s.minSize,
              h = s.onChange,
              u = s.split,
              c = s.step,
              f = this.state,
              d = f.active,
              p = f.position;
            if (o && d) {
              da(document, window);
              var O = this.props.primary === "first",
                g = O ? this.pane1 : this.pane2,
                S = O ? this.pane2 : this.pane1;
              if (g) {
                var b = g,
                  D = S;
                if (b.getBoundingClientRect) {
                  var v = b.getBoundingClientRect().width,
                    k = b.getBoundingClientRect().height,
                    y = u === "vertical" ? r.touches[0].clientX : r.touches[0].clientY,
                    Q = u === "vertical" ? v : k,
                    R = p - y;
                  if (c) {
                    if (Math.abs(R) < c) return;
                    R = ~~(R / c) * c;
                  }
                  var $ = O ? R : -R,
                    j = parseInt(window.getComputedStyle(b).order),
                    Z = parseInt(window.getComputedStyle(D).order);
                  j > Z && ($ = -$);
                  var A = l;
                  if (l !== void 0 && l <= 0) {
                    var x = this.splitPane;
                    u === "vertical"
                      ? (A = x.getBoundingClientRect().width + l)
                      : (A = x.getBoundingClientRect().height + l);
                  }
                  var M = Q - $,
                    z = p - R;
                  M < a
                    ? (M = a)
                    : l !== void 0 && M > A
                      ? (M = A)
                      : this.setState({ position: z, resized: !0 }),
                    h && h(M),
                    this.setState($u({ draggedSize: M }, O ? "pane1Size" : "pane2Size", M));
                }
              }
            }
          },
        },
        {
          key: "onMouseUp",
          value: function () {
            var r = this.props,
              s = r.allowResize,
              o = r.onDragFinished,
              l = this.state,
              a = l.active,
              h = l.draggedSize;
            s && a && (typeof o == "function" && o(h), this.setState({ active: !1 }));
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              s = this.props,
              o = s.allowResize,
              l = s.children,
              a = s.className,
              h = s.onResizerClick,
              u = s.onResizerDoubleClick,
              c = s.paneClassName,
              f = s.pane1ClassName,
              d = s.pane2ClassName,
              p = s.paneStyle,
              O = s.pane1Style,
              g = s.pane2Style,
              S = s.resizerClassName,
              b = s.resizerStyle,
              D = s.split,
              v = s.style,
              k = this.state,
              y = k.pane1Size,
              Q = k.pane2Size,
              R = o ? "" : "disabled",
              $ = S && "".concat(S, " ").concat(Eu),
              j = Xp(l),
              Z = Ps(
                {
                  display: "flex",
                  flex: 1,
                  height: "100%",
                  position: "absolute",
                  outline: "none",
                  overflow: "hidden",
                  MozUserSelect: "text",
                  WebkitUserSelect: "text",
                  msUserSelect: "text",
                  userSelect: "text",
                },
                v
              );
            D === "vertical"
              ? Object.assign(Z, { flexDirection: "row", left: 0, right: 0 })
              : Object.assign(Z, {
                  bottom: 0,
                  flexDirection: "column",
                  minHeight: "100%",
                  top: 0,
                  width: "100%",
                });
            var A = ["SplitPane", a, D, R],
              x = Ps({}, p, {}, O),
              M = Ps({}, p, {}, g),
              z = ["Pane1", c, f].join(" "),
              I = ["Pane2", c, d].join(" ");
            return gt.createElement(
              "div",
              {
                className: A.join(" "),
                ref: function (ee) {
                  r.splitPane = ee;
                },
                style: Z,
              },
              gt.createElement(
                Rr,
                {
                  className: z,
                  key: "pane1",
                  eleRef: function (ee) {
                    r.pane1 = ee;
                  },
                  size: y,
                  split: D,
                  style: x,
                },
                j[0]
              ),
              gt.createElement(Cl, {
                className: R,
                onClick: h,
                onDoubleClick: u,
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                onTouchEnd: this.onMouseUp,
                key: "resizer",
                resizerClassName: $,
                split: D,
                style: b || {},
              }),
              gt.createElement(
                Rr,
                {
                  className: I,
                  key: "pane2",
                  eleRef: function (ee) {
                    r.pane2 = ee;
                  },
                  size: Q,
                  split: D,
                  style: M,
                },
                j[1]
              )
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (r, s) {
            return t.getSizeUpdate(r, s);
          },
        },
        {
          key: "getSizeUpdate",
          value: function (r, s) {
            var o = {},
              l = s.instanceProps;
            if (l.size === r.size && r.size !== void 0) return {};
            var a =
              r.size !== void 0 ? r.size : pa(r.defaultSize, r.minSize, r.maxSize, s.draggedSize);
            r.size !== void 0 && (o.draggedSize = a);
            var h = r.primary === "first";
            return (
              (o[h ? "pane1Size" : "pane2Size"] = a),
              (o[h ? "pane2Size" : "pane1Size"] = void 0),
              (o.instanceProps = { size: r.size }),
              o
            );
          },
        },
      ]
    ),
    t
  );
})(gt.Component);
Dn.propTypes = {
  allowResize: V.bool,
  children: V.arrayOf(V.node).isRequired,
  className: V.string,
  primary: V.oneOf(["first", "second"]),
  minSize: V.oneOfType([V.string, V.number]),
  maxSize: V.oneOfType([V.string, V.number]),
  defaultSize: V.oneOfType([V.string, V.number]),
  size: V.oneOfType([V.string, V.number]),
  split: V.oneOf(["vertical", "horizontal"]),
  onDragStarted: V.func,
  onDragFinished: V.func,
  onChange: V.func,
  onResizerClick: V.func,
  onResizerDoubleClick: V.func,
  style: ui,
  resizerStyle: ui,
  paneClassName: V.string,
  pane1ClassName: V.string,
  pane2ClassName: V.string,
  paneStyle: ui,
  pane1Style: ui,
  pane2Style: ui,
  resizerClassName: V.string,
  step: V.number,
};
Dn.defaultProps = {
  allowResize: !0,
  minSize: 50,
  primary: "first",
  split: "vertical",
  paneClassName: "",
  pane1ClassName: "",
  pane2ClassName: "",
};
Ip(Dn);
class J {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = ji(this, e, t);
    let r = [];
    return (
      this.decompose(0, e, r, 2),
      i.length && i.decompose(0, i.length, r, 3),
      this.decompose(t, this.length, r, 1),
      mt.from(r, this.length - (t - e) + i.length)
    );
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = ji(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), mt.from(i, t - e);
  }
  eq(e) {
    if (e == this) return !0;
    if (e.length != this.length || e.lines != this.lines) return !1;
    let t = this.scanIdentical(e, 1),
      i = this.length - this.scanIdentical(e, -1),
      r = new gn(this),
      s = new gn(e);
    for (let o = t, l = t; ; ) {
      if (
        (r.next(o),
        s.next(o),
        (o = 0),
        r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
      )
        return !1;
      if (((l += r.value.length), r.done || l >= i)) return !0;
    }
  }
  iter(e = 1) {
    return new gn(this, e);
  }
  iterRange(e, t = this.length) {
    return new Bu(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null) i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let r = this.line(e).from;
      i = this.iterRange(
        r,
        Math.max(r, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to)
      );
    }
    return new Ru(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {}
  static of(e) {
    if (e.length == 0) throw new RangeError("A document must have at least one line");
    return e.length == 1 && !e[0] ? J.empty : e.length <= 32 ? new pe(e) : mt.from(pe.split(e, []));
  }
}
class pe extends J {
  constructor(e, t = Yp(e)) {
    super(), (this.text = e), (this.length = t);
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, r) {
    for (let s = 0; ; s++) {
      let o = this.text[s],
        l = r + o.length;
      if ((t ? i : l) >= e) return new Np(r, l, i, o);
      (r = l + 1), i++;
    }
  }
  decompose(e, t, i, r) {
    let s =
      e <= 0 && t >= this.length
        ? this
        : new pe(Oa(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = i.pop(),
        l = xr(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32) i.push(new pe(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        i.push(new pe(l.slice(0, a)), new pe(l.slice(a)));
      }
    } else i.push(s);
  }
  replace(e, t, i) {
    if (!(i instanceof pe)) return super.replace(e, t, i);
    [e, t] = ji(this, e, t);
    let r = xr(this.text, xr(i.text, Oa(this.text, 0, e)), t),
      s = this.length + i.length - (t - e);
    return r.length <= 32 ? new pe(r, s) : mt.from(pe.split(r, []), s);
  }
  sliceString(
    e,
    t = this.length,
    i = `
`
  ) {
    [e, t] = ji(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s <= t && o < this.text.length; o++) {
      let l = this.text[o],
        a = s + l.length;
      s > e && o && (r += i),
        e < a && t > s && (r += l.slice(Math.max(0, e - s), t - s)),
        (s = a + 1);
    }
    return r;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [],
      r = -1;
    for (let s of e)
      i.push(s), (r += s.length + 1), i.length == 32 && (t.push(new pe(i, r)), (i = []), (r = -1));
    return r > -1 && t.push(new pe(i, r)), t;
  }
}
class mt extends J {
  constructor(e, t) {
    super(), (this.children = e), (this.length = t), (this.lines = 0);
    for (let i of e) this.lines += i.lines;
  }
  lineInner(e, t, i, r) {
    for (let s = 0; ; s++) {
      let o = this.children[s],
        l = r + o.length,
        a = i + o.lines - 1;
      if ((t ? a : l) >= e) return o.lineInner(e, t, i, r);
      (r = l + 1), (i = a + 1);
    }
  }
  decompose(e, t, i, r) {
    for (let s = 0, o = 0; o <= t && s < this.children.length; s++) {
      let l = this.children[s],
        a = o + l.length;
      if (e <= a && t >= o) {
        let h = r & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ((([e, t] = ji(this, e, t)), i.lines < this.lines))
      for (let r = 0, s = 0; r < this.children.length; r++) {
        let o = this.children[r],
          l = s + o.length;
        if (e >= s && t <= l) {
          let a = o.replace(e - s, t - s, i),
            h = this.lines - o.lines + a.lines;
          if (a.lines < h >> (5 - 1) && a.lines > h >> (5 + 1)) {
            let u = this.children.slice();
            return (u[r] = a), new mt(u, this.length - (t - e) + i.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(
    e,
    t = this.length,
    i = `
`
  ) {
    [e, t] = ji(this, e, t);
    let r = "";
    for (let s = 0, o = 0; s < this.children.length && o <= t; s++) {
      let l = this.children[s],
        a = o + l.length;
      o > e && s && (r += i), e < a && t > o && (r += l.sliceString(e - o, t - o, i)), (o = a + 1);
    }
    return r;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof mt)) return 0;
    let i = 0,
      [r, s, o, l] =
        t > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += t, s += t) {
      if (r == o || s == l) return i;
      let a = this.children[r],
        h = e.children[s];
      if (a != h) return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, r) => i + r.length + 1, -1)) {
    let i = 0;
    for (let d of e) i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e) p.flatten(d);
      return new pe(d, t);
    }
    let r = Math.max(32, i >> 5),
      s = r << 1,
      o = r >> 1,
      l = [],
      a = 0,
      h = -1,
      u = [];
    function c(d) {
      let p;
      if (d.lines > s && d instanceof mt) for (let O of d.children) c(O);
      else
        d.lines > o && (a > o || !a)
          ? (f(), l.push(d))
          : d instanceof pe && a && (p = u[u.length - 1]) instanceof pe && d.lines + p.lines <= 32
            ? ((a += d.lines),
              (h += d.length + 1),
              (u[u.length - 1] = new pe(p.text.concat(d.text), p.length + 1 + d.length)))
            : (a + d.lines > r && f(), (a += d.lines), (h += d.length + 1), u.push(d));
    }
    function f() {
      a != 0 && (l.push(u.length == 1 ? u[0] : mt.from(u, h)), (h = -1), (a = u.length = 0));
    }
    for (let d of e) c(d);
    return f(), l.length == 1 ? l[0] : new mt(l, t);
  }
}
J.empty = new pe([""], 0);
function Yp(n) {
  let e = -1;
  for (let t of n) e += t.length + 1;
  return e;
}
function xr(n, e, t = 0, i = 1e9) {
  for (let r = 0, s = 0, o = !0; s < n.length && r <= i; s++) {
    let l = n[s],
      a = r + l.length;
    a >= t &&
      (a > i && (l = l.slice(0, i - r)),
      r < t && (l = l.slice(t - r)),
      o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
      (r = a + 1);
  }
  return e;
}
function Oa(n, e, t) {
  return xr(n, [""], e, t);
}
class gn {
  constructor(e, t = 1) {
    (this.dir = t),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ""),
      (this.nodes = [e]),
      (this.offsets = [t > 0 ? 1 : (e instanceof pe ? e.text.length : e.children.length) << 1]);
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1,
        r = this.nodes[i],
        s = this.offsets[i],
        o = s >> 1,
        l = r instanceof pe ? r.text.length : r.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) return (this.done = !0), (this.value = ""), this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (t > 0 ? 0 : 1)) {
        if (((this.offsets[i] += t), e == 0))
          return (
            (this.lineBreak = !0),
            (this.value = `
`),
            this
          );
        e--;
      } else if (r instanceof pe) {
        let a = r.text[o + (t < 0 ? -1 : 0)];
        if (((this.offsets[i] += t), a.length > Math.max(0, e)))
          return (this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)), this;
        e -= a.length;
      } else {
        let a = r.children[o + (t < 0 ? -1 : 0)];
        e > a.length
          ? ((e -= a.length), (this.offsets[i] += t))
          : (t < 0 && this.offsets[i]--,
            this.nodes.push(a),
            this.offsets.push(
              t > 0 ? 1 : (a instanceof pe ? a.text.length : a.children.length) << 1
            ));
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)), this.nextInner(e, this.dir)
    );
  }
}
class Bu {
  constructor(e, t, i) {
    (this.value = ""),
      (this.done = !1),
      (this.cursor = new gn(e, t > i ? -1 : 1)),
      (this.pos = t > i ? e.length : 0),
      (this.from = Math.min(t, i)),
      (this.to = Math.max(t, i));
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ""), (this.done = !0), this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), (i -= e);
    let { value: r } = this.cursor.next(e);
    return (
      (this.pos += (r.length + e) * t),
      (this.value = r.length <= i ? r : t < 0 ? r.slice(r.length - i) : r.slice(0, i)),
      (this.done = !this.value),
      this
    );
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    );
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class Ru {
  constructor(e) {
    (this.inner = e), (this.afterBreak = !0), (this.value = ""), (this.done = !1);
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: r } = this.inner.next(e);
    return (
      t && this.afterBreak
        ? ((this.value = ""), (this.afterBreak = !1))
        : t
          ? ((this.done = !0), (this.value = ""))
          : i
            ? this.afterBreak
              ? (this.value = "")
              : ((this.afterBreak = !0), this.next())
            : ((this.value = r), (this.afterBreak = !1)),
      this
    );
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" &&
  ((J.prototype[Symbol.iterator] = function () {
    return this.iter();
  }),
  (gn.prototype[Symbol.iterator] =
    Bu.prototype[Symbol.iterator] =
    Ru.prototype[Symbol.iterator] =
      function () {
        return this;
      }));
class Np {
  constructor(e, t, i, r) {
    (this.from = e), (this.to = t), (this.number = i), (this.text = r);
  }
  get length() {
    return this.to - this.from;
  }
}
function ji(n, e, t) {
  return (e = Math.max(0, Math.min(n.length, e))), [e, Math.max(e, Math.min(n.length, t))];
}
let Ei =
  "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o"
    .split(",")
    .map((n) => (n ? parseInt(n, 36) : 1));
for (let n = 1; n < Ei.length; n++) Ei[n] += Ei[n - 1];
function Gp(n) {
  for (let e = 1; e < Ei.length; e += 2) if (Ei[e] > n) return Ei[e - 1] <= n;
  return !1;
}
function ga(n) {
  return n >= 127462 && n <= 127487;
}
const ma = 8205;
function Pe(n, e, t = !0, i = !0) {
  return (t ? Tu : Up)(n, e, i);
}
function Tu(n, e, t) {
  if (e == n.length) return e;
  e && Fu(n.charCodeAt(e)) && zu(n.charCodeAt(e - 1)) && e--;
  let i = we(n, e);
  for (e += Je(i); e < n.length; ) {
    let r = we(n, e);
    if (i == ma || r == ma || (t && Gp(r))) (e += Je(r)), (i = r);
    else if (ga(r)) {
      let s = 0,
        o = e - 2;
      for (; o >= 0 && ga(we(n, o)); ) s++, (o -= 2);
      if (s % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function Up(n, e, t) {
  for (; e > 0; ) {
    let i = Tu(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Fu(n) {
  return n >= 56320 && n < 57344;
}
function zu(n) {
  return n >= 55296 && n < 56320;
}
function we(n, e) {
  let t = n.charCodeAt(e);
  if (!zu(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Fu(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t;
}
function vl(n) {
  return n <= 65535
    ? String.fromCharCode(n)
    : ((n -= 65536), String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function Je(n) {
  return n < 65536 ? 1 : 2;
}
const uo = /\r\n?|\n/;
var Re = (function (n) {
  return (
    (n[(n.Simple = 0)] = "Simple"),
    (n[(n.TrackDel = 1)] = "TrackDel"),
    (n[(n.TrackBefore = 2)] = "TrackBefore"),
    (n[(n.TrackAfter = 3)] = "TrackAfter"),
    n
  );
})(Re || (Re = {}));
class xt {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0);
  }
  iterGaps(e) {
    for (let t = 0, i = 0, r = 0; t < this.sections.length; ) {
      let s = this.sections[t++],
        o = this.sections[t++];
      o < 0 ? (e(i, r, s), (r += s)) : (r += o), (i += s);
    }
  }
  iterChangedRanges(e, t = !1) {
    co(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++],
        r = this.sections[t++];
      r < 0 ? e.push(i, r) : e.push(r, i);
    }
    return new xt(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Zu(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : fo(this, e, t);
  }
  mapPos(e, t = -1, i = Re.Simple) {
    let r = 0,
      s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++],
        a = this.sections[o++],
        h = r + l;
      if (a < 0) {
        if (h > e) return s + (e - r);
        s += l;
      } else {
        if (
          i != Re.Simple &&
          h >= e &&
          ((i == Re.TrackDel && r < e && h > e) ||
            (i == Re.TrackBefore && r < e) ||
            (i == Re.TrackAfter && h > e))
        )
          return null;
        if (h > e || (h == e && t < 0 && !l)) return e == r || t < 0 ? s : s + a;
        s += a;
      }
      r = h;
    }
    if (e > r) throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  touchesRange(e, t = e) {
    for (let i = 0, r = 0; i < this.sections.length && r <= t; ) {
      let s = this.sections[i++],
        o = this.sections[i++],
        l = r + s;
      if (o >= 0 && r <= t && l >= e) return r < e && l > t ? "cover" : !0;
      r = l;
    }
    return !1;
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++],
        r = this.sections[t++];
      e += (e ? " " : "") + i + (r >= 0 ? ":" + r : "");
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != "number"))
      throw new RangeError("Invalid JSON representation of ChangeDesc");
    return new xt(e);
  }
  static create(e) {
    return new xt(e);
  }
}
class be extends xt {
  constructor(e, t) {
    super(e), (this.inserted = t);
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError("Applying change set to a document with the wrong length");
    return co(this, (t, i, r, s, o) => (e = e.replace(r, r + (i - t), o)), !1), e;
  }
  mapDesc(e, t = !1) {
    return fo(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(),
      i = [];
    for (let r = 0, s = 0; r < t.length; r += 2) {
      let o = t[r],
        l = t[r + 1];
      if (l >= 0) {
        (t[r] = l), (t[r + 1] = o);
        let a = r >> 1;
        for (; i.length < a; ) i.push(J.empty);
        i.push(o ? e.slice(s, s + o) : J.empty);
      }
      s += o;
    }
    return new be(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : Zu(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : fo(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    co(this, e, t);
  }
  get desc() {
    return xt.create(this.sections);
  }
  filter(e) {
    let t = [],
      i = [],
      r = [],
      s = new Cn(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || (l == a && s.len == 0); ) {
        if (s.done) break e;
        let u = Math.min(s.len, a - l);
        Me(r, u, -1);
        let c = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        Me(t, u, c), c > 0 && _t(i, t, s.text), s.forward(u), (l += u);
      }
      let h = e[o++];
      for (; l < h; ) {
        if (s.done) break e;
        let u = Math.min(s.len, h - l);
        Me(t, u, -1), Me(r, u, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(u), (l += u);
      }
    }
    return { changes: new be(t, i), filtered: xt.create(r) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t],
        r = this.sections[t + 1];
      r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let r = [],
      s = [],
      o = 0,
      l = null;
    function a(u = !1) {
      if (!u && !r.length) return;
      o < t && Me(r, t - o, -1);
      let c = new be(r, s);
      (l = l ? l.compose(c.map(l)) : c), (r = []), (s = []), (o = 0);
    }
    function h(u) {
      if (Array.isArray(u)) for (let c of u) h(c);
      else if (u instanceof be) {
        if (u.length != t)
          throw new RangeError(`Mismatched change set length (got ${u.length}, expected ${t})`);
        a(), (l = l ? l.compose(u.map(l)) : u);
      } else {
        let { from: c, to: f = c, insert: d } = u;
        if (c > f || c < 0 || f > t)
          throw new RangeError(`Invalid change range ${c} to ${f} (in doc of length ${t})`);
        let p = d ? (typeof d == "string" ? J.of(d.split(i || uo)) : d) : J.empty,
          O = p.length;
        if (c == f && O == 0) return;
        c < o && a(), c > o && Me(r, c - o, -1), Me(r, f - c, O), _t(s, r, p), (o = f);
      }
    }
    return h(e), a(!l), l;
  }
  static empty(e) {
    return new be(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) throw new RangeError("Invalid JSON representation of ChangeSet");
    let t = [],
      i = [];
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number") t.push(s, -1);
      else {
        if (
          !Array.isArray(s) ||
          typeof s[0] != "number" ||
          s.some((o, l) => l && typeof o != "string")
        )
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1) t.push(s[0], 0);
        else {
          for (; i.length < r; ) i.push(J.empty);
          (i[r] = J.of(s.slice(1))), t.push(s[0], i[r].length);
        }
      }
    }
    return new be(t, i);
  }
  static createSet(e, t) {
    return new be(e, t);
  }
}
function Me(n, e, t, i = !1) {
  if (e == 0 && t <= 0) return;
  let r = n.length - 2;
  r >= 0 && t <= 0 && t == n[r + 1]
    ? (n[r] += e)
    : e == 0 && n[r] == 0
      ? (n[r + 1] += t)
      : i
        ? ((n[r] += e), (n[r + 1] += t))
        : n.push(e, t);
}
function _t(n, e, t) {
  if (t.length == 0) return;
  let i = (e.length - 2) >> 1;
  if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; ) n.push(J.empty);
    n.push(t);
  }
}
function co(n, e, t) {
  let i = n.inserted;
  for (let r = 0, s = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++],
      a = n.sections[o++];
    if (a < 0) (r += l), (s += l);
    else {
      let h = r,
        u = s,
        c = J.empty;
      for (
        ;
        (h += l),
          (u += a),
          a && i && (c = c.append(i[(o - 2) >> 1])),
          !(t || o == n.sections.length || n.sections[o + 1] < 0);

      )
        (l = n.sections[o++]), (a = n.sections[o++]);
      e(r, h, s, u, c), (r = h), (s = u);
    }
  }
}
function fo(n, e, t, i = !1) {
  let r = [],
    s = i ? [] : null,
    o = new Cn(n),
    l = new Cn(e);
  for (let a = -1; ; )
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      Me(r, h, -1), o.forward(h), l.forward(h);
    } else if (
      l.ins >= 0 &&
      (o.ins < 0 || a == o.i || (o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
    ) {
      let h = l.len;
      for (Me(r, l.ins, -1); h; ) {
        let u = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= u && (Me(r, 0, o.ins), s && _t(s, r, o.text), (a = o.i)),
          o.forward(u),
          (h -= u);
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0,
        u = o.len;
      for (; u; )
        if (l.ins == -1) {
          let c = Math.min(u, l.len);
          (h += c), (u -= c), l.forward(c);
        } else if (l.ins == 0 && l.len < u) (u -= l.len), l.next();
        else break;
      Me(r, h, a < o.i ? o.ins : 0),
        s && a < o.i && _t(s, r, o.text),
        (a = o.i),
        o.forward(o.len - u);
    } else {
      if (o.done && l.done) return s ? be.createSet(r, s) : xt.create(r);
      throw new Error("Mismatched change set lengths");
    }
}
function Zu(n, e, t = !1) {
  let i = [],
    r = t ? [] : null,
    s = new Cn(n),
    o = new Cn(e);
  for (let l = !1; ; ) {
    if (s.done && o.done) return r ? be.createSet(i, r) : xt.create(i);
    if (s.ins == 0) Me(i, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done) Me(i, 0, o.ins, l), r && _t(r, i, o.text), o.next();
    else {
      if (s.done || o.done) throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len),
          h = i.length;
        if (s.ins == -1) {
          let u = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Me(i, a, u, l), r && u && _t(r, i, o.text);
        } else
          o.ins == -1
            ? (Me(i, s.off ? 0 : s.len, a, l), r && _t(r, i, s.textBit(a)))
            : (Me(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && _t(r, i, o.text));
        (l = (s.ins > a || (o.ins >= 0 && o.len > a)) && (l || i.length > h)),
          s.forward2(a),
          o.forward(a);
      }
    }
  }
}
class Cn {
  constructor(e) {
    (this.set = e), (this.i = 0), this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0);
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set,
      t = (this.i - 2) >> 1;
    return t >= e.length ? J.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set,
      i = (this.i - 2) >> 1;
    return i >= t.length && !e ? J.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e));
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
        ? this.next()
        : ((this.ins -= e), (this.off += e));
  }
}
class di {
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.flags = i);
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, r;
    return (
      this.empty
        ? (i = r = e.mapPos(this.from, t))
        : ((i = e.mapPos(this.from, 1)), (r = e.mapPos(this.to, -1))),
      i == this.from && r == this.to ? this : new di(i, r, this.flags)
    );
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return w.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return w.range(this.anchor, i);
  }
  eq(e, t = !1) {
    return (
      this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc)
    );
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != "number" || typeof e.head != "number")
      throw new RangeError("Invalid JSON representation for SelectionRange");
    return w.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new di(e, t, i);
  }
}
class w {
  constructor(e, t) {
    (this.ranges = e), (this.mainIndex = t);
  }
  map(e, t = -1) {
    return e.empty
      ? this
      : w.create(
          this.ranges.map((i) => i.map(e, t)),
          this.mainIndex
        );
  }
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
    for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(e.ranges[i], t)) return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new w([this.main], 0);
  }
  addRange(e, t = !0) {
    return w.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return (i[t] = e), w.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != "number" || e.main >= e.ranges.length)
      throw new RangeError("Invalid JSON representation for EditorSelection");
    return new w(
      e.ranges.map((t) => di.fromJSON(t)),
      e.main
    );
  }
  static single(e, t = e) {
    return new w([w.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0) throw new RangeError("A selection needs at least one range");
    for (let i = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= i : s.from < i) return w.normalized(e.slice(), t);
      i = s.to;
    }
    return new w(e, t);
  }
  static cursor(e, t = 0, i, r) {
    return di.create(
      e,
      e,
      (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | ((r ?? 16777215) << 6)
    );
  }
  static range(e, t, i, r) {
    let s = ((i ?? 16777215) << 6) | (r == null ? 7 : Math.min(6, r));
    return t < e ? di.create(t, e, 48 | s) : di.create(e, t, (t > e ? 8 : 0) | s);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((r, s) => r.from - s.from), (t = e.indexOf(i));
    for (let r = 1; r < e.length; r++) {
      let s = e[r],
        o = e[r - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from,
          a = Math.max(s.to, o.to);
        r <= t && t--, e.splice(--r, 2, s.anchor > s.head ? w.range(a, l) : w.range(l, a));
      }
    }
    return new w(e, t);
  }
}
function Wu(n, e) {
  for (let t of n.ranges)
    if (t.to > e) throw new RangeError("Selection points outside of document");
}
let wl = 0;
class T {
  constructor(e, t, i, r, s) {
    (this.combine = e),
      (this.compareInput = t),
      (this.compare = i),
      (this.isStatic = r),
      (this.id = wl++),
      (this.default = e([])),
      (this.extensions = typeof s == "function" ? s(this) : s);
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new T(
      e.combine || ((t) => t),
      e.compareInput || ((t, i) => t === i),
      e.compare || (e.combine ? (t, i) => t === i : Ql),
      !!e.static,
      e.enables
    );
  }
  of(e) {
    return new kr([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new kr(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new kr(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Ql(n, e) {
  return n == e || (n.length == e.length && n.every((t, i) => t === e[i]));
}
class kr {
  constructor(e, t, i, r) {
    (this.dependencies = e), (this.facet = t), (this.type = i), (this.value = r), (this.id = wl++);
  }
  dynamicSlot(e) {
    var t;
    let i = this.value,
      r = this.facet.compareInput,
      s = this.id,
      o = e[s] >> 1,
      l = this.type == 2,
      a = !1,
      h = !1,
      u = [];
    for (let c of this.dependencies)
      c == "doc"
        ? (a = !0)
        : c == "selection"
          ? (h = !0)
          : ((t = e[c.id]) !== null && t !== void 0 ? t : 1) & 1 || u.push(e[c.id]);
    return {
      create(c) {
        return (c.values[o] = i(c)), 1;
      },
      update(c, f) {
        if ((a && f.docChanged) || (h && (f.docChanged || f.selection)) || po(c, u)) {
          let d = i(c);
          if (l ? !Sa(d, c.values[o], r) : !r(d, c.values[o])) return (c.values[o] = d), 1;
        }
        return 0;
      },
      reconfigure: (c, f) => {
        let d,
          p = f.config.address[s];
        if (p != null) {
          let O = Fr(f, p);
          if (
            this.dependencies.every((g) =>
              g instanceof T
                ? f.facet(g) === c.facet(g)
                : g instanceof Ae
                  ? f.field(g, !1) == c.field(g, !1)
                  : !0
            ) ||
            (l ? Sa((d = i(c)), O, r) : r((d = i(c)), O))
          )
            return (c.values[o] = O), 0;
        } else d = i(c);
        return (c.values[o] = d), 1;
      },
    };
  }
}
function Sa(n, e, t) {
  if (n.length != e.length) return !1;
  for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return !1;
  return !0;
}
function po(n, e) {
  let t = !1;
  for (let i of e) mn(n, i) & 1 && (t = !0);
  return t;
}
function Hp(n, e, t) {
  let i = t.map((a) => n[a.id]),
    r = t.map((a) => a.type),
    s = i.filter((a) => !(a & 1)),
    o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let u = 0; u < i.length; u++) {
      let c = Fr(a, i[u]);
      if (r[u] == 2) for (let f of c) h.push(f);
      else h.push(c);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i) mn(a, h);
      return (a.values[o] = l(a)), 1;
    },
    update(a, h) {
      if (!po(a, s)) return 0;
      let u = l(a);
      return e.compare(u, a.values[o]) ? 0 : ((a.values[o] = u), 1);
    },
    reconfigure(a, h) {
      let u = po(a, i),
        c = h.config.facets[e.id],
        f = h.facet(e);
      if (c && !u && Ql(t, c)) return (a.values[o] = f), 0;
      let d = l(a);
      return e.compare(d, f) ? ((a.values[o] = f), 0) : ((a.values[o] = d), 1);
    },
  };
}
const ba = T.define({ static: !0 });
class Ae {
  constructor(e, t, i, r, s) {
    (this.id = e),
      (this.createF = t),
      (this.updateF = i),
      (this.compareF = r),
      (this.spec = s),
      (this.provides = void 0);
  }
  static define(e) {
    let t = new Ae(wl++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(ba).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => ((i.values[t] = this.create(i)), 1),
      update: (i, r) => {
        let s = i.values[t],
          o = this.updateF(s, r);
        return this.compareF(s, o) ? 0 : ((i.values[t] = o), 1);
      },
      reconfigure: (i, r) =>
        r.config.address[this.id] != null
          ? ((i.values[t] = r.field(this)), 0)
          : ((i.values[t] = this.create(i)), 1),
    };
  }
  init(e) {
    return [this, ba.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const ci = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Ki(n) {
  return (e) => new ju(e, n);
}
const Di = {
  highest: Ki(ci.highest),
  high: Ki(ci.high),
  default: Ki(ci.default),
  low: Ki(ci.low),
  lowest: Ki(ci.lowest),
};
class ju {
  constructor(e, t) {
    (this.inner = e), (this.prec = t);
  }
}
class fs {
  of(e) {
    return new Oo(this, e);
  }
  reconfigure(e) {
    return fs.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class Oo {
  constructor(e, t) {
    (this.compartment = e), (this.inner = t);
  }
}
class Tr {
  constructor(e, t, i, r, s, o) {
    for (
      this.base = e,
        this.compartments = t,
        this.dynamicSlots = i,
        this.address = r,
        this.staticValues = s,
        this.facets = o,
        this.statusTemplate = [];
      this.statusTemplate.length < i.length;

    )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let r = [],
      s = Object.create(null),
      o = new Map();
    for (let f of Kp(e, t, o))
      f instanceof Ae ? r.push(f) : (s[f.facet.id] || (s[f.facet.id] = [])).push(f);
    let l = Object.create(null),
      a = [],
      h = [];
    for (let f of r) (l[f.id] = h.length << 1), h.push((d) => f.slot(d));
    let u = i == null ? void 0 : i.config.facets;
    for (let f in s) {
      let d = s[f],
        p = d[0].facet,
        O = (u && u[f]) || [];
      if (d.every((g) => g.type == 0))
        if (((l[p.id] = (a.length << 1) | 1), Ql(O, d))) a.push(i.facet(p));
        else {
          let g = p.combine(d.map((S) => S.value));
          a.push(i && p.compare(g, i.facet(p)) ? i.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0
            ? ((l[g.id] = (a.length << 1) | 1), a.push(g.value))
            : ((l[g.id] = h.length << 1), h.push((S) => g.dynamicSlot(S)));
        (l[p.id] = h.length << 1), h.push((g) => Hp(g, p, d));
      }
    }
    let c = h.map((f) => f(l));
    return new Tr(e, o, c, l, a, s);
  }
}
function Kp(n, e, t) {
  let i = [[], [], [], [], []],
    r = new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l) return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof Oo && t.delete(o.compartment);
    }
    if ((r.set(o, l), Array.isArray(o))) for (let h of o) s(h, l);
    else if (o instanceof Oo) {
      if (t.has(o.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), s(h, l);
    } else if (o instanceof ju) s(o.inner, o.prec);
    else if (o instanceof Ae) i[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof kr) i[l].push(o), o.facet.extensions && s(o.facet.extensions, ci.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(
          `Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
        );
      s(h, l);
    }
  }
  return s(n, ci.default), i.reduce((o, l) => o.concat(l));
}
function mn(n, e) {
  if (e & 1) return 2;
  let t = e >> 1,
    i = n.status[t];
  if (i == 4) throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2) return i;
  n.status[t] = 4;
  let r = n.computeSlot(n, n.config.dynamicSlots[t]);
  return (n.status[t] = 2 | r);
}
function Fr(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const Lu = T.define(),
  go = T.define({ combine: (n) => n.some((e) => e), static: !0 }),
  qu = T.define({ combine: (n) => (n.length ? n[0] : void 0), static: !0 }),
  Iu = T.define(),
  _u = T.define(),
  Vu = T.define(),
  Xu = T.define({ combine: (n) => (n.length ? n[0] : !1) });
class Dt {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  static define() {
    return new Jp();
  }
}
class Jp {
  of(e) {
    return new Dt(this, e);
  }
}
class eO {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new X(this, e);
  }
}
class X {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new X(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new eO(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let i = [];
    for (let r of e) {
      let s = r.map(t);
      s && i.push(s);
    }
    return i;
  }
}
X.reconfigure = X.define();
X.appendConfig = X.define();
class ye {
  constructor(e, t, i, r, s, o) {
    (this.startState = e),
      (this.changes = t),
      (this.selection = i),
      (this.effects = r),
      (this.annotations = s),
      (this.scrollIntoView = o),
      (this._doc = null),
      (this._state = null),
      i && Wu(i, t.newLength),
      s.some((l) => l.type == ye.time) || (this.annotations = s.concat(ye.time.of(Date.now())));
  }
  static create(e, t, i, r, s, o) {
    return new ye(e, t, i, r, s, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(ye.userEvent);
    return !!(
      t &&
      (t == e || (t.length > e.length && t.slice(0, e.length) == e && t[e.length] == "."))
    );
  }
}
ye.time = Dt.define();
ye.userEvent = Dt.define();
ye.addToHistory = Dt.define();
ye.remote = Dt.define();
function tO(n, e) {
  let t = [];
  for (let i = 0, r = 0; ; ) {
    let s, o;
    if (i < n.length && (r == e.length || e[r] >= n[i])) (s = n[i++]), (o = n[i++]);
    else if (r < e.length) (s = e[r++]), (o = e[r++]);
    else return t;
    !t.length || t[t.length - 1] < s ? t.push(s, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function Yu(n, e, t) {
  var i;
  let r, s, o;
  return (
    t
      ? ((r = e.changes), (s = be.empty(e.changes.length)), (o = n.changes.compose(e.changes)))
      : ((r = e.changes.map(n.changes)),
        (s = n.changes.mapDesc(e.changes, !0)),
        (o = n.changes.compose(r))),
    {
      changes: o,
      selection: e.selection
        ? e.selection.map(s)
        : (i = n.selection) === null || i === void 0
          ? void 0
          : i.map(r),
      effects: X.mapEffects(n.effects, r).concat(X.mapEffects(e.effects, s)),
      annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
      scrollIntoView: n.scrollIntoView || e.scrollIntoView,
    }
  );
}
function mo(n, e, t) {
  let i = e.selection,
    r = Bi(e.annotations);
  return (
    e.userEvent && (r = r.concat(ye.userEvent.of(e.userEvent))),
    {
      changes: e.changes instanceof be ? e.changes : be.of(e.changes || [], t, n.facet(qu)),
      selection: i && (i instanceof w ? i : w.single(i.anchor, i.head)),
      effects: Bi(e.effects),
      annotations: r,
      scrollIntoView: !!e.scrollIntoView,
    }
  );
}
function Nu(n, e, t) {
  let i = mo(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (t = !1);
    let o = !!e[s].sequential;
    i = Yu(i, mo(n, e[s], o ? i.changes.newLength : n.doc.length), o);
  }
  let r = ye.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return nO(t ? iO(r) : r);
}
function iO(n) {
  let e = n.startState,
    t = !0;
  for (let r of e.facet(Iu)) {
    let s = r(n);
    if (s === !1) {
      t = !1;
      break;
    }
    Array.isArray(s) && (t = t === !0 ? s : tO(t, s));
  }
  if (t !== !0) {
    let r, s;
    if (t === !1) (s = n.changes.invertedDesc), (r = be.empty(e.doc.length));
    else {
      let o = n.changes.filter(t);
      (r = o.changes), (s = o.filtered.mapDesc(o.changes).invertedDesc);
    }
    n = ye.create(
      e,
      r,
      n.selection && n.selection.map(s),
      X.mapEffects(n.effects, s),
      n.annotations,
      n.scrollIntoView
    );
  }
  let i = e.facet(_u);
  for (let r = i.length - 1; r >= 0; r--) {
    let s = i[r](n);
    s instanceof ye
      ? (n = s)
      : Array.isArray(s) && s.length == 1 && s[0] instanceof ye
        ? (n = s[0])
        : (n = Nu(e, Bi(s), !1));
  }
  return n;
}
function nO(n) {
  let e = n.startState,
    t = e.facet(Vu),
    i = n;
  for (let r = t.length - 1; r >= 0; r--) {
    let s = t[r](n);
    s && Object.keys(s).length && (i = Yu(i, mo(e, s, n.changes.newLength), !0));
  }
  return i == n
    ? n
    : ye.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const rO = [];
function Bi(n) {
  return n == null ? rO : Array.isArray(n) ? n : [n];
}
var ue = (function (n) {
  return (n[(n.Word = 0)] = "Word"), (n[(n.Space = 1)] = "Space"), (n[(n.Other = 2)] = "Other"), n;
})(ue || (ue = {}));
const sO =
  /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let So;
try {
  So = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {}
function oO(n) {
  if (So) return So.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || (t > "" && (t.toUpperCase() != t.toLowerCase() || sO.test(t)))) return !0;
  }
  return !1;
}
function lO(n) {
  return (e) => {
    if (!/\S/.test(e)) return ue.Space;
    if (oO(e)) return ue.Word;
    for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return ue.Word;
    return ue.Other;
  };
}
class U {
  constructor(e, t, i, r, s, o) {
    (this.config = e),
      (this.doc = t),
      (this.selection = i),
      (this.values = r),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = s),
      o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) mn(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t) throw new RangeError("Field is not present in this state");
      return;
    }
    return mn(this, i), Fr(this, i);
  }
  update(...e) {
    return Nu(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config,
      { base: i, compartments: r } = t;
    for (let l of e.effects)
      l.is(fs.reconfigure)
        ? (t && ((r = new Map()), t.compartments.forEach((a, h) => r.set(h, a)), (t = null)),
          r.set(l.value.compartment, l.value.extension))
        : l.is(X.reconfigure)
          ? ((t = null), (i = l.value))
          : l.is(X.appendConfig) && ((t = null), (i = Bi(i).concat(l.value)));
    let s;
    t
      ? (s = e.startState.values.slice())
      : ((t = Tr.resolve(i, r, this)),
        (s = new U(
          t,
          this.doc,
          this.selection,
          t.dynamicSlots.map(() => null),
          (a, h) => h.reconfigure(a, this),
          null
        ).values));
    let o = e.startState.facet(go) ? e.newSelection : e.newSelection.asSingle();
    new U(t, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return (
      typeof e == "string" && (e = this.toText(e)),
      this.changeByRange((t) => ({
        changes: { from: t.from, to: t.to, insert: e },
        range: w.cursor(t.from + e.length),
      }))
    );
  }
  changeByRange(e) {
    let t = this.selection,
      i = e(t.ranges[0]),
      r = this.changes(i.changes),
      s = [i.range],
      o = Bi(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]),
        h = this.changes(a.changes),
        u = h.map(r);
      for (let f = 0; f < l; f++) s[f] = s[f].map(u);
      let c = r.mapDesc(h, !0);
      s.push(a.range.map(c)),
        (r = r.compose(u)),
        (o = X.mapEffects(o, u).concat(X.mapEffects(Bi(a.effects), c)));
    }
    return { changes: r, selection: w.create(s, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof be ? e : be.of(e, this.doc.length, this.facet(U.lineSeparator));
  }
  toText(e) {
    return J.of(e.split(this.facet(U.lineSeparator) || uo));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (mn(this, t), Fr(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let i in e) {
        let r = e[i];
        r instanceof Ae &&
          this.config.address[r.id] != null &&
          (t[i] = r.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != "string")
      throw new RangeError("Invalid JSON representation for EditorState");
    let r = [];
    if (i) {
      for (let s in i)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = i[s],
            l = e[s];
          r.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return U.create({
      doc: e.doc,
      selection: w.fromJSON(e.selection),
      extensions: t.extensions ? r.concat([t.extensions]) : r,
    });
  }
  static create(e = {}) {
    let t = Tr.resolve(e.extensions || [], new Map()),
      i =
        e.doc instanceof J
          ? e.doc
          : J.of((e.doc || "").split(t.staticFacet(U.lineSeparator) || uo)),
      r = e.selection
        ? e.selection instanceof w
          ? e.selection
          : w.single(e.selection.anchor, e.selection.head)
        : w.single(0);
    return (
      Wu(r, i.length),
      t.staticFacet(go) || (r = r.asSingle()),
      new U(
        t,
        i,
        r,
        t.dynamicSlots.map(() => null),
        (s, o) => o.create(s),
        null
      )
    );
  }
  get tabSize() {
    return this.facet(U.tabSize);
  }
  get lineBreak() {
    return (
      this.facet(U.lineSeparator) ||
      `
`
    );
  }
  get readOnly() {
    return this.facet(Xu);
  }
  phrase(e, ...t) {
    for (let i of this.facet(U.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return (
      t.length &&
        (e = e.replace(/\$(\$|\d*)/g, (i, r) => {
          if (r == "$") return "$";
          let s = +(r || 1);
          return !s || s > t.length ? i : t[s - 1];
        })),
      e
    );
  }
  languageDataAt(e, t, i = -1) {
    let r = [];
    for (let s of this.facet(Lu))
      for (let o of s(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
  }
  charCategorizer(e) {
    return lO(this.languageDataAt("wordChars", e).join(""));
  }
  wordAt(e) {
    let { text: t, from: i, length: r } = this.doc.lineAt(e),
      s = this.charCategorizer(e),
      o = e - i,
      l = e - i;
    for (; o > 0; ) {
      let a = Pe(t, o, !1);
      if (s(t.slice(a, o)) != ue.Word) break;
      o = a;
    }
    for (; l < r; ) {
      let a = Pe(t, l);
      if (s(t.slice(l, a)) != ue.Word) break;
      l = a;
    }
    return o == l ? null : w.range(o + i, l + i);
  }
}
U.allowMultipleSelections = go;
U.tabSize = T.define({ combine: (n) => (n.length ? n[0] : 4) });
U.lineSeparator = qu;
U.readOnly = Xu;
U.phrases = T.define({
  compare(n, e) {
    let t = Object.keys(n),
      i = Object.keys(e);
    return t.length == i.length && t.every((r) => n[r] == e[r]);
  },
});
U.languageData = Lu;
U.changeFilter = Iu;
U.transactionFilter = _u;
U.transactionExtender = Vu;
fs.reconfigure = X.define();
function Ct(n, e, t = {}) {
  let i = {};
  for (let r of n)
    for (let s of Object.keys(r)) {
      let o = r[s],
        l = i[s];
      if (l === void 0) i[s] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, s)) i[s] = t[s](l, o);
        else throw new Error("Config merge conflict for field " + s);
    }
  for (let r in e) i[r] === void 0 && (i[r] = e[r]);
  return i;
}
class Si {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return bo.create(e, t, this);
  }
}
Si.prototype.startSide = Si.prototype.endSide = 0;
Si.prototype.point = !1;
Si.prototype.mapMode = Re.TrackDel;
let bo = class Gu {
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.value = i);
  }
  static create(e, t, i) {
    return new Gu(e, t, i);
  }
};
function yo(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Pl {
  constructor(e, t, i, r) {
    (this.from = e), (this.to = t), (this.value = i), (this.maxPoint = r);
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, r = 0) {
    let s = i ? this.to : this.from;
    for (let o = r, l = s.length; ; ) {
      if (o == l) return o;
      let a = (o + l) >> 1,
        h = s[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) return h >= 0 ? o : l;
      h >= 0 ? (l = a) : (o = a + 1);
    }
  }
  between(e, t, i, r) {
    for (let s = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, s); s < o; s++)
      if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1) return !1;
  }
  map(e, t) {
    let i = [],
      r = [],
      s = [],
      o = -1,
      l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a],
        u = this.from[a] + e,
        c = this.to[a] + e,
        f,
        d;
      if (u == c) {
        let p = t.mapPos(u, h.startSide, h.mapMode);
        if (
          p == null ||
          ((f = d = p), h.startSide != h.endSide && ((d = t.mapPos(u, h.endSide)), d < f))
        )
          continue;
      } else if (
        ((f = t.mapPos(u, h.startSide)),
        (d = t.mapPos(c, h.endSide)),
        f > d || (f == d && h.startSide > 0 && h.endSide <= 0))
      )
        continue;
      (d - f || h.endSide - h.startSide) < 0 ||
        (o < 0 && (o = f),
        h.point && (l = Math.max(l, d - f)),
        i.push(h),
        r.push(f - o),
        s.push(d - o));
    }
    return { mapped: i.length ? new Pl(r, s, i, l) : null, pos: o };
  }
}
class K {
  constructor(e, t, i, r) {
    (this.chunkPos = e), (this.chunk = t), (this.nextLayer = i), (this.maxPoint = r);
  }
  static create(e, t, i, r) {
    return new K(e, t, i, r);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: r = 0, filterTo: s = this.length } = e,
      o = e.filter;
    if (t.length == 0 && !o) return this;
    if ((i && (t = t.slice().sort(yo)), this.isEmpty)) return t.length ? K.of(t) : this;
    let l = new Uu(this, null, -1).goto(0),
      a = 0,
      h = [],
      u = new Ht();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let c = t[a++];
        u.addInner(c.from, c.to, c.value) || h.push(c);
      } else
        l.rangeIndex == 1 &&
        l.chunkIndex < this.chunk.length &&
        (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
        (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) &&
        u.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
          ? l.nextChunk()
          : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) &&
              (u.addInner(l.from, l.to, l.value) || h.push(bo.create(l.from, l.to, l.value))),
            l.next());
    return u.finishInner(
      this.nextLayer.isEmpty && !h.length
        ? K.empty
        : this.nextLayer.update({ add: h, filter: o, filterFrom: r, filterTo: s })
    );
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [],
      i = [],
      r = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o],
        a = this.chunk[o],
        h = e.touchesRange(l, l + a.length);
      if (h === !1) (r = Math.max(r, a.maxPoint)), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: u, pos: c } = a.map(l, e);
        u && ((r = Math.max(r, u.maxPoint)), t.push(u), i.push(c));
      }
    }
    let s = this.nextLayer.map(e);
    return t.length == 0 ? s : new K(i, t, s || K.empty, r);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r],
          o = this.chunk[r];
        if (t >= s && e <= s + o.length && o.between(s, e - s, t - s, i) === !1) return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return vn.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return vn.from(e).goto(t);
  }
  static compare(e, t, i, r, s = -1) {
    let o = e.filter((c) => c.maxPoint > 0 || (!c.isEmpty && c.maxPoint >= s)),
      l = t.filter((c) => c.maxPoint > 0 || (!c.isEmpty && c.maxPoint >= s)),
      a = ya(o, l, i),
      h = new Ji(o, a, s),
      u = new Ji(l, a, s);
    i.iterGaps((c, f, d) => xa(h, c, u, f, d, r)), i.empty && i.length == 0 && xa(h, 0, u, 0, 0, r);
  }
  static eq(e, t, i = 0, r) {
    r == null && (r = 1e9 - 1);
    let s = e.filter((u) => !u.isEmpty && t.indexOf(u) < 0),
      o = t.filter((u) => !u.isEmpty && e.indexOf(u) < 0);
    if (s.length != o.length) return !1;
    if (!s.length) return !0;
    let l = ya(s, o),
      a = new Ji(s, l, 0).goto(i),
      h = new Ji(o, l, 0).goto(i);
    for (;;) {
      if (
        a.to != h.to ||
        !xo(a.active, h.active) ||
        (a.point && (!h.point || !a.point.eq(h.point)))
      )
        return !1;
      if (a.to > r) return !0;
      a.next(), h.next();
    }
  }
  static spans(e, t, i, r, s = -1) {
    let o = new Ji(e, null, s).goto(t),
      l = t,
      a = o.openStart;
    for (;;) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let u = o.activeForPoint(o.to),
          c =
            o.pointFrom < t
              ? u.length + 1
              : o.point.startSide < 0
                ? u.length
                : Math.min(u.length, a);
        r.point(l, h, o.point, u, c, o.pointRank), (a = Math.min(o.openEnd(h), u.length));
      } else h > l && (r.span(l, h, o.active, a), (a = o.openEnd(h)));
      if (o.to > i) return a + (o.point && o.to > i ? 1 : 0);
      (l = o.to), o.next();
    }
  }
  static of(e, t = !1) {
    let i = new Ht();
    for (let r of e instanceof bo ? [e] : t ? aO(e) : e) i.add(r.from, r.to, r.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length) return K.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let r = e[i]; r != K.empty; r = r.nextLayer)
        t = new K(r.chunkPos, r.chunk, t, Math.max(r.maxPoint, t.maxPoint));
    return t;
  }
}
K.empty = new K([], [], null, -1);
function aO(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (yo(e, i) > 0) return n.slice().sort(yo);
      e = i;
    }
  return n;
}
K.empty.nextLayer = K.empty;
class Ht {
  finishChunk(e) {
    this.chunks.push(new Pl(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []));
  }
  constructor() {
    (this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null);
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new Ht())).add(e, t, i);
  }
  addInner(e, t, i) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(t - this.chunkStart),
        (this.last = i),
        (this.lastFrom = e),
        (this.lastTo = t),
        this.value.push(i),
        i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
        !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
      this.chunks.push(t),
      this.chunkPos.push(e);
    let i = t.value.length - 1;
    return (
      (this.last = t.value[i]), (this.lastFrom = t.from[i] + e), (this.lastTo = t.to[i] + e), !0
    );
  }
  finish() {
    return this.finishInner(K.empty);
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0)) return e;
    let t = K.create(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint
    );
    return (this.from = null), t;
  }
}
function ya(n, e, t) {
  let i = new Map();
  for (let s of n)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
  let r = new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = i.get(s.chunk[o]);
      l != null &&
        (t ? t.mapPos(l) : l) == s.chunkPos[o] &&
        !(t != null && t.touchesRange(l, l + s.chunk[o].length)) &&
        r.add(s.chunk[o]);
    }
  return r;
}
class Uu {
  constructor(e, t, i, r = 0) {
    (this.layer = e), (this.skip = t), (this.minPoint = i), (this.rank = r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let r = this.layer.chunk[this.chunkIndex];
      if (
        !(
          (this.skip && this.skip.has(r)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          r.maxPoint < this.minPoint
        )
      )
        break;
      this.chunkIndex++, (i = !1);
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        t,
        !0
      );
      (!i || this.rangeIndex < r) && this.setRangeIndex(r);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        (this.from = this.to = 1e9), (this.value = null);
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          i = e + t.from[this.rangeIndex];
        if (
          ((this.from = i),
          (this.to = e + t.to[this.rangeIndex]),
          (this.value = t.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint))
        )
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next();
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    );
  }
}
class vn {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && r.push(new Uu(o, t, i, s));
    return r.length == 1 ? r[0] : new vn(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap) i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) As(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap) i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) As(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
    else {
      let e = this.heap[0];
      (this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        As(this.heap, 0);
    }
  }
}
function As(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length) break;
    let r = n[i];
    if ((i + 1 < n.length && r.compare(n[i + 1]) >= 0 && ((r = n[i + 1]), i++), t.compare(r) < 0))
      break;
    (n[i] = t), (n[e] = r), (e = i);
  }
}
class Ji {
  constructor(e, t, i) {
    (this.minPoint = i),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = vn.from(e, t, i));
  }
  goto(e, t = -1e9) {
    return (
      this.cursor.goto(e, t),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = t),
      (this.openStart = -1),
      this.next(),
      this
    );
  }
  forward(e, t) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;

    )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Kn(this.active, e),
      Kn(this.activeTo, e),
      Kn(this.activeRank, e),
      (this.minActive = ka(this.active, this.activeTo));
  }
  addActive(e) {
    let t = 0,
      { value: i, to: r, rank: s } = this.cursor;
    for (; t < this.activeRank.length && (s - this.activeRank[t] || r - this.activeTo[t]) > 0; )
      t++;
    Jn(this.active, t, i),
      Jn(this.activeTo, t, r),
      Jn(this.activeRank, t, s),
      e && Jn(e, t, this.cursor.from),
      (this.minActive = ka(this.active, this.activeTo));
  }
  next() {
    let e = this.to,
      t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (;;) {
      let r = this.minActive;
      if (
        r > -1 &&
        (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[r] > e) {
          (this.to = this.activeTo[r]), (this.endSide = this.active[r].endSide);
          break;
        }
        this.removeActive(r), i && Kn(i, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          (this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point) this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            (this.point = s),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = s.endSide),
              this.cursor.next(),
              this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let r = i.length - 1; r >= 0 && i[r] < e; r--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e ||
        (this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide)) &&
        t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++;
    return t;
  }
}
function xa(n, e, t, i, r, s) {
  n.goto(e), t.goto(i);
  let o = i + r,
    l = i,
    a = i - e;
  for (;;) {
    let h = n.to + a - t.to || n.endSide - t.endSide,
      u = h < 0 ? n.to + a : t.to,
      c = Math.min(u, o);
    if (
      (n.point || t.point
        ? (n.point &&
            t.point &&
            (n.point == t.point || n.point.eq(t.point)) &&
            xo(n.activeForPoint(n.to), t.activeForPoint(t.to))) ||
          s.comparePoint(l, c, n.point, t.point)
        : c > l && !xo(n.active, t.active) && s.compareRange(l, c, n.active, t.active),
      u > o)
    )
      break;
    (l = u), h <= 0 && n.next(), h >= 0 && t.next();
  }
}
function xo(n, e) {
  if (n.length != e.length) return !1;
  for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !n[t].eq(e[t])) return !1;
  return !0;
}
function Kn(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
  n.pop();
}
function Jn(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
  n[e] = t;
}
function ka(n, e) {
  let t = -1,
    i = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - i || n[r].endSide - n[t].endSide) < 0 && ((t = r), (i = e[r]));
  return t;
}
function Ni(n, e, t = n.length) {
  let i = 0;
  for (let r = 0; r < t; ) n.charCodeAt(r) == 9 ? ((i += e - (i % e)), r++) : (i++, (r = Pe(n, r)));
  return i;
}
function ko(n, e, t, i) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e) return r;
    if (r == n.length) break;
    (s += n.charCodeAt(r) == 9 ? t - (s % t) : 1), (r = Pe(n, r));
  }
  return i === !0 ? -1 : n.length;
}
const Do = "ͼ",
  Da = typeof Symbol > "u" ? "__" + Do : Symbol.for(Do),
  Co = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"),
  Ca = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class Kt {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function r(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, a, h) {
      let u = [],
        c = /^@(\w+)\b/.exec(o[0]),
        f = c && c[1] == "keyframes";
      if (c && l == null) return a.push(o[0] + ";");
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          s(
            d
              .split(/,\s*/)
              .map((O) => o.map((g) => O.replace(/&/, g)))
              .reduce((O, g) => O.concat(g)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!c)
            throw new RangeError(
              "The value of a property (" + d + ") should be a primitive value."
            );
          s(r(d), p, u, f);
        } else
          p != null &&
            u.push(
              d.replace(/_.*/, "").replace(/[A-Z]/g, (O) => "-" + O.toLowerCase()) + ": " + p + ";"
            );
      }
      (u.length || f) &&
        a.push((i && !c && !h ? o.map(i) : o).join(", ") + " {" + u.join(" ") + "}");
    }
    for (let o in e) s(r(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Ca[Da] || 1;
    return (Ca[Da] = e + 1), Do + e.toString(36);
  }
  static mount(e, t, i) {
    let r = e[Co],
      s = i && i.nonce;
    r ? s && r.setNonce(s) : (r = new hO(e, s)), r.mount(Array.isArray(t) ? t : [t], e);
  }
}
let va = new Map();
class hO {
  constructor(e, t) {
    let i = e.ownerDocument || e,
      r = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = va.get(i);
      if (s) return (e[Co] = s);
      (this.sheet = new r.CSSStyleSheet()), va.set(i, this);
    } else (this.styleTag = i.createElement("style")), t && this.styleTag.setAttribute("nonce", t);
    (this.modules = []), (e[Co] = this);
  }
  mount(e, t) {
    let i = this.sheet,
      r = 0,
      s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = this.modules.indexOf(l);
      if ((a < s && a > -1 && (this.modules.splice(a, 1), s--, (a = -1)), a == -1)) {
        if ((this.modules.splice(s++, 0, l), i))
          for (let h = 0; h < l.rules.length; h++) i.insertRule(l.rules[h], r++);
      } else {
        for (; s < a; ) r += this.modules[s++].rules.length;
        (r += l.rules.length), s++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 &&
        (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o +=
          this.modules[a].getRules() +
          `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag &&
      this.styleTag.getAttribute("nonce") != e &&
      this.styleTag.setAttribute("nonce", e);
  }
}
var Jt = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
  },
  wn = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"',
  },
  uO = typeof navigator < "u" && /Mac/.test(navigator.platform),
  cO =
    typeof navigator < "u" &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Qe = 0; Qe < 10; Qe++) Jt[48 + Qe] = Jt[96 + Qe] = String(Qe);
for (var Qe = 1; Qe <= 24; Qe++) Jt[Qe + 111] = "F" + Qe;
for (var Qe = 65; Qe <= 90; Qe++)
  (Jt[Qe] = String.fromCharCode(Qe + 32)), (wn[Qe] = String.fromCharCode(Qe));
for (var Ms in Jt) wn.hasOwnProperty(Ms) || (wn[Ms] = Jt[Ms]);
function fO(n) {
  var e =
      (uO && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey) ||
      (cO && n.shiftKey && n.key && n.key.length == 1) ||
      n.key == "Unidentified",
    t = (!e && n.key) || (n.shiftKey ? wn : Jt)[n.keyCode] || n.key || "Unidentified";
  return (
    t == "Esc" && (t = "Escape"),
    t == "Del" && (t = "Delete"),
    t == "Left" && (t = "ArrowLeft"),
    t == "Up" && (t = "ArrowUp"),
    t == "Right" && (t = "ArrowRight"),
    t == "Down" && (t = "ArrowDown"),
    t
  );
}
function Qn(n) {
  let e;
  return n.nodeType == 11 ? (e = n.getSelection ? n : n.ownerDocument) : (e = n), e.getSelection();
}
function vo(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Dr(n, e) {
  if (!e.anchorNode) return !1;
  try {
    return vo(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Li(n) {
  return n.nodeType == 3
    ? yi(n, 0, n.nodeValue.length).getClientRects()
    : n.nodeType == 1
      ? n.getClientRects()
      : [];
}
function Sn(n, e, t, i) {
  return t ? wa(n, e, t, i, -1) || wa(n, e, t, i, 1) : !1;
}
function bi(n) {
  for (var e = 0; ; e++) if (((n = n.previousSibling), !n)) return e;
}
function zr(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function wa(n, e, t, i, r) {
  for (;;) {
    if (n == t && e == i) return !0;
    if (e == (r < 0 ? 0 : kt(n))) {
      if (n.nodeName == "DIV") return !1;
      let s = n.parentNode;
      if (!s || s.nodeType != 1) return !1;
      (e = bi(n) + (r < 0 ? 0 : 1)), (n = s);
    } else if (n.nodeType == 1) {
      if (
        ((n = n.childNodes[e + (r < 0 ? -1 : 0)]), n.nodeType == 1 && n.contentEditable == "false")
      )
        return !1;
      e = r < 0 ? kt(n) : 0;
    } else return !1;
  }
}
function kt(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function qn(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function dO(n) {
  let e = n.visualViewport;
  return e
    ? { left: 0, right: e.width, top: 0, bottom: e.height }
    : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function Hu(n, e) {
  let t = e.width / n.offsetWidth,
    i = e.height / n.offsetHeight;
  return (
    ((t > 0.995 && t < 1.005) || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1),
    ((i > 0.995 && i < 1.005) || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) &&
      (i = 1),
    { scaleX: t, scaleY: i }
  );
}
function pO(n, e, t, i, r, s, o, l) {
  let a = n.ownerDocument,
    h = a.defaultView || window;
  for (let u = n, c = !1; u && !c; )
    if (u.nodeType == 1) {
      let f,
        d = u == a.body,
        p = 1,
        O = 1;
      if (d) f = dO(h);
      else {
        if (
          (/^(fixed|sticky)$/.test(getComputedStyle(u).position) && (c = !0),
          u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth)
        ) {
          u = u.assignedSlot || u.parentNode;
          continue;
        }
        let b = u.getBoundingClientRect();
        ({ scaleX: p, scaleY: O } = Hu(u, b)),
          (f = {
            left: b.left,
            right: b.left + u.clientWidth * p,
            top: b.top,
            bottom: b.top + u.clientHeight * O,
          });
      }
      let g = 0,
        S = 0;
      if (r == "nearest")
        e.top < f.top
          ? ((S = -(f.top - e.top + o)),
            t > 0 && e.bottom > f.bottom + S && (S = e.bottom - f.bottom + S + o))
          : e.bottom > f.bottom &&
            ((S = e.bottom - f.bottom + o),
            t < 0 && e.top - S < f.top && (S = -(f.top + S - e.top + o)));
      else {
        let b = e.bottom - e.top,
          D = f.bottom - f.top;
        S =
          (r == "center" && b <= D
            ? e.top + b / 2 - D / 2
            : r == "start" || (r == "center" && t < 0)
              ? e.top - o
              : e.bottom - D + o) - f.top;
      }
      if (
        (i == "nearest"
          ? e.left < f.left
            ? ((g = -(f.left - e.left + s)),
              t > 0 && e.right > f.right + g && (g = e.right - f.right + g + s))
            : e.right > f.right &&
              ((g = e.right - f.right + s),
              t < 0 && e.left < f.left + g && (g = -(f.left + g - e.left + s)))
          : (g =
              (i == "center"
                ? e.left + (e.right - e.left) / 2 - (f.right - f.left) / 2
                : (i == "start") == l
                  ? e.left - s
                  : e.right - (f.right - f.left) + s) - f.left),
        g || S)
      )
        if (d) h.scrollBy(g, S);
        else {
          let b = 0,
            D = 0;
          if (S) {
            let v = u.scrollTop;
            (u.scrollTop += S / O), (D = (u.scrollTop - v) * O);
          }
          if (g) {
            let v = u.scrollLeft;
            (u.scrollLeft += g / p), (b = (u.scrollLeft - v) * p);
          }
          (e = { left: e.left - b, top: e.top - D, right: e.right - b, bottom: e.bottom - D }),
            b && Math.abs(b - g) < 1 && (i = "nearest"),
            D && Math.abs(D - S) < 1 && (r = "nearest");
        }
      if (d) break;
      u = u.assignedSlot || u.parentNode;
    } else if (u.nodeType == 11) u = u.host;
    else break;
}
function OO(n) {
  let e = n.ownerDocument,
    t,
    i;
  for (let r = n.parentNode; r && !(r == e.body || (t && i)); )
    if (r.nodeType == 1)
      !i && r.scrollHeight > r.clientHeight && (i = r),
        !t && r.scrollWidth > r.clientWidth && (t = r),
        (r = r.assignedSlot || r.parentNode);
    else if (r.nodeType == 11) r = r.host;
    else break;
  return { x: t, y: i };
}
class gO {
  constructor() {
    (this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0);
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    );
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? kt(t) : 0), i, Math.min(e.focusOffset, i ? kt(i) : 0));
  }
  set(e, t, i, r) {
    (this.anchorNode = e), (this.anchorOffset = t), (this.focusNode = i), (this.focusOffset = r);
  }
}
let vi = null;
function Ku(n) {
  if (n.setActive) return n.setActive();
  if (vi) return n.focus(vi);
  let e = [];
  for (
    let t = n;
    t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
    t = t.parentNode
  );
  if (
    (n.focus(
      vi == null
        ? {
            get preventScroll() {
              return (vi = { preventScroll: !0 }), !0;
            },
          }
        : void 0
    ),
    !vi)
  ) {
    vi = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++],
        r = e[t++],
        s = e[t++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
let Qa;
function yi(n, e, t = e) {
  let i = Qa || (Qa = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Ri(n, e, t, i) {
  let r = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i);
  let s = new KeyboardEvent("keydown", r);
  (s.synthetic = !0), n.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", r);
  return (o.synthetic = !0), n.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function mO(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || (n.nodeType == 11 && n.host))) return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function Ju(n) {
  for (; n.attributes.length; ) n.removeAttributeNode(n.attributes[0]);
}
function SO(n, e) {
  let t = e.focusNode,
    i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i) return !1;
  for (i = Math.min(i, kt(t)); ; )
    if (i) {
      if (t.nodeType != 1) return !1;
      let r = t.childNodes[i - 1];
      r.contentEditable == "false" ? i-- : ((t = r), (i = kt(t)));
    } else {
      if (t == n) return !0;
      (i = bi(t)), (t = t.parentNode);
    }
}
function ec(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function tc(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0) return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == "false") return null;
      (t = t.childNodes[i - 1]), (i = kt(t));
    } else if (t.parentNode && !zr(t)) (i = bi(t)), (t = t.parentNode);
    else return null;
  }
}
function ic(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == "false") return null;
      (t = t.childNodes[i]), (i = 0);
    } else if (t.parentNode && !zr(t)) (i = bi(t) + 1), (t = t.parentNode);
    else return null;
  }
}
class $e {
  constructor(e, t, i = !0) {
    (this.node = e), (this.offset = t), (this.precise = i);
  }
  static before(e, t) {
    return new $e(e.parentNode, bi(e), t);
  }
  static after(e, t) {
    return new $e(e.parentNode, bi(e) + 1, t);
  }
}
const Al = [];
class ne {
  constructor() {
    (this.parent = null), (this.dom = null), (this.flags = 2);
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e) return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError("Invalid child in posBefore");
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom,
        r = null,
        s;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (s = r ? r.nextSibling : i.firstChild)) {
            let l = ne.get(s);
            (!l || (!l.parent && l.canReuseDOM(o))) && o.reuseDOM(s);
          }
          o.sync(e, t), (o.flags &= -8);
        }
        if (
          ((s = r ? r.nextSibling : i.firstChild),
          t && !t.written && t.node == i && s != o.dom && (t.written = !0),
          o.dom.parentNode == i)
        )
          for (; s && s != o.dom; ) s = Pa(s);
        else i.insertBefore(o.dom, s);
        r = o.dom;
      }
      for (s = r ? r.nextSibling : i.firstChild, s && t && t.node == i && (t.written = !0); s; )
        s = Pa(s);
    } else if (this.flags & 1)
      for (let i of this.children) i.flags & 7 && (i.sync(e, t), (i.flags &= -8));
  }
  reuseDOM(e) {}
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom) i = this.dom.childNodes[t];
    else {
      let r = kt(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (;;) {
        let s = e.parentNode;
        if (s == this.dom) break;
        r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? (r = -1) : (r = 1)), (e = s);
      }
      r < 0 ? (i = e) : (i = e.nextSibling);
    }
    if (i == this.dom.firstChild) return 0;
    for (; i && !ne.get(i); ) i = i.nextSibling;
    if (!i) return this.length;
    for (let r = 0, s = 0; ; r++) {
      let o = this.children[r];
      if (o.dom == i) return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let r = -1,
      s = -1,
      o = -1,
      l = -1;
    for (let a = 0, h = i, u = i; a < this.children.length; a++) {
      let c = this.children[a],
        f = h + c.length;
      if (h < e && f > t) return c.domBoundsAround(e, t, h);
      if ((f >= e && r == -1 && ((r = a), (s = h)), h > t && c.dom.parentNode == this.dom)) {
        (o = a), (l = u);
        break;
      }
      (u = f), (h = f + c.breakAfter);
    }
    return {
      from: s,
      to: l < 0 ? i + this.length : l,
      startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null,
    };
  }
  markDirty(e = !1) {
    (this.flags |= 2), this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if ((e && (t.flags |= 2), t.flags & 1)) return;
      (t.flags |= 1), (e = !1);
    }
  }
  setParent(e) {
    this.parent != e && ((this.parent = e), this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this));
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t) return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = Al) {
    this.markDirty();
    for (let r = e; r < t; r++) {
      let s = this.children[r];
      s.parent == this && i.indexOf(s) < 0 && s.destroy();
    }
    i.length < 250
      ? this.children.splice(e, t - e, ...i)
      : (this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t)));
    for (let r = 0; r < i.length; r++) i[r].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new nc(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace("View", "");
    return (
      e +
      (this.children.length
        ? "(" + this.children.join() + ")"
        : this.length
          ? "[" + (e == "Text" ? this.text : this.length) + "]"
          : "") +
      (this.breakAfter ? "#" : "")
    );
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, r, s, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children) e.parent == this && e.destroy();
    this.parent = null;
  }
}
ne.prototype.breakAfter = 0;
function Pa(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class nc {
  constructor(e, t, i) {
    (this.children = e), (this.pos = t), (this.i = i), (this.off = 0);
  }
  findPos(e, t = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function rc(n, e, t, i, r, s, o, l, a) {
  let { children: h } = n,
    u = h.length ? h[e] : null,
    c = s.length ? s[s.length - 1] : null,
    f = c ? c.breakAfter : o;
  if (
    !(e == i && u && !o && !f && s.length < 2 && u.merge(t, r, s.length ? c : null, t == 0, l, a))
  ) {
    if (i < h.length) {
      let d = h[i];
      d && (r < d.length || (d.breakAfter && c != null && c.breakAfter))
        ? (e == i && ((d = d.split(r)), (r = 0)),
          !f && c && d.merge(0, r, c, !0, 0, a)
            ? (s[s.length - 1] = d)
            : ((r || (d.children.length && !d.children[0].length)) && d.merge(0, r, null, !1, 0, a),
              s.push(d)))
        : d != null && d.breakAfter && (c ? (c.breakAfter = 1) : (o = 1)),
        i++;
    }
    for (
      u &&
      ((u.breakAfter = o),
      t > 0 &&
        (!o && s.length && u.merge(t, u.length, s[0], !1, l, 0)
          ? (u.breakAfter = s.shift().breakAfter)
          : (t < u.length ||
              (u.children.length && u.children[u.children.length - 1].length == 0)) &&
            u.merge(t, u.length, null, !1, l, 0),
        e++));
      e < i && s.length;

    )
      if (h[i - 1].become(s[s.length - 1])) i--, s.pop(), (a = s.length ? 0 : l);
      else if (h[e].become(s[0])) e++, s.shift(), (l = s.length ? 0 : a);
      else break;
    !s.length &&
      e &&
      i < h.length &&
      !h[e - 1].breakAfter &&
      h[i].merge(0, 0, h[e - 1], !1, l, a) &&
      e--,
      (e < i || s.length) && n.replaceChildren(e, i, s);
  }
}
function sc(n, e, t, i, r, s) {
  let o = n.childCursor(),
    { i: l, off: a } = o.findPos(t, 1),
    { i: h, off: u } = o.findPos(e, -1),
    c = e - t;
  for (let f of i) c += f.length;
  (n.length += c), rc(n, h, u, l, a, i, 0, r, s);
}
let je = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" },
  wo = typeof document < "u" ? document : { documentElement: { style: {} } };
const Qo = /Edge\/(\d+)/.exec(je.userAgent),
  oc = /MSIE \d/.test(je.userAgent),
  Po = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(je.userAgent),
  ds = !!(oc || Po || Qo),
  Aa = !ds && /gecko\/(\d+)/i.test(je.userAgent),
  $s = !ds && /Chrome\/(\d+)/.exec(je.userAgent),
  Ma = "webkitFontSmoothing" in wo.documentElement.style,
  lc = !ds && /Apple Computer/.test(je.vendor),
  $a = lc && (/Mobile\/\w+/.test(je.userAgent) || je.maxTouchPoints > 2);
var F = {
  mac: $a || /Mac/.test(je.platform),
  windows: /Win/.test(je.platform),
  linux: /Linux|X11/.test(je.platform),
  ie: ds,
  ie_version: oc ? wo.documentMode || 6 : Po ? +Po[1] : Qo ? +Qo[1] : 0,
  gecko: Aa,
  gecko_version: Aa ? +(/Firefox\/(\d+)/.exec(je.userAgent) || [0, 0])[1] : 0,
  chrome: !!$s,
  chrome_version: $s ? +$s[1] : 0,
  ios: $a,
  android: /Android\b/.test(je.userAgent),
  webkit: Ma,
  safari: lc,
  webkit_version: Ma ? +(/\bAppleWebKit\/(\d+)/.exec(je.userAgent) || [0, 0])[1] : 0,
  tabSize: wo.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size",
};
const bO = 256;
class ht extends ne {
  constructor(e) {
    super(), (this.text = e);
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (t && t.node == this.dom && (t.written = !0), (this.dom.nodeValue = this.text));
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 ||
      (i && (!(i instanceof ht) || this.length - (t - e) + i.length > bO || i.flags & 8))
      ? !1
      : ((this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(t)),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = new ht(this.text.slice(e));
    return (this.text = this.text.slice(0, e)), this.markDirty(), (t.flags |= this.flags & 8), t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new $e(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return yO(this.dom, e, t);
  }
}
class Rt extends ne {
  constructor(e, t = [], i = 0) {
    super(), (this.mark = e), (this.children = t), (this.length = i);
    for (let r of t) r.setParent(this);
  }
  setAttrs(e) {
    if ((Ju(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs))
      for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    this.dom
      ? this.flags & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e, t);
  }
  merge(e, t, i, r, s, o) {
    return i &&
      (!(i instanceof Rt && i.mark.eq(this.mark)) || (e && s <= 0) || (t < this.length && o <= 0))
      ? !1
      : (sc(this, e, t, i ? i.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [],
      i = 0,
      r = -1,
      s = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), r < 0 && i >= e && (r = s), (i = a), s++;
    }
    let o = this.length - e;
    return (
      (this.length = e),
      r > -1 && ((this.children.length = r), this.markDirty()),
      new Rt(this.mark, t, o)
    );
  }
  domAtPos(e) {
    return ac(this, e);
  }
  coordsAt(e, t) {
    return uc(this, e, t);
  }
}
function yO(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let r = e,
    s = e,
    o = 0;
  (e == 0 && t < 0) || (e == i && t >= 0)
    ? F.chrome || F.gecko || (e ? (r--, (o = 1)) : s < i && (s++, (o = -1)))
    : t < 0
      ? r--
      : s < i && s++;
  let l = yi(n, r, s).getClientRects();
  if (!l.length) return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return (
    F.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a),
    o ? qn(a, o < 0) : a || null
  );
}
class Vt extends ne {
  static create(e, t, i) {
    return new Vt(e, t, i);
  }
  constructor(e, t, i) {
    super(), (this.widget = e), (this.length = t), (this.side = i), (this.prevWidget = null);
  }
  split(e) {
    let t = Vt.create(this.widget, this.length - e, this.side);
    return (this.length -= e), t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, r, s, o) {
    return i &&
      (!(i instanceof Vt) ||
        !this.widget.compare(i.widget) ||
        (e > 0 && s <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
  }
  become(e) {
    return e instanceof Vt && e.side == this.side && this.widget.constructor == e.widget.constructor
      ? (this.widget.compare(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0) return J.empty;
    let e = this;
    for (; e.parent; ) e = e.parent;
    let { view: t } = e,
      i = t && t.state.doc,
      r = this.posAtStart;
    return i ? i.slice(r, r + this.length) : J.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0)
      ? $e.before(this.dom)
      : $e.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i) return i;
    let r = this.dom.getClientRects(),
      s = null;
    if (!r.length) return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (
      let l = o ? r.length - 1 : 0;
      (s = r[l]), !(e > 0 ? l == 0 : l == r.length - 1 || s.top < s.bottom);
      l += o ? -1 : 1
    );
    return qn(s, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class qi extends ne {
  constructor(e) {
    super(), (this.side = e);
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof qi && e.side == this.side;
  }
  split() {
    return new qi(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement("img");
      (e.className = "cm-widgetBuffer"), e.setAttribute("aria-hidden", "true"), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? $e.before(this.dom) : $e.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return J.empty;
  }
  get isHidden() {
    return !0;
  }
}
ht.prototype.children = Vt.prototype.children = qi.prototype.children = Al;
function ac(n, e) {
  let t = n.dom,
    { children: i } = n,
    r = 0;
  for (let s = 0; r < i.length; r++) {
    let o = i[r],
      l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == t) return o.domAtPos(e - s);
      if (e <= s) break;
      s = l;
    }
  }
  for (let s = r; s > 0; s--) {
    let o = i[s - 1];
    if (o.dom.parentNode == t) return o.domAtPos(o.length);
  }
  for (let s = r; s < i.length; s++) {
    let o = i[s];
    if (o.dom.parentNode == t) return o.domAtPos(0);
  }
  return new $e(t, 0);
}
function hc(n, e, t) {
  let i,
    { children: r } = n;
  t > 0 && e instanceof Rt && r.length && (i = r[r.length - 1]) instanceof Rt && i.mark.eq(e.mark)
    ? hc(i, e.children[0], t - 1)
    : (r.push(e), e.setParent(n)),
    (n.length += e.length);
}
function uc(n, e, t) {
  let i = null,
    r = -1,
    s = null,
    o = -1;
  function l(h, u) {
    for (let c = 0, f = 0; c < h.children.length && f <= u; c++) {
      let d = h.children[c],
        p = f + d.length;
      p >= u &&
        (d.children.length
          ? l(d, u - f)
          : (!s || (s.isHidden && t > 0)) && (p > u || (f == p && d.getSide() > 0))
            ? ((s = d), (o = u - f))
            : (f < u || (f == p && d.getSide() < 0 && !d.isHidden)) && ((i = d), (r = u - f))),
        (f = p);
    }
  }
  l(n, e);
  let a = (t < 0 ? i : s) || i || s;
  return a ? a.coordsAt(Math.max(0, a == i ? r : o), t) : xO(n);
}
function xO(n) {
  let e = n.dom.lastChild;
  if (!e) return n.dom.getBoundingClientRect();
  let t = Li(e);
  return t[t.length - 1] || null;
}
function Ao(n, e) {
  for (let t in n)
    t == "class" && e.class
      ? (e.class += " " + n.class)
      : t == "style" && e.style
        ? (e.style += ";" + n.style)
        : (e[t] = n[t]);
  return e;
}
const Ea = Object.create(null);
function Zr(n, e, t) {
  if (n == e) return !0;
  n || (n = Ea), e || (e = Ea);
  let i = Object.keys(n),
    r = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != r.length - (t && r.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let s of i) if (s != t && (r.indexOf(s) == -1 || n[s] !== e[s])) return !1;
  return !0;
}
function Mo(n, e, t) {
  let i = !1;
  if (e)
    for (let r in e)
      (t && r in t) || ((i = !0), r == "style" ? (n.style.cssText = "") : n.removeAttribute(r));
  if (t)
    for (let r in t)
      (e && e[r] == t[r]) ||
        ((i = !0), r == "style" ? (n.style.cssText = t[r]) : n.setAttribute(r, t[r]));
  return i;
}
function kO(n) {
  let e = Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class Ft {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
    return !1;
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {}
}
var Fe = (function (n) {
  return (
    (n[(n.Text = 0)] = "Text"),
    (n[(n.WidgetBefore = 1)] = "WidgetBefore"),
    (n[(n.WidgetAfter = 2)] = "WidgetAfter"),
    (n[(n.WidgetRange = 3)] = "WidgetRange"),
    n
  );
})(Fe || (Fe = {}));
class W extends Si {
  constructor(e, t, i, r) {
    super(), (this.startSide = e), (this.endSide = t), (this.widget = i), (this.spec = r);
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new In(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
      i = !!e.block;
    return (
      (t += i && !e.inlineOrder ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
      new ei(e, t, t, i, e.widget || null, !1)
    );
  }
  static replace(e) {
    let t = !!e.block,
      i,
      r;
    if (e.isBlockGap) (i = -5e8), (r = 4e8);
    else {
      let { start: s, end: o } = cc(e, t);
      (i = (s ? (t ? -3e8 : -1) : 5e8) - 1), (r = (o ? (t ? 2e8 : 1) : -6e8) + 1);
    }
    return new ei(e, i, r, t, e.widget || null, !0);
  }
  static line(e) {
    return new _n(e);
  }
  static set(e, t = !1) {
    return K.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
W.none = K.empty;
class In extends W {
  constructor(e) {
    let { start: t, end: i } = cc(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || "span"),
      (this.class = e.class || ""),
      (this.attrs = e.attributes || null);
  }
  eq(e) {
    var t, i;
    return (
      this == e ||
      (e instanceof In &&
        this.tagName == e.tagName &&
        (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) ==
          (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) &&
        Zr(this.attrs, e.attrs, "class"))
    );
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError("Mark decorations may not be empty");
    return super.range(e, t);
  }
}
In.prototype.point = !1;
class _n extends W {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return (
      e instanceof _n &&
      this.spec.class == e.spec.class &&
      Zr(this.spec.attributes, e.spec.attributes)
    );
  }
  range(e, t = e) {
    if (t != e) throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, t);
  }
}
_n.prototype.mapMode = Re.TrackBefore;
_n.prototype.point = !0;
class ei extends W {
  constructor(e, t, i, r, s, o) {
    super(t, i, s, e),
      (this.block = r),
      (this.isReplace = o),
      (this.mapMode = r ? (t <= 0 ? Re.TrackBefore : Re.TrackAfter) : Re.TrackDel);
  }
  get type() {
    return this.startSide != this.endSide
      ? Fe.WidgetRange
      : this.startSide <= 0
        ? Fe.WidgetBefore
        : Fe.WidgetAfter;
  }
  get heightRelevant() {
    return (
      this.block ||
      (!!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
    );
  }
  eq(e) {
    return (
      e instanceof ei &&
      DO(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    );
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || (e == t && this.startSide > 0 && this.endSide <= 0)))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && t != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, t);
  }
}
ei.prototype.point = !0;
function cc(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return (
    t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e }
  );
}
function DO(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function $o(n, e, t, i = 0) {
  let r = t.length - 1;
  r >= 0 && t[r] + i >= n ? (t[r] = Math.max(t[r], e)) : t.push(n, e);
}
class ge extends ne {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0);
  }
  merge(e, t, i, r, s, o) {
    if (i) {
      if (!(i instanceof ge)) return !1;
      this.dom || i.transferDOM(this);
    }
    return (
      r && this.setDeco(i ? i.attrs : null), sc(this, e, t, i ? i.children.slice() : [], s, o), !0
    );
  }
  split(e) {
    let t = new ge();
    if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
    let { i, off: r } = this.childPos(e);
    r &&
      (t.append(this.children[i].split(r), 0),
      this.children[i].merge(r, this.children[i].length, null, !1, 0, 0),
      i++);
    for (let s = i; s < this.children.length; s++) t.append(this.children[s], 0);
    for (; i > 0 && this.children[i - 1].length == 0; ) this.children[--i].destroy();
    return (this.children.length = i), this.markDirty(), (this.length = e), t;
  }
  transferDOM(e) {
    this.dom &&
      (this.markDirty(),
      e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null));
  }
  setDeco(e) {
    Zr(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()), (this.attrs = e));
  }
  append(e, t) {
    hc(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes,
      i = e.spec.class;
    t && (this.attrs = Ao(t, this.attrs || {})),
      i && (this.attrs = Ao({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return ac(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    var i;
    this.dom
      ? this.flags & 4 &&
        (Ju(this.dom),
        (this.dom.className = "cm-line"),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement("div")),
        (this.dom.className = "cm-line"),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        (Mo(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add("cm-line"),
        (this.prevAttrs = void 0)),
      super.sync(e, t);
    let r = this.dom.lastChild;
    for (; r && ne.get(r) instanceof Rt; ) r = r.lastChild;
    if (
      !r ||
      !this.length ||
      (r.nodeName != "BR" &&
        ((i = ne.get(r)) === null || i === void 0 ? void 0 : i.isEditable) == !1 &&
        (!F.ios || !this.children.some((s) => s instanceof ht)))
    ) {
      let s = document.createElement("BR");
      (s.cmIgnore = !0), this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let e = 0,
      t;
    for (let i of this.children) {
      if (!(i instanceof ht) || /[^ -~]/.test(i.text)) return null;
      let r = Li(i.dom);
      if (r.length != 1) return null;
      (e += r[0].width), (t = r[0].height);
    }
    return e
      ? {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: e / this.length,
          textHeight: t,
        }
      : null;
  }
  coordsAt(e, t) {
    let i = uc(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState,
        s = i.bottom - i.top;
      if (Math.abs(s - r.lineHeight) < 2 && r.textHeight < s) {
        let o = (s - r.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return (
      e instanceof ge &&
      this.children.length == 0 &&
      e.children.length == 0 &&
      Zr(this.attrs, e.attrs) &&
      this.breakAfter == e.breakAfter
    );
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, r = 0; i < e.children.length; i++) {
      let s = e.children[i],
        o = r + s.length;
      if (o >= t) {
        if (s instanceof ge) return s;
        if (o > t) break;
      }
      r = o + s.breakAfter;
    }
    return null;
  }
}
class Et extends ne {
  constructor(e, t, i) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.deco = i),
      (this.breakAfter = 0),
      (this.prevWidget = null);
  }
  merge(e, t, i, r, s, o) {
    return i &&
      (!(i instanceof Et) ||
        !this.widget.compare(i.widget) ||
        (e > 0 && s <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
  }
  domAtPos(e) {
    return e == 0 ? $e.before(this.dom) : $e.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new Et(this.widget, t, this.deco);
    return (i.breakAfter = this.breakAfter), i;
  }
  get children() {
    return Al;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : J.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Et && e.widget.constructor == this.widget.constructor
      ? (e.widget.compare(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.deco = e.deco),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return (
      i ||
      (this.widget instanceof Eo
        ? null
        : qn(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0))
    );
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
}
class Eo extends Ft {
  constructor(e) {
    super(), (this.height = e);
  }
  toDOM() {
    let e = document.createElement("div");
    return (e.className = "cm-gap"), this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return (e.style.height = this.height + "px"), !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class bn {
  constructor(e, t, i, r) {
    (this.doc = e),
      (this.pos = t),
      (this.end = i),
      (this.disallowBlockEffectsFor = r),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.bufferMarks = []),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ""),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = t);
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || (e instanceof Et && e.deco.endSide < 0));
  }
  getLine() {
    return (
      this.curLine || (this.content.push((this.curLine = new ge())), (this.atCursorPos = !0)),
      this.curLine
    );
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer &&
      (this.curLine.append(er(new qi(-1), e), e.length), (this.pendingBuffer = 0));
  }
  addBlockWidget(e) {
    this.flushBuffer(), (this.curLine = null), this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length
      ? this.flushBuffer()
      : (this.pendingBuffer = 0),
      !this.posCovered() &&
        !(e && this.content.length && this.content[this.content.length - 1] instanceof Et) &&
        this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (((this.skip = 0), l))
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer(),
            (this.curLine = null),
            (this.atCursorPos = !0),
            e--;
          continue;
        } else (this.text = s), (this.textOff = 0);
      }
      let r = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - i)),
        this.getLine().append(er(new ht(this.text.slice(this.textOff, this.textOff + r)), t), i),
        (this.atCursorPos = !0),
        (this.textOff += r),
        (e -= r),
        (i = 0);
    }
  }
  span(e, t, i, r) {
    this.buildText(t - e, i, r), (this.pos = t), this.openStart < 0 && (this.openStart = r);
  }
  point(e, t, i, r, s, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof ei) {
      if (i.block) throw new RangeError("Block decorations may not be specified via plugins");
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          "Decorations that replace line breaks may not be specified via plugins"
        );
    }
    let l = t - e;
    if (i instanceof ei)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(),
          this.addBlockWidget(new Et(i.widget || Ii.block, l, i));
      else {
        let a = Vt.create(i.widget || Ii.inline, l, l ? 0 : i.startSide),
          h = this.atCursorPos && !a.isEditable && s <= r.length && (e < t || i.startSide > 0),
          u = !a.isEditable && (e < t || s > r.length || i.startSide <= 0),
          c = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0),
          this.flushBuffer(r),
          h && (c.append(er(new qi(1), r), s), (s = r.length + Math.max(0, s - r.length))),
          c.append(er(a, r), s),
          (this.atCursorPos = u),
          (this.pendingBuffer = u ? (e < t || s > r.length ? 1 : 2) : 0),
          this.pendingBuffer && (this.bufferMarks = r.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l &&
      (this.textOff + l <= this.text.length
        ? (this.textOff += l)
        : ((this.skip += l - (this.text.length - this.textOff)),
          (this.text = ""),
          (this.textOff = 0)),
      (this.pos = t)),
      this.openStart < 0 && (this.openStart = s);
  }
  static build(e, t, i, r, s) {
    let o = new bn(e, t, i, s);
    return (
      (o.openEnd = K.spans(r, t, i, o)),
      o.openStart < 0 && (o.openStart = o.openEnd),
      o.finish(o.openEnd),
      o
    );
  }
}
function er(n, e) {
  for (let t of e) n = new Rt(t, [n], n.length);
  return n;
}
class Ii extends Ft {
  constructor(e) {
    super(), (this.tag = e);
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
Ii.inline = new Ii("span");
Ii.block = new Ii("div");
var he = (function (n) {
  return (n[(n.LTR = 0)] = "LTR"), (n[(n.RTL = 1)] = "RTL"), n;
})(he || (he = {}));
const xi = he.LTR,
  Ml = he.RTL;
function fc(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
  return e;
}
const CO = fc(
    "88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"
  ),
  vO = fc(
    "4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"
  ),
  Bo = Object.create(null),
  ft = [];
for (let n of ["()", "[]", "{}"]) {
  let e = n.charCodeAt(0),
    t = n.charCodeAt(1);
  (Bo[e] = t), (Bo[t] = -e);
}
function dc(n) {
  return n <= 247
    ? CO[n]
    : 1424 <= n && n <= 1524
      ? 2
      : 1536 <= n && n <= 1785
        ? vO[n - 1536]
        : 1774 <= n && n <= 2220
          ? 4
          : 8192 <= n && n <= 8204
            ? 256
            : 64336 <= n && n <= 65023
              ? 4
              : 1;
}
const wO = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Xt {
  get dir() {
    return this.level % 2 ? Ml : xi;
  }
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.level = i);
  }
  side(e, t) {
    return (this.dir == t) == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, r) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i) return o;
        (s < 0 || (r != 0 ? (r < 0 ? l.from < t : l.to > t) : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0) throw new RangeError("Index out of range");
    return s;
  }
}
function pc(n, e) {
  if (n.length != e.length) return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t],
      r = e[t];
    if (i.from != r.from || i.to != r.to || i.direction != r.direction || !pc(i.inner, r.inner))
      return !1;
  }
  return !0;
}
const ie = [];
function QO(n, e, t, i, r) {
  for (let s = 0; s <= i.length; s++) {
    let o = s ? i[s - 1].to : e,
      l = s < i.length ? i[s].from : t,
      a = s ? 256 : r;
    for (let h = o, u = a, c = a; h < l; h++) {
      let f = dc(n.charCodeAt(h));
      f == 512 ? (f = u) : f == 8 && c == 4 && (f = 16),
        (ie[h] = f == 4 ? 2 : f),
        f & 7 && (c = f),
        (u = f);
    }
    for (let h = o, u = a, c = a; h < l; h++) {
      let f = ie[h];
      if (f == 128) h < l - 1 && u == ie[h + 1] && u & 24 ? (f = ie[h] = u) : (ie[h] = 256);
      else if (f == 64) {
        let d = h + 1;
        for (; d < l && ie[d] == 64; ) d++;
        let p = (h && u == 8) || (d < t && ie[d] == 8) ? (c == 1 ? 1 : 8) : 256;
        for (let O = h; O < d; O++) ie[O] = p;
        h = d - 1;
      } else f == 8 && c == 1 && (ie[h] = 1);
      (u = f), f & 7 && (c = f);
    }
  }
}
function PO(n, e, t, i, r) {
  let s = r == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e,
      u = o < i.length ? i[o].from : t;
    for (let c = h, f, d, p; c < u; c++)
      if ((d = Bo[(f = n.charCodeAt(c))]))
        if (d < 0) {
          for (let O = l - 3; O >= 0; O -= 3)
            if (ft[O + 1] == -d) {
              let g = ft[O + 2],
                S = g & 2 ? r : g & 4 ? (g & 1 ? s : r) : 0;
              S && (ie[c] = ie[ft[O]] = S), (l = O);
              break;
            }
        } else {
          if (ft.length == 189) break;
          (ft[l++] = c), (ft[l++] = f), (ft[l++] = a);
        }
      else if ((p = ie[c]) == 2 || p == 1) {
        let O = p == r;
        a = O ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let S = ft[g + 2];
          if (S & 2) break;
          if (O) ft[g + 2] |= 2;
          else {
            if (S & 4) break;
            ft[g + 2] |= 4;
          }
        }
      }
  }
}
function AO(n, e, t, i) {
  for (let r = 0, s = i; r <= t.length; r++) {
    let o = r ? t[r - 1].to : n,
      l = r < t.length ? t[r].from : e;
    for (let a = o; a < l; ) {
      let h = ie[a];
      if (h == 256) {
        let u = a + 1;
        for (;;)
          if (u == l) {
            if (r == t.length) break;
            (u = t[r++].to), (l = r < t.length ? t[r].from : e);
          } else if (ie[u] == 256) u++;
          else break;
        let c = s == 1,
          f = (u < e ? ie[u] : i) == 1,
          d = c == f ? (c ? 1 : 2) : i;
        for (let p = u, O = r, g = O ? t[O - 1].to : n; p > a; )
          p == g && ((p = t[--O].from), (g = O ? t[O - 1].to : n)), (ie[--p] = d);
        a = u;
      } else (s = h), a++;
    }
  }
}
function Ro(n, e, t, i, r, s, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == r % 2)
    for (let a = e, h = 0; a < t; ) {
      let u = !0,
        c = !1;
      if (h == s.length || a < s[h].from) {
        let O = ie[a];
        O != l && ((u = !1), (c = O == 16));
      }
      let f = !u && l == 1 ? [] : null,
        d = u ? i : i + 1,
        p = a;
      e: for (;;)
        if (h < s.length && p == s[h].from) {
          if (c) break e;
          let O = s[h];
          if (!u)
            for (let g = O.to, S = h + 1; ; ) {
              if (g == t) break e;
              if (S < s.length && s[S].from == g) g = s[S++].to;
              else {
                if (ie[g] == l) break e;
                break;
              }
            }
          if ((h++, f)) f.push(O);
          else {
            O.from > a && o.push(new Xt(a, O.from, d));
            let g = (O.direction == xi) != !(d % 2);
            To(n, g ? i + 1 : i, r, O.inner, O.from, O.to, o), (a = O.to);
          }
          p = O.to;
        } else {
          if (p == t || (u ? ie[p] != l : ie[p] == l)) break;
          p++;
        }
      f ? Ro(n, a, p, i + 1, r, f, o) : a < p && o.push(new Xt(a, p, d)), (a = p);
    }
  else
    for (let a = t, h = s.length; a > e; ) {
      let u = !0,
        c = !1;
      if (!h || a > s[h - 1].to) {
        let O = ie[a - 1];
        O != l && ((u = !1), (c = O == 16));
      }
      let f = !u && l == 1 ? [] : null,
        d = u ? i : i + 1,
        p = a;
      e: for (;;)
        if (h && p == s[h - 1].to) {
          if (c) break e;
          let O = s[--h];
          if (!u)
            for (let g = O.from, S = h; ; ) {
              if (g == e) break e;
              if (S && s[S - 1].to == g) g = s[--S].from;
              else {
                if (ie[g - 1] == l) break e;
                break;
              }
            }
          if (f) f.push(O);
          else {
            O.to < a && o.push(new Xt(O.to, a, d));
            let g = (O.direction == xi) != !(d % 2);
            To(n, g ? i + 1 : i, r, O.inner, O.from, O.to, o), (a = O.from);
          }
          p = O.from;
        } else {
          if (p == e || (u ? ie[p - 1] != l : ie[p - 1] == l)) break;
          p--;
        }
      f ? Ro(n, p, a, i + 1, r, f, o) : p < a && o.push(new Xt(p, a, d)), (a = p);
    }
}
function To(n, e, t, i, r, s, o) {
  let l = e % 2 ? 2 : 1;
  QO(n, r, s, i, l), PO(n, r, s, i, l), AO(r, s, i, l), Ro(n, r, s, e, t, i, o);
}
function MO(n, e, t) {
  if (!n) return [new Xt(0, 0, e == Ml ? 1 : 0)];
  if (e == xi && !t.length && !wO.test(n)) return Oc(n.length);
  if (t.length) for (; n.length > ie.length; ) ie[ie.length] = 256;
  let i = [],
    r = e == xi ? 0 : 1;
  return To(n, r, r, t, 0, n.length, i), i;
}
function Oc(n) {
  return [new Xt(0, n, 0)];
}
let gc = "";
function $O(n, e, t, i, r) {
  var s;
  let o = i.head - n.from,
    l = Xt.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc),
    a = e[l],
    h = a.side(r, t);
  if (o == h) {
    let f = (l += r ? 1 : -1);
    if (f < 0 || f >= e.length) return null;
    (a = e[(l = f)]), (o = a.side(!r, t)), (h = a.side(r, t));
  }
  let u = Pe(n.text, o, a.forward(r, t));
  (u < a.from || u > a.to) && (u = h), (gc = n.text.slice(Math.min(o, u), Math.max(o, u)));
  let c = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return c && u == h && c.level + (r ? 0 : 1) < a.level
    ? w.cursor(c.side(!r, t) + n.from, c.forward(r, t) ? 1 : -1, c.level)
    : w.cursor(u + n.from, a.forward(r, t) ? -1 : 1, a.level);
}
function EO(n, e, t) {
  for (let i = e; i < t; i++) {
    let r = dc(n.charCodeAt(i));
    if (r == 1) return xi;
    if (r == 2 || r == 4) return Ml;
  }
  return xi;
}
const mc = T.define(),
  Sc = T.define(),
  bc = T.define(),
  yc = T.define(),
  Fo = T.define(),
  xc = T.define(),
  kc = T.define(),
  $l = T.define(),
  El = T.define(),
  Dc = T.define({ combine: (n) => n.some((e) => e) }),
  Cc = T.define({ combine: (n) => n.some((e) => e) }),
  vc = T.define();
class Ti {
  constructor(e, t = "nearest", i = "nearest", r = 5, s = 5, o = !1) {
    (this.range = e),
      (this.y = t),
      (this.x = i),
      (this.yMargin = r),
      (this.xMargin = s),
      (this.isSnapshot = o);
  }
  map(e) {
    return e.empty
      ? this
      : new Ti(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length
      ? this
      : new Ti(w.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const tr = X.define({ map: (n, e) => n.map(e) }),
  wc = X.define();
function qe(n, e, t) {
  let i = n.facet(yc);
  i.length
    ? i[0](e)
    : window.onerror
      ? window.onerror(String(e), t, void 0, void 0, e)
      : t
        ? console.error(t + ":", e)
        : console.error(e);
}
const Lt = T.define({ combine: (n) => (n.length ? n[0] : !0) });
let BO = 0;
const on = T.define();
class Oe {
  constructor(e, t, i, r, s) {
    (this.id = e),
      (this.create = t),
      (this.domEventHandlers = i),
      (this.domEventObservers = r),
      (this.extension = s(this));
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: r, provide: s, decorations: o } = t || {};
    return new Oe(BO++, e, i, r, (l) => {
      let a = [on.of(l)];
      return (
        o &&
          a.push(
            Pn.of((h) => {
              let u = h.plugin(l);
              return u ? o(u) : W.none;
            })
          ),
        s && a.push(s(l)),
        a
      );
    });
  }
  static fromClass(e, t) {
    return Oe.define((i) => new e(i), t);
  }
}
class Es {
  constructor(e) {
    (this.spec = e), (this.mustUpdate = null), (this.value = null);
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(t);
          } catch (i) {
            if ((qe(t.state, i, "CodeMirror plugin crashed"), this.value.destroy))
              try {
                this.value.destroy();
              } catch {}
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        qe(e.state, t, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        qe(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Qc = T.define(),
  Bl = T.define(),
  Pn = T.define(),
  Pc = T.define(),
  Rl = T.define(),
  Ac = T.define();
function Ba(n, e) {
  let t = n.state.facet(Ac);
  if (!t.length) return t;
  let i = t.map((s) => (s instanceof Function ? s(n) : s)),
    r = [];
  return (
    K.spans(i, e.from, e.to, {
      point() {},
      span(s, o, l, a) {
        let h = s - e.from,
          u = o - e.from,
          c = r;
        for (let f = l.length - 1; f >= 0; f--, a--) {
          let d = l[f].spec.bidiIsolate,
            p;
          if (
            (d == null && (d = EO(e.text, h, u)),
            a > 0 && c.length && (p = c[c.length - 1]).to == h && p.direction == d)
          )
            (p.to = u), (c = p.inner);
          else {
            let O = { from: h, to: u, direction: d, inner: [] };
            c.push(O), (c = O.inner);
          }
        }
      },
    }),
    r
  );
}
const Mc = T.define();
function $c(n) {
  let e = 0,
    t = 0,
    i = 0,
    r = 0;
  for (let s of n.state.facet(Mc)) {
    let o = s(n);
    o &&
      (o.left != null && (e = Math.max(e, o.left)),
      o.right != null && (t = Math.max(t, o.right)),
      o.top != null && (i = Math.max(i, o.top)),
      o.bottom != null && (r = Math.max(r, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: r };
}
const ln = T.define();
class it {
  constructor(e, t, i, r) {
    (this.fromA = e), (this.toA = t), (this.fromB = i), (this.toB = r);
  }
  join(e) {
    return new it(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB)
    );
  }
  addToSet(e) {
    let t = e.length,
      i = this;
    for (; t > 0; t--) {
      let r = e[t - 1];
      if (!(r.fromA > i.toA)) {
        if (r.toA < i.fromA) break;
        (i = i.join(r)), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let i = [];
    for (let r = 0, s = 0, o = 0, l = 0; ; r++) {
      let a = r == e.length ? null : e[r],
        h = o - l,
        u = a ? a.fromB : 1e9;
      for (; s < t.length && t[s] < u; ) {
        let c = t[s],
          f = t[s + 1],
          d = Math.max(l, c),
          p = Math.min(u, f);
        if ((d <= p && new it(d + h, p + h, d, p).addToSet(i), f > u)) break;
        s += 2;
      }
      if (!a) return i;
      new it(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), (o = a.toA), (l = a.toB);
    }
  }
}
class Wr {
  constructor(e, t, i) {
    (this.view = e),
      (this.state = t),
      (this.transactions = i),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = be.empty(this.startState.doc.length));
    for (let s of i) this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, o, l, a) => r.push(new it(s, o, l, a))),
      (this.changedRanges = r);
  }
  static create(e, t, i) {
    return new Wr(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 10) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Ra extends ne {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(),
      (this.view = e),
      (this.decorations = []),
      (this.dynamicDecorationMap = [!1]),
      (this.domChanged = null),
      (this.hasComposition = null),
      (this.markedForComposition = new Set()),
      (this.editContextFormatting = W.none),
      (this.lastCompositionAfterCursor = !1),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new ge()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new it(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 &&
      i.length &&
      (i.every(({ fromA: h, toA: u }) => u < this.minWidthFrom || h > this.minWidthTo)
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
      this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 &&
      !this.view.observer.editContext &&
      (!((t = this.domChanged) === null || t === void 0) && t.newSel
        ? (r = this.domChanged.newSel.head)
        : !jO(e.changes, this.hasComposition) &&
          !e.selectionSet &&
          (r = e.state.selection.main.head));
    let s = r > -1 ? TO(this.view, e.changes, r) : null;
    if (((this.domChanged = null), this.hasComposition)) {
      this.markedForComposition.clear();
      let { from: h, to: u } = this.hasComposition;
      i = new it(h, u, e.changes.mapPos(h, -1), e.changes.mapPos(u, 1)).addToSet(i.slice());
    }
    (this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null),
      (F.ie || F.chrome) &&
        !s &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0);
    let o = this.decorations,
      l = this.updateDeco(),
      a = ZO(o, l, e.changes);
    return (
      (i = it.extendWithRanges(i, a)),
      !(this.flags & 7) && i.length == 0
        ? !1
        : (this.updateInner(i, e.startState.doc.length, s),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    );
  }
  updateInner(e, t, i) {
    (this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t, i);
    let { observer: r } = this.view;
    r.ignore(() => {
      (this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px"),
        (this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "");
      let o = F.chrome || F.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o),
        (this.flags &= -8),
        o && (o.written || r.selectionRange.focusNode != o.node) && (this.forceSelection = !0),
        (this.dom.style.height = "");
    }),
      this.markedForComposition.forEach((o) => (o.flags &= -9));
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children) o instanceof Et && o.widget instanceof Eo && s.push(o.dom);
    r.updateGaps(s);
  }
  updateChildren(e, t, i) {
    let r = i ? i.range.addToSet(e.slice()) : e,
      s = this.childCursor(t);
    for (let o = r.length - 1; ; o--) {
      let l = o >= 0 ? r[o] : null;
      if (!l) break;
      let { fromA: a, toA: h, fromB: u, toB: c } = l,
        f,
        d,
        p,
        O;
      if (i && i.range.fromB < c && i.range.toB > u) {
        let v = bn.build(
            this.view.state.doc,
            u,
            i.range.fromB,
            this.decorations,
            this.dynamicDecorationMap
          ),
          k = bn.build(
            this.view.state.doc,
            i.range.toB,
            c,
            this.decorations,
            this.dynamicDecorationMap
          );
        (d = v.breakAtStart), (p = v.openStart), (O = k.openEnd);
        let y = this.compositionView(i);
        k.breakAtStart
          ? (y.breakAfter = 1)
          : k.content.length &&
            y.merge(y.length, y.length, k.content[0], !1, k.openStart, 0) &&
            ((y.breakAfter = k.content[0].breakAfter), k.content.shift()),
          v.content.length &&
            y.merge(0, 0, v.content[v.content.length - 1], !0, 0, v.openEnd) &&
            v.content.pop(),
          (f = v.content.concat(y).concat(k.content));
      } else
        ({
          content: f,
          breakAtStart: d,
          openStart: p,
          openEnd: O,
        } = bn.build(this.view.state.doc, u, c, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: S } = s.findPos(h, 1),
        { i: b, off: D } = s.findPos(a, -1);
      rc(this, b, D, g, S, f, d, p, O);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects) i.is(wc) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new ht(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: r } of e.marks) t = new Rt(r, [t], t.length);
    let i = new ge();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (s, o) => {
        (o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0)),
          this.markedForComposition.add(o);
        let l = ne.get(s);
        l && l != o && (l.dom = null), o.setDOM(s);
      },
      i = this.childPos(e.range.fromB, 1),
      r = this.children[i.i];
    t(e.line, r);
    for (let s = e.marks.length - 1; s >= -1; s--)
      (i = r.childPos(i.off, 1)), (r = r.children[i.i]), t(s >= 0 ? e.marks[s].node : e.text, r);
  }
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement,
      r = i == this.dom,
      s = !r && Dr(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(r || t || s)) return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main,
      a = this.moveToLine(this.domAtPos(l.anchor)),
      h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (F.gecko && l.empty && !this.hasComposition && RO(a)) {
      let c = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(c, a.node.childNodes[a.offset] || null)),
        (a = h = new $e(c, 0)),
        (o = !0);
    }
    let u = this.view.observer.selectionRange;
    (o ||
      !u.focusNode ||
      ((!Sn(a.node, a.offset, u.anchorNode, u.anchorOffset) ||
        !Sn(h.node, h.offset, u.focusNode, u.focusOffset)) &&
        !this.suppressWidgetCursorChange(u, l))) &&
      (this.view.observer.ignore(() => {
        F.android &&
          F.chrome &&
          this.dom.contains(u.focusNode) &&
          WO(u.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
        let c = Qn(this.view.root);
        if (c)
          if (l.empty) {
            if (F.gecko) {
              let f = FO(a.node, a.offset);
              if (f && f != 3) {
                let d = (f == 1 ? tc : ic)(a.node, a.offset);
                d && (a = new $e(d.node, d.offset));
              }
            }
            c.collapse(a.node, a.offset),
              l.bidiLevel != null &&
                c.caretBidiLevel !== void 0 &&
                (c.caretBidiLevel = l.bidiLevel);
          } else if (c.extend) {
            c.collapse(a.node, a.offset);
            try {
              c.extend(h.node, h.offset);
            } catch {}
          } else {
            let f = document.createRange();
            l.anchor > l.head && ([a, h] = [h, a]),
              f.setEnd(h.node, h.offset),
              f.setStart(a.node, a.offset),
              c.removeAllRanges(),
              c.addRange(f);
          }
        s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
      }),
      this.view.observer.setSelectionRange(a, h)),
      (this.impreciseAnchor = a.precise ? null : new $e(u.anchorNode, u.anchorOffset)),
      (this.impreciseHead = h.precise ? null : new $e(u.focusNode, u.focusOffset));
  }
  suppressWidgetCursorChange(e, t) {
    return (
      this.hasComposition &&
      t.empty &&
      Sn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) &&
      this.posFromDOM(e.focusNode, e.focusOffset) == t.head
    );
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this,
      t = e.state.selection.main,
      i = Qn(e.root),
      { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify) return;
    let o = ge.find(this, t.head);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1),
      h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top) return;
    let u = this.domAtPos(t.head + t.assoc);
    i.collapse(u.node, u.offset),
      i.modify("move", t.assoc < 0 ? "forward" : "backward", "lineboundary"),
      e.observer.readSelectionRange();
    let c = e.observer.selectionRange;
    e.docView.posFromDOM(c.anchorNode, c.anchorOffset) != t.from && i.collapse(r, s);
  }
  moveToLine(e) {
    let t = this.dom,
      i;
    if (e.node != t) return e;
    for (let r = e.offset; !i && r < t.childNodes.length; r++) {
      let s = ne.get(t.childNodes[r]);
      s instanceof ge && (i = s.domAtPos(0));
    }
    for (let r = e.offset - 1; !i && r >= 0; r--) {
      let s = ne.get(t.childNodes[r]);
      s instanceof ge && (i = s.domAtPos(s.length));
    }
    return i ? new $e(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = ne.get(t);
      if (i && i.rootView == this) return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError("Trying to find position for a DOM position outside of the document");
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let r = this.children[t];
      if (i < r.length || r instanceof ge) break;
      t++, (i = 0);
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null,
      r = 0;
    for (let s = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o],
        a = s - l.breakAfter,
        h = a - l.length;
      if (a < e) break;
      if (
        h <= e &&
        (h < e || l.covers(-1)) &&
        (a > e || l.covers(1)) &&
        (!i || (l instanceof ge && !(i instanceof ge && t >= 0)))
      )
        (i = l), (r = h);
      else if (i && h == e && a == e && l instanceof Et && Math.abs(t) < 2) {
        if (l.deco.startSide < 0) break;
        o && (i = null);
      }
      s = h;
    }
    return i ? i.coordsAt(e - r, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1),
      r = this.children[t];
    if (!(r instanceof ge)) return null;
    for (; r.children.length; ) {
      let { i: l, off: a } = r.childPos(i, 1);
      for (; ; l++) {
        if (l == r.children.length) return null;
        if ((r = r.children[l]).length) break;
      }
      i = a;
    }
    if (!(r instanceof ht)) return null;
    let s = Pe(r.text, i);
    if (s == i) return null;
    let o = yi(r.dom, i, s).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || (a.top < a.bottom && a.left < a.right)) return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [],
      { from: i, to: r } = e,
      s = this.view.contentDOM.clientWidth,
      o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      l = -1,
      a = this.view.textDirection == he.LTR;
    for (let h = 0, u = 0; u < this.children.length; u++) {
      let c = this.children[u],
        f = h + c.length;
      if (f > r) break;
      if (h >= i) {
        let d = c.dom.getBoundingClientRect();
        if ((t.push(d.height), o)) {
          let p = c.dom.lastChild,
            O = p ? Li(p) : [];
          if (O.length) {
            let g = O[O.length - 1],
              S = a ? g.right - d.left : d.right - g.left;
            S > l && ((l = S), (this.minWidth = s), (this.minWidthFrom = h), (this.minWidthTo = f));
          }
        }
      }
      h = f + c.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == "rtl" ? he.RTL : he.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof ge) {
        let o = s.measureTextSize();
        if (o) return o;
      }
    let e = document.createElement("div"),
      t,
      i,
      r;
    return (
      (e.className = "cm-line"),
      (e.style.width = "99999px"),
      (e.style.position = "absolute"),
      (e.textContent = "abc def ghi jkl mno pqr stu"),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e);
        let s = Li(e.firstChild)[0];
        (t = e.getBoundingClientRect().height),
          (i = s ? s.width / 27 : 7),
          (r = s ? s.height : t),
          e.remove();
      }),
      { lineHeight: t, charWidth: i, textHeight: r }
    );
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new nc(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [],
      t = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let s = r == t.viewports.length ? null : t.viewports[r],
        o = s ? s.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(
          W.replace({ widget: new Eo(l), block: !0, inclusive: !0, isBlockGap: !0 }).range(i, o)
        );
      }
      if (!s) break;
      i = s.to + 1;
    }
    return W.set(e);
  }
  updateDeco() {
    let e = 1,
      t = this.view.state
        .facet(Pn)
        .map((s) => ((this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s)),
      i = !1,
      r = this.view.state.facet(Pc).map((s, o) => {
        let l = typeof s == "function";
        return l && (i = !0), l ? s(this.view) : s;
      });
    for (
      r.length && ((this.dynamicDecorationMap[e++] = i), t.push(K.join(r))),
        this.decorations = [
          this.editContextFormatting,
          ...t,
          this.computeBlockGapDeco(),
          this.view.viewState.lineGapDeco,
        ];
      e < this.decorations.length;

    )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      (this.view.scrollDOM.scrollTop = h.top - e.yMargin),
        (this.view.scrollDOM.scrollLeft = e.xMargin);
      return;
    }
    for (let h of this.view.state.facet(vc))
      try {
        if (h(this.view, e.range, e)) return !0;
      } catch (u) {
        qe(this.view.state, u, "scroll handler");
      }
    let { range: t } = e,
      i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
      r;
    if (!i) return;
    !t.empty &&
      (r = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
      (i = {
        left: Math.min(i.left, r.left),
        top: Math.min(i.top, r.top),
        right: Math.max(i.right, r.right),
        bottom: Math.max(i.bottom, r.bottom),
      });
    let s = $c(this.view),
      o = {
        left: i.left - s.left,
        top: i.top - s.top,
        right: i.right + s.right,
        bottom: i.bottom + s.bottom,
      },
      { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    pO(
      this.view.scrollDOM,
      o,
      t.head < t.anchor ? -1 : 1,
      e.x,
      e.y,
      Math.max(Math.min(e.xMargin, l), -l),
      Math.max(Math.min(e.yMargin, a), -a),
      this.view.textDirection == he.LTR
    );
  }
}
function RO(n) {
  return (
    n.node.nodeType == 1 &&
    n.node.firstChild &&
    (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == "false") &&
    (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == "false")
  );
}
function Ec(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode) return null;
  let i = tc(t.focusNode, t.focusOffset),
    r = ic(t.focusNode, t.focusOffset),
    s = i || r;
  if (r && i && r.node != i.node) {
    let l = ne.get(r.node);
    if (!l || (l instanceof ht && l.text != r.node.nodeValue)) s = r;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = ne.get(i.node);
      !a || (a instanceof ht && a.text != i.node.nodeValue) || (s = r);
    }
  }
  if (((n.docView.lastCompositionAfterCursor = s != i), !s)) return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function TO(n, e, t) {
  let i = Ec(n, t);
  if (!i) return null;
  let { node: r, from: s, to: o } = i,
    l = r.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
  let a = e.invertedDesc,
    h = new it(a.mapPos(s), a.mapPos(o), s, o),
    u = [];
  for (let c = r.parentNode; ; c = c.parentNode) {
    let f = ne.get(c);
    if (f instanceof Rt) u.push({ node: c, deco: f.mark });
    else {
      if (f instanceof ge || (c.nodeName == "DIV" && c.parentNode == n.contentDOM))
        return { range: h, text: r, marks: u, line: c };
      if (c != n.contentDOM)
        u.push({
          node: c,
          deco: new In({ inclusive: !0, attributes: kO(c), tagName: c.tagName.toLowerCase() }),
        });
      else return null;
    }
  }
}
function FO(n, e) {
  return n.nodeType != 1
    ? 0
    : (e && n.childNodes[e - 1].contentEditable == "false" ? 1 : 0) |
        (e < n.childNodes.length && n.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let zO = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    $o(e, t, this.changes);
  }
  comparePoint(e, t) {
    $o(e, t, this.changes);
  }
};
function ZO(n, e, t) {
  let i = new zO();
  return K.compare(n, e, t, i), i.changes;
}
function WO(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == "false") return !0;
  return !1;
}
function jO(n, e) {
  let t = !1;
  return (
    e &&
      n.iterChangedRanges((i, r) => {
        i < e.to && r > e.from && (t = !0);
      }),
    t
  );
}
function LO(n, e, t = 1) {
  let i = n.charCategorizer(e),
    r = n.doc.lineAt(e),
    s = e - r.from;
  if (r.length == 0) return w.cursor(e);
  s == 0 ? (t = 1) : s == r.length && (t = -1);
  let o = s,
    l = s;
  t < 0 ? (o = Pe(r.text, s, !1)) : (l = Pe(r.text, s));
  let a = i(r.text.slice(o, l));
  for (; o > 0; ) {
    let h = Pe(r.text, o, !1);
    if (i(r.text.slice(h, o)) != a) break;
    o = h;
  }
  for (; l < r.length; ) {
    let h = Pe(r.text, l);
    if (i(r.text.slice(l, h)) != a) break;
    l = h;
  }
  return w.range(o + r.from, l + r.from);
}
function qO(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function IO(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function Bs(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Ta(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Fa(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function zo(n, e, t) {
  let i,
    r,
    s,
    o,
    l = !1,
    a,
    h,
    u,
    c;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let O = Li(p);
    for (let g = 0; g < O.length; g++) {
      let S = O[g];
      r && Bs(r, S) && (S = Ta(Fa(S, r.bottom), r.top));
      let b = qO(e, S),
        D = IO(t, S);
      if (b == 0 && D == 0) return p.nodeType == 3 ? za(p, e, t) : zo(p, e, t);
      if (!i || o > D || (o == D && s > b)) {
        (i = p), (r = S), (s = b), (o = D);
        let v = D ? (t < S.top ? -1 : 1) : b ? (e < S.left ? -1 : 1) : 0;
        l = !v || (v > 0 ? g < O.length - 1 : g > 0);
      }
      b == 0
        ? t > S.bottom && (!u || u.bottom < S.bottom)
          ? ((a = p), (u = S))
          : t < S.top && (!c || c.top > S.top) && ((h = p), (c = S))
        : u && Bs(u, S)
          ? (u = Fa(u, S.bottom))
          : c && Bs(c, S) && (c = Ta(c, S.top));
    }
  }
  if ((u && u.bottom >= t ? ((i = a), (r = u)) : c && c.top <= t && ((i = h), (r = c)), !i))
    return { node: n, offset: 0 };
  let f = Math.max(r.left, Math.min(r.right, e));
  if (i.nodeType == 3) return za(i, f, t);
  if (l && i.contentEditable != "false") return zo(i, f, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function za(n, e, t) {
  let i = n.nodeValue.length,
    r = -1,
    s = 1e9,
    o = 0;
  for (let l = 0; l < i; l++) {
    let a = yi(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let u = a[h];
      if (u.top == u.bottom) continue;
      o || (o = e - u.left);
      let c = (u.top > t ? u.top - t : t - u.bottom) - 1;
      if (u.left - 1 <= e && u.right + 1 >= e && c < s) {
        let f = e >= (u.left + u.right) / 2,
          d = f;
        if (
          ((F.chrome || F.gecko) && yi(n, l).getBoundingClientRect().left == u.right && (d = !f),
          c <= 0)
        )
          return { node: n, offset: l + (d ? 1 : 0) };
        (r = l + (d ? 1 : 0)), (s = c);
      }
    }
  }
  return { node: n, offset: r > -1 ? r : o > 0 ? n.nodeValue.length : 0 };
}
function Bc(n, e, t, i = -1) {
  var r, s;
  let o = n.contentDOM.getBoundingClientRect(),
    l = o.top + n.viewState.paddingTop,
    a,
    { docHeight: h } = n.viewState,
    { x: u, y: c } = e,
    f = c - l;
  if (f < 0) return 0;
  if (f > h) return n.state.doc.length;
  for (
    let v = n.viewState.heightOracle.textHeight / 2, k = !1;
    (a = n.elementAtHeight(f)), a.type != Fe.Text;

  )
    for (; (f = i > 0 ? a.bottom + v : a.top - v), !(f >= 0 && f <= h); ) {
      if (k) return t ? null : 0;
      (k = !0), (i = -i);
    }
  c = l + f;
  let d = a.from;
  if (d < n.viewport.from) return n.viewport.from == 0 ? 0 : t ? null : Za(n, o, a, u, c);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Za(n, o, a, u, c);
  let p = n.dom.ownerDocument,
    O = n.root.elementFromPoint ? n.root : p,
    g = O.elementFromPoint(u, c);
  g && !n.contentDOM.contains(g) && (g = null),
    g ||
      ((u = Math.max(o.left + 1, Math.min(o.right - 1, u))),
      (g = O.elementFromPoint(u, c)),
      g && !n.contentDOM.contains(g) && (g = null));
  let S,
    b = -1;
  if (g && ((r = n.docView.nearest(g)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let v = p.caretPositionFromPoint(u, c);
      v && ({ offsetNode: S, offset: b } = v);
    } else if (p.caretRangeFromPoint) {
      let v = p.caretRangeFromPoint(u, c);
      v &&
        (({ startContainer: S, startOffset: b } = v),
        (!n.contentDOM.contains(S) || (F.safari && _O(S, b, u)) || (F.chrome && VO(S, b, u))) &&
          (S = void 0));
    }
    S && (b = Math.min(kt(S), b));
  }
  if (!S || !n.docView.dom.contains(S)) {
    let v = ge.find(n.docView, d);
    if (!v) return f > a.top + a.height / 2 ? a.to : a.from;
    ({ node: S, offset: b } = zo(v.dom, u, c));
  }
  let D = n.docView.nearest(S);
  if (!D) return null;
  if (D.isWidget && ((s = D.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let v = D.dom.getBoundingClientRect();
    return e.y < v.top || (e.y <= v.bottom && e.x <= (v.left + v.right) / 2)
      ? D.posAtStart
      : D.posAtEnd;
  } else return D.localPosFromDOM(S, b) + D.posAtStart;
}
function Za(n, e, t, i, r) {
  let s = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight,
      a = Math.floor((r - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    s += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + ko(o, s, n.state.tabSize);
}
function _O(n, e, t) {
  let i;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length)) return !1;
  for (let r = n.nextSibling; r; r = r.nextSibling)
    if (r.nodeType != 1 || r.nodeName != "BR") return !1;
  return yi(n, i - 1, i).getBoundingClientRect().left > t;
}
function VO(n, e, t) {
  if (e != 0) return !1;
  for (let r = n; ; ) {
    let s = r.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != r) return !1;
    if (s.classList.contains("cm-line")) break;
    r = s;
  }
  let i =
    n.nodeType == 1
      ? n.getBoundingClientRect()
      : yi(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function Zo(n, e) {
  let t = n.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || (i.to == e && (i.to == t.to || i.type == Fe.Text))) return i;
  }
  return t;
}
function XO(n, e, t, i) {
  let r = Zo(n, e.head),
    s =
      !i || r.type != Fe.Text || !(n.lineWrapping || r.widgetLineBreaks)
        ? null
        : n.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let o = n.dom.getBoundingClientRect(),
      l = n.textDirectionAt(r.from),
      a = n.posAtCoords({
        x: t == (l == he.LTR) ? o.right - 1 : o.left + 1,
        y: (s.top + s.bottom) / 2,
      });
    if (a != null) return w.cursor(a, t ? -1 : 1);
  }
  return w.cursor(t ? r.to : r.from, t ? -1 : 1);
}
function Wa(n, e, t, i) {
  let r = n.state.doc.lineAt(e.head),
    s = n.bidiSpans(r),
    o = n.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let h = $O(r, s, o, l, t),
      u = gc;
    if (!h) {
      if (r.number == (t ? n.state.doc.lines : 1)) return l;
      (u = `
`),
        (r = n.state.doc.line(r.number + (t ? 1 : -1))),
        (s = n.bidiSpans(r)),
        (h = n.visualLineSide(r, !t));
    }
    if (a) {
      if (!a(u)) return l;
    } else {
      if (!i) return h;
      a = i(u);
    }
    l = h;
  }
}
function YO(n, e, t) {
  let i = n.state.charCategorizer(e),
    r = i(t);
  return (s) => {
    let o = i(s);
    return r == ue.Space && (r = o), r == o;
  };
}
function NO(n, e, t, i) {
  let r = e.head,
    s = t ? 1 : -1;
  if (r == (t ? n.state.doc.length : 0)) return w.cursor(r, e.assoc);
  let o = e.goalColumn,
    l,
    a = n.contentDOM.getBoundingClientRect(),
    h = n.coordsAtPos(r, e.assoc || -1),
    u = n.documentTop;
  if (h) o == null && (o = h.left - a.left), (l = s < 0 ? h.top : h.bottom);
  else {
    let d = n.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (r - d.from))),
      (l = (s < 0 ? d.top : d.bottom) + u);
  }
  let c = a.left + o,
    f = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (f + d) * s,
      O = Bc(n, { x: c, y: p }, !1, s);
    if (p < a.top || p > a.bottom || (s < 0 ? O < r : O > r)) {
      let g = n.docView.coordsForChar(O),
        S = !g || p < g.top ? -1 : 1;
      return w.cursor(O, S, void 0, o);
    }
  }
}
function Cr(n, e, t) {
  for (;;) {
    let i = 0;
    for (let r of n)
      r.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let a = i || t || (e - s < o - e ? -1 : 1);
          (e = a < 0 ? s : o), (i = a);
        }
      });
    if (!i) return e;
  }
}
function Rs(n, e, t) {
  let i = Cr(
    n.state.facet(Rl).map((r) => r(n)),
    t.from,
    e.head > t.from ? -1 : 1
  );
  return i == t.from ? t : w.cursor(i, i < t.from ? 1 : -1);
}
const an = "￿";
class GO {
  constructor(e, t) {
    (this.points = e), (this.text = ""), (this.lineSeparator = t.facet(U.lineSeparator));
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += an;
  }
  readRange(e, t) {
    if (!e) return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let s = this.text.length;
      this.readNode(r);
      let o = r.nextSibling;
      if (o == t) break;
      let l = ne.get(r),
        a = ne.get(o);
      (l && a
        ? l.breakAfter
        : (l ? l.breakAfter : zr(r)) ||
          (zr(o) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > s)) &&
        this.lineBreak(),
        (r = o);
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1,
        o = 1,
        l;
      if (
        (this.lineSeparator
          ? ((s = t.indexOf(this.lineSeparator, i)), (o = this.lineSeparator.length))
          : (l = r.exec(t)) && ((s = l.index), (o = l[0].length)),
        this.append(t.slice(i, s < 0 ? t.length : s)),
        s < 0)
      )
        break;
      if ((this.lineBreak(), o > 1))
        for (let a of this.points) a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore) return;
    let t = ne.get(e),
      i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == "BR"
          ? e.nextSibling && this.lineBreak()
          : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) &&
        (i.pos = this.text.length + (UO(e, i.node, i.offset) ? t : 0));
  }
}
function UO(n, e, t) {
  for (;;) {
    if (!e || t < kt(e)) return !1;
    if (e == n) return !0;
    (t = bi(e) + 1), (e = e.parentNode);
  }
}
class ja {
  constructor(e, t) {
    (this.node = e), (this.offset = t), (this.pos = -1);
  }
}
class HO {
  constructor(e, t, i, r) {
    (this.typeOver = r), (this.bounds = null), (this.text = ""), (this.domChanged = t > -1);
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = s || o ? [] : eg(e),
        a = new GO(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM),
        (this.text = a.text),
        (this.newSel = tg(l, this.bounds.from));
    } else {
      let l = e.observer.selectionRange,
        a =
          (s && s.node == l.focusNode && s.offset == l.focusOffset) ||
          !vo(e.contentDOM, l.focusNode)
            ? e.state.selection.main.head
            : e.docView.posFromDOM(l.focusNode, l.focusOffset),
        h =
          (o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
          !vo(e.contentDOM, l.anchorNode)
            ? e.state.selection.main.anchor
            : e.docView.posFromDOM(l.anchorNode, l.anchorOffset),
        u = e.viewport;
      if (
        (F.ios || F.chrome) &&
        e.state.selection.main.empty &&
        a != h &&
        (u.from > 0 || u.to < e.state.doc.length)
      ) {
        let c = Math.min(a, h),
          f = Math.max(a, h),
          d = u.from - c,
          p = u.to - f;
        (d == 0 || d == 1 || c == 0) &&
          (p == 0 || p == -1 || f == e.state.doc.length) &&
          ((a = 0), (h = e.state.doc.length));
      }
      this.newSel = w.single(h, a);
    }
  }
}
function Rc(n, e) {
  let t,
    { newSel: i } = e,
    r = n.state.selection.main,
    s = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds,
      a = r.from,
      h = null;
    (s === 8 || (F.android && e.text.length < l - o)) && ((a = r.to), (h = "end"));
    let u = JO(n.state.doc.sliceString(o, l, an), e.text, a - o, h);
    u &&
      (F.chrome &&
        s == 13 &&
        u.toB == u.from + 2 &&
        e.text.slice(u.from, u.toB) == an + an &&
        u.toB--,
      (t = {
        from: o + u.from,
        to: o + u.toA,
        insert: J.of(e.text.slice(u.from, u.toB).split(an)),
      }));
  } else i && ((!n.hasFocus && n.state.facet(Lt)) || i.main.eq(r)) && (i = null);
  if (!t && !i) return !1;
  if (
    (!t && e.typeOver && !r.empty && i && i.main.empty
      ? (t = { from: r.from, to: r.to, insert: n.state.doc.slice(r.from, r.to) })
      : t &&
          t.from >= r.from &&
          t.to <= r.to &&
          (t.from != r.from || t.to != r.to) &&
          r.to - r.from - (t.to - t.from) <= 4
        ? (t = {
            from: r.from,
            to: r.to,
            insert: n.state.doc
              .slice(r.from, t.from)
              .append(t.insert)
              .append(n.state.doc.slice(t.to, r.to)),
          })
        : (F.mac || F.android) &&
            t &&
            t.from == t.to &&
            t.from == r.head - 1 &&
            /^\. ?$/.test(t.insert.toString()) &&
            n.contentDOM.getAttribute("autocorrect") == "off"
          ? (i && t.insert.length == 2 && (i = w.single(i.main.anchor - 1, i.main.head - 1)),
            (t = { from: r.from, to: r.to, insert: J.of([" "]) }))
          : F.chrome &&
            t &&
            t.from == t.to &&
            t.from == r.head &&
            t.insert.toString() ==
              `
 ` &&
            n.lineWrapping &&
            (i && (i = w.single(i.main.anchor - 1, i.main.head - 1)),
            (t = { from: r.from, to: r.to, insert: J.of([" "]) })),
    t)
  )
    return Tl(n, t, i, s);
  if (i && !i.main.eq(r)) {
    let o = !1,
      l = "select";
    return (
      n.inputState.lastSelectionTime > Date.now() - 50 &&
        (n.inputState.lastSelectionOrigin == "select" && (o = !0),
        (l = n.inputState.lastSelectionOrigin)),
      n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }),
      !0
    );
  } else return !1;
}
function Tl(n, e, t, i = -1) {
  if (F.ios && n.inputState.flushIOSKey(e)) return !0;
  let r = n.state.selection.main;
  if (
    F.android &&
    ((e.to == r.to &&
      (e.from == r.from || (e.from == r.from - 1 && n.state.sliceDoc(e.from, r.from) == " ")) &&
      e.insert.length == 1 &&
      e.insert.lines == 2 &&
      Ri(n.contentDOM, "Enter", 13)) ||
      (((e.from == r.from - 1 && e.to == r.to && e.insert.length == 0) ||
        (i == 8 && e.insert.length < e.to - e.from && e.to > r.head)) &&
        Ri(n.contentDOM, "Backspace", 8)) ||
      (e.from == r.from &&
        e.to == r.to + 1 &&
        e.insert.length == 0 &&
        Ri(n.contentDOM, "Delete", 46)))
  )
    return !0;
  let s = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o,
    l = () => o || (o = KO(n, e, t));
  return n.state.facet(xc).some((a) => a(n, e.from, e.to, s, l)) || n.dispatch(l()), !0;
}
function KO(n, e, t) {
  let i,
    r = n.state,
    s = r.selection.main;
  if (
    e.from >= s.from &&
    e.to <= s.to &&
    e.to - e.from >= (s.to - s.from) / 3 &&
    (!t || (t.main.empty && t.main.from == e.from + e.insert.length)) &&
    n.inputState.composing < 0
  ) {
    let l = s.from < e.from ? r.sliceDoc(s.from, e.from) : "",
      a = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    i = r.replaceSelection(
      n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a)
    );
  } else {
    let l = r.changes(e),
      a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (
      r.selection.ranges.length > 1 &&
      n.inputState.composing >= 0 &&
      e.to <= s.to &&
      e.to >= s.to - 10
    ) {
      let h = n.state.sliceDoc(e.from, e.to),
        u,
        c = t && Ec(n, t.main.head);
      if (c) {
        let p = e.insert.length - (e.to - e.from);
        u = { from: c.from, to: c.to - p };
      } else u = n.state.doc.lineAt(s.head);
      let f = s.to - e.to,
        d = s.to - s.from;
      i = r.changeByRange((p) => {
        if (p.from == s.from && p.to == s.to) return { changes: l, range: a || p.map(l) };
        let O = p.to - f,
          g = O - h.length;
        if (p.to - p.from != d || n.state.sliceDoc(g, O) != h || (p.to >= u.from && p.from <= u.to))
          return { range: p };
        let S = r.changes({ from: g, to: O, insert: e.insert }),
          b = p.to - s.to;
        return {
          changes: S,
          range: a ? w.range(Math.max(0, a.anchor + b), Math.max(0, a.head + b)) : p.map(S),
        };
      });
    } else i = { changes: l, selection: a && r.selection.replaceRange(a) };
  }
  let o = "input.type";
  return (
    (n.composing ||
      (n.inputState.compositionPendingChange &&
        n.inputState.compositionEndedAt > Date.now() - 50)) &&
      ((n.inputState.compositionPendingChange = !1),
      (o += ".compose"),
      n.inputState.compositionFirstChange &&
        ((o += ".start"), (n.inputState.compositionFirstChange = !1))),
    r.update(i, { userEvent: o, scrollIntoView: !0 })
  );
}
function JO(n, e, t, i) {
  let r = Math.min(n.length, e.length),
    s = 0;
  for (; s < r && n.charCodeAt(s) == e.charCodeAt(s); ) s++;
  if (s == r && n.length == e.length) return null;
  let o = n.length,
    l = e.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); ) o--, l--;
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    t -= o + a - s;
  }
  if (o < s && n.length < e.length) {
    let a = t <= s && t >= o ? s - t : 0;
    (s -= a), (l = s + (l - o)), (o = s);
  } else if (l < s) {
    let a = t <= s && t >= l ? s - t : 0;
    (s -= a), (o = s + (o - l)), (l = s);
  }
  return { from: s, toA: o, toB: l };
}
function eg(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM) return e;
  let { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s } = n.observer.selectionRange;
  return t && (e.push(new ja(t, i)), (r != t || s != i) && e.push(new ja(r, s))), e;
}
function tg(n, e) {
  if (n.length == 0) return null;
  let t = n[0].pos,
    i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? w.single(t + e, i + e) : null;
}
class ig {
  setSelectionOrigin(e) {
    (this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
  }
  constructor(e) {
    (this.view = e),
      (this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.lastTouchTime = 0),
      (this.lastFocusTime = 0),
      (this.lastScrollTop = 0),
      (this.lastScrollLeft = 0),
      (this.pendingIOSKey = void 0),
      (this.tabFocusMode = -1),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.handlers = Object.create(null)),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.compositionPendingKey = !1),
      (this.compositionPendingChange = !1),
      (this.mouseSelection = null),
      (this.draggedContent = null),
      (this.handleEvent = this.handleEvent.bind(this)),
      (this.notifiedFocused = e.hasFocus),
      F.safari && e.contentDOM.addEventListener("input", () => null),
      F.gecko && Sg(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !ug(this.view, e) ||
      this.ignoreDuringComposition(e) ||
      (e.type == "keydown" && this.keydown(e)) ||
      this.runHandlers(e.type, e);
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let r of i.observers) r(this.view, t);
      for (let r of i.handlers) {
        if (t.defaultPrevented) break;
        if (r(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = ng(e),
      i = this.handlers,
      r = this.view.contentDOM;
    for (let s in t)
      if (s != "scroll") {
        let o = !t[s].handlers.length,
          l = i[s];
        l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), (l = null)),
          l || r.addEventListener(s, this.handleEvent, { passive: o });
      }
    for (let s in i) s != "scroll" && !t[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (
      ((this.lastKeyCode = e.keyCode),
      (this.lastKeyTime = Date.now()),
      e.keyCode == 9 &&
        this.tabFocusMode > -1 &&
        (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
    )
      return !0;
    if (
      (this.tabFocusMode > 0 &&
        e.keyCode != 27 &&
        Fc.indexOf(e.keyCode) < 0 &&
        (this.tabFocusMode = -1),
      F.android && F.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
    )
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return F.ios &&
      !e.synthetic &&
      !e.altKey &&
      !e.metaKey &&
      (((t = Tc.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey) ||
        (rg.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
      ? ((this.pendingIOSKey = t || e), setTimeout(() => this.flushIOSKey(), 250), !0)
      : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || (t.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()))
      ? !1
      : ((this.pendingIOSKey = void 0),
        Ri(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : F.safari &&
            !F.ios &&
            this.compositionPendingKey &&
            Date.now() - this.compositionEndedAt < 100
          ? ((this.compositionPendingKey = !1), !0)
          : !1
      : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), (this.mouseSelection = e);
  }
  update(e) {
    this.view.observer.update(e),
      this.mouseSelection && this.mouseSelection.update(e),
      this.draggedContent &&
        e.docChanged &&
        (this.draggedContent = this.draggedContent.map(e.changes)),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function La(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (r) {
      qe(t.state, r);
    }
  };
}
function ng(n) {
  let e = Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let r = i.spec;
    if (r && r.domEventHandlers)
      for (let s in r.domEventHandlers) {
        let o = r.domEventHandlers[s];
        o && t(s).handlers.push(La(i.value, o));
      }
    if (r && r.domEventObservers)
      for (let s in r.domEventObservers) {
        let o = r.domEventObservers[s];
        o && t(s).observers.push(La(i.value, o));
      }
  }
  for (let i in ut) t(i).handlers.push(ut[i]);
  for (let i in rt) t(i).observers.push(rt[i]);
  return e;
}
const Tc = [
    { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
    { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
    { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
    { key: "Delete", keyCode: 46, inputType: "deleteContentForward" },
  ],
  rg = "dthko",
  Fc = [16, 17, 18, 20, 91, 92, 224, 225],
  ir = 6;
function nr(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function sg(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class og {
  constructor(e, t, i, r) {
    (this.view = e),
      (this.startEvent = t),
      (this.style = i),
      (this.mustSelect = r),
      (this.scrollSpeed = { x: 0, y: 0 }),
      (this.scrolling = -1),
      (this.lastEvent = t),
      (this.scrollParents = OO(e.contentDOM)),
      (this.atoms = e.state.facet(Rl).map((o) => o(e)));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", (this.move = this.move.bind(this))),
      s.addEventListener("mouseup", (this.up = this.up.bind(this))),
      (this.extend = t.shiftKey),
      (this.multiple = e.state.facet(U.allowMultipleSelections) && lg(e, t)),
      (this.dragging = hg(e, t) && Wc(t) == 1 ? null : !1);
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || (this.dragging == null && sg(this.startEvent, e) < 10)) return;
    this.select((this.lastEvent = e));
    let t = 0,
      i = 0,
      r = 0,
      s = 0,
      o = this.view.win.innerWidth,
      l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()),
      this.scrollParents.y &&
        ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = $c(this.view);
    e.clientX - a.left <= r + ir
      ? (t = -nr(r - e.clientX))
      : e.clientX + a.right >= o - ir && (t = nr(e.clientX - o)),
      e.clientY - a.top <= s + ir
        ? (i = -nr(s - e.clientY))
        : e.clientY + a.bottom >= l - ir && (i = nr(e.clientY - l)),
      this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener("mousemove", this.move),
      e.removeEventListener("mouseup", this.up),
      (this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null);
  }
  setScrollSpeed(e, t) {
    (this.scrollSpeed = { x: e, y: t }),
      e || t
        ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50))
        : this.scrolling > -1 && (clearInterval(this.scrolling), (this.scrolling = -1));
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && ((this.scrollParents.x.scrollLeft += e), (e = 0)),
      t && this.scrollParents.y && ((this.scrollParents.y.scrollTop += t), (t = 0)),
      (e || t) && this.view.win.scrollBy(e, t),
      this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let r = e.ranges[i],
        s = null;
      if (r.empty) {
        let o = Cr(this.atoms, r.from, 0);
        o != r.from && (s = w.cursor(o, -1));
      } else {
        let o = Cr(this.atoms, r.from, -1),
          l = Cr(this.atoms, r.to, 1);
        (o != r.from || l != r.to) &&
          (s = w.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
      }
      s && (t || (t = e.ranges.slice()), (t[i] = s));
    }
    return t ? w.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this,
      i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) &&
      this.view.dispatch({ selection: i, userEvent: "select.pointer" }),
      (this.mustSelect = !1);
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent("input.type"))
      ? this.destroy()
      : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function lg(n, e) {
  let t = n.state.facet(mc);
  return t.length ? t[0](e) : F.mac ? e.metaKey : e.ctrlKey;
}
function ag(n, e) {
  let t = n.state.facet(Sc);
  return t.length ? t[0](e) : F.mac ? !e.altKey : !e.ctrlKey;
}
function hg(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty) return !1;
  let i = Qn(n.root);
  if (!i || i.rangeCount == 0) return !0;
  let r = i.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function ug(n, e) {
  if (!e.bubbles) return !0;
  if (e.defaultPrevented) return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || ((i = ne.get(t)) && i.ignoreEvent(e))) return !1;
  return !0;
}
const ut = Object.create(null),
  rt = Object.create(null),
  zc = (F.ie && F.ie_version < 15) || (F.ios && F.webkit_version < 604);
function cg(n) {
  let e = n.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement("textarea"));
  (t.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    t.focus(),
    setTimeout(() => {
      n.focus(), t.remove(), Zc(n, t.value);
    }, 50);
}
function ps(n, e, t) {
  for (let i of n.facet(e)) t = i(t, n);
  return t;
}
function Zc(n, e) {
  e = ps(n.state, $l, e);
  let { state: t } = n,
    i,
    r = 1,
    s = t.toText(e),
    o = s.lines == t.selection.ranges.length;
  if (Wo != null && t.selection.ranges.every((a) => a.empty) && Wo == s.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let u = t.doc.lineAt(h.from);
      if (u.from == a) return { range: h };
      a = u.from;
      let c = t.toText((o ? s.line(r++).text : e) + t.lineBreak);
      return { changes: { from: u.from, insert: c }, range: w.cursor(h.from + c.length) };
    });
  } else
    o
      ? (i = t.changeByRange((a) => {
          let h = s.line(r++);
          return {
            changes: { from: a.from, to: a.to, insert: h.text },
            range: w.cursor(a.from + h.length),
          };
        }))
      : (i = t.replaceSelection(s));
  n.dispatch(i, { userEvent: "input.paste", scrollIntoView: !0 });
}
rt.scroll = (n) => {
  (n.inputState.lastScrollTop = n.scrollDOM.scrollTop),
    (n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft);
};
ut.keydown = (n, e) => (
  n.inputState.setSelectionOrigin("select"),
  e.keyCode == 27 &&
    n.inputState.tabFocusMode != 0 &&
    (n.inputState.tabFocusMode = Date.now() + 2e3),
  !1
);
rt.touchstart = (n, e) => {
  (n.inputState.lastTouchTime = Date.now()), n.inputState.setSelectionOrigin("select.pointer");
};
rt.touchmove = (n) => {
  n.inputState.setSelectionOrigin("select.pointer");
};
ut.mousedown = (n, e) => {
  if ((n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)) return !1;
  let t = null;
  for (let i of n.state.facet(bc)) if (((t = i(n, e)), t)) break;
  if ((!t && e.button == 0 && (t = pg(n, e)), t)) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new og(n, e, t, i)),
      i &&
        n.observer.ignore(() => {
          Ku(n.contentDOM);
          let s = n.root.activeElement;
          s && !s.contains(n.contentDOM) && s.blur();
        });
    let r = n.inputState.mouseSelection;
    if (r) return r.start(e), r.dragging === !1;
  }
  return !1;
};
function qa(n, e, t, i) {
  if (i == 1) return w.cursor(e, t);
  if (i == 2) return LO(n.state, e, t);
  {
    let r = ge.find(n.docView, e),
      s = n.state.doc.lineAt(r ? r.posAtEnd : e),
      o = r ? r.posAtStart : s.from,
      l = r ? r.posAtEnd : s.to;
    return l < n.state.doc.length && l == s.to && l++, w.range(o, l);
  }
}
let Ia = (n, e, t) => e >= t.top && e <= t.bottom && n >= t.left && n <= t.right;
function fg(n, e, t, i) {
  let r = ge.find(n.docView, e);
  if (!r) return 1;
  let s = e - r.posAtStart;
  if (s == 0) return 1;
  if (s == r.length) return -1;
  let o = r.coordsAt(s, -1);
  if (o && Ia(t, i, o)) return -1;
  let l = r.coordsAt(s, 1);
  return l && Ia(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function _a(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: fg(n, t, e.clientX, e.clientY) };
}
const dg = F.ie && F.ie_version <= 11;
let Va = null,
  Xa = 0,
  Ya = 0;
function Wc(n) {
  if (!dg) return n.detail;
  let e = Va,
    t = Ya;
  return (
    (Va = n),
    (Ya = Date.now()),
    (Xa =
      !e ||
      (t > Date.now() - 400 &&
        Math.abs(e.clientX - n.clientX) < 2 &&
        Math.abs(e.clientY - n.clientY) < 2)
        ? (Xa + 1) % 3
        : 1)
  );
}
function pg(n, e) {
  let t = _a(n, e),
    i = Wc(e),
    r = n.state.selection;
  return {
    update(s) {
      s.docChanged && ((t.pos = s.changes.mapPos(t.pos)), (r = r.map(s.changes)));
    },
    get(s, o, l) {
      let a = _a(n, s),
        h,
        u = qa(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let c = qa(n, t.pos, t.bias, i),
          f = Math.min(c.from, u.from),
          d = Math.max(c.to, u.to);
        u = f < u.from ? w.range(f, d) : w.range(d, f);
      }
      return o
        ? r.replaceRange(r.main.extend(u.from, u.to))
        : l && i == 1 && r.ranges.length > 1 && (h = Og(r, a.pos))
          ? h
          : l
            ? r.addRange(u)
            : w.create([u]);
    },
  };
}
function Og(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: r } = n.ranges[t];
    if (i <= e && r >= e)
      return w.create(
        n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)),
        n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0)
      );
  }
  return null;
}
ut.dragstart = (n, e) => {
  let {
    selection: { main: t },
  } = n.state;
  if (e.target.draggable) {
    let r = n.docView.nearest(e.target);
    if (r && r.isWidget) {
      let s = r.posAtStart,
        o = s + r.length;
      (s >= t.to || o <= t.from) && (t = w.range(s, o));
    }
  }
  let { inputState: i } = n;
  return (
    i.mouseSelection && (i.mouseSelection.dragging = !0),
    (i.draggedContent = t),
    e.dataTransfer &&
      (e.dataTransfer.setData("Text", ps(n.state, El, n.state.sliceDoc(t.from, t.to))),
      (e.dataTransfer.effectAllowed = "copyMove")),
    !1
  );
};
ut.dragend = (n) => ((n.inputState.draggedContent = null), !1);
function Na(n, e, t, i) {
  if (((t = ps(n.state, $l, t)), !t)) return;
  let r = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    { draggedContent: s } = n.inputState,
    o = i && s && ag(n, e) ? { from: s.from, to: s.to } : null,
    l = { from: r, insert: t },
    a = n.state.changes(o ? [o, l] : l);
  n.focus(),
    n.dispatch({
      changes: a,
      selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
      userEvent: o ? "move.drop" : "input.drop",
    }),
    (n.inputState.draggedContent = null);
}
ut.drop = (n, e) => {
  if (!e.dataTransfer) return !1;
  if (n.state.readOnly) return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length),
      r = 0,
      s = () => {
        ++r == t.length && Na(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
      };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      (l.onerror = s),
        (l.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), s();
        }),
        l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i) return Na(n, e, i, !0), !0;
  }
  return !1;
};
ut.paste = (n, e) => {
  if (n.state.readOnly) return !0;
  n.observer.flush();
  let t = zc ? null : e.clipboardData;
  return t ? (Zc(n, t.getData("text/plain") || t.getData("text/uri-list")), !0) : (cg(n), !1);
};
function gg(n, e) {
  let t = n.dom.parentNode;
  if (!t) return;
  let i = t.appendChild(document.createElement("textarea"));
  (i.style.cssText = "position: fixed; left: -10000px; top: 10px"),
    (i.value = e),
    i.focus(),
    (i.selectionEnd = e.length),
    (i.selectionStart = 0),
    setTimeout(() => {
      i.remove(), n.focus();
    }, 50);
}
function mg(n) {
  let e = [],
    t = [],
    i = !1;
  for (let r of n.selection.ranges) r.empty || (e.push(n.sliceDoc(r.from, r.to)), t.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of n.selection.ranges) {
      let o = n.doc.lineAt(s);
      o.number > r &&
        (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })),
        (r = o.number);
    }
    i = !0;
  }
  return { text: ps(n, El, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let Wo = null;
ut.copy = ut.cut = (n, e) => {
  let { text: t, ranges: i, linewise: r } = mg(n.state);
  if (!t && !r) return !1;
  (Wo = r ? t : null),
    e.type == "cut" &&
      !n.state.readOnly &&
      n.dispatch({ changes: i, scrollIntoView: !0, userEvent: "delete.cut" });
  let s = zc ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", t), !0) : (gg(n, t), !1);
};
const jc = Dt.define();
function Lc(n, e) {
  let t = [];
  for (let i of n.facet(kc)) {
    let r = i(n, e);
    r && t.push(r);
  }
  return t ? n.update({ effects: t, annotations: jc.of(!0) }) : null;
}
function qc(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = Lc(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
rt.focus = (n) => {
  (n.inputState.lastFocusTime = Date.now()),
    !n.scrollDOM.scrollTop &&
      (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) &&
      ((n.scrollDOM.scrollTop = n.inputState.lastScrollTop),
      (n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft)),
    qc(n);
};
rt.blur = (n) => {
  n.observer.clearSelectionRange(), qc(n);
};
rt.compositionstart = rt.compositionupdate = (n) => {
  n.observer.editContext ||
    (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0),
    n.inputState.composing < 0 && (n.inputState.composing = 0));
};
rt.compositionend = (n) => {
  n.observer.editContext ||
    ((n.inputState.composing = -1),
    (n.inputState.compositionEndedAt = Date.now()),
    (n.inputState.compositionPendingKey = !0),
    (n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0),
    (n.inputState.compositionFirstChange = null),
    F.chrome && F.android
      ? n.observer.flushSoon()
      : n.inputState.compositionPendingChange
        ? Promise.resolve().then(() => n.observer.flush())
        : setTimeout(() => {
            n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
          }, 50));
};
rt.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
ut.beforeinput = (n, e) => {
  var t, i;
  if (e.inputType == "insertReplacementText" && n.observer.editContext) {
    let s = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData("text/plain"),
      o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0],
        a = n.posAtDOM(l.startContainer, l.startOffset),
        h = n.posAtDOM(l.endContainer, l.endOffset);
      return Tl(n, { from: a, to: h, insert: n.state.toText(s) }, null), !0;
    }
  }
  let r;
  if (
    F.chrome &&
    F.android &&
    (r = Tc.find((s) => s.inputType == e.inputType)) &&
    (n.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")
  ) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 &&
        n.hasFocus &&
        (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return (
    F.ios && e.inputType == "deleteContentForward" && n.observer.flushSoon(),
    F.safari &&
      e.inputType == "insertText" &&
      n.inputState.composing >= 0 &&
      setTimeout(() => rt.compositionend(n, e), 20),
    !1
  );
};
const Ga = new Set();
function Sg(n) {
  Ga.has(n) ||
    (Ga.add(n), n.addEventListener("copy", () => {}), n.addEventListener("cut", () => {}));
}
const Ua = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let _i = !1;
function Ha() {
  _i = !1;
}
class bg {
  constructor(e) {
    (this.lineWrapping = e),
      (this.doc = J.empty),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.textHeight = 14),
      (this.lineLength = 30);
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return (
      this.lineWrapping &&
        (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))),
      this.lineHeight * i
    );
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) *
          this.lineHeight
      : this.lineHeight;
  }
  setDoc(e) {
    return (this.doc = e), this;
  }
  mustRefreshForWrapping(e) {
    return Ua.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      r < 0
        ? i++
        : this.heightSamples[Math.floor(r * 10)] ||
          ((t = !0), (this.heightSamples[Math.floor(r * 10)] = !0));
    }
    return t;
  }
  refresh(e, t, i, r, s, o) {
    let l = Ua.indexOf(e) > -1,
      a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (
      ((this.lineWrapping = l),
      (this.lineHeight = t),
      (this.charWidth = i),
      (this.textHeight = r),
      (this.lineLength = s),
      a)
    ) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let u = o[h];
        u < 0 ? h++ : (this.heightSamples[Math.floor(u * 10)] = !0);
      }
    }
    return a;
  }
}
class yg {
  constructor(e, t) {
    (this.from = e), (this.heights = t), (this.index = 0);
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class St {
  constructor(e, t, i, r, s) {
    (this.from = e), (this.length = t), (this.top = i), (this.height = r), (this._content = s);
  }
  get type() {
    return typeof this._content == "number"
      ? Fe.Text
      : Array.isArray(this._content)
        ? this._content
        : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof ei ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == "number" ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(
      Array.isArray(e._content) ? e._content : [e]
    );
    return new St(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var ae = (function (n) {
  return (
    (n[(n.ByPos = 0)] = "ByPos"),
    (n[(n.ByHeight = 1)] = "ByHeight"),
    (n[(n.ByPosNoHeight = 2)] = "ByPosNoHeight"),
    n
  );
})(ae || (ae = {}));
const vr = 0.001;
class ze {
  constructor(e, t, i = 2) {
    (this.length = e), (this.height = t), (this.flags = i);
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3);
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > vr && (_i = !0), (this.height = e));
  }
  replace(e, t, i) {
    return ze.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, r) {
    let s = this,
      o = i.doc;
    for (let l = r.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: u, toB: c } = r[l],
        f = s.lineAt(a, ae.ByPosNoHeight, i.setDoc(t), 0, 0),
        d = f.to >= h ? f : s.lineAt(h, ae.ByPosNoHeight, i, 0, 0);
      for (c += d.to - h, h = d.to; l > 0 && f.from <= r[l - 1].toA; )
        (a = r[l - 1].fromA),
          (u = r[l - 1].fromB),
          l--,
          a < f.from && (f = s.lineAt(a, ae.ByPosNoHeight, i, 0, 0));
      (u += f.from - a), (a = f.from);
      let p = Fl.build(i.setDoc(o), e, u, c);
      s = jr(s, s.replace(a, h, p));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new Ne(0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0,
      i = e.length,
      r = 0,
      s = 0;
    for (;;)
      if (t == i)
        if (r > s * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right),
            (i += 1 + l.break),
            (r -= l.size);
        } else if (s > r * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right),
            (i += 2 + l.break),
            (s -= l.size);
        } else break;
      else if (r < s) {
        let l = e[t++];
        l && (r += l.size);
      } else {
        let l = e[--i];
        l && (s += l.size);
      }
    let o = 0;
    return (
      e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), i++),
      new xg(ze.of(e.slice(0, t)), o, ze.of(e.slice(i)))
    );
  }
}
function jr(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (_i = !0), e);
}
ze.prototype.size = 1;
class Ic extends ze {
  constructor(e, t, i) {
    super(e, t), (this.deco = i);
  }
  blockAt(e, t, i, r) {
    return new St(r, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, r, s) {
    return this.blockAt(0, i, r, s);
  }
  forEachLine(e, t, i, r, s, o) {
    e <= s + this.length && t >= s && o(this.blockAt(0, i, r, s));
  }
  updateHeight(e, t = 0, i = !1, r) {
    return (
      r && r.from <= t && r.more && this.setHeight(r.heights[r.index++]), (this.outdated = !1), this
    );
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Ne extends Ic {
  constructor(e, t) {
    super(e, t, null), (this.collapsed = 0), (this.widgetHeight = 0), (this.breaks = 0);
  }
  blockAt(e, t, i, r) {
    return new St(r, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let r = i[0];
    return i.length == 1 &&
      (r instanceof Ne || (r instanceof ve && r.flags & 4)) &&
      Math.abs(this.length - r.length) < 10
      ? (r instanceof ve ? (r = new Ne(r.length, this.height)) : (r.height = this.height),
        this.outdated || (r.outdated = !1),
        r)
      : ze.of(i);
  }
  updateHeight(e, t = 0, i = !1, r) {
    return (
      r && r.from <= t && r.more
        ? this.setHeight(r.heights[r.index++])
        : (i || this.outdated) &&
          this.setHeight(
            Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) +
              this.breaks * e.lineHeight
          ),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class ve extends ze {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number,
      r = e.doc.lineAt(t + this.length).number,
      s = r - i + 1,
      o,
      l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      (o = a / s), this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else o = this.height / s;
    return { firstLine: i, lastLine: r, perLine: o, perChar: l };
  }
  blockAt(e, t, i, r) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, r);
    if (t.lineWrapping) {
      let h =
          r +
          (e < t.lineHeight
            ? 0
            : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)),
        u = t.doc.lineAt(h),
        c = l + u.length * a,
        f = Math.max(i, e - c / 2);
      return new St(u.from, u.length, f, c, 0);
    } else {
      let h = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))),
        { from: u, length: c } = t.doc.line(s + h);
      return new St(u, c, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, r, s) {
    if (t == ae.ByHeight) return this.blockAt(e, i, r, s);
    if (t == ae.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new St(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s),
      h = i.doc.lineAt(e),
      u = l + h.length * a,
      c = h.number - o,
      f = r + l * c + a * (h.from - s - c);
    return new St(h.from, h.length, Math.max(r, Math.min(f, r + this.height - u)), u, 0);
  }
  forEachLine(e, t, i, r, s, o) {
    (e = Math.max(e, s)), (t = Math.min(t, s + this.length));
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, s);
    for (let u = e, c = r; u <= t; ) {
      let f = i.doc.lineAt(u);
      if (u == e) {
        let p = f.number - l;
        c += a * p + h * (e - s - p);
      }
      let d = a + h * f.length;
      o(new St(f.from, f.length, c, d, 0)), (c += d), (u = f.to + 1);
    }
  }
  replace(e, t, i) {
    let r = this.length - t;
    if (r > 0) {
      let s = i[i.length - 1];
      s instanceof ve ? (i[i.length - 1] = new ve(s.length + r)) : i.push(null, new ve(r - 1));
    }
    if (e > 0) {
      let s = i[0];
      s instanceof ve ? (i[0] = new ve(e + s.length)) : i.unshift(new ve(e - 1), null);
    }
    return ze.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new ve(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new ve(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, r) {
    let s = t + this.length;
    if (r && r.from <= t + this.length && r.more) {
      let o = [],
        l = Math.max(t, r.from),
        a = -1;
      for (r.from > t && o.push(new ve(r.from - t - 1).updateHeight(e, t)); l <= s && r.more; ) {
        let u = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let c = r.heights[r.index++];
        a == -1 ? (a = c) : Math.abs(c - a) >= vr && (a = -2);
        let f = new Ne(u, c);
        (f.outdated = !1), o.push(f), (l += u + 1);
      }
      l <= s && o.push(null, new ve(s - l).updateHeight(e, l));
      let h = ze.of(o);
      return (
        (a < 0 ||
          Math.abs(h.height - this.height) >= vr ||
          Math.abs(a - this.heightMetrics(e, t).perLine) >= vr) &&
          (_i = !0),
        jr(this, h)
      );
    } else
      (i || this.outdated) &&
        (this.setHeight(e.heightForGap(t, t + this.length)), (this.outdated = !1));
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class xg extends ze {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)),
      (this.left = e),
      (this.right = i),
      (this.size = e.size + i.size);
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, r) {
    let s = i + this.left.height;
    return e < s
      ? this.left.blockAt(e, t, i, r)
      : this.right.blockAt(e, t, s, r + this.left.length + this.break);
  }
  lineAt(e, t, i, r, s) {
    let o = r + this.left.height,
      l = s + this.left.length + this.break,
      a = t == ae.ByHeight ? e < o : e < l,
      h = a ? this.left.lineAt(e, t, i, r, s) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l)) return h;
    let u = t == ae.ByPosNoHeight ? ae.ByPosNoHeight : ae.ByPos;
    return a ? h.join(this.right.lineAt(l, u, i, o, l)) : this.left.lineAt(l, u, i, r, s).join(h);
  }
  forEachLine(e, t, i, r, s, o) {
    let l = r + this.left.height,
      a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, r, s, o),
        t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, ae.ByPos, i, r, s);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, r, s, o),
        h.to >= e && h.from <= t && o(h),
        t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let r = this.left.length + this.break;
    if (t < r) return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - r, t - r, i));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of i) s.push(l);
    if ((e > 0 && Ka(s, o - 1), t < this.length)) {
      let l = s.length;
      this.decomposeRight(t, s), Ka(s, l);
    }
    return ze.of(s);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i) return this.left.decomposeLeft(e, t);
    t.push(this.left),
      this.break && (i++, e >= i && t.push(null)),
      e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length,
      r = i + this.break;
    if (e >= r) return this.right.decomposeRight(e - r, t);
    e < i && this.left.decomposeRight(e, t),
      this.break && e < r && t.push(null),
      t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size
      ? ze.of(this.break ? [e, null, t] : [e, t])
      : ((this.left = jr(this.left, e)),
        (this.right = jr(this.right, t)),
        this.setHeight(e.height + t.height),
        (this.outdated = e.outdated || t.outdated),
        (this.size = e.size + t.size),
        (this.length = e.length + this.break + t.length),
        this);
  }
  updateHeight(e, t = 0, i = !1, r) {
    let { left: s, right: o } = this,
      l = t + s.length + this.break,
      a = null;
    return (
      r && r.from <= t + s.length && r.more
        ? (a = s = s.updateHeight(e, t, i, r))
        : s.updateHeight(e, t, i),
      r && r.from <= l + o.length && r.more
        ? (a = o = o.updateHeight(e, l, i, r))
        : o.updateHeight(e, l, i),
      a
        ? this.balanced(s, o)
        : ((this.height = this.left.height + this.right.height), (this.outdated = !1), this)
    );
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Ka(n, e) {
  let t, i;
  n[e] == null &&
    (t = n[e - 1]) instanceof ve &&
    (i = n[e + 1]) instanceof ve &&
    n.splice(e - 1, 3, new ve(t.length + 1 + i.length));
}
const kg = 5;
class Fl {
  constructor(e, t) {
    (this.pos = e),
      (this.oracle = t),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e);
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd),
        r = this.nodes[this.nodes.length - 1];
      r instanceof Ne
        ? (r.length += i - this.pos)
        : (i > this.pos || !this.isCovered) && this.nodes.push(new Ne(i - this.pos, -1)),
        (this.writtenTo = i),
        t > i && (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0,
        s = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new Ic(o, r, i)) : (o || s || r >= kg) && this.addLineDeco(r, s, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    (this.lineStart = e),
      (this.lineEnd = t),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new Ne(this.pos - e, -1)),
      (this.writtenTo = this.pos);
  }
  blankContent(e, t) {
    let i = new ve(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Ne) return e;
    let t = new Ne(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let r = this.ensureLine();
    (r.length += i),
      (r.collapsed += i),
      (r.widgetHeight = Math.max(r.widgetHeight, e)),
      (r.breaks += t),
      (this.writtenTo = this.pos = this.pos + i);
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Ne) && !this.isCovered
      ? this.nodes.push(new Ne(0, -1))
      : (this.writtenTo < this.pos || t == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes)
      r instanceof Ne && r.updateHeight(this.oracle, i), (i += r ? r.length : 1);
    return this.nodes;
  }
  static build(e, t, i, r) {
    let s = new Fl(i, e);
    return K.spans(t, i, r, s, 0), s.finish(i);
  }
}
function Dg(n, e, t) {
  let i = new Cg();
  return K.compare(n, e, t, i, 0), i.changes;
}
class Cg {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, i, r) {
    (e < t || (i && i.heightRelevant) || (r && r.heightRelevant)) && $o(e, t, this.changes, 5);
  }
}
function vg(n, e) {
  let t = n.getBoundingClientRect(),
    i = n.ownerDocument,
    r = i.defaultView || window,
    s = Math.max(0, t.left),
    o = Math.min(r.innerWidth, t.right),
    l = Math.max(0, t.top),
    a = Math.min(r.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let u = h,
        c = window.getComputedStyle(u);
      if (
        (u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth) &&
        c.overflow != "visible"
      ) {
        let f = u.getBoundingClientRect();
        (s = Math.max(s, f.left)),
          (o = Math.min(o, f.right)),
          (l = Math.max(l, f.top)),
          (a = Math.min(h == n.parentNode ? r.innerHeight : a, f.bottom));
      }
      h = c.position == "absolute" || c.position == "fixed" ? u.offsetParent : u.parentNode;
    } else if (h.nodeType == 11) h = h.host;
    else break;
  return {
    left: s - t.left,
    right: Math.max(s, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e),
  };
}
function wg(n, e) {
  let t = n.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class Ts {
  constructor(e, t, i, r) {
    (this.from = e), (this.to = t), (this.size = i), (this.displaySize = r);
  }
  static same(e, t) {
    if (e.length != t.length) return !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i],
        s = t[i];
      if (r.from != s.from || r.to != s.to || r.size != s.size) return !1;
    }
    return !0;
  }
  draw(e, t) {
    return W.replace({ widget: new Qg(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(
      this.from,
      this.to
    );
  }
}
class Qg extends Ft {
  constructor(e, t) {
    super(), (this.size = e), (this.vertical = t);
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement("div");
    return (
      this.vertical
        ? (e.style.height = this.size + "px")
        : ((e.style.width = this.size + "px"),
          (e.style.height = "2px"),
          (e.style.display = "inline-block")),
      e
    );
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Ja {
  constructor(e) {
    (this.state = e),
      (this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.scrollTop = 0),
      (this.scrolledToBottom = !1),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.scrollAnchorPos = 0),
      (this.scrollAnchorHeight = -1),
      (this.scaler = eh),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.defaultTextDirection = he.LTR),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1);
    let t = e.facet(Bl).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    (this.heightOracle = new bg(t)),
      (this.stateDeco = e.facet(Pn).filter((i) => typeof i != "function")),
      (this.heightMap = ze
        .empty()
        .applyChanges(this.stateDeco, J.empty, this.heightOracle.setDoc(e.doc), [
          new it(0, 0, 0, e.doc.length),
        ]));
    for (
      let i = 0;
      i < 2 && ((this.viewport = this.getViewport(0, null)), !!this.updateForViewport());
      i++
    );
    this.updateViewportLines(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = W.set(this.lineGaps.map((i) => i.draw(this, !1)))),
      this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? t.head : t.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new rr(s, o));
      }
    }
    return (this.viewports = e.sort((i, r) => i.from - r.from)), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return (
      (this.scaler =
        this.heightMap.height <= 7e6
          ? eh
          : new zl(this.heightOracle, this.heightMap, this.viewports)),
      e.eq(this.scaler) ? 0 : 2
    );
  }
  updateViewportLines() {
    (this.viewportLines = []),
      this.heightMap.forEachLine(
        this.viewport.from,
        this.viewport.to,
        this.heightOracle.setDoc(this.state.doc),
        0,
        0,
        (e) => {
          this.viewportLines.push(hn(e, this.scaler));
        }
      );
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Pn).filter((u) => typeof u != "function");
    let r = e.changedRanges,
      s = it.extendWithRanges(
        r,
        Dg(i, this.stateDeco, e ? e.changes : be.empty(this.state.doc.length))
      ),
      o = this.heightMap.height,
      l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Ha(),
      (this.heightMap = this.heightMap.applyChanges(
        this.stateDeco,
        e.startState.doc,
        this.heightOracle.setDoc(this.state.doc),
        s
      )),
      (this.heightMap.height != o || _i) && (e.flags |= 2),
      l
        ? ((this.scrollAnchorPos = e.changes.mapPos(l.from, -1)), (this.scrollAnchorHeight = l.top))
        : ((this.scrollAnchorPos = -1), (this.scrollAnchorHeight = this.heightMap.height));
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    ((t && (t.range.head < a.from || t.range.head > a.to)) || !this.viewportIsAppropriate(a)) &&
      (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    (this.viewport = a),
      (e.flags |= this.updateForViewport()),
      (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))),
      (e.flags |= this.computeVisibleRanges()),
      t && (this.scrollTarget = t),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        !e.state.facet(Cc) &&
        (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM,
      i = window.getComputedStyle(t),
      r = this.heightOracle,
      s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? he.RTL : he.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s),
      l = t.getBoundingClientRect(),
      a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    (this.contentDOMHeight = l.height), (this.mustMeasureContent = !1);
    let h = 0,
      u = 0;
    if (l.width && l.height) {
      let { scaleX: v, scaleY: k } = Hu(t, l);
      ((v > 0.005 && Math.abs(this.scaleX - v) > 0.005) ||
        (k > 0.005 && Math.abs(this.scaleY - k) > 0.005)) &&
        ((this.scaleX = v), (this.scaleY = k), (h |= 8), (o = a = !0));
    }
    let c = (parseInt(i.paddingTop) || 0) * this.scaleY,
      f = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != c || this.paddingBottom != f) &&
      ((this.paddingTop = c), (this.paddingBottom = f), (h |= 10)),
      this.editorWidth != e.scrollDOM.clientWidth &&
        (r.lineWrapping && (a = !0), (this.editorWidth = e.scrollDOM.clientWidth), (h |= 8));
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && ((this.scrollAnchorHeight = -1), (this.scrollTop = d)),
      (this.scrolledToBottom = ec(e.scrollDOM));
    let p = (this.printing ? wg : vg)(t, this.paddingTop),
      O = p.top - this.pixelViewport.top,
      g = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let S =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left;
    if (
      (S != this.inView && ((this.inView = S), S && (a = !0)), !this.inView && !this.scrollTarget)
    )
      return 0;
    let b = l.width;
    if (
      ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = l.width),
        (this.editorHeight = e.scrollDOM.clientHeight),
        (h |= 8)),
      a)
    ) {
      let v = e.docView.measureVisibleLineHeights(this.viewport);
      if (
        (r.mustRefreshForHeights(v) && (o = !0),
        o || (r.lineWrapping && Math.abs(b - this.contentDOMWidth) > r.charWidth))
      ) {
        let { lineHeight: k, charWidth: y, textHeight: Q } = e.docView.measureTextSize();
        (o = k > 0 && r.refresh(s, k, y, Q, b / y, v)), o && ((e.docView.minWidth = 0), (h |= 8));
      }
      O > 0 && g > 0 ? (u = Math.max(O, g)) : O < 0 && g < 0 && (u = Math.min(O, g)), Ha();
      for (let k of this.viewports) {
        let y = k.from == this.viewport.from ? v : e.docView.measureVisibleLineHeights(k);
        this.heightMap = (
          o
            ? ze
                .empty()
                .applyChanges(this.stateDeco, J.empty, this.heightOracle, [
                  new it(0, 0, 0, e.state.doc.length),
                ])
            : this.heightMap
        ).updateHeight(r, 0, o, new yg(k.from, y));
      }
      _i && (h |= 2);
    }
    let D =
      !this.viewportIsAppropriate(this.viewport, u) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to));
    return (
      D &&
        (h & 2 && (h |= this.updateScaler()),
        (this.viewport = this.getViewport(u, this.scrollTarget)),
        (h |= this.updateForViewport())),
      (h & 2 || D) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
      (h |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      h
    );
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      r = this.heightMap,
      s = this.heightOracle,
      { visibleTop: o, visibleBottom: l } = this,
      a = new rr(
        r.lineAt(o - i * 1e3, ae.ByHeight, s, 0, 0).from,
        r.lineAt(l + (1 - i) * 1e3, ae.ByHeight, s, 0, 0).to
      );
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let u = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
          c = r.lineAt(h, ae.ByPos, s, 0, 0),
          f;
        t.y == "center"
          ? (f = (c.top + c.bottom) / 2 - u / 2)
          : t.y == "start" || (t.y == "nearest" && h < a.from)
            ? (f = c.top)
            : (f = c.bottom - u),
          (a = new rr(
            r.lineAt(f - 1e3 / 2, ae.ByHeight, s, 0, 0).from,
            r.lineAt(f + u + 1e3 / 2, ae.ByHeight, s, 0, 0).to
          ));
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1),
      r = t.mapPos(e.to, 1);
    return new rr(
      this.heightMap.lineAt(i, ae.ByPos, this.heightOracle, 0, 0).from,
      this.heightMap.lineAt(r, ae.ByPos, this.heightOracle, 0, 0).to
    );
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView) return !0;
    let { top: r } = this.heightMap.lineAt(e, ae.ByPos, this.heightOracle, 0, 0),
      { bottom: s } = this.heightMap.lineAt(t, ae.ByPos, this.heightOracle, 0, 0),
      { visibleTop: o, visibleBottom: l } = this;
    return (
      (e == 0 || r <= o - Math.max(10, Math.min(-i, 250))) &&
      (t == this.state.doc.length || s >= l + Math.max(10, Math.min(i, 250))) &&
      r > o - 2 * 1e3 &&
      s < l + 2 * 1e3
    );
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let i = [];
    for (let r of e)
      t.touchesRange(r.from, r.to) ||
        i.push(new Ts(t.mapPos(r.from), t.mapPos(r.to), r.size, r.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping,
      r = i ? 1e4 : 2e3,
      s = r >> 1,
      o = r << 1;
    if (this.defaultTextDirection != he.LTR && !i) return [];
    let l = [],
      a = (u, c, f, d) => {
        if (c - u < s) return;
        let p = this.state.selection.main,
          O = [p.from];
        p.empty || O.push(p.to);
        for (let S of O)
          if (S > u && S < c) {
            a(u, S - 10, f, d), a(S + 10, c, f, d);
            return;
          }
        let g = Ag(
          e,
          (S) =>
            S.from >= f.from &&
            S.to <= f.to &&
            Math.abs(S.from - u) < s &&
            Math.abs(S.to - c) < s &&
            !O.some((b) => S.from < b && S.to > b)
        );
        if (!g) {
          if (c < f.to && t && i && t.visibleRanges.some((D) => D.from <= c && D.to >= c)) {
            let D = t.moveToLineBoundary(w.cursor(c), !1, !0).head;
            D > u && (c = D);
          }
          let S = this.gapSize(f, u, c, d),
            b = i || S < 2e6 ? S : 2e6;
          g = new Ts(u, c, S, b);
        }
        l.push(g);
      },
      h = (u) => {
        if (u.length < o || u.type != Fe.Text) return;
        let c = Pg(u.from, u.to, this.stateDeco);
        if (c.total < o) return;
        let f = this.scrollTarget ? this.scrollTarget.range.head : null,
          d,
          p;
        if (i) {
          let O = (r / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
            g,
            S;
          if (f != null) {
            let b = or(c, f),
              D = ((this.visibleBottom - this.visibleTop) / 2 + O) / u.height;
            (g = b - D), (S = b + D);
          } else
            (g = (this.visibleTop - u.top - O) / u.height),
              (S = (this.visibleBottom - u.top + O) / u.height);
          (d = sr(c, g)), (p = sr(c, S));
        } else {
          let O = c.total * this.heightOracle.charWidth,
            g = r * this.heightOracle.charWidth,
            S = 0;
          if (O > 2e6)
            for (let y of e)
              y.from >= u.from &&
                y.from < u.to &&
                y.size != y.displaySize &&
                y.from * this.heightOracle.charWidth + S < this.pixelViewport.left &&
                (S = y.size - y.displaySize);
          let b = this.pixelViewport.left + S,
            D = this.pixelViewport.right + S,
            v,
            k;
          if (f != null) {
            let y = or(c, f),
              Q = ((D - b) / 2 + g) / O;
            (v = y - Q), (k = y + Q);
          } else (v = (b - g) / O), (k = (D + g) / O);
          (d = sr(c, v)), (p = sr(c, k));
        }
        d > u.from && a(u.from, d, u, c), p < u.to && a(p, u.to, u, c);
      };
    for (let u of this.viewportLines) Array.isArray(u.type) ? u.type.forEach(h) : h(u);
    return l;
  }
  gapSize(e, t, i, r) {
    let s = or(r, i) - or(r, t);
    return this.heightOracle.lineWrapping
      ? e.height * s
      : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    Ts.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = W.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping)))));
  }
  computeVisibleRanges() {
    let e = this.stateDeco;
    this.lineGaps.length && (e = e.concat(this.lineGapDeco));
    let t = [];
    K.spans(
      e,
      this.viewport.from,
      this.viewport.to,
      {
        span(r, s) {
          t.push({ from: r, to: s });
        },
        point() {},
      },
      20
    );
    let i =
      t.length != this.visibleRanges.length ||
      this.visibleRanges.some((r, s) => r.from != t[s].from || r.to != t[s].to);
    return (this.visibleRanges = t), i ? 4 : 0;
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
      hn(this.heightMap.lineAt(e, ae.ByPos, this.heightOracle, 0, 0), this.scaler)
    );
  }
  lineBlockAtHeight(e) {
    return (
      (e >= this.viewportLines[0].top &&
        e <= this.viewportLines[this.viewportLines.length - 1].bottom &&
        this.viewportLines.find((t) => t.top <= e && t.bottom >= e)) ||
      hn(
        this.heightMap.lineAt(this.scaler.fromDOM(e), ae.ByHeight, this.heightOracle, 0, 0),
        this.scaler
      )
    );
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200
      ? t
      : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return hn(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class rr {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
function Pg(n, e, t) {
  let i = [],
    r = n,
    s = 0;
  return (
    K.spans(
      t,
      n,
      e,
      {
        span() {},
        point(o, l) {
          o > r && (i.push({ from: r, to: o }), (s += o - r)), (r = l);
        },
      },
      20
    ),
    r < e && (i.push({ from: r, to: e }), (s += e - r)),
    { total: s, ranges: i }
  );
}
function sr({ total: n, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r],
      l = o - s;
    if (i <= l) return s + i;
    i -= l;
  }
}
function or(n, e) {
  let t = 0;
  for (let { from: i, to: r } of n.ranges) {
    if (e <= r) {
      t += e - i;
      break;
    }
    t += r - i;
  }
  return t / n.total;
}
function Ag(n, e) {
  for (let t of n) if (e(t)) return t;
}
const eh = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  },
};
class zl {
  constructor(e, t, i) {
    let r = 0,
      s = 0,
      o = 0;
    (this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, ae.ByPos, e, 0, 0).top,
        u = t.lineAt(a, ae.ByPos, e, 0, 0).bottom;
      return (r += u - h), { from: l, to: a, top: h, bottom: u, domTop: 0, domBottom: 0 };
    })),
      (this.scale = (7e6 - r) / (t.height - r));
    for (let l of this.viewports)
      (l.domTop = o + (l.top - s) * this.scale),
        (o = l.domBottom = l.domTop + (l.bottom - l.top)),
        (s = l.bottom);
  }
  toDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.top) return r + (e - i) * this.scale;
      if (e <= s.bottom) return s.domTop + (e - s.top);
      (i = s.bottom), (r = s.domBottom);
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, r = 0; ; t++) {
      let s = t < this.viewports.length ? this.viewports[t] : null;
      if (!s || e < s.domTop) return i + (e - r) / this.scale;
      if (e <= s.domBottom) return s.top + (e - s.domTop);
      (i = s.bottom), (r = s.domBottom);
    }
  }
  eq(e) {
    return e instanceof zl
      ? this.scale == e.scale &&
          this.viewports.length == e.viewports.length &&
          this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to)
      : !1;
  }
}
function hn(n, e) {
  if (e.scale == 1) return n;
  let t = e.toDOM(n.top),
    i = e.toDOM(n.bottom);
  return new St(
    n.from,
    n.length,
    t,
    i - t,
    Array.isArray(n._content) ? n._content.map((r) => hn(r, e)) : n._content
  );
}
const lr = T.define({ combine: (n) => n.join(" ") }),
  jo = T.define({ combine: (n) => n.indexOf(!0) > -1 }),
  Lo = Kt.newName(),
  _c = Kt.newName(),
  Vc = Kt.newName(),
  Xc = { "&light": "." + _c, "&dark": "." + Vc };
function qo(n, e, t) {
  return new Kt(e, {
    finish(i) {
      return /&/.test(i)
        ? i.replace(/&\w*/, (r) => {
            if (r == "&") return n;
            if (!t || !t[r]) throw new RangeError(`Unsupported selector: ${r}`);
            return t[r];
          })
        : n + " " + i;
    },
  });
}
const Mg = qo(
    "." + Lo,
    {
      "&": {
        position: "relative !important",
        boxSizing: "border-box",
        "&.cm-focused": { outline: "1px dotted #212121" },
        display: "flex !important",
        flexDirection: "column",
      },
      ".cm-scroller": {
        display: "flex !important",
        alignItems: "flex-start !important",
        fontFamily: "monospace",
        lineHeight: 1.4,
        height: "100%",
        overflowX: "auto",
        position: "relative",
        zIndex: 0,
        overflowAnchor: "none",
      },
      ".cm-content": {
        margin: 0,
        flexGrow: 2,
        flexShrink: 0,
        display: "block",
        whiteSpace: "pre",
        wordWrap: "normal",
        boxSizing: "border-box",
        minHeight: "100%",
        padding: "4px 0",
        outline: "none",
        "&[contenteditable=true]": { WebkitUserModify: "read-write-plaintext-only" },
      },
      ".cm-lineWrapping": {
        whiteSpace_fallback: "pre-wrap",
        whiteSpace: "break-spaces",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
        flexShrink: 1,
      },
      "&light .cm-content": { caretColor: "black" },
      "&dark .cm-content": { caretColor: "white" },
      ".cm-line": { display: "block", padding: "0 2px 0 6px" },
      ".cm-layer": {
        position: "absolute",
        left: 0,
        top: 0,
        contain: "size style",
        "& > *": { position: "absolute" },
      },
      "&light .cm-selectionBackground": { background: "#d9d9d9" },
      "&dark .cm-selectionBackground": { background: "#222" },
      "&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
        background: "#d7d4f0",
      },
      "&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
        background: "#233",
      },
      ".cm-cursorLayer": { pointerEvents: "none" },
      "&.cm-focused > .cm-scroller > .cm-cursorLayer": {
        animation: "steps(1) cm-blink 1.2s infinite",
      },
      "@keyframes cm-blink": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
      "@keyframes cm-blink2": { "0%": {}, "50%": { opacity: 0 }, "100%": {} },
      ".cm-cursor, .cm-dropCursor": {
        borderLeft: "1.2px solid black",
        marginLeft: "-0.6px",
        pointerEvents: "none",
      },
      ".cm-cursor": { display: "none" },
      "&dark .cm-cursor": { borderLeftColor: "#ddd" },
      ".cm-dropCursor": { position: "absolute" },
      "&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: "block" },
      ".cm-iso": { unicodeBidi: "isolate" },
      ".cm-announced": { position: "fixed", top: "-10000px" },
      "@media print": { ".cm-announced": { display: "none" } },
      "&light .cm-activeLine": { backgroundColor: "#cceeff44" },
      "&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
      "&light .cm-specialChar": { color: "red" },
      "&dark .cm-specialChar": { color: "#f78" },
      ".cm-gutters": {
        flexShrink: 0,
        display: "flex",
        height: "100%",
        boxSizing: "border-box",
        insetInlineStart: 0,
        zIndex: 200,
      },
      "&light .cm-gutters": {
        backgroundColor: "#f5f5f5",
        color: "#6c6c6c",
        borderRight: "1px solid #ddd",
      },
      "&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" },
      ".cm-gutter": {
        display: "flex !important",
        flexDirection: "column",
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: "100%",
        overflow: "hidden",
      },
      ".cm-gutterElement": { boxSizing: "border-box" },
      ".cm-lineNumbers .cm-gutterElement": {
        padding: "0 3px 0 5px",
        minWidth: "20px",
        textAlign: "right",
        whiteSpace: "nowrap",
      },
      "&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
      "&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
      ".cm-panels": { boxSizing: "border-box", position: "sticky", left: 0, right: 0, zIndex: 300 },
      "&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" },
      "&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
      "&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
      "&dark .cm-panels": { backgroundColor: "#333338", color: "white" },
      ".cm-tab": { display: "inline-block", overflow: "hidden", verticalAlign: "bottom" },
      ".cm-widgetBuffer": { verticalAlign: "text-top", height: "1em", width: 0, display: "inline" },
      ".cm-placeholder": { color: "#888", display: "inline-block", verticalAlign: "top" },
      ".cm-highlightSpace": {
        backgroundImage: "radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)",
        backgroundPosition: "center",
      },
      ".cm-highlightTab": {
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
        backgroundSize: "auto 100%",
        backgroundPosition: "right 90%",
        backgroundRepeat: "no-repeat",
      },
      ".cm-trailingSpace": { backgroundColor: "#ff332255" },
      ".cm-button": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        padding: ".2em 1em",
        borderRadius: "1px",
      },
      "&light .cm-button": {
        backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
        border: "1px solid #888",
        "&:active": { backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)" },
      },
      "&dark .cm-button": {
        backgroundImage: "linear-gradient(#393939, #111)",
        border: "1px solid #888",
        "&:active": { backgroundImage: "linear-gradient(#111, #333)" },
      },
      ".cm-textfield": {
        verticalAlign: "middle",
        color: "inherit",
        fontSize: "70%",
        border: "1px solid silver",
        padding: ".2em .5em",
      },
      "&light .cm-textfield": { backgroundColor: "white" },
      "&dark .cm-textfield": { border: "1px solid #555", backgroundColor: "inherit" },
    },
    Xc
  ),
  $g = { childList: !0, characterData: !0, subtree: !0, attributes: !0, characterDataOldValue: !0 },
  Fs = F.ie && F.ie_version <= 11;
class Eg {
  constructor(e) {
    (this.view = e),
      (this.active = !1),
      (this.editContext = null),
      (this.selectionRange = new gO()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1),
      (this.lastChange = 0),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resizeScroll = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.printQuery = null),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver((t) => {
        for (let i of t) this.queue.push(i);
        ((F.ie && F.ie_version <= 11) || (F.ios && e.composing)) &&
        t.some(
          (i) =>
            (i.type == "childList" && i.removedNodes.length) ||
            (i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length)
        )
          ? this.flushSoon()
          : this.flush();
      })),
      window.EditContext &&
        e.constructor.EDIT_CONTEXT !== !1 &&
        !(F.chrome && F.chrome_version < 126) &&
        ((this.editContext = new Rg(e)),
        e.state.facet(Lt) && (e.contentDOM.editContext = this.editContext.editContext)),
      Fs &&
        (this.onCharData = (t) => {
          this.queue.push({ target: t.target, type: "characterData", oldValue: t.prevValue }),
            this.flushSoon();
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      (this.onResize = this.onResize.bind(this)),
      (this.onPrint = this.onPrint.bind(this)),
      (this.onScroll = this.onScroll.bind(this)),
      window.matchMedia && (this.printQuery = window.matchMedia("print")),
      typeof ResizeObserver == "function" &&
        ((this.resizeScroll = new ResizeObserver(() => {
          var t;
          ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) <
            Date.now() - 75 && this.onResize();
        })),
        this.resizeScroll.observe(e.scrollDOM)),
      this.addWindowListeners((this.win = e.win)),
      this.start(),
      typeof IntersectionObserver == "function" &&
        ((this.intersection = new IntersectionObserver(
          (t) => {
            this.parentCheck < 0 &&
              (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)),
              t.length > 0 &&
                t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
                ((this.intersecting = !this.intersecting),
                this.intersecting != this.view.inView &&
                  this.onScrollChanged(document.createEvent("Event")));
          },
          { threshold: [0, 0.001] }
        )),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver((t) => {
          t.length > 0 &&
            t[t.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent("Event"));
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers("scroll", e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1),
      this.editContext && this.view.requestMeasure(this.editContext.measureReq),
      this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        (this.resizeTimeout = -1), this.view.requestMeasure();
      }, 50));
  }
  onPrint(e) {
    ((e.type == "change" || !e.type) && !e.matches) ||
      ((this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        (this.view.viewState.printing = !1), this.view.requestMeasure();
      }, 500));
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))
    ) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i } = this,
      r = this.selectionRange;
    if (i.state.facet(Lt) ? i.root.activeElement != this.dom : !Dr(this.dom, r)) return;
    let s = r.anchorNode && i.docView.nearest(r.anchorNode);
    if (s && s.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    ((F.ie && F.ie_version <= 11) || (F.android && F.chrome)) &&
    !i.state.selection.main.empty &&
    r.focusNode &&
    Sn(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset)
      ? this.flushSoon()
      : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this,
      t = Qn(e.root);
    if (!t) return !1;
    let i =
      (F.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Bg(this.view, t)) ||
      t;
    if (!i || this.selectionRange.eq(i)) return !1;
    let r = Dr(this.dom, i);
    return r &&
      !this.selectionChanged &&
      e.inputState.lastFocusTime > Date.now() - 200 &&
      e.inputState.lastTouchTime < Date.now() - 300 &&
      SO(this.dom, i)
      ? ((this.view.inputState.lastFocusTime = 0), e.docView.updateSelection(), !1)
      : (this.selectionRange.setRange(i), r && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), (this.selectionChanged = !1);
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0,
      t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i
          ? e++
          : t || (t = this.scrollTargets.slice(0, e)),
          t && t.push(i),
          (i = i.assignedSlot || i.parentNode);
      else if (i.nodeType == 11) i = i.host;
      else break;
    if ((e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t)) {
      for (let i of this.scrollTargets) i.removeEventListener("scroll", this.onScroll);
      for (let i of (this.scrollTargets = t)) i.addEventListener("scroll", this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, $g),
      Fs && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData),
      (this.active = !0));
  }
  stop() {
    this.active &&
      ((this.active = !1),
      this.observer.disconnect(),
      Fs && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
  }
  clear() {
    this.processRecords(), (this.queue.length = 0), (this.selectionChanged = !1);
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let r = () => {
        let s = this.delayedAndroidKey;
        s &&
          (this.clearDelayedAndroidKey(),
          (this.view.inputState.lastKeyCode = s.keyCode),
          (this.view.inputState.lastKeyTime = Date.now()),
          !this.flush() && s.force && Ri(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
    }
    (!this.delayedAndroidKey || e == "Enter") &&
      (this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force:
          this.lastChange < Date.now() - 50 ||
          !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force),
      });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1);
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        (this.delayedFlush = -1), this.flush();
      }));
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (this.view.win.cancelAnimationFrame(this.delayedFlush), (this.delayedFlush = -1)),
      this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1,
      i = -1,
      r = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o &&
        (o.typeOver && (r = !0),
        t == -1 ? ({ from: t, to: i } = o) : ((t = Math.min(o.from, t)), (i = Math.max(o.to, i))));
    }
    return { from: t, to: i, typeOver: r };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(),
      r = this.selectionChanged && Dr(this.dom, this.selectionRange);
    if (e < 0 && !r) return null;
    e > -1 && (this.lastChange = Date.now()),
      (this.view.inputState.lastFocusTime = 0),
      (this.selectionChanged = !1);
    let s = new HO(this.view, e, t, i);
    return (this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }), s;
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), !1;
    let i = this.view.state,
      r = Rc(this.view, t);
    return (
      this.view.state == i &&
        (t.domChanged || (t.newSel && !t.newSel.main.eq(this.view.state.selection.main))) &&
        this.view.update([]),
      r
    );
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e)) return null;
    if (
      (t.markDirty(e.type == "attributes"),
      e.type == "attributes" && (t.flags |= 4),
      e.type == "childList")
    ) {
      let i = th(t, e.previousSibling || e.target.previousSibling, -1),
        r = th(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: r ? t.posBefore(r) : t.posAtEnd,
        typeOver: !1,
      };
    } else
      return e.type == "characterData"
        ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue }
        : null;
  }
  setWindow(e) {
    e != this.win &&
      (this.removeWindowListeners(this.win), (this.win = e), this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener("resize", this.onResize),
      this.printQuery
        ? this.printQuery.addEventListener
          ? this.printQuery.addEventListener("change", this.onPrint)
          : this.printQuery.addListener(this.onPrint)
        : e.addEventListener("beforeprint", this.onPrint),
      e.addEventListener("scroll", this.onScroll),
      e.document.addEventListener("selectionchange", this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener("scroll", this.onScroll),
      e.removeEventListener("resize", this.onResize),
      this.printQuery
        ? this.printQuery.removeEventListener
          ? this.printQuery.removeEventListener("change", this.onPrint)
          : this.printQuery.removeListener(this.onPrint)
        : e.removeEventListener("beforeprint", this.onPrint),
      e.document.removeEventListener("selectionchange", this.onSelectionChange);
  }
  update(e) {
    this.editContext &&
      (this.editContext.update(e),
      e.startState.facet(Lt) != e.state.facet(Lt) &&
        (e.view.contentDOM.editContext = e.state.facet(Lt) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
      (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let r of this.scrollTargets) r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout),
      this.win.cancelAnimationFrame(this.delayedFlush),
      this.win.cancelAnimationFrame(this.flushingAndroidKey),
      this.editContext && ((this.view.contentDOM.editContext = null), this.editContext.destroy());
  }
}
function th(n, e, t) {
  for (; e; ) {
    let i = ne.get(e);
    if (i && i.parent == n) return i;
    let r = e.parentNode;
    e = r != n.dom ? r : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function ih(n, e) {
  let t = e.startContainer,
    i = e.startOffset,
    r = e.endContainer,
    s = e.endOffset,
    o = n.docView.domAtPos(n.state.selection.main.anchor);
  return (
    Sn(o.node, o.offset, r, s) && ([t, i, r, s] = [r, s, t, i]),
    { anchorNode: t, anchorOffset: i, focusNode: r, focusOffset: s }
  );
}
function Bg(n, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(n.root)[0];
    if (r) return ih(n, r);
  }
  let t = null;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), (t = r.getTargetRanges()[0]);
  }
  return (
    n.contentDOM.addEventListener("beforeinput", i, !0),
    n.dom.ownerDocument.execCommand("indent"),
    n.contentDOM.removeEventListener("beforeinput", i, !0),
    t ? ih(n, t) : null
  );
}
class Rg {
  constructor(e) {
    (this.from = 0),
      (this.to = 0),
      (this.pendingContextChange = null),
      (this.handlers = Object.create(null)),
      this.resetRange(e.state);
    let t = (this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(
        Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))
      ),
      selectionEnd: this.toContextPos(e.state.selection.main.head),
    }));
    (this.handlers.textupdate = (i) => {
      let { anchor: r } = e.state.selection.main,
        s = {
          from: this.toEditorPos(i.updateRangeStart),
          to: this.toEditorPos(i.updateRangeEnd),
          insert: J.of(
            i.text.split(`
`)
          ),
        };
      s.from == this.from && r < this.from
        ? (s.from = r)
        : s.to == this.to && r > this.to && (s.to = r),
        !(s.from == s.to && !s.insert.length) &&
          ((this.pendingContextChange = s),
          e.state.readOnly ||
            Tl(
              e,
              s,
              w.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd))
            ),
          this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state)));
    }),
      (this.handlers.characterboundsupdate = (i) => {
        let r = [],
          s = null;
        for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
          let a = e.coordsForChar(o);
          (s =
            (a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top)) ||
            s ||
            new DOMRect()),
            r.push(s);
        }
        t.updateCharacterBounds(i.rangeStart, r);
      }),
      (this.handlers.textformatupdate = (i) => {
        let r = [];
        for (let s of i.getTextFormats()) {
          let o = s.underlineStyle,
            l = s.underlineThickness;
          if (o != "None" && l != "None") {
            let a = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            r.push(
              W.mark({ attributes: { style: a } }).range(
                this.toEditorPos(s.rangeStart),
                this.toEditorPos(s.rangeEnd)
              )
            );
          }
        }
        e.dispatch({ effects: wc.of(W.set(r)) });
      }),
      (this.handlers.compositionstart = () => {
        e.inputState.composing < 0 &&
          ((e.inputState.composing = 0), (e.inputState.compositionFirstChange = !0));
      }),
      (this.handlers.compositionend = () => {
        (e.inputState.composing = -1), (e.inputState.compositionFirstChange = null);
      });
    for (let i in this.handlers) t.addEventListener(i, this.handlers[i]);
    this.measureReq = {
      read: (i) => {
        this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
        let r = Qn(i.root);
        r &&
          r.rangeCount &&
          this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
      },
    };
  }
  applyEdits(e) {
    let t = 0,
      i = !1,
      r = this.pendingContextChange;
    return (
      e.changes.iterChanges((s, o, l, a, h) => {
        if (i) return;
        let u = h.length - (o - s);
        if (r && o >= r.to)
          if (r.from == s && r.to == o && r.insert.eq(h)) {
            (r = this.pendingContextChange = null), (t += u), (this.to += u);
            return;
          } else (r = null), this.revertPending(e.state);
        if (((s += t), (o += t), o <= this.from)) (this.from += u), (this.to += u);
        else if (s < this.to) {
          if (s < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
            i = !0;
            return;
          }
          this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), h.toString()),
            (this.to += u);
        }
        t += u;
      }),
      r && !i && this.revertPending(e.state),
      !i
    );
  }
  update(e) {
    let t = this.pendingContextChange;
    !this.applyEdits(e) || !this.rangeIsValid(e.state)
      ? ((this.pendingContextChange = null),
        this.resetRange(e.state),
        this.editContext.updateText(
          0,
          this.editContext.text.length,
          e.state.doc.sliceString(this.from, this.to)
        ),
        this.setSelection(e.state))
      : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state),
      (e.geometryChanged || e.docChanged || e.selectionSet) &&
        e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    (this.from = Math.max(0, t - 1e4)), (this.to = Math.min(e.doc.length, t + 1e4));
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    (this.pendingContextChange = null),
      this.editContext.updateText(
        this.toContextPos(t.from),
        this.toContextPos(t.from + t.insert.length),
        e.doc.sliceString(t.from, t.to)
      );
  }
  setSelection(e) {
    let { main: t } = e.selection,
      i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))),
      r = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != r) &&
      this.editContext.updateSelection(i, r);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(
      (this.from > 0 && t - this.from < 500) ||
      (this.to < e.doc.length && this.to - t < 500) ||
      this.to - this.from > 1e4 * 3
    );
  }
  toEditorPos(e) {
    return e + this.from;
  }
  toContextPos(e) {
    return e - this.from;
  }
  destroy() {
    for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class B {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    (this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement("div")),
      (this.scrollDOM = document.createElement("div")),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = "cm-scroller"),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement("div")),
      (this.announceDOM.className = "cm-announced"),
      this.announceDOM.setAttribute("aria-live", "polite"),
      (this.dom = document.createElement("div")),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM),
      e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    (this.dispatchTransactions =
      e.dispatchTransactions ||
      (i && ((r) => r.forEach((s) => i(s, this)))) ||
      ((r) => this.update(r))),
      (this.dispatch = this.dispatch.bind(this)),
      (this._root = e.root || mO(e.parent) || document),
      (this.viewState = new Ja(e.state || U.create(e))),
      e.scrollTo &&
        e.scrollTo.is(tr) &&
        (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)),
      (this.plugins = this.state.facet(on).map((r) => new Es(r)));
    for (let r of this.plugins) r.update(this);
    (this.observer = new Eg(this)),
      (this.inputState = new ig(this)),
      this.inputState.ensureHandlers(this.plugins),
      (this.docView = new Ra(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure(),
      !((t = document.fonts) === null || t === void 0) &&
        t.ready &&
        document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t =
      e.length == 1 && e[0] instanceof ye
        ? e
        : e.length == 1 && Array.isArray(e[0])
          ? e[0]
          : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error("Calls to EditorView.update are not allowed while an update is in progress");
    let t = !1,
      i = !1,
      r,
      s = this.state;
    for (let f of e) {
      if (f.startState != s)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state."
        );
      s = f.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus,
      l = 0,
      a = null;
    e.some((f) => f.annotation(jc))
      ? ((this.inputState.notifiedFocused = o), (l = 1))
      : o != this.inputState.notifiedFocused &&
        ((this.inputState.notifiedFocused = o), (a = Lc(s, o)), a || (l = 1));
    let h = this.observer.delayedAndroidKey,
      u = null;
    if (
      (h
        ? (this.observer.clearDelayedAndroidKey(),
          (u = this.observer.readChange()),
          ((u && !this.state.doc.eq(s.doc)) || !this.state.selection.eq(s.selection)) && (u = null))
        : this.observer.clear(),
      s.facet(U.phrases) != this.state.facet(U.phrases))
    )
      return this.setState(s);
    (r = Wr.create(this, s, e)), (r.flags |= l);
    let c = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let f of e) {
        if ((c && (c = c.map(f.changes)), f.scrollIntoView)) {
          let { main: d } = f.state.selection;
          c = new Ti(d.empty ? d : w.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of f.effects) d.is(tr) && (c = d.value.clip(this.state));
      }
      this.viewState.update(r, c),
        (this.bidiCache = Lr.update(this.bidiCache, r.changes)),
        r.empty || (this.updatePlugins(r), this.inputState.update(r)),
        (t = this.docView.update(r)),
        this.state.facet(ln) != this.styleModules && this.mountStyles(),
        (i = this.updateAttrs()),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          t,
          e.some((f) => f.isUserEvent("select.pointer"))
        );
    } finally {
      this.updateState = 0;
    }
    if (
      (r.startState.facet(lr) != r.state.facet(lr) && (this.viewState.mustMeasureContent = !0),
      (t || i || c || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      t && this.docViewUpdate(),
      !r.empty)
    )
      for (let f of this.state.facet(Fo))
        try {
          f(r);
        } catch (d) {
          qe(this.state, d, "update listener");
        }
    (a || u) &&
      Promise.resolve().then(() => {
        a && this.state == a.startState && this.dispatch(a),
          u && !Rc(this, u) && h.force && Ri(this.contentDOM, h.key, h.keyCode);
      });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error(
        "Calls to EditorView.setState are not allowed while an update is in progress"
      );
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins) i.destroy(this);
      (this.viewState = new Ja(e)),
        (this.plugins = e.facet(on).map((i) => new Es(i))),
        this.pluginMap.clear();
      for (let i of this.plugins) i.update(this);
      this.docView.destroy(),
        (this.docView = new Ra(this)),
        this.inputState.ensureHandlers(this.plugins),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = []);
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(on),
      i = e.state.facet(on);
    if (t != i) {
      let r = [];
      for (let s of i) {
        let o = t.indexOf(s);
        if (o < 0) r.push(new Es(s));
        else {
          let l = this.plugins[o];
          (l.mustUpdate = e), r.push(l);
        }
      }
      for (let s of this.plugins) s.mustUpdate != e && s.destroy(this);
      (this.plugins = r), this.pluginMap.clear();
    } else for (let r of this.plugins) r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++) this.plugins[r].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          qe(this.state, i, "doc view update listener");
        }
    }
  }
  measure(e = !0) {
    if (this.destroyed) return;
    if (
      (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
      this.observer.delayedAndroidKey)
    ) {
      (this.measureScheduled = -1), this.requestMeasure();
      return;
    }
    (this.measureScheduled = 0), e && this.observer.forceFlush();
    let t = null,
      i = this.scrollDOM,
      r = i.scrollTop * this.scaleY,
      { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (o = -1),
      (this.viewState.scrollAnchorHeight = -1);
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (ec(i)) (s = -1), (o = this.viewState.heightMap.height);
          else {
            let d = this.viewState.scrollAnchorAt(r);
            (s = d.from), (o = d.top);
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (l > 5) {
          console.warn(
            this.measureRequests.length
              ? "Measure loop restarted more than 5 times"
              : "Viewport failed to stabilize"
          );
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let u = h.map((d) => {
            try {
              return d.read(this);
            } catch (p) {
              return qe(this.state, p), nh;
            }
          }),
          c = Wr.create(this, this.state, []),
          f = !1;
        (c.flags |= a),
          t ? (t.flags |= a) : (t = c),
          (this.updateState = 2),
          c.empty ||
            (this.updatePlugins(c),
            this.inputState.update(c),
            this.updateAttrs(),
            (f = this.docView.update(c)),
            f && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (u[d] != nh)
            try {
              let p = h[d];
              p.write && p.write(u[d], this);
            } catch (p) {
              qe(this.state, p);
            }
        if (
          (f && this.docView.updateSelection(!0),
          !c.viewportChanged && this.measureRequests.length == 0)
        ) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget),
                (this.viewState.scrollTarget = null),
                (o = -1);
              continue;
            } else {
              let p =
                (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
              if (p > 1 || p < -1) {
                (r = r + p), (i.scrollTop = r / this.scaleY), (o = -1);
                continue;
              }
            }
          break;
        }
      }
    } finally {
      (this.updateState = 0), (this.measureScheduled = -1);
    }
    if (t && !t.empty) for (let l of this.state.facet(Fo)) l(t);
  }
  get themeClasses() {
    return Lo + " " + (this.state.facet(jo) ? Vc : _c) + " " + this.state.facet(lr);
  }
  updateAttrs() {
    let e = rh(this, Qc, {
        class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses,
      }),
      t = {
        spellcheck: "false",
        autocorrect: "off",
        autocapitalize: "off",
        translate: "no",
        contenteditable: this.state.facet(Lt) ? "true" : "false",
        class: "cm-content",
        style: `${F.tabSize}: ${this.state.tabSize}`,
        role: "textbox",
        "aria-multiline": "true",
      };
    this.state.readOnly && (t["aria-readonly"] = "true"), rh(this, Bl, t);
    let i = this.observer.ignore(() => {
      let r = Mo(this.contentDOM, this.contentAttrs, t),
        s = Mo(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return (this.editorAttrs = e), (this.contentAttrs = t), i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let r of i.effects)
        if (r.is(B.announce)) {
          t && (this.announceDOM.textContent = ""), (t = !1);
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(ln);
    let e = this.state.facet(B.cspNonce);
    Kt.mount(this.root, this.styleModules.concat(Mg).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())),
      e)
    ) {
      if (this.measureRequests.indexOf(e) > -1) return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (
      (t === void 0 || (t && t.spec != e)) &&
        this.pluginMap.set(e, (t = this.plugins.find((i) => i.spec == e) || null)),
      t && t.update(this).value
    );
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return Rs(this, e, Wa(this, e, t, i));
  }
  moveByGroup(e, t) {
    return Rs(
      this,
      e,
      Wa(this, e, t, (i) => YO(this, e.head, i))
    );
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e),
      r = this.textDirectionAt(e.from),
      s = i[t ? i.length - 1 : 0];
    return w.cursor(s.side(t, r) + e.from, s.forward(!t, r) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = !0) {
    return XO(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return Rs(this, e, NO(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), Bc(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right) return i;
    let r = this.state.doc.lineAt(e),
      s = this.bidiSpans(r),
      o = s[Xt.find(s, e - r.from, -1, t)];
    return qn(i, (o.dir == he.LTR) == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(Dc) || e < this.viewport.from || e > this.viewport.to
      ? this.textDirection
      : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Tg) return Oc(e.length);
    let t = this.textDirectionAt(e.from),
      i;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == t && (s.fresh || pc(s.isolates, (i = Ba(this, e)))))
        return s.order;
    i || (i = Ba(this, e));
    let r = MO(e.text, t, i);
    return this.bidiCache.push(new Lr(e.from, e.to, t, i, !0, r)), r;
  }
  get hasFocus() {
    var e;
    return (
      (this.dom.ownerDocument.hasFocus() ||
        (F.safari &&
          ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    );
  }
  focus() {
    this.observer.ignore(() => {
      Ku(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e &&
      ((this._root = e),
      this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window),
      this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins) e.destroy(this);
    (this.plugins = []),
      this.inputState.destroy(),
      this.docView.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0);
  }
  static scrollIntoView(e, t = {}) {
    return tr.of(new Ti(typeof e == "number" ? w.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM,
      i = this.viewState.scrollAnchorAt(e);
    return tr.of(new Ti(w.cursor(i.from), "start", "start", i.top - e, t, !0));
  }
  setTabFocusMode(e) {
    e == null
      ? (this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1)
      : typeof e == "boolean"
        ? (this.inputState.tabFocusMode = e ? 0 : -1)
        : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return Oe.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return Oe.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = Kt.newName(),
      r = [lr.of(i), ln.of(qo(`.${i}`, e))];
    return t && t.dark && r.push(jo.of(!0)), r;
  }
  static baseTheme(e) {
    return Di.lowest(ln.of(qo("." + Lo, e, Xc)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector(".cm-content"),
      r = (i && ne.get(i)) || ne.get(e);
    return (
      ((t = r == null ? void 0 : r.rootView) === null || t === void 0 ? void 0 : t.view) || null
    );
  }
}
B.styleModule = ln;
B.inputHandler = xc;
B.clipboardInputFilter = $l;
B.clipboardOutputFilter = El;
B.scrollHandler = vc;
B.focusChangeEffect = kc;
B.perLineTextDirection = Dc;
B.exceptionSink = yc;
B.updateListener = Fo;
B.editable = Lt;
B.mouseSelectionStyle = bc;
B.dragMovesSelection = Sc;
B.clickAddsSelectionRange = mc;
B.decorations = Pn;
B.outerDecorations = Pc;
B.atomicRanges = Rl;
B.bidiIsolatedRanges = Ac;
B.scrollMargins = Mc;
B.darkTheme = jo;
B.cspNonce = T.define({ combine: (n) => (n.length ? n[0] : "") });
B.contentAttributes = Bl;
B.editorAttributes = Qc;
B.lineWrapping = B.contentAttributes.of({ class: "cm-lineWrapping" });
B.announce = X.define();
const Tg = 4096,
  nh = {};
class Lr {
  constructor(e, t, i, r, s, o) {
    (this.from = e),
      (this.to = t),
      (this.dir = i),
      (this.isolates = r),
      (this.fresh = s),
      (this.order = o);
  }
  static update(e, t) {
    if (t.empty && !e.some((s) => s.fresh)) return e;
    let i = [],
      r = e.length ? e[e.length - 1].dir : he.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r &&
        !t.touchesRange(o.from, o.to) &&
        i.push(new Lr(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function rh(n, e, t) {
  for (let i = n.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let s = i[r],
      o = typeof s == "function" ? s(n) : s;
    o && Ao(o, t);
  }
  return t;
}
const Fg = F.mac ? "mac" : F.windows ? "win" : F.linux ? "linux" : "key";
function zg(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == "Space" && (i = " ");
  let r, s, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h)) l = !0;
    else if (/^a(lt)?$/i.test(h)) r = !0;
    else if (/^(c|ctrl|control)$/i.test(h)) s = !0;
    else if (/^s(hift)?$/i.test(h)) o = !0;
    else if (/^mod$/i.test(h)) e == "mac" ? (l = !0) : (s = !0);
    else throw new Error("Unrecognized modifier name: " + h);
  }
  return (
    r && (i = "Alt-" + i),
    s && (i = "Ctrl-" + i),
    l && (i = "Meta-" + i),
    o && (i = "Shift-" + i),
    i
  );
}
function ar(n, e, t) {
  return (
    e.altKey && (n = "Alt-" + n),
    e.ctrlKey && (n = "Ctrl-" + n),
    e.metaKey && (n = "Meta-" + n),
    t !== !1 && e.shiftKey && (n = "Shift-" + n),
    n
  );
}
const Zg = Di.default(
    B.domEventHandlers({
      keydown(n, e) {
        return Nc(Yc(e.state), n, e, "editor");
      },
    })
  ),
  Vn = T.define({ enables: Zg }),
  sh = new WeakMap();
function Yc(n) {
  let e = n.facet(Vn),
    t = sh.get(e);
  return t || sh.set(e, (t = Lg(e.reduce((i, r) => i.concat(r), [])))), t;
}
function Wg(n, e, t) {
  return Nc(Yc(n.state), e, n, t);
}
let qt = null;
const jg = 4e3;
function Lg(n, e = Fg) {
  let t = Object.create(null),
    i = Object.create(null),
    r = (o, l) => {
      let a = i[o];
      if (a == null) i[o] = l;
      else if (a != l)
        throw new Error(
          "Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix"
        );
    },
    s = (o, l, a, h, u) => {
      var c, f;
      let d = t[o] || (t[o] = Object.create(null)),
        p = l.split(/ (?!$)/).map((S) => zg(S, e));
      for (let S = 1; S < p.length; S++) {
        let b = p.slice(0, S).join(" ");
        r(b, !0),
          d[b] ||
            (d[b] = {
              preventDefault: !0,
              stopPropagation: !1,
              run: [
                (D) => {
                  let v = (qt = { view: D, prefix: b, scope: o });
                  return (
                    setTimeout(() => {
                      qt == v && (qt = null);
                    }, jg),
                    !0
                  );
                },
              ],
            });
      }
      let O = p.join(" ");
      r(O, !1);
      let g =
        d[O] ||
        (d[O] = {
          preventDefault: !1,
          stopPropagation: !1,
          run:
            ((f = (c = d._any) === null || c === void 0 ? void 0 : c.run) === null || f === void 0
              ? void 0
              : f.slice()) || [],
        });
      a && g.run.push(a), h && (g.preventDefault = !0), u && (g.stopPropagation = !0);
    };
  for (let o of n) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let h of l) {
        let u = t[h] || (t[h] = Object.create(null));
        u._any || (u._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: c } = o;
        for (let f in u) u[f].run.push((d) => c(d, Io));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        s(h, a, o.run, o.preventDefault, o.stopPropagation),
          o.shift && s(h, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let Io = null;
function Nc(n, e, t, i) {
  Io = e;
  let r = fO(e),
    s = we(r, 0),
    o = Je(s) == r.length && r != " ",
    l = "",
    a = !1,
    h = !1,
    u = !1;
  qt &&
    qt.view == t &&
    qt.scope == i &&
    ((l = qt.prefix + " "), Fc.indexOf(e.keyCode) < 0 && ((h = !0), (qt = null)));
  let c = new Set(),
    f = (g) => {
      if (g) {
        for (let S of g.run)
          if (!c.has(S) && (c.add(S), S(t))) return g.stopPropagation && (u = !0), !0;
        g.preventDefault && (g.stopPropagation && (u = !0), (h = !0));
      }
      return !1;
    },
    d = n[i],
    p,
    O;
  return (
    d &&
      (f(d[l + ar(r, e, !o)])
        ? (a = !0)
        : o &&
            (e.altKey || e.metaKey || e.ctrlKey) &&
            !(F.windows && e.ctrlKey && e.altKey) &&
            (p = Jt[e.keyCode]) &&
            p != r
          ? (f(d[l + ar(p, e, !0)]) ||
              (e.shiftKey && (O = wn[e.keyCode]) != r && O != p && f(d[l + ar(O, e, !1)]))) &&
            (a = !0)
          : o && e.shiftKey && f(d[l + ar(r, e, !0)]) && (a = !0),
      !a && f(d._any) && (a = !0)),
    h && (a = !0),
    a && u && e.stopPropagation(),
    (Io = null),
    a
  );
}
class Xn {
  constructor(e, t, i, r, s) {
    (this.className = e), (this.left = t), (this.top = i), (this.width = r), (this.height = s);
  }
  draw() {
    let e = document.createElement("div");
    return (e.className = this.className), this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    (e.style.left = this.left + "px"),
      (e.style.top = this.top + "px"),
      this.width != null && (e.style.width = this.width + "px"),
      (e.style.height = this.height + "px");
  }
  eq(e) {
    return (
      this.left == e.left &&
      this.top == e.top &&
      this.width == e.width &&
      this.height == e.height &&
      this.className == e.className
    );
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let r = e.coordsAtPos(i.head, i.assoc || 1);
      if (!r) return [];
      let s = Gc(e);
      return [new Xn(t, r.left - s.left, r.top - s.top, null, r.bottom - r.top)];
    } else return qg(e, t, i);
  }
}
function Gc(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return {
    left:
      (n.textDirection == he.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) -
      n.scrollDOM.scrollLeft * n.scaleX,
    top: e.top - n.scrollDOM.scrollTop * n.scaleY,
  };
}
function oh(n, e, t, i) {
  let r = n.coordsAtPos(e, t * 2);
  if (!r) return i;
  let s = n.dom.getBoundingClientRect(),
    o = (r.top + r.bottom) / 2,
    l = n.posAtCoords({ x: s.left + 1, y: o }),
    a = n.posAtCoords({ x: s.right - 1, y: o });
  return l == null || a == null
    ? i
    : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function qg(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
  let i = Math.max(t.from, n.viewport.from),
    r = Math.min(t.to, n.viewport.to),
    s = n.textDirection == he.LTR,
    o = n.contentDOM,
    l = o.getBoundingClientRect(),
    a = Gc(n),
    h = o.querySelector(".cm-line"),
    u = h && window.getComputedStyle(h),
    c = l.left + (u ? parseInt(u.paddingLeft) + Math.min(0, parseInt(u.textIndent)) : 0),
    f = l.right - (u ? parseInt(u.paddingRight) : 0),
    d = Zo(n, i),
    p = Zo(n, r),
    O = d.type == Fe.Text ? d : null,
    g = p.type == Fe.Text ? p : null;
  if (
    (O && (n.lineWrapping || d.widgetLineBreaks) && (O = oh(n, i, 1, O)),
    g && (n.lineWrapping || p.widgetLineBreaks) && (g = oh(n, r, -1, g)),
    O && g && O.from == g.from && O.to == g.to)
  )
    return b(D(t.from, t.to, O));
  {
    let k = O ? D(t.from, null, O) : v(d, !1),
      y = g ? D(null, t.to, g) : v(p, !0),
      Q = [];
    return (
      (O || d).to < (g || p).from - (O && g ? 1 : 0) ||
      (d.widgetLineBreaks > 1 && k.bottom + n.defaultLineHeight / 2 < y.top)
        ? Q.push(S(c, k.bottom, f, y.top))
        : k.bottom < y.top &&
          n.elementAtHeight((k.bottom + y.top) / 2).type == Fe.Text &&
          (k.bottom = y.top = (k.bottom + y.top) / 2),
      b(k).concat(Q).concat(b(y))
    );
  }
  function S(k, y, Q, R) {
    return new Xn(e, k - a.left, y - a.top - 0.01, Q - k, R - y + 0.01);
  }
  function b({ top: k, bottom: y, horizontal: Q }) {
    let R = [];
    for (let $ = 0; $ < Q.length; $ += 2) R.push(S(Q[$], k, Q[$ + 1], y));
    return R;
  }
  function D(k, y, Q) {
    let R = 1e9,
      $ = -1e9,
      j = [];
    function Z(M, z, I, L, ee) {
      let re = n.coordsAtPos(M, M == Q.to ? -2 : 2),
        fe = n.coordsAtPos(I, I == Q.from ? 2 : -2);
      !re ||
        !fe ||
        ((R = Math.min(re.top, fe.top, R)),
        ($ = Math.max(re.bottom, fe.bottom, $)),
        ee == he.LTR
          ? j.push(s && z ? c : re.left, s && L ? f : fe.right)
          : j.push(!s && L ? c : fe.left, !s && z ? f : re.right));
    }
    let A = k ?? Q.from,
      x = y ?? Q.to;
    for (let M of n.visibleRanges)
      if (M.to > A && M.from < x)
        for (let z = Math.max(M.from, A), I = Math.min(M.to, x); ; ) {
          let L = n.state.doc.lineAt(z);
          for (let ee of n.bidiSpans(L)) {
            let re = ee.from + L.from,
              fe = ee.to + L.from;
            if (re >= I) break;
            fe > z &&
              Z(
                Math.max(re, z),
                k == null && re <= A,
                Math.min(fe, I),
                y == null && fe >= x,
                ee.dir
              );
          }
          if (((z = L.to + 1), z >= I)) break;
        }
    return (
      j.length == 0 && Z(A, k == null, x, y == null, n.textDirection),
      { top: R, bottom: $, horizontal: j }
    );
  }
  function v(k, y) {
    let Q = l.top + (y ? k.top : k.bottom);
    return { top: Q, bottom: Q, horizontal: [] };
  }
}
function Ig(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class _g {
  constructor(e, t) {
    (this.view = e),
      (this.layer = t),
      (this.drawn = []),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }),
      (this.dom = e.scrollDOM.appendChild(document.createElement("div"))),
      this.dom.classList.add("cm-layer"),
      t.above && this.dom.classList.add("cm-layer-above"),
      t.class && this.dom.classList.add(t.class),
      this.scale(),
      this.dom.setAttribute("aria-hidden", "true"),
      this.setOrder(e.state),
      e.requestMeasure(this.measureReq),
      t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(wr) != e.state.facet(wr) && this.setOrder(e.state),
      (this.layer.update(e, this.dom) || e.geometryChanged) &&
        (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0,
      i = e.facet(wr);
    for (; t < i.length && i[t] != this.layer; ) t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) &&
      ((this.scaleX = e),
      (this.scaleY = t),
      (this.dom.style.transform = `scale(${1 / e}, ${1 / t})`));
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !Ig(t, this.drawn[i]))) {
      let t = this.dom.firstChild,
        i = 0;
      for (let r of e)
        r.update && t && r.constructor && this.drawn[i].constructor && r.update(t, this.drawn[i])
          ? ((t = t.nextSibling), i++)
          : this.dom.insertBefore(r.draw(), t);
      for (; t; ) {
        let r = t.nextSibling;
        t.remove(), (t = r);
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const wr = T.define();
function Uc(n) {
  return [Oe.define((e) => new _g(e, n)), wr.of(n)];
}
const Hc = !F.ios,
  An = T.define({
    combine(n) {
      return Ct(
        n,
        { cursorBlinkRate: 1200, drawRangeCursor: !0 },
        { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t }
      );
    },
  });
function Kc(n = {}) {
  return [An.of(n), Vg, Xg, Yg, Cc.of(!0)];
}
function Jc(n) {
  return n.startState.facet(An) != n.state.facet(An);
}
const Vg = Uc({
  above: !0,
  markers(n) {
    let { state: e } = n,
      t = e.facet(An),
      i = [];
    for (let r of e.selection.ranges) {
      let s = r == e.selection.main;
      if (r.empty ? !s || Hc : t.drawRangeCursor) {
        let o = s ? "cm-cursor cm-cursor-primary" : "cm-cursor cm-cursor-secondary",
          l = r.empty ? r : w.cursor(r.head, r.head > r.anchor ? -1 : 1);
        for (let a of Xn.forRange(n, o, l)) i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) &&
      (e.style.animationName = e.style.animationName == "cm-blink" ? "cm-blink2" : "cm-blink");
    let t = Jc(n);
    return t && lh(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    lh(e.state, n);
  },
  class: "cm-cursorLayer",
});
function lh(n, e) {
  e.style.animationDuration = n.facet(An).cursorBlinkRate + "ms";
}
const Xg = Uc({
    above: !1,
    markers(n) {
      return n.state.selection.ranges
        .map((e) => (e.empty ? [] : Xn.forRange(n, "cm-selectionBackground", e)))
        .reduce((e, t) => e.concat(t));
    },
    update(n, e) {
      return n.docChanged || n.selectionSet || n.viewportChanged || Jc(n);
    },
    class: "cm-selectionLayer",
  }),
  _o = {
    ".cm-line": { "& ::selection, &::selection": { backgroundColor: "transparent !important" } },
    ".cm-content": {
      "& :focus": {
        caretColor: "initial !important",
        "&::selection, & ::selection": { backgroundColor: "Highlight !important" },
      },
    },
  };
Hc && (_o[".cm-line"].caretColor = _o[".cm-content"].caretColor = "transparent !important");
const Yg = Di.highest(B.theme(_o)),
  ef = X.define({
    map(n, e) {
      return n == null ? null : e.mapPos(n);
    },
  }),
  un = Ae.define({
    create() {
      return null;
    },
    update(n, e) {
      return (
        n != null && (n = e.changes.mapPos(n)),
        e.effects.reduce((t, i) => (i.is(ef) ? i.value : t), n)
      );
    },
  }),
  Ng = Oe.fromClass(
    class {
      constructor(n) {
        (this.view = n),
          (this.cursor = null),
          (this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) });
      }
      update(n) {
        var e;
        let t = n.state.field(un);
        t == null
          ? this.cursor != null &&
            ((e = this.cursor) === null || e === void 0 || e.remove(), (this.cursor = null))
          : (this.cursor ||
              ((this.cursor = this.view.scrollDOM.appendChild(document.createElement("div"))),
              (this.cursor.className = "cm-dropCursor")),
            (n.startState.field(un) != t || n.docChanged || n.geometryChanged) &&
              this.view.requestMeasure(this.measureReq));
      }
      readPos() {
        let { view: n } = this,
          e = n.state.field(un),
          t = e != null && n.coordsAtPos(e);
        if (!t) return null;
        let i = n.scrollDOM.getBoundingClientRect();
        return {
          left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
          top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
          height: t.bottom - t.top,
        };
      }
      drawCursor(n) {
        if (this.cursor) {
          let { scaleX: e, scaleY: t } = this.view;
          n
            ? ((this.cursor.style.left = n.left / e + "px"),
              (this.cursor.style.top = n.top / t + "px"),
              (this.cursor.style.height = n.height / t + "px"))
            : (this.cursor.style.left = "-100000px");
        }
      }
      destroy() {
        this.cursor && this.cursor.remove();
      }
      setDropPos(n) {
        this.view.state.field(un) != n && this.view.dispatch({ effects: ef.of(n) });
      }
    },
    {
      eventObservers: {
        dragover(n) {
          this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
        },
        dragleave(n) {
          (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) &&
            this.setDropPos(null);
        },
        dragend() {
          this.setDropPos(null);
        },
        drop() {
          this.setDropPos(null);
        },
      },
    }
  );
function Gg() {
  return [un, Ng];
}
function ah(n, e, t, i, r) {
  e.lastIndex = 0;
  for (let s = n.iterRange(t, i), o = t, l; !s.next().done; o += s.value.length)
    if (!s.lineBreak) for (; (l = e.exec(s.value)); ) r(o + l.index, l);
}
function Ug(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t;
  let i = [];
  for (let { from: r, to: s } of t)
    (r = Math.max(n.state.doc.lineAt(r).from, r - e)),
      (s = Math.min(n.state.doc.lineAt(s).to, s + e)),
      i.length && i[i.length - 1].to >= r ? (i[i.length - 1].to = s) : i.push({ from: r, to: s });
  return i;
}
class Hg {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: r, boundary: s, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set"
      );
    if (((this.regexp = t), r)) this.addMatch = (l, a, h, u) => r(u, h, h + l[0].length, l, a);
    else if (typeof i == "function")
      this.addMatch = (l, a, h, u) => {
        let c = i(l, a, h);
        c && u(h, h + l[0].length, c);
      };
    else if (i) this.addMatch = (l, a, h, u) => u(h, h + l[0].length, i);
    else
      throw new RangeError(
        "Either 'decorate' or 'decoration' should be provided to MatchDecorator"
      );
    (this.boundary = s), (this.maxLength = o);
  }
  createDeco(e) {
    let t = new Ht(),
      i = t.add.bind(t);
    for (let { from: r, to: s } of Ug(e, this.maxLength))
      ah(e.state.doc, this.regexp, r, s, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9,
      r = -1;
    return (
      e.docChanged &&
        e.changes.iterChanges((s, o, l, a) => {
          a > e.view.viewport.from &&
            l < e.view.viewport.to &&
            ((i = Math.min(l, i)), (r = Math.max(a, r)));
        }),
      e.viewportChanged || r - i > 1e3
        ? this.createDeco(e.view)
        : r > -1
          ? this.updateRange(e.view, t.map(e.changes), i, r)
          : t
    );
  }
  updateRange(e, t, i, r) {
    for (let s of e.visibleRanges) {
      let o = Math.max(s.from, i),
        l = Math.min(s.to, r);
      if (l > o) {
        let a = e.state.doc.lineAt(o),
          h = a.to < l ? e.state.doc.lineAt(l) : a,
          u = Math.max(s.from, a.from),
          c = Math.min(s.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              u = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              c = l;
              break;
            }
        }
        let f = [],
          d,
          p = (O, g, S) => f.push(S.range(O, g));
        if (a == h)
          for (
            this.regexp.lastIndex = u - a.from;
            (d = this.regexp.exec(a.text)) && d.index < c - a.from;

          )
            this.addMatch(d, e, d.index + a.from, p);
        else ah(e.state.doc, this.regexp, u, c, (O, g) => this.addMatch(g, e, O, p));
        t = t.update({ filterFrom: u, filterTo: c, filter: (O, g) => O < u || g > c, add: f });
      }
    }
    return t;
  }
}
const Vo = /x/.unicode != null ? "gu" : "g",
  Kg = new RegExp(
    `[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,
    Vo
  ),
  Jg = {
    0: "null",
    7: "bell",
    8: "backspace",
    10: "newline",
    11: "vertical tab",
    13: "carriage return",
    27: "escape",
    8203: "zero width space",
    8204: "zero width non-joiner",
    8205: "zero width joiner",
    8206: "left-to-right mark",
    8207: "right-to-left mark",
    8232: "line separator",
    8237: "left-to-right override",
    8238: "right-to-left override",
    8294: "left-to-right isolate",
    8295: "right-to-left isolate",
    8297: "pop directional isolate",
    8233: "paragraph separator",
    65279: "zero width no-break space",
    65532: "object replacement",
  };
let zs = null;
function em() {
  var n;
  if (zs == null && typeof document < "u" && document.body) {
    let e = document.body.style;
    zs = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return zs || !1;
}
const Qr = T.define({
  combine(n) {
    let e = Ct(n, { render: null, specialChars: Kg, addSpecialChars: null });
    return (
      (e.replaceTabs = !em()) && (e.specialChars = new RegExp("	|" + e.specialChars.source, Vo)),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(e.specialChars.source + "|" + e.addSpecialChars.source, Vo)),
      e
    );
  },
});
function tf(n = {}) {
  return [Qr.of(n), tm()];
}
let hh = null;
function tm() {
  return (
    hh ||
    (hh = Oe.fromClass(
      class {
        constructor(n) {
          (this.view = n),
            (this.decorations = W.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(n.state.facet(Qr))),
            (this.decorations = this.decorator.createDeco(n));
        }
        makeDecorator(n) {
          return new Hg({
            regexp: n.specialChars,
            decoration: (e, t, i) => {
              let { doc: r } = t.state,
                s = we(e[0], 0);
              if (s == 9) {
                let o = r.lineAt(i),
                  l = t.state.tabSize,
                  a = Ni(o.text, l, i - o.from);
                return W.replace({
                  widget: new sm(
                    ((l - (a % l)) * this.view.defaultCharacterWidth) / this.view.scaleX
                  ),
                });
              }
              return (
                this.decorationCache[s] ||
                (this.decorationCache[s] = W.replace({ widget: new rm(n, s) }))
              );
            },
            boundary: n.replaceTabs ? void 0 : /[^]/,
          });
        }
        update(n) {
          let e = n.state.facet(Qr);
          n.startState.facet(Qr) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(n.view)))
            : (this.decorations = this.decorator.updateDeco(n, this.decorations));
        }
      },
      { decorations: (n) => n.decorations }
    ))
  );
}
const im = "•";
function nm(n) {
  return n >= 32 ? im : n == 10 ? "␤" : String.fromCharCode(9216 + n);
}
class rm extends Ft {
  constructor(e, t) {
    super(), (this.options = e), (this.code = t);
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = nm(this.code),
      i =
        e.state.phrase("Control character") +
        " " +
        (Jg[this.code] || "0x" + this.code.toString(16)),
      r = this.options.render && this.options.render(this.code, i, t);
    if (r) return r;
    let s = document.createElement("span");
    return (
      (s.textContent = t),
      (s.title = i),
      s.setAttribute("aria-label", i),
      (s.className = "cm-specialChar"),
      s
    );
  }
  ignoreEvent() {
    return !1;
  }
}
class sm extends Ft {
  constructor(e) {
    super(), (this.width = e);
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement("span");
    return (e.textContent = "	"), (e.className = "cm-tab"), (e.style.width = this.width + "px"), e;
  }
  ignoreEvent() {
    return !1;
  }
}
function nf() {
  return lm;
}
const om = W.line({ class: "cm-activeLine" }),
  lm = Oe.fromClass(
    class {
      constructor(n) {
        this.decorations = this.getDeco(n);
      }
      update(n) {
        (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
      }
      getDeco(n) {
        let e = -1,
          t = [];
        for (let i of n.state.selection.ranges) {
          let r = n.lineBlockAt(i.head);
          r.from > e && (t.push(om.range(r.from)), (e = r.from));
        }
        return W.set(t);
      }
    },
    { decorations: (n) => n.decorations }
  );
class am extends Ft {
  constructor(e) {
    super(), (this.content = e);
  }
  toDOM(e) {
    let t = document.createElement("span");
    return (
      (t.className = "cm-placeholder"),
      (t.style.pointerEvents = "none"),
      t.appendChild(
        typeof this.content == "string"
          ? document.createTextNode(this.content)
          : typeof this.content == "function"
            ? this.content(e)
            : this.content.cloneNode(!0)
      ),
      typeof this.content == "string"
        ? t.setAttribute("aria-label", "placeholder " + this.content)
        : t.setAttribute("aria-hidden", "true"),
      t
    );
  }
  coordsAt(e) {
    let t = e.firstChild ? Li(e.firstChild) : [];
    if (!t.length) return null;
    let i = window.getComputedStyle(e.parentNode),
      r = qn(t[0], i.direction != "rtl"),
      s = parseInt(i.lineHeight);
    return r.bottom - r.top > s * 1.5
      ? { left: r.left, right: r.right, top: r.top, bottom: r.top + s }
      : r;
  }
  ignoreEvent() {
    return !1;
  }
}
function hm(n) {
  return Oe.fromClass(
    class {
      constructor(e) {
        (this.view = e),
          (this.placeholder = n
            ? W.set([W.widget({ widget: new am(n), side: 1 }).range(0)])
            : W.none);
      }
      get decorations() {
        return this.view.state.doc.length ? W.none : this.placeholder;
      }
    },
    { decorations: (e) => e.decorations }
  );
}
const Xo = 2e3;
function um(n, e, t) {
  let i = Math.min(e.line, t.line),
    r = Math.max(e.line, t.line),
    s = [];
  if (e.off > Xo || t.off > Xo || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off),
      l = Math.max(e.off, t.off);
    for (let a = i; a <= r; a++) {
      let h = n.doc.line(a);
      h.length <= l && s.push(w.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col),
      l = Math.max(e.col, t.col);
    for (let a = i; a <= r; a++) {
      let h = n.doc.line(a),
        u = ko(h.text, o, n.tabSize, !0);
      if (u < 0) s.push(w.cursor(h.to));
      else {
        let c = ko(h.text, l, n.tabSize);
        s.push(w.range(h.from + u, h.from + c));
      }
    }
  }
  return s;
}
function cm(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function uh(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    i = n.state.doc.lineAt(t),
    r = t - i.from,
    s = r > Xo ? -1 : r == i.length ? cm(n, e.clientX) : Ni(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: s, off: r };
}
function fm(n, e) {
  let t = uh(n, e),
    i = n.state.selection;
  return t
    ? {
        update(r) {
          if (r.docChanged) {
            let s = r.changes.mapPos(r.startState.doc.line(t.line).from),
              o = r.state.doc.lineAt(s);
            (t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }),
              (i = i.map(r.changes));
          }
        },
        get(r, s, o) {
          let l = uh(n, r);
          if (!l) return i;
          let a = um(n.state, t, l);
          return a.length ? (o ? w.create(a.concat(i.ranges)) : w.create(a)) : i;
        },
      }
    : null;
}
function dm(n) {
  let e = (n == null ? void 0 : n.eventFilter) || ((t) => t.altKey && t.button == 0);
  return B.mouseSelectionStyle.of((t, i) => (e(i) ? fm(t, i) : null));
}
const pm = {
    Alt: [18, (n) => !!n.altKey],
    Control: [17, (n) => !!n.ctrlKey],
    Shift: [16, (n) => !!n.shiftKey],
    Meta: [91, (n) => !!n.metaKey],
  },
  Om = { style: "cursor: crosshair" };
function gm(n = {}) {
  let [e, t] = pm[n.key || "Alt"],
    i = Oe.fromClass(
      class {
        constructor(r) {
          (this.view = r), (this.isDown = !1);
        }
        set(r) {
          this.isDown != r && ((this.isDown = r), this.view.update([]));
        }
      },
      {
        eventObservers: {
          keydown(r) {
            this.set(r.keyCode == e || t(r));
          },
          keyup(r) {
            (r.keyCode == e || !t(r)) && this.set(!1);
          },
          mousemove(r) {
            this.set(t(r));
          },
        },
      }
    );
  return [
    i,
    B.contentAttributes.of((r) => {
      var s;
      return !((s = r.plugin(i)) === null || s === void 0) && s.isDown ? Om : null;
    }),
  ];
}
const en = "-10000px";
class rf {
  constructor(e, t, i, r) {
    (this.facet = t),
      (this.createTooltipView = i),
      (this.removeTooltipView = r),
      (this.input = e.state.facet(t)),
      (this.tooltips = this.input.filter((o) => o));
    let s = null;
    this.tooltipViews = this.tooltips.map((o) => (s = i(o, s)));
  }
  update(e, t) {
    var i;
    let r = e.state.facet(this.facet),
      s = r.filter((a) => a);
    if (r === this.input) {
      for (let a of this.tooltipViews) a.update && a.update(e);
      return !1;
    }
    let o = [],
      l = t ? [] : null;
    for (let a = 0; a < s.length; a++) {
      let h = s[a],
        u = -1;
      if (h) {
        for (let c = 0; c < this.tooltips.length; c++) {
          let f = this.tooltips[c];
          f && f.create == h.create && (u = c);
        }
        if (u < 0) (o[a] = this.createTooltipView(h, a ? o[a - 1] : null)), l && (l[a] = !!h.above);
        else {
          let c = (o[a] = this.tooltipViews[u]);
          l && (l[a] = t[u]), c.update && c.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 &&
        (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return (
      t && (l.forEach((a, h) => (t[h] = a)), (t.length = l.length)),
      (this.input = r),
      (this.tooltips = s),
      (this.tooltipViews = o),
      !0
    );
  }
}
function mm(n) {
  let { win: e } = n;
  return { top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth };
}
const Zs = T.define({
    combine: (n) => {
      var e, t, i;
      return {
        position: F.ios
          ? "absolute"
          : ((e = n.find((r) => r.position)) === null || e === void 0 ? void 0 : e.position) ||
            "fixed",
        parent:
          ((t = n.find((r) => r.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
        tooltipSpace:
          ((i = n.find((r) => r.tooltipSpace)) === null || i === void 0
            ? void 0
            : i.tooltipSpace) || mm,
      };
    },
  }),
  ch = new WeakMap(),
  Zl = Oe.fromClass(
    class {
      constructor(n) {
        (this.view = n),
          (this.above = []),
          (this.inView = !0),
          (this.madeAbsolute = !1),
          (this.lastTransaction = 0),
          (this.measureTimeout = -1);
        let e = n.state.facet(Zs);
        (this.position = e.position),
          (this.parent = e.parent),
          (this.classes = n.themeClasses),
          this.createContainer(),
          (this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this,
          }),
          (this.resizeObserver =
            typeof ResizeObserver == "function"
              ? new ResizeObserver(() => this.measureSoon())
              : null),
          (this.manager = new rf(
            n,
            Wl,
            (t, i) => this.createTooltip(t, i),
            (t) => {
              this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
            }
          )),
          (this.above = this.manager.tooltips.map((t) => !!t.above)),
          (this.intersectionObserver =
            typeof IntersectionObserver == "function"
              ? new IntersectionObserver(
                  (t) => {
                    Date.now() > this.lastTransaction - 50 &&
                      t.length > 0 &&
                      t[t.length - 1].intersectionRatio < 1 &&
                      this.measureSoon();
                  },
                  { threshold: [1] }
                )
              : null),
          this.observeIntersection(),
          n.win.addEventListener("resize", (this.measureSoon = this.measureSoon.bind(this))),
          this.maybeMeasure();
      }
      createContainer() {
        this.parent
          ? ((this.container = document.createElement("div")),
            (this.container.style.position = "relative"),
            (this.container.className = this.view.themeClasses),
            this.parent.appendChild(this.container))
          : (this.container = this.view.dom);
      }
      observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom);
        }
      }
      measureSoon() {
        this.measureTimeout < 0 &&
          (this.measureTimeout = setTimeout(() => {
            (this.measureTimeout = -1), this.maybeMeasure();
          }, 50));
      }
      update(n) {
        n.transactions.length && (this.lastTransaction = Date.now());
        let e = this.manager.update(n, this.above);
        e && this.observeIntersection();
        let t = e || n.geometryChanged,
          i = n.state.facet(Zs);
        if (i.position != this.position && !this.madeAbsolute) {
          this.position = i.position;
          for (let r of this.manager.tooltipViews) r.dom.style.position = this.position;
          t = !0;
        }
        if (i.parent != this.parent) {
          this.parent && this.container.remove(), (this.parent = i.parent), this.createContainer();
          for (let r of this.manager.tooltipViews) this.container.appendChild(r.dom);
          t = !0;
        } else
          this.parent &&
            this.view.themeClasses != this.classes &&
            (this.classes = this.container.className = this.view.themeClasses);
        t && this.maybeMeasure();
      }
      createTooltip(n, e) {
        let t = n.create(this.view),
          i = e ? e.dom : null;
        if (
          (t.dom.classList.add("cm-tooltip"),
          n.arrow && !t.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow"))
        ) {
          let r = document.createElement("div");
          (r.className = "cm-tooltip-arrow"), t.dom.appendChild(r);
        }
        return (
          (t.dom.style.position = this.position),
          (t.dom.style.top = en),
          (t.dom.style.left = "0px"),
          this.container.insertBefore(t.dom, i),
          t.mount && t.mount(this.view),
          this.resizeObserver && this.resizeObserver.observe(t.dom),
          t
        );
      }
      destroy() {
        var n, e, t;
        this.view.win.removeEventListener("resize", this.measureSoon);
        for (let i of this.manager.tooltipViews)
          i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
        this.parent && this.container.remove(),
          (e = this.resizeObserver) === null || e === void 0 || e.disconnect(),
          (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(),
          clearTimeout(this.measureTimeout);
      }
      readMeasure() {
        let n = this.view.dom.getBoundingClientRect(),
          e = 1,
          t = 1,
          i = !1;
        if (this.position == "fixed" && this.manager.tooltipViews.length) {
          let { dom: r } = this.manager.tooltipViews[0];
          if (F.gecko) i = r.offsetParent != this.container.ownerDocument.body;
          else if (r.style.top == en && r.style.left == "0px") {
            let s = r.getBoundingClientRect();
            i = Math.abs(s.top + 1e4) > 1 || Math.abs(s.left) > 1;
          }
        }
        if (i || this.position == "absolute")
          if (this.parent) {
            let r = this.parent.getBoundingClientRect();
            r.width &&
              r.height &&
              ((e = r.width / this.parent.offsetWidth), (t = r.height / this.parent.offsetHeight));
          } else ({ scaleX: e, scaleY: t } = this.view.viewState);
        return {
          editor: n,
          parent: this.parent ? this.container.getBoundingClientRect() : n,
          pos: this.manager.tooltips.map((r, s) => {
            let o = this.manager.tooltipViews[s];
            return o.getCoords ? o.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
          }),
          size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
          space: this.view.state.facet(Zs).tooltipSpace(this.view),
          scaleX: e,
          scaleY: t,
          makeAbsolute: i,
        };
      }
      writeMeasure(n) {
        var e;
        if (n.makeAbsolute) {
          (this.madeAbsolute = !0), (this.position = "absolute");
          for (let l of this.manager.tooltipViews) l.dom.style.position = "absolute";
        }
        let { editor: t, space: i, scaleX: r, scaleY: s } = n,
          o = [];
        for (let l = 0; l < this.manager.tooltips.length; l++) {
          let a = this.manager.tooltips[l],
            h = this.manager.tooltipViews[l],
            { dom: u } = h,
            c = n.pos[l],
            f = n.size[l];
          if (
            !c ||
            c.bottom <= Math.max(t.top, i.top) ||
            c.top >= Math.min(t.bottom, i.bottom) ||
            c.right < Math.max(t.left, i.left) - 0.1 ||
            c.left > Math.min(t.right, i.right) + 0.1
          ) {
            u.style.top = en;
            continue;
          }
          let d = a.arrow ? h.dom.querySelector(".cm-tooltip-arrow") : null,
            p = d ? 7 : 0,
            O = f.right - f.left,
            g = (e = ch.get(h)) !== null && e !== void 0 ? e : f.bottom - f.top,
            S = h.offset || bm,
            b = this.view.textDirection == he.LTR,
            D =
              f.width > i.right - i.left
                ? b
                  ? i.left
                  : i.right - f.width
                : b
                  ? Math.max(i.left, Math.min(c.left - (d ? 14 : 0) + S.x, i.right - O))
                  : Math.min(Math.max(i.left, c.left - O + (d ? 14 : 0) - S.x), i.right - O),
            v = this.above[l];
          !a.strictSide &&
            (v
              ? c.top - (f.bottom - f.top) - S.y < i.top
              : c.bottom + (f.bottom - f.top) + S.y > i.bottom) &&
            v == i.bottom - c.bottom > c.top - i.top &&
            (v = this.above[l] = !v);
          let k = (v ? c.top - i.top : i.bottom - c.bottom) - p;
          if (k < g && h.resize !== !1) {
            if (k < this.view.defaultLineHeight) {
              u.style.top = en;
              continue;
            }
            ch.set(h, g), (u.style.height = (g = k) / s + "px");
          } else u.style.height && (u.style.height = "");
          let y = v ? c.top - g - p - S.y : c.bottom + p + S.y,
            Q = D + O;
          if (h.overlap !== !0)
            for (let R of o)
              R.left < Q &&
                R.right > D &&
                R.top < y + g &&
                R.bottom > y &&
                (y = v ? R.top - g - 2 - p : R.bottom + p + 2);
          if (
            (this.position == "absolute"
              ? ((u.style.top = (y - n.parent.top) / s + "px"),
                (u.style.left = (D - n.parent.left) / r + "px"))
              : ((u.style.top = y / s + "px"), (u.style.left = D / r + "px")),
            d)
          ) {
            let R = c.left + (b ? S.x : -S.x) - (D + 14 - 7);
            d.style.left = R / r + "px";
          }
          h.overlap !== !0 && o.push({ left: D, top: y, right: Q, bottom: y + g }),
            u.classList.toggle("cm-tooltip-above", v),
            u.classList.toggle("cm-tooltip-below", !v),
            h.positioned && h.positioned(n.space);
        }
      }
      maybeMeasure() {
        if (
          this.manager.tooltips.length &&
          (this.view.inView && this.view.requestMeasure(this.measureReq),
          this.inView != this.view.inView && ((this.inView = this.view.inView), !this.inView))
        )
          for (let n of this.manager.tooltipViews) n.dom.style.top = en;
      }
    },
    {
      eventObservers: {
        scroll() {
          this.maybeMeasure();
        },
      },
    }
  ),
  Sm = B.baseTheme({
    ".cm-tooltip": { zIndex: 100, boxSizing: "border-box" },
    "&light .cm-tooltip": { border: "1px solid #bbb", backgroundColor: "#f5f5f5" },
    "&light .cm-tooltip-section:not(:first-child)": { borderTop: "1px solid #bbb" },
    "&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" },
    ".cm-tooltip-arrow": {
      height: "7px",
      width: `${7 * 2}px`,
      position: "absolute",
      zIndex: -1,
      overflow: "hidden",
      "&:before, &:after": {
        content: "''",
        position: "absolute",
        width: 0,
        height: 0,
        borderLeft: "7px solid transparent",
        borderRight: "7px solid transparent",
      },
      ".cm-tooltip-above &": {
        bottom: "-7px",
        "&:before": { borderTop: "7px solid #bbb" },
        "&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" },
      },
      ".cm-tooltip-below &": {
        top: "-7px",
        "&:before": { borderBottom: "7px solid #bbb" },
        "&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" },
      },
    },
    "&dark .cm-tooltip .cm-tooltip-arrow": {
      "&:before": { borderTopColor: "#333338", borderBottomColor: "#333338" },
      "&:after": { borderTopColor: "transparent", borderBottomColor: "transparent" },
    },
  }),
  bm = { x: 0, y: 0 },
  Wl = T.define({ enables: [Zl, Sm] }),
  qr = T.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class Os {
  static create(e) {
    return new Os(e);
  }
  constructor(e) {
    (this.view = e),
      (this.mounted = !1),
      (this.dom = document.createElement("div")),
      this.dom.classList.add("cm-tooltip-hover"),
      (this.manager = new rf(
        e,
        qr,
        (t, i) => this.createHostedView(t, i),
        (t) => t.dom.remove()
      ));
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return (
      i.dom.classList.add("cm-tooltip-section"),
      this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild),
      this.mounted && i.mount && i.mount(this.view),
      i
    );
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews) (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let r = i[e];
      if (r !== void 0) {
        if (t === void 0) t = r;
        else if (t !== r) return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp("offset");
  }
  get getCoords() {
    return this.passProp("getCoords");
  }
  get overlap() {
    return this.passProp("overlap");
  }
  get resize() {
    return this.passProp("resize");
  }
}
const ym = Wl.compute([qr], (n) => {
  let e = n.facet(qr);
  return e.length === 0
    ? null
    : {
        pos: Math.min(...e.map((t) => t.pos)),
        end: Math.max(
          ...e.map((t) => {
            var i;
            return (i = t.end) !== null && i !== void 0 ? i : t.pos;
          })
        ),
        create: Os.create,
        above: e[0].above,
        arrow: e.some((t) => t.arrow),
      };
});
class xm {
  constructor(e, t, i, r, s) {
    (this.view = e),
      (this.source = t),
      (this.field = i),
      (this.setHover = r),
      (this.hoverTime = s),
      (this.hoverTimeout = -1),
      (this.restartTimeout = -1),
      (this.pending = null),
      (this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
      (this.checkHover = this.checkHover.bind(this)),
      e.dom.addEventListener("mouseleave", (this.mouseleave = this.mouseleave.bind(this))),
      e.dom.addEventListener("mousemove", (this.mousemove = this.mousemove.bind(this)));
  }
  update() {
    this.pending &&
      ((this.pending = null),
      clearTimeout(this.restartTimeout),
      (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (((this.hoverTimeout = -1), this.active.length)) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime
      ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
      : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this,
      i = e.docView.nearest(t.target);
    if (!i) return;
    let r,
      s = 1;
    if (i instanceof Vt) r = i.posAtStart;
    else {
      if (((r = e.posAtCoords(t)), r == null)) return;
      let l = e.coordsAtPos(r);
      if (
        !l ||
        t.y < l.top ||
        t.y > l.bottom ||
        t.x < l.left - e.defaultCharacterWidth ||
        t.x > l.right + e.defaultCharacterWidth
      )
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(r)).find((u) => u.from <= r && u.to >= r),
        h = a && a.dir == he.RTL ? -1 : 1;
      s = t.x < l.left ? -h : h;
    }
    let o = this.source(e, r, s);
    if (o != null && o.then) {
      let l = (this.pending = { pos: r });
      o.then(
        (a) => {
          this.pending == l &&
            ((this.pending = null),
            a &&
              !(Array.isArray(a) && !a.length) &&
              e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
        },
        (a) => qe(e.state, a, "hover tooltip")
      );
    } else
      o &&
        !(Array.isArray(o) && !o.length) &&
        e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Zl),
      t = e ? e.manager.tooltips.findIndex((i) => i.create == Os.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    (this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }),
      this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: r, tooltip: s } = this;
    if ((r.length && s && !km(s.dom, e)) || this.pending) {
      let { pos: o } = r[0] || this.pending,
        l =
          (i = (t = r[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0
            ? i
            : o;
      (o == l
        ? this.view.posAtCoords(this.lastMove) != o
        : !Dm(this.view, o, l, e.clientX, e.clientY)) &&
        (this.view.dispatch({ effects: this.setHover.of([]) }), (this.pending = null));
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), (this.hoverTimeout = -1);
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget)
        ? this.watchTooltipLeave(i.dom)
        : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener("mouseleave", t),
        this.active.length &&
          !this.view.dom.contains(i.relatedTarget) &&
          this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener("mouseleave", t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout),
      this.view.dom.removeEventListener("mouseleave", this.mouseleave),
      this.view.dom.removeEventListener("mousemove", this.mousemove);
  }
}
const hr = 4;
function km(n, e) {
  let { left: t, right: i, top: r, bottom: s } = n.getBoundingClientRect(),
    o;
  if ((o = n.querySelector(".cm-tooltip-arrow"))) {
    let l = o.getBoundingClientRect();
    (r = Math.min(l.top, r)), (s = Math.max(l.bottom, s));
  }
  return e.clientX >= t - hr && e.clientX <= i + hr && e.clientY >= r - hr && e.clientY <= s + hr;
}
function Dm(n, e, t, i, r, s) {
  let o = n.scrollDOM.getBoundingClientRect(),
    l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > r || Math.min(o.bottom, l) < r) return !1;
  let a = n.posAtCoords({ x: i, y: r }, !1);
  return a >= e && a <= t;
}
function Cm(n, e = {}) {
  let t = X.define(),
    i = Ae.define({
      create() {
        return [];
      },
      update(r, s) {
        if (
          r.length &&
          (e.hideOnChange && (s.docChanged || s.selection)
            ? (r = [])
            : e.hideOn && (r = r.filter((o) => !e.hideOn(s, o))),
          s.docChanged)
        ) {
          let o = [];
          for (let l of r) {
            let a = s.changes.mapPos(l.pos, -1, Re.TrackDel);
            if (a != null) {
              let h = Object.assign(Object.create(null), l);
              (h.pos = a), h.end != null && (h.end = s.changes.mapPos(h.end)), o.push(h);
            }
          }
          r = o;
        }
        for (let o of s.effects) o.is(t) && (r = o.value), o.is(vm) && (r = []);
        return r;
      },
      provide: (r) => qr.from(r),
    });
  return {
    active: i,
    extension: [i, Oe.define((r) => new xm(r, n, i, t, e.hoverTime || 300)), ym],
  };
}
function sf(n, e) {
  let t = n.plugin(Zl);
  if (!t) return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const vm = X.define(),
  fh = T.define({
    combine(n) {
      let e, t;
      for (let i of n) (e = e || i.topContainer), (t = t || i.bottomContainer);
      return { topContainer: e, bottomContainer: t };
    },
  });
function Mn(n, e) {
  let t = n.plugin(of),
    i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const of = Oe.fromClass(
  class {
    constructor(n) {
      (this.input = n.state.facet($n)),
        (this.specs = this.input.filter((t) => t)),
        (this.panels = this.specs.map((t) => t(n)));
      let e = n.state.facet(fh);
      (this.top = new ur(n, !0, e.topContainer)),
        (this.bottom = new ur(n, !1, e.bottomContainer)),
        this.top.sync(this.panels.filter((t) => t.top)),
        this.bottom.sync(this.panels.filter((t) => !t.top));
      for (let t of this.panels) t.dom.classList.add("cm-panel"), t.mount && t.mount();
    }
    update(n) {
      let e = n.state.facet(fh);
      this.top.container != e.topContainer &&
        (this.top.sync([]), (this.top = new ur(n.view, !0, e.topContainer))),
        this.bottom.container != e.bottomContainer &&
          (this.bottom.sync([]), (this.bottom = new ur(n.view, !1, e.bottomContainer))),
        this.top.syncClasses(),
        this.bottom.syncClasses();
      let t = n.state.facet($n);
      if (t != this.input) {
        let i = t.filter((a) => a),
          r = [],
          s = [],
          o = [],
          l = [];
        for (let a of i) {
          let h = this.specs.indexOf(a),
            u;
          h < 0 ? ((u = a(n.view)), l.push(u)) : ((u = this.panels[h]), u.update && u.update(n)),
            r.push(u),
            (u.top ? s : o).push(u);
        }
        (this.specs = i), (this.panels = r), this.top.sync(s), this.bottom.sync(o);
        for (let a of l) a.dom.classList.add("cm-panel"), a.mount && a.mount();
      } else for (let i of this.panels) i.update && i.update(n);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  },
  {
    provide: (n) =>
      B.scrollMargins.of((e) => {
        let t = e.plugin(n);
        return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
      }),
  }
);
class ur {
  constructor(e, t, i) {
    (this.view = e),
      (this.top = t),
      (this.container = i),
      (this.dom = void 0),
      (this.classes = ""),
      (this.panels = []),
      this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
    (this.panels = e), this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), (this.dom = void 0));
      return;
    }
    if (!this.dom) {
      (this.dom = document.createElement("div")),
        (this.dom.className = this.top ? "cm-panels cm-panels-top" : "cm-panels cm-panels-bottom"),
        (this.dom.style[this.top ? "top" : "bottom"] = "0");
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; ) e = dh(e);
        e = e.nextSibling;
      } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = dh(e);
  }
  scrollMargin() {
    return !this.dom || this.container
      ? 0
      : Math.max(
          0,
          this.top
            ? this.dom.getBoundingClientRect().bottom -
                Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
            : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) -
                this.dom.getBoundingClientRect().top
        );
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(" ")) e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(" "))
        e && this.container.classList.add(e);
    }
  }
}
function dh(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const $n = T.define({ enables: of });
class Tt extends Si {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
}
Tt.prototype.elementClass = "";
Tt.prototype.toDOM = void 0;
Tt.prototype.mapMode = Re.TrackBefore;
Tt.prototype.startSide = Tt.prototype.endSide = -1;
Tt.prototype.point = !0;
const Pr = T.define(),
  wm = T.define(),
  Qm = {
    class: "",
    renderEmptyElements: !1,
    elementStyle: "",
    markers: () => K.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
  },
  yn = T.define();
function Pm(n) {
  return [lf(), yn.of(Object.assign(Object.assign({}, Qm), n))];
}
const Yo = T.define({ combine: (n) => n.some((e) => e) });
function lf(n) {
  let e = [Am];
  return n && n.fixed === !1 && e.push(Yo.of(!0)), e;
}
const Am = Oe.fromClass(
  class {
    constructor(n) {
      (this.view = n),
        (this.prevViewport = n.viewport),
        (this.dom = document.createElement("div")),
        (this.dom.className = "cm-gutters"),
        this.dom.setAttribute("aria-hidden", "true"),
        (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"),
        (this.gutters = n.state.facet(yn).map((e) => new Oh(n, e)));
      for (let e of this.gutters) this.dom.appendChild(e.dom);
      (this.fixed = !n.state.facet(Yo)),
        this.fixed && (this.dom.style.position = "sticky"),
        this.syncGutters(!1),
        n.scrollDOM.insertBefore(this.dom, n.contentDOM);
    }
    update(n) {
      if (this.updateGutters(n)) {
        let e = this.prevViewport,
          t = n.view.viewport,
          i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
        this.syncGutters(i < (t.to - t.from) * 0.8);
      }
      n.geometryChanged &&
        (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"),
        this.view.state.facet(Yo) != !this.fixed &&
          ((this.fixed = !this.fixed), (this.dom.style.position = this.fixed ? "sticky" : "")),
        (this.prevViewport = n.view.viewport);
    }
    syncGutters(n) {
      let e = this.dom.nextSibling;
      n && this.dom.remove();
      let t = K.iter(this.view.state.facet(Pr), this.view.viewport.from),
        i = [],
        r = this.gutters.map((s) => new Mm(s, this.view.viewport, -this.view.documentPadding.top));
      for (let s of this.view.viewportLineBlocks)
        if ((i.length && (i = []), Array.isArray(s.type))) {
          let o = !0;
          for (let l of s.type)
            if (l.type == Fe.Text && o) {
              No(t, i, l.from);
              for (let a of r) a.line(this.view, l, i);
              o = !1;
            } else if (l.widget) for (let a of r) a.widget(this.view, l);
        } else if (s.type == Fe.Text) {
          No(t, i, s.from);
          for (let o of r) o.line(this.view, s, i);
        } else if (s.widget) for (let o of r) o.widget(this.view, s);
      for (let s of r) s.finish();
      n && this.view.scrollDOM.insertBefore(this.dom, e);
    }
    updateGutters(n) {
      let e = n.startState.facet(yn),
        t = n.state.facet(yn),
        i =
          n.docChanged ||
          n.heightChanged ||
          n.viewportChanged ||
          !K.eq(
            n.startState.facet(Pr),
            n.state.facet(Pr),
            n.view.viewport.from,
            n.view.viewport.to
          );
      if (e == t) for (let r of this.gutters) r.update(n) && (i = !0);
      else {
        i = !0;
        let r = [];
        for (let s of t) {
          let o = e.indexOf(s);
          o < 0
            ? r.push(new Oh(this.view, s))
            : (this.gutters[o].update(n), r.push(this.gutters[o]));
        }
        for (let s of this.gutters) s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
        for (let s of r) this.dom.appendChild(s.dom);
        this.gutters = r;
      }
      return i;
    }
    destroy() {
      for (let n of this.gutters) n.destroy();
      this.dom.remove();
    }
  },
  {
    provide: (n) =>
      B.scrollMargins.of((e) => {
        let t = e.plugin(n);
        return !t || t.gutters.length == 0 || !t.fixed
          ? null
          : e.textDirection == he.LTR
            ? { left: t.dom.offsetWidth * e.scaleX }
            : { right: t.dom.offsetWidth * e.scaleX };
      }),
  }
);
function ph(n) {
  return Array.isArray(n) ? n : [n];
}
function No(n, e, t) {
  for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class Mm {
  constructor(e, t, i) {
    (this.gutter = e), (this.height = i), (this.i = 0), (this.cursor = K.iter(e.markers, t.from));
  }
  addElement(e, t, i) {
    let { gutter: r } = this,
      s = (t.top - this.height) / e.scaleY,
      o = t.height / e.scaleY;
    if (this.i == r.elements.length) {
      let l = new af(e, o, s, i);
      r.elements.push(l), r.dom.appendChild(l.dom);
    } else r.elements[this.i].update(e, o, s, i);
    (this.height = t.bottom), this.i++;
  }
  line(e, t, i) {
    let r = [];
    No(this.cursor, r, t.from), i.length && (r = r.concat(i));
    let s = this.gutter.config.lineMarker(e, t, r);
    s && r.unshift(s);
    let o = this.gutter;
    (r.length == 0 && !o.config.renderEmptyElements) || this.addElement(e, t, r);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t),
      r = i ? [i] : null;
    for (let s of e.state.facet(wm)) {
      let o = s(e, t.widget, t);
      o && (r || (r = [])).push(o);
    }
    r && this.addElement(e, t, r);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class Oh {
  constructor(e, t) {
    (this.view = e),
      (this.config = t),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement("div")),
      (this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : ""));
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (r) => {
        let s = r.target,
          o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; ) s = s.parentNode;
          let a = s.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else o = r.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, l, r) && r.preventDefault();
      });
    (this.markers = ph(t.markers(e))),
      t.initialSpacer &&
        ((this.spacer = new af(e, 0, 0, [t.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none"));
  }
  update(e) {
    let t = this.markers;
    if (
      ((this.markers = ph(this.config.markers(e.view))), this.spacer && this.config.updateSpacer)
    ) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let i = e.view.viewport;
    return (
      !K.eq(this.markers, t, i.from, i.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    );
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class af {
  constructor(e, t, i, r) {
    (this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement("div")),
      (this.dom.className = "cm-gutterElement"),
      this.update(e, t, i, r);
  }
  update(e, t, i, r) {
    this.height != t && ((this.height = t), (this.dom.style.height = t + "px")),
      this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""),
      $m(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, t) {
    let i = "cm-gutterElement",
      r = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o,
        a = s < t.length ? t[s++] : null,
        h = !1;
      if (a) {
        let u = a.elementClass;
        u && (i += " " + u);
        for (let c = o; c < this.markers.length; c++)
          if (this.markers[c].compare(a)) {
            (l = c), (h = !0);
            break;
          }
      } else l = this.markers.length;
      for (; o < l; ) {
        let u = this.markers[o++];
        if (u.toDOM) {
          u.destroy(r);
          let c = r.nextSibling;
          r.remove(), (r = c);
        }
      }
      if (!a) break;
      a.toDOM && (h ? (r = r.nextSibling) : this.dom.insertBefore(a.toDOM(e), r)), h && o++;
    }
    (this.dom.className = i), (this.markers = t);
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function $m(n, e) {
  if (n.length != e.length) return !1;
  for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return !1;
  return !0;
}
const Em = T.define(),
  Bm = T.define(),
  Ai = T.define({
    combine(n) {
      return Ct(
        n,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, t) {
            let i = Object.assign({}, e);
            for (let r in t) {
              let s = i[r],
                o = t[r];
              i[r] = s ? (l, a, h) => s(l, a, h) || o(l, a, h) : o;
            }
            return i;
          },
        }
      );
    },
  });
class Ws extends Tt {
  constructor(e) {
    super(), (this.number = e);
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function js(n, e) {
  return n.state.facet(Ai).formatNumber(e, n.state);
}
const Rm = yn.compute([Ai], (n) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Em);
  },
  lineMarker(e, t, i) {
    return i.some((r) => r.toDOM) ? null : new Ws(js(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let r of e.state.facet(Bm)) {
      let s = r(e, t, i);
      if (s) return s;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Ai) != e.state.facet(Ai),
  initialSpacer(e) {
    return new Ws(js(e, gh(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = js(t.view, gh(t.view.state.doc.lines));
    return i == e.number ? e : new Ws(i);
  },
  domEventHandlers: n.facet(Ai).domEventHandlers,
}));
function hf(n = {}) {
  return [Ai.of(n), lf(), Rm];
}
function gh(n) {
  let e = 9;
  for (; e < n; ) e = e * 10 + 9;
  return e;
}
const Tm = new (class extends Tt {
    constructor() {
      super(...arguments), (this.elementClass = "cm-activeLineGutter");
    }
  })(),
  Fm = Pr.compute(["selection"], (n) => {
    let e = [],
      t = -1;
    for (let i of n.selection.ranges) {
      let r = n.doc.lineAt(i.head).from;
      r > t && ((t = r), e.push(Tm.range(r)));
    }
    return K.of(e);
  });
function uf() {
  return Fm;
}
const cf = 1024;
let zm = 0;
class Ls {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
class N {
  constructor(e = {}) {
    (this.id = zm++),
      (this.perNode = !!e.perNode),
      (this.deserialize =
        e.deserialize ||
        (() => {
          throw new Error("This node type doesn't define a deserialize function");
        }));
  }
  add(e) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return (
      typeof e != "function" && (e = _e.match(e)),
      (t) => {
        let i = e(t);
        return i === void 0 ? null : [this, i];
      }
    );
  }
}
N.closedBy = new N({ deserialize: (n) => n.split(" ") });
N.openedBy = new N({ deserialize: (n) => n.split(" ") });
N.group = new N({ deserialize: (n) => n.split(" ") });
N.isolate = new N({
  deserialize: (n) => {
    if (n && n != "rtl" && n != "ltr" && n != "auto")
      throw new RangeError("Invalid value for isolate: " + n);
    return n || "auto";
  },
});
N.contextHash = new N({ perNode: !0 });
N.lookAhead = new N({ perNode: !0 });
N.mounted = new N({ perNode: !0 });
class Ir {
  constructor(e, t, i) {
    (this.tree = e), (this.overlay = t), (this.parser = i);
  }
  static get(e) {
    return e && e.props && e.props[N.mounted.id];
  }
}
const Zm = Object.create(null);
class _e {
  constructor(e, t, i, r = 0) {
    (this.name = e), (this.props = t), (this.id = i), (this.flags = r);
  }
  static define(e) {
    let t = e.props && e.props.length ? Object.create(null) : Zm,
      i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0),
      r = new _e(e.name || "", t, e.id, i);
    if (e.props) {
      for (let s of e.props)
        if ((Array.isArray(s) || (s = s(r)), s)) {
          if (s[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
          t[s[0].id] = s[1];
        }
    }
    return r;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == "string") {
      if (this.name == e) return !0;
      let t = this.prop(N.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = Object.create(null);
    for (let i in e) for (let r of i.split(" ")) t[r] = e[i];
    return (i) => {
      for (let r = i.prop(N.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = t[s < 0 ? i.name : r[s]];
        if (o) return o;
      }
    };
  }
}
_e.none = new _e("", Object.create(null), 0, 8);
class jl {
  constructor(e) {
    this.types = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].id != t)
        throw new RangeError(
          "Node type ids should correspond to array positions when creating a node set"
        );
  }
  extend(...e) {
    let t = [];
    for (let i of this.types) {
      let r = null;
      for (let s of e) {
        let o = s(i);
        o && (r || (r = Object.assign({}, i.props)), (r[o[0].id] = o[1]));
      }
      t.push(r ? new _e(i.name, r, i.id, i.flags) : i);
    }
    return new jl(t);
  }
}
const cr = new WeakMap(),
  mh = new WeakMap();
var De;
(function (n) {
  (n[(n.ExcludeBuffers = 1)] = "ExcludeBuffers"),
    (n[(n.IncludeAnonymous = 2)] = "IncludeAnonymous"),
    (n[(n.IgnoreMounts = 4)] = "IgnoreMounts"),
    (n[(n.IgnoreOverlays = 8)] = "IgnoreOverlays");
})(De || (De = {}));
class Se {
  constructor(e, t, i, r, s) {
    if (
      ((this.type = e),
      (this.children = t),
      (this.positions = i),
      (this.length = r),
      (this.props = null),
      s && s.length)
    ) {
      this.props = Object.create(null);
      for (let [o, l] of s) this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  toString() {
    let e = Ir.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let t = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (t && (t += ","), (t += r));
    }
    return this.type.name
      ? (/\W/.test(this.type.name) && !this.type.isError
          ? JSON.stringify(this.type.name)
          : this.type.name) + (t.length ? "(" + t + ")" : "")
      : t;
  }
  cursor(e = 0) {
    return new Uo(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let r = cr.get(this) || this.topNode,
      s = new Uo(r);
    return s.moveTo(e, t), cr.set(this, s._tree), s;
  }
  get topNode() {
    return new nt(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = En(cr.get(this) || this.topNode, e, t, !1);
    return cr.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = En(mh.get(this) || this.topNode, e, t, !0);
    return mh.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return Lm(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: r = 0, to: s = this.length } = e,
      o = e.mode || 0,
      l = (o & De.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | De.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= s && a.to >= r && ((!l && a.type.isAnonymous) || t(a) !== !1)) {
        if (a.firstChild()) continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent()) return;
        h = !0;
      }
    }
  }
  prop(e) {
    return e.perNode ? (this.props ? this.props[e.id] : void 0) : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8
      ? this
      : Il(
          _e.none,
          this.children,
          this.positions,
          0,
          this.children.length,
          0,
          this.length,
          (t, i, r) => new Se(this.type, t, i, r, this.propValues),
          e.makeTree || ((t, i, r) => new Se(_e.none, t, i, r))
        );
  }
  static build(e) {
    return qm(e);
  }
}
Se.empty = new Se(_e.none, [], [], 0);
class Ll {
  constructor(e, t) {
    (this.buffer = e), (this.index = t);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Ll(this.buffer, this.index);
  }
}
class ti {
  constructor(e, t, i) {
    (this.buffer = e), (this.length = t), (this.set = i);
  }
  get type() {
    return _e.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; ) e.push(this.childString(t)), (t = this.buffer[t + 3]);
    return e.join(",");
  }
  childString(e) {
    let t = this.buffer[e],
      i = this.buffer[e + 3],
      r = this.set.types[t],
      s = r.name;
    if ((/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), (e += 4), i == e)) return s;
    let o = [];
    for (; e < i; ) o.push(this.childString(e)), (e = this.buffer[e + 3]);
    return s + "(" + o.join(",") + ")";
  }
  findChild(e, t, i, r, s) {
    let { buffer: o } = this,
      l = -1;
    for (let a = e; a != t && !(ff(s, r, o[a + 1], o[a + 2]) && ((l = a), i > 0)); a = o[a + 3]);
    return l;
  }
  slice(e, t, i) {
    let r = this.buffer,
      s = new Uint16Array(t - e),
      o = 0;
    for (let l = e, a = 0; l < t; ) {
      (s[a++] = r[l++]), (s[a++] = r[l++] - i);
      let h = (s[a++] = r[l++] - i);
      (s[a++] = r[l++] - e), (o = Math.max(o, h));
    }
    return new ti(s, o, this.set);
  }
}
function ff(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function En(n, e, t, i) {
  for (
    var r;
    n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e);

  ) {
    let o = !i && n instanceof nt && n.index < 0 ? null : n.parent;
    if (!o) return n;
    n = o;
  }
  let s = i ? 0 : De.IgnoreOverlays;
  if (i)
    for (let o = n, l = o.parent; l; o = l, l = o.parent)
      o instanceof nt &&
        o.index < 0 &&
        ((r = l.enter(e, t, s)) === null || r === void 0 ? void 0 : r.from) != o.from &&
        (n = l);
  for (;;) {
    let o = n.enter(e, t, s);
    if (!o) return n;
    n = o;
  }
}
class df {
  cursor(e = 0) {
    return new Uo(this, e);
  }
  getChild(e, t = null, i = null) {
    let r = Sh(this, e, t, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return Sh(this, e, t, i);
  }
  resolve(e, t = 0) {
    return En(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return En(this, e, t, !0);
  }
  matchContext(e) {
    return Go(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e),
      i = this;
    for (; t; ) {
      let r = t.lastChild;
      if (!r || r.to != t.to) break;
      r.type.isError && r.from == r.to ? ((i = t), (t = r.prevSibling)) : (t = r);
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class nt extends df {
  constructor(e, t, i, r) {
    super(), (this._tree = e), (this.from = t), (this.index = i), (this._parent = r);
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, r, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let u = l[e],
          c = a[e] + o.from;
        if (ff(r, i, c, c + u.length)) {
          if (u instanceof ti) {
            if (s & De.ExcludeBuffers) continue;
            let f = u.findChild(0, u.buffer.length, t, i - c, r);
            if (f > -1) return new Yt(new Wm(o, u, e, c), null, f);
          } else if (s & De.IncludeAnonymous || !u.type.isAnonymous || ql(u)) {
            let f;
            if (!(s & De.IgnoreMounts) && (f = Ir.get(u)) && !f.overlay)
              return new nt(f.tree, c, e, o);
            let d = new nt(u, c, e, o);
            return s & De.IncludeAnonymous || !d.type.isAnonymous
              ? d
              : d.nextChild(t < 0 ? u.children.length - 1 : 0, t, i, r);
          }
        }
      }
      if (
        s & De.IncludeAnonymous ||
        !o.type.isAnonymous ||
        (o.index >= 0 ? (e = o.index + t) : (e = t < 0 ? -1 : o._parent._tree.children.length),
        (o = o._parent),
        !o)
      )
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, t, i = 0) {
    let r;
    if (!(i & De.IgnoreOverlays) && (r = Ir.get(this._tree)) && r.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of r.overlay)
        if ((t > 0 ? o <= s : o < s) && (t < 0 ? l >= s : l > s))
          return new nt(r.tree, r.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; ) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index - 1, -1, 0, 4)
      : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function Sh(n, e, t, i) {
  let r = n.cursor(),
    s = [];
  if (!r.firstChild()) return s;
  if (t != null) {
    for (let o = !1; !o; ) if (((o = r.type.is(t)), !r.nextSibling())) return s;
  }
  for (;;) {
    if (i != null && r.type.is(i)) return s;
    if ((r.type.is(e) && s.push(r.node), !r.nextSibling())) return i == null ? s : [];
  }
}
function Go(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i) return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name) return !1;
      t--;
    }
  }
  return !0;
}
class Wm {
  constructor(e, t, i, r) {
    (this.parent = e), (this.buffer = t), (this.index = i), (this.start = r);
  }
}
class Yt extends df {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(),
      (this.context = e),
      (this._parent = t),
      (this.index = i),
      (this.type = e.buffer.set.types[e.buffer.buffer[i]]);
  }
  child(e, t, i) {
    let { buffer: r } = this.context,
      s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.context.start, i);
    return s < 0 ? null : new Yt(this.context, this, s);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, i = 0) {
    if (i & De.ExcludeBuffers) return null;
    let { buffer: r } = this.context,
      s = r.findChild(
        this.index + 4,
        r.buffer[this.index + 3],
        t > 0 ? 1 : -1,
        e - this.context.start,
        t
      );
    return s < 0 ? null : new Yt(this.context, this, s);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context,
      t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
      ? new Yt(this.context, this._parent, t)
      : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context,
      t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t
      ? this.externalSibling(-1)
      : new Yt(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [],
      t = [],
      { buffer: i } = this.context,
      r = this.index + 4,
      s = i.buffer[this.index + 3];
    if (s > r) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(r, s, o)), t.push(0);
    }
    return new Se(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function pf(n) {
  if (!n.length) return null;
  let e = 0,
    t = n[0];
  for (let s = 1; s < n.length; s++) {
    let o = n[s];
    (o.from > t.from || o.to < t.to) && ((t = o), (e = s));
  }
  let i = t instanceof nt && t.index < 0 ? null : t.parent,
    r = n.slice();
  return i ? (r[e] = i) : r.splice(e, 1), new jm(r, t);
}
class jm {
  constructor(e, t) {
    (this.heads = e), (this.node = t);
  }
  get next() {
    return pf(this.heads);
  }
}
function Lm(n, e, t) {
  let i = n.resolveInner(e, t),
    r = null;
  for (let s = i instanceof nt ? i : i.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (r || (r = [i])).push(o.resolve(e, t)), (s = o);
    } else {
      let o = Ir.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new nt(o.tree, o.overlay[0].from + s.from, -1, s);
        (r || (r = [i])).push(En(l, e, t, !1));
      }
    }
  return r ? pf(r) : i;
}
class Uo {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (
      ((this.mode = t),
      (this.buffer = null),
      (this.stack = []),
      (this.index = 0),
      (this.bufferNode = null),
      e instanceof nt)
    )
      this.yieldNode(e);
    else {
      (this._tree = e.context.parent), (this.buffer = e.context);
      for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index);
      (this.bufferNode = e), this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e
      ? ((this._tree = e), (this.type = e.type), (this.from = e.from), (this.to = e.to), !0)
      : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: r } = this.buffer;
    return (
      (this.type = t || r.set.types[r.buffer[e]]),
      (this.from = i + r.buffer[e + 1]),
      (this.to = i + r.buffer[e + 2]),
      !0
    );
  }
  yield(e) {
    return e
      ? e instanceof nt
        ? ((this.buffer = null), this.yieldNode(e))
        : ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
      : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(
        this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode)
      );
    let { buffer: r } = this.buffer,
      s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, t - this.buffer.start, i);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer
      ? i & De.ExcludeBuffers
        ? !1
        : this.enterChild(1, e, t)
      : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(
        this.mode & De.IncludeAnonymous ? this._tree._parent : this._tree.parent
      );
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e =
      this.mode & De.IncludeAnonymous
        ? this.buffer.parent
        : this.buffer.parent.nextSignificantParent();
    return (this.buffer = null), this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent
        ? this.yield(
            this._tree.index < 0
              ? null
              : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode)
          )
        : !1;
    let { buffer: t } = this.buffer,
      i = this.stack.length - 1;
    if (e < 0) {
      let r = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != r) return this.yieldBuf(t.findChild(r, this.index, -1, 0, 4));
    } else {
      let r = t.buffer[this.index + 3];
      if (r < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) return this.yieldBuf(r);
    }
    return i < 0
      ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode))
      : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t,
      i,
      { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length) return !1;
      } else
        for (let s = 0; s < this.index; s++) if (r.buffer.buffer[s + 3] < this.index) return !1;
      ({ index: t, parent: i } = r);
    } else ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let s = t + e, o = e < 0 ? -1 : i._tree.children.length; s != o; s += e) {
          let l = i._tree.children[s];
          if (this.mode & De.IncludeAnonymous || l instanceof ti || !l.type.isAnonymous || ql(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) return !0;
    for (;;) {
      if (this.sibling(e)) return !0;
      if (this.atLastNode(e) || !this.parent()) return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (
      ;
      (this.from == this.to ||
        (t < 1 ? this.from >= e : this.from > e) ||
        (t > -1 ? this.to <= e : this.to < e)) &&
      this.parent();

    );
    for (; this.enterChild(1, e, t); );
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e = this.bufferNode,
      t = null,
      i = 0;
    if (e && e.context == this.buffer)
      e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == r) {
            if (r == this.index) return o;
            (t = o), (i = s + 1);
            break e;
          }
        r = this.stack[--s];
      }
    for (let r = i; r < this.stack.length; r++) t = new Yt(this.buffer, t, this.stack[r]);
    return (this.bufferNode = new Yt(this.buffer, t, this.index));
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (;;) {
        if ((r && t && t(this), (r = this.type.isAnonymous), !i)) return;
        if (this.nextSibling()) break;
        this.parent(), i--, (r = !0);
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) return Go(this.node.parent, e);
    let { buffer: t } = this.buffer,
      { types: i } = t.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0) return Go(this._tree, e, r);
      let o = i[t.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name) return !1;
        r--;
      }
    }
    return !0;
  }
}
function ql(n) {
  return n.children.some((e) => e instanceof ti || !e.type.isAnonymous || ql(e));
}
function qm(n) {
  var e;
  let {
      buffer: t,
      nodeSet: i,
      maxBufferLength: r = cf,
      reused: s = [],
      minRepeatType: o = i.types.length,
    } = n,
    l = Array.isArray(t) ? new Ll(t, t.length) : t,
    a = i.types,
    h = 0,
    u = 0;
  function c(k, y, Q, R, $, j) {
    let { id: Z, start: A, end: x, size: M } = l,
      z = u,
      I = h;
    for (; M < 0; )
      if ((l.next(), M == -1)) {
        let He = s[Z];
        Q.push(He), R.push(A - k);
        return;
      } else if (M == -3) {
        h = Z;
        return;
      } else if (M == -4) {
        u = Z;
        return;
      } else throw new RangeError(`Unrecognized record size: ${M}`);
    let L = a[Z],
      ee,
      re,
      fe = A - k;
    if (x - A <= r && (re = g(l.pos - y, $))) {
      let He = new Uint16Array(re.size - re.skip),
        Ze = l.pos - re.size,
        We = He.length;
      for (; l.pos > Ze; ) We = S(re.start, He, We);
      (ee = new ti(He, x - re.start, i)), (fe = re.start - k);
    } else {
      let He = l.pos - M;
      l.next();
      let Ze = [],
        We = [],
        oi = Z >= o ? Z : -1,
        Ci = 0,
        Hn = x;
      for (; l.pos > He; )
        oi >= 0 && l.id == oi && l.size >= 0
          ? (l.end <= Hn - r &&
              (p(Ze, We, A, Ci, l.end, Hn, oi, z, I), (Ci = Ze.length), (Hn = l.end)),
            l.next())
          : j > 2500
            ? f(A, He, Ze, We)
            : c(A, He, Ze, We, oi, j + 1);
      if (
        (oi >= 0 && Ci > 0 && Ci < Ze.length && p(Ze, We, A, Ci, A, Hn, oi, z, I),
        Ze.reverse(),
        We.reverse(),
        oi > -1 && Ci > 0)
      ) {
        let sa = d(L, I);
        ee = Il(L, Ze, We, 0, Ze.length, 0, x - A, sa, sa);
      } else ee = O(L, Ze, We, x - A, z - x, I);
    }
    Q.push(ee), R.push(fe);
  }
  function f(k, y, Q, R) {
    let $ = [],
      j = 0,
      Z = -1;
    for (; l.pos > y; ) {
      let { id: A, start: x, end: M, size: z } = l;
      if (z > 4) l.next();
      else {
        if (Z > -1 && x < Z) break;
        Z < 0 && (Z = M - r), $.push(A, x, M), j++, l.next();
      }
    }
    if (j) {
      let A = new Uint16Array(j * 4),
        x = $[$.length - 2];
      for (let M = $.length - 3, z = 0; M >= 0; M -= 3)
        (A[z++] = $[M]), (A[z++] = $[M + 1] - x), (A[z++] = $[M + 2] - x), (A[z++] = z);
      Q.push(new ti(A, $[2] - x, i)), R.push(x - k);
    }
  }
  function d(k, y) {
    return (Q, R, $) => {
      let j = 0,
        Z = Q.length - 1,
        A,
        x;
      if (Z >= 0 && (A = Q[Z]) instanceof Se) {
        if (!Z && A.type == k && A.length == $) return A;
        (x = A.prop(N.lookAhead)) && (j = R[Z] + A.length + x);
      }
      return O(k, Q, R, $, j, y);
    };
  }
  function p(k, y, Q, R, $, j, Z, A, x) {
    let M = [],
      z = [];
    for (; k.length > R; ) M.push(k.pop()), z.push(y.pop() + Q - $);
    k.push(O(i.types[Z], M, z, j - $, A - j, x)), y.push($ - Q);
  }
  function O(k, y, Q, R, $, j, Z) {
    if (j) {
      let A = [N.contextHash, j];
      Z = Z ? [A].concat(Z) : [A];
    }
    if ($ > 25) {
      let A = [N.lookAhead, $];
      Z = Z ? [A].concat(Z) : [A];
    }
    return new Se(k, y, Q, R, Z);
  }
  function g(k, y) {
    let Q = l.fork(),
      R = 0,
      $ = 0,
      j = 0,
      Z = Q.end - r,
      A = { size: 0, start: 0, skip: 0 };
    e: for (let x = Q.pos - k; Q.pos > x; ) {
      let M = Q.size;
      if (Q.id == y && M >= 0) {
        (A.size = R), (A.start = $), (A.skip = j), (j += 4), (R += 4), Q.next();
        continue;
      }
      let z = Q.pos - M;
      if (M < 0 || z < x || Q.start < Z) break;
      let I = Q.id >= o ? 4 : 0,
        L = Q.start;
      for (Q.next(); Q.pos > z; ) {
        if (Q.size < 0)
          if (Q.size == -3) I += 4;
          else break e;
        else Q.id >= o && (I += 4);
        Q.next();
      }
      ($ = L), (R += M), (j += I);
    }
    return (
      (y < 0 || R == k) && ((A.size = R), (A.start = $), (A.skip = j)), A.size > 4 ? A : void 0
    );
  }
  function S(k, y, Q) {
    let { id: R, start: $, end: j, size: Z } = l;
    if ((l.next(), Z >= 0 && R < o)) {
      let A = Q;
      if (Z > 4) {
        let x = l.pos - (Z - 4);
        for (; l.pos > x; ) Q = S(k, y, Q);
      }
      (y[--Q] = A), (y[--Q] = j - k), (y[--Q] = $ - k), (y[--Q] = R);
    } else Z == -3 ? (h = R) : Z == -4 && (u = R);
    return Q;
  }
  let b = [],
    D = [];
  for (; l.pos > 0; ) c(n.start || 0, n.bufferStart || 0, b, D, -1, 0);
  let v = (e = n.length) !== null && e !== void 0 ? e : b.length ? D[0] + b[0].length : 0;
  return new Se(a[n.topID], b.reverse(), D.reverse(), v);
}
const bh = new WeakMap();
function Ar(n, e) {
  if (!n.isAnonymous || e instanceof ti || e.type != n) return 1;
  let t = bh.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof Se)) {
        t = 1;
        break;
      }
      t += Ar(n, i);
    }
    bh.set(e, t);
  }
  return t;
}
function Il(n, e, t, i, r, s, o, l, a) {
  let h = 0;
  for (let p = i; p < r; p++) h += Ar(n, e[p]);
  let u = Math.ceil((h * 1.5) / 8),
    c = [],
    f = [];
  function d(p, O, g, S, b) {
    for (let D = g; D < S; ) {
      let v = D,
        k = O[D],
        y = Ar(n, p[D]);
      for (D++; D < S; D++) {
        let Q = Ar(n, p[D]);
        if (y + Q >= u) break;
        y += Q;
      }
      if (D == v + 1) {
        if (y > u) {
          let Q = p[v];
          d(Q.children, Q.positions, 0, Q.children.length, O[v] + b);
          continue;
        }
        c.push(p[v]);
      } else {
        let Q = O[D - 1] + p[D - 1].length - k;
        c.push(Il(n, p, O, v, D, k, Q, null, a));
      }
      f.push(k + b - s);
    }
  }
  return d(e, t, i, r, 0), (l || a)(c, f, o);
}
class gi {
  constructor(e, t, i, r, s = !1, o = !1) {
    (this.from = e),
      (this.to = t),
      (this.tree = i),
      (this.offset = r),
      (this.open = (s ? 1 : 0) | (o ? 2 : 0));
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = !1) {
    let r = [new gi(0, e.length, e, 0, !1, i)];
    for (let s of t) s.to > e.length && r.push(s);
    return r;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length) return e;
    let r = [],
      s = 1,
      o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let u = l < t.length ? t[l] : null,
        c = u ? u.fromA : 1e9;
      if (c - a >= i)
        for (; o && o.from < c; ) {
          let f = o;
          if (a >= f.from || c <= f.to || h) {
            let d = Math.max(f.from, a) - h,
              p = Math.min(f.to, c) - h;
            f = d >= p ? null : new gi(d, p, f.tree, f.offset + h, l > 0, !!u);
          }
          if ((f && r.push(f), o.to > c)) break;
          o = s < e.length ? e[s++] : null;
        }
      if (!u) break;
      (a = u.toA), (h = u.toA - u.toB);
    }
    return r;
  }
}
class Of {
  startParse(e, t, i) {
    return (
      typeof e == "string" && (e = new Im(e)),
      (i = i
        ? i.length
          ? i.map((r) => new Ls(r.from, r.to))
          : [new Ls(0, 0)]
        : [new Ls(0, e.length)]),
      this.createParse(e, t || [], i)
    );
  }
  parse(e, t, i) {
    let r = this.startParse(e, t, i);
    for (;;) {
      let s = r.advance();
      if (s) return s;
    }
  }
}
class Im {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new N({ perNode: !0 });
let _m = 0;
class Ke {
  constructor(e, t, i, r) {
    (this.name = e), (this.set = t), (this.base = i), (this.modified = r), (this.id = _m++);
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified) t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == "string" ? e : "?";
    if ((e instanceof Ke && (t = e), t != null && t.base))
      throw new Error("Can not derive from a modified tag");
    let r = new Ke(i, [], null, []);
    if ((r.set.push(r), t)) for (let s of t.set) r.set.push(s);
    return r;
  }
  static defineModifier(e) {
    let t = new _r(e);
    return (i) =>
      i.modified.indexOf(t) > -1
        ? i
        : _r.get(
            i.base || i,
            i.modified.concat(t).sort((r, s) => r.id - s.id)
          );
  }
}
let Vm = 0;
class _r {
  constructor(e) {
    (this.name = e), (this.instances = []), (this.id = Vm++);
  }
  static get(e, t) {
    if (!t.length) return e;
    let i = t[0].instances.find((l) => l.base == e && Xm(t, l.modified));
    if (i) return i;
    let r = [],
      s = new Ke(e.name, r, e, t);
    for (let l of t) l.instances.push(s);
    let o = Ym(t);
    for (let l of e.set) if (!l.modified.length) for (let a of o) r.push(_r.get(l, a));
    return s;
  }
}
function Xm(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function Ym(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, r = e.length; i < r; i++) e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function gf(n) {
  let e = Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let r of t.split(" "))
      if (r) {
        let s = [],
          o = 2,
          l = r;
        for (let c = 0; ; ) {
          if (l == "..." && c > 0 && c + 3 == r.length) {
            o = 1;
            break;
          }
          let f = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!f) throw new RangeError("Invalid path: " + r);
          if (
            (s.push(f[0] == "*" ? "" : f[0][0] == '"' ? JSON.parse(f[0]) : f[0]),
            (c += f[0].length),
            c == r.length)
          )
            break;
          let d = r[c++];
          if (c == r.length && d == "!") {
            o = 0;
            break;
          }
          if (d != "/") throw new RangeError("Invalid path: " + r);
          l = r.slice(c);
        }
        let a = s.length - 1,
          h = s[a];
        if (!h) throw new RangeError("Invalid path: " + r);
        let u = new Vr(i, o, a > 0 ? s.slice(0, a) : null);
        e[h] = u.sort(e[h]);
      }
  }
  return mf.add(e);
}
const mf = new N();
class Vr {
  constructor(e, t, i, r) {
    (this.tags = e), (this.mode = t), (this.context = i), (this.next = r);
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? ((this.next = e), this) : ((e.next = this.sort(e.next)), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
Vr.empty = new Vr([], 2, null);
function Sf(n, e) {
  let t = Object.create(null);
  for (let s of n)
    if (!Array.isArray(s.tag)) t[s.tag.id] = s.class;
    else for (let o of s.tag) t[o.id] = s.class;
  let { scope: i, all: r = null } = e || {};
  return {
    style: (s) => {
      let o = r;
      for (let l of s)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + " " + h : h;
            break;
          }
        }
      return o;
    },
    scope: i,
  };
}
function Nm(n, e) {
  let t = null;
  for (let i of n) {
    let r = i.style(e);
    r && (t = t ? t + " " + r : r);
  }
  return t;
}
function Gm(n, e, t, i = 0, r = n.length) {
  let s = new Um(i, Array.isArray(e) ? e : [e], t);
  s.highlightRange(n.cursor(), i, r, "", s.highlighters), s.flush(r);
}
class Um {
  constructor(e, t, i) {
    (this.at = e), (this.highlighters = t), (this.span = i), (this.class = "");
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), (this.class = t));
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, r, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t) return;
    o.isTop && (s = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = r,
      u = Hm(e) || Vr.empty,
      c = Nm(s, u.tags);
    if (
      (c && (h && (h += " "), (h += c), u.mode == 1 && (r += (r ? " " : "") + c)),
      this.startSpan(Math.max(t, l), h),
      u.opaque)
    )
      return;
    let f = e.tree && e.tree.prop(N.mounted);
    if (f && f.overlay) {
      let d = e.node.enter(f.overlay[0].from + l, 1),
        p = this.highlighters.filter((g) => !g.scope || g.scope(f.tree.type)),
        O = e.firstChild();
      for (let g = 0, S = l; ; g++) {
        let b = g < f.overlay.length ? f.overlay[g] : null,
          D = b ? b.from + l : a,
          v = Math.max(t, S),
          k = Math.min(i, D);
        if (v < k && O)
          for (
            ;
            e.from < k &&
            (this.highlightRange(e, v, k, r, s),
            this.startSpan(Math.min(k, e.to), h),
            !(e.to >= D || !e.nextSibling()));

          );
        if (!b || D > i) break;
        (S = b.to + l),
          S > t &&
            (this.highlightRange(d.cursor(), Math.max(t, b.from + l), Math.min(i, S), "", p),
            this.startSpan(Math.min(i, S), h));
      }
      O && e.parent();
    } else if (e.firstChild()) {
      f && (r = "");
      do
        if (!(e.to <= t)) {
          if (e.from >= i) break;
          this.highlightRange(e, t, i, r, s), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function Hm(n) {
  let e = n.type.prop(mf);
  for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
  return e || null;
}
const E = Ke.define,
  fr = E(),
  Wt = E(),
  yh = E(Wt),
  xh = E(Wt),
  jt = E(),
  dr = E(jt),
  qs = E(jt),
  Ot = E(),
  li = E(Ot),
  dt = E(),
  pt = E(),
  Ho = E(),
  tn = E(Ho),
  pr = E(),
  m = {
    comment: fr,
    lineComment: E(fr),
    blockComment: E(fr),
    docComment: E(fr),
    name: Wt,
    variableName: E(Wt),
    typeName: yh,
    tagName: E(yh),
    propertyName: xh,
    attributeName: E(xh),
    className: E(Wt),
    labelName: E(Wt),
    namespace: E(Wt),
    macroName: E(Wt),
    literal: jt,
    string: dr,
    docString: E(dr),
    character: E(dr),
    attributeValue: E(dr),
    number: qs,
    integer: E(qs),
    float: E(qs),
    bool: E(jt),
    regexp: E(jt),
    escape: E(jt),
    color: E(jt),
    url: E(jt),
    keyword: dt,
    self: E(dt),
    null: E(dt),
    atom: E(dt),
    unit: E(dt),
    modifier: E(dt),
    operatorKeyword: E(dt),
    controlKeyword: E(dt),
    definitionKeyword: E(dt),
    moduleKeyword: E(dt),
    operator: pt,
    derefOperator: E(pt),
    arithmeticOperator: E(pt),
    logicOperator: E(pt),
    bitwiseOperator: E(pt),
    compareOperator: E(pt),
    updateOperator: E(pt),
    definitionOperator: E(pt),
    typeOperator: E(pt),
    controlOperator: E(pt),
    punctuation: Ho,
    separator: E(Ho),
    bracket: tn,
    angleBracket: E(tn),
    squareBracket: E(tn),
    paren: E(tn),
    brace: E(tn),
    content: Ot,
    heading: li,
    heading1: E(li),
    heading2: E(li),
    heading3: E(li),
    heading4: E(li),
    heading5: E(li),
    heading6: E(li),
    contentSeparator: E(Ot),
    list: E(Ot),
    quote: E(Ot),
    emphasis: E(Ot),
    strong: E(Ot),
    link: E(Ot),
    monospace: E(Ot),
    strikethrough: E(Ot),
    inserted: E(),
    deleted: E(),
    changed: E(),
    invalid: E(),
    meta: pr,
    documentMeta: E(pr),
    annotation: E(pr),
    processingInstruction: E(pr),
    definition: Ke.defineModifier("definition"),
    constant: Ke.defineModifier("constant"),
    function: Ke.defineModifier("function"),
    standard: Ke.defineModifier("standard"),
    local: Ke.defineModifier("local"),
    special: Ke.defineModifier("special"),
  };
for (let n in m) {
  let e = m[n];
  e instanceof Ke && (e.name = n);
}
Sf([
  { tag: m.link, class: "tok-link" },
  { tag: m.heading, class: "tok-heading" },
  { tag: m.emphasis, class: "tok-emphasis" },
  { tag: m.strong, class: "tok-strong" },
  { tag: m.keyword, class: "tok-keyword" },
  { tag: m.atom, class: "tok-atom" },
  { tag: m.bool, class: "tok-bool" },
  { tag: m.url, class: "tok-url" },
  { tag: m.labelName, class: "tok-labelName" },
  { tag: m.inserted, class: "tok-inserted" },
  { tag: m.deleted, class: "tok-deleted" },
  { tag: m.literal, class: "tok-literal" },
  { tag: m.string, class: "tok-string" },
  { tag: m.number, class: "tok-number" },
  { tag: [m.regexp, m.escape, m.special(m.string)], class: "tok-string2" },
  { tag: m.variableName, class: "tok-variableName" },
  { tag: m.local(m.variableName), class: "tok-variableName tok-local" },
  { tag: m.definition(m.variableName), class: "tok-variableName tok-definition" },
  { tag: m.special(m.variableName), class: "tok-variableName2" },
  { tag: m.definition(m.propertyName), class: "tok-propertyName tok-definition" },
  { tag: m.typeName, class: "tok-typeName" },
  { tag: m.namespace, class: "tok-namespace" },
  { tag: m.className, class: "tok-className" },
  { tag: m.macroName, class: "tok-macroName" },
  { tag: m.propertyName, class: "tok-propertyName" },
  { tag: m.operator, class: "tok-operator" },
  { tag: m.comment, class: "tok-comment" },
  { tag: m.meta, class: "tok-meta" },
  { tag: m.invalid, class: "tok-invalid" },
  { tag: m.punctuation, class: "tok-punctuation" },
]);
var Is;
const Mi = new N();
function Km(n) {
  return T.define({ combine: n ? (e) => e.concat(n) : void 0 });
}
const Jm = new N();
class lt {
  constructor(e, t, i = [], r = "") {
    (this.data = e),
      (this.name = r),
      U.prototype.hasOwnProperty("tree") ||
        Object.defineProperty(U.prototype, "tree", {
          get() {
            return Ee(this);
          },
        }),
      (this.parser = t),
      (this.extension = [
        ii.of(this),
        U.languageData.of((s, o, l) => {
          let a = kh(s, o, l),
            h = a.type.prop(Mi);
          if (!h) return [];
          let u = s.facet(h),
            c = a.type.prop(Jm);
          if (c) {
            let f = a.resolve(o - a.from, l);
            for (let d of c)
              if (d.test(f, s)) {
                let p = s.facet(d.facet);
                return d.type == "replace" ? p : p.concat(u);
              }
          }
          return u;
        }),
      ].concat(i));
  }
  isActiveAt(e, t, i = -1) {
    return kh(e, t, i).type.prop(Mi) == this.data;
  }
  findRegions(e) {
    let t = e.facet(ii);
    if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let i = [],
      r = (s, o) => {
        if (s.prop(Mi) == this.data) {
          i.push({ from: o, to: o + s.length });
          return;
        }
        let l = s.prop(N.mounted);
        if (l) {
          if (l.tree.prop(Mi) == this.data) {
            if (l.overlay) for (let a of l.overlay) i.push({ from: a.from + o, to: a.to + o });
            else i.push({ from: o, to: o + s.length });
            return;
          } else if (l.overlay) {
            let a = i.length;
            if ((r(l.tree, l.overlay[0].from + o), i.length > a)) return;
          }
        }
        for (let a = 0; a < s.children.length; a++) {
          let h = s.children[a];
          h instanceof Se && r(h, s.positions[a] + o);
        }
      };
    return r(Ee(e), 0), i;
  }
  get allowsNesting() {
    return !0;
  }
}
lt.setState = X.define();
function kh(n, e, t) {
  let i = n.facet(ii),
    r = Ee(n).topNode;
  if (!i || i.allowsNesting)
    for (let s = r; s; s = s.enter(e, t, De.ExcludeBuffers)) s.type.isTop && (r = s);
  return r;
}
class Xr extends lt {
  constructor(e, t, i) {
    super(e, t, [], i), (this.parser = t);
  }
  static define(e) {
    let t = Km(e.languageData);
    return new Xr(
      t,
      e.parser.configure({ props: [Mi.add((i) => (i.isTop ? t : void 0))] }),
      e.name
    );
  }
  configure(e, t) {
    return new Xr(this.data, this.parser.configure(e), t || this.name);
  }
  get allowsNesting() {
    return this.parser.hasWrappers();
  }
}
function Ee(n) {
  let e = n.field(lt.state, !1);
  return e ? e.tree : Se.empty;
}
class e0 {
  constructor(e) {
    (this.doc = e), (this.cursorPos = 0), (this.string = ""), (this.cursor = e.iter());
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return (
      (this.string = this.cursor.next(e - this.cursorPos).value),
      (this.cursorPos = e + this.string.length),
      this.cursorPos - this.string.length
    );
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos
      ? this.doc.sliceString(e, t)
      : this.string.slice(e - i, t - i);
  }
}
let nn = null;
class Yr {
  constructor(e, t, i = [], r, s, o, l, a) {
    (this.parser = e),
      (this.state = t),
      (this.fragments = i),
      (this.tree = r),
      (this.treeLen = s),
      (this.viewport = o),
      (this.skipped = l),
      (this.scheduleOn = a),
      (this.parse = null),
      (this.tempSkipped = []);
  }
  static create(e, t, i) {
    return new Yr(e, t, [], Se.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new e0(this.state.doc), this.fragments);
  }
  work(e, t) {
    return (
      t != null && t >= this.state.doc.length && (t = void 0),
      this.tree != Se.empty && this.isDone(t ?? this.state.doc.length)
        ? (this.takeTree(), !0)
        : this.withContext(() => {
            var i;
            if (typeof e == "number") {
              let r = Date.now() + e;
              e = () => Date.now() > r;
            }
            for (
              this.parse || (this.parse = this.startParse()),
                t != null &&
                  (this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
                  t < this.state.doc.length &&
                  this.parse.stopAt(t);
              ;

            ) {
              let r = this.parse.advance();
              if (r)
                if (
                  ((this.fragments = this.withoutTempSkipped(
                    gi.addTree(r, this.fragments, this.parse.stoppedAt != null)
                  )),
                  (this.treeLen =
                    (i = this.parse.stoppedAt) !== null && i !== void 0
                      ? i
                      : this.state.doc.length),
                  (this.tree = r),
                  (this.parse = null),
                  this.treeLen < (t ?? this.state.doc.length))
                )
                  this.parse = this.startParse();
                else return !0;
              if (e()) return !1;
            }
          })
    );
  }
  takeTree() {
    let e, t;
    this.parse &&
      (e = this.parse.parsedPos) >= this.treeLen &&
      ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e),
      this.withContext(() => {
        for (; !(t = this.parse.advance()); );
      }),
      (this.treeLen = e),
      (this.tree = t),
      (this.fragments = this.withoutTempSkipped(gi.addTree(this.tree, this.fragments, !0))),
      (this.parse = null));
  }
  withContext(e) {
    let t = nn;
    nn = this;
    try {
      return e();
    } finally {
      nn = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; (t = this.tempSkipped.pop()); ) e = Dh(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if ((this.takeTree(), !e.empty)) {
      let a = [];
      if (
        (e.iterChangedRanges((h, u, c, f) => a.push({ fromA: h, toA: u, fromB: c, toB: f })),
        (i = gi.applyChanges(i, a)),
        (r = Se.empty),
        (s = 0),
        (o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
        this.skipped.length)
      ) {
        l = [];
        for (let h of this.skipped) {
          let u = e.mapPos(h.from, 1),
            c = e.mapPos(h.to, -1);
          u < c && l.push({ from: u, to: c });
        }
      }
    }
    return new Yr(this.parser, t, i, r, s, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: r, to: s } = this.skipped[i];
      r < e.to &&
        s > e.from &&
        ((this.fragments = Dh(this.fragments, r, s)), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), (this.parse = null));
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new (class extends Of {
      createParse(t, i, r) {
        let s = r[0].from,
          o = r[r.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = nn;
            if (a) {
              for (let h of r) a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return (this.parsedPos = o), new Se(_e.none, [], [], o - s);
          },
          stoppedAt: null,
          stopAt() {},
        };
      }
    })();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return nn;
  }
}
function Dh(n, e, t) {
  return gi.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class Vi {
  constructor(e) {
    (this.context = e), (this.tree = e.tree);
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state),
      i =
        this.context.treeLen == e.startState.doc.length
          ? void 0
          : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new Vi(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length),
      i = Yr.create(e.facet(ii).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new Vi(i);
  }
}
lt.state = Ae.define({
  create: Vi.init,
  update(n, e) {
    for (let t of e.effects) if (t.is(lt.setState)) return t.value;
    return e.startState.facet(ii) != e.state.facet(ii) ? Vi.init(e.state) : n.apply(e);
  },
});
let bf = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" &&
  (bf = (n) => {
    let e = -1,
      t = setTimeout(() => {
        e = requestIdleCallback(n, { timeout: 500 - 100 });
      }, 100);
    return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e));
  });
const _s =
    typeof navigator < "u" &&
    !((Is = navigator.scheduling) === null || Is === void 0) &&
    Is.isInputPending
      ? () => navigator.scheduling.isInputPending()
      : null,
  t0 = Oe.fromClass(
    class {
      constructor(e) {
        (this.view = e),
          (this.working = null),
          (this.workScheduled = 0),
          (this.chunkEnd = -1),
          (this.chunkBudget = -1),
          (this.work = this.work.bind(this)),
          this.scheduleWork();
      }
      update(e) {
        let t = this.view.state.field(lt.state).context;
        (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) &&
          this.scheduleWork(),
          (e.docChanged || e.selectionSet) &&
            (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()),
          this.checkAsyncSchedule(t);
      }
      scheduleWork() {
        if (this.working) return;
        let { state: e } = this.view,
          t = e.field(lt.state);
        (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
          (this.working = bf(this.work));
      }
      work(e) {
        this.working = null;
        let t = Date.now();
        if (
          (this.chunkEnd < t &&
            (this.chunkEnd < 0 || this.view.hasFocus) &&
            ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
          this.chunkBudget <= 0)
        )
          return;
        let {
            state: i,
            viewport: { to: r },
          } = this.view,
          s = i.field(lt.state);
        if (s.tree == s.context.tree && s.context.isDone(r + 1e5)) return;
        let o =
            Date.now() +
            Math.min(this.chunkBudget, 100, e && !_s ? Math.max(25, e.timeRemaining() - 5) : 1e9),
          l = s.context.treeLen < r && i.doc.length > r + 1e3,
          a = s.context.work(() => (_s && _s()) || Date.now() > o, r + (l ? 0 : 1e5));
        (this.chunkBudget -= Date.now() - t),
          (a || this.chunkBudget <= 0) &&
            (s.context.takeTree(),
            this.view.dispatch({ effects: lt.setState.of(new Vi(s.context)) })),
          this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(),
          this.checkAsyncSchedule(s.context);
      }
      checkAsyncSchedule(e) {
        e.scheduleOn &&
          (this.workScheduled++,
          e.scheduleOn
            .then(() => this.scheduleWork())
            .catch((t) => qe(this.view.state, t))
            .then(() => this.workScheduled--),
          (e.scheduleOn = null));
      }
      destroy() {
        this.working && this.working();
      }
      isWorking() {
        return !!(this.working || this.workScheduled > 0);
      }
    },
    {
      eventHandlers: {
        focus() {
          this.scheduleWork();
        },
      },
    }
  ),
  ii = T.define({
    combine(n) {
      return n.length ? n[0] : null;
    },
    enables: (n) => [
      lt.state,
      t0,
      B.contentAttributes.compute([n], (e) => {
        let t = e.facet(n);
        return t && t.name ? { "data-language": t.name } : {};
      }),
    ],
  }),
  i0 = T.define(),
  gs = T.define({
    combine: (n) => {
      if (!n.length) return "  ";
      let e = n[0];
      if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
        throw new Error("Invalid indent unit: " + JSON.stringify(n[0]));
      return e;
    },
  });
function Nr(n) {
  let e = n.facet(gs);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Bn(n, e) {
  let t = "",
    i = n.tabSize,
    r = n.facet(gs)[0];
  if (r == "	") {
    for (; e >= i; ) (t += "	"), (e -= i);
    r = " ";
  }
  for (let s = 0; s < e; s++) t += r;
  return t;
}
function _l(n, e) {
  n instanceof U && (n = new ms(n));
  for (let i of n.state.facet(i0)) {
    let r = i(n, e);
    if (r !== void 0) return r;
  }
  let t = Ee(n.state);
  return t.length >= e ? n0(n, t, e) : null;
}
class ms {
  constructor(e, t = {}) {
    (this.state = e), (this.options = t), (this.unit = Nr(e));
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e),
      { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= i.from && r <= i.to
      ? s && r == e
        ? { text: "", from: e }
        : (t < 0 ? r < e : r <= e)
          ? { text: i.text.slice(r - i.from), from: r }
          : { text: i.text.slice(0, r - i.from), from: i.from }
      : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return "";
    let { text: i, from: r } = this.lineAt(e, t);
    return i.slice(e - r, Math.min(i.length, e + 100 - r));
  }
  column(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t),
      s = this.countColumn(i, e - r),
      o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s;
  }
  countColumn(e, t = e.length) {
    return Ni(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: r } = this.lineAt(e, t),
      s = this.options.overrideIndentation;
    if (s) {
      let o = s(r);
      if (o > -1) return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const yf = new N();
function n0(n, e, t) {
  let i = e.resolveStack(t),
    r = i.node.enterUnfinishedNodesBefore(t);
  if (r != i.node) {
    let s = [];
    for (let o = r; o != i.node; o = o.parent) s.push(o);
    for (let o = s.length - 1; o >= 0; o--) i = { node: s[o], next: i };
  }
  return xf(i, n, t);
}
function xf(n, e, t) {
  for (let i = n; i; i = i.next) {
    let r = s0(i.node);
    if (r) return r(Vl.create(e, t, i));
  }
  return 0;
}
function r0(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function s0(n) {
  let e = n.type.prop(yf);
  if (e) return e;
  let t = n.firstChild,
    i;
  if (t && (i = t.type.prop(N.closedBy))) {
    let r = n.lastChild,
      s = r && i.indexOf(r.name) > -1;
    return (o) => kf(o, !0, 1, void 0, s && !r0(o) ? r.from : void 0);
  }
  return n.parent == null ? o0 : null;
}
function o0() {
  return 0;
}
class Vl extends ms {
  constructor(e, t, i) {
    super(e.state, e.options), (this.base = e), (this.pos = t), (this.context = i);
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new Vl(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (;;) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; ) i = i.parent;
      if (l0(i, e)) break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return xf(this.context.next, this.base, this.pos);
  }
}
function l0(n, e) {
  for (let t = e; t; t = t.parent) if (n == t) return !0;
  return !1;
}
function a0(n) {
  let e = n.node,
    t = e.childAfter(e.from),
    i = e.lastChild;
  if (!t) return null;
  let r = n.options.simulateBreak,
    s = n.state.doc.lineAt(t.from),
    o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i) return null;
    if (!a.type.isSkipped) {
      if (a.from >= o) return null;
      let h = /^ */.exec(s.text.slice(t.to - s.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function h0({ closing: n, align: e = !0, units: t = 1 }) {
  return (i) => kf(i, e, t, n);
}
function kf(n, e, t, i, r) {
  let s = n.textAfter,
    o = s.match(/^\s*/)[0].length,
    l = (i && s.slice(o, o + i.length) == i) || r == n.pos + o,
    a = e ? a0(n) : null;
  return a ? (l ? n.column(a.from) : n.column(a.to)) : n.baseIndent + (l ? 0 : n.unit * t);
}
const u0 = (n) => n.baseIndent;
function Vs({ except: n, units: e = 1 } = {}) {
  return (t) => {
    let i = n && n.test(t.textAfter);
    return t.baseIndent + (i ? 0 : e * t.unit);
  };
}
const c0 = 200;
function Df() {
  return U.transactionFilter.of((n) => {
    if (!n.docChanged || (!n.isUserEvent("input.type") && !n.isUserEvent("input.complete")))
      return n;
    let e = n.startState.languageDataAt("indentOnInput", n.startState.selection.main.head);
    if (!e.length) return n;
    let t = n.newDoc,
      { head: i } = n.newSelection.main,
      r = t.lineAt(i);
    if (i > r.from + c0) return n;
    let s = t.sliceString(r.from, i);
    if (!e.some((h) => h.test(s))) return n;
    let { state: o } = n,
      l = -1,
      a = [];
    for (let { head: h } of o.selection.ranges) {
      let u = o.doc.lineAt(h);
      if (u.from == l) continue;
      l = u.from;
      let c = _l(o, u.from);
      if (c == null) continue;
      let f = /^\s*/.exec(u.text)[0],
        d = Bn(o, c);
      f != d && a.push({ from: u.from, to: u.from + f.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const f0 = T.define(),
  Cf = new N();
function d0(n) {
  let e = n.firstChild,
    t = n.lastChild;
  return e && e.to < t.from ? { from: e.to, to: t.type.isError ? n.to : t.from } : null;
}
function p0(n, e, t) {
  let i = Ee(n);
  if (i.length < t) return null;
  let r = i.resolveStack(t, 1),
    s = null;
  for (let o = r; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) continue;
    if (s && l.from < e) break;
    let a = l.type.prop(Cf);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !O0(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (s = h);
    }
  }
  return s;
}
function O0(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Gr(n, e, t) {
  for (let i of n.facet(f0)) {
    let r = i(n, e, t);
    if (r) return r;
  }
  return p0(n, e, t);
}
function vf(n, e) {
  let t = e.mapPos(n.from, 1),
    i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const Ss = X.define({ map: vf }),
  Yn = X.define({ map: vf });
function wf(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const ki = Ae.define({
  create() {
    return W.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      if (t.is(Ss) && !g0(n, t.value.from, t.value.to)) {
        let { preparePlaceholder: i } = e.state.facet(Xl),
          r = i ? W.replace({ widget: new D0(i(e.state, t.value)) }) : Ch;
        n = n.update({ add: [r.range(t.value.from, t.value.to)] });
      } else
        t.is(Yn) &&
          (n = n.update({
            filter: (i, r) => t.value.from != i || t.value.to != r,
            filterFrom: t.value.from,
            filterTo: t.value.to,
          }));
    if (e.selection) {
      let t = !1,
        { head: i } = e.selection.main;
      n.between(i, i, (r, s) => {
        r < i && s > i && (t = !0);
      }),
        t && (n = n.update({ filterFrom: i, filterTo: i, filter: (r, s) => s <= i || r >= i }));
    }
    return n;
  },
  provide: (n) => B.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    return (
      n.between(0, e.doc.length, (i, r) => {
        t.push(i, r);
      }),
      t
    );
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2) throw new RangeError("Invalid JSON for fold state");
    let e = [];
    for (let t = 0; t < n.length; ) {
      let i = n[t++],
        r = n[t++];
      if (typeof i != "number" || typeof r != "number")
        throw new RangeError("Invalid JSON for fold state");
      e.push(Ch.range(i, r));
    }
    return W.set(e, !0);
  },
});
function Ur(n, e, t) {
  var i;
  let r = null;
  return (
    (i = n.field(ki, !1)) === null ||
      i === void 0 ||
      i.between(e, t, (s, o) => {
        (!r || r.from > s) && (r = { from: s, to: o });
      }),
    r
  );
}
function g0(n, e, t) {
  let i = !1;
  return (
    n.between(e, e, (r, s) => {
      r == e && s == t && (i = !0);
    }),
    i
  );
}
function Qf(n, e) {
  return n.field(ki, !1) ? e : e.concat(X.appendConfig.of(Af()));
}
const m0 = (n) => {
    for (let e of wf(n)) {
      let t = Gr(n.state, e.from, e.to);
      if (t) return n.dispatch({ effects: Qf(n.state, [Ss.of(t), Pf(n, t)]) }), !0;
    }
    return !1;
  },
  S0 = (n) => {
    if (!n.state.field(ki, !1)) return !1;
    let e = [];
    for (let t of wf(n)) {
      let i = Ur(n.state, t.from, t.to);
      i && e.push(Yn.of(i), Pf(n, i, !1));
    }
    return e.length && n.dispatch({ effects: e }), e.length > 0;
  };
function Pf(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number,
    r = n.state.doc.lineAt(e.to).number;
  return B.announce.of(
    `${n.state.phrase(t ? "Folded lines" : "Unfolded lines")} ${i} ${n.state.phrase("to")} ${r}.`
  );
}
const b0 = (n) => {
    let { state: e } = n,
      t = [];
    for (let i = 0; i < e.doc.length; ) {
      let r = n.lineBlockAt(i),
        s = Gr(e, r.from, r.to);
      s && t.push(Ss.of(s)), (i = (s ? n.lineBlockAt(s.to) : r).to + 1);
    }
    return t.length && n.dispatch({ effects: Qf(n.state, t) }), !!t.length;
  },
  y0 = (n) => {
    let e = n.state.field(ki, !1);
    if (!e || !e.size) return !1;
    let t = [];
    return (
      e.between(0, n.state.doc.length, (i, r) => {
        t.push(Yn.of({ from: i, to: r }));
      }),
      n.dispatch({ effects: t }),
      !0
    );
  },
  x0 = [
    { key: "Ctrl-Shift-[", mac: "Cmd-Alt-[", run: m0 },
    { key: "Ctrl-Shift-]", mac: "Cmd-Alt-]", run: S0 },
    { key: "Ctrl-Alt-[", run: b0 },
    { key: "Ctrl-Alt-]", run: y0 },
  ],
  k0 = { placeholderDOM: null, preparePlaceholder: null, placeholderText: "…" },
  Xl = T.define({
    combine(n) {
      return Ct(n, k0);
    },
  });
function Af(n) {
  let e = [ki, w0];
  return n && e.push(Xl.of(n)), e;
}
function Mf(n, e) {
  let { state: t } = n,
    i = t.facet(Xl),
    r = (o) => {
      let l = n.lineBlockAt(n.posAtDOM(o.target)),
        a = Ur(n.state, l.from, l.to);
      a && n.dispatch({ effects: Yn.of(a) }), o.preventDefault();
    };
  if (i.placeholderDOM) return i.placeholderDOM(n, r, e);
  let s = document.createElement("span");
  return (
    (s.textContent = i.placeholderText),
    s.setAttribute("aria-label", t.phrase("folded code")),
    (s.title = t.phrase("unfold")),
    (s.className = "cm-foldPlaceholder"),
    (s.onclick = r),
    s
  );
}
const Ch = W.replace({
  widget: new (class extends Ft {
    toDOM(n) {
      return Mf(n, null);
    }
  })(),
});
class D0 extends Ft {
  constructor(e) {
    super(), (this.value = e);
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Mf(e, this.value);
  }
}
const C0 = {
  openText: "⌄",
  closedText: "›",
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1,
};
class Xs extends Tt {
  constructor(e, t) {
    super(), (this.config = e), (this.open = t);
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let t = document.createElement("span");
    return (
      (t.textContent = this.open ? this.config.openText : this.config.closedText),
      (t.title = e.state.phrase(this.open ? "Fold line" : "Unfold line")),
      t
    );
  }
}
function v0(n = {}) {
  let e = Object.assign(Object.assign({}, C0), n),
    t = new Xs(e, !0),
    i = new Xs(e, !1),
    r = Oe.fromClass(
      class {
        constructor(o) {
          (this.from = o.viewport.from), (this.markers = this.buildMarkers(o));
        }
        update(o) {
          (o.docChanged ||
            o.viewportChanged ||
            o.startState.facet(ii) != o.state.facet(ii) ||
            o.startState.field(ki, !1) != o.state.field(ki, !1) ||
            Ee(o.startState) != Ee(o.state) ||
            e.foldingChanged(o)) &&
            (this.markers = this.buildMarkers(o.view));
        }
        buildMarkers(o) {
          let l = new Ht();
          for (let a of o.viewportLineBlocks) {
            let h = Ur(o.state, a.from, a.to) ? i : Gr(o.state, a.from, a.to) ? t : null;
            h && l.add(a.from, a.from, h);
          }
          return l.finish();
        }
      }
    ),
    { domEventHandlers: s } = e;
  return [
    r,
    Pm({
      class: "cm-foldGutter",
      markers(o) {
        var l;
        return ((l = o.plugin(r)) === null || l === void 0 ? void 0 : l.markers) || K.empty;
      },
      initialSpacer() {
        return new Xs(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, s), {
        click: (o, l, a) => {
          if (s.click && s.click(o, l, a)) return !0;
          let h = Ur(o.state, l.from, l.to);
          if (h) return o.dispatch({ effects: Yn.of(h) }), !0;
          let u = Gr(o.state, l.from, l.to);
          return u ? (o.dispatch({ effects: Ss.of(u) }), !0) : !1;
        },
      }),
    }),
    Af(),
  ];
}
const w0 = B.baseTheme({
  ".cm-foldPlaceholder": {
    backgroundColor: "#eee",
    border: "1px solid #ddd",
    color: "#888",
    borderRadius: ".2em",
    margin: "0 1px",
    padding: "0 1px",
    cursor: "pointer",
  },
  ".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" },
});
class Gi {
  constructor(e, t) {
    this.specs = e;
    let i;
    function r(l) {
      let a = Kt.newName();
      return ((i || (i = Object.create(null)))["." + a] = l), a;
    }
    const s = typeof t.all == "string" ? t.all : t.all ? r(t.all) : void 0,
      o = t.scope;
    (this.scope = o instanceof lt ? (l) => l.prop(Mi) == o.data : o ? (l) => l == o : void 0),
      (this.style = Sf(
        e.map((l) => ({ tag: l.tag, class: l.class || r(Object.assign({}, l, { tag: null })) })),
        { all: s }
      ).style),
      (this.module = i ? new Kt(i) : null),
      (this.themeType = t.themeType);
  }
  static define(e, t) {
    return new Gi(e, t || {});
  }
}
const Ko = T.define(),
  $f = T.define({
    combine(n) {
      return n.length ? [n[0]] : null;
    },
  });
function Ys(n) {
  let e = n.facet(Ko);
  return e.length ? e : n.facet($f);
}
function bs(n, e) {
  let t = [P0],
    i;
  return (
    n instanceof Gi && (n.module && t.push(B.styleModule.of(n.module)), (i = n.themeType)),
    e != null && e.fallback
      ? t.push($f.of(n))
      : i
        ? t.push(
            Ko.computeN([B.darkTheme], (r) => (r.facet(B.darkTheme) == (i == "dark") ? [n] : []))
          )
        : t.push(Ko.of(n)),
    t
  );
}
class Q0 {
  constructor(e) {
    (this.markCache = Object.create(null)),
      (this.tree = Ee(e.state)),
      (this.decorations = this.buildDeco(e, Ys(e.state))),
      (this.decoratedTo = e.viewport.to);
  }
  update(e) {
    let t = Ee(e.state),
      i = Ys(e.state),
      r = i != Ys(e.startState),
      { viewport: s } = e.view,
      o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < s.to && !r && t.type == this.tree.type && o >= s.to
      ? ((this.decorations = this.decorations.map(e.changes)), (this.decoratedTo = o))
      : (t != this.tree || e.viewportChanged || r) &&
        ((this.tree = t),
        (this.decorations = this.buildDeco(e.view, i)),
        (this.decoratedTo = s.to));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return W.none;
    let i = new Ht();
    for (let { from: r, to: s } of e.visibleRanges)
      Gm(
        this.tree,
        t,
        (o, l, a) => {
          i.add(o, l, this.markCache[a] || (this.markCache[a] = W.mark({ class: a })));
        },
        r,
        s
      );
    return i.finish();
  }
}
const P0 = Di.high(Oe.fromClass(Q0, { decorations: (n) => n.decorations })),
  Ef = Gi.define([
    { tag: m.meta, color: "#404740" },
    { tag: m.link, textDecoration: "underline" },
    { tag: m.heading, textDecoration: "underline", fontWeight: "bold" },
    { tag: m.emphasis, fontStyle: "italic" },
    { tag: m.strong, fontWeight: "bold" },
    { tag: m.strikethrough, textDecoration: "line-through" },
    { tag: m.keyword, color: "#708" },
    { tag: [m.atom, m.bool, m.url, m.contentSeparator, m.labelName], color: "#219" },
    { tag: [m.literal, m.inserted], color: "#164" },
    { tag: [m.string, m.deleted], color: "#a11" },
    { tag: [m.regexp, m.escape, m.special(m.string)], color: "#e40" },
    { tag: m.definition(m.variableName), color: "#00f" },
    { tag: m.local(m.variableName), color: "#30a" },
    { tag: [m.typeName, m.namespace], color: "#085" },
    { tag: m.className, color: "#167" },
    { tag: [m.special(m.variableName), m.macroName], color: "#256" },
    { tag: m.definition(m.propertyName), color: "#00c" },
    { tag: m.comment, color: "#940" },
    { tag: m.invalid, color: "#f00" },
  ]),
  A0 = B.baseTheme({
    "&.cm-focused .cm-matchingBracket": { backgroundColor: "#328c8252" },
    "&.cm-focused .cm-nonmatchingBracket": { backgroundColor: "#bb555544" },
  }),
  Bf = 1e4,
  Rf = "()[]{}",
  Tf = T.define({
    combine(n) {
      return Ct(n, { afterCursor: !0, brackets: Rf, maxScanDistance: Bf, renderMatch: E0 });
    },
  }),
  M0 = W.mark({ class: "cm-matchingBracket" }),
  $0 = W.mark({ class: "cm-nonmatchingBracket" });
function E0(n) {
  let e = [],
    t = n.matched ? M0 : $0;
  return (
    e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e
  );
}
const B0 = Ae.define({
    create() {
      return W.none;
    },
    update(n, e) {
      if (!e.docChanged && !e.selection) return n;
      let t = [],
        i = e.state.facet(Tf);
      for (let r of e.state.selection.ranges) {
        if (!r.empty) continue;
        let s =
          bt(e.state, r.head, -1, i) ||
          (r.head > 0 && bt(e.state, r.head - 1, 1, i)) ||
          (i.afterCursor &&
            (bt(e.state, r.head, 1, i) ||
              (r.head < e.state.doc.length && bt(e.state, r.head + 1, -1, i))));
        s && (t = t.concat(i.renderMatch(s, e.state)));
      }
      return W.set(t, !0);
    },
    provide: (n) => B.decorations.from(n),
  }),
  R0 = [B0, A0];
function Ff(n = {}) {
  return [Tf.of(n), R0];
}
const T0 = new N();
function Jo(n, e, t) {
  let i = n.prop(e < 0 ? N.openedBy : N.closedBy);
  if (i) return i;
  if (n.name.length == 1) {
    let r = t.indexOf(n.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0)) return [t[r + e]];
  }
  return null;
}
function el(n) {
  let e = n.type.prop(T0);
  return e ? e(n.node) : n;
}
function bt(n, e, t, i = {}) {
  let r = i.maxScanDistance || Bf,
    s = i.brackets || Rf,
    o = Ee(n),
    l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Jo(a.type, t, s);
    if (h && a.from < a.to) {
      let u = el(a);
      if (u && (t > 0 ? e >= u.from && e < u.to : e > u.from && e <= u.to))
        return F0(n, e, t, a, u, h, s);
    }
  }
  return z0(n, e, t, o, l.type, r, s);
}
function F0(n, e, t, i, r, s, o) {
  let l = i.parent,
    a = { from: r.from, to: r.to },
    h = 0,
    u = l == null ? void 0 : l.cursor();
  if (u && (t < 0 ? u.childBefore(i.from) : u.childAfter(i.to)))
    do
      if (t < 0 ? u.to <= i.from : u.from >= i.to) {
        if (h == 0 && s.indexOf(u.type.name) > -1 && u.from < u.to) {
          let c = el(u);
          return { start: a, end: c ? { from: c.from, to: c.to } : void 0, matched: !0 };
        } else if (Jo(u.type, t, o)) h++;
        else if (Jo(u.type, -t, o)) {
          if (h == 0) {
            let c = el(u);
            return {
              start: a,
              end: c && c.from < c.to ? { from: c.from, to: c.to } : void 0,
              matched: !1,
            };
          }
          h--;
        }
      }
    while (t < 0 ? u.prevSibling() : u.nextSibling());
  return { start: a, matched: !1 };
}
function z0(n, e, t, i, r, s, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1),
    a = o.indexOf(l);
  if (a < 0 || (a % 2 == 0) != t > 0) return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
    u = n.doc.iterRange(e, t > 0 ? n.doc.length : 0),
    c = 0;
  for (let f = 0; !u.next().done && f <= s; ) {
    let d = u.value;
    t < 0 && (f += d.length);
    let p = e + f * t;
    for (let O = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; O != g; O += t) {
      let S = o.indexOf(d[O]);
      if (!(S < 0 || i.resolveInner(p + O, 1).type != r))
        if ((S % 2 == 0) == t > 0) c++;
        else {
          if (c == 1)
            return { start: h, end: { from: p + O, to: p + O + 1 }, matched: S >> 1 == a >> 1 };
          c--;
        }
    }
    t > 0 && (f += d.length);
  }
  return u.done ? { start: h, matched: !1 } : null;
}
const Z0 = Object.create(null),
  vh = [_e.none],
  wh = [],
  Qh = Object.create(null),
  W0 = Object.create(null);
for (let [n, e] of [
  ["variable", "variableName"],
  ["variable-2", "variableName.special"],
  ["string-2", "string.special"],
  ["def", "variableName.definition"],
  ["tag", "tagName"],
  ["attribute", "attributeName"],
  ["type", "typeName"],
  ["builtin", "variableName.standard"],
  ["qualifier", "modifier"],
  ["error", "invalid"],
  ["header", "heading"],
  ["property", "propertyName"],
])
  W0[n] = j0(Z0, e);
function Ns(n, e) {
  wh.indexOf(n) > -1 || (wh.push(n), console.warn(e));
}
function j0(n, e) {
  let t = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let h of l.split(".")) {
      let u = n[h] || m[h];
      u
        ? typeof u == "function"
          ? a.length
            ? (a = a.map(u))
            : Ns(h, `Modifier ${h} used at start of tag`)
          : a.length
            ? Ns(h, `Tag ${h} used as modifier`)
            : (a = Array.isArray(u) ? u : [u])
        : Ns(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a) t.push(h);
  }
  if (!t.length) return 0;
  let i = e.replace(/ /g, "_"),
    r = i + " " + t.map((l) => l.id),
    s = Qh[r];
  if (s) return s.id;
  let o = (Qh[r] = _e.define({ id: vh.length, name: i, props: [gf({ [i]: t })] }));
  return vh.push(o), o.id;
}
he.RTL, he.LTR;
const L0 = (n) => {
  let { state: e } = n,
    t = e.doc.lineAt(e.selection.main.from),
    i = Nl(n.state, t.from);
  return i.line ? q0(n) : i.block ? _0(n) : !1;
};
function Yl(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly) return !1;
    let r = n(e, t);
    return r ? (i(t.update(r)), !0) : !1;
  };
}
const q0 = Yl(Y0, 0),
  I0 = Yl(zf, 0),
  _0 = Yl((n, e) => zf(n, e, X0(e)), 0);
function Nl(n, e) {
  let t = n.languageDataAt("commentTokens", e);
  return t.length ? t[0] : {};
}
const rn = 50;
function V0(n, { open: e, close: t }, i, r) {
  let s = n.sliceDoc(i - rn, i),
    o = n.sliceDoc(r, r + rn),
    l = /\s*$/.exec(s)[0].length,
    a = /^\s*/.exec(o)[0].length,
    h = s.length - l;
  if (s.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return { open: { pos: i - l, margin: l && 1 }, close: { pos: r + a, margin: a && 1 } };
  let u, c;
  r - i <= 2 * rn
    ? (u = c = n.sliceDoc(i, r))
    : ((u = n.sliceDoc(i, i + rn)), (c = n.sliceDoc(r - rn, r)));
  let f = /^\s*/.exec(u)[0].length,
    d = /\s*$/.exec(c)[0].length,
    p = c.length - d - t.length;
  return u.slice(f, f + e.length) == e && c.slice(p, p + t.length) == t
    ? {
        open: { pos: i + f + e.length, margin: /\s/.test(u.charAt(f + e.length)) ? 1 : 0 },
        close: { pos: r - d - t.length, margin: /\s/.test(c.charAt(p - 1)) ? 1 : 0 },
      }
    : null;
}
function X0(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from),
      r = t.to <= i.to ? i : n.doc.lineAt(t.to);
    r.from > i.from && r.from == t.to && (r = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from
      ? (e[s].to = r.to)
      : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
  }
  return e;
}
function zf(n, e, t = e.selection.ranges) {
  let i = t.map((s) => Nl(e, s.from).block);
  if (!i.every((s) => s)) return null;
  let r = t.map((s, o) => V0(e, i[o], s.from, s.to));
  if (n != 2 && !r.every((s) => s))
    return {
      changes: e.changes(
        t.map((s, o) =>
          r[o]
            ? []
            : [
                { from: s.from, insert: i[o].open + " " },
                { from: s.to, insert: " " + i[o].close },
              ]
        )
      ),
    };
  if (n != 1 && r.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < r.length; o++)
      if ((l = r[o])) {
        let a = i[o],
          { open: h, close: u } = l;
        s.push(
          { from: h.pos - a.open.length, to: h.pos + h.margin },
          { from: u.pos - u.margin, to: u.pos + a.close.length }
        );
      }
    return { changes: s };
  }
  return null;
}
function Y0(n, e, t = e.selection.ranges) {
  let i = [],
    r = -1;
  for (let { from: s, to: o } of t) {
    let l = i.length,
      a = 1e9,
      h = Nl(e, s).line;
    if (h) {
      for (let u = s; u <= o; ) {
        let c = e.doc.lineAt(u);
        if (c.from > r && (s == o || o > c.from)) {
          r = c.from;
          let f = /^\s*/.exec(c.text)[0].length,
            d = f == c.length,
            p = c.text.slice(f, f + h.length) == h ? f : -1;
          f < c.text.length && f < a && (a = f),
            i.push({ line: c, comment: p, token: h, indent: f, empty: d, single: !1 });
        }
        u = c.to + 1;
      }
      if (a < 1e9)
        for (let u = l; u < i.length; u++) i[u].indent < i[u].line.text.length && (i[u].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (n != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: h, empty: u, single: c } of i)
      (c || !u) && s.push({ from: l.from + h, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (n != 1 && i.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l,
          u = h + a.length;
        o.text[u - o.from] == " " && u++, s.push({ from: h, to: u });
      }
    return { changes: s };
  }
  return null;
}
const tl = Dt.define(),
  N0 = Dt.define(),
  G0 = T.define(),
  Zf = T.define({
    combine(n) {
      return Ct(
        n,
        { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t },
        {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (e, t) => (i, r) => e(i, r) || t(i, r),
        }
      );
    },
  }),
  Wf = Ae.define({
    create() {
      return yt.empty;
    },
    update(n, e) {
      let t = e.state.facet(Zf),
        i = e.annotation(tl);
      if (i) {
        let a = Ie.fromTransaction(e, i.selection),
          h = i.side,
          u = h == 0 ? n.undone : n.done;
        return (
          a ? (u = Hr(u, u.length, t.minDepth, a)) : (u = If(u, e.startState.selection)),
          new yt(h == 0 ? i.rest : u, h == 0 ? u : i.rest)
        );
      }
      let r = e.annotation(N0);
      if (
        ((r == "full" || r == "before") && (n = n.isolate()), e.annotation(ye.addToHistory) === !1)
      )
        return e.changes.empty ? n : n.addMapping(e.changes.desc);
      let s = Ie.fromTransaction(e),
        o = e.annotation(ye.time),
        l = e.annotation(ye.userEvent);
      return (
        s
          ? (n = n.addChanges(s, o, l, t, e))
          : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)),
        (r == "full" || r == "after") && (n = n.isolate()),
        n
      );
    },
    toJSON(n) {
      return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
    },
    fromJSON(n) {
      return new yt(n.done.map(Ie.fromJSON), n.undone.map(Ie.fromJSON));
    },
  });
function jf(n = {}) {
  return [
    Wf,
    Zf.of(n),
    B.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == "historyUndo" ? Lf : e.inputType == "historyRedo" ? il : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      },
    }),
  ];
}
function ys(n, e) {
  return function ({ state: t, dispatch: i }) {
    if (!e && t.readOnly) return !1;
    let r = t.field(Wf, !1);
    if (!r) return !1;
    let s = r.pop(n, t, e);
    return s ? (i(s), !0) : !1;
  };
}
const Lf = ys(0, !1),
  il = ys(1, !1),
  U0 = ys(0, !0),
  H0 = ys(1, !0);
class Ie {
  constructor(e, t, i, r, s) {
    (this.changes = e),
      (this.effects = t),
      (this.mapped = i),
      (this.startSelection = r),
      (this.selectionsAfter = s);
  }
  setSelAfter(e) {
    return new Ie(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON()),
    };
  }
  static fromJSON(e) {
    return new Ie(
      e.changes && be.fromJSON(e.changes),
      [],
      e.mapped && xt.fromJSON(e.mapped),
      e.startSelection && w.fromJSON(e.startSelection),
      e.selectionsAfter.map(w.fromJSON)
    );
  }
  static fromTransaction(e, t) {
    let i = et;
    for (let r of e.startState.facet(G0)) {
      let s = r(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty
      ? null
      : new Ie(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, et);
  }
  static selection(e) {
    return new Ie(void 0, et, void 0, void 0, e);
  }
}
function Hr(n, e, t, i) {
  let r = e + 1 > t + 20 ? e - t - 1 : 0,
    s = n.slice(r, e);
  return s.push(i), s;
}
function K0(n, e) {
  let t = [],
    i = !1;
  return (
    n.iterChangedRanges((r, s) => t.push(r, s)),
    e.iterChangedRanges((r, s, o, l) => {
      for (let a = 0; a < t.length; ) {
        let h = t[a++],
          u = t[a++];
        l >= h && o <= u && (i = !0);
      }
    }),
    i
  );
}
function J0(n, e) {
  return (
    n.ranges.length == e.ranges.length &&
    n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0
  );
}
function qf(n, e) {
  return n.length ? (e.length ? n.concat(e) : n) : e;
}
const et = [],
  eS = 200;
function If(n, e) {
  if (n.length) {
    let t = n[n.length - 1],
      i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - eS));
    return i.length && i[i.length - 1].eq(e)
      ? n
      : (i.push(e), Hr(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else return [Ie.selection([e])];
}
function tS(n) {
  let e = n[n.length - 1],
    t = n.slice();
  return (
    (t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1))), t
  );
}
function Gs(n, e) {
  if (!n.length) return n;
  let t = n.length,
    i = et;
  for (; t; ) {
    let r = iS(n[t - 1], e, i);
    if ((r.changes && !r.changes.empty) || r.effects.length) {
      let s = n.slice(0, t);
      return (s[t - 1] = r), s;
    } else (e = r.mapped), t--, (i = r.selectionsAfter);
  }
  return i.length ? [Ie.selection(i)] : et;
}
function iS(n, e, t) {
  let i = qf(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : et, t);
  if (!n.changes) return Ie.selection(i);
  let r = n.changes.map(e),
    s = e.mapDesc(n.changes, !0),
    o = n.mapped ? n.mapped.composeDesc(s) : s;
  return new Ie(r, X.mapEffects(n.effects, e), o, n.startSelection.map(s), i);
}
const nS = /^(input\.type|delete)($|\.)/;
class yt {
  constructor(e, t, i = 0, r = void 0) {
    (this.done = e), (this.undone = t), (this.prevTime = i), (this.prevUserEvent = r);
  }
  isolate() {
    return this.prevTime ? new yt(this.done, this.undone) : this;
  }
  addChanges(e, t, i, r, s) {
    let o = this.done,
      l = o[o.length - 1];
    return (
      l &&
      l.changes &&
      !l.changes.empty &&
      e.changes &&
      (!i || nS.test(i)) &&
      ((!l.selectionsAfter.length &&
        t - this.prevTime < r.newGroupDelay &&
        r.joinToEvent(s, K0(l.changes, e.changes))) ||
        i == "input.type.compose")
        ? (o = Hr(
            o,
            o.length - 1,
            r.minDepth,
            new Ie(
              e.changes.compose(l.changes),
              qf(X.mapEffects(e.effects, l.changes), l.effects),
              l.mapped,
              l.startSelection,
              et
            )
          ))
        : (o = Hr(o, o.length, r.minDepth, e)),
      new yt(o, et, t, i)
    );
  }
  addSelection(e, t, i, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : et;
    return s.length > 0 &&
      t - this.prevTime < r &&
      i == this.prevUserEvent &&
      i &&
      /^select($|\.)/.test(i) &&
      J0(s[s.length - 1], e)
      ? this
      : new yt(If(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new yt(Gs(this.done, e), Gs(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0) return null;
    let s = r[r.length - 1],
      o = s.selectionsAfter[0] || t.selection;
    if (i && s.selectionsAfter.length)
      return t.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: tl.of({ side: e, rest: tS(r), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0,
      });
    if (s.changes) {
      let l = r.length == 1 ? et : r.slice(0, r.length - 1);
      return (
        s.mapped && (l = Gs(l, s.mapped)),
        t.update({
          changes: s.changes,
          selection: s.startSelection,
          effects: s.effects,
          annotations: tl.of({ side: e, rest: l, selection: o }),
          filter: !1,
          userEvent: e == 0 ? "undo" : "redo",
          scrollIntoView: !0,
        })
      );
    } else return null;
  }
}
yt.empty = new yt(et, et);
const _f = [
  { key: "Mod-z", run: Lf, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: il, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: il, preventDefault: !0 },
  { key: "Mod-u", run: U0, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: H0, preventDefault: !0 },
];
function Ui(n, e) {
  return w.create(n.ranges.map(e), n.mainIndex);
}
function vt(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function ct({ state: n, dispatch: e }, t) {
  let i = Ui(n.selection, t);
  return i.eq(n.selection, !0) ? !1 : (e(vt(n, i)), !0);
}
function xs(n, e) {
  return w.cursor(e ? n.to : n.from);
}
function Vf(n, e) {
  return ct(n, (t) => (t.empty ? n.moveByChar(t, e) : xs(t, e)));
}
function Be(n) {
  return n.textDirectionAt(n.state.selection.main.head) == he.LTR;
}
const Xf = (n) => Vf(n, !Be(n)),
  Yf = (n) => Vf(n, Be(n));
function Nf(n, e) {
  return ct(n, (t) => (t.empty ? n.moveByGroup(t, e) : xs(t, e)));
}
const rS = (n) => Nf(n, !Be(n)),
  sS = (n) => Nf(n, Be(n));
function oS(n, e, t) {
  if (e.type.prop(t)) return !0;
  let i = e.to - e.from;
  return (i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to)))) || e.firstChild;
}
function ks(n, e, t) {
  let i = Ee(n).resolveInner(e.head),
    r = t ? N.closedBy : N.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h) break;
    oS(n, h, r) ? (i = h) : (a = t ? h.to : h.from);
  }
  let s = i.type.prop(r),
    o,
    l;
  return (
    s && (o = t ? bt(n, i.from, 1) : bt(n, i.to, -1)) && o.matched
      ? (l = t ? o.end.to : o.end.from)
      : (l = t ? i.to : i.from),
    w.cursor(l, t ? -1 : 1)
  );
}
const lS = (n) => ct(n, (e) => ks(n.state, e, !Be(n))),
  aS = (n) => ct(n, (e) => ks(n.state, e, Be(n)));
function Gf(n, e) {
  return ct(n, (t) => {
    if (!t.empty) return xs(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const Uf = (n) => Gf(n, !1),
  Hf = (n) => Gf(n, !0);
function Kf(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2,
    t = 0,
    i = 0,
    r;
  if (e) {
    for (let s of n.state.facet(B.scrollMargins)) {
      let o = s(n);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)),
        o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    r = n.scrollDOM.clientHeight - t - i;
  } else r = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, r - 5),
  };
}
function Jf(n, e) {
  let t = Kf(n),
    { state: i } = n,
    r = Ui(i.selection, (o) => (o.empty ? n.moveVertically(o, e, t.height) : xs(o, e)));
  if (r.eq(i.selection)) return !1;
  let s;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head),
      l = n.scrollDOM.getBoundingClientRect(),
      a = l.top + t.marginTop,
      h = l.bottom - t.marginBottom;
    o &&
      o.top > a &&
      o.bottom < h &&
      (s = B.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return n.dispatch(vt(i, r), { effects: s }), !0;
}
const Ph = (n) => Jf(n, !1),
  nl = (n) => Jf(n, !0);
function si(n, e, t) {
  let i = n.lineBlockAt(e.head),
    r = n.moveToLineBoundary(e, t);
  if (
    (r.head == e.head && r.head != (t ? i.to : i.from) && (r = n.moveToLineBoundary(e, t, !1)),
    !t && r.head == i.from && i.length)
  ) {
    let s = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (r = w.cursor(i.from + s));
  }
  return r;
}
const hS = (n) => ct(n, (e) => si(n, e, !0)),
  uS = (n) => ct(n, (e) => si(n, e, !1)),
  cS = (n) => ct(n, (e) => si(n, e, !Be(n))),
  fS = (n) => ct(n, (e) => si(n, e, Be(n))),
  dS = (n) => ct(n, (e) => w.cursor(n.lineBlockAt(e.head).from, 1)),
  pS = (n) => ct(n, (e) => w.cursor(n.lineBlockAt(e.head).to, -1));
function OS(n, e, t) {
  let i = !1,
    r = Ui(n.selection, (s) => {
      let o =
        bt(n, s.head, -1) ||
        bt(n, s.head, 1) ||
        (s.head > 0 && bt(n, s.head - 1, 1)) ||
        (s.head < n.doc.length && bt(n, s.head + 1, -1));
      if (!o || !o.end) return s;
      i = !0;
      let l = o.start.from == s.head ? o.end.to : o.end.from;
      return t ? w.range(s.anchor, l) : w.cursor(l);
    });
  return i ? (e(vt(n, r)), !0) : !1;
}
const gS = ({ state: n, dispatch: e }) => OS(n, e, !1);
function st(n, e) {
  let t = Ui(n.state.selection, (i) => {
    let r = e(i);
    return w.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(vt(n.state, t)), !0);
}
function ed(n, e) {
  return st(n, (t) => n.moveByChar(t, e));
}
const td = (n) => ed(n, !Be(n)),
  id = (n) => ed(n, Be(n));
function nd(n, e) {
  return st(n, (t) => n.moveByGroup(t, e));
}
const mS = (n) => nd(n, !Be(n)),
  SS = (n) => nd(n, Be(n)),
  bS = (n) => st(n, (e) => ks(n.state, e, !Be(n))),
  yS = (n) => st(n, (e) => ks(n.state, e, Be(n)));
function rd(n, e) {
  return st(n, (t) => n.moveVertically(t, e));
}
const sd = (n) => rd(n, !1),
  od = (n) => rd(n, !0);
function ld(n, e) {
  return st(n, (t) => n.moveVertically(t, e, Kf(n).height));
}
const Ah = (n) => ld(n, !1),
  Mh = (n) => ld(n, !0),
  xS = (n) => st(n, (e) => si(n, e, !0)),
  kS = (n) => st(n, (e) => si(n, e, !1)),
  DS = (n) => st(n, (e) => si(n, e, !Be(n))),
  CS = (n) => st(n, (e) => si(n, e, Be(n))),
  vS = (n) => st(n, (e) => w.cursor(n.lineBlockAt(e.head).from)),
  wS = (n) => st(n, (e) => w.cursor(n.lineBlockAt(e.head).to)),
  $h = ({ state: n, dispatch: e }) => (e(vt(n, { anchor: 0 })), !0),
  Eh = ({ state: n, dispatch: e }) => (e(vt(n, { anchor: n.doc.length })), !0),
  Bh = ({ state: n, dispatch: e }) => (e(vt(n, { anchor: n.selection.main.anchor, head: 0 })), !0),
  Rh = ({ state: n, dispatch: e }) => (
    e(vt(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0
  ),
  QS = ({ state: n, dispatch: e }) => (
    e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: "select" })), !0
  ),
  PS = ({ state: n, dispatch: e }) => {
    let t = Ds(n).map(({ from: i, to: r }) => w.range(i, Math.min(r + 1, n.doc.length)));
    return e(n.update({ selection: w.create(t), userEvent: "select" })), !0;
  },
  AS = ({ state: n, dispatch: e }) => {
    let t = Ui(n.selection, (i) => {
      let r = Ee(n),
        s = r.resolveStack(i.from, 1);
      if (i.empty) {
        let o = r.resolveStack(i.from, -1);
        o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
      }
      for (let o = s; o; o = o.next) {
        let { node: l } = o;
        if (((l.from < i.from && l.to >= i.to) || (l.to > i.to && l.from <= i.from)) && o.next)
          return w.range(l.to, l.from);
      }
      return i;
    });
    return t.eq(n.selection) ? !1 : (e(vt(n, t)), !0);
  },
  MS = ({ state: n, dispatch: e }) => {
    let t = n.selection,
      i = null;
    return (
      t.ranges.length > 1
        ? (i = w.create([t.main]))
        : t.main.empty || (i = w.create([w.cursor(t.main.head)])),
      i ? (e(vt(n, i)), !0) : !1
    );
  };
function Nn(n, e) {
  if (n.state.readOnly) return !1;
  let t = "delete.selection",
    { state: i } = n,
    r = i.changeByRange((s) => {
      let { from: o, to: l } = s;
      if (o == l) {
        let a = e(s);
        a < o
          ? ((t = "delete.backward"), (a = Or(n, a, !1)))
          : a > o && ((t = "delete.forward"), (a = Or(n, a, !0))),
          (o = Math.min(o, a)),
          (l = Math.max(l, a));
      } else (o = Or(n, o, !1)), (l = Or(n, l, !0));
      return o == l
        ? { range: s }
        : { changes: { from: o, to: l }, range: w.cursor(o, o < s.head ? -1 : 1) };
    });
  return r.changes.empty
    ? !1
    : (n.dispatch(
        i.update(r, {
          scrollIntoView: !0,
          userEvent: t,
          effects: t == "delete.selection" ? B.announce.of(i.phrase("Selection deleted")) : void 0,
        })
      ),
      !0);
}
function Or(n, e, t) {
  if (n instanceof B)
    for (let i of n.state.facet(B.atomicRanges).map((r) => r(n)))
      i.between(e, e, (r, s) => {
        r < e && s > e && (e = t ? s : r);
      });
  return e;
}
const ad = (n, e, t) =>
    Nn(n, (i) => {
      let r = i.from,
        { state: s } = n,
        o = s.doc.lineAt(r),
        l,
        a;
      if (
        t &&
        !e &&
        r > o.from &&
        r < o.from + 200 &&
        !/[^ \t]/.test((l = o.text.slice(0, r - o.from)))
      ) {
        if (l[l.length - 1] == "	") return r - 1;
        let h = Ni(l, s.tabSize),
          u = h % Nr(s) || Nr(s);
        for (let c = 0; c < u && l[l.length - 1 - c] == " "; c++) r--;
        a = r;
      } else
        (a = Pe(o.text, r - o.from, e, e) + o.from),
          a == r && o.number != (e ? s.doc.lines : 1)
            ? (a += e ? 1 : -1)
            : !e &&
              /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) &&
              (a = Pe(o.text, a - o.from, !1, !1) + o.from);
      return a;
    }),
  rl = (n) => ad(n, !1, !0),
  hd = (n) => ad(n, !0, !1),
  ud = (n, e) =>
    Nn(n, (t) => {
      let i = t.head,
        { state: r } = n,
        s = r.doc.lineAt(i),
        o = r.charCategorizer(i);
      for (let l = null; ; ) {
        if (i == (e ? s.to : s.from)) {
          i == t.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
          break;
        }
        let a = Pe(s.text, i - s.from, e) + s.from,
          h = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from),
          u = o(h);
        if (l != null && u != l) break;
        (h != " " || i != t.head) && (l = u), (i = a);
      }
      return i;
    }),
  cd = (n) => ud(n, !1),
  $S = (n) => ud(n, !0),
  ES = (n) =>
    Nn(n, (e) => {
      let t = n.lineBlockAt(e.head).to;
      return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
    }),
  BS = (n) =>
    Nn(n, (e) => {
      let t = n.moveToLineBoundary(e, !1).head;
      return e.head > t ? t : Math.max(0, e.head - 1);
    }),
  RS = (n) =>
    Nn(n, (e) => {
      let t = n.moveToLineBoundary(e, !0).head;
      return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
    }),
  TS = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let t = n.changeByRange((i) => ({
      changes: { from: i.from, to: i.to, insert: J.of(["", ""]) },
      range: w.cursor(i.from),
    }));
    return e(n.update(t, { scrollIntoView: !0, userEvent: "input" })), !0;
  },
  FS = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let t = n.changeByRange((i) => {
      if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i };
      let r = i.from,
        s = n.doc.lineAt(r),
        o = r == s.from ? r - 1 : Pe(s.text, r - s.from, !1) + s.from,
        l = r == s.to ? r + 1 : Pe(s.text, r - s.from, !0) + s.from;
      return {
        changes: { from: o, to: l, insert: n.doc.slice(r, l).append(n.doc.slice(o, r)) },
        range: w.cursor(l),
      };
    });
    return t.changes.empty
      ? !1
      : (e(n.update(t, { scrollIntoView: !0, userEvent: "move.character" })), !0);
  };
function Ds(n) {
  let e = [],
    t = -1;
  for (let i of n.selection.ranges) {
    let r = n.doc.lineAt(i.from),
      s = n.doc.lineAt(i.to);
    if ((!i.empty && i.to == s.from && (s = n.doc.lineAt(i.to - 1)), t >= r.number)) {
      let o = e[e.length - 1];
      (o.to = s.to), o.ranges.push(i);
    } else e.push({ from: r.from, to: s.to, ranges: [i] });
    t = s.number + 1;
  }
  return e;
}
function fd(n, e, t) {
  if (n.readOnly) return !1;
  let i = [],
    r = [];
  for (let s of Ds(n)) {
    if (t ? s.to == n.doc.length : s.from == 0) continue;
    let o = n.doc.lineAt(t ? s.to + 1 : s.from - 1),
      l = o.length + 1;
    if (t) {
      i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + n.lineBreak });
      for (let a of s.ranges)
        r.push(w.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: s.from }, { from: s.to, insert: n.lineBreak + o.text });
      for (let a of s.ranges) r.push(w.range(a.anchor - l, a.head - l));
    }
  }
  return i.length
    ? (e(
        n.update({
          changes: i,
          scrollIntoView: !0,
          selection: w.create(r, n.selection.mainIndex),
          userEvent: "move.line",
        })
      ),
      !0)
    : !1;
}
const zS = ({ state: n, dispatch: e }) => fd(n, e, !1),
  ZS = ({ state: n, dispatch: e }) => fd(n, e, !0);
function dd(n, e, t) {
  if (n.readOnly) return !1;
  let i = [];
  for (let r of Ds(n))
    t
      ? i.push({ from: r.from, insert: n.doc.slice(r.from, r.to) + n.lineBreak })
      : i.push({ from: r.to, insert: n.lineBreak + n.doc.slice(r.from, r.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const WS = ({ state: n, dispatch: e }) => dd(n, e, !1),
  jS = ({ state: n, dispatch: e }) => dd(n, e, !0),
  LS = (n) => {
    if (n.state.readOnly) return !1;
    let { state: e } = n,
      t = e.changes(
        Ds(e).map(
          ({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s })
        )
      ),
      i = Ui(e.selection, (r) => {
        let s;
        if (n.lineWrapping) {
          let o = n.lineBlockAt(r.head),
            l = n.coordsAtPos(r.head, r.assoc || 1);
          l && (s = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
        }
        return n.moveVertically(r, !0, s);
      }).map(t);
    return (
      n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0
    );
  };
function qS(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e };
  let t = Ee(n).resolveInner(e),
    i = t.childBefore(e),
    r = t.childAfter(e),
    s;
  return i &&
    r &&
    i.to <= e &&
    r.from >= e &&
    (s = i.type.prop(N.closedBy)) &&
    s.indexOf(r.name) > -1 &&
    n.doc.lineAt(i.to).from == n.doc.lineAt(r.from).from &&
    !/\S/.test(n.sliceDoc(i.to, r.from))
    ? { from: i.to, to: r.from }
    : null;
}
const Th = pd(!1),
  IS = pd(!0);
function pd(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return !1;
    let i = e.changeByRange((r) => {
      let { from: s, to: o } = r,
        l = e.doc.lineAt(s),
        a = !n && s == o && qS(e, s);
      n && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new ms(e, { simulateBreak: s, simulateDoubleBreak: !!a }),
        u = _l(h, s);
      for (
        u == null && (u = Ni(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize));
        o < l.to && /\s/.test(l.text[o - l.from]);

      )
        o++;
      a
        ? ({ from: s, to: o } = a)
        : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let c = ["", Bn(e, u)];
      return (
        a && c.push(Bn(e, h.lineIndent(l.from, -1))),
        { changes: { from: s, to: o, insert: J.of(c) }, range: w.cursor(s + 1 + c[1].length) }
      );
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function Gl(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let r = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, r, i), (t = l.number)), (o = l.to + 1);
    }
    let s = n.changes(r);
    return { changes: r, range: w.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1)) };
  });
}
const _S = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let t = Object.create(null),
      i = new ms(n, {
        overrideIndentation: (s) => {
          let o = t[s];
          return o ?? -1;
        },
      }),
      r = Gl(n, (s, o, l) => {
        let a = _l(i, s.from);
        if (a == null) return;
        /\S/.test(s.text) || (a = 0);
        let h = /^\s*/.exec(s.text)[0],
          u = Bn(n, a);
        (h != u || l.from < s.from + h.length) &&
          ((t[s.from] = a), o.push({ from: s.from, to: s.from + h.length, insert: u }));
      });
    return r.changes.empty || e(n.update(r, { userEvent: "indent" })), !0;
  },
  Od = ({ state: n, dispatch: e }) =>
    n.readOnly
      ? !1
      : (e(
          n.update(
            Gl(n, (t, i) => {
              i.push({ from: t.from, insert: n.facet(gs) });
            }),
            { userEvent: "input.indent" }
          )
        ),
        !0),
  gd = ({ state: n, dispatch: e }) =>
    n.readOnly
      ? !1
      : (e(
          n.update(
            Gl(n, (t, i) => {
              let r = /^\s*/.exec(t.text)[0];
              if (!r) return;
              let s = Ni(r, n.tabSize),
                o = 0,
                l = Bn(n, Math.max(0, s - Nr(n)));
              for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); ) o++;
              i.push({ from: t.from + o, to: t.from + r.length, insert: l.slice(o) });
            }),
            { userEvent: "delete.dedent" }
          )
        ),
        !0),
  VS = (n) => (n.setTabFocusMode(), !0),
  XS = [
    { key: "Ctrl-b", run: Xf, shift: td, preventDefault: !0 },
    { key: "Ctrl-f", run: Yf, shift: id },
    { key: "Ctrl-p", run: Uf, shift: sd },
    { key: "Ctrl-n", run: Hf, shift: od },
    { key: "Ctrl-a", run: dS, shift: vS },
    { key: "Ctrl-e", run: pS, shift: wS },
    { key: "Ctrl-d", run: hd },
    { key: "Ctrl-h", run: rl },
    { key: "Ctrl-k", run: ES },
    { key: "Ctrl-Alt-h", run: cd },
    { key: "Ctrl-o", run: TS },
    { key: "Ctrl-t", run: FS },
    { key: "Ctrl-v", run: nl },
  ],
  YS = [
    { key: "ArrowLeft", run: Xf, shift: td, preventDefault: !0 },
    { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: rS, shift: mS, preventDefault: !0 },
    { mac: "Cmd-ArrowLeft", run: cS, shift: DS, preventDefault: !0 },
    { key: "ArrowRight", run: Yf, shift: id, preventDefault: !0 },
    { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: sS, shift: SS, preventDefault: !0 },
    { mac: "Cmd-ArrowRight", run: fS, shift: CS, preventDefault: !0 },
    { key: "ArrowUp", run: Uf, shift: sd, preventDefault: !0 },
    { mac: "Cmd-ArrowUp", run: $h, shift: Bh },
    { mac: "Ctrl-ArrowUp", run: Ph, shift: Ah },
    { key: "ArrowDown", run: Hf, shift: od, preventDefault: !0 },
    { mac: "Cmd-ArrowDown", run: Eh, shift: Rh },
    { mac: "Ctrl-ArrowDown", run: nl, shift: Mh },
    { key: "PageUp", run: Ph, shift: Ah },
    { key: "PageDown", run: nl, shift: Mh },
    { key: "Home", run: uS, shift: kS, preventDefault: !0 },
    { key: "Mod-Home", run: $h, shift: Bh },
    { key: "End", run: hS, shift: xS, preventDefault: !0 },
    { key: "Mod-End", run: Eh, shift: Rh },
    { key: "Enter", run: Th, shift: Th },
    { key: "Mod-a", run: QS },
    { key: "Backspace", run: rl, shift: rl },
    { key: "Delete", run: hd },
    { key: "Mod-Backspace", mac: "Alt-Backspace", run: cd },
    { key: "Mod-Delete", mac: "Alt-Delete", run: $S },
    { mac: "Mod-Backspace", run: BS },
    { mac: "Mod-Delete", run: RS },
  ].concat(XS.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))),
  md = [
    { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: lS, shift: bS },
    { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: aS, shift: yS },
    { key: "Alt-ArrowUp", run: zS },
    { key: "Shift-Alt-ArrowUp", run: WS },
    { key: "Alt-ArrowDown", run: ZS },
    { key: "Shift-Alt-ArrowDown", run: jS },
    { key: "Escape", run: MS },
    { key: "Mod-Enter", run: IS },
    { key: "Alt-l", mac: "Ctrl-l", run: PS },
    { key: "Mod-i", run: AS, preventDefault: !0 },
    { key: "Mod-[", run: gd },
    { key: "Mod-]", run: Od },
    { key: "Mod-Alt-\\", run: _S },
    { key: "Shift-Mod-k", run: LS },
    { key: "Shift-Mod-\\", run: gS },
    { key: "Mod-/", run: L0 },
    { key: "Alt-A", run: I0 },
    { key: "Ctrl-m", mac: "Shift-Alt-m", run: VS },
  ].concat(YS),
  NS = { key: "Tab", run: Od, shift: gd };
function se() {
  var n = arguments[0];
  typeof n == "string" && (n = document.createElement(n));
  var e = 1,
    t = arguments[1];
  if (t && typeof t == "object" && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var r = t[i];
        typeof r == "string" ? n.setAttribute(i, r) : r != null && (n[i] = r);
      }
    e++;
  }
  for (; e < arguments.length; e++) Sd(n, arguments[e]);
  return n;
}
function Sd(n, e) {
  if (typeof e == "string") n.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null) n.appendChild(e);
    else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) Sd(n, e[t]);
    else throw new RangeError("Unsupported child node: " + e);
}
const Fh = typeof String.prototype.normalize == "function" ? (n) => n.normalize("NFKD") : (n) => n;
class Xi {
  constructor(e, t, i = 0, r = e.length, s, o) {
    (this.test = o),
      (this.value = { from: 0, to: 0 }),
      (this.done = !1),
      (this.matches = []),
      (this.buffer = ""),
      (this.bufferPos = 0),
      (this.iter = e.iterRange(i, r)),
      (this.bufferStart = i),
      (this.normalize = s ? (l) => s(Fh(l)) : Fh),
      (this.query = this.normalize(t));
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (((this.bufferStart += this.buffer.length), this.iter.next(), this.iter.done)) return -1;
      (this.bufferPos = 0), (this.buffer = this.iter.value);
    }
    return we(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (;;) {
      let e = this.peek();
      if (e < 0) return (this.done = !0), this;
      let t = vl(e),
        i = this.bufferStart + this.bufferPos;
      this.bufferPos += Je(e);
      let r = this.normalize(t);
      if (r.length)
        for (let s = 0, o = i; ; s++) {
          let l = r.charCodeAt(s),
            a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (s == r.length - 1) {
            if (a) return (this.value = a), this;
            break;
          }
          o == i && s < t.length && t.charCodeAt(s) == l && o++;
        }
    }
  }
  match(e, t, i) {
    let r = null;
    for (let s = 0; s < this.matches.length; s += 2) {
      let o = this.matches[s],
        l = !1;
      this.query.charCodeAt(o) == e &&
        (o == this.query.length - 1
          ? (r = { from: this.matches[s + 1], to: i })
          : (this.matches[s]++, (l = !0))),
        l || (this.matches.splice(s, 2), (s -= 2));
    }
    return (
      this.query.charCodeAt(0) == e &&
        (this.query.length == 1 ? (r = { from: t, to: i }) : this.matches.push(1, t)),
      r && this.test && !this.test(r.from, r.to, this.buffer, this.bufferStart) && (r = null),
      r
    );
  }
}
typeof Symbol < "u" &&
  (Xi.prototype[Symbol.iterator] = function () {
    return this;
  });
const bd = { from: -1, to: -1, match: /.*/.exec("") },
  Ul = "gm" + (/x/.unicode == null ? "" : "u");
class yd {
  constructor(e, t, i, r = 0, s = e.length) {
    if (
      ((this.text = e),
      (this.to = s),
      (this.curLine = ""),
      (this.done = !1),
      (this.value = bd),
      /\\[sWDnr]|\n|\r|\[\^/.test(t))
    )
      return new xd(e, t, i, r, s);
    (this.re = new RegExp(t, Ul + (i != null && i.ignoreCase ? "i" : ""))),
      (this.test = i == null ? void 0 : i.test),
      (this.iter = e.iter());
    let o = e.lineAt(r);
    (this.curLineStart = o.from), (this.matchPos = Kr(e, r)), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e),
      this.iter.lineBreak
        ? (this.curLine = "")
        : ((this.curLine = this.iter.value),
          this.curLineStart + this.curLine.length > this.to &&
            (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)),
          this.iter.next());
  }
  nextLine() {
    (this.curLineStart = this.curLineStart + this.curLine.length + 1),
      this.curLineStart > this.to ? (this.curLine = "") : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index,
          r = i + t[0].length;
        if (
          ((this.matchPos = Kr(this.text, r + (i == r ? 1 : 0))),
          i == this.curLineStart + this.curLine.length && this.nextLine(),
          (i < r || i > this.value.to) && (!this.test || this.test(i, r, t)))
        )
          return (this.value = { from: i, to: r, match: t }), this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), (e = 0);
      else return (this.done = !0), this;
    }
  }
}
const Us = new WeakMap();
class Fi {
  constructor(e, t) {
    (this.from = e), (this.text = t);
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let r = Us.get(e);
    if (!r || r.from >= i || r.to <= t) {
      let l = new Fi(t, e.sliceString(t, i));
      return Us.set(e, l), l;
    }
    if (r.from == t && r.to == i) return r;
    let { text: s, from: o } = r;
    return (
      o > t && ((s = e.sliceString(t, o) + s), (o = t)),
      r.to < i && (s += e.sliceString(r.to, i)),
      Us.set(e, new Fi(o, s)),
      new Fi(t, s.slice(t - o, i - o))
    );
  }
}
class xd {
  constructor(e, t, i, r, s) {
    (this.text = e),
      (this.to = s),
      (this.done = !1),
      (this.value = bd),
      (this.matchPos = Kr(e, r)),
      (this.re = new RegExp(t, Ul + (i != null && i.ignoreCase ? "i" : ""))),
      (this.test = i == null ? void 0 : i.test),
      (this.flat = Fi.get(e, r, this.chunkEnd(r + 5e3)));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (;;) {
      let e = (this.re.lastIndex = this.matchPos - this.flat.from),
        t = this.re.exec(this.flat.text);
      if (
        (t &&
          !t[0] &&
          t.index == e &&
          ((this.re.lastIndex = e + 1), (t = this.re.exec(this.flat.text))),
        t)
      ) {
        let i = this.flat.from + t.index,
          r = i + t[0].length;
        if (
          (this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) &&
          (!this.test || this.test(i, r, t))
        )
          return (
            (this.value = { from: i, to: r, match: t }),
            (this.matchPos = Kr(this.text, r + (i == r ? 1 : 0))),
            this
          );
      }
      if (this.flat.to == this.to) return (this.done = !0), this;
      this.flat = Fi.get(
        this.text,
        this.flat.from,
        this.chunkEnd(this.flat.from + this.flat.text.length * 2)
      );
    }
  }
}
typeof Symbol < "u" &&
  (yd.prototype[Symbol.iterator] = xd.prototype[Symbol.iterator] =
    function () {
      return this;
    });
function GS(n) {
  try {
    return new RegExp(n, Ul), !0;
  } catch {
    return !1;
  }
}
function Kr(n, e) {
  if (e >= n.length) return e;
  let t = n.lineAt(e),
    i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++;
  return e;
}
function sl(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number),
    t = se("input", { class: "cm-textfield", name: "line", value: e }),
    i = se(
      "form",
      {
        class: "cm-gotoLine",
        onkeydown: (s) => {
          s.keyCode == 27
            ? (s.preventDefault(), n.dispatch({ effects: Jr.of(!1) }), n.focus())
            : s.keyCode == 13 && (s.preventDefault(), r());
        },
        onsubmit: (s) => {
          s.preventDefault(), r();
        },
      },
      se("label", n.state.phrase("Go to line"), ": ", t),
      " ",
      se("button", { class: "cm-button", type: "submit" }, n.state.phrase("go"))
    );
  function r() {
    let s = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!s) return;
    let { state: o } = n,
      l = o.doc.lineAt(o.selection.main.head),
      [, a, h, u, c] = s,
      f = u ? +u.slice(1) : 0,
      d = h ? +h : l.number;
    if (h && c) {
      let g = d / 100;
      a && (g = g * (a == "-" ? -1 : 1) + l.number / o.doc.lines),
        (d = Math.round(o.doc.lines * g));
    } else h && a && (d = d * (a == "-" ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))),
      O = w.cursor(p.from + Math.max(0, Math.min(f, p.length)));
    n.dispatch({ effects: [Jr.of(!1), B.scrollIntoView(O.from, { y: "center" })], selection: O }),
      n.focus();
  }
  return { dom: i };
}
const Jr = X.define(),
  zh = Ae.define({
    create() {
      return !0;
    },
    update(n, e) {
      for (let t of e.effects) t.is(Jr) && (n = t.value);
      return n;
    },
    provide: (n) => $n.from(n, (e) => (e ? sl : null)),
  }),
  US = (n) => {
    let e = Mn(n, sl);
    if (!e) {
      let t = [Jr.of(!0)];
      n.state.field(zh, !1) == null && t.push(X.appendConfig.of([zh, HS])),
        n.dispatch({ effects: t }),
        (e = Mn(n, sl));
    }
    return e && e.dom.querySelector("input").select(), !0;
  },
  HS = B.baseTheme({
    ".cm-panel.cm-gotoLine": { padding: "2px 6px 4px", "& label": { fontSize: "80%" } },
  }),
  KS = { highlightWordAroundCursor: !1, minSelectionLength: 1, maxMatches: 100, wholeWords: !1 },
  kd = T.define({
    combine(n) {
      return Ct(n, KS, {
        highlightWordAroundCursor: (e, t) => e || t,
        minSelectionLength: Math.min,
        maxMatches: Math.min,
      });
    },
  });
function Dd(n) {
  let e = [n1, i1];
  return n && e.push(kd.of(n)), e;
}
const JS = W.mark({ class: "cm-selectionMatch" }),
  e1 = W.mark({ class: "cm-selectionMatch cm-selectionMatch-main" });
function Zh(n, e, t, i) {
  return (
    (t == 0 || n(e.sliceDoc(t - 1, t)) != ue.Word) &&
    (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != ue.Word)
  );
}
function t1(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == ue.Word && n(e.sliceDoc(i - 1, i)) == ue.Word;
}
const i1 = Oe.fromClass(
    class {
      constructor(n) {
        this.decorations = this.getDeco(n);
      }
      update(n) {
        (n.selectionSet || n.docChanged || n.viewportChanged) &&
          (this.decorations = this.getDeco(n.view));
      }
      getDeco(n) {
        let e = n.state.facet(kd),
          { state: t } = n,
          i = t.selection;
        if (i.ranges.length > 1) return W.none;
        let r = i.main,
          s,
          o = null;
        if (r.empty) {
          if (!e.highlightWordAroundCursor) return W.none;
          let a = t.wordAt(r.head);
          if (!a) return W.none;
          (o = t.charCategorizer(r.head)), (s = t.sliceDoc(a.from, a.to));
        } else {
          let a = r.to - r.from;
          if (a < e.minSelectionLength || a > 200) return W.none;
          if (e.wholeWords) {
            if (
              ((s = t.sliceDoc(r.from, r.to)),
              (o = t.charCategorizer(r.head)),
              !(Zh(o, t, r.from, r.to) && t1(o, t, r.from, r.to)))
            )
              return W.none;
          } else if (((s = t.sliceDoc(r.from, r.to)), !s)) return W.none;
        }
        let l = [];
        for (let a of n.visibleRanges) {
          let h = new Xi(t.doc, s, a.from, a.to);
          for (; !h.next().done; ) {
            let { from: u, to: c } = h.value;
            if (
              (!o || Zh(o, t, u, c)) &&
              (r.empty && u <= r.from && c >= r.to
                ? l.push(e1.range(u, c))
                : (u >= r.to || c <= r.from) && l.push(JS.range(u, c)),
              l.length > e.maxMatches)
            )
              return W.none;
          }
        }
        return W.set(l);
      }
    },
    { decorations: (n) => n.decorations }
  ),
  n1 = B.baseTheme({
    ".cm-selectionMatch": { backgroundColor: "#99ff7780" },
    ".cm-searchMatch .cm-selectionMatch": { backgroundColor: "transparent" },
  }),
  r1 = ({ state: n, dispatch: e }) => {
    let { selection: t } = n,
      i = w.create(
        t.ranges.map((r) => n.wordAt(r.head) || w.cursor(r.head)),
        t.mainIndex
      );
    return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
  };
function s1(n, e) {
  let { main: t, ranges: i } = n.selection,
    r = n.wordAt(t.head),
    s = r && r.from == t.from && r.to == t.to;
  for (let o = !1, l = new Xi(n.doc, e, i[i.length - 1].to); ; )
    if ((l.next(), l.done)) {
      if (o) return null;
      (l = new Xi(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1))), (o = !0);
    } else {
      if (o && i.some((a) => a.from == l.value.from)) continue;
      if (s) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to) continue;
      }
      return l.value;
    }
}
const o1 = ({ state: n, dispatch: e }) => {
    let { ranges: t } = n.selection;
    if (t.some((s) => s.from === s.to)) return r1({ state: n, dispatch: e });
    let i = n.sliceDoc(t[0].from, t[0].to);
    if (n.selection.ranges.some((s) => n.sliceDoc(s.from, s.to) != i)) return !1;
    let r = s1(n, i);
    return r
      ? (e(
          n.update({
            selection: n.selection.addRange(w.range(r.from, r.to), !1),
            effects: B.scrollIntoView(r.to),
          })
        ),
        !0)
      : !1;
  },
  Hi = T.define({
    combine(n) {
      return Ct(n, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: (e) => new S1(e),
        scrollToMatch: (e) => B.scrollIntoView(e),
      });
    },
  });
class Cd {
  constructor(e) {
    (this.search = e.search),
      (this.caseSensitive = !!e.caseSensitive),
      (this.literal = !!e.literal),
      (this.regexp = !!e.regexp),
      (this.replace = e.replace || ""),
      (this.valid = !!this.search && (!this.regexp || GS(this.search))),
      (this.unquoted = this.unquote(this.search)),
      (this.wholeWord = !!e.wholeWord);
  }
  unquote(e) {
    return this.literal
      ? e
      : e.replace(/\\([nrt\\])/g, (t, i) =>
          i == "n"
            ? `
`
            : i == "r"
              ? "\r"
              : i == "t"
                ? "	"
                : "\\"
        );
  }
  eq(e) {
    return (
      this.search == e.search &&
      this.replace == e.replace &&
      this.caseSensitive == e.caseSensitive &&
      this.regexp == e.regexp &&
      this.wholeWord == e.wholeWord
    );
  }
  create() {
    return this.regexp ? new u1(this) : new a1(this);
  }
  getCursor(e, t = 0, i) {
    let r = e.doc ? e : U.create({ doc: e });
    return i == null && (i = r.doc.length), this.regexp ? Pi(this, r, t, i) : Qi(this, r, t, i);
  }
}
class vd {
  constructor(e) {
    this.spec = e;
  }
}
function Qi(n, e, t, i) {
  return new Xi(
    e.doc,
    n.unquoted,
    t,
    i,
    n.caseSensitive ? void 0 : (r) => r.toLowerCase(),
    n.wholeWord ? l1(e.doc, e.charCategorizer(e.selection.main.head)) : void 0
  );
}
function l1(n, e) {
  return (t, i, r, s) => (
    (s > t || s + r.length < i) &&
      ((s = Math.max(0, t - 2)), (r = n.sliceString(s, Math.min(n.length, i + 2)))),
    (e(es(r, t - s)) != ue.Word || e(ts(r, t - s)) != ue.Word) &&
      (e(ts(r, i - s)) != ue.Word || e(es(r, i - s)) != ue.Word)
  );
}
class a1 extends vd {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let r = Qi(this.spec, e, i, e.doc.length).nextOverlapping();
    if (r.done) {
      let s = Math.min(e.doc.length, t + this.spec.unquoted.length);
      r = Qi(this.spec, e, 0, s).nextOverlapping();
    }
    return r.done || (r.value.from == t && r.value.to == i) ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = i; ; ) {
      let s = Math.max(t, r - 1e4 - this.spec.unquoted.length),
        o = Qi(this.spec, e, s, r),
        l = null;
      for (; !o.nextOverlapping().done; ) l = o.value;
      if (l) return l;
      if (s == t) return null;
      r -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let r = this.prevMatchInRange(e, 0, t);
    return (
      r || (r = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)),
      r && (r.from != t || r.to != i) ? r : null
    );
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = Qi(this.spec, e, 0, e.doc.length),
      r = [];
    for (; !i.next().done; ) {
      if (r.length >= t) return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = Qi(
      this.spec,
      e,
      Math.max(0, t - this.spec.unquoted.length),
      Math.min(i + this.spec.unquoted.length, e.doc.length)
    );
    for (; !s.next().done; ) r(s.value.from, s.value.to);
  }
}
function Pi(n, e, t, i) {
  return new yd(
    e.doc,
    n.search,
    {
      ignoreCase: !n.caseSensitive,
      test: n.wholeWord ? h1(e.charCategorizer(e.selection.main.head)) : void 0,
    },
    t,
    i
  );
}
function es(n, e) {
  return n.slice(Pe(n, e, !1), e);
}
function ts(n, e) {
  return n.slice(e, Pe(n, e));
}
function h1(n) {
  return (e, t, i) =>
    !i[0].length ||
    ((n(es(i.input, i.index)) != ue.Word || n(ts(i.input, i.index)) != ue.Word) &&
      (n(ts(i.input, i.index + i[0].length)) != ue.Word ||
        n(es(i.input, i.index + i[0].length)) != ue.Word));
}
class u1 extends vd {
  nextMatch(e, t, i) {
    let r = Pi(this.spec, e, i, e.doc.length).next();
    return r.done && (r = Pi(this.spec, e, 0, t).next()), r.done ? null : r.value;
  }
  prevMatchInRange(e, t, i) {
    for (let r = 1; ; r++) {
      let s = Math.max(t, i - r * 1e4),
        o = Pi(this.spec, e, s, i),
        l = null;
      for (; !o.next().done; ) l = o.value;
      if (l && (s == t || l.from > s + 10)) return l;
      if (s == t) return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec
      .unquote(this.spec.replace)
      .replace(/\$([$&\d+])/g, (t, i) =>
        i == "$" ? "$" : i == "&" ? e.match[0] : i != "0" && +i < e.match.length ? e.match[i] : t
      );
  }
  matchAll(e, t) {
    let i = Pi(this.spec, e, 0, e.doc.length),
      r = [];
    for (; !i.next().done; ) {
      if (r.length >= t) return null;
      r.push(i.value);
    }
    return r;
  }
  highlight(e, t, i, r) {
    let s = Pi(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !s.next().done; ) r(s.value.from, s.value.to);
  }
}
const Rn = X.define(),
  Hl = X.define(),
  Gt = Ae.define({
    create(n) {
      return new Hs(ol(n).create(), null);
    },
    update(n, e) {
      for (let t of e.effects)
        t.is(Rn)
          ? (n = new Hs(t.value.create(), n.panel))
          : t.is(Hl) && (n = new Hs(n.query, t.value ? Kl : null));
      return n;
    },
    provide: (n) => $n.from(n, (e) => e.panel),
  });
class Hs {
  constructor(e, t) {
    (this.query = e), (this.panel = t);
  }
}
const c1 = W.mark({ class: "cm-searchMatch" }),
  f1 = W.mark({ class: "cm-searchMatch cm-searchMatch-selected" }),
  d1 = Oe.fromClass(
    class {
      constructor(n) {
        (this.view = n), (this.decorations = this.highlight(n.state.field(Gt)));
      }
      update(n) {
        let e = n.state.field(Gt);
        (e != n.startState.field(Gt) || n.docChanged || n.selectionSet || n.viewportChanged) &&
          (this.decorations = this.highlight(e));
      }
      highlight({ query: n, panel: e }) {
        if (!e || !n.spec.valid) return W.none;
        let { view: t } = this,
          i = new Ht();
        for (let r = 0, s = t.visibleRanges, o = s.length; r < o; r++) {
          let { from: l, to: a } = s[r];
          for (; r < o - 1 && a > s[r + 1].from - 2 * 250; ) a = s[++r].to;
          n.highlight(t.state, l, a, (h, u) => {
            let c = t.state.selection.ranges.some((f) => f.from == h && f.to == u);
            i.add(h, u, c ? f1 : c1);
          });
        }
        return i.finish();
      }
    },
    { decorations: (n) => n.decorations }
  );
function Gn(n) {
  return (e) => {
    let t = e.state.field(Gt, !1);
    return t && t.query.spec.valid ? n(e, t) : Pd(e);
  };
}
const is = Gn((n, { query: e }) => {
    let { to: t } = n.state.selection.main,
      i = e.nextMatch(n.state, t, t);
    if (!i) return !1;
    let r = w.single(i.from, i.to),
      s = n.state.facet(Hi);
    return (
      n.dispatch({
        selection: r,
        effects: [Jl(n, i), s.scrollToMatch(r.main, n)],
        userEvent: "select.search",
      }),
      Qd(n),
      !0
    );
  }),
  ns = Gn((n, { query: e }) => {
    let { state: t } = n,
      { from: i } = t.selection.main,
      r = e.prevMatch(t, i, i);
    if (!r) return !1;
    let s = w.single(r.from, r.to),
      o = n.state.facet(Hi);
    return (
      n.dispatch({
        selection: s,
        effects: [Jl(n, r), o.scrollToMatch(s.main, n)],
        userEvent: "select.search",
      }),
      Qd(n),
      !0
    );
  }),
  p1 = Gn((n, { query: e }) => {
    let t = e.matchAll(n.state, 1e3);
    return !t || !t.length
      ? !1
      : (n.dispatch({
          selection: w.create(t.map((i) => w.range(i.from, i.to))),
          userEvent: "select.search.matches",
        }),
        !0);
  }),
  O1 = ({ state: n, dispatch: e }) => {
    let t = n.selection;
    if (t.ranges.length > 1 || t.main.empty) return !1;
    let { from: i, to: r } = t.main,
      s = [],
      o = 0;
    for (let l = new Xi(n.doc, n.sliceDoc(i, r)); !l.next().done; ) {
      if (s.length > 1e3) return !1;
      l.value.from == i && (o = s.length), s.push(w.range(l.value.from, l.value.to));
    }
    return e(n.update({ selection: w.create(s, o), userEvent: "select.search.matches" })), !0;
  },
  Wh = Gn((n, { query: e }) => {
    let { state: t } = n,
      { from: i, to: r } = t.selection.main;
    if (t.readOnly) return !1;
    let s = e.nextMatch(t, i, i);
    if (!s) return !1;
    let o = [],
      l,
      a,
      h = [];
    if (
      (s.from == i &&
        s.to == r &&
        ((a = t.toText(e.getReplacement(s))),
        o.push({ from: s.from, to: s.to, insert: a }),
        (s = e.nextMatch(t, s.from, s.to)),
        h.push(B.announce.of(t.phrase("replaced match on line $", t.doc.lineAt(i).number) + "."))),
      s)
    ) {
      let u = o.length == 0 || o[0].from >= s.to ? 0 : s.to - s.from - a.length;
      (l = w.single(s.from - u, s.to - u)),
        h.push(Jl(n, s)),
        h.push(t.facet(Hi).scrollToMatch(l.main, n));
    }
    return n.dispatch({ changes: o, selection: l, effects: h, userEvent: "input.replace" }), !0;
  }),
  g1 = Gn((n, { query: e }) => {
    if (n.state.readOnly) return !1;
    let t = e.matchAll(n.state, 1e9).map((r) => {
      let { from: s, to: o } = r;
      return { from: s, to: o, insert: e.getReplacement(r) };
    });
    if (!t.length) return !1;
    let i = n.state.phrase("replaced $ matches", t.length) + ".";
    return (
      n.dispatch({ changes: t, effects: B.announce.of(i), userEvent: "input.replace.all" }), !0
    );
  });
function Kl(n) {
  return n.state.facet(Hi).createPanel(n);
}
function ol(n, e) {
  var t, i, r, s, o;
  let l = n.selection.main,
    a = l.empty || l.to > l.from + 100 ? "" : n.sliceDoc(l.from, l.to);
  if (e && !a) return e;
  let h = n.facet(Hi);
  return new Cd({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal)
      ? a
      : a.replace(/\n/g, "\\n"),
    caseSensitive:
      (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (r = e == null ? void 0 : e.literal) !== null && r !== void 0 ? r : h.literal,
    regexp: (s = e == null ? void 0 : e.regexp) !== null && s !== void 0 ? s : h.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord,
  });
}
function wd(n) {
  let e = Mn(n, Kl);
  return e && e.dom.querySelector("[main-field]");
}
function Qd(n) {
  let e = wd(n);
  e && e == n.root.activeElement && e.select();
}
const Pd = (n) => {
    let e = n.state.field(Gt, !1);
    if (e && e.panel) {
      let t = wd(n);
      if (t && t != n.root.activeElement) {
        let i = ol(n.state, e.query.spec);
        i.valid && n.dispatch({ effects: Rn.of(i) }), t.focus(), t.select();
      }
    } else
      n.dispatch({
        effects: [Hl.of(!0), e ? Rn.of(ol(n.state, e.query.spec)) : X.appendConfig.of(y1)],
      });
    return !0;
  },
  Ad = (n) => {
    let e = n.state.field(Gt, !1);
    if (!e || !e.panel) return !1;
    let t = Mn(n, Kl);
    return (
      t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: Hl.of(!1) }), !0
    );
  },
  m1 = [
    { key: "Mod-f", run: Pd, scope: "editor search-panel" },
    { key: "F3", run: is, shift: ns, scope: "editor search-panel", preventDefault: !0 },
    { key: "Mod-g", run: is, shift: ns, scope: "editor search-panel", preventDefault: !0 },
    { key: "Escape", run: Ad, scope: "editor search-panel" },
    { key: "Mod-Shift-l", run: O1 },
    { key: "Mod-Alt-g", run: US },
    { key: "Mod-d", run: o1, preventDefault: !0 },
  ];
class S1 {
  constructor(e) {
    this.view = e;
    let t = (this.query = e.state.field(Gt).query.spec);
    (this.commit = this.commit.bind(this)),
      (this.searchField = se("input", {
        value: t.search,
        placeholder: Xe(e, "Find"),
        "aria-label": Xe(e, "Find"),
        class: "cm-textfield",
        name: "search",
        form: "",
        "main-field": "true",
        onchange: this.commit,
        onkeyup: this.commit,
      })),
      (this.replaceField = se("input", {
        value: t.replace,
        placeholder: Xe(e, "Replace"),
        "aria-label": Xe(e, "Replace"),
        class: "cm-textfield",
        name: "replace",
        form: "",
        onchange: this.commit,
        onkeyup: this.commit,
      })),
      (this.caseField = se("input", {
        type: "checkbox",
        name: "case",
        form: "",
        checked: t.caseSensitive,
        onchange: this.commit,
      })),
      (this.reField = se("input", {
        type: "checkbox",
        name: "re",
        form: "",
        checked: t.regexp,
        onchange: this.commit,
      })),
      (this.wordField = se("input", {
        type: "checkbox",
        name: "word",
        form: "",
        checked: t.wholeWord,
        onchange: this.commit,
      }));
    function i(r, s, o) {
      return se("button", { class: "cm-button", name: r, onclick: s, type: "button" }, o);
    }
    this.dom = se("div", { onkeydown: (r) => this.keydown(r), class: "cm-search" }, [
      this.searchField,
      i("next", () => is(e), [Xe(e, "next")]),
      i("prev", () => ns(e), [Xe(e, "previous")]),
      i("select", () => p1(e), [Xe(e, "all")]),
      se("label", null, [this.caseField, Xe(e, "match case")]),
      se("label", null, [this.reField, Xe(e, "regexp")]),
      se("label", null, [this.wordField, Xe(e, "by word")]),
      ...(e.state.readOnly
        ? []
        : [
            se("br"),
            this.replaceField,
            i("replace", () => Wh(e), [Xe(e, "replace")]),
            i("replaceAll", () => g1(e), [Xe(e, "replace all")]),
          ]),
      se(
        "button",
        { name: "close", onclick: () => Ad(e), "aria-label": Xe(e, "close"), type: "button" },
        ["×"]
      ),
    ]);
  }
  commit() {
    let e = new Cd({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value,
    });
    e.eq(this.query) || ((this.query = e), this.view.dispatch({ effects: Rn.of(e) }));
  }
  keydown(e) {
    Wg(this.view, e, "search-panel")
      ? e.preventDefault()
      : e.keyCode == 13 && e.target == this.searchField
        ? (e.preventDefault(), (e.shiftKey ? ns : is)(this.view))
        : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Wh(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects) i.is(Rn) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    (this.query = e),
      (this.searchField.value = e.search),
      (this.replaceField.value = e.replace),
      (this.caseField.checked = e.caseSensitive),
      (this.reField.checked = e.regexp),
      (this.wordField.checked = e.wholeWord);
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(Hi).top;
  }
}
function Xe(n, e) {
  return n.state.phrase(e);
}
const gr = 30,
  mr = /[\s\.,:;?!]/;
function Jl(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e),
    r = n.state.doc.lineAt(t).to,
    s = Math.max(i.from, e - gr),
    o = Math.min(r, t + gr),
    l = n.state.sliceDoc(s, o);
  if (s != i.from) {
    for (let a = 0; a < gr; a++)
      if (!mr.test(l[a + 1]) && mr.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != r) {
    for (let a = l.length - 1; a > l.length - gr; a--)
      if (!mr.test(l[a - 1]) && mr.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return B.announce.of(
    `${n.state.phrase("current match")}. ${l} ${n.state.phrase("on line")} ${i.number}.`
  );
}
const b1 = B.baseTheme({
    ".cm-panel.cm-search": {
      padding: "2px 6px 4px",
      position: "relative",
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "4px",
        backgroundColor: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0,
      },
      "& input, & button, & label": { margin: ".2em .6em .2em 0" },
      "& input[type=checkbox]": { marginRight: ".2em" },
      "& label": { fontSize: "80%", whiteSpace: "pre" },
    },
    "&light .cm-searchMatch": { backgroundColor: "#ffff0054" },
    "&dark .cm-searchMatch": { backgroundColor: "#00ffff8a" },
    "&light .cm-searchMatch-selected": { backgroundColor: "#ff6a0054" },
    "&dark .cm-searchMatch-selected": { backgroundColor: "#ff00ff8a" },
  }),
  y1 = [Gt, Di.low(d1), b1];
class Md {
  constructor(e, t, i, r) {
    (this.state = e),
      (this.pos = t),
      (this.explicit = i),
      (this.view = r),
      (this.abortListeners = []),
      (this.abortOnDocChange = !1);
  }
  tokenBefore(e) {
    let t = Ee(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
    return t
      ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type }
      : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos),
      i = Math.max(t.from, this.pos - 250),
      r = t.text.slice(i - t.from, this.pos - t.from),
      s = r.search($d(e, !1));
    return s < 0 ? null : { from: i + s, to: this.pos, text: r.slice(s) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == "abort" &&
      this.abortListeners &&
      (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function jh(n) {
  let e = Object.keys(n).join(""),
    t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, "")), `[${t ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`;
}
function x1(n) {
  let e = Object.create(null),
    t = Object.create(null);
  for (let { label: r } of n) {
    e[r[0]] = !0;
    for (let s = 1; s < r.length; s++) t[r[s]] = !0;
  }
  let i = jh(e) + jh(t) + "*$";
  return [new RegExp("^" + i), new RegExp(i)];
}
function k1(n) {
  let e = n.map((r) => (typeof r == "string" ? { label: r } : r)),
    [t, i] = e.every((r) => /^\w+$/.test(r.label)) ? [/\w*$/, /\w+$/] : x1(e);
  return (r) => {
    let s = r.matchBefore(i);
    return s || r.explicit ? { from: s ? s.from : r.pos, options: e, validFor: t } : null;
  };
}
class Lh {
  constructor(e, t, i, r) {
    (this.completion = e), (this.source = t), (this.match = i), (this.score = r);
  }
}
function mi(n) {
  return n.selection.main.from;
}
function $d(n, e) {
  var t;
  let { source: i } = n,
    r = e && i[0] != "^",
    s = i[i.length - 1] != "$";
  return !r && !s
    ? n
    : new RegExp(
        `${r ? "^" : ""}(?:${i})${s ? "$" : ""}`,
        (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? "i" : ""
      );
}
const Ed = Dt.define();
function D1(n, e, t, i) {
  let { main: r } = n.selection,
    s = t - r.from,
    o = i - r.from;
  return Object.assign(
    Object.assign(
      {},
      n.changeByRange((l) => {
        if (l != r && t != i && n.sliceDoc(l.from + s, l.from + o) != n.sliceDoc(t, i))
          return { range: l };
        let a = n.toText(e);
        return {
          changes: { from: l.from + s, to: i == r.from ? l.to : l.from + o, insert: a },
          range: w.cursor(l.from + s + a.length),
        };
      })
    ),
    { scrollIntoView: !0, userEvent: "input.complete" }
  );
}
const qh = new WeakMap();
function C1(n) {
  if (!Array.isArray(n)) return n;
  let e = qh.get(n);
  return e || qh.set(n, (e = k1(n))), e;
}
const rs = X.define(),
  Tn = X.define();
class v1 {
  constructor(e) {
    (this.pattern = e),
      (this.chars = []),
      (this.folded = []),
      (this.any = []),
      (this.precise = []),
      (this.byWord = []),
      (this.score = 0),
      (this.matched = []);
    for (let t = 0; t < e.length; ) {
      let i = we(e, t),
        r = Je(i);
      this.chars.push(i);
      let s = e.slice(t, t + r),
        o = s.toUpperCase();
      this.folded.push(we(o == s ? s.toLowerCase() : o, 0)), (t += r);
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return (this.score = e), (this.matched = t), this;
  }
  match(e) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (e.length < this.pattern.length) return null;
    let { chars: t, folded: i, any: r, precise: s, byWord: o } = this;
    if (t.length == 1) {
      let b = we(e, 0),
        D = Je(b),
        v = D == e.length ? 0 : -100;
      if (b != t[0])
        if (b == i[0]) v += -200;
        else return null;
      return this.ret(v, [0, D]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length,
      h = 0;
    if (l < 0) {
      for (let b = 0, D = Math.min(e.length, 200); b < D && h < a; ) {
        let v = we(e, b);
        (v == t[h] || v == i[h]) && (r[h++] = b), (b += Je(v));
      }
      if (h < a) return null;
    }
    let u = 0,
      c = 0,
      f = !1,
      d = 0,
      p = -1,
      O = -1,
      g = /[a-z]/.test(e),
      S = !0;
    for (let b = 0, D = Math.min(e.length, 200), v = 0; b < D && c < a; ) {
      let k = we(e, b);
      l < 0 &&
        (u < a && k == t[u] && (s[u++] = b),
        d < a && (k == t[d] || k == i[d] ? (d == 0 && (p = b), (O = b + 1), d++) : (d = 0)));
      let y,
        Q =
          k < 255
            ? (k >= 48 && k <= 57) || (k >= 97 && k <= 122)
              ? 2
              : k >= 65 && k <= 90
                ? 1
                : 0
            : (y = vl(k)) != y.toLowerCase()
              ? 1
              : y != y.toUpperCase()
                ? 2
                : 0;
      (!b || (Q == 1 && g) || (v == 0 && Q != 0)) &&
        (t[c] == k || (i[c] == k && (f = !0)) ? (o[c++] = b) : o.length && (S = !1)),
        (v = Q),
        (b += Je(k));
    }
    return c == a && o[0] == 0 && S
      ? this.result(-100 + (f ? -200 : 0), o, e)
      : d == a && p == 0
        ? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O])
        : l > -1
          ? this.ret(-700 - e.length, [l, l + this.pattern.length])
          : d == a
            ? this.ret(-200 + -700 - e.length, [p, O])
            : c == a
              ? this.result(-100 + (f ? -200 : 0) + -700 + (S ? 0 : -1100), o, e)
              : t.length == 2
                ? null
                : this.result((r[0] ? -700 : 0) + -200 + -1100, r, e);
  }
  result(e, t, i) {
    let r = [],
      s = 0;
    for (let o of t) {
      let l = o + (this.astral ? Je(we(i, o)) : 1);
      s && r[s - 1] == o ? (r[s - 1] = l) : ((r[s++] = o), (r[s++] = l));
    }
    return this.ret(e - i.length, r);
  }
}
class w1 {
  constructor(e) {
    (this.pattern = e), (this.matched = []), (this.score = 0), (this.folded = e.toLowerCase());
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let t = e.slice(0, this.pattern.length),
      i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null
      ? null
      : ((this.matched = [0, t.length]),
        (this.score = i + (e.length == this.pattern.length ? 0 : -100)),
        this);
  }
}
const Ce = T.define({
  combine(n) {
    return Ct(
      n,
      {
        activateOnTyping: !0,
        activateOnCompletion: () => !1,
        activateOnTypingDelay: 100,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => "",
        optionClass: () => "",
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        positionInfo: Q1,
        filterStrict: !1,
        compareCompletions: (e, t) => e.label.localeCompare(t.label),
        interactionDelay: 75,
        updateSyncTime: 100,
      },
      {
        defaultKeymap: (e, t) => e && t,
        closeOnBlur: (e, t) => e && t,
        icons: (e, t) => e && t,
        tooltipClass: (e, t) => (i) => Ih(e(i), t(i)),
        optionClass: (e, t) => (i) => Ih(e(i), t(i)),
        addToOptions: (e, t) => e.concat(t),
        filterStrict: (e, t) => e || t,
      }
    );
  },
});
function Ih(n, e) {
  return n ? (e ? n + " " + e : n) : e;
}
function Q1(n, e, t, i, r, s) {
  let o = n.textDirection == he.RTL,
    l = o,
    a = !1,
    h = "top",
    u,
    c,
    f = e.left - r.left,
    d = r.right - e.right,
    p = i.right - i.left,
    O = i.bottom - i.top;
  if ((l && f < Math.min(p, d) ? (l = !1) : !l && d < Math.min(p, f) && (l = !0), p <= (l ? f : d)))
    (u = Math.max(r.top, Math.min(t.top, r.bottom - O)) - e.top), (c = Math.min(400, l ? f : d));
  else {
    (a = !0), (c = Math.min(400, (o ? e.right : r.right - e.left) - 30));
    let b = r.bottom - e.bottom;
    b >= O || b > e.top ? (u = t.bottom - e.top) : ((h = "bottom"), (u = e.bottom - t.top));
  }
  let g = (e.bottom - e.top) / s.offsetHeight,
    S = (e.right - e.left) / s.offsetWidth;
  return {
    style: `${h}: ${u / g}px; max-width: ${c / S}px`,
    class: "cm-completionInfo-" + (a ? (o ? "left-narrow" : "right-narrow") : l ? "left" : "right"),
  };
}
function P1(n) {
  let e = n.addToOptions.slice();
  return (
    n.icons &&
      e.push({
        render(t) {
          let i = document.createElement("div");
          return (
            i.classList.add("cm-completionIcon"),
            t.type && i.classList.add(...t.type.split(/\s+/g).map((r) => "cm-completionIcon-" + r)),
            i.setAttribute("aria-hidden", "true"),
            i
          );
        },
        position: 20,
      }),
    e.push(
      {
        render(t, i, r, s) {
          let o = document.createElement("span");
          o.className = "cm-completionLabel";
          let l = t.displayLabel || t.label,
            a = 0;
          for (let h = 0; h < s.length; ) {
            let u = s[h++],
              c = s[h++];
            u > a && o.appendChild(document.createTextNode(l.slice(a, u)));
            let f = o.appendChild(document.createElement("span"));
            f.appendChild(document.createTextNode(l.slice(u, c))),
              (f.className = "cm-completionMatchedText"),
              (a = c);
          }
          return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
        },
        position: 50,
      },
      {
        render(t) {
          if (!t.detail) return null;
          let i = document.createElement("span");
          return (i.className = "cm-completionDetail"), (i.textContent = t.detail), i;
        },
        position: 80,
      }
    ),
    e.sort((t, i) => t.position - i.position).map((t) => t.render)
  );
}
function Ks(n, e, t) {
  if (n <= t) return { from: 0, to: n };
  if ((e < 0 && (e = 0), e <= n >> 1)) {
    let r = Math.floor(e / t);
    return { from: r * t, to: (r + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class A1 {
  constructor(e, t, i) {
    (this.view = e),
      (this.stateField = t),
      (this.applyCompletion = i),
      (this.info = null),
      (this.infoDestroy = null),
      (this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (a) => this.placeInfo(a),
        key: this,
      }),
      (this.space = null),
      (this.currentClass = "");
    let r = e.state.field(t),
      { options: s, selected: o } = r.open,
      l = e.state.facet(Ce);
    (this.optionContent = P1(l)),
      (this.optionClass = l.optionClass),
      (this.tooltipClass = l.tooltipClass),
      (this.range = Ks(s.length, o, l.maxRenderedOptions)),
      (this.dom = document.createElement("div")),
      (this.dom.className = "cm-tooltip-autocomplete"),
      this.updateTooltipClass(e.state),
      this.dom.addEventListener("mousedown", (a) => {
        let { options: h } = e.state.field(t).open;
        for (let u = a.target, c; u && u != this.dom; u = u.parentNode)
          if (u.nodeName == "LI" && (c = /-(\d+)$/.exec(u.id)) && +c[1] < h.length) {
            this.applyCompletion(e, h[+c[1]]), a.preventDefault();
            return;
          }
      }),
      this.dom.addEventListener("focusout", (a) => {
        let h = e.state.field(this.stateField, !1);
        h &&
          h.tooltip &&
          e.state.facet(Ce).closeOnBlur &&
          a.relatedTarget != e.contentDOM &&
          e.dispatch({ effects: Tn.of(null) });
      }),
      this.showOptions(s, r.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(),
      (this.list = this.dom.appendChild(this.createListBox(e, t, this.range))),
      this.list.addEventListener("scroll", () => {
        this.info && this.view.requestMeasure(this.placeInfoReq);
      });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField),
      r = e.startState.field(this.stateField);
    if ((this.updateTooltipClass(e.state), i != r)) {
      let { options: s, selected: o, disabled: l } = i.open;
      (!r.open || r.open.options != s) &&
        ((this.range = Ks(s.length, o, e.state.facet(Ce).maxRenderedOptions)),
        this.showOptions(s, i.id)),
        this.updateSel(),
        l != ((t = r.open) === null || t === void 0 ? void 0 : t.disabled) &&
          this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(" ")) i && this.dom.classList.remove(i);
      for (let i of t.split(" ")) i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    (this.space = e), this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField),
      t = e.open;
    if (
      (((t.selected > -1 && t.selected < this.range.from) || t.selected >= this.range.to) &&
        ((this.range = Ks(
          t.options.length,
          t.selected,
          this.view.state.facet(Ce).maxRenderedOptions
        )),
        this.showOptions(t.options, e.id)),
      this.updateSelectedOption(t.selected))
    ) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected],
        { info: r } = i;
      if (!r) return;
      let s = typeof r == "string" ? document.createTextNode(r) : r(i);
      if (!s) return;
      "then" in s
        ? s
            .then((o) => {
              o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
            })
            .catch((o) => qe(this.view.state, o, "completion info"))
        : this.addInfoPane(s, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = (this.info = document.createElement("div"));
    if (((i.className = "cm-tooltip cm-completionInfo"), e.nodeType != null))
      i.appendChild(e), (this.infoDestroy = null);
    else {
      let { dom: r, destroy: s } = e;
      i.appendChild(r), (this.infoDestroy = s || null);
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, r = this.range.from; i; i = i.nextSibling, r++)
      i.nodeName != "LI" || !i.id
        ? r--
        : r == e
          ? i.hasAttribute("aria-selected") || (i.setAttribute("aria-selected", "true"), (t = i))
          : i.hasAttribute("aria-selected") && i.removeAttribute("aria-selected");
    return t && $1(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(),
      i = this.info.getBoundingClientRect(),
      r = e.getBoundingClientRect(),
      s = this.space;
    if (!s) {
      let o = this.dom.ownerDocument.defaultView || window;
      s = { left: 0, top: 0, right: o.innerWidth, bottom: o.innerHeight };
    }
    return r.top > Math.min(s.bottom, t.bottom) - 10 || r.bottom < Math.max(s.top, t.top) + 10
      ? null
      : this.view.state.facet(Ce).positionInfo(this.view, t, r, i, s, this.dom);
  }
  placeInfo(e) {
    this.info &&
      (e
        ? (e.style && (this.info.style.cssText = e.style),
          (this.info.className = "cm-tooltip cm-completionInfo " + (e.class || "")))
        : (this.info.style.cssText = "top: -1e6px"));
  }
  createListBox(e, t, i) {
    const r = document.createElement("ul");
    (r.id = t),
      r.setAttribute("role", "listbox"),
      r.setAttribute("aria-expanded", "true"),
      r.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let s = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o],
        { section: h } = l;
      if (h) {
        let f = typeof h == "string" ? h : h.name;
        if (f != s && (o > i.from || i.from == 0))
          if (((s = f), typeof h != "string" && h.header)) r.appendChild(h.header(h));
          else {
            let d = r.appendChild(document.createElement("completion-section"));
            d.textContent = f;
          }
      }
      const u = r.appendChild(document.createElement("li"));
      (u.id = t + "-" + o), u.setAttribute("role", "option");
      let c = this.optionClass(l);
      c && (u.className = c);
      for (let f of this.optionContent) {
        let d = f(l, this.view.state, this.view, a);
        d && u.appendChild(d);
      }
    }
    return (
      i.from && r.classList.add("cm-completionListIncompleteTop"),
      i.to < e.length && r.classList.add("cm-completionListIncompleteBottom"),
      r
    );
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), (this.info = null));
  }
  destroy() {
    this.destroyInfo();
  }
}
function M1(n, e) {
  return (t) => new A1(t, n, e);
}
function $1(n, e) {
  let t = n.getBoundingClientRect(),
    i = e.getBoundingClientRect(),
    r = t.height / n.offsetHeight;
  i.top < t.top
    ? (n.scrollTop -= (t.top - i.top) / r)
    : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / r);
}
function _h(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function E1(n, e) {
  let t = [],
    i = null,
    r = (h) => {
      t.push(h);
      let { section: u } = h.completion;
      if (u) {
        i || (i = []);
        let c = typeof u == "string" ? u : u.name;
        i.some((f) => f.name == c) || i.push(typeof u == "string" ? { name: c } : u);
      }
    },
    s = e.facet(Ce);
  for (let h of n)
    if (h.hasResult()) {
      let u = h.result.getMatch;
      if (h.result.filter === !1)
        for (let c of h.result.options) r(new Lh(c, h.source, u ? u(c) : [], 1e9 - t.length));
      else {
        let c = e.sliceDoc(h.from, h.to),
          f,
          d = s.filterStrict ? new w1(c) : new v1(c);
        for (let p of h.result.options)
          if ((f = d.match(p.label))) {
            let O = p.displayLabel ? (u ? u(p, f.matched) : []) : f.matched;
            r(new Lh(p, h.source, O, f.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let h = Object.create(null),
      u = 0,
      c = (f, d) => {
        var p, O;
        return (
          ((p = f.rank) !== null && p !== void 0 ? p : 1e9) -
            ((O = d.rank) !== null && O !== void 0 ? O : 1e9) || (f.name < d.name ? -1 : 1)
        );
      };
    for (let f of i.sort(c)) (u -= 1e5), (h[f.name] = u);
    for (let f of t) {
      let { section: d } = f.completion;
      d && (f.score += h[typeof d == "string" ? d : d.name]);
    }
  }
  let o = [],
    l = null,
    a = s.compareCompletions;
  for (let h of t.sort((u, c) => c.score - u.score || a(u.completion, c.completion))) {
    let u = h.completion;
    !l ||
    l.label != u.label ||
    l.detail != u.detail ||
    (l.type != null && u.type != null && l.type != u.type) ||
    l.apply != u.apply ||
    l.boost != u.boost
      ? o.push(h)
      : _h(h.completion) > _h(l) && (o[o.length - 1] = h),
      (l = h.completion);
  }
  return o;
}
class $i {
  constructor(e, t, i, r, s, o) {
    (this.options = e),
      (this.attrs = t),
      (this.tooltip = i),
      (this.timestamp = r),
      (this.selected = s),
      (this.disabled = o);
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length
      ? this
      : new $i(this.options, Vh(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, r, s, o) {
    if (r && !o && e.some((h) => h.isPending)) return r.setDisabled();
    let l = E1(e, t);
    if (!l.length) return r && e.some((h) => h.isPending) ? r.setDisabled() : null;
    let a = t.facet(Ce).selectOnOpen ? 0 : -1;
    if (r && r.selected != a && r.selected != -1) {
      let h = r.options[r.selected].completion;
      for (let u = 0; u < l.length; u++)
        if (l[u].completion == h) {
          a = u;
          break;
        }
    }
    return new $i(
      l,
      Vh(i, a),
      {
        pos: e.reduce((h, u) => (u.hasResult() ? Math.min(h, u.from) : h), 1e8),
        create: Z1,
        above: s.aboveCursor,
      },
      r ? r.timestamp : Date.now(),
      a,
      !1
    );
  }
  map(e) {
    return new $i(
      this.options,
      this.attrs,
      Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }),
      this.timestamp,
      this.selected,
      this.disabled
    );
  }
  setDisabled() {
    return new $i(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class ss {
  constructor(e, t, i) {
    (this.active = e), (this.id = t), (this.open = i);
  }
  static start() {
    return new ss(F1, "cm-ac-" + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e,
      i = t.facet(Ce),
      s = (i.override || t.languageDataAt("autocomplete", mi(t)).map(C1)).map((a) =>
        (
          this.active.find((u) => u.source == a) ||
          new tt(a, this.active.some((u) => u.state != 0) ? 1 : 0)
        ).update(e, i)
      );
    s.length == this.active.length && s.every((a, h) => a == this.active[h]) && (s = this.active);
    let o = this.open,
      l = e.effects.some((a) => a.is(ea));
    o && e.docChanged && (o = o.map(e.changes)),
      e.selection ||
      s.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) ||
      !B1(s, this.active) ||
      l
        ? (o = $i.build(s, t, this.id, o, i, l))
        : o && o.disabled && !s.some((a) => a.isPending) && (o = null),
      !o &&
        s.every((a) => !a.isPending) &&
        s.some((a) => a.hasResult()) &&
        (s = s.map((a) => (a.hasResult() ? new tt(a.source, 0) : a)));
    for (let a of e.effects) a.is(Rd) && (o = o && o.setSelected(a.value, this.id));
    return s == this.active && o == this.open ? this : new ss(s, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? R1 : T1;
  }
}
function B1(n, e) {
  if (n == e) return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); ) t++;
    for (; i < e.length && !e[i].hasResult(); ) i++;
    let r = t == n.length,
      s = i == e.length;
    if (r || s) return r == s;
    if (n[t++].result != e[i++].result) return !1;
  }
}
const R1 = { "aria-autocomplete": "list" },
  T1 = {};
function Vh(n, e) {
  let t = { "aria-autocomplete": "list", "aria-haspopup": "listbox", "aria-controls": n };
  return e > -1 && (t["aria-activedescendant"] = n + "-" + e), t;
}
const F1 = [];
function Bd(n, e) {
  if (n.isUserEvent("input.complete")) {
    let i = n.annotation(Ed);
    if (i && e.activateOnCompletion(i)) return 12;
  }
  let t = n.isUserEvent("input.type");
  return t && e.activateOnTyping
    ? 5
    : t
      ? 1
      : n.isUserEvent("delete.backward")
        ? 2
        : n.selection
          ? 8
          : n.docChanged
            ? 16
            : 0;
}
class tt {
  constructor(e, t, i = !1) {
    (this.source = e), (this.state = t), (this.explicit = i);
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = Bd(e, t),
      r = this;
    (i & 8 || (i & 16 && this.touches(e))) && (r = new tt(r.source, 0)),
      i & 4 && r.state == 0 && (r = new tt(this.source, 1)),
      (r = r.updateFor(e, i));
    for (let s of e.effects)
      if (s.is(rs)) r = new tt(r.source, 1, s.value);
      else if (s.is(Tn)) r = new tt(r.source, 0);
      else if (s.is(ea)) for (let o of s.value) o.source == r.source && (r = o);
    return r;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(mi(e.state));
  }
}
class zi extends tt {
  constructor(e, t, i, r, s, o) {
    super(e, 3, t), (this.limit = i), (this.result = r), (this.from = s), (this.to = o);
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3)) return this.map(e.changes);
    let r = this.result;
    r.map && !e.changes.empty && (r = r.map(r, e.changes));
    let s = e.changes.mapPos(this.from),
      o = e.changes.mapPos(this.to, 1),
      l = mi(e.state);
    if (l > o || !r || (t & 2 && (mi(e.startState) == this.from || l < this.limit)))
      return new tt(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return z1(r.validFor, e.state, s, o)
      ? new zi(this.source, this.explicit, a, r, s, o)
      : r.update && (r = r.update(r, s, o, new Md(e.state, l, !1)))
        ? new zi(
            this.source,
            this.explicit,
            a,
            r,
            r.from,
            (i = r.to) !== null && i !== void 0 ? i : mi(e.state)
          )
        : new tt(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty
      ? this
      : (this.result.map ? this.result.map(this.result, e) : this.result)
        ? new zi(
            this.source,
            this.explicit,
            e.mapPos(this.limit),
            this.result,
            e.mapPos(this.from),
            e.mapPos(this.to, 1)
          )
        : new tt(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function z1(n, e, t, i) {
  if (!n) return !1;
  let r = e.sliceDoc(t, i);
  return typeof n == "function" ? n(r, t, i, e) : $d(n, !0).test(r);
}
const ea = X.define({
    map(n, e) {
      return n.map((t) => t.map(e));
    },
  }),
  Rd = X.define(),
  Le = Ae.define({
    create() {
      return ss.start();
    },
    update(n, e) {
      return n.update(e);
    },
    provide: (n) => [Wl.from(n, (e) => e.tooltip), B.contentAttributes.from(n, (e) => e.attrs)],
  });
function ta(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(Le).active.find((r) => r.source == e.source);
  return i instanceof zi
    ? (typeof t == "string"
        ? n.dispatch(
            Object.assign(Object.assign({}, D1(n.state, t, i.from, i.to)), {
              annotations: Ed.of(e.completion),
            })
          )
        : t(n, e.completion, i.from, i.to),
      !0)
    : !1;
}
const Z1 = M1(Le, ta);
function Sr(n, e = "option") {
  return (t) => {
    let i = t.state.field(Le, !1);
    if (
      !i ||
      !i.open ||
      i.open.disabled ||
      Date.now() - i.open.timestamp < t.state.facet(Ce).interactionDelay
    )
      return !1;
    let r = 1,
      s;
    e == "page" &&
      (s = sf(t, i.open.tooltip)) &&
      (r = Math.max(
        2,
        Math.floor(s.dom.offsetHeight / s.dom.querySelector("li").offsetHeight) - 1
      ));
    let { length: o } = i.open.options,
      l = i.open.selected > -1 ? i.open.selected + r * (n ? 1 : -1) : n ? 0 : o - 1;
    return (
      l < 0 ? (l = e == "page" ? 0 : o - 1) : l >= o && (l = e == "page" ? o - 1 : 0),
      t.dispatch({ effects: Rd.of(l) }),
      !0
    );
  };
}
const W1 = (n) => {
    let e = n.state.field(Le, !1);
    return n.state.readOnly ||
      !e ||
      !e.open ||
      e.open.selected < 0 ||
      e.open.disabled ||
      Date.now() - e.open.timestamp < n.state.facet(Ce).interactionDelay
      ? !1
      : ta(n, e.open.options[e.open.selected]);
  },
  Xh = (n) => (n.state.field(Le, !1) ? (n.dispatch({ effects: rs.of(!0) }), !0) : !1),
  j1 = (n) => {
    let e = n.state.field(Le, !1);
    return !e || !e.active.some((t) => t.state != 0)
      ? !1
      : (n.dispatch({ effects: Tn.of(null) }), !0);
  };
class L1 {
  constructor(e, t) {
    (this.active = e),
      (this.context = t),
      (this.time = Date.now()),
      (this.updates = []),
      (this.done = void 0);
  }
}
const q1 = 50,
  I1 = 1e3,
  _1 = Oe.fromClass(
    class {
      constructor(n) {
        (this.view = n),
          (this.debounceUpdate = -1),
          (this.running = []),
          (this.debounceAccept = -1),
          (this.pendingStart = !1),
          (this.composing = 0);
        for (let e of n.state.field(Le).active) e.isPending && this.startQuery(e);
      }
      update(n) {
        let e = n.state.field(Le),
          t = n.state.facet(Ce);
        if (!n.selectionSet && !n.docChanged && n.startState.field(Le) == e) return;
        let i = n.transactions.some((s) => {
          let o = Bd(s, t);
          return o & 8 || ((s.selection || s.docChanged) && !(o & 3));
        });
        for (let s = 0; s < this.running.length; s++) {
          let o = this.running[s];
          if (
            i ||
            (o.context.abortOnDocChange && n.docChanged) ||
            (o.updates.length + n.transactions.length > q1 && Date.now() - o.time > I1)
          ) {
            for (let l of o.context.abortListeners)
              try {
                l();
              } catch (a) {
                qe(this.view.state, a);
              }
            (o.context.abortListeners = null), this.running.splice(s--, 1);
          } else o.updates.push(...n.transactions);
        }
        this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
          n.transactions.some((s) => s.effects.some((o) => o.is(rs))) && (this.pendingStart = !0);
        let r = this.pendingStart ? 50 : t.activateOnTypingDelay;
        if (
          ((this.debounceUpdate = e.active.some(
            (s) => s.isPending && !this.running.some((o) => o.active.source == s.source)
          )
            ? setTimeout(() => this.startUpdate(), r)
            : -1),
          this.composing != 0)
        )
          for (let s of n.transactions)
            s.isUserEvent("input.type")
              ? (this.composing = 2)
              : this.composing == 2 && s.selection && (this.composing = 3);
      }
      startUpdate() {
        (this.debounceUpdate = -1), (this.pendingStart = !1);
        let { state: n } = this.view,
          e = n.field(Le);
        for (let t of e.active)
          t.isPending &&
            !this.running.some((i) => i.active.source == t.source) &&
            this.startQuery(t);
        this.running.length &&
          e.open &&
          e.open.disabled &&
          (this.debounceAccept = setTimeout(
            () => this.accept(),
            this.view.state.facet(Ce).updateSyncTime
          ));
      }
      startQuery(n) {
        let { state: e } = this.view,
          t = mi(e),
          i = new Md(e, t, n.explicit, this.view),
          r = new L1(n, i);
        this.running.push(r),
          Promise.resolve(n.source(i)).then(
            (s) => {
              r.context.aborted || ((r.done = s || null), this.scheduleAccept());
            },
            (s) => {
              this.view.dispatch({ effects: Tn.of(null) }), qe(this.view.state, s);
            }
          );
      }
      scheduleAccept() {
        this.running.every((n) => n.done !== void 0)
          ? this.accept()
          : this.debounceAccept < 0 &&
            (this.debounceAccept = setTimeout(
              () => this.accept(),
              this.view.state.facet(Ce).updateSyncTime
            ));
      }
      accept() {
        var n;
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), (this.debounceAccept = -1);
        let e = [],
          t = this.view.state.facet(Ce),
          i = this.view.state.field(Le);
        for (let r = 0; r < this.running.length; r++) {
          let s = this.running[r];
          if (s.done === void 0) continue;
          if ((this.running.splice(r--, 1), s.done)) {
            let l = mi(s.updates.length ? s.updates[0].startState : this.view.state),
              a = Math.min(l, s.done.from + (s.active.explicit ? 0 : 1)),
              h = new zi(
                s.active.source,
                s.active.explicit,
                a,
                s.done,
                s.done.from,
                (n = s.done.to) !== null && n !== void 0 ? n : l
              );
            for (let u of s.updates) h = h.update(u, t);
            if (h.hasResult()) {
              e.push(h);
              continue;
            }
          }
          let o = i.active.find((l) => l.source == s.active.source);
          if (o && o.isPending)
            if (s.done == null) {
              let l = new tt(s.active.source, 0);
              for (let a of s.updates) l = l.update(a, t);
              l.isPending || e.push(l);
            } else this.startQuery(o);
        }
        (e.length || (i.open && i.open.disabled)) && this.view.dispatch({ effects: ea.of(e) });
      }
    },
    {
      eventHandlers: {
        blur(n) {
          let e = this.view.state.field(Le, !1);
          if (e && e.tooltip && this.view.state.facet(Ce).closeOnBlur) {
            let t = e.open && sf(this.view, e.open.tooltip);
            (!t || !t.dom.contains(n.relatedTarget)) &&
              setTimeout(() => this.view.dispatch({ effects: Tn.of(null) }), 10);
          }
        },
        compositionstart() {
          this.composing = 1;
        },
        compositionend() {
          this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: rs.of(!1) }), 20),
            (this.composing = 0);
        },
      },
    }
  ),
  V1 = typeof navigator == "object" && /Win/.test(navigator.platform),
  X1 = Di.highest(
    B.domEventHandlers({
      keydown(n, e) {
        let t = e.state.field(Le, !1);
        if (
          !t ||
          !t.open ||
          t.open.disabled ||
          t.open.selected < 0 ||
          n.key.length > 1 ||
          (n.ctrlKey && !(V1 && n.altKey)) ||
          n.metaKey
        )
          return !1;
        let i = t.open.options[t.open.selected],
          r = t.active.find((o) => o.source == i.source),
          s = i.completion.commitCharacters || r.result.commitCharacters;
        return s && s.indexOf(n.key) > -1 && ta(e, i), !1;
      },
    })
  ),
  Y1 = B.baseTheme({
    ".cm-tooltip.cm-tooltip-autocomplete": {
      "& > ul": {
        fontFamily: "monospace",
        whiteSpace: "nowrap",
        overflow: "hidden auto",
        maxWidth_fallback: "700px",
        maxWidth: "min(700px, 95vw)",
        minWidth: "250px",
        maxHeight: "10em",
        height: "100%",
        listStyle: "none",
        margin: 0,
        padding: 0,
        "& > li, & > completion-section": { padding: "1px 3px", lineHeight: 1.2 },
        "& > li": { overflowX: "hidden", textOverflow: "ellipsis", cursor: "pointer" },
        "& > completion-section": {
          display: "list-item",
          borderBottom: "1px solid silver",
          paddingLeft: "0.5em",
          opacity: 0.7,
        },
      },
    },
    "&light .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#17c", color: "white" },
    "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#777" },
    "&dark .cm-tooltip-autocomplete ul li[aria-selected]": { background: "#347", color: "white" },
    "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: "#444" },
    ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
      content: '"···"',
      opacity: 0.5,
      display: "block",
      textAlign: "center",
    },
    ".cm-tooltip.cm-completionInfo": {
      position: "absolute",
      padding: "3px 9px",
      width: "max-content",
      maxWidth: "400px",
      boxSizing: "border-box",
      whiteSpace: "pre-line",
    },
    ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
    ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
    ".cm-completionInfo.cm-completionInfo-left-narrow": { right: "30px" },
    ".cm-completionInfo.cm-completionInfo-right-narrow": { left: "30px" },
    "&light .cm-snippetField": { backgroundColor: "#00000022" },
    "&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
    ".cm-snippetFieldPosition": {
      verticalAlign: "text-top",
      width: 0,
      height: "1.15em",
      display: "inline-block",
      margin: "0 -0.7px -.7em",
      borderLeft: "1.4px dotted #888",
    },
    ".cm-completionMatchedText": { textDecoration: "underline" },
    ".cm-completionDetail": { marginLeft: "0.5em", fontStyle: "italic" },
    ".cm-completionIcon": {
      fontSize: "90%",
      width: ".8em",
      display: "inline-block",
      textAlign: "center",
      paddingRight: ".6em",
      opacity: "0.6",
      boxSizing: "content-box",
    },
    ".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: "'ƒ'" } },
    ".cm-completionIcon-class": { "&:after": { content: "'○'" } },
    ".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
    ".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
    ".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
    ".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
    ".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
    ".cm-completionIcon-property": { "&:after": { content: "'□'" } },
    ".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
    ".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
    ".cm-completionIcon-text": {
      "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" },
    },
  }),
  Fn = { brackets: ["(", "[", "{", "'", '"'], before: ")]}:;>", stringPrefixes: [] },
  pi = X.define({
    map(n, e) {
      let t = e.mapPos(n, -1, Re.TrackAfter);
      return t ?? void 0;
    },
  }),
  ia = new (class extends Si {})();
ia.startSide = 1;
ia.endSide = -1;
const Td = Ae.define({
  create() {
    return K.empty;
  },
  update(n, e) {
    if (((n = n.map(e.changes)), e.selection)) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      n = n.update({ filter: (i) => i >= t.from && i <= t.to });
    }
    for (let t of e.effects) t.is(pi) && (n = n.update({ add: [ia.range(t.value, t.value + 1)] }));
    return n;
  },
});
function Fd() {
  return [G1, Td];
}
const Js = "()[]{}<>";
function zd(n) {
  for (let e = 0; e < Js.length; e += 2) if (Js.charCodeAt(e) == n) return Js.charAt(e + 1);
  return vl(n < 128 ? n : n + 1);
}
function Zd(n, e) {
  return n.languageDataAt("closeBrackets", e)[0] || Fn;
}
const N1 = typeof navigator == "object" && /Android\b/.test(navigator.userAgent),
  G1 = B.inputHandler.of((n, e, t, i) => {
    if ((N1 ? n.composing : n.compositionStarted) || n.state.readOnly) return !1;
    let r = n.state.selection.main;
    if (i.length > 2 || (i.length == 2 && Je(we(i, 0)) == 1) || e != r.from || t != r.to) return !1;
    let s = K1(n.state, i);
    return s ? (n.dispatch(s), !0) : !1;
  }),
  U1 = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let i = Zd(n, n.selection.main.head).brackets || Fn.brackets,
      r = null,
      s = n.changeByRange((o) => {
        if (o.empty) {
          let l = J1(n.doc, o.head);
          for (let a of i)
            if (a == l && Cs(n.doc, o.head) == zd(we(a, 0)))
              return {
                changes: { from: o.head - a.length, to: o.head + a.length },
                range: w.cursor(o.head - a.length),
              };
        }
        return { range: (r = o) };
      });
    return r || e(n.update(s, { scrollIntoView: !0, userEvent: "delete.backward" })), !r;
  },
  H1 = [{ key: "Backspace", run: U1 }];
function K1(n, e) {
  let t = Zd(n, n.selection.main.head),
    i = t.brackets || Fn.brackets;
  for (let r of i) {
    let s = zd(we(r, 0));
    if (e == r)
      return s == r ? ib(n, r, i.indexOf(r + r + r) > -1, t) : eb(n, r, s, t.before || Fn.before);
    if (e == s && Wd(n, n.selection.main.from)) return tb(n, r, s);
  }
  return null;
}
function Wd(n, e) {
  let t = !1;
  return (
    n.field(Td).between(0, n.doc.length, (i) => {
      i == e && (t = !0);
    }),
    t
  );
}
function Cs(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, Je(we(t, 0)));
}
function J1(n, e) {
  let t = n.sliceString(e - 2, e);
  return Je(we(t, 0)) == t.length ? t : t.slice(1);
}
function eb(n, e, t, i) {
  let r = null,
    s = n.changeByRange((o) => {
      if (!o.empty)
        return {
          changes: [
            { insert: e, from: o.from },
            { insert: t, from: o.to },
          ],
          effects: pi.of(o.to + e.length),
          range: w.range(o.anchor + e.length, o.head + e.length),
        };
      let l = Cs(n.doc, o.head);
      return !l || /\s/.test(l) || i.indexOf(l) > -1
        ? {
            changes: { insert: e + t, from: o.head },
            effects: pi.of(o.head + e.length),
            range: w.cursor(o.head + e.length),
          }
        : { range: (r = o) };
    });
  return r ? null : n.update(s, { scrollIntoView: !0, userEvent: "input.type" });
}
function tb(n, e, t) {
  let i = null,
    r = n.changeByRange((s) =>
      s.empty && Cs(n.doc, s.head) == t
        ? {
            changes: { from: s.head, to: s.head + t.length, insert: t },
            range: w.cursor(s.head + t.length),
          }
        : (i = { range: s })
    );
  return i ? null : n.update(r, { scrollIntoView: !0, userEvent: "input.type" });
}
function ib(n, e, t, i) {
  let r = i.stringPrefixes || Fn.stringPrefixes,
    s = null,
    o = n.changeByRange((l) => {
      if (!l.empty)
        return {
          changes: [
            { insert: e, from: l.from },
            { insert: e, from: l.to },
          ],
          effects: pi.of(l.to + e.length),
          range: w.range(l.anchor + e.length, l.head + e.length),
        };
      let a = l.head,
        h = Cs(n.doc, a),
        u;
      if (h == e) {
        if (Yh(n, a))
          return {
            changes: { insert: e + e, from: a },
            effects: pi.of(a + e.length),
            range: w.cursor(a + e.length),
          };
        if (Wd(n, a)) {
          let f = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
          return {
            changes: { from: a, to: a + f.length, insert: f },
            range: w.cursor(a + f.length),
          };
        }
      } else {
        if (
          t &&
          n.sliceDoc(a - 2 * e.length, a) == e + e &&
          (u = Nh(n, a - 2 * e.length, r)) > -1 &&
          Yh(n, u)
        )
          return {
            changes: { insert: e + e + e + e, from: a },
            effects: pi.of(a + e.length),
            range: w.cursor(a + e.length),
          };
        if (n.charCategorizer(a)(h) != ue.Word && Nh(n, a, r) > -1 && !nb(n, a, e, r))
          return {
            changes: { insert: e + e, from: a },
            effects: pi.of(a + e.length),
            range: w.cursor(a + e.length),
          };
      }
      return { range: (s = l) };
    });
  return s ? null : n.update(o, { scrollIntoView: !0, userEvent: "input.type" });
}
function Yh(n, e) {
  let t = Ee(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function nb(n, e, t, i) {
  let r = Ee(n).resolveInner(e, -1),
    s = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(r.from, Math.min(r.to, r.from + t.length + s)),
      a = l.indexOf(t);
    if (!a || (a > -1 && i.indexOf(l.slice(0, a)) > -1)) {
      let u = r.firstChild;
      for (; u && u.from == r.from && u.to - u.from > t.length + a; ) {
        if (n.sliceDoc(u.to - t.length, u.to) == t) return !1;
        u = u.firstChild;
      }
      return !0;
    }
    let h = r.to == e && r.parent;
    if (!h) break;
    r = h;
  }
  return !1;
}
function Nh(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != ue.Word) return e;
  for (let r of t) {
    let s = e - r.length;
    if (n.sliceDoc(s, e) == r && i(n.sliceDoc(s - 1, s)) != ue.Word) return s;
  }
  return -1;
}
function rb(n = {}) {
  return [X1, Le, Ce.of(n), _1, sb, Y1];
}
const jd = [
    { key: "Ctrl-Space", run: Xh },
    { mac: "Alt-`", run: Xh },
    { key: "Escape", run: j1 },
    { key: "ArrowDown", run: Sr(!0) },
    { key: "ArrowUp", run: Sr(!1) },
    { key: "PageDown", run: Sr(!0, "page") },
    { key: "PageUp", run: Sr(!1, "page") },
    { key: "Enter", run: W1 },
  ],
  sb = Di.highest(Vn.computeN([Ce], (n) => (n.facet(Ce).defaultKeymap ? [jd] : [])));
class ob {
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.diagnostic = i);
  }
}
class fi {
  constructor(e, t, i) {
    (this.diagnostics = e), (this.panel = t), (this.selected = i);
  }
  static init(e, t, i) {
    let r = e,
      s = i.facet(zn).markerFilter;
    s && (r = s(r, i));
    let o = W.set(
      r.map((l) =>
        l.from == l.to || (l.from == l.to - 1 && i.doc.lineAt(l.from).to == l.from)
          ? W.widget({ widget: new Ob(l), diagnostic: l }).range(l.from)
          : W.mark({
              attributes: {
                class:
                  "cm-lintRange cm-lintRange-" +
                  l.severity +
                  (l.markClass ? " " + l.markClass : ""),
              },
              diagnostic: l,
            }).range(l.from, l.to)
      ),
      !0
    );
    return new fi(o, t, Yi(o));
  }
}
function Yi(n, e = null, t = 0) {
  let i = null;
  return (
    n.between(t, 1e9, (r, s, { spec: o }) => {
      if (!(e && o.diagnostic != e)) return (i = new ob(r, s, o.diagnostic)), !1;
    }),
    i
  );
}
function lb(n, e) {
  let t = e.pos,
    i = e.end || t,
    r = n.state.facet(zn).hideOn(n, t, i);
  if (r != null) return r;
  let s = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((o) => o.is(Ld)) || n.changes.touchesRange(s.from, Math.max(s.to, i)));
}
function ab(n, e) {
  return n.field(Ge, !1) ? e : e.concat(X.appendConfig.of(Sb));
}
const Ld = X.define(),
  na = X.define(),
  qd = X.define(),
  Ge = Ae.define({
    create() {
      return new fi(W.none, null, null);
    },
    update(n, e) {
      if (e.docChanged && n.diagnostics.size) {
        let t = n.diagnostics.map(e.changes),
          i = null,
          r = n.panel;
        if (n.selected) {
          let s = e.changes.mapPos(n.selected.from, 1);
          i = Yi(t, n.selected.diagnostic, s) || Yi(t, null, s);
        }
        !t.size && r && e.state.facet(zn).autoPanel && (r = null), (n = new fi(t, r, i));
      }
      for (let t of e.effects)
        if (t.is(Ld)) {
          let i = e.state.facet(zn).autoPanel ? (t.value.length ? Zn.open : null) : n.panel;
          n = fi.init(t.value, i, e.state);
        } else
          t.is(na)
            ? (n = new fi(n.diagnostics, t.value ? Zn.open : null, n.selected))
            : t.is(qd) && (n = new fi(n.diagnostics, n.panel, t.value));
      return n;
    },
    provide: (n) => [$n.from(n, (e) => e.panel), B.decorations.from(n, (e) => e.diagnostics)],
  }),
  hb = W.mark({ class: "cm-lintRange cm-lintRange-active" });
function ub(n, e, t) {
  let { diagnostics: i } = n.state.field(Ge),
    r = [],
    s = 2e8,
    o = 0;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: u }) => {
    e >= a &&
      e <= h &&
      (a == h || ((e > a || t > 0) && (e < h || t < 0))) &&
      (r.push(u.diagnostic), (s = Math.min(a, s)), (o = Math.max(h, o)));
  });
  let l = n.state.facet(zn).tooltipFilter;
  return (
    l && (r = l(r, n.state)),
    r.length
      ? {
          pos: s,
          end: o,
          above: n.state.doc.lineAt(s).to < o,
          create() {
            return { dom: cb(n, r) };
          },
        }
      : null
  );
}
function cb(n, e) {
  return se(
    "ul",
    { class: "cm-tooltip-lint" },
    e.map((t) => _d(n, t, !1))
  );
}
const fb = (n) => {
    let e = n.state.field(Ge, !1);
    (!e || !e.panel) && n.dispatch({ effects: ab(n.state, [na.of(!0)]) });
    let t = Mn(n, Zn.open);
    return t && t.dom.querySelector(".cm-panel-lint ul").focus(), !0;
  },
  Gh = (n) => {
    let e = n.state.field(Ge, !1);
    return !e || !e.panel ? !1 : (n.dispatch({ effects: na.of(!1) }), !0);
  },
  db = (n) => {
    let e = n.state.field(Ge, !1);
    if (!e) return !1;
    let t = n.state.selection.main,
      i = e.diagnostics.iter(t.to + 1);
    return !i.value && ((i = e.diagnostics.iter(0)), !i.value || (i.from == t.from && i.to == t.to))
      ? !1
      : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
  },
  pb = [
    { key: "Mod-Shift-m", run: fb, preventDefault: !0 },
    { key: "F8", run: db },
  ],
  zn = T.define({
    combine(n) {
      return Object.assign(
        { sources: n.map((e) => e.source).filter((e) => e != null) },
        Ct(
          n.map((e) => e.config),
          {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null,
            needsRefresh: null,
            hideOn: () => null,
          },
          { needsRefresh: (e, t) => (e ? (t ? (i) => e(i) || t(i) : e) : t) }
        )
      );
    },
  });
function Id(n) {
  let e = [];
  if (n)
    e: for (let { name: t } of n) {
      for (let i = 0; i < t.length; i++) {
        let r = t[i];
        if (/[a-zA-Z]/.test(r) && !e.some((s) => s.toLowerCase() == r.toLowerCase())) {
          e.push(r);
          continue e;
        }
      }
      e.push("");
    }
  return e;
}
function _d(n, e, t) {
  var i;
  let r = t ? Id(e.actions) : [];
  return se(
    "li",
    { class: "cm-diagnostic cm-diagnostic-" + e.severity },
    se("span", { class: "cm-diagnosticText" }, e.renderMessage ? e.renderMessage(n) : e.message),
    (i = e.actions) === null || i === void 0
      ? void 0
      : i.map((s, o) => {
          let l = !1,
            a = (f) => {
              if ((f.preventDefault(), l)) return;
              l = !0;
              let d = Yi(n.state.field(Ge).diagnostics, e);
              d && s.apply(n, d.from, d.to);
            },
            { name: h } = s,
            u = r[o] ? h.indexOf(r[o]) : -1,
            c = u < 0 ? h : [h.slice(0, u), se("u", h.slice(u, u + 1)), h.slice(u + 1)];
          return se(
            "button",
            {
              type: "button",
              class: "cm-diagnosticAction",
              onclick: a,
              onmousedown: a,
              "aria-label": ` Action: ${h}${u < 0 ? "" : ` (access key "${r[o]})"`}.`,
            },
            c
          );
        }),
    e.source && se("div", { class: "cm-diagnosticSource" }, e.source)
  );
}
class Ob extends Ft {
  constructor(e) {
    super(), (this.diagnostic = e);
  }
  eq(e) {
    return e.diagnostic == this.diagnostic;
  }
  toDOM() {
    return se("span", { class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity });
  }
}
class Uh {
  constructor(e, t) {
    (this.diagnostic = t),
      (this.id = "item_" + Math.floor(Math.random() * 4294967295).toString(16)),
      (this.dom = _d(e, t, !0)),
      (this.dom.id = this.id),
      this.dom.setAttribute("role", "option");
  }
}
class Zn {
  constructor(e) {
    (this.view = e), (this.items = []);
    let t = (r) => {
        if (r.keyCode == 27) Gh(this.view), this.view.focus();
        else if (r.keyCode == 38 || r.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (r.keyCode == 40 || r.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (r.keyCode == 36) this.moveSelection(0);
        else if (r.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (r.keyCode == 13) this.view.focus();
        else if (r.keyCode >= 65 && r.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: s } = this.items[this.selectedIndex],
            o = Id(s.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == r.keyCode) {
              let a = Yi(this.view.state.field(Ge).diagnostics, s);
              a && s.actions[l].apply(e, a.from, a.to);
            }
        } else return;
        r.preventDefault();
      },
      i = (r) => {
        for (let s = 0; s < this.items.length; s++)
          this.items[s].dom.contains(r.target) && this.moveSelection(s);
      };
    (this.list = se("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: t,
      onclick: i,
    })),
      (this.dom = se(
        "div",
        { class: "cm-panel-lint" },
        this.list,
        se(
          "button",
          {
            type: "button",
            name: "close",
            "aria-label": this.view.state.phrase("close"),
            onclick: () => Gh(this.view),
          },
          "×"
        )
      )),
      this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Ge).selected;
    if (!e) return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic) return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Ge),
      i = 0,
      r = !1,
      s = null;
    for (
      e.between(0, this.view.state.doc.length, (o, l, { spec: a }) => {
        let h = -1,
          u;
        for (let c = i; c < this.items.length; c++)
          if (this.items[c].diagnostic == a.diagnostic) {
            h = c;
            break;
          }
        h < 0
          ? ((u = new Uh(this.view, a.diagnostic)), this.items.splice(i, 0, u), (r = !0))
          : ((u = this.items[h]), h > i && (this.items.splice(i, h - i), (r = !0))),
          t && u.diagnostic == t.diagnostic
            ? u.dom.hasAttribute("aria-selected") ||
              (u.dom.setAttribute("aria-selected", "true"), (s = u))
            : u.dom.hasAttribute("aria-selected") && u.dom.removeAttribute("aria-selected"),
          i++;
      });
      i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);

    )
      (r = !0), this.items.pop();
    this.items.length == 0 &&
      (this.items.push(
        new Uh(this.view, {
          from: -1,
          to: -1,
          severity: "info",
          message: this.view.state.phrase("No diagnostics"),
        })
      ),
      (r = !0)),
      s
        ? (this.list.setAttribute("aria-activedescendant", s.id),
          this.view.requestMeasure({
            key: this,
            read: () => ({
              sel: s.dom.getBoundingClientRect(),
              panel: this.list.getBoundingClientRect(),
            }),
            write: ({ sel: o, panel: l }) => {
              let a = l.height / this.list.offsetHeight;
              o.top < l.top
                ? (this.list.scrollTop -= (l.top - o.top) / a)
                : o.bottom > l.bottom && (this.list.scrollTop += (o.bottom - l.bottom) / a);
            },
          }))
        : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant"),
      r && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      (e = i.nextSibling), i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; ) t();
        e = i.dom.nextSibling;
      } else this.list.insertBefore(i.dom, e);
    for (; e; ) t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return;
    let t = this.view.state.field(Ge),
      i = Yi(t.diagnostics, this.items[e].diagnostic);
    i &&
      this.view.dispatch({
        selection: { anchor: i.from, head: i.to },
        scrollIntoView: !0,
        effects: qd.of(i),
      });
  }
  static open(e) {
    return new Zn(e);
  }
}
function gb(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function br(n) {
  return gb(
    `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`,
    'width="6" height="3"'
  );
}
const mb = B.baseTheme({
    ".cm-diagnostic": {
      padding: "3px 6px 3px 8px",
      marginLeft: "-1px",
      display: "block",
      whiteSpace: "pre-wrap",
    },
    ".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
    ".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
    ".cm-diagnostic-info": { borderLeft: "5px solid #999" },
    ".cm-diagnostic-hint": { borderLeft: "5px solid #66d" },
    ".cm-diagnosticAction": {
      font: "inherit",
      border: "none",
      padding: "2px 4px",
      backgroundColor: "#444",
      color: "white",
      borderRadius: "3px",
      marginLeft: "8px",
      cursor: "pointer",
    },
    ".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 },
    ".cm-lintRange": {
      backgroundPosition: "left bottom",
      backgroundRepeat: "repeat-x",
      paddingBottom: "0.7px",
    },
    ".cm-lintRange-error": { backgroundImage: br("#d11") },
    ".cm-lintRange-warning": { backgroundImage: br("orange") },
    ".cm-lintRange-info": { backgroundImage: br("#999") },
    ".cm-lintRange-hint": { backgroundImage: br("#66d") },
    ".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
    ".cm-tooltip-lint": { padding: 0, margin: 0 },
    ".cm-lintPoint": {
      position: "relative",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "-2px",
        borderLeft: "3px solid transparent",
        borderRight: "3px solid transparent",
        borderBottom: "4px solid #d11",
      },
    },
    ".cm-lintPoint-warning": { "&:after": { borderBottomColor: "orange" } },
    ".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
    ".cm-lintPoint-hint": { "&:after": { borderBottomColor: "#66d" } },
    ".cm-panel.cm-panel-lint": {
      position: "relative",
      "& ul": {
        maxHeight: "100px",
        overflowY: "auto",
        "& [aria-selected]": { backgroundColor: "#ddd", "& u": { textDecoration: "underline" } },
        "&:focus [aria-selected]": {
          background_fallback: "#bdf",
          backgroundColor: "Highlight",
          color_fallback: "white",
          color: "HighlightText",
        },
        "& u": { textDecoration: "none" },
        padding: 0,
        margin: 0,
      },
      "& [name=close]": {
        position: "absolute",
        top: "0",
        right: "2px",
        background: "inherit",
        border: "none",
        font: "inherit",
        padding: 0,
        margin: 0,
      },
    },
  }),
  Sb = [
    Ge,
    B.decorations.compute([Ge], (n) => {
      let { selected: e, panel: t } = n.field(Ge);
      return !e || !t || e.from == e.to ? W.none : W.set([hb.range(e.from, e.to)]);
    }),
    Cm(ub, { hideOn: lb }),
    mb,
  ];
var Hh = function (e) {
  e === void 0 && (e = {});
  var { crosshairCursor: t = !1 } = e,
    i = [];
  e.closeBracketsKeymap !== !1 && (i = i.concat(H1)),
    e.defaultKeymap !== !1 && (i = i.concat(md)),
    e.searchKeymap !== !1 && (i = i.concat(m1)),
    e.historyKeymap !== !1 && (i = i.concat(_f)),
    e.foldKeymap !== !1 && (i = i.concat(x0)),
    e.completionKeymap !== !1 && (i = i.concat(jd)),
    e.lintKeymap !== !1 && (i = i.concat(pb));
  var r = [];
  return (
    e.lineNumbers !== !1 && r.push(hf()),
    e.highlightActiveLineGutter !== !1 && r.push(uf()),
    e.highlightSpecialChars !== !1 && r.push(tf()),
    e.history !== !1 && r.push(jf()),
    e.foldGutter !== !1 && r.push(v0()),
    e.drawSelection !== !1 && r.push(Kc()),
    e.dropCursor !== !1 && r.push(Gg()),
    e.allowMultipleSelections !== !1 && r.push(U.allowMultipleSelections.of(!0)),
    e.indentOnInput !== !1 && r.push(Df()),
    e.syntaxHighlighting !== !1 && r.push(bs(Ef, { fallback: !0 })),
    e.bracketMatching !== !1 && r.push(Ff()),
    e.closeBrackets !== !1 && r.push(Fd()),
    e.autocompletion !== !1 && r.push(rb()),
    e.rectangularSelection !== !1 && r.push(dm()),
    t !== !1 && r.push(gm()),
    e.highlightActiveLine !== !1 && r.push(nf()),
    e.highlightSelectionMatches !== !1 && r.push(Dd()),
    e.tabSize && typeof e.tabSize == "number" && r.push(gs.of(" ".repeat(e.tabSize))),
    r.concat([Vn.of(i.flat())]).filter(Boolean)
  );
};
const bb = "#e5c07b",
  Kh = "#e06c75",
  yb = "#56b6c2",
  xb = "#ffffff",
  Mr = "#abb2bf",
  ll = "#7d8799",
  kb = "#61afef",
  Db = "#98c379",
  Jh = "#d19a66",
  Cb = "#c678dd",
  vb = "#21252b",
  eu = "#2c313a",
  tu = "#282c34",
  eo = "#353a42",
  wb = "#3E4451",
  iu = "#528bff",
  Qb = B.theme(
    {
      "&": { color: Mr, backgroundColor: tu },
      ".cm-content": { caretColor: iu },
      ".cm-cursor, .cm-dropCursor": { borderLeftColor: iu },
      "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
        { backgroundColor: wb },
      ".cm-panels": { backgroundColor: vb, color: Mr },
      ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
      ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
      ".cm-searchMatch": { backgroundColor: "#72a1ff59", outline: "1px solid #457dff" },
      ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#6199ff2f" },
      ".cm-activeLine": { backgroundColor: "#6699ff0b" },
      ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
      "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "#bad0f847",
      },
      ".cm-gutters": { backgroundColor: tu, color: ll, border: "none" },
      ".cm-activeLineGutter": { backgroundColor: eu },
      ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: "#ddd" },
      ".cm-tooltip": { border: "none", backgroundColor: eo },
      ".cm-tooltip .cm-tooltip-arrow:before": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
      },
      ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: eo, borderBottomColor: eo },
      ".cm-tooltip-autocomplete": {
        "& > ul > li[aria-selected]": { backgroundColor: eu, color: Mr },
      },
    },
    { dark: !0 }
  ),
  Pb = Gi.define([
    { tag: m.keyword, color: Cb },
    { tag: [m.name, m.deleted, m.character, m.propertyName, m.macroName], color: Kh },
    { tag: [m.function(m.variableName), m.labelName], color: kb },
    { tag: [m.color, m.constant(m.name), m.standard(m.name)], color: Jh },
    { tag: [m.definition(m.name), m.separator], color: Mr },
    {
      tag: [
        m.typeName,
        m.className,
        m.number,
        m.changed,
        m.annotation,
        m.modifier,
        m.self,
        m.namespace,
      ],
      color: bb,
    },
    {
      tag: [m.operator, m.operatorKeyword, m.url, m.escape, m.regexp, m.link, m.special(m.string)],
      color: yb,
    },
    { tag: [m.meta, m.comment], color: ll },
    { tag: m.strong, fontWeight: "bold" },
    { tag: m.emphasis, fontStyle: "italic" },
    { tag: m.strikethrough, textDecoration: "line-through" },
    { tag: m.link, color: ll, textDecoration: "underline" },
    { tag: m.heading, fontWeight: "bold", color: Kh },
    { tag: [m.atom, m.bool, m.special(m.variableName)], color: Jh },
    { tag: [m.processingInstruction, m.string, m.inserted], color: Db },
    { tag: m.invalid, color: xb },
  ]),
  Ab = [Qb, bs(Pb)];
var Mb = B.theme({ "&": { backgroundColor: "#fff" } }, { dark: !1 }),
  $b = function (e) {
    e === void 0 && (e = {});
    var {
        indentWithTab: t = !0,
        editable: i = !0,
        readOnly: r = !1,
        theme: s = "light",
        placeholder: o = "",
        basicSetup: l = !0,
      } = e,
      a = [];
    switch (
      (t && a.unshift(Vn.of([NS])),
      l && (typeof l == "boolean" ? a.unshift(Hh()) : a.unshift(Hh(l))),
      o && a.unshift(hm(o)),
      s)
    ) {
      case "light":
        a.push(Mb);
        break;
      case "dark":
        a.push(Ab);
        break;
      case "none":
        break;
      default:
        a.push(s);
        break;
    }
    return i === !1 && a.push(B.editable.of(!1)), r && a.push(U.readOnly.of(!0)), [...a];
  },
  Eb = (n) => ({
    line: n.state.doc.lineAt(n.state.selection.main.from),
    lineCount: n.state.doc.lines,
    lineBreak: n.state.lineBreak,
    length: n.state.doc.length,
    readOnly: n.state.readOnly,
    tabSize: n.state.tabSize,
    selection: n.state.selection,
    selectionAsSingle: n.state.selection.asSingle().main,
    ranges: n.state.selection.ranges,
    selectionCode: n.state.sliceDoc(n.state.selection.main.from, n.state.selection.main.to),
    selections: n.state.selection.ranges.map((e) => n.state.sliceDoc(e.from, e.to)),
    selectedText: n.state.selection.ranges.some((e) => !e.empty),
  }),
  nu = Dt.define(),
  Bb = [];
function Rb(n) {
  var {
      value: e,
      selection: t,
      onChange: i,
      onStatistics: r,
      onCreateEditor: s,
      onUpdate: o,
      extensions: l = Bb,
      autoFocus: a,
      theme: h = "light",
      height: u = null,
      minHeight: c = null,
      maxHeight: f = null,
      width: d = null,
      minWidth: p = null,
      maxWidth: O = null,
      placeholder: g = "",
      editable: S = !0,
      readOnly: b = !1,
      indentWithTab: D = !0,
      basicSetup: v = !0,
      root: k,
      initialState: y,
    } = n,
    [Q, R] = H.useState(),
    [$, j] = H.useState(),
    [Z, A] = H.useState(),
    x = B.theme({
      "&": { height: u, minHeight: c, maxHeight: f, width: d, minWidth: p, maxWidth: O },
      "& .cm-scroller": { height: "100% !important" },
    }),
    M = B.updateListener.of((L) => {
      if (
        L.docChanged &&
        typeof i == "function" &&
        !L.transactions.some((fe) => fe.annotation(nu))
      ) {
        var ee = L.state.doc,
          re = ee.toString();
        i(re, L);
      }
      r && r(Eb(L));
    }),
    z = $b({ theme: h, editable: S, readOnly: b, placeholder: g, indentWithTab: D, basicSetup: v }),
    I = [M, x, ...z];
  return (
    o && typeof o == "function" && I.push(B.updateListener.of(o)),
    (I = I.concat(l)),
    H.useEffect(() => {
      if (Q && !Z) {
        var L = { doc: e, selection: t, extensions: I },
          ee = y ? U.fromJSON(y.json, L, y.fields) : U.create(L);
        if ((A(ee), !$)) {
          var re = new B({ state: ee, parent: Q, root: k });
          j(re), s && s(re, ee);
        }
      }
      return () => {
        $ && (A(void 0), j(void 0));
      };
    }, [Q, Z]),
    H.useEffect(() => R(n.container), [n.container]),
    H.useEffect(
      () => () => {
        $ && ($.destroy(), j(void 0));
      },
      [$]
    ),
    H.useEffect(() => {
      a && $ && $.focus();
    }, [a, $]),
    H.useEffect(() => {
      $ && $.dispatch({ effects: X.reconfigure.of(I) });
    }, [h, l, u, c, f, d, p, O, g, S, b, D, v, i, o]),
    H.useEffect(() => {
      if (e !== void 0) {
        var L = $ ? $.state.doc.toString() : "";
        $ &&
          e !== L &&
          $.dispatch({
            changes: { from: 0, to: L.length, insert: e || "" },
            annotations: [nu.of(!0)],
          });
      }
    }, [e, $]),
    { state: Z, setState: A, view: $, setView: j, container: Q, setContainer: R }
  );
}
var Tb = [
    "className",
    "value",
    "selection",
    "extensions",
    "onChange",
    "onStatistics",
    "onCreateEditor",
    "onUpdate",
    "autoFocus",
    "theme",
    "height",
    "minHeight",
    "maxHeight",
    "width",
    "minWidth",
    "maxWidth",
    "basicSetup",
    "placeholder",
    "indentWithTab",
    "editable",
    "readOnly",
    "root",
    "initialState",
  ],
  Vd = H.forwardRef((n, e) => {
    var {
        className: t,
        value: i = "",
        selection: r,
        extensions: s = [],
        onChange: o,
        onStatistics: l,
        onCreateEditor: a,
        onUpdate: h,
        autoFocus: u,
        theme: c = "light",
        height: f,
        minHeight: d,
        maxHeight: p,
        width: O,
        minWidth: g,
        maxWidth: S,
        basicSetup: b,
        placeholder: D,
        indentWithTab: v,
        editable: k,
        readOnly: y,
        root: Q,
        initialState: R,
      } = n,
      $ = Op(n, Tb),
      j = H.useRef(null),
      {
        state: Z,
        view: A,
        container: x,
      } = Rb({
        container: j.current,
        root: Q,
        value: i,
        autoFocus: u,
        theme: c,
        height: f,
        minHeight: d,
        maxHeight: p,
        width: O,
        minWidth: g,
        maxWidth: S,
        basicSetup: b,
        placeholder: D,
        indentWithTab: v,
        editable: k,
        readOnly: y,
        selection: r,
        onChange: o,
        onStatistics: l,
        onCreateEditor: a,
        onUpdate: h,
        extensions: s,
        initialState: R,
      });
    if (
      (H.useImperativeHandle(e, () => ({ editor: j.current, state: Z, view: A }), [j, x, Z, A]),
      typeof i != "string")
    )
      throw new Error("value must be typeof string but got " + typeof i);
    var M = typeof c == "string" ? "cm-theme-" + c : "cm-theme";
    return C.jsx("div", gp({ ref: j, className: "" + M + (t ? " " + t : "") }, $));
  });
Vd.displayName = "CodeMirror";
class os {
  constructor(e, t, i, r, s, o, l, a, h, u = 0, c) {
    (this.p = e),
      (this.stack = t),
      (this.state = i),
      (this.reducePos = r),
      (this.pos = s),
      (this.score = o),
      (this.buffer = l),
      (this.bufferBase = a),
      (this.curContext = h),
      (this.lookAhead = u),
      (this.parent = c);
  }
  toString() {
    return `[${this.stack.filter((e, t) => t % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
  }
  static start(e, t, i = 0) {
    let r = e.parser.context;
    return new os(e, [], t, i, i, 0, [], 0, r ? new ru(r, r.start) : null, 0, null);
  }
  get context() {
    return this.curContext ? this.curContext.context : null;
  }
  pushState(e, t) {
    this.stack.push(this.state, t, this.bufferBase + this.buffer.length), (this.state = e);
  }
  reduce(e) {
    var t;
    let i = e >> 19,
      r = e & 65535,
      { parser: s } = this.p,
      o = this.reducePos < this.pos - 25;
    o && this.setLookAhead(this.pos);
    let l = s.dynamicPrecedence(r);
    if ((l && (this.score += l), i == 0)) {
      this.pushState(s.getGoto(this.state, r, !0), this.reducePos),
        r < s.minRepeatTerm && this.storeNode(r, this.reducePos, this.reducePos, o ? 8 : 4, !0),
        this.reduceContext(r, this.reducePos);
      return;
    }
    let a = this.stack.length - (i - 1) * 3 - (e & 262144 ? 6 : 0),
      h = a ? this.stack[a - 2] : this.p.ranges[0].from,
      u = this.reducePos - h;
    u >= 2e3 &&
      !(!((t = this.p.parser.nodeSet.types[r]) === null || t === void 0) && t.isAnonymous) &&
      (h == this.p.lastBigReductionStart
        ? (this.p.bigReductionCount++, (this.p.lastBigReductionSize = u))
        : this.p.lastBigReductionSize < u &&
          ((this.p.bigReductionCount = 1),
          (this.p.lastBigReductionStart = h),
          (this.p.lastBigReductionSize = u)));
    let c = a ? this.stack[a - 1] : 0,
      f = this.bufferBase + this.buffer.length - c;
    if (r < s.minRepeatTerm || e & 131072) {
      let d = s.stateFlag(this.state, 1) ? this.pos : this.reducePos;
      this.storeNode(r, h, d, f + 4, !0);
    }
    if (e & 262144) this.state = this.stack[a];
    else {
      let d = this.stack[a - 3];
      this.state = s.getGoto(d, r, !0);
    }
    for (; this.stack.length > a; ) this.stack.pop();
    this.reduceContext(r, h);
  }
  storeNode(e, t, i, r = 4, s = !1) {
    if (
      e == 0 &&
      (!this.stack.length ||
        this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)
    ) {
      let o = this,
        l = this.buffer.length;
      if (
        (l == 0 && o.parent && ((l = o.bufferBase - o.parent.bufferBase), (o = o.parent)),
        l > 0 && o.buffer[l - 4] == 0 && o.buffer[l - 1] > -1)
      ) {
        if (t == i) return;
        if (o.buffer[l - 2] >= t) {
          o.buffer[l - 2] = i;
          return;
        }
      }
    }
    if (!s || this.pos == i) this.buffer.push(e, t, i, r);
    else {
      let o = this.buffer.length;
      if (o > 0 && this.buffer[o - 4] != 0) {
        let l = !1;
        for (let a = o; a > 0 && this.buffer[a - 2] > i; a -= 4)
          if (this.buffer[a - 1] >= 0) {
            l = !0;
            break;
          }
        if (l)
          for (; o > 0 && this.buffer[o - 2] > i; )
            (this.buffer[o] = this.buffer[o - 4]),
              (this.buffer[o + 1] = this.buffer[o - 3]),
              (this.buffer[o + 2] = this.buffer[o - 2]),
              (this.buffer[o + 3] = this.buffer[o - 1]),
              (o -= 4),
              r > 4 && (r -= 4);
      }
      (this.buffer[o] = e),
        (this.buffer[o + 1] = t),
        (this.buffer[o + 2] = i),
        (this.buffer[o + 3] = r);
    }
  }
  shift(e, t, i, r) {
    if (e & 131072) this.pushState(e & 65535, this.pos);
    else if (e & 262144)
      (this.pos = r),
        this.shiftContext(t, i),
        t <= this.p.parser.maxNode && this.buffer.push(t, i, r, 4);
    else {
      let s = e,
        { parser: o } = this.p;
      (r > this.pos || t <= o.maxNode) &&
        ((this.pos = r), o.stateFlag(s, 1) || (this.reducePos = r)),
        this.pushState(s, i),
        this.shiftContext(t, i),
        t <= o.maxNode && this.buffer.push(t, i, r, 4);
    }
  }
  apply(e, t, i, r) {
    e & 65536 ? this.reduce(e) : this.shift(e, t, i, r);
  }
  useNode(e, t) {
    let i = this.p.reused.length - 1;
    (i < 0 || this.p.reused[i] != e) && (this.p.reused.push(e), i++);
    let r = this.pos;
    (this.reducePos = this.pos = r + e.length),
      this.pushState(t, r),
      this.buffer.push(i, r, this.reducePos, -1),
      this.curContext &&
        this.updateContext(
          this.curContext.tracker.reuse(
            this.curContext.context,
            e,
            this,
            this.p.stream.reset(this.pos - e.length)
          )
        );
  }
  split() {
    let e = this,
      t = e.buffer.length;
    for (; t > 0 && e.buffer[t - 2] > e.reducePos; ) t -= 4;
    let i = e.buffer.slice(t),
      r = e.bufferBase + t;
    for (; e && r == e.bufferBase; ) e = e.parent;
    return new os(
      this.p,
      this.stack.slice(),
      this.state,
      this.reducePos,
      this.pos,
      this.score,
      i,
      r,
      this.curContext,
      this.lookAhead,
      e
    );
  }
  recoverByDelete(e, t) {
    let i = e <= this.p.parser.maxNode;
    i && this.storeNode(e, this.pos, t, 4),
      this.storeNode(0, this.pos, t, i ? 8 : 4),
      (this.pos = this.reducePos = t),
      (this.score -= 190);
  }
  canShift(e) {
    for (let t = new Fb(this); ; ) {
      let i = this.p.parser.stateSlot(t.state, 4) || this.p.parser.hasAction(t.state, e);
      if (i == 0) return !1;
      if (!(i & 65536)) return !0;
      t.reduce(i);
    }
  }
  recoverByInsert(e) {
    if (this.stack.length >= 300) return [];
    let t = this.p.parser.nextStates(this.state);
    if (t.length > 8 || this.stack.length >= 120) {
      let r = [];
      for (let s = 0, o; s < t.length; s += 2)
        (o = t[s + 1]) != this.state && this.p.parser.hasAction(o, e) && r.push(t[s], o);
      if (this.stack.length < 120)
        for (let s = 0; r.length < 8 && s < t.length; s += 2) {
          let o = t[s + 1];
          r.some((l, a) => a & 1 && l == o) || r.push(t[s], o);
        }
      t = r;
    }
    let i = [];
    for (let r = 0; r < t.length && i.length < 4; r += 2) {
      let s = t[r + 1];
      if (s == this.state) continue;
      let o = this.split();
      o.pushState(s, this.pos),
        o.storeNode(0, o.pos, o.pos, 4, !0),
        o.shiftContext(t[r], this.pos),
        (o.reducePos = this.pos),
        (o.score -= 200),
        i.push(o);
    }
    return i;
  }
  forceReduce() {
    let { parser: e } = this.p,
      t = e.stateSlot(this.state, 5);
    if (!(t & 65536)) return !1;
    if (!e.validAction(this.state, t)) {
      let i = t >> 19,
        r = t & 65535,
        s = this.stack.length - i * 3;
      if (s < 0 || e.getGoto(this.stack[s], r, !1) < 0) {
        let o = this.findForcedReduction();
        if (o == null) return !1;
        t = o;
      }
      this.storeNode(0, this.pos, this.pos, 4, !0), (this.score -= 100);
    }
    return (this.reducePos = this.pos), this.reduce(t), !0;
  }
  findForcedReduction() {
    let { parser: e } = this.p,
      t = [],
      i = (r, s) => {
        if (!t.includes(r))
          return (
            t.push(r),
            e.allActions(r, (o) => {
              if (!(o & 393216))
                if (o & 65536) {
                  let l = (o >> 19) - s;
                  if (l > 1) {
                    let a = o & 65535,
                      h = this.stack.length - l * 3;
                    if (h >= 0 && e.getGoto(this.stack[h], a, !1) >= 0)
                      return (l << 19) | 65536 | a;
                  }
                } else {
                  let l = i(o, s + 1);
                  if (l != null) return l;
                }
            })
          );
      };
    return i(this.state, 0);
  }
  forceAll() {
    for (; !this.p.parser.stateFlag(this.state, 2); )
      if (!this.forceReduce()) {
        this.storeNode(0, this.pos, this.pos, 4, !0);
        break;
      }
    return this;
  }
  get deadEnd() {
    if (this.stack.length != 3) return !1;
    let { parser: e } = this.p;
    return e.data[e.stateSlot(this.state, 1)] == 65535 && !e.stateSlot(this.state, 4);
  }
  restart() {
    this.storeNode(0, this.pos, this.pos, 4, !0),
      (this.state = this.stack[0]),
      (this.stack.length = 0);
  }
  sameState(e) {
    if (this.state != e.state || this.stack.length != e.stack.length) return !1;
    for (let t = 0; t < this.stack.length; t += 3) if (this.stack[t] != e.stack[t]) return !1;
    return !0;
  }
  get parser() {
    return this.p.parser;
  }
  dialectEnabled(e) {
    return this.p.parser.dialect.flags[e];
  }
  shiftContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.shift(this.curContext.context, e, this, this.p.stream.reset(t))
      );
  }
  reduceContext(e, t) {
    this.curContext &&
      this.updateContext(
        this.curContext.tracker.reduce(this.curContext.context, e, this, this.p.stream.reset(t))
      );
  }
  emitContext() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -3) &&
      this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
  }
  emitLookAhead() {
    let e = this.buffer.length - 1;
    (e < 0 || this.buffer[e] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
  }
  updateContext(e) {
    if (e != this.curContext.context) {
      let t = new ru(this.curContext.tracker, e);
      t.hash != this.curContext.hash && this.emitContext(), (this.curContext = t);
    }
  }
  setLookAhead(e) {
    e > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = e));
  }
  close() {
    this.curContext && this.curContext.tracker.strict && this.emitContext(),
      this.lookAhead > 0 && this.emitLookAhead();
  }
}
class ru {
  constructor(e, t) {
    (this.tracker = e), (this.context = t), (this.hash = e.strict ? e.hash(t) : 0);
  }
}
class Fb {
  constructor(e) {
    (this.start = e),
      (this.state = e.state),
      (this.stack = e.stack),
      (this.base = this.stack.length);
  }
  reduce(e) {
    let t = e & 65535,
      i = e >> 19;
    i == 0
      ? (this.stack == this.start.stack && (this.stack = this.stack.slice()),
        this.stack.push(this.state, 0, 0),
        (this.base += 3))
      : (this.base -= (i - 1) * 3);
    let r = this.start.p.parser.getGoto(this.stack[this.base - 3], t, !0);
    this.state = r;
  }
}
class ls {
  constructor(e, t, i) {
    (this.stack = e),
      (this.pos = t),
      (this.index = i),
      (this.buffer = e.buffer),
      this.index == 0 && this.maybeNext();
  }
  static create(e, t = e.bufferBase + e.buffer.length) {
    return new ls(e, t, t - e.bufferBase);
  }
  maybeNext() {
    let e = this.stack.parent;
    e != null &&
      ((this.index = this.stack.bufferBase - e.bufferBase),
      (this.stack = e),
      (this.buffer = e.buffer));
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  next() {
    (this.index -= 4), (this.pos -= 4), this.index == 0 && this.maybeNext();
  }
  fork() {
    return new ls(this.stack, this.pos, this.index);
  }
}
function cn(n, e = Uint16Array) {
  if (typeof n != "string") return n;
  let t = null;
  for (let i = 0, r = 0; i < n.length; ) {
    let s = 0;
    for (;;) {
      let o = n.charCodeAt(i++),
        l = !1;
      if (o == 126) {
        s = 65535;
        break;
      }
      o >= 92 && o--, o >= 34 && o--;
      let a = o - 32;
      if ((a >= 46 && ((a -= 46), (l = !0)), (s += a), l)) break;
      s *= 46;
    }
    t ? (t[r++] = s) : (t = new e(s));
  }
  return t;
}
class $r {
  constructor() {
    (this.start = -1),
      (this.value = -1),
      (this.end = -1),
      (this.extended = -1),
      (this.lookAhead = 0),
      (this.mask = 0),
      (this.context = 0);
  }
}
const su = new $r();
class zb {
  constructor(e, t) {
    (this.input = e),
      (this.ranges = t),
      (this.chunk = ""),
      (this.chunkOff = 0),
      (this.chunk2 = ""),
      (this.chunk2Pos = 0),
      (this.next = -1),
      (this.token = su),
      (this.rangeIndex = 0),
      (this.pos = this.chunkPos = t[0].from),
      (this.range = t[0]),
      (this.end = t[t.length - 1].to),
      this.readNext();
  }
  resolveOffset(e, t) {
    let i = this.range,
      r = this.rangeIndex,
      s = this.pos + e;
    for (; s < i.from; ) {
      if (!r) return null;
      let o = this.ranges[--r];
      (s -= i.from - o.to), (i = o);
    }
    for (; t < 0 ? s > i.to : s >= i.to; ) {
      if (r == this.ranges.length - 1) return null;
      let o = this.ranges[++r];
      (s += o.from - i.to), (i = o);
    }
    return s;
  }
  clipPos(e) {
    if (e >= this.range.from && e < this.range.to) return e;
    for (let t of this.ranges) if (t.to > e) return Math.max(e, t.from);
    return this.end;
  }
  peek(e) {
    let t = this.chunkOff + e,
      i,
      r;
    if (t >= 0 && t < this.chunk.length) (i = this.pos + e), (r = this.chunk.charCodeAt(t));
    else {
      let s = this.resolveOffset(e, 1);
      if (s == null) return -1;
      if (((i = s), i >= this.chunk2Pos && i < this.chunk2Pos + this.chunk2.length))
        r = this.chunk2.charCodeAt(i - this.chunk2Pos);
      else {
        let o = this.rangeIndex,
          l = this.range;
        for (; l.to <= i; ) l = this.ranges[++o];
        (this.chunk2 = this.input.chunk((this.chunk2Pos = i))),
          i + this.chunk2.length > l.to && (this.chunk2 = this.chunk2.slice(0, l.to - i)),
          (r = this.chunk2.charCodeAt(0));
      }
    }
    return i >= this.token.lookAhead && (this.token.lookAhead = i + 1), r;
  }
  acceptToken(e, t = 0) {
    let i = t ? this.resolveOffset(t, -1) : this.pos;
    if (i == null || i < this.token.start) throw new RangeError("Token end out of bounds");
    (this.token.value = e), (this.token.end = i);
  }
  acceptTokenTo(e, t) {
    (this.token.value = e), (this.token.end = t);
  }
  getChunk() {
    if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
      let { chunk: e, chunkPos: t } = this;
      (this.chunk = this.chunk2),
        (this.chunkPos = this.chunk2Pos),
        (this.chunk2 = e),
        (this.chunk2Pos = t),
        (this.chunkOff = this.pos - this.chunkPos);
    } else {
      (this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
      let e = this.input.chunk(this.pos),
        t = this.pos + e.length;
      (this.chunk = t > this.range.to ? e.slice(0, this.range.to - this.pos) : e),
        (this.chunkPos = this.pos),
        (this.chunkOff = 0);
    }
  }
  readNext() {
    return this.chunkOff >= this.chunk.length &&
      (this.getChunk(), this.chunkOff == this.chunk.length)
      ? (this.next = -1)
      : (this.next = this.chunk.charCodeAt(this.chunkOff));
  }
  advance(e = 1) {
    for (this.chunkOff += e; this.pos + e >= this.range.to; ) {
      if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
      (e -= this.range.to - this.pos),
        (this.range = this.ranges[++this.rangeIndex]),
        (this.pos = this.range.from);
    }
    return (
      (this.pos += e),
      this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1),
      this.readNext()
    );
  }
  setDone() {
    return (
      (this.pos = this.chunkPos = this.end),
      (this.range = this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
      (this.chunk = ""),
      (this.next = -1)
    );
  }
  reset(e, t) {
    if (
      (t
        ? ((this.token = t), (t.start = e), (t.lookAhead = e + 1), (t.value = t.extended = -1))
        : (this.token = su),
      this.pos != e)
    ) {
      if (((this.pos = e), e == this.end)) return this.setDone(), this;
      for (; e < this.range.from; ) this.range = this.ranges[--this.rangeIndex];
      for (; e >= this.range.to; ) this.range = this.ranges[++this.rangeIndex];
      e >= this.chunkPos && e < this.chunkPos + this.chunk.length
        ? (this.chunkOff = e - this.chunkPos)
        : ((this.chunk = ""), (this.chunkOff = 0)),
        this.readNext();
    }
    return this;
  }
  read(e, t) {
    if (e >= this.chunkPos && t <= this.chunkPos + this.chunk.length)
      return this.chunk.slice(e - this.chunkPos, t - this.chunkPos);
    if (e >= this.chunk2Pos && t <= this.chunk2Pos + this.chunk2.length)
      return this.chunk2.slice(e - this.chunk2Pos, t - this.chunk2Pos);
    if (e >= this.range.from && t <= this.range.to) return this.input.read(e, t);
    let i = "";
    for (let r of this.ranges) {
      if (r.from >= t) break;
      r.to > e && (i += this.input.read(Math.max(r.from, e), Math.min(r.to, t)));
    }
    return i;
  }
}
class Zi {
  constructor(e, t) {
    (this.data = e), (this.id = t);
  }
  token(e, t) {
    let { parser: i } = t.p;
    Xd(this.data, e, t, this.id, i.data, i.tokenPrecTable);
  }
}
Zi.prototype.contextual = Zi.prototype.fallback = Zi.prototype.extend = !1;
class al {
  constructor(e, t, i) {
    (this.precTable = t), (this.elseToken = i), (this.data = typeof e == "string" ? cn(e) : e);
  }
  token(e, t) {
    let i = e.pos,
      r = 0;
    for (;;) {
      let s = e.next < 0,
        o = e.resolveOffset(1, 1);
      if ((Xd(this.data, e, t, 0, this.data, this.precTable), e.token.value > -1)) break;
      if (this.elseToken == null) return;
      if ((s || r++, o == null)) break;
      e.reset(o, e.token);
    }
    r && (e.reset(i, e.token), e.acceptToken(this.elseToken, r));
  }
}
al.prototype.contextual = Zi.prototype.fallback = Zi.prototype.extend = !1;
class Un {
  constructor(e, t = {}) {
    (this.token = e),
      (this.contextual = !!t.contextual),
      (this.fallback = !!t.fallback),
      (this.extend = !!t.extend);
  }
}
function Xd(n, e, t, i, r, s) {
  let o = 0,
    l = 1 << i,
    { dialect: a } = t.p.parser;
  e: for (; l & n[o]; ) {
    let h = n[o + 1];
    for (let d = o + 3; d < h; d += 2)
      if ((n[d + 1] & l) > 0) {
        let p = n[d];
        if (
          a.allows(p) &&
          (e.token.value == -1 || e.token.value == p || Zb(p, e.token.value, r, s))
        ) {
          e.acceptToken(p);
          break;
        }
      }
    let u = e.next,
      c = 0,
      f = n[o + 2];
    if (e.next < 0 && f > c && n[h + f * 3 - 3] == 65535) {
      o = n[h + f * 3 - 1];
      continue e;
    }
    for (; c < f; ) {
      let d = (c + f) >> 1,
        p = h + d + (d << 1),
        O = n[p],
        g = n[p + 1] || 65536;
      if (u < O) f = d;
      else if (u >= g) c = d + 1;
      else {
        (o = n[p + 2]), e.advance();
        continue e;
      }
    }
    break;
  }
}
function ou(n, e, t) {
  for (let i = e, r; (r = n[i]) != 65535; i++) if (r == t) return i - e;
  return -1;
}
function Zb(n, e, t, i) {
  let r = ou(t, i, e);
  return r < 0 || ou(t, i, n) < r;
}
const Ye = typeof process < "u" && process.env && /\bparse\b/.test({}.LOG);
let to = null;
function lu(n, e, t) {
  let i = n.cursor(De.IncludeAnonymous);
  for (i.moveTo(e); ; )
    if (!(t < 0 ? i.childBefore(e) : i.childAfter(e)))
      for (;;) {
        if ((t < 0 ? i.to < e : i.from > e) && !i.type.isError)
          return t < 0
            ? Math.max(0, Math.min(i.to - 1, e - 25))
            : Math.min(n.length, Math.max(i.from + 1, e + 25));
        if (t < 0 ? i.prevSibling() : i.nextSibling()) break;
        if (!i.parent()) return t < 0 ? 0 : n.length;
      }
}
class Wb {
  constructor(e, t) {
    (this.fragments = e),
      (this.nodeSet = t),
      (this.i = 0),
      (this.fragment = null),
      (this.safeFrom = -1),
      (this.safeTo = -1),
      (this.trees = []),
      (this.start = []),
      (this.index = []),
      this.nextFragment();
  }
  nextFragment() {
    let e = (this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++]);
    if (e) {
      for (
        this.safeFrom = e.openStart ? lu(e.tree, e.from + e.offset, 1) - e.offset : e.from,
          this.safeTo = e.openEnd ? lu(e.tree, e.to + e.offset, -1) - e.offset : e.to;
        this.trees.length;

      )
        this.trees.pop(), this.start.pop(), this.index.pop();
      this.trees.push(e.tree),
        this.start.push(-e.offset),
        this.index.push(0),
        (this.nextStart = this.safeFrom);
    } else this.nextStart = 1e9;
  }
  nodeAt(e) {
    if (e < this.nextStart) return null;
    for (; this.fragment && this.safeTo <= e; ) this.nextFragment();
    if (!this.fragment) return null;
    for (;;) {
      let t = this.trees.length - 1;
      if (t < 0) return this.nextFragment(), null;
      let i = this.trees[t],
        r = this.index[t];
      if (r == i.children.length) {
        this.trees.pop(), this.start.pop(), this.index.pop();
        continue;
      }
      let s = i.children[r],
        o = this.start[t] + i.positions[r];
      if (o > e) return (this.nextStart = o), null;
      if (s instanceof Se) {
        if (o == e) {
          if (o < this.safeFrom) return null;
          let l = o + s.length;
          if (l <= this.safeTo) {
            let a = s.prop(N.lookAhead);
            if (!a || l + a < this.fragment.to) return s;
          }
        }
        this.index[t]++,
          o + s.length >= Math.max(this.safeFrom, e) &&
            (this.trees.push(s), this.start.push(o), this.index.push(0));
      } else this.index[t]++, (this.nextStart = o + s.length);
    }
  }
}
class jb {
  constructor(e, t) {
    (this.stream = t),
      (this.tokens = []),
      (this.mainToken = null),
      (this.actions = []),
      (this.tokens = e.tokenizers.map((i) => new $r()));
  }
  getActions(e) {
    let t = 0,
      i = null,
      { parser: r } = e.p,
      { tokenizers: s } = r,
      o = r.stateSlot(e.state, 3),
      l = e.curContext ? e.curContext.hash : 0,
      a = 0;
    for (let h = 0; h < s.length; h++) {
      if (!((1 << h) & o)) continue;
      let u = s[h],
        c = this.tokens[h];
      if (
        !(i && !u.fallback) &&
        ((u.contextual || c.start != e.pos || c.mask != o || c.context != l) &&
          (this.updateCachedToken(c, u, e), (c.mask = o), (c.context = l)),
        c.lookAhead > c.end + 25 && (a = Math.max(c.lookAhead, a)),
        c.value != 0)
      ) {
        let f = t;
        if (
          (c.extended > -1 && (t = this.addActions(e, c.extended, c.end, t)),
          (t = this.addActions(e, c.value, c.end, t)),
          !u.extend && ((i = c), t > f))
        )
          break;
      }
    }
    for (; this.actions.length > t; ) this.actions.pop();
    return (
      a && e.setLookAhead(a),
      !i &&
        e.pos == this.stream.end &&
        ((i = new $r()),
        (i.value = e.p.parser.eofTerm),
        (i.start = i.end = e.pos),
        (t = this.addActions(e, i.value, i.end, t))),
      (this.mainToken = i),
      this.actions
    );
  }
  getMainToken(e) {
    if (this.mainToken) return this.mainToken;
    let t = new $r(),
      { pos: i, p: r } = e;
    return (
      (t.start = i),
      (t.end = Math.min(i + 1, r.stream.end)),
      (t.value = i == r.stream.end ? r.parser.eofTerm : 0),
      t
    );
  }
  updateCachedToken(e, t, i) {
    let r = this.stream.clipPos(i.pos);
    if ((t.token(this.stream.reset(r, e), i), e.value > -1)) {
      let { parser: s } = i.p;
      for (let o = 0; o < s.specialized.length; o++)
        if (s.specialized[o] == e.value) {
          let l = s.specializers[o](this.stream.read(e.start, e.end), i);
          if (l >= 0 && i.p.parser.dialect.allows(l >> 1)) {
            l & 1 ? (e.extended = l >> 1) : (e.value = l >> 1);
            break;
          }
        }
    } else (e.value = 0), (e.end = this.stream.clipPos(r + 1));
  }
  putAction(e, t, i, r) {
    for (let s = 0; s < r; s += 3) if (this.actions[s] == e) return r;
    return (this.actions[r++] = e), (this.actions[r++] = t), (this.actions[r++] = i), r;
  }
  addActions(e, t, i, r) {
    let { state: s } = e,
      { parser: o } = e.p,
      { data: l } = o;
    for (let a = 0; a < 2; a++)
      for (let h = o.stateSlot(s, a ? 2 : 1); ; h += 3) {
        if (l[h] == 65535)
          if (l[h + 1] == 1) h = Pt(l, h + 2);
          else {
            r == 0 && l[h + 1] == 2 && (r = this.putAction(Pt(l, h + 2), t, i, r));
            break;
          }
        l[h] == t && (r = this.putAction(Pt(l, h + 1), t, i, r));
      }
    return r;
  }
}
class Lb {
  constructor(e, t, i, r) {
    (this.parser = e),
      (this.input = t),
      (this.ranges = r),
      (this.recovering = 0),
      (this.nextStackID = 9812),
      (this.minStackPos = 0),
      (this.reused = []),
      (this.stoppedAt = null),
      (this.lastBigReductionStart = -1),
      (this.lastBigReductionSize = 0),
      (this.bigReductionCount = 0),
      (this.stream = new zb(t, r)),
      (this.tokens = new jb(e, this.stream)),
      (this.topTerm = e.top[1]);
    let { from: s } = r[0];
    (this.stacks = [os.start(this, e.top[0], s)]),
      (this.fragments =
        i.length && this.stream.end - s > e.bufferLength * 4 ? new Wb(i, e.nodeSet) : null);
  }
  get parsedPos() {
    return this.minStackPos;
  }
  advance() {
    let e = this.stacks,
      t = this.minStackPos,
      i = (this.stacks = []),
      r,
      s;
    if (this.bigReductionCount > 300 && e.length == 1) {
      let [o] = e;
      for (
        ;
        o.forceReduce() &&
        o.stack.length &&
        o.stack[o.stack.length - 2] >= this.lastBigReductionStart;

      );
      this.bigReductionCount = this.lastBigReductionSize = 0;
    }
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      for (;;) {
        if (((this.tokens.mainToken = null), l.pos > t)) i.push(l);
        else {
          if (this.advanceStack(l, i, e)) continue;
          {
            r || ((r = []), (s = [])), r.push(l);
            let a = this.tokens.getMainToken(l);
            s.push(a.value, a.end);
          }
        }
        break;
      }
    }
    if (!i.length) {
      let o = r && _b(r);
      if (o) return Ye && console.log("Finish with " + this.stackID(o)), this.stackToTree(o);
      if (this.parser.strict)
        throw (
          (Ye &&
            r &&
            console.log(
              "Stuck with token " +
                (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none")
            ),
          new SyntaxError("No parse at " + t))
        );
      this.recovering || (this.recovering = 5);
    }
    if (this.recovering && r) {
      let o =
        this.stoppedAt != null && r[0].pos > this.stoppedAt ? r[0] : this.runRecovery(r, s, i);
      if (o)
        return Ye && console.log("Force-finish " + this.stackID(o)), this.stackToTree(o.forceAll());
    }
    if (this.recovering) {
      let o = this.recovering == 1 ? 1 : this.recovering * 3;
      if (i.length > o) for (i.sort((l, a) => a.score - l.score); i.length > o; ) i.pop();
      i.some((l) => l.reducePos > t) && this.recovering--;
    } else if (i.length > 1) {
      e: for (let o = 0; o < i.length - 1; o++) {
        let l = i[o];
        for (let a = o + 1; a < i.length; a++) {
          let h = i[a];
          if (l.sameState(h) || (l.buffer.length > 500 && h.buffer.length > 500))
            if ((l.score - h.score || l.buffer.length - h.buffer.length) > 0) i.splice(a--, 1);
            else {
              i.splice(o--, 1);
              continue e;
            }
        }
      }
      i.length > 12 && i.splice(12, i.length - 12);
    }
    this.minStackPos = i[0].pos;
    for (let o = 1; o < i.length; o++) i[o].pos < this.minStackPos && (this.minStackPos = i[o].pos);
    return null;
  }
  stopAt(e) {
    if (this.stoppedAt != null && this.stoppedAt < e)
      throw new RangeError("Can't move stoppedAt forward");
    this.stoppedAt = e;
  }
  advanceStack(e, t, i) {
    let r = e.pos,
      { parser: s } = this,
      o = Ye ? this.stackID(e) + " -> " : "";
    if (this.stoppedAt != null && r > this.stoppedAt) return e.forceReduce() ? e : null;
    if (this.fragments) {
      let h = e.curContext && e.curContext.tracker.strict,
        u = h ? e.curContext.hash : 0;
      for (let c = this.fragments.nodeAt(r); c; ) {
        let f = this.parser.nodeSet.types[c.type.id] == c.type ? s.getGoto(e.state, c.type.id) : -1;
        if (f > -1 && c.length && (!h || (c.prop(N.contextHash) || 0) == u))
          return (
            e.useNode(c, f),
            Ye && console.log(o + this.stackID(e) + ` (via reuse of ${s.getName(c.type.id)})`),
            !0
          );
        if (!(c instanceof Se) || c.children.length == 0 || c.positions[0] > 0) break;
        let d = c.children[0];
        if (d instanceof Se && c.positions[0] == 0) c = d;
        else break;
      }
    }
    let l = s.stateSlot(e.state, 4);
    if (l > 0)
      return (
        e.reduce(l),
        Ye && console.log(o + this.stackID(e) + ` (via always-reduce ${s.getName(l & 65535)})`),
        !0
      );
    if (e.stack.length >= 8400) for (; e.stack.length > 6e3 && e.forceReduce(); );
    let a = this.tokens.getActions(e);
    for (let h = 0; h < a.length; ) {
      let u = a[h++],
        c = a[h++],
        f = a[h++],
        d = h == a.length || !i,
        p = d ? e : e.split(),
        O = this.tokens.mainToken;
      if (
        (p.apply(u, c, O ? O.start : p.pos, f),
        Ye &&
          console.log(
            o +
              this.stackID(p) +
              ` (via ${u & 65536 ? `reduce of ${s.getName(u & 65535)}` : "shift"} for ${s.getName(c)} @ ${r}${p == e ? "" : ", split"})`
          ),
        d)
      )
        return !0;
      p.pos > r ? t.push(p) : i.push(p);
    }
    return !1;
  }
  advanceFully(e, t) {
    let i = e.pos;
    for (;;) {
      if (!this.advanceStack(e, null, null)) return !1;
      if (e.pos > i) return au(e, t), !0;
    }
  }
  runRecovery(e, t, i) {
    let r = null,
      s = !1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = t[o << 1],
        h = t[(o << 1) + 1],
        u = Ye ? this.stackID(l) + " -> " : "";
      if (
        l.deadEnd &&
        (s ||
          ((s = !0),
          l.restart(),
          Ye && console.log(u + this.stackID(l) + " (restarted)"),
          this.advanceFully(l, i)))
      )
        continue;
      let c = l.split(),
        f = u;
      for (
        let d = 0;
        c.forceReduce() &&
        d < 10 &&
        (Ye && console.log(f + this.stackID(c) + " (via force-reduce)"), !this.advanceFully(c, i));
        d++
      )
        Ye && (f = this.stackID(c) + " -> ");
      for (let d of l.recoverByInsert(a))
        Ye && console.log(u + this.stackID(d) + " (via recover-insert)"), this.advanceFully(d, i);
      this.stream.end > l.pos
        ? (h == l.pos && (h++, (a = 0)),
          l.recoverByDelete(a, h),
          Ye &&
            console.log(u + this.stackID(l) + ` (via recover-delete ${this.parser.getName(a)})`),
          au(l, i))
        : (!r || r.score < l.score) && (r = l);
    }
    return r;
  }
  stackToTree(e) {
    return (
      e.close(),
      Se.build({
        buffer: ls.create(e),
        nodeSet: this.parser.nodeSet,
        topID: this.topTerm,
        maxBufferLength: this.parser.bufferLength,
        reused: this.reused,
        start: this.ranges[0].from,
        length: e.pos - this.ranges[0].from,
        minRepeatType: this.parser.minRepeatTerm,
      })
    );
  }
  stackID(e) {
    let t = (to || (to = new WeakMap())).get(e);
    return t || to.set(e, (t = String.fromCodePoint(this.nextStackID++))), t + e;
  }
}
function au(n, e) {
  for (let t = 0; t < e.length; t++) {
    let i = e[t];
    if (i.pos == n.pos && i.sameState(n)) {
      e[t].score < n.score && (e[t] = n);
      return;
    }
  }
  e.push(n);
}
class qb {
  constructor(e, t, i) {
    (this.source = e), (this.flags = t), (this.disabled = i);
  }
  allows(e) {
    return !this.disabled || this.disabled[e] == 0;
  }
}
const io = (n) => n;
class Ib {
  constructor(e) {
    (this.start = e.start),
      (this.shift = e.shift || io),
      (this.reduce = e.reduce || io),
      (this.reuse = e.reuse || io),
      (this.hash = e.hash || (() => 0)),
      (this.strict = e.strict !== !1);
  }
}
class as extends Of {
  constructor(e) {
    if ((super(), (this.wrappers = []), e.version != 14))
      throw new RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);
    let t = e.nodeNames.split(" ");
    this.minRepeatTerm = t.length;
    for (let l = 0; l < e.repeatNodeCount; l++) t.push("");
    let i = Object.keys(e.topRules).map((l) => e.topRules[l][1]),
      r = [];
    for (let l = 0; l < t.length; l++) r.push([]);
    function s(l, a, h) {
      r[l].push([a, a.deserialize(String(h))]);
    }
    if (e.nodeProps)
      for (let l of e.nodeProps) {
        let a = l[0];
        typeof a == "string" && (a = N[a]);
        for (let h = 1; h < l.length; ) {
          let u = l[h++];
          if (u >= 0) s(u, a, l[h++]);
          else {
            let c = l[h + -u];
            for (let f = -u; f > 0; f--) s(l[h++], a, c);
            h++;
          }
        }
      }
    (this.nodeSet = new jl(
      t.map((l, a) =>
        _e.define({
          name: a >= this.minRepeatTerm ? void 0 : l,
          id: a,
          props: r[a],
          top: i.indexOf(a) > -1,
          error: a == 0,
          skipped: e.skippedNodes && e.skippedNodes.indexOf(a) > -1,
        })
      )
    )),
      e.propSources && (this.nodeSet = this.nodeSet.extend(...e.propSources)),
      (this.strict = !1),
      (this.bufferLength = cf);
    let o = cn(e.tokenData);
    (this.context = e.context),
      (this.specializerSpecs = e.specialized || []),
      (this.specialized = new Uint16Array(this.specializerSpecs.length));
    for (let l = 0; l < this.specializerSpecs.length; l++)
      this.specialized[l] = this.specializerSpecs[l].term;
    (this.specializers = this.specializerSpecs.map(hu)),
      (this.states = cn(e.states, Uint32Array)),
      (this.data = cn(e.stateData)),
      (this.goto = cn(e.goto)),
      (this.maxTerm = e.maxTerm),
      (this.tokenizers = e.tokenizers.map((l) => (typeof l == "number" ? new Zi(o, l) : l))),
      (this.topRules = e.topRules),
      (this.dialects = e.dialects || {}),
      (this.dynamicPrecedences = e.dynamicPrecedences || null),
      (this.tokenPrecTable = e.tokenPrec),
      (this.termNames = e.termNames || null),
      (this.maxNode = this.nodeSet.types.length - 1),
      (this.dialect = this.parseDialect()),
      (this.top = this.topRules[Object.keys(this.topRules)[0]]);
  }
  createParse(e, t, i) {
    let r = new Lb(this, e, t, i);
    for (let s of this.wrappers) r = s(r, e, t, i);
    return r;
  }
  getGoto(e, t, i = !1) {
    let r = this.goto;
    if (t >= r[0]) return -1;
    for (let s = r[t + 1]; ; ) {
      let o = r[s++],
        l = o & 1,
        a = r[s++];
      if (l && i) return a;
      for (let h = s + (o >> 1); s < h; s++) if (r[s] == e) return a;
      if (l) return -1;
    }
  }
  hasAction(e, t) {
    let i = this.data;
    for (let r = 0; r < 2; r++)
      for (let s = this.stateSlot(e, r ? 2 : 1), o; ; s += 3) {
        if ((o = i[s]) == 65535)
          if (i[s + 1] == 1) o = i[(s = Pt(i, s + 2))];
          else {
            if (i[s + 1] == 2) return Pt(i, s + 2);
            break;
          }
        if (o == t || o == 0) return Pt(i, s + 1);
      }
    return 0;
  }
  stateSlot(e, t) {
    return this.states[e * 6 + t];
  }
  stateFlag(e, t) {
    return (this.stateSlot(e, 0) & t) > 0;
  }
  validAction(e, t) {
    return !!this.allActions(e, (i) => (i == t ? !0 : null));
  }
  allActions(e, t) {
    let i = this.stateSlot(e, 4),
      r = i ? t(i) : void 0;
    for (let s = this.stateSlot(e, 1); r == null; s += 3) {
      if (this.data[s] == 65535)
        if (this.data[s + 1] == 1) s = Pt(this.data, s + 2);
        else break;
      r = t(Pt(this.data, s + 1));
    }
    return r;
  }
  nextStates(e) {
    let t = [];
    for (let i = this.stateSlot(e, 1); ; i += 3) {
      if (this.data[i] == 65535)
        if (this.data[i + 1] == 1) i = Pt(this.data, i + 2);
        else break;
      if (!(this.data[i + 2] & 1)) {
        let r = this.data[i + 1];
        t.some((s, o) => o & 1 && s == r) || t.push(this.data[i], r);
      }
    }
    return t;
  }
  configure(e) {
    let t = Object.assign(Object.create(as.prototype), this);
    if ((e.props && (t.nodeSet = this.nodeSet.extend(...e.props)), e.top)) {
      let i = this.topRules[e.top];
      if (!i) throw new RangeError(`Invalid top rule name ${e.top}`);
      t.top = i;
    }
    return (
      e.tokenizers &&
        (t.tokenizers = this.tokenizers.map((i) => {
          let r = e.tokenizers.find((s) => s.from == i);
          return r ? r.to : i;
        })),
      e.specializers &&
        ((t.specializers = this.specializers.slice()),
        (t.specializerSpecs = this.specializerSpecs.map((i, r) => {
          let s = e.specializers.find((l) => l.from == i.external);
          if (!s) return i;
          let o = Object.assign(Object.assign({}, i), { external: s.to });
          return (t.specializers[r] = hu(o)), o;
        }))),
      e.contextTracker && (t.context = e.contextTracker),
      e.dialect && (t.dialect = this.parseDialect(e.dialect)),
      e.strict != null && (t.strict = e.strict),
      e.wrap && (t.wrappers = t.wrappers.concat(e.wrap)),
      e.bufferLength != null && (t.bufferLength = e.bufferLength),
      t
    );
  }
  hasWrappers() {
    return this.wrappers.length > 0;
  }
  getName(e) {
    return this.termNames
      ? this.termNames[e]
      : String((e <= this.maxNode && this.nodeSet.types[e].name) || e);
  }
  get eofTerm() {
    return this.maxNode + 1;
  }
  get topNode() {
    return this.nodeSet.types[this.top[1]];
  }
  dynamicPrecedence(e) {
    let t = this.dynamicPrecedences;
    return t == null ? 0 : t[e] || 0;
  }
  parseDialect(e) {
    let t = Object.keys(this.dialects),
      i = t.map(() => !1);
    if (e)
      for (let s of e.split(" ")) {
        let o = t.indexOf(s);
        o >= 0 && (i[o] = !0);
      }
    let r = null;
    for (let s = 0; s < t.length; s++)
      if (!i[s])
        for (let o = this.dialects[t[s]], l; (l = this.data[o++]) != 65535; )
          (r || (r = new Uint8Array(this.maxTerm + 1)))[l] = 1;
    return new qb(e, i, r);
  }
  static deserialize(e) {
    return new as(e);
  }
}
function Pt(n, e) {
  return n[e] | (n[e + 1] << 16);
}
function _b(n) {
  let e = null;
  for (let t of n) {
    let i = t.p.stoppedAt;
    (t.pos == t.p.stream.end || (i != null && t.pos > i)) &&
      t.p.parser.stateFlag(t.state, 2) &&
      (!e || e.score < t.score) &&
      (e = t);
  }
  return e;
}
function hu(n) {
  if (n.external) {
    let e = n.extend ? 1 : 0;
    return (t, i) => (n.external(t, i) << 1) | e;
  }
  return n.get;
}
const Vb = 312,
  Xb = 313,
  uu = 1,
  Yb = 2,
  Nb = 3,
  Gb = 4,
  Ub = 314,
  Hb = 316,
  Kb = 317,
  Jb = 5,
  ey = 6,
  ty = 0,
  hl = [
    9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
    8201, 8202, 8232, 8233, 8239, 8287, 12288,
  ],
  Yd = 125,
  iy = 59,
  ul = 47,
  ny = 42,
  ry = 43,
  sy = 45,
  oy = 60,
  ly = 44,
  ay = 63,
  hy = 46,
  uy = 91,
  cy = new Ib({
    start: !1,
    shift(n, e) {
      return e == Jb || e == ey || e == Hb ? n : e == Kb;
    },
    strict: !1,
  }),
  fy = new Un(
    (n, e) => {
      let { next: t } = n;
      (t == Yd || t == -1 || e.context) && n.acceptToken(Ub);
    },
    { contextual: !0, fallback: !0 }
  ),
  dy = new Un(
    (n, e) => {
      let { next: t } = n,
        i;
      hl.indexOf(t) > -1 ||
        (t == ul && ((i = n.peek(1)) == ul || i == ny)) ||
        (t != Yd && t != iy && t != -1 && !e.context && n.acceptToken(Vb));
    },
    { contextual: !0 }
  ),
  py = new Un(
    (n, e) => {
      n.next == uy && !e.context && n.acceptToken(Xb);
    },
    { contextual: !0 }
  ),
  Oy = new Un(
    (n, e) => {
      let { next: t } = n;
      if (t == ry || t == sy) {
        if ((n.advance(), t == n.next)) {
          n.advance();
          let i = !e.context && e.canShift(uu);
          n.acceptToken(i ? uu : Yb);
        }
      } else
        t == ay &&
          n.peek(1) == hy &&
          (n.advance(), n.advance(), (n.next < 48 || n.next > 57) && n.acceptToken(Nb));
    },
    { contextual: !0 }
  );
function no(n, e) {
  return (
    (n >= 65 && n <= 90) ||
    (n >= 97 && n <= 122) ||
    n == 95 ||
    n >= 192 ||
    (!e && n >= 48 && n <= 57)
  );
}
const gy = new Un((n, e) => {
    if (n.next != oy || !e.dialectEnabled(ty) || (n.advance(), n.next == ul)) return;
    let t = 0;
    for (; hl.indexOf(n.next) > -1; ) n.advance(), t++;
    if (no(n.next, !0)) {
      for (n.advance(), t++; no(n.next, !1); ) n.advance(), t++;
      for (; hl.indexOf(n.next) > -1; ) n.advance(), t++;
      if (n.next == ly) return;
      for (let i = 0; ; i++) {
        if (i == 7) {
          if (!no(n.next, !0)) return;
          break;
        }
        if (n.next != "extends".charCodeAt(i)) break;
        n.advance(), t++;
      }
    }
    n.acceptToken(Gb, -t);
  }),
  my = gf({
    "get set async static": m.modifier,
    "for while do if else switch try catch finally return throw break continue default case":
      m.controlKeyword,
    "in of await yield void typeof delete instanceof": m.operatorKeyword,
    "let var const using function class extends": m.definitionKeyword,
    "import export from": m.moduleKeyword,
    "with debugger as new": m.keyword,
    TemplateString: m.special(m.string),
    super: m.atom,
    BooleanLiteral: m.bool,
    this: m.self,
    null: m.null,
    Star: m.modifier,
    VariableName: m.variableName,
    "CallExpression/VariableName TaggedTemplateExpression/VariableName": m.function(m.variableName),
    VariableDefinition: m.definition(m.variableName),
    Label: m.labelName,
    PropertyName: m.propertyName,
    PrivatePropertyName: m.special(m.propertyName),
    "CallExpression/MemberExpression/PropertyName": m.function(m.propertyName),
    "FunctionDeclaration/VariableDefinition": m.function(m.definition(m.variableName)),
    "ClassDeclaration/VariableDefinition": m.definition(m.className),
    PropertyDefinition: m.definition(m.propertyName),
    PrivatePropertyDefinition: m.definition(m.special(m.propertyName)),
    UpdateOp: m.updateOperator,
    "LineComment Hashbang": m.lineComment,
    BlockComment: m.blockComment,
    Number: m.number,
    String: m.string,
    Escape: m.escape,
    ArithOp: m.arithmeticOperator,
    LogicOp: m.logicOperator,
    BitOp: m.bitwiseOperator,
    CompareOp: m.compareOperator,
    RegExp: m.regexp,
    Equals: m.definitionOperator,
    Arrow: m.function(m.punctuation),
    ": Spread": m.punctuation,
    "( )": m.paren,
    "[ ]": m.squareBracket,
    "{ }": m.brace,
    "InterpolationStart InterpolationEnd": m.special(m.brace),
    ".": m.derefOperator,
    ", ;": m.separator,
    "@": m.meta,
    TypeName: m.typeName,
    TypeDefinition: m.definition(m.typeName),
    "type enum interface implements namespace module declare": m.definitionKeyword,
    "abstract global Privacy readonly override": m.modifier,
    "is keyof unique infer": m.operatorKeyword,
    JSXAttributeValue: m.attributeValue,
    JSXText: m.content,
    "JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag": m.angleBracket,
    "JSXIdentifier JSXNameSpacedName": m.tagName,
    "JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName": m.attributeName,
    "JSXBuiltin/JSXIdentifier": m.standard(m.tagName),
  }),
  Sy = {
    __proto__: null,
    export: 20,
    as: 25,
    from: 33,
    default: 36,
    async: 41,
    function: 42,
    extends: 54,
    this: 58,
    true: 66,
    false: 66,
    null: 78,
    void: 82,
    typeof: 86,
    super: 102,
    new: 136,
    delete: 148,
    yield: 157,
    await: 161,
    class: 166,
    public: 229,
    private: 229,
    protected: 229,
    readonly: 231,
    instanceof: 250,
    satisfies: 253,
    in: 254,
    const: 256,
    import: 290,
    keyof: 345,
    unique: 349,
    infer: 355,
    is: 391,
    abstract: 411,
    implements: 413,
    type: 415,
    let: 418,
    var: 420,
    using: 423,
    interface: 429,
    enum: 433,
    namespace: 439,
    module: 441,
    declare: 445,
    global: 449,
    for: 468,
    of: 477,
    while: 480,
    with: 484,
    do: 488,
    if: 492,
    else: 494,
    switch: 498,
    case: 504,
    try: 510,
    catch: 514,
    finally: 518,
    return: 522,
    throw: 526,
    break: 530,
    continue: 534,
    debugger: 538,
  },
  by = {
    __proto__: null,
    async: 123,
    get: 125,
    set: 127,
    declare: 189,
    public: 191,
    private: 191,
    protected: 191,
    static: 193,
    abstract: 195,
    override: 197,
    readonly: 203,
    accessor: 205,
    new: 395,
  },
  yy = { __proto__: null, "<": 187 },
  xy = as.deserialize({
    version: 14,
    states:
      "$CdQ%TQlOOO%[QlOOO'_QpOOP(lO`OOO*zQ!0MxO'#CiO+RO#tO'#CjO+aO&jO'#CjO+oO#@ItO'#D^O.QQlO'#DdO.bQlO'#DoO%[QlO'#DwO0fQlO'#EPOOQ!0Lf'#EX'#EXO1PQ`O'#EUOOQO'#Em'#EmOOQO'#Ih'#IhO1XQ`O'#GpO1dQ`O'#ElO1iQ`O'#ElO3hQ!0MxO'#JnO6[Q!0MxO'#JoO6uQ`O'#F[O6zQ,UO'#FsOOQ!0Lf'#Fe'#FeO7VO7dO'#FeO7eQMhO'#FzO9RQ`O'#FyOOQ!0Lf'#Jo'#JoOOQ!0Lb'#Jn'#JnO9WQ`O'#GtOOQ['#K['#K[O9cQ`O'#IUO9hQ!0LrO'#IVOOQ['#J['#J[OOQ['#IZ'#IZQ`QlOOQ`QlOOO9pQ!L^O'#DsO9wQlO'#D{O:OQlO'#D}O9^Q`O'#GpO:VQMhO'#CoO:eQ`O'#EkO:pQ`O'#EvO:uQMhO'#FdO;dQ`O'#GpOOQO'#K]'#K]O;iQ`O'#K]O;wQ`O'#GxO;wQ`O'#GyO;wQ`O'#G{O9^Q`O'#HOO<nQ`O'#HRO>VQ`O'#CeO>gQ`O'#H_O>oQ`O'#HeO>oQ`O'#HgO`QlO'#HiO>oQ`O'#HkO>oQ`O'#HnO>tQ`O'#HtO>yQ!0LsO'#HzO%[QlO'#H|O?UQ!0LsO'#IOO?aQ!0LsO'#IQO9hQ!0LrO'#ISO?lQ!0MxO'#CiO@nQpO'#DiQOQ`OOO%[QlO'#D}OAUQ`O'#EQO:VQMhO'#EkOAaQ`O'#EkOAlQ!bO'#FdOOQ['#Cg'#CgOOQ!0Lb'#Dn'#DnOOQ!0Lb'#Jr'#JrO%[QlO'#JrOOQO'#Ju'#JuOOQO'#Id'#IdOBlQpO'#EdOOQ!0Lb'#Ec'#EcOOQ!0Lb'#Jy'#JyOChQ!0MSO'#EdOCrQpO'#ETOOQO'#Jt'#JtODWQpO'#JuOEeQpO'#ETOCrQpO'#EdPErO&2DjO'#CbPOOO)CDy)CDyOOOO'#I['#I[OE}O#tO,59UOOQ!0Lh,59U,59UOOOO'#I]'#I]OF]O&jO,59UOFkQ!L^O'#D`OOOO'#I_'#I_OFrO#@ItO,59xOOQ!0Lf,59x,59xOGQQlO'#I`OGeQ`O'#JpOIdQ!fO'#JpO+}QlO'#JpOIkQ`O,5:OOJRQ`O'#EmOJ`Q`O'#KPOJkQ`O'#KOOJkQ`O'#KOOJsQ`O,5;ZOJxQ`O'#J}OOQ!0Ln,5:Z,5:ZOKPQlO,5:ZOL}Q!0MxO,5:cOMnQ`O,5:kONXQ!0LrO'#J|ON`Q`O'#J{O9WQ`O'#J{ONtQ`O'#J{ON|Q`O,5;YO! RQ`O'#J{O!#WQ!fO'#JoOOQ!0Lh'#Ci'#CiO%[QlO'#EPO!#vQ!fO,5:pOOQS'#Jv'#JvOOQO-E<f-E<fO9^Q`O,5=[O!$^Q`O,5=[O!$cQlO,5;WO!&fQMhO'#EhO!(PQ`O,5;WO!(UQlO'#DvO!(`QpO,5;aO!(hQpO,5;aO%[QlO,5;aOOQ['#FS'#FSOOQ['#FU'#FUO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bO%[QlO,5;bOOQ['#FY'#FYO!(vQlO,5;sOOQ!0Lf,5;x,5;xOOQ!0Lf,5;y,5;yOOQ!0Lf,5;{,5;{O%[QlO'#IlO!*yQ!0LrO,5<gO%[QlO,5;bO!&fQMhO,5;bO!+hQMhO,5;bO!-YQMhO'#EZO%[QlO,5;vOOQ!0Lf,5;z,5;zO!-aQ,UO'#FiO!.^Q,UO'#KTO!-xQ,UO'#KTO!.eQ,UO'#KTOOQO'#KT'#KTO!.yQ,UO,5<ROOOW,5<_,5<_O!/[QlO'#FuOOOW'#Ik'#IkO7VO7dO,5<PO!/cQ,UO'#FwOOQ!0Lf,5<P,5<PO!0SQ$IUO'#CvOOQ!0Lh'#Cz'#CzO!0gO#@ItO'#DOO!1TQMjO,5<dO!1[Q`O,5<fO!2wQ(CWO'#GVO!3UQ`O'#GWO!3ZQ`O'#GWO!4yQ(CWO'#G[O!6OQpO'#G`OOQO'#Gk'#GkO!+oQMhO'#GjOOQO'#Gm'#GmO!+oQMhO'#GlO!6qQ$IUO'#JhOOQ!0Lh'#Jh'#JhO!6{Q`O'#JgO!7ZQ`O'#JfO!7cQ`O'#CuOOQ!0Lh'#Cx'#CxO!7kQ`O'#CzOOQ!0Lh'#DS'#DSOOQ!0Lh'#DU'#DUO1SQ`O'#DWO!+oQMhO'#F}O!+oQMhO'#GPO!7pQ`O'#GRO!7uQ`O'#GSO!3ZQ`O'#GYO!+oQMhO'#G_O!7zQ`O'#EnO!8iQ`O,5<eOOQ!0Lb'#Cr'#CrO!8qQ`O'#EoO!9kQpO'#EpOOQ!0Lb'#J}'#J}O!9rQ!0LrO'#K^O9hQ!0LrO,5=`O`QlO,5>pOOQ['#Jd'#JdOOQ[,5>q,5>qOOQ[-E<X-E<XO!;qQ!0MxO,5:_O!9fQpO,5:]O!>[Q!0MxO,5:gO%[QlO,5:gO!@rQ!0MxO,5:iOOQO,5@w,5@wO!AcQMhO,5=[O!AqQ!0LrO'#JeO9RQ`O'#JeO!BSQ!0LrO,59ZO!B_QpO,59ZO!BgQMhO,59ZO:VQMhO,59ZO!BrQ`O,5;WO!BzQ`O'#H^O!C`Q`O'#KaO%[QlO,5;|O!9fQpO,5<OO!ChQ`O,5=wO!CmQ`O,5=wO!CrQ`O,5=wO9hQ!0LrO,5=wO;wQ`O,5=gOOQO'#Cv'#CvO!DQQpO,5=dO!DYQMhO,5=eO!DeQ`O,5=gO!DjQ!bO,5=jO!DrQ`O'#K]O>tQ`O'#HTO9^Q`O'#HVO!DwQ`O'#HVO:VQMhO'#HXO!D|Q`O'#HXOOQ[,5=m,5=mO!ERQ`O'#HYO!EdQ`O'#CoO!EiQ`O,59PO!EsQ`O,59PO!GxQlO,59POOQ[,59P,59PO!HYQ!0LrO,59PO%[QlO,59PO!JeQlO'#HaOOQ['#Hb'#HbOOQ['#Hc'#HcO`QlO,5=yO!J{Q`O,5=yO`QlO,5>PO`QlO,5>RO!KQQ`O,5>TO`QlO,5>VO!KVQ`O,5>YO!K[QlO,5>`OOQ[,5>f,5>fO%[QlO,5>fO9hQ!0LrO,5>hOOQ[,5>j,5>jO# fQ`O,5>jOOQ[,5>l,5>lO# fQ`O,5>lOOQ[,5>n,5>nO#!SQpO'#D[O%[QlO'#JrO#!uQpO'#JrO##PQpO'#DjO##bQpO'#DjO#%sQlO'#DjO#%zQ`O'#JqO#&SQ`O,5:TO#&XQ`O'#EqO#&gQ`O'#KQO#&oQ`O,5;[O#&tQpO'#DjO#'RQpO'#ESOOQ!0Lf,5:l,5:lO%[QlO,5:lO#'YQ`O,5:lO>tQ`O,5;VO!B_QpO,5;VO!BgQMhO,5;VO:VQMhO,5;VO#'bQ`O,5@^O#'gQ07dO,5:pOOQO-E<b-E<bO#(mQ!0MSO,5;OOCrQpO,5:oO#(wQpO,5:oOCrQpO,5;OO!BSQ!0LrO,5:oOOQ!0Lb'#Eg'#EgOOQO,5;O,5;OO%[QlO,5;OO#)UQ!0LrO,5;OO#)aQ!0LrO,5;OO!B_QpO,5:oOOQO,5;U,5;UO#)oQ!0LrO,5;OPOOO'#IY'#IYP#*TO&2DjO,58|POOO,58|,58|OOOO-E<Y-E<YOOQ!0Lh1G.p1G.pOOOO-E<Z-E<ZOOOO,59z,59zO#*`Q!bO,59zOOOO-E<]-E<]OOQ!0Lf1G/d1G/dO#*eQ!fO,5>zO+}QlO,5>zOOQO,5?Q,5?QO#*oQlO'#I`OOQO-E<^-E<^O#*|Q`O,5@[O#+UQ!fO,5@[O#+]Q`O,5@jOOQ!0Lf1G/j1G/jO%[QlO,5@kO#+eQ`O'#IfOOQO-E<d-E<dO#+]Q`O,5@jOOQ!0Lb1G0u1G0uOOQ!0Ln1G/u1G/uOOQ!0Ln1G0V1G0VO%[QlO,5@hO#+yQ!0LrO,5@hO#,[Q!0LrO,5@hO#,cQ`O,5@gO9WQ`O,5@gO#,kQ`O,5@gO#,yQ`O'#IiO#,cQ`O,5@gOOQ!0Lb1G0t1G0tO!(`QpO,5:rO!(kQpO,5:rOOQS,5:t,5:tO#-kQdO,5:tO#-sQMhO1G2vO9^Q`O1G2vOOQ!0Lf1G0r1G0rO#.RQ!0MxO1G0rO#/WQ!0MvO,5;SOOQ!0Lh'#GU'#GUO#/tQ!0MzO'#JhO!$cQlO1G0rO#2PQ!fO'#JsO%[QlO'#JsO#2ZQ`O,5:bOOQ!0Lh'#D['#D[OOQ!0Lf1G0{1G0{O%[QlO1G0{OOQ!0Lf1G1e1G1eO#2`Q`O1G0{O#4tQ!0MxO1G0|O#4{Q!0MxO1G0|O#7cQ!0MxO1G0|O#7jQ!0MxO1G0|O#:QQ!0MxO1G0|O#<hQ!0MxO1G0|O#<oQ!0MxO1G0|O#<vQ!0MxO1G0|O#?^Q!0MxO1G0|O#?eQ!0MxO1G0|O#ArQ?MtO'#CiO#CmQ?MtO1G1_O#CtQ?MtO'#JoO#DXQ!0MxO,5?WOOQ!0Lb-E<j-E<jO#FfQ!0MxO1G0|O#GcQ!0MzO1G0|OOQ!0Lf1G0|1G0|O#HfQMjO'#JxO#HpQ`O,5:uO#HuQ!0MxO1G1bO#IiQ,UO,5<VO#IqQ,UO,5<WO#IyQ,UO'#FnO#JbQ`O'#FmOOQO'#KU'#KUOOQO'#Ij'#IjO#JgQ,UO1G1mOOQ!0Lf1G1m1G1mOOOW1G1x1G1xO#JxQ?MtO'#JnO#KSQ`O,5<aO!(vQlO,5<aOOOW-E<i-E<iOOQ!0Lf1G1k1G1kO#KXQpO'#KTOOQ!0Lf,5<c,5<cO#KaQpO,5<cO#KfQMhO'#DQOOOO'#I^'#I^O#KmO#@ItO,59jOOQ!0Lh,59j,59jO%[QlO1G2OO!7uQ`O'#InO#KxQ`O,5<xOOQ!0Lh,5<u,5<uO!+oQMhO'#IqO#LfQMjO,5=UO!+oQMhO'#IsO#MXQMjO,5=WO!&fQMhO,5=YOOQO1G2Q1G2QO#McQ!dO'#CrO#MvQ(CWO'#EoO#N{QpO'#G`O$ cQ!dO,5<qO$ jQ`O'#KXO9WQ`O'#KXO$ xQ`O,5<sO!+oQMhO,5<rO$ }Q`O'#GXO$!`Q`O,5<rO$!eQ!dO'#GUO$!rQ!dO'#KYO$!|Q`O'#KYO!&fQMhO'#KYO$#RQ`O,5<vO$#WQlO'#JrO$#bQpO'#GaO##bQpO'#GaO$#sQ`O'#GeO!3ZQ`O'#GhO$#xQ!0LrO'#IpO$$TQpO,5<zOOQ!0Lp,5<z,5<zO$$[QpO'#GaO$$iQpO'#GbO$$zQpO'#GbO$%PQMjO,5=UO$%aQMjO,5=WOOQ!0Lh,5=Z,5=ZO!+oQMhO,5@RO!+oQMhO,5@RO$%qQ`O'#IuO$%|Q`O,5@QO$&UQ`O,59aOOQ!0Lh,59f,59fO$&{Q$IYO,59rOOQ!0Lh'#Jl'#JlO$'nQMjO,5<iO$(aQMjO,5<kO@fQ`O,5<mOOQ!0Lh,5<n,5<nO$(kQ`O,5<tO$(pQMjO,5<yO$)QQ`O'#J{O!$cQlO1G2PO$)VQ`O1G2PO9WQ`O'#KOO9WQ`O'#EqO%[QlO'#EqO9WQ`O'#IwO$)[Q!0LrO,5@xOOQ[1G2z1G2zOOQ[1G4[1G4[OOQ!0Lf1G/y1G/yOOQ!0Lf1G/w1G/wO$+^Q!0MxO1G0ROOQ[1G2v1G2vO!&fQMhO1G2vO%[QlO1G2vO#-vQ`O1G2vO$-bQMhO'#EhOOQ!0Lb,5@P,5@PO$-lQ!0LrO,5@POOQ[1G.u1G.uO!BSQ!0LrO1G.uO!B_QpO1G.uO!BgQMhO1G.uO$-}Q`O1G0rO$.SQ`O'#CiO$._Q`O'#KbO$.gQ`O,5=xO$.lQ`O'#KbO$.qQ`O'#KbO$/PQ`O'#I}O$/_Q`O,5@{O$/gQ!fO1G1hOOQ!0Lf1G1j1G1jO9^Q`O1G3cO@fQ`O1G3cO$/nQ`O1G3cO$/sQ`O1G3cOOQ[1G3c1G3cO!DeQ`O1G3RO!&fQMhO1G3OO$/xQ`O1G3OOOQ[1G3P1G3PO!&fQMhO1G3PO$/}Q`O1G3PO$0VQpO'#G}OOQ[1G3R1G3RO!5yQpO'#IyO!DjQ!bO1G3UOOQ[1G3U1G3UOOQ[,5=o,5=oO$0_QMhO,5=qO9^Q`O,5=qO$#sQ`O,5=sO9RQ`O,5=sO!B_QpO,5=sO!BgQMhO,5=sO:VQMhO,5=sO$0mQ`O'#K`O$0xQ`O,5=tOOQ[1G.k1G.kO$0}Q!0LrO1G.kO@fQ`O1G.kO$1YQ`O1G.kO9hQ!0LrO1G.kO$3bQ!fO,5@}O$3oQ`O,5@}O9WQ`O,5@}O$3zQlO,5={O$4RQ`O,5={OOQ[1G3e1G3eO`QlO1G3eOOQ[1G3k1G3kOOQ[1G3m1G3mO>oQ`O1G3oO$4WQlO1G3qO$8[QlO'#HpOOQ[1G3t1G3tO$8iQ`O'#HvO>tQ`O'#HxOOQ[1G3z1G3zO$8qQlO1G3zO9hQ!0LrO1G4QOOQ[1G4S1G4SOOQ!0Lb'#G]'#G]O9hQ!0LrO1G4UO9hQ!0LrO1G4WO$<xQ`O,5@^O!(vQlO,5;]O9WQ`O,5;]O>tQ`O,5:UO!(vQlO,5:UO!B_QpO,5:UO$<}Q?MtO,5:UOOQO,5;],5;]O$=XQpO'#IaO$=oQ`O,5@]OOQ!0Lf1G/o1G/oO$=wQpO'#IgO$>RQ`O,5@lOOQ!0Lb1G0v1G0vO##bQpO,5:UOOQO'#Ic'#IcO$>ZQpO,5:nOOQ!0Ln,5:n,5:nO#']Q`O1G0WOOQ!0Lf1G0W1G0WO%[QlO1G0WOOQ!0Lf1G0q1G0qO>tQ`O1G0qO!B_QpO1G0qO!BgQMhO1G0qOOQ!0Lb1G5x1G5xO!BSQ!0LrO1G0ZOOQO1G0j1G0jO%[QlO1G0jO$>bQ!0LrO1G0jO$>mQ!0LrO1G0jO!B_QpO1G0ZOCrQpO1G0ZO$>{Q!0LrO1G0jOOQO1G0Z1G0ZO$?aQ!0MxO1G0jPOOO-E<W-E<WPOOO1G.h1G.hOOOO1G/f1G/fO$?kQ!bO,5<gO$?sQ!fO1G4fOOQO1G4l1G4lO%[QlO,5>zO$?}Q`O1G5vO$@VQ`O1G6UO$@_Q!fO1G6VO9WQ`O,5?QO$@iQ!0MxO1G6SO%[QlO1G6SO$@yQ!0LrO1G6SO$A[Q`O1G6RO$A[Q`O1G6RO9WQ`O1G6RO$AdQ`O,5?TO9WQ`O,5?TOOQO,5?T,5?TO$AxQ`O,5?TO$)QQ`O,5?TOOQO-E<g-E<gOOQS1G0^1G0^OOQS1G0`1G0`O#-nQ`O1G0`OOQ[7+(b7+(bO!&fQMhO7+(bO%[QlO7+(bO$BWQ`O7+(bO$BcQMhO7+(bO$BqQ!0MzO,5=UO$D|Q!0MzO,5=WO$GXQ!0MzO,5=UO$IjQ!0MzO,5=WO$K{Q!0MzO,59rO$NQQ!0MzO,5<iO%!]Q!0MzO,5<kO%$hQ!0MzO,5<yOOQ!0Lf7+&^7+&^O%&yQ!0MxO7+&^O%'mQlO'#IbO%'zQ`O,5@_O%(SQ!fO,5@_OOQ!0Lf1G/|1G/|O%(^Q`O7+&gOOQ!0Lf7+&g7+&gO%(cQ?MtO,5:cO%[QlO7+&yO%(mQ?MtO,5:_O%(zQ?MtO,5:gO%)UQ?MtO,5:iO%)`QMhO'#IeO%)jQ`O,5@dOOQ!0Lh1G0a1G0aOOQO1G1q1G1qOOQO1G1r1G1rO%)rQ!jO,5<YO!(vQlO,5<XOOQO-E<h-E<hOOQ!0Lf7+'X7+'XOOOW7+'d7+'dOOOW1G1{1G1{O%)}Q`O1G1{OOQ!0Lf1G1}1G1}OOOO,59l,59lO%*SQ!dO,59lOOOO-E<[-E<[OOQ!0Lh1G/U1G/UO%*ZQ!0MxO7+'jOOQ!0Lh,5?Y,5?YO%*}QMhO1G2dP%+UQ`O'#InPOQ!0Lh-E<l-E<lO%+rQMjO,5?]OOQ!0Lh-E<o-E<oO%,eQMjO,5?_OOQ!0Lh-E<q-E<qO%,oQ!dO1G2tO%,vQ!dO'#CrO%-^QMhO'#KOO$#WQlO'#JrOOQ!0Lh1G2]1G2]O%-eQ`O'#ImO%-yQ`O,5@sO%-yQ`O,5@sO%.RQ`O,5@sO%.^Q`O,5@sOOQO1G2_1G2_O%.lQMjO1G2^O!+oQMhO1G2^O%.|Q(CWO'#IoO%/ZQ`O,5@tO!&fQMhO,5@tO%/cQ!dO,5@tOOQ!0Lh1G2b1G2bO%1sQ!fO'#CiO%1}Q`O,5<}OOQ!0Lb,5<{,5<{O%2VQpO,5<{OOQ!0Lb,5<|,5<|OCcQ`O,5<{O%2bQpO,5<{OOQ!0Lb,5=P,5=PO$)QQ`O,5=SOOQO,5?[,5?[OOQO-E<n-E<nOOQ!0Lp1G2f1G2fO##bQpO,5<{O$#WQlO,5<}O%2pQ`O,5<|O%2{QpO,5<|O!+oQMhO'#IqO%3uQMjO1G2pO!+oQMhO'#IsO%4hQMjO1G2rO%4rQMjO1G5mO%4|QMjO1G5mOOQO,5?a,5?aOOQO-E<s-E<sOOQO1G.{1G.{O!9fQpO,59tO%[QlO,59tOOQ!0Lh,5<h,5<hO%5ZQ`O1G2XO!+oQMhO1G2`O%5`Q!0MxO7+'kOOQ!0Lf7+'k7+'kO!$cQlO7+'kO%6SQ`O,5;]OOQ!0Lb,5?c,5?cOOQ!0Lb-E<u-E<uO%6XQ!dO'#KZO#']Q`O7+(bO4UQ!fO7+(bO$BZQ`O7+(bO%6cQ!0MvO'#CiO%6vQ!0MvO,5=QO%7hQ`O,5=QOOQ!0Lb1G5k1G5kOOQ[7+$a7+$aO!BSQ!0LrO7+$aO!B_QpO7+$aO!$cQlO7+&^O%7mQ`O'#I|O%8UQ`O,5@|OOQO1G3d1G3dO9^Q`O,5@|O%8UQ`O,5@|O%8^Q`O,5@|OOQO,5?i,5?iOOQO-E<{-E<{OOQ!0Lf7+'S7+'SO%8cQ`O7+(}O9hQ!0LrO7+(}O9^Q`O7+(}O@fQ`O7+(}OOQ[7+(m7+(mO%8hQ!0MvO7+(jO!&fQMhO7+(jO!D`Q`O7+(kOOQ[7+(k7+(kO!&fQMhO7+(kO%8rQ`O'#K_O%8}Q`O,5=iOOQO,5?e,5?eOOQO-E<w-E<wOOQ[7+(p7+(pO%:aQpO'#HWOOQ[1G3]1G3]O!&fQMhO1G3]O%[QlO1G3]O%:hQ`O1G3]O%:sQMhO1G3]O9hQ!0LrO1G3_O$#sQ`O1G3_O9RQ`O1G3_O!B_QpO1G3_O!BgQMhO1G3_O%;RQ`O'#I{O%;gQ`O,5@zO%;oQpO,5@zOOQ!0Lb1G3`1G3`OOQ[7+$V7+$VO@fQ`O7+$VO9hQ!0LrO7+$VO%;zQ`O7+$VO%[QlO1G6iO%[QlO1G6jO%<PQ!0LrO1G6iO%<ZQlO1G3gO%<bQ`O1G3gO%<gQlO1G3gOOQ[7+)P7+)PO9hQ!0LrO7+)ZO`QlO7+)]OOQ['#Ke'#KeOOQ['#JO'#JOO%<nQlO,5>[OOQ[,5>[,5>[O%[QlO'#HqO%<{Q`O'#HsOOQ[,5>b,5>bO9WQ`O,5>bOOQ[,5>d,5>dOOQ[7+)f7+)fOOQ[7+)l7+)lOOQ[7+)p7+)pOOQ[7+)r7+)rO%=QQpO1G5xO%=lQ?MtO1G0wO%=vQ`O1G0wOOQO1G/p1G/pO%>RQ?MtO1G/pO>tQ`O1G/pO!(vQlO'#DjOOQO,5>{,5>{OOQO-E<_-E<_OOQO,5?R,5?ROOQO-E<e-E<eO!B_QpO1G/pOOQO-E<a-E<aOOQ!0Ln1G0Y1G0YOOQ!0Lf7+%r7+%rO#']Q`O7+%rOOQ!0Lf7+&]7+&]O>tQ`O7+&]O!B_QpO7+&]OOQO7+%u7+%uO$?aQ!0MxO7+&UOOQO7+&U7+&UO%[QlO7+&UO%>]Q!0LrO7+&UO!BSQ!0LrO7+%uO!B_QpO7+%uO%>hQ!0LrO7+&UO%>vQ!0MxO7++nO%[QlO7++nO%?WQ`O7++mO%?WQ`O7++mOOQO1G4o1G4oO9WQ`O1G4oO%?`Q`O1G4oOOQS7+%z7+%zO#']Q`O<<K|O4UQ!fO<<K|O%?nQ`O<<K|OOQ[<<K|<<K|O!&fQMhO<<K|O%[QlO<<K|O%?vQ`O<<K|O%@RQ!0MzO,5?]O%B^Q!0MzO,5?_O%DiQ!0MzO1G2^O%FzQ!0MzO1G2pO%IVQ!0MzO1G2rO%KbQ!fO,5>|O%[QlO,5>|OOQO-E<`-E<`O%KlQ`O1G5yOOQ!0Lf<<JR<<JRO%KtQ?MtO1G0rO%M{Q?MtO1G0|O%NSQ?MtO1G0|O&!TQ?MtO1G0|O&![Q?MtO1G0|O&$]Q?MtO1G0|O&&^Q?MtO1G0|O&&eQ?MtO1G0|O&&lQ?MtO1G0|O&(mQ?MtO1G0|O&(tQ?MtO1G0|O&({Q!0MxO<<JeO&*sQ?MtO1G0|O&+pQ?MvO1G0|O&,sQ?MvO'#JhO&.yQ?MtO1G1bO&/WQ?MtO1G0RO&/bQMjO,5?POOQO-E<c-E<cO!(vQlO'#FpOOQO'#KV'#KVOOQO1G1t1G1tO&/lQ`O1G1sO&/qQ?MtO,5?WOOOW7+'g7+'gOOOO1G/W1G/WO&/{Q!dO1G4tOOQ!0Lh7+(O7+(OP!&fQMhO,5?YO!+oQMhO7+(`O&0SQ`O,5?XO9WQ`O,5?XOOQO-E<k-E<kO&0bQ`O1G6_O&0bQ`O1G6_O&0jQ`O1G6_O&0uQMjO7+'xO&1VQ!dO,5?ZO&1aQ`O,5?ZO!&fQMhO,5?ZOOQO-E<m-E<mO&1fQ!dO1G6`O&1pQ`O1G6`O&1xQ`O1G2iO!&fQMhO1G2iOOQ!0Lb1G2g1G2gOOQ!0Lb1G2h1G2hO%2VQpO1G2gO!B_QpO1G2gOCcQ`O1G2gOOQ!0Lb1G2n1G2nO&1}QpO1G2gO&2]Q`O1G2iO$)QQ`O1G2hOCcQ`O1G2hO$#WQlO1G2iO&2eQ`O1G2hO&3XQMjO,5?]OOQ!0Lh-E<p-E<pO&3zQMjO,5?_OOQ!0Lh-E<r-E<rO!+oQMhO7++XOOQ!0Lh1G/`1G/`O&4UQ`O1G/`OOQ!0Lh7+'s7+'sO&4ZQMjO7+'zO&4kQ!0MxO<<KVOOQ!0Lf<<KV<<KVO&5_Q`O1G0wO!&fQMhO'#IvO&5dQ`O,5@uO&7fQ!fO<<K|O!&fQMhO1G2lOOQ[<<G{<<G{O!BSQ!0LrO<<G{O&7mQ!0MxO<<IxOOQ!0Lf<<Ix<<IxOOQO,5?h,5?hO&8aQ`O,5?hO&8fQ`O,5?hOOQO-E<z-E<zO&8tQ`O1G6hO&8tQ`O1G6hO9^Q`O1G6hO@fQ`O<<LiOOQ[<<Li<<LiO&8|Q`O<<LiO9hQ!0LrO<<LiOOQ[<<LU<<LUO%8hQ!0MvO<<LUOOQ[<<LV<<LVO!D`Q`O<<LVO&9RQpO'#IxO&9^Q`O,5@yO!(vQlO,5@yOOQ[1G3T1G3TOOQO'#Iz'#IzO9hQ!0LrO'#IzO&9fQpO,5=rOOQ[,5=r,5=rO&9mQpO'#EdO&9tQpO'#GcO&9yQ`O7+(wO&:OQ`O7+(wOOQ[7+(w7+(wO!&fQMhO7+(wO%[QlO7+(wO&:WQ`O7+(wOOQ[7+(y7+(yO9hQ!0LrO7+(yO$#sQ`O7+(yO9RQ`O7+(yO!B_QpO7+(yO&:cQ`O,5?gOOQO-E<y-E<yOOQO'#HZ'#HZO&:nQ`O1G6fO9hQ!0LrO<<GqOOQ[<<Gq<<GqO@fQ`O<<GqO&:vQ`O7+,TO&:{Q`O7+,UO%[QlO7+,TO%[QlO7+,UOOQ[7+)R7+)RO&;QQ`O7+)RO&;VQlO7+)RO&;^Q`O7+)ROOQ[<<Lu<<LuOOQ[<<Lw<<LwOOQ[-E<|-E<|OOQ[1G3v1G3vO&;cQ`O,5>]OOQ[,5>_,5>_O&;hQ`O1G3|O9WQ`O7+&cO!(vQlO7+&cOOQO7+%[7+%[O&;mQ?MtO1G6VO>tQ`O7+%[OOQ!0Lf<<I^<<I^OOQ!0Lf<<Iw<<IwO>tQ`O<<IwOOQO<<Ip<<IpO$?aQ!0MxO<<IpO%[QlO<<IpOOQO<<Ia<<IaO!BSQ!0LrO<<IaO&;wQ!0LrO<<IpO&<SQ!0MxO<= YO&<dQ`O<= XOOQO7+*Z7+*ZO9WQ`O7+*ZOOQ[ANAhANAhO&<lQ!fOANAhO!&fQMhOANAhO#']Q`OANAhO4UQ!fOANAhO&<sQ`OANAhO%[QlOANAhO&<{Q!0MzO7+'xO&?^Q!0MzO,5?]O&AiQ!0MzO,5?_O&CtQ!0MzO7+'zO&FVQ!fO1G4hO&FaQ?MtO7+&^O&HeQ?MvO,5=UO&JlQ?MvO,5=WO&J|Q?MvO,5=UO&K^Q?MvO,5=WO&KnQ?MvO,59rO&MtQ?MvO,5<iO' wQ?MvO,5<kO'$]Q?MvO,5<yO'&RQ?MtO7+'jO'&`Q?MtO7+'kO'&mQ`O,5<[OOQO7+'_7+'_OOQ!0Lh7+*`7+*`O'&rQMjO<<KzOOQO1G4s1G4sO'&yQ`O1G4sO''UQ`O1G4sO''dQ`O7++yO''dQ`O7++yO!&fQMhO1G4uO''lQ!dO1G4uO''vQ`O7++zO'(OQ`O7+(TO'(ZQ!dO7+(TOOQ!0Lb7+(R7+(ROOQ!0Lb7+(S7+(SO!B_QpO7+(ROCcQ`O7+(RO'(eQ`O7+(TO!&fQMhO7+(TO$)QQ`O7+(SO'(jQ`O7+(TOCcQ`O7+(SO'(rQMjO<<NsOOQ!0Lh7+$z7+$zO'(|Q!dO,5?bOOQO-E<t-E<tO')WQ!0MvO7+(WOOQ[AN=gAN=gO9^Q`O1G5SOOQO1G5S1G5SO')hQ`O1G5SO')mQ`O7+,SO')mQ`O7+,SO9hQ!0LrOANBTO@fQ`OANBTOOQ[ANBTANBTOOQ[ANApANApOOQ[ANAqANAqO')uQ`O,5?dOOQO-E<v-E<vO'*QQ?MtO1G6eOOQO,5?f,5?fOOQO-E<x-E<xOOQ[1G3^1G3^O'*[Q`O,5<}OOQ[<<Lc<<LcO!&fQMhO<<LcO&9yQ`O<<LcO'*aQ`O<<LcO%[QlO<<LcOOQ[<<Le<<LeO9hQ!0LrO<<LeO$#sQ`O<<LeO9RQ`O<<LeO'*iQpO1G5RO'*tQ`O7+,QOOQ[AN=]AN=]O9hQ!0LrOAN=]OOQ[<= o<= oOOQ[<= p<= pO'*|Q`O<= oO'+RQ`O<= pOOQ[<<Lm<<LmO'+WQ`O<<LmO'+]QlO<<LmOOQ[1G3w1G3wO>tQ`O7+)hO'+dQ`O<<I}O'+oQ?MtO<<I}OOQO<<Hv<<HvOOQ!0LfAN?cAN?cOOQOAN?[AN?[O$?aQ!0MxOAN?[OOQOAN>{AN>{O%[QlOAN?[OOQO<<Mu<<MuOOQ[G27SG27SO!&fQMhOG27SO#']Q`OG27SO'+yQ!fOG27SO4UQ!fOG27SO',QQ`OG27SO',YQ?MtO<<JeO',gQ?MvO1G2^O'.]Q?MvO,5?]O'0`Q?MvO,5?_O'2cQ?MvO1G2pO'4fQ?MvO1G2rO'6iQ?MtO<<KVO'6vQ?MtO<<IxOOQO1G1v1G1vO!+oQMhOANAfOOQO7+*_7+*_O'7TQ`O7+*_O'7`Q`O<= eO'7hQ!dO7+*aOOQ!0Lb<<Ko<<KoO$)QQ`O<<KoOCcQ`O<<KoO'7rQ`O<<KoO!&fQMhO<<KoOOQ!0Lb<<Km<<KmO!B_QpO<<KmO'7}Q!dO<<KoOOQ!0Lb<<Kn<<KnO'8XQ`O<<KoO!&fQMhO<<KoO$)QQ`O<<KnOOQO7+*n7+*nO9^Q`O7+*nO'8^Q`O<= nOOQ[G27oG27oO9hQ!0LrOG27oO!(vQlO1G5OO'8fQ`O7+,PO'8nQ`O1G2iO&9yQ`OANA}OOQ[ANA}ANA}O!&fQMhOANA}O'8sQ`OANA}OOQ[ANBPANBPO9hQ!0LrOANBPO$#sQ`OANBPOOQO'#H['#H[OOQO7+*m7+*mOOQ[G22wG22wOOQ[ANEZANEZOOQ[ANE[ANE[OOQ[ANBXANBXO'8{Q`OANBXOOQ[<<MS<<MSO!(vQlOAN?iOOQOG24vG24vO$?aQ!0MxOG24vO#']Q`OLD,nOOQ[LD,nLD,nO!&fQMhOLD,nO'9QQ!fOLD,nO'9XQ?MvO7+'xO':}Q?MvO,5?]O'=QQ?MvO,5?_O'?TQ?MvO7+'zO'@yQMjOG27QOOQO<<My<<MyOOQ!0LbANAZANAZO$)QQ`OANAZOCcQ`OANAZO'AZQ!dOANAZOOQ!0LbANAXANAXO'AbQ`OANAZO!&fQMhOANAZO'AmQ!dOANAZOOQ!0LbANAYANAYOOQO<<NY<<NYOOQ[LD-ZLD-ZO'AwQ?MtO7+*jOOQO'#Gd'#GdOOQ[G27iG27iO&9yQ`OG27iO!&fQMhOG27iOOQ[G27kG27kO9hQ!0LrOG27kOOQ[G27sG27sO'BRQ?MtOG25TOOQOLD*bLD*bOOQ[!$(!Y!$(!YO#']Q`O!$(!YO!&fQMhO!$(!YO'B]Q!0MzOG27QOOQ!0LbG26uG26uO$)QQ`OG26uO'DnQ`OG26uOCcQ`OG26uO'DyQ!dOG26uO!&fQMhOG26uOOQ[LD-TLD-TO&9yQ`OLD-TOOQ[LD-VLD-VOOQ[!)9Et!)9EtO#']Q`O!)9EtOOQ!0LbLD,aLD,aO$)QQ`OLD,aOCcQ`OLD,aO'EQQ`OLD,aO'E]Q!dOLD,aOOQ[!$(!o!$(!oOOQ[!.K;`!.K;`O'EdQ?MvOG27QOOQ!0Lb!$( {!$( {O$)QQ`O!$( {OCcQ`O!$( {O'GYQ`O!$( {OOQ!0Lb!)9Eg!)9EgO$)QQ`O!)9EgOCcQ`O!)9EgOOQ!0Lb!.K;R!.K;RO$)QQ`O!.K;ROOQ!0Lb!4/0m!4/0mO!(vQlO'#DwO1PQ`O'#EUO'GeQ!fO'#JnO'GlQ!L^O'#DsO'GsQlO'#D{O'GzQ!fO'#CiO'JbQ!fO'#CiO!(vQlO'#D}O'JrQlO,5;WO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO,5;bO!(vQlO'#IlO'LuQ`O,5<gO!(vQlO,5;bO'L}QMhO,5;bO'NhQMhO,5;bO!(vQlO,5;vO!&fQMhO'#GjO'L}QMhO'#GjO!&fQMhO'#GlO'L}QMhO'#GlO1SQ`O'#DWO1SQ`O'#DWO!&fQMhO'#F}O'L}QMhO'#F}O!&fQMhO'#GPO'L}QMhO'#GPO!&fQMhO'#G_O'L}QMhO'#G_O!(vQlO,5:gO'NoQpO'#D[O'NyQpO'#JrO!(vQlO,5@kO'JrQlO1G0rO( TQ?MtO'#CiO!(vQlO1G2OO!&fQMhO'#IqO'L}QMhO'#IqO!&fQMhO'#IsO'L}QMhO'#IsO( _Q!dO'#CrO!&fQMhO,5<rO'L}QMhO,5<rO'JrQlO1G2PO!(vQlO7+&yO!&fQMhO1G2^O'L}QMhO1G2^O!&fQMhO'#IqO'L}QMhO'#IqO!&fQMhO'#IsO'L}QMhO'#IsO!&fQMhO1G2`O'L}QMhO1G2`O'JrQlO7+'kO'JrQlO7+&^O!&fQMhOANAfO'L}QMhOANAfO( rQ`O'#ElO( wQ`O'#ElO(!PQ`O'#F[O(!UQ`O'#EvO(!ZQ`O'#KPO(!fQ`O'#J}O(!qQ`O,5;WO(!vQMjO,5<dO(!}Q`O'#GWO(#SQ`O'#GWO(#XQ`O,5<eO(#aQ`O,5;WO(#iQ?MtO1G1_O(#pQ`O,5<rO(#uQ`O,5<rO(#zQ`O,5<tO($PQ`O,5<tO($UQ`O1G2PO($ZQ`O1G0rO($`QMjO<<KzO($gQMjO<<KzO7eQMhO'#FzO9RQ`O'#FyOAaQ`O'#EkO!(vQlO,5;sO!3ZQ`O'#GWO!3ZQ`O'#GWO!3ZQ`O'#GYO!3ZQ`O'#GYO!+oQMhO7+(`O!+oQMhO7+(`O%,oQ!dO1G2tO%,oQ!dO1G2tO!&fQMhO,5=YO!&fQMhO,5=Y",
    stateData:
      "(%k~O'xOS'yOSTOS'zRQ~OPYOQYOSfOY!VOaqOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!rwO!uxO!y]O#t!PO$V|O%e}O%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO&S!WO&Y!XO&[!YO&^!ZO&`![O&c!]O&i!^O&o!_O&q!`O&s!aO&u!bO&w!cO(PSO(RTO(UUO(]VO(k[O(ziO~OWtO~P`OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oa!wOp!nO!P!oO!_!yO!`!vO!a!vO!y;kO#Q!pO#R!pO#S!xO#T!pO#U!pO#X!zO#Y!zO(Q!lO(RTO(UUO(a!mO(k!sO~O'z!{O~OP]XR]X[]Xa]Xo]X}]X!P]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X'v]X(]]X(n]X(u]X(v]X~O!d%PX~P(qO_!}O(R#PO(S!}O(T#PO~O_#QO(T#PO(U#PO(V#QO~Ou#SO!R#TO(^#TO(_#VO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P;oO(RTO(UUO(]VO(k[O(ziO~O!X#ZO!Y#WO!V(dP!V(rP~P+}O!Z#cO~P`OPYOQYOSfOd!jOe!iOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(RTO(UUO(]VO(k[O(ziO~Om#mO!X#iO!y]O#f#lO#g#iO(P;pO!h(oP~P.iO!i#oO(P#nO~O!u#sO!y]O%e#tO~O#h#uO~O!d#vO#h#uO~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y$_O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~Oa(bX'v(bX's(bX!h(bX!V(bX![(bX%f(bX!d(bX~P1qO#P$dO#]$eO$P$eOP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#s(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX![(cX%f(cX~Oa(cX'v(cX's(cX!V(cX!h(cXs(cX!d(cX~P4UO#]$eO~O$[$hO$^$gO$e$mO~OSfO![$nO$h$oO$j$qO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(P$sO(RTO(UUO(]$uO(u$}O(v%POg(YP~O!i%cO~O!P%fO![%gO(P%eO~O!d%kO~Oa%lO'v%lO~O}%pO~P%[O(Q!lO~P%[O%k%tO~P%[Oh%VO!i%cO(P%eO(Q!lO~Oe%{O!i%cO(P%eO~O#s$RO~O}&QO![%}O!i&PO%g&TO(P%eO(Q!lO(RTO(UUO`)TP~O!u#sO~O%p&VO!P)PX![)PX(P)PX~O(P&WO~O!r&]O#t!PO%g!QO%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO~Od&bOe&aO!u&_O%e&`O%x&^O~P;|Od&eOeyO![&dO!r&]O!uxO!y]O#t!PO%e}O%i!OO%j!OO%k!OO%n!RO%p!SO%s!TO%t!TO%v!UO~Ob&hO#]&kO%g&fO(Q!lO~P=RO!i&lO!r&pO~O!i#oO~O![XO~Oa%lO't&xO'v%lO~Oa%lO't&{O'v%lO~Oa%lO't&}O'v%lO~O's]X!V]Xs]X!h]X&W]X![]X%f]X!d]X~P(qO!_'[O!`'TO!a'TO(Q!lO(RTO(UUO~Op'RO!P'QO!X'UO(a'PO!Z(eP!Z(tP~P@YOk'_O![']O(P%eO~Oe'dO!i%cO(P%eO~O}&QO!i&PO~Op!nO!P!oO!y;kO#Q!pO#R!pO#T!pO#U!pO(Q!lO(RTO(UUO(a!mO(k!sO~O!_'jO!`'iO!a'iO#S!pO#X'kO#Y'kO~PAtOa%lOh%VO!d#vO!i%cO'v%lO(n'mO~O!m'qO#]'oO~PCSOp!nO!P!oO(RTO(UUO(a!mO(k!sO~O![XOp(iX!P(iX!_(iX!`(iX!a(iX!y(iX#Q(iX#R(iX#S(iX#T(iX#U(iX#X(iX#Y(iX(Q(iX(R(iX(U(iX(a(iX(k(iX~O!`'iO!a'iO(Q!lO~PCrO'{'uO'|'uO'}'wO~O_!}O(R'yO(S!}O(T'yO~O_#QO(T'yO(U'yO(V#QO~Os'{O~P%[Ou#SO!R#TO(^#TO(_(OO~O!X(QO!V'SX!V'YX!Y'SX!Y'YX~P+}O!Y(SO!V(dX~OP$[OR#zO[$cOo$aO}#yO!P#{O!Y(SO!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~O!V(dX~PGmO!V(XO~O!V(qX!Y(qX!d(qX!h(qX(n(qX~O#](qX#h#aX!Z(qX~PIpO#](YO!V(sX!Y(sX~O!Y(ZO!V(rX~O!V(^O~O#]$eO~PIpO!Z(_O~P`OR#zO}#yO!P#{O!i#xO(]VOP!ka[!kao!ka!Y!ka!m!ka#O!ka#k!ka#l!ka#m!ka#n!ka#o!ka#p!ka#q!ka#r!ka#s!ka#u!ka#w!ka#y!ka#z!ka(n!ka(u!ka(v!ka~Oa!ka'v!ka's!ka!V!ka!h!kas!ka![!ka%f!ka!d!ka~PKWO!h(`O~O!d#vO#](aO(n'mO!Y(pXa(pX'v(pX~O!h(pX~PMsO!P%fO![%gO!y]O#f(fO#g(eO(P%eO~O!Y(gO!h(oX~O!h(iO~O!P%fO![%gO#g(eO(P%eO~OP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#s(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX~O!d#vO!h(cX~P! aOR(kO}(jO!i#xO#P$dO!y!xa!P!xa~O!u!xa%e!xa![!xa#f!xa#g!xa(P!xa~P!#bO!u(oO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![XO!fuO!iZO!lYO!mYO!nYO!pvO!r!gO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~O#h(uO~O!X(wO!h(gP~P%[O(a(yO(k[O~O!P({O!i#xO(a(yO(k[O~OP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![!eO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(P)YO(RTO(UUO(]VO(k[O(z=dO~O!Y$_Oa$oa'v$oa's$oa!h$oa!V$oa![$oa%f$oa!d$oa~O#t)aO~P!&fOh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{%[O!P${O![$|O!f%aO!i$xO#g%bO$V%_O$r%]O$t%^O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~Og(lP~P!+oO})fO!d)eO![$]X$Y$]X$[$]X$^$]X$e$]X~O!d)eO![(wX$Y(wX$[(wX$^(wX$e(wX~O})fO~P!-xO})fO![(wX$Y(wX$[(wX$^(wX$e(wX~O![)hO$Y)lO$[)gO$^)gO$e)mO~O!X)pO~P!(vO$[$hO$^$gO$e)tO~Ok$xX}$xX#P$xX'u$xX(u$xX(v$xX~OgjXg$xXkjX!YjX#]jX~P!/nOu)vO(^)wO(_)yO~Ok*SO}){O'u)|O(u$}O(v%PO~Og)zO~P!0rOg*TO~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P*VO![*WO!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(RTO(UUO(]$uO(u$}O(v%PO~O!X*ZO(P*UO!h({P~P!1aO#h*]O~O!i*^O~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(P*`O(RTO(UUO(]$uO(u$}O(v%PO~O!X*cO!V(|P~P!3`Oo*oOp!nO!P*eO!_*mO!`*gO!a*gO!i*^O#X*nO%]*iO(Q!lO(RTO(UUO(a!mO~O!Z*lO~P!5TO#P$dOk([X}([X'u([X(u([X(v([X!Y([X#]([X~Og([X#}([X~P!6VOk*tO#]*sOg(ZX!Y(ZX~O!Y*uOg(YX~O(P&WOg(YP~Op*xO~O!i*}O~O(P(sO~Om+RO!P%fO!X#iO![%gO!y]O#f#lO#g#iO(P%eO!h(oP~O!d#vO#h+SO~O!P%fO!X+UO!Y(ZO![%gO(P%eO!V(rP~Op'XO!P+WO!X+VO(RTO(UUO(a(yO~O!Z(tP~P!9VO!Y+XOa)QX'v)QX~OP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO#y$WO#z$XO(]VO(n$YO(u#|O(v#}O~Oa!ga!Y!ga'v!ga's!ga!V!ga!h!gas!ga![!ga%f!ga!d!ga~P!9}OR#zO}#yO!P#{O!i#xO(]VOP!oa[!oao!oa!Y!oa!m!oa#O!oa#k!oa#l!oa#m!oa#n!oa#o!oa#p!oa#q!oa#r!oa#s!oa#u!oa#w!oa#y!oa#z!oa(n!oa(u!oa(v!oa~Oa!oa'v!oa's!oa!V!oa!h!oas!oa![!oa%f!oa!d!oa~P!<eOR#zO}#yO!P#{O!i#xO(]VOP!qa[!qao!qa!Y!qa!m!qa#O!qa#k!qa#l!qa#m!qa#n!qa#o!qa#p!qa#q!qa#r!qa#s!qa#u!qa#w!qa#y!qa#z!qa(n!qa(u!qa(v!qa~Oa!qa'v!qa's!qa!V!qa!h!qas!qa![!qa%f!qa!d!qa~P!>{Oh%VOk+bO![']O%f+aO~O!d+dOa(XX![(XX'v(XX!Y(XX~Oa%lO![XO'v%lO~Oh%VO!i%cO~Oh%VO!i%cO(P%eO~O!d#vO#h(uO~Ob+oO%g+pO(P+lO(RTO(UUO!Z)UP~O!Y+qO`)TX~O[+uO~O`+vO~O![%}O(P%eO(Q!lO`)TP~Oh%VO#]+{O~Oh%VOk,OO![$|O~O![,QO~O},SO![XO~O%k%tO~O!u,XO~Oe,^O~Ob,_O(P#nO(RTO(UUO!Z)SP~Oe%{O~O%g!QO(P&WO~P=RO[,dO`,cO~OPYOQYOSfOdzOeyOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO!fuO!iZO!lYO!mYO!nYO!pvO!uxO!y]O%e}O(RTO(UUO(]VO(k[O(ziO~O![!eO!r!gO$V!kO(P!dO~P!E{O`,cOa%lO'v%lO~OPYOQYOSfOd!jOe!iOmkOoYOpkOqkOwkOyYO{YO!PWO!TkO!UkO![!eO!fuO!iZO!lYO!mYO!nYO!pvO!u!hO$V!kO(P!dO(RTO(UUO(]VO(k[O(ziO~Oa,iO!rwO#t!OO%i!OO%j!OO%k!OO~P!HeO!i&lO~O&Y,oO~O![,qO~O&k,sO&m,tOP&haQ&haS&haY&haa&had&hae&ham&hao&hap&haq&haw&hay&ha{&ha!P&ha!T&ha!U&ha![&ha!f&ha!i&ha!l&ha!m&ha!n&ha!p&ha!r&ha!u&ha!y&ha#t&ha$V&ha%e&ha%g&ha%i&ha%j&ha%k&ha%n&ha%p&ha%s&ha%t&ha%v&ha&S&ha&Y&ha&[&ha&^&ha&`&ha&c&ha&i&ha&o&ha&q&ha&s&ha&u&ha&w&ha's&ha(P&ha(R&ha(U&ha(]&ha(k&ha(z&ha!Z&ha&a&hab&ha&f&ha~O(P,yO~Oh!bX!Y!OX!Z!OX!d!OX!d!bX!i!bX#]!OX~O!Y!bX!Z!bX~P# kO!d-OO#],}Oh(fX!Y#eX!Z#eX!d(fX!i(fX~O!Y(fX!Z(fX~P#!^Oh%VO!d-QO!i%cO!Y!^X!Z!^X~Op!nO!P!oO(RTO(UUO(a!mO~OP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![!eO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(RTO(UUO(]VO(k[O(z=dO~O(P<fO~P##sO!Y-UO!Z(eX~O!Z-WO~O!d-OO#],}O!Y#eX!Z#eX~O!Y-XO!Z(tX~O!Z-ZO~O!`-[O!a-[O(Q!lO~P##bO!Z-_O~P'_Ok-bO![']O~O!V-gO~Op!xa!_!xa!`!xa!a!xa#Q!xa#R!xa#S!xa#T!xa#U!xa#X!xa#Y!xa(Q!xa(R!xa(U!xa(a!xa(k!xa~P!#bO!m-lO#]-jO~PCSO!`-nO!a-nO(Q!lO~PCrOa%lO#]-jO'v%lO~Oa%lO!d#vO#]-jO'v%lO~Oa%lO!d#vO!m-lO#]-jO'v%lO(n'mO~O'{'uO'|'uO'}-sO~Os-tO~O!V'Sa!Y'Sa~P!9}O!X-xO!V'SX!Y'SX~P%[O!Y(SO!V(da~O!V(da~PGmO!Y(ZO!V(ra~O!P%fO!X-|O![%gO(P%eO!V'YX!Y'YX~O#].OO!Y(pa!h(paa(pa'v(pa~O!d#vO~P#+yO!Y(gO!h(oa~O!P%fO![%gO#g.SO(P%eO~Om.XO!P%fO!X.UO![%gO!y]O#f.WO#g.UO(P%eO!Y']X!h']X~OR.]O!i#xO~Oh%VOk.`O![']O%f._O~Oa#`i!Y#`i'v#`i's#`i!V#`i!h#`is#`i![#`i%f#`i!d#`i~P!9}Ok=pO}){O'u)|O(u$}O(v%PO~O#h#[aa#[a#]#[a'v#[a!Y#[a!h#[a![#[a!V#[a~P#.uO#h([XP([XR([X[([Xa([Xo([X!P([X!i([X!m([X#O([X#k([X#l([X#m([X#n([X#o([X#p([X#q([X#r([X#s([X#u([X#w([X#y([X#z([X'v([X(]([X(n([X!h([X!V([X's([Xs([X![([X%f([X!d([X~P!6VO!Y.mO!h(gX~P!9}O!h.pO~O!V.rO~OP$[OR#zO}#yO!P#{O!i#xO!m$[O(]VO[#jia#jio#ji!Y#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#k#ji~P#2eO#k$OO~P#2eOP$[OR#zOo$aO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO(]VO[#jia#ji!Y#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#o#ji~P#5SO#o$QO~P#5SOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO(]VOa#ji!Y#ji#w#ji#y#ji#z#ji'v#ji(n#ji(u#ji(v#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#u#ji~P#7qOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO(]VO(v#}Oa#ji!Y#ji#y#ji#z#ji'v#ji(n#ji(u#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#w$UO~P#:XO#w#ji~P#:XO#u$SO~P#7qOP$[OR#zO[$cOo$aO}#yO!P#{O!i#xO!m$[O#O$RO#k$OO#l$PO#m$PO#n$PO#o$QO#p$RO#q$RO#r$bO#s$RO#u$SO#w$UO(]VO(u#|O(v#}Oa#ji!Y#ji#z#ji'v#ji(n#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~O#y#ji~P#<}O#y$WO~P#<}OP]XR]X[]Xo]X}]X!P]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X!Y]X!Z]X~O#}]X~P#?lOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO#w;yO#y;{O#z;|O(]VO(n$YO(u#|O(v#}O~O#}.tO~P#AyO#P$dO#]<SO$P<SO#}(cX!Z(cX~P! aOa'`a!Y'`a'v'`a's'`a!h'`a!V'`as'`a!['`a%f'`a!d'`a~P!9}O[#jia#jio#ji!Y#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji'v#ji(n#ji's#ji!V#ji!h#jis#ji![#ji%f#ji!d#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k$OO#l$PO#m$PO#n$PO(]VO(u#ji(v#ji~P#D{Ok=pO}){O'u)|O(u$}O(v%POP#jiR#ji!P#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji(]#ji~P#D{O!Y.xOg(lX~P!0rOg.zO~Oa$Oi!Y$Oi'v$Oi's$Oi!V$Oi!h$Ois$Oi![$Oi%f$Oi!d$Oi~P!9}O$[.{O$^.{O~O$[.|O$^.|O~O!d)eO#].}O![$bX$Y$bX$[$bX$^$bX$e$bX~O!X/OO~O![)hO$Y/QO$[)gO$^)gO$e/RO~O!Y;}O!Z(bX~P#AyO!Z/SO~O!d)eO$e(wX~O$e/UO~Os/VO~P!&fOu)vO(^)wO(_/YO~O!P/]O~O(u$}Ok%^a}%^a'u%^a(v%^a!Y%^a#]%^a~Og%^a#}%^a~P#K}O(v%POk%`a}%`a'u%`a(u%`a!Y%`a#]%`a~Og%`a#}%`a~P#LpO!YfX!dfX!hfX!h$xX(nfX~P!/nO!X/fO!Y(ZO(P/eO!V(rP!V(|P~P!1aOo*oO!_*mO!`*gO!a*gO!i*^O#X*nO%]*iO(Q!lO(RTO(UUO~Op<cO!P/gO!X+VO!Z*lO(a<bO!Z(tP~P#NZO!h/hO~P#.uO!Y/iO!d#vO(n'mO!h({X~O!h/nO~O!P%fO!X*ZO![%gO(P%eO!h({P~O#h/pO~O!V$xX!Y$xX!d%PX~P!/nO!Y/qO!V(|X~P#.uO!d/sO~O!V/uO~OmkO(P/vO~P.iOh%VOo/{O!d#vO!i%cO(n'mO~O!d+dO~Oa%lO!Y0PO'v%lO~O!Z0RO~P!5TO!`0SO!a0SO(Q!lO~P##bOp!nO!P0TO(RTO(UUO(a!mO~O#X0VO~Og%^a!Y%^a#]%^a#}%^a~P!0rOg%`a!Y%`a#]%`a#}%`a~P!0rO(P&WOg'iX!Y'iX~O!Y*uOg(Ya~Og0`O~OR0aO}0aO!P0bO#P$dOkza'uza(uza(vza!Yza#]za~Ogza#}za~P$&ZO}){O'u)|Ok$qa(u$qa(v$qa!Y$qa#]$qa~Og$qa#}$qa~P$'VO}){O'u)|Ok$sa(u$sa(v$sa!Y$sa#]$sa~Og$sa#}$sa~P$'xO#h0eO~Og%Ra!Y%Ra#]%Ra#}%Ra~P!0rO!d#vO~O#h0hO~O!Y+XOa)Qa'v)Qa~OR#zO}#yO!P#{O!i#xO(]VOP!oi[!oio!oi!Y!oi!m!oi#O!oi#k!oi#l!oi#m!oi#n!oi#o!oi#p!oi#q!oi#r!oi#s!oi#u!oi#w!oi#y!oi#z!oi(n!oi(u!oi(v!oi~Oa!oi'v!oi's!oi!V!oi!h!ois!oi![!oi%f!oi!d!oi~P$)gOh%VOo%XOp$tOq$tOw%YOy%ZO{<XO!P${O![$|O!f=jO!i$xO#g<_O$V%_O$r<ZO$t<]O$w%`O(RTO(UUO(]$uO(u$}O(v%PO~Om0qO(P0pO~P$+}O!d+dOa(Xa![(Xa'v(Xa!Y(Xa~O#h0wO~O[]X!YfX!ZfX~O!Y0xO!Z)UX~O!Z0zO~O[0{O~Ob0}O(P+lO(RTO(UUO~O![%}O(P%eO`'qX!Y'qX~O!Y+qO`)Ta~O!h1QO~P!9}O[1TO~O`1UO~O#]1XO~Ok1[O![$|O~O(a(yO!Z)RP~Oh%VOk1eO![1bO%f1dO~O[1oO!Y1mO!Z)SX~O!Z1pO~O`1rOa%lO'v%lO~O(P#nO(RTO(UUO~O#P$dO#]$eO$P$eOP(cXR(cX[(cXo(cX}(cX!P(cX!Y(cX!i(cX!m(cX#O(cX#k(cX#l(cX#m(cX#n(cX#o(cX#p(cX#q(cX#r(cX#u(cX#w(cX#y(cX#z(cX(](cX(n(cX(u(cX(v(cX~O#s1uO&W1vOa(cX~P$1eO#]$eO#s1uO&W1vO~Oa1xO~P%[Oa1zO~O&a1}OP&_iQ&_iS&_iY&_ia&_id&_ie&_im&_io&_ip&_iq&_iw&_iy&_i{&_i!P&_i!T&_i!U&_i![&_i!f&_i!i&_i!l&_i!m&_i!n&_i!p&_i!r&_i!u&_i!y&_i#t&_i$V&_i%e&_i%g&_i%i&_i%j&_i%k&_i%n&_i%p&_i%s&_i%t&_i%v&_i&S&_i&Y&_i&[&_i&^&_i&`&_i&c&_i&i&_i&o&_i&q&_i&s&_i&u&_i&w&_i's&_i(P&_i(R&_i(U&_i(]&_i(k&_i(z&_i!Z&_ib&_i&f&_i~Ob2TO!Z2RO&f2SO~P`O![XO!i2VO~O&m,tOP&hiQ&hiS&hiY&hia&hid&hie&him&hio&hip&hiq&hiw&hiy&hi{&hi!P&hi!T&hi!U&hi![&hi!f&hi!i&hi!l&hi!m&hi!n&hi!p&hi!r&hi!u&hi!y&hi#t&hi$V&hi%e&hi%g&hi%i&hi%j&hi%k&hi%n&hi%p&hi%s&hi%t&hi%v&hi&S&hi&Y&hi&[&hi&^&hi&`&hi&c&hi&i&hi&o&hi&q&hi&s&hi&u&hi&w&hi's&hi(P&hi(R&hi(U&hi(]&hi(k&hi(z&hi!Z&hi&a&hib&hi&f&hi~O!V2]O~O!Y!^a!Z!^a~P#AyOp!nO!P!oO!X2cO(a!mO!Y'TX!Z'TX~P@YO!Y-UO!Z(ea~O!Y'ZX!Z'ZX~P!9VO!Y-XO!Z(ta~O!Z2jO~P'_Oa%lO#]2sO'v%lO~Oa%lO!d#vO#]2sO'v%lO~Oa%lO!d#vO!m2wO#]2sO'v%lO(n'mO~Oa%lO'v%lO~P!9}O!Y$_Os$oa~O!V'Si!Y'Si~P!9}O!Y(SO!V(di~O!Y(ZO!V(ri~O!V(si!Y(si~P!9}O!Y(pi!h(pia(pi'v(pi~P!9}O#]2yO!Y(pi!h(pia(pi'v(pi~O!Y(gO!h(oi~O!P%fO![%gO!y]O#f3OO#g2}O(P%eO~O!P%fO![%gO#g2}O(P%eO~Ok3VO![']O%f3UO~Oh%VOk3VO![']O%f3UO~O#h%^aP%^aR%^a[%^aa%^ao%^a!P%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'v%^a(]%^a(n%^a!h%^a!V%^a's%^as%^a![%^a%f%^a!d%^a~P#K}O#h%`aP%`aR%`a[%`aa%`ao%`a!P%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'v%`a(]%`a(n%`a!h%`a!V%`a's%`as%`a![%`a%f%`a!d%`a~P#LpO#h%^aP%^aR%^a[%^aa%^ao%^a!P%^a!Y%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a'v%^a(]%^a(n%^a!h%^a!V%^a's%^a#]%^as%^a![%^a%f%^a!d%^a~P#.uO#h%`aP%`aR%`a[%`aa%`ao%`a!P%`a!Y%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a'v%`a(]%`a(n%`a!h%`a!V%`a's%`a#]%`as%`a![%`a%f%`a!d%`a~P#.uO#hzaPza[zaazaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza'vza(]za(nza!hza!Vza'szasza![za%fza!dza~P$&ZO#h$qaP$qaR$qa[$qaa$qao$qa!P$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa'v$qa(]$qa(n$qa!h$qa!V$qa's$qas$qa![$qa%f$qa!d$qa~P$'VO#h$saP$saR$sa[$saa$sao$sa!P$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa'v$sa(]$sa(n$sa!h$sa!V$sa's$sas$sa![$sa%f$sa!d$sa~P$'xO#h%RaP%RaR%Ra[%Raa%Rao%Ra!P%Ra!Y%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra'v%Ra(]%Ra(n%Ra!h%Ra!V%Ra's%Ra#]%Ras%Ra![%Ra%f%Ra!d%Ra~P#.uOa#`q!Y#`q'v#`q's#`q!V#`q!h#`qs#`q![#`q%f#`q!d#`q~P!9}O!X3_O!Y'UX!h'UX~P%[O!Y.mO!h(ga~O!Y.mO!h(ga~P!9}O!V3bO~O#}!ka!Z!ka~PKWO#}!ga!Y!ga!Z!ga~P#AyO#}!oa!Z!oa~P!<eO#}!qa!Z!qa~P!>{Og'XX!Y'XX~P!+oO!Y.xOg(la~OSfO![3vO$c3wO~O!Z3{O~Os3|O~P#.uOa$lq!Y$lq'v$lq's$lq!V$lq!h$lqs$lq![$lq%f$lq!d$lq~P!9}O!V4OO~P!&fO!P4PO~O}){O'u)|O(v%POk'ea(u'ea!Y'ea#]'ea~Og'ea#}'ea~P%+ZO}){O'u)|Ok'ga(u'ga(v'ga!Y'ga#]'ga~Og'ga#}'ga~P%+|O(n$YO~P#.uO!VfX!V$xX!YfX!Y$xX!d%PX#]fX~P!/nO(P<lO~P!1aO!P%fO!X4SO![%gO(P%eO!Y'aX!h'aX~O!Y/iO!h({a~O!Y/iO!d#vO!h({a~O!Y/iO!d#vO(n'mO!h({a~Og$zi!Y$zi#]$zi#}$zi~P!0rO!X4[O!V'cX!Y'cX~P!3`O!Y/qO!V(|a~O!Y/qO!V(|a~P#.uOP]XR]X[]Xo]X}]X!P]X!V]X!Y]X!i]X!m]X#O]X#P]X#]]X#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X~O!d%WX#s%WX~P%/mO!d#vO#s4aO~Oh%VO!d#vO!i%cO~Oh%VOo4fO!i%cO(n'mO~Oo4kO!d#vO(n'mO~Op!nO!P4lO(RTO(UUO(a!mO~O(u$}Ok%^i}%^i'u%^i(v%^i!Y%^i#]%^i~Og%^i#}%^i~P%3^O(v%POk%`i}%`i'u%`i(u%`i!Y%`i#]%`i~Og%`i#}%`i~P%4POg(Zi!Y(Zi~P!0rO#]4rOg(Zi!Y(Zi~P!0rO!h4uO~Oa$mq!Y$mq'v$mq's$mq!V$mq!h$mqs$mq![$mq%f$mq!d$mq~P!9}O!V4yO~O!Y4zO![(}X~P#.uOa$xX![$xX%Z]X'v$xX!Y$xX~P!/nO%Z4}OalXklX}lX![lX'ulX'vlX(ulX(vlX!YlX~O%Z4}O~Ob5TO%g5UO(P+lO(RTO(UUO!Y'pX!Z'pX~O!Y0xO!Z)Ua~O[5YO~O`5ZO~Oa%lO'v%lO~P#.uO!Y5cO#]5eO!Z)RX~O!Z5fO~Oo5lOp!nO!P*eO!_!yO!`!vO!a!vO!y;kO#Q!pO#R!pO#S!pO#T!pO#U!pO#X5kO#Y!zO(Q!lO(RTO(UUO(a!mO(k!sO~O!Z5jO~P%9SOk5qO![1bO%f5pO~Oh%VOk5qO![1bO%f5pO~Ob5xO(P#nO(RTO(UUO!Y'oX!Z'oX~O!Y1mO!Z)Sa~O(RTO(UUO(a5zO~O`6OO~O#s6RO&W6SO~PMsO!h6TO~P%[Oa6VO~Oa6VO~P%[Ob2TO!Z6[O&f2SO~P`O!d6^O~O!d6`Oh(fi!Y(fi!Z(fi!d(fi!i(fio(fi(n(fi~O!Y#ei!Z#ei~P#AyO#]6aO!Y#ei!Z#ei~O!Y!^i!Z!^i~P#AyOa%lO#]6jO'v%lO~Oa%lO!d#vO#]6jO'v%lO~O!Y(pq!h(pqa(pq'v(pq~P!9}O!Y(gO!h(oq~O!P%fO![%gO#g6qO(P%eO~O![']O%f6tO~Ok6xO![']O%f6tO~O#h'eaP'eaR'ea['eaa'eao'ea!P'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea'v'ea(]'ea(n'ea!h'ea!V'ea's'eas'ea!['ea%f'ea!d'ea~P%+ZO#h'gaP'gaR'ga['gaa'gao'ga!P'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga'v'ga(]'ga(n'ga!h'ga!V'ga's'gas'ga!['ga%f'ga!d'ga~P%+|O#h$ziP$ziR$zi[$zia$zio$zi!P$zi!Y$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi'v$zi(]$zi(n$zi!h$zi!V$zi's$zi#]$zis$zi![$zi%f$zi!d$zi~P#.uO#h%^iP%^iR%^i[%^ia%^io%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i'v%^i(]%^i(n%^i!h%^i!V%^i's%^is%^i![%^i%f%^i!d%^i~P%3^O#h%`iP%`iR%`i[%`ia%`io%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i'v%`i(]%`i(n%`i!h%`i!V%`i's%`is%`i![%`i%f%`i!d%`i~P%4PO!Y'Ua!h'Ua~P!9}O!Y.mO!h(gi~O#}#`i!Y#`i!Z#`i~P#AyOP$[OR#zO}#yO!P#{O!i#xO!m$[O(]VO[#jio#ji#O#ji#l#ji#m#ji#n#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#k#ji~P%LRO#k;sO~P%LROP$[OR#zOo<PO}#yO!P#{O!i#xO!m$[O#k;sO#l;tO#m;tO#n;tO(]VO[#ji#O#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#o#ji~P%NZO#o;uO~P%NZOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO(]VO#w#ji#y#ji#z#ji#}#ji(n#ji(u#ji(v#ji!Y#ji!Z#ji~O#u#ji~P&!cOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO(]VO(v#}O#y#ji#z#ji#}#ji(n#ji(u#ji!Y#ji!Z#ji~O#w;yO~P&$dO#w#ji~P&$dO#u;wO~P&!cOP$[OR#zO[<ROo<PO}#yO!P#{O!i#xO!m$[O#O;vO#k;sO#l;tO#m;tO#n;tO#o;uO#p;vO#q;vO#r<QO#s;vO#u;wO#w;yO(]VO(u#|O(v#}O#z#ji#}#ji(n#ji!Y#ji!Z#ji~O#y#ji~P&&sO#y;{O~P&&sOa#{y!Y#{y'v#{y's#{y!V#{y!h#{ys#{y![#{y%f#{y!d#{y~P!9}O[#jio#ji#O#ji#o#ji#p#ji#q#ji#r#ji#s#ji#u#ji#w#ji#y#ji#z#ji#}#ji(n#ji!Y#ji!Z#ji~OP$[OR#zO}#yO!P#{O!i#xO!m$[O#k;sO#l;tO#m;tO#n;tO(]VO(u#ji(v#ji~P&)oOk=qO}){O'u)|O(u$}O(v%POP#jiR#ji!P#ji!i#ji!m#ji#k#ji#l#ji#m#ji#n#ji(]#ji~P&)oO#P$dOP([XR([X[([Xk([Xo([X}([X!P([X!i([X!m([X#O([X#k([X#l([X#m([X#n([X#o([X#p([X#q([X#r([X#s([X#u([X#w([X#y([X#z([X#}([X'u([X(]([X(n([X(u([X(v([X!Y([X!Z([X~O#}$Oi!Y$Oi!Z$Oi~P#AyO#}!oi!Z!oi~P$)gOg'Xa!Y'Xa~P!0rO!Z7[O~O!Y'`a!Z'`a~P#AyO!V7]O~P#.uO!d#vO(n'mO!Y'aa!h'aa~O!Y/iO!h({i~O!Y/iO!d#vO!h({i~Og$zq!Y$zq#]$zq#}$zq~P!0rO!V'ca!Y'ca~P#.uO!d7dO~O!Y/qO!V(|i~P#.uO!Y/qO!V(|i~O!V7gO~Oh%VOo7lO!i%cO(n'mO~O!d#vO#s7nO~Oo7qO!d#vO(n'mO~O}){O'u)|O(v%POk'fa(u'fa!Y'fa#]'fa~Og'fa#}'fa~P&2pO}){O'u)|Ok'ha(u'ha(v'ha!Y'ha#]'ha~Og'ha#}'ha~P&3cO!V7sO~Og$|q!Y$|q#]$|q#}$|q~P!0rOa$my!Y$my'v$my's$my!V$my!h$mys$my![$my%f$my!d$my~P!9}O!d6`O~O!Y4zO![(}a~O![']OP$SaR$Sa[$Sao$Sa}$Sa!P$Sa!Y$Sa!i$Sa!m$Sa#O$Sa#k$Sa#l$Sa#m$Sa#n$Sa#o$Sa#p$Sa#q$Sa#r$Sa#s$Sa#u$Sa#w$Sa#y$Sa#z$Sa(]$Sa(n$Sa(u$Sa(v$Sa~O%f6tO~P&5lOa#`y!Y#`y'v#`y's#`y!V#`y!h#`ys#`y![#`y%f#`y!d#`y~P!9}O[7xO~Ob7zO(P+lO(RTO(UUO~O!Y0xO!Z)Ui~O`8OO~O(a(yO!Y'lX!Z'lX~O!Y5cO!Z)Ra~O!Z8XO~P%9SO(k!sO~P$$iO#X8YO~O![1bO~O![1bO%f8[O~Ok8_O![1bO%f8[O~O[8dO!Y'oa!Z'oa~O!Y1mO!Z)Si~O!h8hO~O!h8iO~O!h8lO~O!h8lO~P%[Oa8nO~O!d8oO~O!h8pO~O!Y(si!Z(si~P#AyOa%lO#]8xO'v%lO~O!Y(py!h(pya(py'v(py~P!9}O!Y(gO!h(oy~O%f8{O~P&5lO![']O%f8{O~O#h$zqP$zqR$zq[$zqa$zqo$zq!P$zq!Y$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq'v$zq(]$zq(n$zq!h$zq!V$zq's$zq#]$zqs$zq![$zq%f$zq!d$zq~P#.uO#h'faP'faR'fa['faa'fao'fa!P'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa'v'fa(]'fa(n'fa!h'fa!V'fa's'fas'fa!['fa%f'fa!d'fa~P&2pO#h'haP'haR'ha['haa'hao'ha!P'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha'v'ha(]'ha(n'ha!h'ha!V'ha's'has'ha!['ha%f'ha!d'ha~P&3cO#h$|qP$|qR$|q[$|qa$|qo$|q!P$|q!Y$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q'v$|q(]$|q(n$|q!h$|q!V$|q's$|q#]$|qs$|q![$|q%f$|q!d$|q~P#.uO!Y'Ui!h'Ui~P!9}O#}#`q!Y#`q!Z#`q~P#AyO(u$}OP%^aR%^a[%^ao%^a!P%^a!i%^a!m%^a#O%^a#k%^a#l%^a#m%^a#n%^a#o%^a#p%^a#q%^a#r%^a#s%^a#u%^a#w%^a#y%^a#z%^a#}%^a(]%^a(n%^a!Y%^a!Z%^a~Ok%^a}%^a'u%^a(v%^a~P&FnO(v%POP%`aR%`a[%`ao%`a!P%`a!i%`a!m%`a#O%`a#k%`a#l%`a#m%`a#n%`a#o%`a#p%`a#q%`a#r%`a#s%`a#u%`a#w%`a#y%`a#z%`a#}%`a(]%`a(n%`a!Y%`a!Z%`a~Ok%`a}%`a'u%`a(u%`a~P&HuOk=qO}){O'u)|O(v%PO~P&FnOk=qO}){O'u)|O(u$}O~P&HuOR0aO}0aO!P0bO#P$dOPza[zakzaoza!iza!mza#Oza#kza#lza#mza#nza#oza#pza#qza#rza#sza#uza#wza#yza#zza#}za'uza(]za(nza(uza(vza!Yza!Zza~O}){O'u)|OP$qaR$qa[$qak$qao$qa!P$qa!i$qa!m$qa#O$qa#k$qa#l$qa#m$qa#n$qa#o$qa#p$qa#q$qa#r$qa#s$qa#u$qa#w$qa#y$qa#z$qa#}$qa(]$qa(n$qa(u$qa(v$qa!Y$qa!Z$qa~O}){O'u)|OP$saR$sa[$sak$sao$sa!P$sa!i$sa!m$sa#O$sa#k$sa#l$sa#m$sa#n$sa#o$sa#p$sa#q$sa#r$sa#s$sa#u$sa#w$sa#y$sa#z$sa#}$sa(]$sa(n$sa(u$sa(v$sa!Y$sa!Z$sa~Ok=qO}){O'u)|O(u$}O(v%PO~OP%RaR%Ra[%Rao%Ra!P%Ra!i%Ra!m%Ra#O%Ra#k%Ra#l%Ra#m%Ra#n%Ra#o%Ra#p%Ra#q%Ra#r%Ra#s%Ra#u%Ra#w%Ra#y%Ra#z%Ra#}%Ra(]%Ra(n%Ra!Y%Ra!Z%Ra~P'#zO#}$lq!Y$lq!Z$lq~P#AyO#}$mq!Y$mq!Z$mq~P#AyO!Z9YO~O#}9ZO~P!0rO!d#vO!Y'ai!h'ai~O!d#vO(n'mO!Y'ai!h'ai~O!Y/iO!h({q~O!V'ci!Y'ci~P#.uO!Y/qO!V(|q~Oo9bO!d#vO(n'mO~O[9dO!V9cO~P#.uO!V9cO~O!d#vO#s9jO~Og(Zy!Y(Zy~P!0rO!Y'ja!['ja~P#.uOa%Yq![%Yq'v%Yq!Y%Yq~P#.uO[9mO~O!Y0xO!Z)Uq~O#]9qO!Y'la!Z'la~O!Y5cO!Z)Ri~P#AyO!P9sO~O![1bO%f9vO~O(RTO(UUO(a9{O~O!Y1mO!Z)Sq~O!h:OO~O!h:PO~O!h:QO~O!h:QO~P%[O#]:TO!Y#ey!Z#ey~O!Y#ey!Z#ey~P#AyO%f:YO~P&5lO![']O%f:YO~O#}#{y!Y#{y!Z#{y~P#AyOP$ziR$zi[$zio$zi!P$zi!i$zi!m$zi#O$zi#k$zi#l$zi#m$zi#n$zi#o$zi#p$zi#q$zi#r$zi#s$zi#u$zi#w$zi#y$zi#z$zi#}$zi(]$zi(n$zi!Y$zi!Z$zi~P'#zO}){O'u)|O(v%POP'eaR'ea['eak'eao'ea!P'ea!i'ea!m'ea#O'ea#k'ea#l'ea#m'ea#n'ea#o'ea#p'ea#q'ea#r'ea#s'ea#u'ea#w'ea#y'ea#z'ea#}'ea(]'ea(n'ea(u'ea!Y'ea!Z'ea~O}){O'u)|OP'gaR'ga['gak'gao'ga!P'ga!i'ga!m'ga#O'ga#k'ga#l'ga#m'ga#n'ga#o'ga#p'ga#q'ga#r'ga#s'ga#u'ga#w'ga#y'ga#z'ga#}'ga(]'ga(n'ga(u'ga(v'ga!Y'ga!Z'ga~O(u$}OP%^iR%^i[%^ik%^io%^i}%^i!P%^i!i%^i!m%^i#O%^i#k%^i#l%^i#m%^i#n%^i#o%^i#p%^i#q%^i#r%^i#s%^i#u%^i#w%^i#y%^i#z%^i#}%^i'u%^i(]%^i(n%^i(v%^i!Y%^i!Z%^i~O(v%POP%`iR%`i[%`ik%`io%`i}%`i!P%`i!i%`i!m%`i#O%`i#k%`i#l%`i#m%`i#n%`i#o%`i#p%`i#q%`i#r%`i#s%`i#u%`i#w%`i#y%`i#z%`i#}%`i'u%`i(]%`i(n%`i(u%`i!Y%`i!Z%`i~O#}$my!Y$my!Z$my~P#AyO#}#`y!Y#`y!Z#`y~P#AyO!d#vO!Y'aq!h'aq~O!Y/iO!h({y~O!V'cq!Y'cq~P#.uOo:dO!d#vO(n'mO~O[:hO!V:gO~P#.uO!V:gO~O!Y0xO!Z)Uy~O!Y5cO!Z)Rq~O(P:nO~O![1bO%f:qO~O!h:tO~O%f:yO~P&5lOP$zqR$zq[$zqo$zq!P$zq!i$zq!m$zq#O$zq#k$zq#l$zq#m$zq#n$zq#o$zq#p$zq#q$zq#r$zq#s$zq#u$zq#w$zq#y$zq#z$zq#}$zq(]$zq(n$zq!Y$zq!Z$zq~P'#zO}){O'u)|O(v%POP'faR'fa['fak'fao'fa!P'fa!i'fa!m'fa#O'fa#k'fa#l'fa#m'fa#n'fa#o'fa#p'fa#q'fa#r'fa#s'fa#u'fa#w'fa#y'fa#z'fa#}'fa(]'fa(n'fa(u'fa!Y'fa!Z'fa~O}){O'u)|OP'haR'ha['hak'hao'ha!P'ha!i'ha!m'ha#O'ha#k'ha#l'ha#m'ha#n'ha#o'ha#p'ha#q'ha#r'ha#s'ha#u'ha#w'ha#y'ha#z'ha#}'ha(]'ha(n'ha(u'ha(v'ha!Y'ha!Z'ha~OP$|qR$|q[$|qo$|q!P$|q!i$|q!m$|q#O$|q#k$|q#l$|q#m$|q#n$|q#o$|q#p$|q#q$|q#r$|q#s$|q#u$|q#w$|q#y$|q#z$|q#}$|q(]$|q(n$|q!Y$|q!Z$|q~P'#zOg%b!Z!Y%b!Z#]%b!Z#}%b!Z~P!0rO!V:}O~P#.uOo;OO!d#vO(n'mO~O[;QO!V:}O~P#.uO!Y'lq!Z'lq~P#AyO!Y#e!Z!Z#e!Z~P#AyO#h%b!ZP%b!ZR%b!Z[%b!Za%b!Zo%b!Z!P%b!Z!Y%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z'v%b!Z(]%b!Z(n%b!Z!h%b!Z!V%b!Z's%b!Z#]%b!Zs%b!Z![%b!Z%f%b!Z!d%b!Z~P#.uOo;YO!d#vO(n'mO~O!V;ZO~P#.uOo;bO!d#vO(n'mO~O!V;cO~P#.uOP%b!ZR%b!Z[%b!Zo%b!Z!P%b!Z!i%b!Z!m%b!Z#O%b!Z#k%b!Z#l%b!Z#m%b!Z#n%b!Z#o%b!Z#p%b!Z#q%b!Z#r%b!Z#s%b!Z#u%b!Z#w%b!Z#y%b!Z#z%b!Z#}%b!Z(]%b!Z(n%b!Z!Y%b!Z!Z%b!Z~P'#zOo;fO!d#vO(n'mO~Os(bX~P1qO}%pO~P!(vO(Q!lO~P!(vO!VfX!YfX#]fX~P%/mOP]XR]X[]Xo]X}]X!P]X!Y]X!YfX!i]X!m]X#O]X#P]X#]]X#]fX#hfX#k]X#l]X#m]X#n]X#o]X#p]X#q]X#r]X#s]X#u]X#w]X#y]X#z]X$P]X(]]X(n]X(u]X(v]X~O!dfX!h]X!hfX(nfX~P'HXOP;jOQ;jOSfOd=fOe!iOmkOo;jOpkOqkOwkOy;jO{;jO!PWO!TkO!UkO![XO!f;mO!iZO!l;jO!m;jO!n;jO!p;nO!r;qO!u!hO$V!kO(P)YO(RTO(UUO(]VO(k[O(z=dO~O!Y;}O!Z$oa~Oh%VOm%WOo%XOp$tOq$tOw%YOy%ZO{<YO!P${O![$|O!f=kO!i$xO#g<`O$V%_O$r<[O$t<^O$w%`O(P(sO(RTO(UUO(]$uO(u$}O(v%PO~O#t)aO~P'L}Oo!bX(n!bX~P# kOo(fX(n(fX~P#!^O!Z]X!ZfX~P'HXO!VfX!V$xX!YfX!Y$xX#]fX~P!/nO#h;rO~O!d#vO#h;rO~O#]<SO~O#s;vO~O#]<dO!Y(sX!Z(sX~O#]<SO!Y(qX!Z(qX~O#h<eO~Og<gO~P!0rO#h<mO~O#h<nO~O!d#vO#h<oO~O!d#vO#h<eO~O#}<pO~P#AyO#h<qO~O#h<rO~O#h<wO~O#h<xO~O#h<yO~O#h<zO~O#}<{O~P!0rO#}<|O~P!0rO#P#Q#R#T#U#X#f#g#r(z$r$t$w%Z%e%f%g%n%p%s%t%v%x~'zT#l!U'x(Q#mp#k#no}'y$['y(P$^(a~",
    goto: "$6w)YPPPPPP)ZPP)^P)oP+P/RPPPP6XPP6oPP<g@VP@jP@jPPP@jPBnP@jP@jP@jPBrPBwPCfPH`PPPHdPPPPHdKgPPPKmL_PHdPHdPPNmHdPPPHdPHdP!!tHdP!&[!'a!'jP!(^!(b!(^!+oPPPPPPP!,`!'aPP!,p!.bP!1nHdHd!1s!5P!9m!9m!=lPPP!=tHdPPPPPPPPPPP!ATP!BbPPHd!CsPHdPHdHdHdHdHdPHd!EVP!HaP!KgP!Kk!Ku!Ky!KyP!H^P!K}!K}P# TP# XHdHd# _#$dBr@jP@jP@j@jP#%q@j@j#(P@j#*s@j#,{@j@j#-k#/{#/{#0Q#0Z#/{#0fP#/{P@j#1O@j#4u@j@j6XPPP#8rPPP#9]#9]P#9]P#9s#9]PP#9yP#9pP#9p#:^#9p#:x#;O#;R)^#;U)^P#;]#;]#;]P)^P)^P)^P)^PP)^P#;c#;fP#;f)^P#;jP#;mP)^P)^P)^P)^P)^P)^)^PP#;s#;y#<U#<[#<b#<h#<n#<|#=S#=^#=d#=n#=t#>U#>[#>|#?`#?f#?l#?z#@a#BQ#B`#Bg#C}#D]#Ey#FX#F_#Fe#Fk#Fu#F{#GR#G]#Go#GuPPPPPPPPPPP#G{PPPPPPP#Hp#Kw#Ma#Mh#MpPPP$%OP$%X$(Q$.k$.n$.q$/p$/s$/z$0SP$0Y$0]P$0y$0}$1u$3T$3Y$3pPP$3u$3{$4PP$4S$4W$4[$5W$5o$6W$6[$6_$6b$6h$6k$6o$6sR!|RoqOXst!Z#d%k&o&q&r&t,l,q1}2QY!vQ']-^1b5iQ%rvQ%zyQ&R|Q&g!VS'T!e-UQ'c!iS'i!r!yU*g$|*W*kQ+j%{Q+w&TQ,]&aQ-['[Q-f'dQ-n'jQ0S*mQ1l,^R<a;n%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W,i,l,q-b-j-x.O.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3_4l5q6R6S6V6j8_8n8xS#q];k!r)[$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gU*z%[<X<YQ+o%}Q,_&dQ,f&lQ0n+bQ0r+dQ0}+pQ1t,dQ3R.`Q5T0xQ5x1mQ6v3VQ7z5UR9O6x'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g!S!nQ!r!v!y!z$|'T'[']'i'j'k*g*k*m*n-U-[-^-n0S0V1b5i5k%S$ti#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qQ&U|Q'R!eS'X%g-XQ+o%}Q,_&dQ0d*}Q0}+pQ1S+vQ1s,cQ1t,dQ5T0xQ5^1UQ5x1mQ5{1oQ5|1rQ7z5UQ7}5ZQ8g6OQ9p8OQ9|8dR<c*WrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QR,a&h&z^OPXYstuvwz!Z!`!g!j!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=f=g[#]WZ#W#Z'U(Q!b%hm#h#i#l$x%c%f(Z(e(f(g*V*Z*^+U+V+X,h-O-|.S.T.U.W/f/i2V2}3O4S6`6qQ%uxQ%yyS&O|&TQ&[!TQ'`!hQ'b!iQ(n#sS+i%z%{Q+m%}Q,W&_Q,[&aS-e'c'dQ.b(oQ0v+jQ0|+pQ1O+qQ1R+uQ1g,XS1k,],^Q2o-fQ5S0xQ5W0{Q5]1TQ5w1lQ7y5UQ7|5YQ9l7xR:k9m!O$zi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m!^%wy!i!u%y%z%{'S'b'c'd'h'r*f+i+j-R-e-f-m/y/|0v2h2o2v4d4e4h7k9fQ+c%uQ+|&XQ,P&YQ,Z&aQ.a(nQ1f,WU1j,[,],^Q3W.bQ5r1gS5v1k1lQ8c5w#d=h#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qo=i<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|W%Ti%V*u=dS&X!Q&fQ&Y!RQ&Z!SR+z&V%T%Si#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qT)w$u)xV*z%[<X<YW'X!e%g*W-XS(z#y#zQ+^%pQ+t&QS.Z(j(kQ1],QQ4s0aR8S5c'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g$i$^c#Y#e%o%q%s(P(V(q(v)O)P)Q)R)S)T)U)V)W)X)Z)])_)d)n+_+s-S-q-v-{-}.l.o.s.u.v.w/Z0f2^2a2q2x3^3c3d3e3f3g3h3i3j3k3l3m3n3o3r3s3z4w5Q6c6i6n6}7O7X7Y8U8r8v9Q9W9X:V:m:u;l=ZT#TV#U'RkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ'V!eR2d-U!W!nQ!e!r!v!y!z$|'T'[']'i'j'k*W*g*k*m*n-U-[-^-n0S0V1b5i5kR1_,SnqOXst!Z#d%k&o&q&r&t,l,q1}2QQ&v!^Q's!xS(p#u;rQ+g%xQ,U&[Q,V&^Q-c'aQ-p'lS.k(u<eS0g+S<oQ0t+hQ1a,TQ2U,sQ2W,tQ2`-PQ2m-dQ2p-hS4x0h<yQ5O0uS5R0w<zQ6b2bQ6f2nQ6k2uQ7w5PQ8s6dQ8t6gQ8w6lR:S8p$d$]c#Y#e%q%s(P(V(q(v)O)P)Q)R)S)T)U)V)W)X)Z)])_)d)n+_+s-S-q-v-{-}.l.o.s.v.w/Z0f2^2a2q2x3^3c3d3e3f3g3h3i3j3k3l3m3n3o3r3s3z4w5Q6c6i6n6}7O7X7Y8U8r8v9Q9W9X:V:m:u;l=ZS(l#p'fQ(|#zS+]%o.uS.[(k(mR3P.]'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gS#q];kQ&q!XQ&r!YQ&t![Q&u!]R1|,oQ'^!hQ+`%uQ-a'`S.^(n+cQ2k-`W3T.a.b0m0oQ6e2lW6r3Q3S3W4|U8z6s6u6wU:X8|8}9PS:w:W:ZQ;U:xR;^;VU!wQ']-^T5g1b5i!Q_OXZ`st!V!Z#d#h%c%k&f&h&o&q&r&t(g,l,q.T1}2Q]!pQ!r']-^1b5iT#q];k%^{OPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xS(z#y#zS.Z(j(k!s=Q$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gU$fd)[,fS(m#p'fU*r%R(t3qU0c*y.g7TQ4|0nQ6s3RQ8}6vR:Z9Om!tQ!r!v!y!z']'i'j'k-^-n1b5i5kQ'q!uS(c#g1wS-l'h'tQ/l*YQ/y*fQ2w-oQ4W/mQ4d/{Q4e/|Q4j0UQ7`4RS7k4f4hS7o4k4mQ9]7aQ9a7gQ9f7lQ9k7qS:c9b9cS:|:d:gS;X:};OS;a;Y;ZS;e;b;cR;h;fQ#wbQ'p!uS(b#g1wS(d#m+RQ+T%dQ+e%vQ+k%|U-k'h'q'tQ.P(cQ/k*YQ/z*fQ/}*hQ0s+fQ1h,YS2t-l-oQ2|.XS4V/l/mQ4`/wS4c/y0UQ4g0OQ5t1iQ6m2wQ7_4RQ7c4WU7j4d4j4mQ7m4iQ8a5uS9[7`7aQ9`7gQ9h7oQ9i7pQ9y8bQ:a9]S:b9a9cQ:j9kQ:s9zS:{:c:gS;W:|:}S;`;X;ZS;d;a;cQ;g;eQ;i;hQ=T=OQ=`=XR=a=YV!wQ']-^%^aOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xS#wz!j!r<}$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gR=T=f%^bOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xQ%dj!^%vy!i!u%y%z%{'S'b'c'd'h'r*f+i+j-R-e-f-m/y/|0v2h2o2v4d4e4h7k9fS%|z!jQ+f%wQ,Y&aW1i,Z,[,],^U5u1j1k1lS8b5v5wQ9z8c!r=O$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ=X=eR=Y=f%QeOPXYstuvw!Z!`!g!o#S#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8xY#bWZ#W#Z(Q!b%hm#h#i#l$x%c%f(Z(e(f(g*V*Z*^+U+V+X,h-O-|.S.T.U.W/f/i2V2}3O4S6`6qQ,g&l!p=P$Z$n)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gR=S'UU'Y!e%g*WR2f-X%SdOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W,i,l,q-b-j-x.O.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3_4l5q6R6S6V6j8_8n8x!r)[$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gQ,f&lQ0n+bQ3R.`Q6v3VR9O6x!b$Tc#Y%o(P(V(q(v)W)X)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;l!P;x)Z)n-S.u2^2a3c3l3m3r3z6c7O7X7Y8U8r9Q9W9X:m:u=Z!f$Vc#Y%o(P(V(q(v)T)U)W)X)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;l!T;z)Z)n-S.u2^2a3c3i3j3l3m3r3z6c7O7X7Y8U8r9Q9W9X:m:u=Z!^$Zc#Y%o(P(V(q(v)])d+s-q-v-{-}.l.o/Z0f2q2x3^3n4w5Q6i6n6}8v:V;lQ4Q/dz=g)Z)n-S.u2^2a3c3r3z6c7O7X7Y8U8r9Q9W9X:m:u=ZQ=l=nR=m=o'QkOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gS$oh$pR3w.}'XgOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t.}/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gT$kf$qQ$ifS)g$l)kR)s$qT$jf$qT)i$l)k'XhOPWXYZhstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$Z$_$a$e$n$p%k%r&P&h&k&l&o&q&r&t&x'Q'U'_'o(Q(S(Y(a(u(w({)p)z*e+S+W+b,i,l,q,}-Q-b-j-x.O.`.m.t.}/O/g0T0b0h0w1e1u1v1x1z1}2Q2S2c2s2y3V3_3v4l5e5q6R6S6V6a6j6x8_8n8x9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=gT$oh$pQ$rhR)r$p%^jOPWXYZstuvw!Z!`!g!o#S#W#Z#d#o#u#x#{$O$P$Q$R$S$T$U$V$W$X$_$a$e%k%r&P&h&k&l&o&q&r&t&x'Q'_'o(Q(S(Y(a(u(w({)z*e+S+W+b,i,l,q-b-j-x.O.`.m.t/g0T0b0h0w1e1u1v1x1z1}2Q2S2s2y3V3_4l5q6R6S6V6j6x8_8n8x!s=e$Z$n'U)p,}-Q/O2c3v5e6a9q:T;j;m;n;q;r;s;t;u;v;w;x;y;z;{;|;}<P<S<a<d<e<g<o<p<y<z=g#glOPXZst!Z!`!o#S#d#o#{$n%k&h&k&l&o&q&r&t&x'Q'_({)p*e+W+b,i,l,q-b.`/O/g0T0b1e1u1v1x1z1}2Q2S3V3v4l5q6R6S6V6x8_8n!O%Ri$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m#d(t#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qQ+O%`Q/[){o3q<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!O$yi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mQ*_$zU*h$|*W*kQ+P%aQ0O*i#d=V#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn=W<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|Q=[=hQ=]=iQ=^=jR=_=k!O%Ri$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=m#d(t#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qo3q<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|noOXst!Z#d%k&o&q&r&t,l,q1}2QS*b${*VQ,z&{Q,{&}R4Z/q%S%Si#v$b$c$d$x${%O%Q%]%^%b)v*O*Q*S*V*]*c*s*t+a+d+{,O._.x/]/f/p/q/s0W0Y0e1X1[1d3U4P4Q4[4a4r4z4}5p6t7d7n8[8{9Z9d9j9v:Y:h:q:y;Q<Q<R<T<U<V<W<Z<[<]<^<_<`<h<i<j<k<m<n<q<r<s<t<u<v<w<x<{<|=d=l=m=p=qQ+}&YQ1Z,PQ5a1YR8R5bV*j$|*W*kU*j$|*W*kT5h1b5iS/w*e/gQ4i0TT7p4l9sQ+e%vQ/}*hQ0s+fQ1h,YQ5t1iQ8a5uQ9y8bR:s9z!O%Oi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mr*O$v)b*P*q+Q/o0[0]3t4X4v7^7r:`=U=b=cS0W*p0X#d<T#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn<U<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!b<h(r)`*X*a.c.f.j/W/d/t0l1W3Z3}4Y4^5`6y6|7e7h7t7v9_9g:e:i:z;P;[=n=o`<i3p7P7S7W9R:[:_;_S<s.e3[T<t7R9U!O%Qi$d%O%Q%]%^%b*O*Q*]*s*t.x/p0W0Y0e4Q4r9Z=d=l=mv*Q$v)b*R*p+Q/`/o0[0]3t4X4n4v7^7r:`=U=b=cS0Y*q0Z#d<V#v$b$c$x${)v*S*V*c+a+d+{,O._/]/f/q/s1X1[1d3U4P4[4a4z4}5p6t7d7n8[8{9d9j9v:Y:h:q:y;Q<T<V<Z<]<_<h<j<m<q<s<u<w<{=p=qn<W<Q<R<U<W<[<^<`<i<k<n<r<t<v<x<|!f<j(r)`*X*a.d.e.j/W/d/t0l1W3X3Z3}4Y4^5`6y6z6|7e7h7t7v9_9g:e:i:z;P;[=n=od<k3p7Q7R7W9R9S:[:]:_;_S<u.f3]T<v7S9VrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QQ&c!UR,i&lrnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QR&c!UQ,R&ZR1V+zsnOXst!V!Z#d%k&f&o&q&r&t,l,q1}2QQ1c,WS5o1f1gU8Z5m5n5rS9u8]8^S:o9t9wQ;R:pR;];SQ&j!VR,b&fR5{1oR9|8dS&O|&TR1O+qQ&o!WR,l&pR,r&uT2O,q2QR,v&vQ,u&vR2X,vQ'v!{R-r'vSsOtQ#dXT%ns#dQ#OTR'x#OQ#RUR'z#RQ)x$uR/X)xQ#UVR'}#UQ#XWU(T#X(U-yQ(U#YR-y(VQ-V'VR2e-VQ.n(vS3`.n3aR3a.oQ-^']R2i-^Y!rQ']-^1b5iR'g!rQ.y)bR3u.yU#_W%f*VU([#_(]-zQ(]#`R-z(WQ-Y'YR2g-Yt`OXst!V!Z#d%k&f&h&o&q&r&t,l,q1}2QS#hZ%cU#r`#h.TR.T(gQ(h#jQ.Q(dW.Y(h.Q2z6oQ2z.RR6o2{Q)k$lR/P)kQ$phR)q$pQ$`cU)^$`-u<OQ-u;lR<O)nQ/j*YW4T/j4U7b9^U4U/k/l/mS7b4V4WR9^7c$])}$v(r)`)b*X*a*p*q*{*|+Q.e.f.h.i.j/W/`/b/d/o/t0[0]0l1W3X3Y3Z3p3t3}4X4Y4^4n4p4v5`6y6z6{6|7R7S7U7V7W7^7e7h7r7t7v9R9S9T9_9g:[:]:^:_:`:e:i:z;P;[;_=U=b=c=n=oQ/r*aU4]/r4_7fQ4_/tR7f4^S*k$|*WR0Q*kr*P$v)b*p*q+Q/o0[0]3t4X4v7^7r:`=U=b=c!b.c(r)`*X*a.e.f.j/W/d/t0l1W3Z3}4Y4^5`6y6|7e7h7t7v9_9g:e:i:z;P;[=n=oU/a*P.c7Pa7P3p7R7S7W9R:[:_;_Q0X*pQ3[.eU4o0X3[9UR9U7Rv*R$v)b*p*q+Q/`/o0[0]3t4X4n4v7^7r:`=U=b=c!f.d(r)`*X*a.e.f.j/W/d/t0l1W3X3Z3}4Y4^5`6y6z6|7e7h7t7v9_9g:e:i:z;P;[=n=oU/c*R.d7Qe7Q3p7R7S7W9R9S:[:]:_;_Q0Z*qQ3].fU4q0Z3]9VR9V7SQ*v%UR0_*vQ4{0lR7u4{Q+Y%iR0k+YQ5d1]S8T5d9rR9r8UQ,T&[R1`,TQ5i1bR8W5iQ1n,_S5y1n8eR8e5{Q0y+mW5V0y5X7{9nQ5X0|Q7{5WR9n7|Q+r&OR1P+rQ2Q,qR6Z2QYrOXst#dQ&s!ZQ+[%kQ,k&oQ,m&qQ,n&rQ,p&tQ1{,lS2O,q2QR6Y1}Q%mpQ&w!_Q&z!aQ&|!bQ'O!cQ'n!uQ+Z%jQ+g%xQ+y&UQ,a&jQ,x&yW-i'h'p'q'tQ-p'lQ0P*jQ0t+hS1q,b,eQ2Y,wQ2Z,zQ2[,{Q2p-hW2r-k-l-o-qQ5O0uQ5[1SQ5_1WQ5s1hQ5}1sQ6X1|U6h2q2t2wQ6k2uQ7w5PQ8P5^Q8Q5`Q8V5hQ8`5tQ8f5|S8u6i6mQ8w6lQ9o7}Q9x8aQ9}8gQ:U8vQ:l9pQ:r9yQ:v:VR;T:sQ%xyQ'a!iQ'l!uU+h%y%z%{Q-P'SU-d'b'c'dS-h'h'rQ/x*fS0u+i+jQ2b-RS2n-e-fQ2u-mS4b/y/|Q5P0vQ6d2hQ6g2oQ6l2vU7i4d4e4hQ9e7kR:f9fS$wi=dR*w%VU%Ui%V=dR0^*uQ$viS(r#v+dS)`$b$cQ)b$dQ*X$xS*a${*VQ*p%OQ*q%QQ*{%]Q*|%^Q+Q%bQ.e<TQ.f<VQ.h<ZQ.i<]Q.j<_Q/W)vQ/`*OQ/b*QQ/d*SQ/o*]S/t*c/fQ0[*sQ0]*tl0l+a,O._1[1d3U5p6t8[8{9v:Y:q:yQ1W+{Q3X<hQ3Y<jQ3Z<mS3p<Q<RQ3t.xS3}/]4PQ4X/pQ4Y/qQ4^/sQ4n0WQ4p0YQ4v0eQ5`1XQ6y<qQ6z<sQ6{<uQ6|<wQ7R<UQ7S<WQ7U<[Q7V<^Q7W<`Q7^4QQ7e4[Q7h4aQ7r4rQ7t4zQ7v4}Q9R<nQ9S<iQ9T<kQ9_7dQ9g7nQ:[<rQ:]<tQ:^<vQ:_<xQ:`9ZQ:e9dQ:i9jQ:z<{Q;P:hQ;[;QQ;_<|Q=U=dQ=b=lQ=c=mQ=n=pR=o=qQ*y%[Q.g<XR7T<YnpOXst!Z#d%k&o&q&r&t,l,q1}2QQ!fPS#fZ#oQ&y!`W'e!o*e0T4lQ'|#SQ(}#{Q)o$nS,e&h&kQ,j&lQ,w&xS,|'Q/gQ-`'_Q.q({Q/T)pQ0i+WQ0o+bQ1y,iQ2l-bQ3S.`Q3y/OQ4t0bQ5n1eQ6P1uQ6Q1vQ6U1xQ6W1zQ6]2SQ6w3VQ7Z3vQ8^5qQ8j6RQ8k6SQ8m6VQ9P6xQ9w8_R:R8n#[cOPXZst!Z!`!o#d#o#{%k&h&k&l&o&q&r&t&x'Q'_({*e+W+b,i,l,q-b.`/g0T0b1e1u1v1x1z1}2Q2S3V4l5q6R6S6V6x8_8nQ#YWQ#eYQ%ouQ%qvS%sw!gS(P#W(SQ(V#ZQ(q#uQ(v#xQ)O$OQ)P$PQ)Q$QQ)R$RQ)S$SQ)T$TQ)U$UQ)V$VQ)W$WQ)X$XQ)Z$ZQ)]$_Q)_$aQ)d$eW)n$n)p/O3vQ+_%rQ+s&PS-S'U2cQ-q'oS-v(Q-xQ-{(YQ-}(aQ.l(uQ.o(wQ.s;jQ.u;mQ.v;nQ.w;qQ/Z)zQ0f+SQ2^,}Q2a-QQ2q-jQ2x.OQ3^.mQ3c;rQ3d;sQ3e;tQ3f;uQ3g;vQ3h;wQ3i;xQ3j;yQ3k;zQ3l;{Q3m;|Q3n.tQ3o<PQ3r<SQ3s<aQ3z;}Q4w0hQ5Q0wQ6c<dQ6i2sQ6n2yQ6}3_Q7O<eQ7X<gQ7Y<oQ8U5eQ8r6aQ8v6jQ9Q<pQ9W<yQ9X<zQ:V8xQ:m9qQ:u:TQ;l#SR=Z=gR#[WR'W!el!tQ!r!v!y!z']'i'j'k-^-n1b5i5kS'S!e-UU*f$|*W*kS-R'T'[S/|*g*mQ0U*nQ2h-[Q4h0SR4m0VR(x#xQ!fQT-]']-^]!qQ!r']-^1b5iQ#p]R'f;kR)c$dY!uQ']-^1b5iQ'h!rS'r!v!yS't!z5kS-m'i'jQ-o'kR2v-nT#kZ%cS#jZ%cS%im,hU(d#h#i#lS.R(e(fQ.V(gQ0j+XQ2{.SU2|.T.U.WS6p2}3OR8y6qd#^W#W#Z%f(Q(Z*V+U-|/fr#gZm#h#i#l%c(e(f(g+X.S.T.U.W2}3O6qS*Y$x*^Q/m*ZQ1w,hQ2_-OQ4R/iQ6_2VQ7a4SQ8q6`T=R'U+VV#aW%f*VU#`W%f*VS(R#W(ZU(W#Z+U/fS-T'U+VT-w(Q-|V'Z!e%g*WQ$lfR)u$qT)j$l)kR3x.}T*[$x*^T*d${*VQ0m+aQ1Y,OQ3Q._Q5b1[Q5m1dQ6u3UQ8]5pQ8|6tQ9t8[Q:W8{Q:p9vQ:x:YQ;S:qR;V:ynqOXst!Z#d%k&o&q&r&t,l,q1}2QQ&i!VR,a&ftmOXst!U!V!Z#d%k&f&o&q&r&t,l,q1}2QR,h&lT%jm,hR1^,QR,`&dQ&S|R+x&TR+n%}T&m!W&pT&n!W&pT2P,q2Q",
    nodeNames:
      "⚠ ArithOp ArithOp ?. JSXStartTag LineComment BlockComment Script Hashbang ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > < TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewTarget new NewExpression ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression TypeArgList CompareOp < declare Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression InstantiationExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression InstantiationExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var using TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
    maxTerm: 377,
    context: cy,
    nodeProps: [
      ["isolate", -8, 5, 6, 14, 34, 36, 48, 50, 52, ""],
      [
        "group",
        -26,
        9,
        17,
        19,
        65,
        204,
        208,
        212,
        213,
        215,
        218,
        221,
        231,
        233,
        239,
        241,
        243,
        245,
        248,
        254,
        260,
        262,
        264,
        266,
        268,
        270,
        271,
        "Statement",
        -34,
        13,
        14,
        29,
        32,
        33,
        39,
        48,
        51,
        52,
        54,
        59,
        67,
        69,
        73,
        77,
        79,
        81,
        82,
        107,
        108,
        117,
        118,
        135,
        138,
        140,
        141,
        142,
        143,
        144,
        146,
        147,
        166,
        167,
        169,
        "Expression",
        -23,
        28,
        30,
        34,
        38,
        40,
        42,
        171,
        173,
        175,
        176,
        178,
        179,
        180,
        182,
        183,
        184,
        186,
        187,
        188,
        198,
        200,
        202,
        203,
        "Type",
        -3,
        85,
        100,
        106,
        "ClassItem",
      ],
      [
        "openedBy",
        23,
        "<",
        35,
        "InterpolationStart",
        53,
        "[",
        57,
        "{",
        70,
        "(",
        159,
        "JSXStartCloseTag",
      ],
      ["closedBy", 24, ">", 37, "InterpolationEnd", 47, "]", 58, "}", 71, ")", 164, "JSXEndTag"],
    ],
    propSources: [my],
    skippedNodes: [0, 5, 6, 274],
    repeatNodeCount: 37,
    tokenData:
      "$Fq07[R!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tuEruvJSvwLkwx! Yxy!'iyz!(sz{!)}{|!,q|}!.O}!O!,q!O!P!/Y!P!Q!9j!Q!R#:O!R![#<_![!]#I_!]!^#Jk!^!_#Ku!_!`$![!`!a$$v!a!b$*T!b!c$,r!c!}Er!}#O$-|#O#P$/W#P#Q$4o#Q#R$5y#R#SEr#S#T$7W#T#o$8b#o#p$<r#p#q$=h#q#r$>x#r#s$@U#s$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$I|Er$I|$I}$Dk$I}$JO$Dk$JO$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr(n%d_$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$h&j(V!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU(V!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$h&j(SpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU(SpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z07[+rq$h&j(Sp(V!b'x0/lOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z07[.ST(T#S$h&j'y0/lO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c07[.n_$h&j(Sp(V!b'y0/lOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)3p/x`$h&j!m),Q(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW1V`#u(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW2d_#u(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At3l_(R':f$h&j(V!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k(^4r_$h&j(V!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k&z5vX$h&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q&z6jT$c`$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c`6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y`7bO$c``7eP;=`<%l6y&z7kP;=`<%l5q(^7w]$c`$h&j(V!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!r8uZ(V!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p!r9oU$c`(V!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!r:UP;=`<%l8p(^:[P;=`<%l4k%9[:hh$h&j(Sp(V!bOY%ZYZ&cZq%Zqr<Srs&}st%ZtuCruw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr(r<__WS$h&j(Sp(V!bOY<SYZ&cZr<Srs=^sw<Swx@nx!^<S!^!_Bm!_#O<S#O#P>`#P#o<S#o#pBm#p;'S<S;'S;=`Cl<%lO<S(Q=g]WS$h&j(V!bOY=^YZ&cZw=^wx>`x!^=^!^!_?q!_#O=^#O#P>`#P#o=^#o#p?q#p;'S=^;'S;=`@h<%lO=^&n>gXWS$h&jOY>`YZ&cZ!^>`!^!_?S!_#o>`#o#p?S#p;'S>`;'S;=`?k<%lO>`S?XSWSOY?SZ;'S?S;'S;=`?e<%lO?SS?hP;=`<%l?S&n?nP;=`<%l>`!f?xWWS(V!bOY?qZw?qwx?Sx#O?q#O#P?S#P;'S?q;'S;=`@b<%lO?q!f@eP;=`<%l?q(Q@kP;=`<%l=^'`@w]WS$h&j(SpOY@nYZ&cZr@nrs>`s!^@n!^!_Ap!_#O@n#O#P>`#P#o@n#o#pAp#p;'S@n;'S;=`Bg<%lO@ntAwWWS(SpOYApZrAprs?Ss#OAp#O#P?S#P;'SAp;'S;=`Ba<%lOAptBdP;=`<%lAp'`BjP;=`<%l@n#WBvYWS(Sp(V!bOYBmZrBmrs?qswBmwxApx#OBm#O#P?S#P;'SBm;'S;=`Cf<%lOBm#WCiP;=`<%lBm(rCoP;=`<%l<S%9[C}i$h&j(k%1l(Sp(V!bOY%ZYZ&cZr%Zrs&}st%ZtuCruw%Zwx(rx!Q%Z!Q![Cr![!^%Z!^!_*g!_!c%Z!c!}Cr!}#O%Z#O#P&c#P#R%Z#R#SCr#S#T%Z#T#oCr#o#p*g#p$g%Z$g;'SCr;'S;=`El<%lOCr%9[EoP;=`<%lCr07[FRk$h&j(Sp(V!b$[#t(P,2j(a$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr+dHRk$h&j(Sp(V!b$[#tOY%ZYZ&cZr%Zrs&}st%ZtuGvuw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Gv![!^%Z!^!_*g!_!c%Z!c!}Gv!}#O%Z#O#P&c#P#R%Z#R#SGv#S#T%Z#T#oGv#o#p*g#p$g%Z$g;'SGv;'S;=`Iv<%lOGv+dIyP;=`<%lGv07[JPP;=`<%lEr(KWJ_`$h&j(Sp(V!b#m(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWKl_$h&j$P(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,#xLva(v+JY$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sv%ZvwM{wx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KWNW`$h&j#y(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'At! c_(U';W$h&j(SpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b'l!!i_$h&j(SpOY!!bYZ!#hZr!!brs!#hsw!!bwx!$xx!^!!b!^!_!%z!_#O!!b#O#P!#h#P#o!!b#o#p!%z#p;'S!!b;'S;=`!'c<%lO!!b&z!#mX$h&jOw!#hwx6cx!^!#h!^!_!$Y!_#o!#h#o#p!$Y#p;'S!#h;'S;=`!$r<%lO!#h`!$]TOw!$Ywx7]x;'S!$Y;'S;=`!$l<%lO!$Y`!$oP;=`<%l!$Y&z!$uP;=`<%l!#h'l!%R]$c`$h&j(SpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r!Q!&PZ(SpOY!%zYZ!$YZr!%zrs!$Ysw!%zwx!&rx#O!%z#O#P!$Y#P;'S!%z;'S;=`!']<%lO!%z!Q!&yU$c`(SpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r!Q!'`P;=`<%l!%z'l!'fP;=`<%l!!b/5|!'t_!i/.^$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&U!)O_!h!Lf$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z-!n!*[b$h&j(Sp(V!b(Q%&f#n(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!+d{!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW!+o`$h&j(Sp(V!b#k(ChOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;x!,|`$h&j(Sp(V!bo+4YOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z,$U!.Z_!Y+Jf$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!/ec$h&j(Sp(V!b}.2^OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!0p!P!Q%Z!Q![!3Y![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!0ya$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!2O!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#%|!2Z_!X!L^$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!3eg$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!3Y![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S!3Y#S#X%Z#X#Y!4|#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!5Vg$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!6n|}%Z}!O!6n!O!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!6wc$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad!8_c$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!8S![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!8S#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[!9uf$h&j(Sp(V!b#l(ChOY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcxz!;Zz{#-}{!P!;Z!P!Q#/d!Q!^!;Z!^!_#(i!_!`#7S!`!a#8i!a!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z?O!;fb$h&j(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z>^!<w`$h&j(V!b!U7`OY!<nYZ&cZw!<nwx!=yx!P!<n!P!Q!Eq!Q!^!<n!^!_!Gr!_!}!<n!}#O!KS#O#P!Dy#P#o!<n#o#p!Gr#p;'S!<n;'S;=`!L]<%lO!<n<z!>Q^$h&j!U7`OY!=yYZ&cZ!P!=y!P!Q!>|!Q!^!=y!^!_!@c!_!}!=y!}#O!CW#O#P!Dy#P#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!?Td$h&j!U7`O!^&c!_#W&c#W#X!>|#X#Z&c#Z#[!>|#[#]&c#]#^!>|#^#a&c#a#b!>|#b#g&c#g#h!>|#h#i&c#i#j!>|#j#k!>|#k#m&c#m#n!>|#n#o&c#p;'S&c;'S;=`&w<%lO&c7`!@hX!U7`OY!@cZ!P!@c!P!Q!AT!Q!}!@c!}#O!Ar#O#P!Bq#P;'S!@c;'S;=`!CQ<%lO!@c7`!AYW!U7`#W#X!AT#Z#[!AT#]#^!AT#a#b!AT#g#h!AT#i#j!AT#j#k!AT#m#n!AT7`!AuVOY!ArZ#O!Ar#O#P!B[#P#Q!@c#Q;'S!Ar;'S;=`!Bk<%lO!Ar7`!B_SOY!ArZ;'S!Ar;'S;=`!Bk<%lO!Ar7`!BnP;=`<%l!Ar7`!BtSOY!@cZ;'S!@c;'S;=`!CQ<%lO!@c7`!CTP;=`<%l!@c<z!C][$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#O!CW#O#P!DR#P#Q!=y#Q#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DWX$h&jOY!CWYZ&cZ!^!CW!^!_!Ar!_#o!CW#o#p!Ar#p;'S!CW;'S;=`!Ds<%lO!CW<z!DvP;=`<%l!CW<z!EOX$h&jOY!=yYZ&cZ!^!=y!^!_!@c!_#o!=y#o#p!@c#p;'S!=y;'S;=`!Ek<%lO!=y<z!EnP;=`<%l!=y>^!Ezl$h&j(V!b!U7`OY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#W&}#W#X!Eq#X#Z&}#Z#[!Eq#[#]&}#]#^!Eq#^#a&}#a#b!Eq#b#g&}#g#h!Eq#h#i&}#i#j!Eq#j#k!Eq#k#m&}#m#n!Eq#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}8r!GyZ(V!b!U7`OY!GrZw!Grwx!@cx!P!Gr!P!Q!Hl!Q!}!Gr!}#O!JU#O#P!Bq#P;'S!Gr;'S;=`!J|<%lO!Gr8r!Hse(V!b!U7`OY'}Zw'}x#O'}#P#W'}#W#X!Hl#X#Z'}#Z#[!Hl#[#]'}#]#^!Hl#^#a'}#a#b!Hl#b#g'}#g#h!Hl#h#i'}#i#j!Hl#j#k!Hl#k#m'}#m#n!Hl#n;'S'};'S;=`(f<%lO'}8r!JZX(V!bOY!JUZw!JUwx!Arx#O!JU#O#P!B[#P#Q!Gr#Q;'S!JU;'S;=`!Jv<%lO!JU8r!JyP;=`<%l!JU8r!KPP;=`<%l!Gr>^!KZ^$h&j(V!bOY!KSYZ&cZw!KSwx!CWx!^!KS!^!_!JU!_#O!KS#O#P!DR#P#Q!<n#Q#o!KS#o#p!JU#p;'S!KS;'S;=`!LV<%lO!KS>^!LYP;=`<%l!KS>^!L`P;=`<%l!<n=l!Ll`$h&j(Sp!U7`OY!LcYZ&cZr!Lcrs!=ys!P!Lc!P!Q!Mn!Q!^!Lc!^!_# o!_!}!Lc!}#O#%P#O#P!Dy#P#o!Lc#o#p# o#p;'S!Lc;'S;=`#&Y<%lO!Lc=l!Mwl$h&j(Sp!U7`OY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#W(r#W#X!Mn#X#Z(r#Z#[!Mn#[#](r#]#^!Mn#^#a(r#a#b!Mn#b#g(r#g#h!Mn#h#i(r#i#j!Mn#j#k!Mn#k#m(r#m#n!Mn#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r8Q# vZ(Sp!U7`OY# oZr# ors!@cs!P# o!P!Q#!i!Q!}# o!}#O#$R#O#P!Bq#P;'S# o;'S;=`#$y<%lO# o8Q#!pe(Sp!U7`OY)rZr)rs#O)r#P#W)r#W#X#!i#X#Z)r#Z#[#!i#[#])r#]#^#!i#^#a)r#a#b#!i#b#g)r#g#h#!i#h#i)r#i#j#!i#j#k#!i#k#m)r#m#n#!i#n;'S)r;'S;=`*Z<%lO)r8Q#$WX(SpOY#$RZr#$Rrs!Ars#O#$R#O#P!B[#P#Q# o#Q;'S#$R;'S;=`#$s<%lO#$R8Q#$vP;=`<%l#$R8Q#$|P;=`<%l# o=l#%W^$h&j(SpOY#%PYZ&cZr#%Prs!CWs!^#%P!^!_#$R!_#O#%P#O#P!DR#P#Q!Lc#Q#o#%P#o#p#$R#p;'S#%P;'S;=`#&S<%lO#%P=l#&VP;=`<%l#%P=l#&]P;=`<%l!Lc?O#&kn$h&j(Sp(V!b!U7`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#W%Z#W#X#&`#X#Z%Z#Z#[#&`#[#]%Z#]#^#&`#^#a%Z#a#b#&`#b#g%Z#g#h#&`#h#i%Z#i#j#&`#j#k#&`#k#m%Z#m#n#&`#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z9d#(r](Sp(V!b!U7`OY#(iZr#(irs!Grsw#(iwx# ox!P#(i!P!Q#)k!Q!}#(i!}#O#+`#O#P!Bq#P;'S#(i;'S;=`#,`<%lO#(i9d#)th(Sp(V!b!U7`OY*gZr*grs'}sw*gwx)rx#O*g#P#W*g#W#X#)k#X#Z*g#Z#[#)k#[#]*g#]#^#)k#^#a*g#a#b#)k#b#g*g#g#h#)k#h#i*g#i#j#)k#j#k#)k#k#m*g#m#n#)k#n;'S*g;'S;=`+Z<%lO*g9d#+gZ(Sp(V!bOY#+`Zr#+`rs!JUsw#+`wx#$Rx#O#+`#O#P!B[#P#Q#(i#Q;'S#+`;'S;=`#,Y<%lO#+`9d#,]P;=`<%l#+`9d#,cP;=`<%l#(i?O#,o`$h&j(Sp(V!bOY#,fYZ&cZr#,frs!KSsw#,fwx#%Px!^#,f!^!_#+`!_#O#,f#O#P!DR#P#Q!;Z#Q#o#,f#o#p#+`#p;'S#,f;'S;=`#-q<%lO#,f?O#-tP;=`<%l#,f?O#-zP;=`<%l!;Z07[#.[b$h&j(Sp(V!b'z0/l!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z07[#/o_$h&j(Sp(V!bT0/lOY#/dYZ&cZr#/drs#0nsw#/dwx#4Ox!^#/d!^!_#5}!_#O#/d#O#P#1p#P#o#/d#o#p#5}#p;'S#/d;'S;=`#6|<%lO#/d06j#0w]$h&j(V!bT0/lOY#0nYZ&cZw#0nwx#1px!^#0n!^!_#3R!_#O#0n#O#P#1p#P#o#0n#o#p#3R#p;'S#0n;'S;=`#3x<%lO#0n05W#1wX$h&jT0/lOY#1pYZ&cZ!^#1p!^!_#2d!_#o#1p#o#p#2d#p;'S#1p;'S;=`#2{<%lO#1p0/l#2iST0/lOY#2dZ;'S#2d;'S;=`#2u<%lO#2d0/l#2xP;=`<%l#2d05W#3OP;=`<%l#1p01O#3YW(V!bT0/lOY#3RZw#3Rwx#2dx#O#3R#O#P#2d#P;'S#3R;'S;=`#3r<%lO#3R01O#3uP;=`<%l#3R06j#3{P;=`<%l#0n05x#4X]$h&j(SpT0/lOY#4OYZ&cZr#4Ors#1ps!^#4O!^!_#5Q!_#O#4O#O#P#1p#P#o#4O#o#p#5Q#p;'S#4O;'S;=`#5w<%lO#4O00^#5XW(SpT0/lOY#5QZr#5Qrs#2ds#O#5Q#O#P#2d#P;'S#5Q;'S;=`#5q<%lO#5Q00^#5tP;=`<%l#5Q05x#5zP;=`<%l#4O01p#6WY(Sp(V!bT0/lOY#5}Zr#5}rs#3Rsw#5}wx#5Qx#O#5}#O#P#2d#P;'S#5};'S;=`#6v<%lO#5}01p#6yP;=`<%l#5}07[#7PP;=`<%l#/d)3h#7ab$h&j$P(Ch(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;ZAt#8vb$Y#t$h&j(Sp(V!b!U7`OY!;ZYZ&cZr!;Zrs!<nsw!;Zwx!Lcx!P!;Z!P!Q#&`!Q!^!;Z!^!_#(i!_!}!;Z!}#O#,f#O#P!Dy#P#o!;Z#o#p#(i#p;'S!;Z;'S;=`#-w<%lO!;Z'Ad#:Zp$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#U%Z#U#V#?i#V#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#d#Bq#d#l%Z#l#m#Es#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#<jk$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!3Y!P!Q%Z!Q![#<_![!^%Z!^!_*g!_!g%Z!g!h!4|!h#O%Z#O#P&c#P#R%Z#R#S#<_#S#X%Z#X#Y!4|#Y#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#>j_$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#?rd$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#A]f$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#AQ!R!S#AQ!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#AQ#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Bzc$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Dbe$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#DV!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#DV#S#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#E|g$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'Ad#Gpi$h&j(Sp(V!bp'9tOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#Ge![!^%Z!^!_*g!_!c%Z!c!i#Ge!i#O%Z#O#P&c#P#R%Z#R#S#Ge#S#T%Z#T#Z#Ge#Z#b%Z#b#c#>_#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x#Il_!d$b$h&j#})Lv(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Jv_al$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f#LS^h#)`#O-<U(Sp(V!b(z7`OY*gZr*grs'}sw*gwx)rx!P*g!P!Q#MO!Q!^*g!^!_#Mt!_!`$ f!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#MXX$j&j(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El#M}Z#o(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Np!`#O*g#P;'S*g;'S;=`+Z<%lO*g(El#NyX$P(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g(El$ oX#p(Ch(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g*)x$!ga#]*!Y$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a$#l!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(K[$#w_#h(Cl$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z*)x$%Vag!*r#p(Ch$e#|$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`$&[!`!a$'f!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$&g_#p(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$'qa#o(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`!a$(v!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$)R`#o(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(Kd$*`a(n(Ct$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!a%Z!a!b$+e!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$+p`$h&j#z(Ch(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`$,}_!y$Ip$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z04f$.X_!P0,v$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$/]Z$h&jO!^$0O!^!_$0f!_#i$0O#i#j$0k#j#l$0O#l#m$2^#m#o$0O#o#p$0f#p;'S$0O;'S;=`$4i<%lO$0O(n$0VT_#S$h&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$0kO_#S(n$0p[$h&jO!Q&c!Q![$1f![!^&c!_!c&c!c!i$1f!i#T&c#T#Z$1f#Z#o&c#o#p$3|#p;'S&c;'S;=`&w<%lO&c(n$1kZ$h&jO!Q&c!Q![$2^![!^&c!_!c&c!c!i$2^!i#T&c#T#Z$2^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$2cZ$h&jO!Q&c!Q![$3U![!^&c!_!c&c!c!i$3U!i#T&c#T#Z$3U#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$3ZZ$h&jO!Q&c!Q![$0O![!^&c!_!c&c!c!i$0O!i#T&c#T#Z$0O#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$4PR!Q![$4Y!c!i$4Y#T#Z$4Y#S$4]S!Q![$4Y!c!i$4Y#T#Z$4Y#q#r$0f(n$4lP;=`<%l$0O#1[$4z_!V#)l$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(KW$6U`#w(Ch$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z+;p$7c_$h&j(Sp(V!b(]+4QOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$8qk$h&j(Sp(V!b(P,2j$^#t(a$I[OY%ZYZ&cZr%Zrs&}st%Ztu$8buw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$8b![!^%Z!^!_*g!_!c%Z!c!}$8b!}#O%Z#O#P&c#P#R%Z#R#S$8b#S#T%Z#T#o$8b#o#p*g#p$g%Z$g;'S$8b;'S;=`$<l<%lO$8b+d$:qk$h&j(Sp(V!b$^#tOY%ZYZ&cZr%Zrs&}st%Ztu$:fuw%Zwx(rx}%Z}!O$:f!O!Q%Z!Q![$:f![!^%Z!^!_*g!_!c%Z!c!}$:f!}#O%Z#O#P&c#P#R%Z#R#S$:f#S#T%Z#T#o$:f#o#p*g#p$g%Z$g;'S$:f;'S;=`$<f<%lO$:f+d$<iP;=`<%l$:f07[$<oP;=`<%l$8b#Jf$<{X![#Hb(Sp(V!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g,#x$=sa(u+JY$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Ka!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$+e#q;'S%Z;'S;=`+a<%lO%Z)>v$?V_!Z(CdsBr$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z?O$@a_!n7`$h&j(Sp(V!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z07[$Aq|$h&j(Sp(V!b'x0/l$[#t(P,2j(a$I[OX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$f%Z$f$g+g$g#BYEr#BY#BZ$A`#BZ$ISEr$IS$I_$A`$I_$JTEr$JT$JU$A`$JU$KVEr$KV$KW$A`$KW&FUEr&FU&FV$A`&FV;'SEr;'S;=`I|<%l?HTEr?HT?HU$A`?HUOEr07[$D|k$h&j(Sp(V!b'y0/l$[#t(P,2j(a$I[OY%ZYZ&cZr%Zrs&}st%ZtuEruw%Zwx(rx}%Z}!OGv!O!Q%Z!Q![Er![!^%Z!^!_*g!_!c%Z!c!}Er!}#O%Z#O#P&c#P#R%Z#R#SEr#S#T%Z#T#oEr#o#p*g#p$g%Z$g;'SEr;'S;=`I|<%lOEr",
    tokenizers: [
      dy,
      py,
      Oy,
      gy,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      fy,
      new al(
        "$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOu~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!R~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(_~~",
        141,
        336
      ),
      new al("j~RQYZXz{^~^O'|~~aP!P!Qd~iO'}~~", 25, 319),
    ],
    topRules: { Script: [0, 7], SingleExpression: [1, 272], SingleClassItem: [2, 273] },
    dialects: { jsx: 0, ts: 14980 },
    dynamicPrecedences: { 77: 1, 79: 1, 91: 1, 167: 1, 196: 1 },
    specialized: [
      { term: 323, get: (n) => Sy[n] || -1 },
      { term: 339, get: (n) => by[n] || -1 },
      { term: 92, get: (n) => yy[n] || -1 },
    ],
    tokenPrec: 15004,
  }),
  ky = Xr.define({
    name: "javascript",
    parser: xy.configure({
      props: [
        yf.add({
          IfStatement: Vs({ except: /^\s*({|else\b)/ }),
          TryStatement: Vs({ except: /^\s*({|catch\b|finally\b)/ }),
          LabeledStatement: u0,
          SwitchBody: (n) => {
            let e = n.textAfter,
              t = /^\s*\}/.test(e),
              i = /^\s*(case|default)\b/.test(e);
            return n.baseIndent + (t ? 0 : i ? 1 : 2) * n.unit;
          },
          Block: h0({ closing: "}" }),
          ArrowFunction: (n) => n.baseIndent + n.unit,
          "TemplateString BlockComment": () => null,
          "Statement Property": Vs({ except: /^{/ }),
          JSXElement(n) {
            let e = /^\s*<\//.test(n.textAfter);
            return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
          },
          JSXEscape(n) {
            let e = /\s*\}/.test(n.textAfter);
            return n.lineIndent(n.node.from) + (e ? 0 : n.unit);
          },
          "JSXOpenTag JSXSelfClosingTag"(n) {
            return n.column(n.node.from) + n.unit;
          },
        }),
        Cf.add({
          "Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression ObjectType": d0,
          BlockComment(n) {
            return { from: n.from + 2, to: n.to - 2 };
          },
        }),
      ],
    }),
    languageData: {
      closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
      commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
      indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
      wordChars: "$",
    },
  });
var Wn = {},
  Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.excelBOM = Ue.defaultCsv2JsonOptions = Ue.defaultJson2CsvOptions = Ue.errors = void 0;
Ue.errors = {
  optionsRequired: "Options were not passed and are required.",
  json2csv: {
    cannotCallOn: "Cannot call json2csv on",
    dataCheckFailure: "Data provided was not an array of documents.",
    notSameSchema: "Not all documents have the same schema.",
  },
  csv2json: { cannotCallOn: "Cannot call csv2json on", dataCheckFailure: "CSV is not a string." },
};
Ue.defaultJson2CsvOptions = {
  arrayIndexesAsKeys: !1,
  checkSchemaDifferences: !1,
  delimiter: {
    field: ",",
    wrap: '"',
    eol: `
`,
  },
  emptyFieldValue: void 0,
  escapeHeaderNestedDots: !0,
  excelBOM: !1,
  excludeKeys: [],
  expandNestedObjects: !0,
  expandArrayObjects: !1,
  prependHeader: !0,
  preventCsvInjection: !1,
  sortHeader: !1,
  trimFieldValues: !1,
  trimHeaderFields: !1,
  unwindArrays: !1,
  useDateIso8601Format: !1,
  useLocaleFormat: !1,
  wrapBooleans: !1,
};
Ue.defaultCsv2JsonOptions = {
  delimiter: {
    field: ",",
    wrap: '"',
    eol: `
`,
  },
  excelBOM: !1,
  preventCsvInjection: !1,
  trimFieldValues: !1,
  trimHeaderFields: !1,
};
Ue.excelBOM = "\uFEFF";
var vs = {},
  ni = {};
/**
 * @license MIT
 * doc-path <https://github.com/mrodrig/doc-path>
 * Copyright (c) 2015-present, Michael Rodrigues.
 */ Object.defineProperty(ni, "__esModule", { value: !0 });
ni.setPath = ni.evaluatePath = void 0;
function fn(n, e) {
  if (!n) return null;
  const { dotIndex: t, key: i, remaining: r } = hs(e),
    s = typeof n == "object" && e in n ? n[e] : void 0,
    o = typeof n == "object" && i in n ? n[i] : void 0;
  if (t >= 0 && typeof n == "object" && !(e in n)) {
    const { key: l } = hs(r),
      a = parseInt(l);
    return Array.isArray(o) && isNaN(a) ? o.map((h) => fn(h, r)) : fn(o, r);
  } else if (Array.isArray(n)) {
    const l = parseInt(i);
    return e === i && t === -1 && !isNaN(l) ? o : n.map((a) => fn(a, e));
  } else {
    if (t >= 0 && e !== i && typeof n == "object" && i in n) return fn(o, r);
    if (t === -1 && typeof n == "object" && i in n && !(e in n)) return o;
  }
  return s;
}
ni.evaluatePath = fn;
function Dy(n, e, t) {
  if (n) {
    if (!e) throw new Error("No keyPath was provided.");
  } else throw new Error("No object was provided.");
  return dn(n, e, t);
}
ni.setPath = Dy;
function dn(n, e, t) {
  const { dotIndex: i, key: r, remaining: s } = hs(e);
  if (e.startsWith("__proto__") || e.startsWith("constructor") || e.startsWith("prototype"))
    return n;
  if (i >= 0) {
    const o = parseInt(r);
    if (typeof n == "object" && n !== null && !(r in n) && Array.isArray(n) && !isNaN(o))
      return (n[r] = n[r] ?? {}), dn(n[r], s, t), n;
    if (typeof n == "object" && n !== null && !(r in n) && Array.isArray(n))
      return n.forEach((l) => dn(l, e, t)), n;
    if (typeof n == "object" && n !== null && !(r in n) && !Array.isArray(n)) {
      const { key: l } = hs(s),
        a = parseInt(l);
      if (!isNaN(a)) n[r] = [];
      else {
        if (s === "") return (n[e] = t), n;
        n[r] = {};
      }
    }
    dn(n[r], s, t);
  } else if (Array.isArray(n)) {
    const o = parseInt(r);
    return e === r && i === -1 && !isNaN(o) ? ((n[r] = t), n) : (n.forEach((l) => dn(l, s, t)), n);
  } else n[r] = t;
  return n;
}
function hs(n) {
  const e = Cy(n);
  return {
    dotIndex: e,
    key: n.slice(0, e >= 0 ? e : void 0).replace(/\\./g, "."),
    remaining: n.slice(e + 1),
  };
}
function Cy(n) {
  for (let e = 0; e < n.length; e++) {
    const t = e > 0 ? n[e - 1] : "";
    if (n[e] === "." && t !== "\\") return e;
  }
  return -1;
}
var Nd = {},
  Ut = {};
Object.defineProperty(Ut, "__esModule", { value: !0 });
Ut.isDocumentToRecurOn = Ut.flatten = Ut.unique = void 0;
function vy(n) {
  return [...new Set(n)];
}
Ut.unique = vy;
function wy(n) {
  return [].concat(...n);
}
Ut.flatten = wy;
function Qy(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n) && Object.keys(n).length;
}
Ut.isDocumentToRecurOn = Qy;
var Gd = {};
Object.defineProperty(Gd, "__esModule", { value: !0 });
(function (n) {
  var e =
      (me && me.__createBinding) ||
      (Object.create
        ? function (d, p, O, g) {
            g === void 0 && (g = O);
            var S = Object.getOwnPropertyDescriptor(p, O);
            (!S || ("get" in S ? !p.__esModule : S.writable || S.configurable)) &&
              (S = {
                enumerable: !0,
                get: function () {
                  return p[O];
                },
              }),
              Object.defineProperty(d, g, S);
          }
        : function (d, p, O, g) {
            g === void 0 && (g = O), (d[g] = p[O]);
          }),
    t =
      (me && me.__setModuleDefault) ||
      (Object.create
        ? function (d, p) {
            Object.defineProperty(d, "default", { enumerable: !0, value: p });
          }
        : function (d, p) {
            d.default = p;
          }),
    i =
      (me && me.__importStar) ||
      function (d) {
        if (d && d.__esModule) return d;
        var p = {};
        if (d != null)
          for (var O in d)
            O !== "default" && Object.prototype.hasOwnProperty.call(d, O) && e(p, d, O);
        return t(p, d), p;
      },
    r =
      (me && me.__exportStar) ||
      function (d, p) {
        for (var O in d)
          O !== "default" && !Object.prototype.hasOwnProperty.call(p, O) && e(p, d, O);
      };
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.deepKeysFromList = n.deepKeys = void 0);
  const s = i(Ut);
  r(Gd, n);
  function o(d, p) {
    const O = f(p);
    return typeof d == "object" && d !== null ? a("", d, O) : [];
  }
  n.deepKeys = o;
  function l(d, p) {
    const O = f(p);
    return d.map((g) => (typeof g == "object" && g !== null ? o(g, O) : []));
  }
  n.deepKeysFromList = l;
  function a(d, p, O) {
    const g = Object.keys(p).map((S) => {
      const b = c(d, u(S, O));
      return (O.expandNestedObjects && s.isDocumentToRecurOn(p[S])) ||
        (O.arrayIndexesAsKeys && Array.isArray(p[S]) && p[S].length)
        ? a(b, p[S], O)
        : O.expandArrayObjects && Array.isArray(p[S])
          ? h(p[S], b, O)
          : O.ignoreEmptyArrays && Array.isArray(p[S]) && !p[S].length
            ? []
            : b;
    });
    return s.flatten(g);
  }
  function h(d, p, O) {
    let g = l(d, O);
    return d.length
      ? d.length && s.flatten(g).length === 0
        ? [p]
        : ((g = g.map((S) =>
            Array.isArray(S) && S.length === 0 ? [p] : S.map((b) => c(p, u(b, O)))
          )),
          s.unique(s.flatten(g)))
      : O.ignoreEmptyArraysWhenExpanding
        ? []
        : [p];
  }
  function u(d, p) {
    return p.escapeNestedDots ? d.replace(/\./g, "\\.") : d;
  }
  function c(d, p) {
    return d ? d + "." + p : p;
  }
  function f(d) {
    return {
      arrayIndexesAsKeys: !1,
      expandNestedObjects: !0,
      expandArrayObjects: !1,
      ignoreEmptyArraysWhenExpanding: !1,
      escapeNestedDots: !1,
      ignoreEmptyArrays: !1,
      ...(d ?? {}),
    };
  }
})(Nd);
var q = {};
Object.defineProperty(q, "__esModule", { value: !0 });
q.isInvalid =
  q.flatten =
  q.unique =
  q.arrayDifference =
  q.isError =
  q.isUndefined =
  q.isNull =
  q.isObject =
  q.isString =
  q.isNumber =
  q.unwind =
  q.getNCharacters =
  q.removeEmptyFields =
  q.isEmptyField =
  q.computeSchemaDifferences =
  q.isDateRepresentation =
  q.isStringRepresentation =
  q.deepCopy =
  q.validate =
  q.buildC2JOptions =
  q.buildJ2COptions =
    void 0;
const ro = ni,
  Nt = Ue,
  Py = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,
  so = 1e5;
function Ay(n) {
  var e, t, i;
  return {
    ...Nt.defaultJson2CsvOptions,
    ...n,
    delimiter: {
      field:
        ((e = n == null ? void 0 : n.delimiter) == null ? void 0 : e.field) ??
        Nt.defaultJson2CsvOptions.delimiter.field,
      wrap:
        ((t = n == null ? void 0 : n.delimiter) == null ? void 0 : t.wrap) ||
        Nt.defaultJson2CsvOptions.delimiter.wrap,
      eol:
        ((i = n == null ? void 0 : n.delimiter) == null ? void 0 : i.eol) ||
        Nt.defaultJson2CsvOptions.delimiter.eol,
    },
    fieldTitleMap: Object.create({}),
  };
}
q.buildJ2COptions = Ay;
function My(n) {
  var e, t, i;
  return {
    ...Nt.defaultCsv2JsonOptions,
    ...n,
    delimiter: {
      field:
        ((e = n == null ? void 0 : n.delimiter) == null ? void 0 : e.field) ??
        Nt.defaultCsv2JsonOptions.delimiter.field,
      wrap:
        ((t = n == null ? void 0 : n.delimiter) == null ? void 0 : t.wrap) ||
        Nt.defaultCsv2JsonOptions.delimiter.wrap,
      eol:
        ((i = n == null ? void 0 : n.delimiter) == null ? void 0 : i.eol) ||
        Nt.defaultCsv2JsonOptions.delimiter.eol,
    },
  };
}
q.buildC2JOptions = My;
function $y(n, e, t) {
  if (!n) throw new Error(`${t.cannotCallOn} ${n}.`);
  if (!e(n)) throw new Error(t.dataCheckFailure);
  return !0;
}
q.validate = $y;
function cl(n) {
  return JSON.parse(JSON.stringify(n));
}
q.deepCopy = cl;
function Ey(n, e) {
  const t = n[0],
    i = n.length - 1,
    r = n[i];
  return t === e.delimiter.wrap && r === e.delimiter.wrap;
}
q.isStringRepresentation = Ey;
function By(n) {
  return Py.test(n);
}
q.isDateRepresentation = By;
function Ry(n, e) {
  return fl(n, e).concat(fl(e, n));
}
q.computeSchemaDifferences = Ry;
function Ud(n) {
  return Kd(n) || Hd(n) || n === "";
}
q.isEmptyField = Ud;
function Ty(n) {
  return n.filter((e) => !Ud(e));
}
q.removeEmptyFields = Ty;
function Fy(n, e, t) {
  return n.substring(e, e + t);
}
q.getNCharacters = Fy;
function zy(n, e, t) {
  const i = (0, ro.evaluatePath)(e, t);
  let r = cl(e);
  Array.isArray(i) && i.length
    ? i.forEach((s) => {
        (r = cl(e)), n.push((0, ro.setPath)(r, t, s));
      })
    : (Array.isArray(i) && i.length === 0 && (0, ro.setPath)(r, t, ""), n.push(r));
}
function Zy(n, e) {
  const t = [];
  return (
    n.forEach((i) => {
      zy(t, i, e);
    }),
    t
  );
}
q.unwind = Zy;
function Wy(n) {
  return !isNaN(Number(n));
}
q.isNumber = Wy;
function jy(n) {
  return typeof n == "string";
}
q.isString = jy;
function Ly(n) {
  return typeof n == "object";
}
q.isObject = Ly;
function Hd(n) {
  return n === null;
}
q.isNull = Hd;
function Kd(n) {
  return typeof n > "u";
}
q.isUndefined = Kd;
function qy(n) {
  return Object.prototype.toString.call(n) === "[object Error]";
}
q.isError = qy;
function fl(n, e) {
  return n.filter((t) => !e.includes(t));
}
q.arrayDifference = fl;
function Iy(n) {
  return [...new Set(n)];
}
q.unique = Iy;
function _y(n) {
  if (n.flat) return n.flat();
  if (n.length > so) {
    let e = [];
    for (let t = 0; t < n.length; t += so) e = e.concat(...n.slice(t, t + so));
    return e;
  }
  return n.reduce((e, t) => e.concat(t), []);
}
q.flatten = _y;
function Vy(n) {
  return n === 1 / 0 || n === -1 / 0;
}
q.isInvalid = Vy;
var Xy =
    (me && me.__createBinding) ||
    (Object.create
      ? function (n, e, t, i) {
          i === void 0 && (i = t);
          var r = Object.getOwnPropertyDescriptor(e, t);
          (!r || ("get" in r ? !e.__esModule : r.writable || r.configurable)) &&
            (r = {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            }),
            Object.defineProperty(n, i, r);
        }
      : function (n, e, t, i) {
          i === void 0 && (i = t), (n[i] = e[t]);
        }),
  Yy =
    (me && me.__setModuleDefault) ||
    (Object.create
      ? function (n, e) {
          Object.defineProperty(n, "default", { enumerable: !0, value: e });
        }
      : function (n, e) {
          n.default = e;
        }),
  Ny =
    (me && me.__importStar) ||
    function (n) {
      if (n && n.__esModule) return n;
      var e = {};
      if (n != null)
        for (var t in n)
          t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && Xy(e, n, t);
      return Yy(e, n), e;
    };
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.Json2Csv = void 0;
const Gy = ni,
  Uy = Nd,
  cu = Ue,
  zt = Ny(q),
  Hy = function (n) {
    const e = new RegExp(n.delimiter.wrap, "g"),
      t = /\r?\n|\r/,
      i = n.parseValue && typeof n.parseValue == "function" ? n.parseValue : null,
      r = n.expandArrayObjects && !n.unwindArrays,
      s = {
        arrayIndexesAsKeys: n.arrayIndexesAsKeys,
        expandNestedObjects: n.expandNestedObjects,
        expandArrayObjects: r,
        ignoreEmptyArraysWhenExpanding: r,
        escapeNestedDots: !0,
      };
    function o(x) {
      return (0, Uy.deepKeysFromList)(x, s);
    }
    function l(x) {
      return x.length === 0 ? [] : n.checkSchemaDifferences ? a(x) : zt.unique(zt.flatten(x));
    }
    function a(x) {
      const M = x[0],
        z = x.slice(1);
      if (h(M, z)) throw new Error(cu.errors.json2csv.notSameSchema);
      return M;
    }
    function h(x, M) {
      return M.reduce((z, I) => (zt.computeSchemaDifferences(x, I).length > 0 ? z + 1 : z), 0);
    }
    function u(x) {
      return n.excludeKeys
        ? x.filter((M) => {
            for (const z of n.excludeKeys) {
              const I = z instanceof RegExp ? z : new RegExp(`^${z}`);
              if (z === M || M.match(I)) return !1;
            }
            return !0;
          })
        : x;
    }
    function c(x) {
      return n.sortHeader && typeof n.sortHeader == "function"
        ? x.sort(n.sortHeader)
        : n.sortHeader
          ? x.sort()
          : x;
    }
    function f(x) {
      return (
        n.trimHeaderFields &&
          (x.headerFields = x.headerFields.map((M) =>
            M.split(".")
              .map((z) => z.trim())
              .join(".")
          )),
        x
      );
    }
    function d(x) {
      return (
        n.prependHeader &&
          (x.headerFields = x.headerFields.map(function (M) {
            return $(M);
          })),
        x
      );
    }
    function p(x) {
      const M = Object.keys(n.fieldTitleMap);
      return (
        (x.header = x.headerFields
          .map(function (z) {
            let I = z;
            return (
              M.includes(z)
                ? (I = n.fieldTitleMap[z])
                : n.escapeHeaderNestedDots || (I = I.replace(/\\\./g, ".")),
              I
            );
          })
          .join(n.delimiter.field)),
        x
      );
    }
    function O() {
      return n.keys
        ? n.keys.map((x) =>
            typeof x == "object" && "field" in x
              ? ((n.fieldTitleMap[x.field] = x.title ?? x.field), x.field)
              : x
          )
        : [];
    }
    function g() {
      return n.keys
        ? n.keys.flatMap((x) =>
            typeof x == "string" ? [] : x != null && x.wildcardMatch ? x.field : []
          )
        : [];
    }
    function S(x) {
      const M = g(),
        z = O(),
        I = o(x),
        L = l(I);
      if (n.keys) {
        n.keys = z;
        const re = z.flatMap((fe) => {
          if (!M.includes(fe)) return fe;
          const He = [],
            Ze = new RegExp(`^${fe}`);
          for (const We of L) (fe === We || We.match(Ze)) && He.push(We);
          return He;
        });
        if (!n.unwindArrays) {
          const fe = u(re);
          return c(fe);
        }
      }
      const ee = u(L);
      return c(ee);
    }
    function b(x, M = !1) {
      if (n.unwindArrays) {
        const z = x.records.length;
        x.headerFields.forEach((L) => {
          x.records = zt.unwind(x.records, L);
        });
        const I = S(x.records);
        if (((x.headerFields = I), z !== x.records.length)) return b(x);
        if (!M) return b(x, !0);
        if (n.keys) {
          const L = O();
          x.headerFields = u(L);
        }
        return x;
      }
      return x;
    }
    function D(x) {
      return (
        (x.recordString = x.records
          .map((M) => {
            const z = k(M, x.headerFields),
              I = z.map((L) => {
                (L = Q(L)), (L = R(L));
                let ee = i ? i(L, y) : y(L);
                return (ee = $(ee)), ee;
              });
            return j(I);
          })
          .join(n.delimiter.eol)),
        x
      );
    }
    function v(x) {
      const M = zt.removeEmptyFields(x);
      return !x.length || !M.length ? n.emptyFieldValue || "" : M.length === 1 ? M[0] : x;
    }
    function k(x, M) {
      const z = [];
      return (
        M.forEach((I) => {
          let L = (0, Gy.evaluatePath)(x, I);
          !zt.isUndefined(n.emptyFieldValue) && zt.isEmptyField(L)
            ? (L = n.emptyFieldValue)
            : n.expandArrayObjects && Array.isArray(L) && (L = v(L)),
            z.push(L);
        }),
        z
      );
    }
    function y(x) {
      const M = x instanceof Date;
      return x === null || Array.isArray(x) || (typeof x == "object" && !M)
        ? JSON.stringify(x)
        : typeof x > "u"
          ? "undefined"
          : M && n.useDateIso8601Format
            ? x.toISOString()
            : n.useLocaleFormat
              ? x.toLocaleString()
              : x.toString();
    }
    function Q(x) {
      return n.trimFieldValues
        ? Array.isArray(x)
          ? x.map(Q)
          : typeof x == "string"
            ? x.trim()
            : x
        : x;
    }
    function R(x) {
      return n.preventCsvInjection
        ? Array.isArray(x)
          ? x.map(R)
          : typeof x == "string" && !zt.isNumber(x)
            ? x.replace(/^[=+\-@\t\r]+/g, "")
            : x
        : x;
    }
    function $(x) {
      const M = n.delimiter.wrap;
      return (
        x.includes(n.delimiter.wrap) && (x = x.replace(e, M + M)),
        (x.includes(n.delimiter.field) ||
          x.includes(n.delimiter.wrap) ||
          x.match(t) ||
          (n.wrapBooleans && (x === "true" || x === "false"))) &&
          (x = M + x + M),
        x
      );
    }
    function j(x) {
      return x.join(n.delimiter.field);
    }
    function Z(x) {
      const M = x.header,
        z = x.recordString;
      return (n.excelBOM ? cu.excelBOM : "") + (n.prependHeader ? M + n.delimiter.eol : "") + z;
    }
    function A(x) {
      Array.isArray(x) || (x = [x]);
      const M = { headerFields: S(x), records: x, header: "", recordString: "" },
        z = b(M),
        I = D(z),
        L = d(I),
        ee = f(L),
        re = p(ee);
      return Z(re);
    }
    return { convert: A };
  };
vs.Json2Csv = Hy;
var ws = {},
  Ky =
    (me && me.__createBinding) ||
    (Object.create
      ? function (n, e, t, i) {
          i === void 0 && (i = t);
          var r = Object.getOwnPropertyDescriptor(e, t);
          (!r || ("get" in r ? !e.__esModule : r.writable || r.configurable)) &&
            (r = {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            }),
            Object.defineProperty(n, i, r);
        }
      : function (n, e, t, i) {
          i === void 0 && (i = t), (n[i] = e[t]);
        }),
  Jy =
    (me && me.__setModuleDefault) ||
    (Object.create
      ? function (n, e) {
          Object.defineProperty(n, "default", { enumerable: !0, value: e });
        }
      : function (n, e) {
          n.default = e;
        }),
  ex =
    (me && me.__importStar) ||
    function (n) {
      if (n && n.__esModule) return n;
      var e = {};
      if (n != null)
        for (var t in n)
          t !== "default" && Object.prototype.hasOwnProperty.call(n, t) && Ky(e, n, t);
      return Jy(e, n), e;
    };
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.Csv2Json = void 0;
const tx = ni,
  ix = Ue,
  Zt = ex(q),
  nx = function (n) {
    const e = new RegExp(n.delimiter.wrap + n.delimiter.wrap, "g"),
      t = new RegExp("^" + ix.excelBOM),
      i = n.parseValue && typeof n.parseValue == "function" ? n.parseValue : JSON.parse;
    function r(b) {
      return (
        (b = d(b)),
        n.trimHeaderFields
          ? b
              .split(".")
              .map((D) => D.trim())
              .join(".")
          : b
      );
    }
    function s(b) {
      let D = [];
      if (n.headerFields) D = n.headerFields.map((v, k) => ({ value: r(v), index: k }));
      else if (((D = b[0].map((k, y) => ({ value: r(k), index: y }))), n.keys)) {
        const k = n.keys;
        D = D.filter((y) => k.includes(y.value));
      }
      return { lines: b, headerFields: D, recordLines: [] };
    }
    function o(b) {
      return n.excelBOM ? b.replace(t, "") : b;
    }
    function l(b) {
      const D = [],
        v = b.length - 1,
        k = n.delimiter.eol.length,
        y = { insideWrapDelimiter: !1, parsingValue: !0, justParsedDoubleQuote: !1, startIndex: 0 };
      let Q = [],
        R,
        $,
        j,
        Z,
        A = 0;
      for (; A < b.length; ) {
        if (
          ((R = b[A]),
          ($ = A ? b[A - 1] : ""),
          (j = A < v ? b[A + 1] : ""),
          (Z = Zt.getNCharacters(b, A, k)),
          ((Z === n.delimiter.eol && !y.insideWrapDelimiter) || A === v) && $ === n.delimiter.field)
        )
          (Z === n.delimiter.eol && y.startIndex === A) || R === n.delimiter.field
            ? Q.push("")
            : Q.push(b.substring(y.startIndex)),
            Q.push(""),
            D.push(Q),
            (Q = []),
            (y.startIndex = A + k),
            (y.parsingValue = !0),
            (y.insideWrapDelimiter = j === n.delimiter.wrap);
        else if (A === v && R === n.delimiter.field) {
          const x = b.substring(y.startIndex, A);
          Q.push(x), Q.push(""), D.push(Q);
        } else if (
          A === v ||
          (Z === n.delimiter.eol &&
            (!y.insideWrapDelimiter ||
              (y.insideWrapDelimiter && $ === n.delimiter.wrap && !y.justParsedDoubleQuote)))
        ) {
          const x = A !== v || $ === n.delimiter.wrap ? A : void 0;
          Q.push(b.substring(y.startIndex, x)),
            D.push(Q),
            (Q = []),
            (y.startIndex = A + k),
            (y.parsingValue = !0),
            (y.insideWrapDelimiter = j === n.delimiter.wrap);
        } else if (
          R === n.delimiter.wrap &&
          $ === n.delimiter.field &&
          !y.insideWrapDelimiter &&
          !y.parsingValue
        )
          (y.startIndex = A),
            (y.insideWrapDelimiter = !0),
            (y.parsingValue = !0),
            Zt.getNCharacters(b, A + 1, k) === n.delimiter.eol && (A += n.delimiter.eol.length + 1);
        else if (
          ($ !== n.delimiter.wrap || (y.justParsedDoubleQuote && $ === n.delimiter.wrap)) &&
          R === n.delimiter.wrap &&
          Zt.getNCharacters(b, A + 1, k) === n.delimiter.eol
        )
          (y.insideWrapDelimiter = !1), (y.parsingValue = !1);
        else if (
          R === n.delimiter.wrap &&
          (A === 0 ||
            (Zt.getNCharacters(b, A - k, k) === n.delimiter.eol && !y.insideWrapDelimiter))
        )
          (y.insideWrapDelimiter = !0), (y.parsingValue = !0), (y.startIndex = A);
        else if (R === n.delimiter.wrap && j === n.delimiter.field)
          Q.push(b.substring(y.startIndex, A + 1)),
            (y.startIndex = A + 2),
            (y.insideWrapDelimiter = !1),
            (y.parsingValue = !1);
        else if (
          R === n.delimiter.wrap &&
          $ === n.delimiter.field &&
          !y.insideWrapDelimiter &&
          y.parsingValue
        )
          Q.push(b.substring(y.startIndex, A - 1)),
            (y.insideWrapDelimiter = !0),
            (y.parsingValue = !0),
            (y.startIndex = A);
        else if (R === n.delimiter.wrap && j === n.delimiter.wrap && A !== y.startIndex) {
          (A += 2), (y.justParsedDoubleQuote = !0);
          continue;
        } else
          R === n.delimiter.field &&
          $ !== n.delimiter.wrap &&
          j !== n.delimiter.wrap &&
          !y.insideWrapDelimiter &&
          y.parsingValue
            ? (Q.push(b.substring(y.startIndex, A)), (y.startIndex = A + 1))
            : R === n.delimiter.field &&
              $ === n.delimiter.wrap &&
              j !== n.delimiter.wrap &&
              !y.parsingValue &&
              ((y.insideWrapDelimiter = !1), (y.parsingValue = !0), (y.startIndex = A + 1));
        A++, (y.justParsedDoubleQuote = !1);
      }
      return D;
    }
    function a(b) {
      return n.headerFields ? (b.recordLines = b.lines) : (b.recordLines = b.lines.splice(1)), b;
    }
    function h(b, D) {
      const v = D[b.index];
      return u(v);
    }
    function u(b) {
      const D = g(b);
      return !Zt.isError(D) && !Zt.isInvalid(D) ? D : b === "undefined" ? void 0 : b;
    }
    function c(b) {
      return n.trimFieldValues && b !== null ? b.trim() : b;
    }
    function f(b, D) {
      return b.reduce((v, k) => {
        const y = h(k, D);
        try {
          return (0, tx.setPath)(v, k.value, y);
        } catch {
          return v;
        }
      }, {});
    }
    function d(b) {
      const D = b[0],
        v = b.length - 1,
        k = b[v];
      return D === n.delimiter.wrap && k === n.delimiter.wrap
        ? b.length <= 2
          ? ""
          : b.substring(1, v)
        : b;
    }
    function p(b) {
      return b.replace(e, n.delimiter.wrap);
    }
    function O(b) {
      return b.recordLines.reduce((D, v) => {
        v = v.map((y) => ((y = d(y)), (y = p(y)), (y = c(y)), y));
        const k = f(b.headerFields, v);
        return D.concat(k);
      }, []);
    }
    function g(b) {
      try {
        if (Zt.isStringRepresentation(b, n) && !Zt.isDateRepresentation(b)) return b;
        const D = i(b);
        return Array.isArray(D) ? D.map(c) : D;
      } catch (D) {
        return D;
      }
    }
    function S(b) {
      const D = o(b),
        v = l(D),
        k = s(v),
        y = a(k);
      return O(y);
    }
    return { convert: S };
  };
ws.Csv2Json = nx;
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.csv2json = ep = Wn.json2csv = void 0;
const Jd = Ue,
  rx = vs,
  sx = ws,
  Wi = q;
function ox(n, e) {
  const t = (0, Wi.buildJ2COptions)(e ?? {});
  return (0, Wi.validate)(n, Wi.isObject, Jd.errors.json2csv), (0, rx.Json2Csv)(t).convert(n);
}
var ep = (Wn.json2csv = ox);
function lx(n, e) {
  const t = (0, Wi.buildC2JOptions)(e ?? {});
  return (0, Wi.validate)(n, Wi.isString, Jd.errors.csv2json), (0, sx.Csv2Json)(t).convert(n);
}
Wn.csv2json = lx;
var ax = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  hx =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
  ux =
    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
  oo = { Space_Separator: ax, ID_Start: hx, ID_Continue: ux },
  de = {
    isSpaceSeparator(n) {
      return typeof n == "string" && oo.Space_Separator.test(n);
    },
    isIdStartChar(n) {
      return (
        typeof n == "string" &&
        ((n >= "a" && n <= "z") ||
          (n >= "A" && n <= "Z") ||
          n === "$" ||
          n === "_" ||
          oo.ID_Start.test(n))
      );
    },
    isIdContinueChar(n) {
      return (
        typeof n == "string" &&
        ((n >= "a" && n <= "z") ||
          (n >= "A" && n <= "Z") ||
          (n >= "0" && n <= "9") ||
          n === "$" ||
          n === "_" ||
          n === "‌" ||
          n === "‍" ||
          oo.ID_Continue.test(n))
      );
    },
    isDigit(n) {
      return typeof n == "string" && /[0-9]/.test(n);
    },
    isHexDigit(n) {
      return typeof n == "string" && /[0-9A-Fa-f]/.test(n);
    },
  };
let dl, Te, Mt, us, ri, at, xe, ra, xn;
var cx = function (e, t) {
  (dl = String(e)),
    (Te = "start"),
    (Mt = []),
    (us = 0),
    (ri = 1),
    (at = 0),
    (xe = void 0),
    (ra = void 0),
    (xn = void 0);
  do (xe = fx()), Ox[Te]();
  while (xe.type !== "eof");
  return typeof t == "function" ? pl({ "": xn }, "", t) : xn;
};
function pl(n, e, t) {
  const i = n[e];
  if (i != null && typeof i == "object")
    if (Array.isArray(i))
      for (let r = 0; r < i.length; r++) {
        const s = String(r),
          o = pl(i, s, t);
        o === void 0
          ? delete i[s]
          : Object.defineProperty(i, s, {
              value: o,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
    else
      for (const r in i) {
        const s = pl(i, r, t);
        s === void 0
          ? delete i[r]
          : Object.defineProperty(i, r, {
              value: s,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      }
  return t.call(n, e, i);
}
let Y, _, pn, wt, G;
function fx() {
  for (Y = "default", _ = "", pn = !1, wt = 1; ; ) {
    G = Bt();
    const n = tp[Y]();
    if (n) return n;
  }
}
function Bt() {
  if (dl[us]) return String.fromCodePoint(dl.codePointAt(us));
}
function P() {
  const n = Bt();
  return (
    n ===
    `
`
      ? (ri++, (at = 0))
      : n
        ? (at += n.length)
        : at++,
    n && (us += n.length),
    n
  );
}
const tp = {
  default() {
    switch (G) {
      case "	":
      case "\v":
      case "\f":
      case " ":
      case " ":
      case "\uFEFF":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        P();
        return;
      case "/":
        P(), (Y = "comment");
        return;
      case void 0:
        return P(), oe("eof");
    }
    if (de.isSpaceSeparator(G)) {
      P();
      return;
    }
    return tp[Te]();
  },
  comment() {
    switch (G) {
      case "*":
        P(), (Y = "multiLineComment");
        return;
      case "/":
        P(), (Y = "singleLineComment");
        return;
    }
    throw le(P());
  },
  multiLineComment() {
    switch (G) {
      case "*":
        P(), (Y = "multiLineCommentAsterisk");
        return;
      case void 0:
        throw le(P());
    }
    P();
  },
  multiLineCommentAsterisk() {
    switch (G) {
      case "*":
        P();
        return;
      case "/":
        P(), (Y = "default");
        return;
      case void 0:
        throw le(P());
    }
    P(), (Y = "multiLineComment");
  },
  singleLineComment() {
    switch (G) {
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        P(), (Y = "default");
        return;
      case void 0:
        return P(), oe("eof");
    }
    P();
  },
  value() {
    switch (G) {
      case "{":
      case "[":
        return oe("punctuator", P());
      case "n":
        return P(), ai("ull"), oe("null", null);
      case "t":
        return P(), ai("rue"), oe("boolean", !0);
      case "f":
        return P(), ai("alse"), oe("boolean", !1);
      case "-":
      case "+":
        P() === "-" && (wt = -1), (Y = "sign");
        return;
      case ".":
        (_ = P()), (Y = "decimalPointLeading");
        return;
      case "0":
        (_ = P()), (Y = "zero");
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (_ = P()), (Y = "decimalInteger");
        return;
      case "I":
        return P(), ai("nfinity"), oe("numeric", 1 / 0);
      case "N":
        return P(), ai("aN"), oe("numeric", NaN);
      case '"':
      case "'":
        (pn = P() === '"'), (_ = ""), (Y = "string");
        return;
    }
    throw le(P());
  },
  identifierNameStartEscape() {
    if (G !== "u") throw le(P());
    P();
    const n = Ol();
    switch (n) {
      case "$":
      case "_":
        break;
      default:
        if (!de.isIdStartChar(n)) throw fu();
        break;
    }
    (_ += n), (Y = "identifierName");
  },
  identifierName() {
    switch (G) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        _ += P();
        return;
      case "\\":
        P(), (Y = "identifierNameEscape");
        return;
    }
    if (de.isIdContinueChar(G)) {
      _ += P();
      return;
    }
    return oe("identifier", _);
  },
  identifierNameEscape() {
    if (G !== "u") throw le(P());
    P();
    const n = Ol();
    switch (n) {
      case "$":
      case "_":
      case "‌":
      case "‍":
        break;
      default:
        if (!de.isIdContinueChar(n)) throw fu();
        break;
    }
    (_ += n), (Y = "identifierName");
  },
  sign() {
    switch (G) {
      case ".":
        (_ = P()), (Y = "decimalPointLeading");
        return;
      case "0":
        (_ = P()), (Y = "zero");
        return;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        (_ = P()), (Y = "decimalInteger");
        return;
      case "I":
        return P(), ai("nfinity"), oe("numeric", wt * (1 / 0));
      case "N":
        return P(), ai("aN"), oe("numeric", NaN);
    }
    throw le(P());
  },
  zero() {
    switch (G) {
      case ".":
        (_ += P()), (Y = "decimalPoint");
        return;
      case "e":
      case "E":
        (_ += P()), (Y = "decimalExponent");
        return;
      case "x":
      case "X":
        (_ += P()), (Y = "hexadecimal");
        return;
    }
    return oe("numeric", wt * 0);
  },
  decimalInteger() {
    switch (G) {
      case ".":
        (_ += P()), (Y = "decimalPoint");
        return;
      case "e":
      case "E":
        (_ += P()), (Y = "decimalExponent");
        return;
    }
    if (de.isDigit(G)) {
      _ += P();
      return;
    }
    return oe("numeric", wt * Number(_));
  },
  decimalPointLeading() {
    if (de.isDigit(G)) {
      (_ += P()), (Y = "decimalFraction");
      return;
    }
    throw le(P());
  },
  decimalPoint() {
    switch (G) {
      case "e":
      case "E":
        (_ += P()), (Y = "decimalExponent");
        return;
    }
    if (de.isDigit(G)) {
      (_ += P()), (Y = "decimalFraction");
      return;
    }
    return oe("numeric", wt * Number(_));
  },
  decimalFraction() {
    switch (G) {
      case "e":
      case "E":
        (_ += P()), (Y = "decimalExponent");
        return;
    }
    if (de.isDigit(G)) {
      _ += P();
      return;
    }
    return oe("numeric", wt * Number(_));
  },
  decimalExponent() {
    switch (G) {
      case "+":
      case "-":
        (_ += P()), (Y = "decimalExponentSign");
        return;
    }
    if (de.isDigit(G)) {
      (_ += P()), (Y = "decimalExponentInteger");
      return;
    }
    throw le(P());
  },
  decimalExponentSign() {
    if (de.isDigit(G)) {
      (_ += P()), (Y = "decimalExponentInteger");
      return;
    }
    throw le(P());
  },
  decimalExponentInteger() {
    if (de.isDigit(G)) {
      _ += P();
      return;
    }
    return oe("numeric", wt * Number(_));
  },
  hexadecimal() {
    if (de.isHexDigit(G)) {
      (_ += P()), (Y = "hexadecimalInteger");
      return;
    }
    throw le(P());
  },
  hexadecimalInteger() {
    if (de.isHexDigit(G)) {
      _ += P();
      return;
    }
    return oe("numeric", wt * Number(_));
  },
  string() {
    switch (G) {
      case "\\":
        P(), (_ += dx());
        return;
      case '"':
        if (pn) return P(), oe("string", _);
        _ += P();
        return;
      case "'":
        if (!pn) return P(), oe("string", _);
        _ += P();
        return;
      case `
`:
      case "\r":
        throw le(P());
      case "\u2028":
      case "\u2029":
        gx(G);
        break;
      case void 0:
        throw le(P());
    }
    _ += P();
  },
  start() {
    switch (G) {
      case "{":
      case "[":
        return oe("punctuator", P());
    }
    Y = "value";
  },
  beforePropertyName() {
    switch (G) {
      case "$":
      case "_":
        (_ = P()), (Y = "identifierName");
        return;
      case "\\":
        P(), (Y = "identifierNameStartEscape");
        return;
      case "}":
        return oe("punctuator", P());
      case '"':
      case "'":
        (pn = P() === '"'), (Y = "string");
        return;
    }
    if (de.isIdStartChar(G)) {
      (_ += P()), (Y = "identifierName");
      return;
    }
    throw le(P());
  },
  afterPropertyName() {
    if (G === ":") return oe("punctuator", P());
    throw le(P());
  },
  beforePropertyValue() {
    Y = "value";
  },
  afterPropertyValue() {
    switch (G) {
      case ",":
      case "}":
        return oe("punctuator", P());
    }
    throw le(P());
  },
  beforeArrayValue() {
    if (G === "]") return oe("punctuator", P());
    Y = "value";
  },
  afterArrayValue() {
    switch (G) {
      case ",":
      case "]":
        return oe("punctuator", P());
    }
    throw le(P());
  },
  end() {
    throw le(P());
  },
};
function oe(n, e) {
  return { type: n, value: e, line: ri, column: at };
}
function ai(n) {
  for (const e of n) {
    if (Bt() !== e) throw le(P());
    P();
  }
}
function dx() {
  switch (Bt()) {
    case "b":
      return P(), "\b";
    case "f":
      return P(), "\f";
    case "n":
      return (
        P(),
        `
`
      );
    case "r":
      return P(), "\r";
    case "t":
      return P(), "	";
    case "v":
      return P(), "\v";
    case "0":
      if ((P(), de.isDigit(Bt()))) throw le(P());
      return "\0";
    case "x":
      return P(), px();
    case "u":
      return P(), Ol();
    case `
`:
    case "\u2028":
    case "\u2029":
      return P(), "";
    case "\r":
      return (
        P(),
        Bt() ===
          `
` && P(),
        ""
      );
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      throw le(P());
    case void 0:
      throw le(P());
  }
  return P();
}
function px() {
  let n = "",
    e = Bt();
  if (!de.isHexDigit(e) || ((n += P()), (e = Bt()), !de.isHexDigit(e))) throw le(P());
  return (n += P()), String.fromCodePoint(parseInt(n, 16));
}
function Ol() {
  let n = "",
    e = 4;
  for (; e-- > 0; ) {
    const t = Bt();
    if (!de.isHexDigit(t)) throw le(P());
    n += P();
  }
  return String.fromCodePoint(parseInt(n, 16));
}
const Ox = {
  start() {
    if (xe.type === "eof") throw hi();
    lo();
  },
  beforePropertyName() {
    switch (xe.type) {
      case "identifier":
      case "string":
        (ra = xe.value), (Te = "afterPropertyName");
        return;
      case "punctuator":
        yr();
        return;
      case "eof":
        throw hi();
    }
  },
  afterPropertyName() {
    if (xe.type === "eof") throw hi();
    Te = "beforePropertyValue";
  },
  beforePropertyValue() {
    if (xe.type === "eof") throw hi();
    lo();
  },
  beforeArrayValue() {
    if (xe.type === "eof") throw hi();
    if (xe.type === "punctuator" && xe.value === "]") {
      yr();
      return;
    }
    lo();
  },
  afterPropertyValue() {
    if (xe.type === "eof") throw hi();
    switch (xe.value) {
      case ",":
        Te = "beforePropertyName";
        return;
      case "}":
        yr();
    }
  },
  afterArrayValue() {
    if (xe.type === "eof") throw hi();
    switch (xe.value) {
      case ",":
        Te = "beforeArrayValue";
        return;
      case "]":
        yr();
    }
  },
  end() {},
};
function lo() {
  let n;
  switch (xe.type) {
    case "punctuator":
      switch (xe.value) {
        case "{":
          n = {};
          break;
        case "[":
          n = [];
          break;
      }
      break;
    case "null":
    case "boolean":
    case "numeric":
    case "string":
      n = xe.value;
      break;
  }
  if (xn === void 0) xn = n;
  else {
    const e = Mt[Mt.length - 1];
    Array.isArray(e)
      ? e.push(n)
      : Object.defineProperty(e, ra, { value: n, writable: !0, enumerable: !0, configurable: !0 });
  }
  if (n !== null && typeof n == "object")
    Mt.push(n), Array.isArray(n) ? (Te = "beforeArrayValue") : (Te = "beforePropertyName");
  else {
    const e = Mt[Mt.length - 1];
    e == null
      ? (Te = "end")
      : Array.isArray(e)
        ? (Te = "afterArrayValue")
        : (Te = "afterPropertyValue");
  }
}
function yr() {
  Mt.pop();
  const n = Mt[Mt.length - 1];
  n == null
    ? (Te = "end")
    : Array.isArray(n)
      ? (Te = "afterArrayValue")
      : (Te = "afterPropertyValue");
}
function le(n) {
  return cs(
    n === void 0
      ? `JSON5: invalid end of input at ${ri}:${at}`
      : `JSON5: invalid character '${ip(n)}' at ${ri}:${at}`
  );
}
function hi() {
  return cs(`JSON5: invalid end of input at ${ri}:${at}`);
}
function fu() {
  return (at -= 5), cs(`JSON5: invalid identifier character at ${ri}:${at}`);
}
function gx(n) {
  console.warn(`JSON5: '${ip(n)}' in strings is not valid ECMAScript; consider escaping`);
}
function ip(n) {
  const e = {
    "'": "\\'",
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "\v": "\\v",
    "\0": "\\0",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  };
  if (e[n]) return e[n];
  if (n < " ") {
    const t = n.charCodeAt(0).toString(16);
    return "\\x" + ("00" + t).substring(t.length);
  }
  return n;
}
function cs(n) {
  const e = new SyntaxError(n);
  return (e.lineNumber = ri), (e.columnNumber = at), e;
}
var mx = function (e, t, i) {
  const r = [];
  let s = "",
    o,
    l,
    a = "",
    h;
  if (
    (t != null &&
      typeof t == "object" &&
      !Array.isArray(t) &&
      ((i = t.space), (h = t.quote), (t = t.replacer)),
    typeof t == "function")
  )
    l = t;
  else if (Array.isArray(t)) {
    o = [];
    for (const O of t) {
      let g;
      typeof O == "string"
        ? (g = O)
        : (typeof O == "number" || O instanceof String || O instanceof Number) && (g = String(O)),
        g !== void 0 && o.indexOf(g) < 0 && o.push(g);
    }
  }
  return (
    i instanceof Number ? (i = Number(i)) : i instanceof String && (i = String(i)),
    typeof i == "number"
      ? i > 0 && ((i = Math.min(10, Math.floor(i))), (a = "          ".substr(0, i)))
      : typeof i == "string" && (a = i.substr(0, 10)),
    u("", { "": e })
  );
  function u(O, g) {
    let S = g[O];
    switch (
      (S != null &&
        (typeof S.toJSON5 == "function"
          ? (S = S.toJSON5(O))
          : typeof S.toJSON == "function" && (S = S.toJSON(O))),
      l && (S = l.call(g, O, S)),
      S instanceof Number
        ? (S = Number(S))
        : S instanceof String
          ? (S = String(S))
          : S instanceof Boolean && (S = S.valueOf()),
      S)
    ) {
      case null:
        return "null";
      case !0:
        return "true";
      case !1:
        return "false";
    }
    if (typeof S == "string") return c(S);
    if (typeof S == "number") return String(S);
    if (typeof S == "object") return Array.isArray(S) ? p(S) : f(S);
  }
  function c(O) {
    const g = { "'": 0.1, '"': 0.2 },
      S = {
        "'": "\\'",
        '"': '\\"',
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "\v": "\\v",
        "\0": "\\0",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
      };
    let b = "";
    for (let v = 0; v < O.length; v++) {
      const k = O[v];
      switch (k) {
        case "'":
        case '"':
          g[k]++, (b += k);
          continue;
        case "\0":
          if (de.isDigit(O[v + 1])) {
            b += "\\x00";
            continue;
          }
      }
      if (S[k]) {
        b += S[k];
        continue;
      }
      if (k < " ") {
        let y = k.charCodeAt(0).toString(16);
        b += "\\x" + ("00" + y).substring(y.length);
        continue;
      }
      b += k;
    }
    const D = h || Object.keys(g).reduce((v, k) => (g[v] < g[k] ? v : k));
    return (b = b.replace(new RegExp(D, "g"), S[D])), D + b + D;
  }
  function f(O) {
    if (r.indexOf(O) >= 0) throw TypeError("Converting circular structure to JSON5");
    r.push(O);
    let g = s;
    s = s + a;
    let S = o || Object.keys(O),
      b = [];
    for (const v of S) {
      const k = u(v, O);
      if (k !== void 0) {
        let y = d(v) + ":";
        a !== "" && (y += " "), (y += k), b.push(y);
      }
    }
    let D;
    if (b.length === 0) D = "{}";
    else {
      let v;
      if (a === "") (v = b.join(",")), (D = "{" + v + "}");
      else {
        let k =
          `,
` + s;
        (v = b.join(k)),
          (D =
            `{
` +
            s +
            v +
            `,
` +
            g +
            "}");
      }
    }
    return r.pop(), (s = g), D;
  }
  function d(O) {
    if (O.length === 0) return c(O);
    const g = String.fromCodePoint(O.codePointAt(0));
    if (!de.isIdStartChar(g)) return c(O);
    for (let S = g.length; S < O.length; S++)
      if (!de.isIdContinueChar(String.fromCodePoint(O.codePointAt(S)))) return c(O);
    return O;
  }
  function p(O) {
    if (r.indexOf(O) >= 0) throw TypeError("Converting circular structure to JSON5");
    r.push(O);
    let g = s;
    s = s + a;
    let S = [];
    for (let D = 0; D < O.length; D++) {
      const v = u(String(D), O);
      S.push(v !== void 0 ? v : "null");
    }
    let b;
    if (S.length === 0) b = "[]";
    else if (a === "") b = "[" + S.join(",") + "]";
    else {
      let D =
          `,
` + s,
        v = S.join(D);
      b =
        `[
` +
        s +
        v +
        `,
` +
        g +
        "]";
    }
    return r.pop(), (s = g), b;
  }
};
const Sx = { parse: cx, stringify: mx };
var bx = Sx;
const On = ["v1", "vX", "v2021-03-25", "v2021-10-21", "v2022-03-07"],
  [np] = On.slice(-1);
function rp(n) {
  const [e, t] = H.useState(!1);
  return (
    H.useEffect(() => {
      const i = setTimeout(() => t(!0), n.delay || 500);
      return () => clearTimeout(i);
    }, [n.delay]),
    e ? C.jsx(kp, { muted: !0, size: 4 }) : null
  );
}
const yx = [
  [ky],
  hf(),
  nf(),
  uf(),
  Dd(),
  tf(),
  Df(),
  Ff(),
  Fd(),
  jf(),
  Kc(),
  bs(Ef, { fallback: !0 }),
  Vn.of([{ key: "Mod-Enter", run: () => !0 }, md, _f].flat().filter(Boolean)),
];
function xx(n) {
  const e = H.useMemo(() => kx(n), [n]),
    t = H.useMemo(() => bs(Dx(n)), [n]);
  return [e, t];
}
function kx(n) {
  const { color: e, fonts: t } = n.sanity,
    i = e.card.enabled,
    r = ua.blue[e.dark ? 400 : 500].hex,
    s = ua.gray[n.sanity.color.dark ? 900 : 100].hex;
  return B.theme(
    {
      "&": { color: i.fg, backgroundColor: i.bg },
      ".cm-content": { caretColor: r },
      ".cm-editor": {
        fontFamily: t.code.family,
        fontSize: ot(t.code.sizes[1].fontSize),
        lineHeight: "inherit",
      },
      ".cm-cursor, .cm-dropCursor": { borderLeftColor: r },
      "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
        backgroundColor: s,
      },
      ".cm-panels": { backgroundColor: i.bg, color: i.fg },
      ".cm-panels.cm-panels-top": { borderBottom: `2px solid ${i.border}` },
      ".cm-panels.cm-panels-bottom": { borderTop: `2px solid ${i.border}` },
    },
    { dark: e.dark }
  );
}
function Dx(n) {
  const e = n.sanity.color.base,
    t = n.sanity.color.syntax;
  return Gi.define([
    { tag: m.keyword, color: t.keyword },
    { tag: [m.propertyName, m.name, m.deleted, m.character, m.macroName], color: t.property },
    { tag: [m.function(m.variableName), m.labelName], color: t.function },
    { tag: [m.color, m.constant(m.name), m.standard(m.name)], color: t.variable },
    { tag: [m.definition(m.name), m.separator], color: t.constant },
    {
      tag: [
        m.typeName,
        m.className,
        m.number,
        m.changed,
        m.annotation,
        m.modifier,
        m.self,
        m.namespace,
      ],
      color: t.number,
    },
    {
      tag: [m.operator, m.operatorKeyword, m.url, m.escape, m.regexp, m.link, m.special(m.string)],
      color: t.operator,
    },
    { tag: [m.meta, m.comment], color: t.comment },
    { tag: m.strong, fontWeight: "bold" },
    { tag: m.emphasis, fontStyle: "italic" },
    { tag: m.strikethrough, textDecoration: "line-through" },
    { tag: m.heading, fontWeight: "bold", color: t.property },
    { tag: [m.atom, m.bool, m.special(m.variableName)], color: t.boolean },
    { tag: [m.processingInstruction, m.string, m.inserted], color: t.string },
    { tag: m.invalid, color: e.fg },
  ]);
}
const Cx = ce.div`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  overflow: clip;
  position: relative;
  display: flex;

  & .cm-theme {
    width: 100%;
  }

  & .cm-editor {
    height: 100%;

    font-size: 16px;
    line-height: 21px;
  }

  & .cm-line {
    padding-left: ${({ theme: n }) => ot(n.sanity.space[3])};
  }

  & .cm-content {
    border-right-width: ${({ theme: n }) => ot(n.sanity.space[4])} !important;
    padding-top: ${({ theme: n }) => ot(n.sanity.space[5])};
  }
`;
function sp(n) {
  const e = Ap(),
    t = xx(e);
  return C.jsx(Cx, { children: C.jsx(Vd, { basicSetup: !1, theme: t, extensions: yx, ...n }) });
}
const kn = ["raw", "previewDrafts", "published"],
  du = kn[0];
function vx(n) {
  return kn.includes(n);
}
function pu(n, e = {}, t = {}) {
  const i = new URLSearchParams();
  i.set("query", n);
  for (const [r, s] of Object.entries(e)) i.set(`$${r}`, JSON.stringify(s));
  for (const [r, s] of Object.entries(t)) s && i.set(r, `${s}`);
  return `?${i}`;
}
function wx(n, e) {
  return URL.createObjectURL(new Blob([n], { type: e }));
}
function op(n, e) {
  return (() => {
    let t = "",
      i = "";
    return (r) => {
      const s = e(r);
      if (!(typeof s != "string" || s === ""))
        return s === i || ((i = s), t && URL.revokeObjectURL(t), (t = wx(s, n))), t;
    };
  })();
}
const Qx = op("application/json", (n) => JSON.stringify(n, null, 2)),
  Px = op("text/csv", (n) => ep(Array.isArray(n) ? n : [n]).trim());
function Ax(n) {
  return !!n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]";
}
const lp = Ex(),
  ap = "sanityVision:";
function Mx() {
  if (lp)
    for (let n = 0; n < localStorage.length; n++) {
      const e = localStorage.key(n);
      e != null && e.startsWith(ap) && localStorage.removeItem(e);
    }
}
function $x(n) {
  const e = `${ap}${n}`;
  let t = null;
  return { get: i, set: r, merge: s };
  function i(a, h) {
    const u = o();
    return typeof u[a] > "u" ? h : u[a];
  }
  function r(a, h) {
    const u = o();
    return (u[a] = h), localStorage.setItem(e, JSON.stringify(t)), h;
  }
  function s(a) {
    const h = { ...o(), ...a };
    return localStorage.setItem(e, JSON.stringify(h)), h;
  }
  function o() {
    return t === null && (t = l()), t;
  }
  function l() {
    if (!lp) return {};
    try {
      const a = JSON.parse(localStorage.getItem(e) || "{}");
      return Ax(a) ? a : {};
    } catch {
      return {};
    }
  }
}
function Ex() {
  const n = "lsCheck";
  try {
    return localStorage.setItem(n, n), localStorage.removeItem(n), !0;
  } catch {
    return !1;
  }
}
function Bx(n) {
  const e = {},
    t = {};
  for (const [i, r] of n.entries()) {
    if (i[0] === "$") {
      e[i.slice(1)] = JSON.parse(r);
      continue;
    }
    if (i === "perspective") {
      t[i] = r;
      continue;
    }
  }
  return { query: n.get("query") || "", params: e, options: t };
}
function Rx(n) {
  return n[0] !== "v" && n !== "other" ? `v${n}` : n;
}
const Tx = typeof document > "u" ? Mp : window.ResizeObserver;
function hp(n, e) {
  try {
    const t = n ? bx.parse(n) : {};
    return typeof t == "object" && t && !Array.isArray(t) ? t : {};
  } catch (t) {
    return (
      (t.message = `${e("params.error.params-invalid-json")}:

${t.message.replace("JSON5:", "")}`),
      t
    );
  }
}
function ao(n) {
  const e = n.replace(/^v/, "").trim().toUpperCase();
  return (
    e.length > 0 &&
    (e === "X" || e === "1" || (/^\d{4}-\d{2}-\d{2}$/.test(e) && !isNaN(Date.parse(e))))
  );
}
const Fx = `{
  
}`;
function zx(n) {
  const { onChange: e } = n,
    { t } = jn(Ln),
    { raw: i, error: r, parsed: s, valid: o } = Ou(n.value, t),
    [l, a] = H.useState(o),
    [h, u] = H.useState(!1);
  H.useEffect(() => {
    h || (e({ parsed: s, raw: i, valid: l, error: r }), u(!0));
  }, [r, h, l, e, s, i]);
  const c = H.useCallback(
      (d) => {
        const p = Ou(d, t);
        a(p.valid), e(p);
      },
      [e, t]
    ),
    f = H.useMemo(() => $p(c, 333), [c]);
  return C.jsx(sp, { value: n.value || Fx, onChange: f });
}
function Ou(n, e) {
  const t = hp(n, e),
    i = t instanceof Error ? {} : t,
    r = t instanceof Error ? t.message : void 0;
  return { parsed: i, raw: n, valid: !r, error: r };
}
const Zx = ce(te)`
  /* This limits the width of the popover content */
  max-width: 240px;
`,
  Wx = ce.a`
  cursor: pointer;
  margin-right: auto;
`;
function jx() {
  const [n, e] = H.useState(!1),
    t = H.useRef(null),
    i = H.useRef(null),
    r = H.useCallback(() => e((o) => !o), []),
    { t: s } = jn(Ln);
  return (
    Ep(
      () => e(!1),
      () => [t.current, i.current]
    ),
    C.jsx(Bp, {
      content: C.jsx(Zx, {
        children: C.jsxs(At, {
          space: 4,
          children: [
            C.jsxs(ku, {
              space: 2,
              children: [
                C.jsx(It, { weight: "medium", children: s("settings.perspectives.title") }),
                C.jsx(Rp, { tone: "primary", children: s("label.new") }),
              ],
            }),
            C.jsx(ke, {
              children: C.jsx(It, { muted: !0, children: s("settings.perspectives.description") }),
            }),
            C.jsx(ke, {
              children: C.jsx(It, {
                children: C.jsxs(Wx, {
                  href: "https://sanity.io/docs/perspectives",
                  target: "_blank",
                  children: [s("settings.perspectives.action.docs-link"), " →"],
                }),
              }),
            }),
          ],
        }),
      }),
      placement: "bottom-start",
      portal: !0,
      padding: 3,
      ref: i,
      open: n,
      children: C.jsx(Oi, {
        icon: Tp,
        mode: "bleed",
        padding: 2,
        tone: "primary",
        fontSize: 1,
        ref: t,
        onClick: r,
        selected: n,
      }),
    })
  );
}
const gl = ce(Sl)`
  color: ${({ theme: n }) => n.sanity.color.muted.critical.enabled.fg};
`;
function Lx({ error: n }) {
  const { t: e } = jn(Ln);
  if (!("details" in n)) return null;
  const t = { ...n.details, ...qx(n.details) };
  return t.line
    ? C.jsxs("div", {
        children: [
          C.jsx(gl, {
            size: 1,
            children: `${t.line}
${Ix(t.column, t.columnEnd)}`,
          }),
          C.jsx(te, {
            marginTop: 4,
            children: C.jsx(gl, {
              size: 1,
              children: `${e("query.error.line")}:   ${t.lineNumber}
${e("query.error.column")}: ${t.column}`,
            }),
          }),
        ],
      })
    : null;
}
function qx(n) {
  if (!n || typeof n.query != "string" || typeof n.start != "number") return {};
  const { query: e, start: t, end: i } = n,
    r =
      e.slice(0, t).lastIndexOf(`
`) + 1,
    s = (e.slice(0, r).match(/\n/g) || []).length,
    o = e.slice(
      r,
      e.indexOf(
        `
`,
        r
      )
    ),
    l = t - r,
    a = typeof i == "number" ? i - r : void 0;
  return { line: o, lineNumber: s, column: l, columnEnd: a };
}
function Ix(n, e) {
  const t = "-".repeat(n),
    i = "^".repeat(e ? e - n : 1);
  return `${t}${i}`;
}
function _x(n) {
  return C.jsxs(At, {
    space: 5,
    marginTop: 2,
    children: [C.jsx(gl, { size: 1, children: n.error.message }), C.jsx(Lx, { error: n.error })],
  });
}
const Vx = ce.div(({ theme: n }) => {
    const { color: e, fonts: t, space: i } = n.sanity;
    return xu`
    & .json-inspector,
    & .json-inspector .json-inspector__selection {
      font-family: ${t.code.family};
      font-size: ${t.code.sizes[2].fontSize}px;
      line-height: ${t.code.sizes[2].lineHeight}px;
      color: var(--card-code-fg-color);
    }

    & .json-inspector .json-inspector__leaf {
      padding-left: ${ot(i[4])};
    }

    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {
      padding-top: ${ot(i[0])};
      padding-left: 0;
    }

    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {
      display: none;
    }

    & .json-inspector .json-inspector__line {
      display: block;
      position: relative;
      cursor: default;
    }

    & .json-inspector .json-inspector__line::after {
      content: '';
      position: absolute;
      top: 0;
      left: -200px;
      right: -50px;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }

    & .json-inspector .json-inspector__line:hover::after {
      background: var(--card-code-bg-color);
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {
      cursor: pointer;
    }

    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {
      content: '▸ ';
      margin-left: calc(0px - ${ot(i[4])});
      font-size: ${t.code.sizes[2].fontSize}px;
      line-height: ${t.code.sizes[2].lineHeight}px;
    }

    &
      .json-inspector
      .json-inspector__leaf_expanded.json-inspector__leaf_composite
      > .json-inspector__line::before {
      content: '▾ ';
      font-size: ${t.code.sizes[2].fontSize}px;
      line-height: ${t.code.sizes[2].lineHeight}px;
    }

    & .json-inspector .json-inspector__radio,
    & .json-inspector .json-inspector__flatpath {
      display: none;
    }

    & .json-inspector .json-inspector__value {
      margin-left: ${ot(i[4] / 2)};
    }

    &
      .json-inspector
      > .json-inspector__leaf_root
      > .json-inspector__line
      > .json-inspector__key
      + .json-inspector__value {
      margin: 0;
    }

    & .json-inspector .json-inspector__key {
      color: ${e.syntax.property};
    }

    & .json-inspector .json-inspector__value_helper,
    & .json-inspector .json-inspector__value_null {
      color: ${e.syntax.constant};
    }

    & .json-inspector .json-inspector__not-found {
      padding-top: ${ot(i[2])};
    }

    & .json-inspector .json-inspector__value_string {
      color: ${e.syntax.string};
      word-break: break-word;
    }

    & .json-inspector .json-inspector__value_boolean {
      color: ${e.syntax.boolean};
    }

    & .json-inspector .json-inspector__value_number {
      color: ${e.syntax.number};
    }

    & .json-inspector .json-inspector__show-original {
      display: inline-block;
      padding: 0 6px;
      cursor: pointer;
    }

    & .json-inspector .json-inspector__show-original:hover {
      color: inherit;
    }

    & .json-inspector .json-inspector__show-original::before {
      content: '↔';
    }

    & .json-inspector .json-inspector__show-original:hover::after {
      content: ' expand';
    }
  `;
  }),
  ml = new mp({ maxSize: 5e4 });
function gu(n) {
  const { data: e } = n;
  return up(e) || Array.isArray(e)
    ? C.jsx(Vx, { children: C.jsx(Fp, { data: e, search: !1, isExpanded: Xx, onClick: Yx }) })
    : C.jsx(Sl, { language: "json", children: JSON.stringify(e) });
}
function Xx(n, e) {
  const t = ml.get(n);
  if (typeof t == "boolean") return t;
  const i = n.split(".", 4);
  return i.length === 4 ? !1 : Array.isArray(e) ? !0 : up(e) && !i.some((r) => Gx(r));
}
function Yx(n) {
  const { path: e } = n,
    t = ml.get(e);
  t !== void 0 && ml.set(e, !t);
}
function up(n) {
  return n !== null && typeof n == "object" && !Array.isArray(n);
}
const Nx = /^\d+$/;
function Gx(n, e = 10) {
  return Nx.test(n) && parseInt(n, 10) > e;
}
function Ux(n) {
  return n.preventDefault();
}
function Hx({ blobUrl: n }) {
  const { t: e } = jn(Ln),
    t = !n,
    i = C.jsx(Oi, {
      as: "a",
      disabled: t,
      download: t ? void 0 : "query-result.csv",
      href: n,
      icon: Du,
      mode: "ghost",
      onClick: t ? Ux : void 0,
      text: "CSV",
      tone: "default",
    });
  return t
    ? C.jsx(sn, {
        content: e("result.save-result-as-csv.not-csv-encodable"),
        placement: "top",
        children: i,
      })
    : i;
}
function Kx({ blobUrl: n }) {
  return C.jsx(Oi, {
    as: "a",
    download: "query-result.json",
    href: n,
    icon: Du,
    mode: "ghost",
    text: "JSON",
    tone: "default",
  });
}
const cp = ce($t)`
  .sidebarPanes .Pane {
    overflow-y: auto;
    overflow-x: hidden;
  }

  & .Resizer {
    background: var(--card-border-color);
    opacity: 1;
    z-index: 1;
    box-sizing: border-box;
    background-clip: padding-box;
    border: solid transparent;
  }

  & .Resizer:hover {
    border-color: var(--card-shadow-ambient-color);
  }

  & .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-width: 5px 0;
    cursor: row-resize;
    width: 100%;
    z-index: 4;
  }

  & .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-width: 0 5px;
    cursor: col-resize;
    z-index: 2; /* To prevent the resizer from being hidden behind CodeMirror scroll area */
  }

  .Resizer.disabled {
    cursor: not-allowed;
  }

  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;
cp.displayName = "Root";
const Jx = ce(ke)`
  border-bottom: 1px solid var(--card-border-color);
`,
  Qt = ce(Dp)`
  flex: 1;
`,
  ek = ce(te)`
  position: relative;
`,
  tk = ce.a`
  cursor: pointer;
  margin-right: auto;
`,
  fp = ce(te)`
  position: absolute;
  top: 1rem;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 10;
  right: 0;

  ${Qt} {
    user-select: none;
  }
`,
  mu = ce(fp)`
  // This is so its aligned with the gutters of CodeMirror
  left: 33px;
`,
  Su = ce(ke)`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
`,
  ik = ce($t)`
  height: 100%;
`,
  nk = ce(te)`
  position: relative;
`,
  rk = ce(ke)`
  height: 100%;
  width: 100%;
  position: absolute;
  max-width: 100%;

  ${({ $isInvalid: n }) =>
    n &&
    xu`
      &:after {
        background-color: var(--card-bg-color);
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    `}
`,
  sk = ce(te)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 20;
`,
  ok = ce($t)`
  border-top: 1px solid var(--card-border-color);
`,
  lk = ce(ke)`
  position: relative;
`;
ce(te)`
  width: 100%;
  height: 100%;
`;
const ak = ce($t)`
  height: 100%;
  min-height: ${({ theme: n }) => ot(n.sanity.space[3] * 2 + n.sanity.fonts.text.sizes[2].lineHeight - n.sanity.fonts.text.sizes[2].ascenderHeight - n.sanity.fonts.text.sizes[2].descenderHeight)};
`,
  hk = ce(ke)`
  position: relative;
`,
  uk = ce(It)`
  transform: initial;
  &:before,
  &:after {
    content: none;
  }
  > span {
    display: flex !important;
    gap: ${({ theme: n }) => ot(n.sanity.space[3])};
    align-items: center;
  }
`,
  ck = ce(te)`
  border-top: 1px solid var(--card-border-color);
`;
function fk(n, e) {
  return !n || !e ? !1 : n === e || !!(n.compareDocumentPosition(e) & 16);
}
const dk =
    /\.(?:api|apicdn)\.sanity\.io\/(vX|v1|v\d{4}-\d\d-\d\d)\/.*?(?:query|listen)\/(.*?)\?(.*)/,
  pk = (n) => ha("ctrl+enter", n) || ha("mod+enter", n);
function Er() {
  return typeof window < "u" && window.innerWidth > 600;
}
function bu(n) {
  return {
    defaultSize: n / (Er() ? 2 : 1),
    size: n > 550 ? void 0 : n * 0.4,
    allowResize: n > 550,
    minSize: Math.min(170, Math.max(170, n / 2)),
    maxSize: n > 650 ? n * 0.7 : n * 0.6,
  };
}
class Ok extends H.PureComponent {
  constructor(t) {
    super(t);
    Ve(this, "_visionRoot");
    Ve(this, "_queryEditorContainer");
    Ve(this, "_paramsEditorContainer");
    Ve(this, "_operationUrlElement");
    Ve(this, "_customApiVersionElement");
    Ve(this, "_resizeListener");
    Ve(this, "_querySubscription");
    Ve(this, "_listenSubscription");
    Ve(this, "_client");
    Ve(this, "_localStorage");
    const { client: i, datasets: r, config: s } = t;
    this._localStorage = $x(i.config().projectId || "default");
    const o = s.defaultDataset || i.config().dataset || r[0],
      l = Rx(`${s.defaultApiVersion}`),
      a = du;
    let h = this._localStorage.get("dataset", o),
      u = this._localStorage.get("apiVersion", l),
      c = this._localStorage.get("query", ""),
      f = this._localStorage.get(
        "params",
        `{
  
}`
      );
    const d = On.includes(u) ? !1 : u;
    let p = this._localStorage.get("perspective", a);
    r.includes(h) || (h = r.includes(o) ? o : r[0]),
      On.includes(u) || (u = np),
      kn.includes(p) || (p = du),
      typeof c != "string" && (c = ""),
      typeof f != "string" &&
        (f = `{
  
}`),
      (this._visionRoot = H.createRef()),
      (this._operationUrlElement = H.createRef()),
      (this._queryEditorContainer = H.createRef()),
      (this._paramsEditorContainer = H.createRef()),
      (this._customApiVersionElement = H.createRef()),
      (this._client = t.client.withConfig({
        apiVersion: d || u,
        dataset: h,
        perspective: p,
        allowReconfigure: !0,
      }));
    const O =
        typeof window < "u" && typeof document < "u"
          ? document.body.getBoundingClientRect().height - 60
          : 0,
      g = f ? hp(f, this.props.t) : void 0;
    (this.state = {
      dataset: h,
      apiVersion: u,
      customApiVersion: d,
      perspective: p,
      isValidApiVersion: d ? ao(d) : !1,
      query: c,
      rawParams: f,
      params: g,
      hasValidParams: !(g instanceof Error),
      listenMutations: [],
      queryInProgress: !1,
      listenInProgress: !1,
      paneSizeOptions: bu(O),
    }),
      (this.handleChangeDataset = this.handleChangeDataset.bind(this)),
      (this.handleChangeApiVersion = this.handleChangeApiVersion.bind(this)),
      (this.handleCustomApiVersionChange = this.handleCustomApiVersionChange.bind(this)),
      (this.handleChangePerspective = this.handleChangePerspective.bind(this)),
      (this.handleListenExecution = this.handleListenExecution.bind(this)),
      (this.handleListenerEvent = this.handleListenerEvent.bind(this)),
      (this.handleQueryExecution = this.handleQueryExecution.bind(this)),
      (this.handleQueryChange = this.handleQueryChange.bind(this)),
      (this.handleParamsChange = this.handleParamsChange.bind(this)),
      (this.handleCopyUrl = this.handleCopyUrl.bind(this)),
      (this.handlePaste = this.handlePaste.bind(this)),
      (this.handleKeyDown = this.handleKeyDown.bind(this)),
      (this.handleResize = this.handleResize.bind(this));
  }
  componentDidMount() {
    window.document.addEventListener("paste", this.handlePaste),
      window.document.addEventListener("keydown", this.handleKeyDown),
      this.handleResizeListen();
  }
  componentWillUnmount() {
    this.cancelQuery(),
      this.cancelListener(),
      this.cancelEventListener(),
      this.cancelResizeListener();
  }
  handleResizeListen() {
    this._visionRoot.current &&
      ((this._resizeListener = new Tx(this.handleResize)),
      this._resizeListener.observe(this._visionRoot.current));
  }
  handleResize(t) {
    const i = t == null ? void 0 : t[0];
    this.setState((r) => ({ ...r, paneSizeOptions: bu(i.contentRect.height) }));
  }
  cancelResizeListener() {
    this._resizeListener && this._resizeListener.disconnect();
  }
  handlePaste(t) {
    if (!t.clipboardData) return;
    const i = t.clipboardData.getData("text/plain").match(dk);
    if (!i) return;
    const [, r, s, o] = i;
    let l;
    try {
      const c = new URLSearchParams(o);
      l = Bx(c);
    } catch (c) {
      console.warn("Error while trying to parse API URL: ", c.message);
      return;
    }
    let a, h;
    ao(r) && (On.includes(r) ? ((a = r), (h = !1)) : (h = r));
    const u = kn.includes(l.options.perspective) ? l.options.perspective : void 0;
    t.preventDefault(),
      this.setState(
        (c) => ({
          dataset: this.props.datasets.includes(s) ? s : c.dataset,
          query: l.query,
          params: l.params,
          rawParams: JSON.stringify(l.params, null, 2),
          apiVersion: typeof a > "u" ? c.apiVersion : a,
          customApiVersion: typeof h > "u" ? c.customApiVersion : h,
          perspective: typeof u > "u" ? c.perspective : u,
        }),
        () => {
          this._localStorage.merge({
            query: this.state.query,
            params: this.state.rawParams,
            dataset: this.state.dataset,
            apiVersion: h || a,
            perspective: this.state.perspective,
          }),
            this._client.config({
              dataset: this.state.dataset,
              apiVersion: h || a,
              perspective: this.state.perspective,
            }),
            this.handleQueryExecution(),
            this.props.toast.push({
              closable: !0,
              id: "vision-paste",
              status: "info",
              title: "Parsed URL to query",
            });
        }
      );
  }
  cancelQuery() {
    this._querySubscription &&
      (this._querySubscription.unsubscribe(), (this._querySubscription = void 0));
  }
  cancelListener() {
    this._listenSubscription &&
      (this._listenSubscription.unsubscribe(), (this._listenSubscription = void 0));
  }
  cancelEventListener() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleChangeDataset(t) {
    const i = t.target.value;
    this._localStorage.set("dataset", i),
      this.setState({ dataset: i }),
      this._client.config({ dataset: i }),
      this.handleQueryExecution();
  }
  handleChangeApiVersion(t) {
    const i = t.target.value;
    if ((i == null ? void 0 : i.toLowerCase()) === "other") {
      this.setState({ customApiVersion: "v" }, () => {
        var r;
        (r = this._customApiVersionElement.current) == null || r.focus();
      });
      return;
    }
    this.setState({ apiVersion: i, customApiVersion: !1 }, () => {
      this._localStorage.set("apiVersion", this.state.apiVersion),
        this._client.config({ apiVersion: this.state.apiVersion }),
        this.handleQueryExecution();
    });
  }
  handleCustomApiVersionChange(t) {
    const i = t.target.value || "",
      r = ao(i);
    this.setState(
      (s) => ({
        apiVersion: r ? i : s.apiVersion,
        customApiVersion: i || "v",
        isValidApiVersion: r,
      }),
      () => {
        !this.state.isValidApiVersion ||
          typeof this.state.customApiVersion != "string" ||
          (this._localStorage.set("apiVersion", this.state.customApiVersion),
          this._client.config({ apiVersion: this.state.customApiVersion }));
      }
    );
  }
  handleChangePerspective(t) {
    const i = t.target.value;
    vx(i) &&
      this.setState({ perspective: i }, () => {
        this._localStorage.set("perspective", this.state.perspective),
          this._client.config({ perspective: this.state.perspective }),
          this.handleQueryExecution();
      });
  }
  handleListenerEvent(t) {
    if (t.type !== "mutation") {
      this.props.toast.push({
        closable: !0,
        id: "vision-listen",
        status: "success",
        title: "Listening for mutations…",
      });
      return;
    }
    this.setState(({ listenMutations: i }) => ({
      listenMutations: i.length === 50 ? [t, ...i.slice(0, 49)] : [t, ...i],
    }));
  }
  handleKeyDown(t) {
    const { hasValidParams: i } = this.state,
      r = this._visionRoot.current && fk(this._visionRoot.current, t.target);
    pk(t) && r && i && (this.handleQueryExecution(), t.preventDefault(), t.stopPropagation());
  }
  ensureSelectedApiVersion() {
    const { apiVersion: t, customApiVersion: i } = this.state,
      r = i || t;
    this._client.config().apiVersion !== r && this._client.config({ apiVersion: r });
  }
  handleListenExecution() {
    const { query: t, params: i, rawParams: r, listenInProgress: s } = this.state;
    if (s) {
      this.cancelListener(), this.setState({ listenInProgress: !1 });
      return;
    }
    this.ensureSelectedApiVersion();
    const o = i instanceof Error ? i : void 0,
      l = i instanceof Error ? {} : i || {},
      a = this._client.getDataUrl("listen", pu(t, l, {})),
      h = !o && t.trim().length > 0;
    this._localStorage.set("query", t),
      this._localStorage.set("params", r),
      this.cancelQuery(),
      this.setState({
        url: a,
        listenMutations: [],
        queryInProgress: !1,
        queryResult: void 0,
        listenInProgress: h,
        error: o,
        queryTime: void 0,
        e2eTime: void 0,
      }),
      h &&
        (this._listenSubscription = this._client
          .listen(t, i, { events: ["mutation", "welcome"] })
          .subscribe({
            next: this.handleListenerEvent,
            error: (u) => this.setState({ error: u, query: t, listenInProgress: !1 }),
          }));
  }
  handleQueryExecution() {
    const { query: t, params: i, rawParams: r, queryInProgress: s } = this.state;
    if (s)
      return this.cancelQuery(), this.cancelListener(), this.setState({ queryInProgress: !1 }), !0;
    const o = i instanceof Error && i;
    if (
      (this._localStorage.set("query", t),
      this._localStorage.set("params", r),
      this.cancelListener(),
      this.setState({
        queryInProgress: !o && !!t,
        listenInProgress: !1,
        listenMutations: [],
        error: o || void 0,
        queryResult: void 0,
        queryTime: void 0,
        e2eTime: void 0,
      }),
      !t || o)
    )
      return !0;
    this.ensureSelectedApiVersion();
    const l = {};
    this.state.perspective !== "raw" && (l.perspective = this.state.perspective);
    const a = this._client.getUrl(this._client.getDataUrl("query", pu(t, i, l)));
    this.setState({ url: a });
    const h = Date.now();
    return (
      (this._querySubscription = this._client.observable
        .fetch(t, i, { filterResponse: !1, tag: "vision" })
        .subscribe({
          next: (u) =>
            this.setState({
              queryTime: u.ms,
              e2eTime: Date.now() - h,
              queryResult: u.result,
              queryInProgress: !1,
              error: void 0,
            }),
          error: (u) => this.setState({ error: u, query: t, queryInProgress: !1 }),
        })),
      !0
    );
  }
  handleQueryChange(t) {
    this.setState({ query: t });
  }
  handleParamsChange({ raw: t, parsed: i, valid: r, error: s }) {
    this.setState({ rawParams: t, params: i, hasValidParams: r, paramsError: s }, () =>
      this._localStorage.set("params", t)
    );
  }
  handleCopyUrl() {
    const t = this._operationUrlElement.current;
    if (t)
      try {
        t.select(),
          document.execCommand("copy"),
          this.props.toast.push({
            closable: !0,
            title: "Copied to clipboard",
            status: "info",
            id: "vision-copy",
          });
      } catch {
        console.error("Unable to copy to clipboard :(");
      }
  }
  render() {
    const { datasets: t, t: i } = this.props,
      {
        apiVersion: r,
        customApiVersion: s,
        dataset: o,
        e2eTime: l,
        error: a,
        hasValidParams: h,
        isValidApiVersion: u,
        listenInProgress: c,
        listenMutations: f,
        paneSizeOptions: d,
        paramsError: p,
        perspective: O,
        query: g,
        queryInProgress: S,
        queryResult: b,
        queryTime: D,
        rawParams: v,
        url: k,
      } = this.state,
      y = !a && !S && typeof b < "u",
      Q = y ? Qx(b) : "",
      R = y ? Px(b) : "";
    return C.jsxs(cp, {
      direction: "column",
      height: "fill",
      ref: this._visionRoot,
      sizing: "border",
      overflow: "hidden",
      children: [
        C.jsx(Jx, {
          paddingX: 3,
          paddingY: 2,
          children: C.jsxs(Cp, {
            columns: [1, 4, 8, 12],
            children: [
              C.jsx(te, {
                padding: 1,
                column: 2,
                children: C.jsxs(At, {
                  children: [
                    C.jsx(ke, {
                      paddingTop: 2,
                      paddingBottom: 3,
                      children: C.jsx(Qt, { children: i("settings.dataset-label") }),
                    }),
                    C.jsx(Qs, {
                      value: o,
                      onChange: this.handleChangeDataset,
                      children: t.map(($) => C.jsx("option", { children: $ }, $)),
                    }),
                  ],
                }),
              }),
              C.jsx(te, {
                padding: 1,
                column: 2,
                children: C.jsxs(At, {
                  children: [
                    C.jsx(ke, {
                      paddingTop: 2,
                      paddingBottom: 3,
                      children: C.jsx(Qt, { children: i("settings.api-version-label") }),
                    }),
                    C.jsxs(Qs, {
                      value: s === !1 ? r : "other",
                      onChange: this.handleChangeApiVersion,
                      children: [
                        On.map(($) => C.jsx("option", { children: $ }, $)),
                        C.jsx(
                          "option",
                          { value: "other", children: i("settings.other-api-version-label") },
                          "other"
                        ),
                      ],
                    }),
                  ],
                }),
              }),
              s !== !1 &&
                C.jsx(te, {
                  padding: 1,
                  column: 2,
                  children: C.jsxs(At, {
                    children: [
                      C.jsx(ke, {
                        paddingTop: 2,
                        paddingBottom: 3,
                        children: C.jsx(Qt, {
                          textOverflow: "ellipsis",
                          children: i("settings.custom-api-version-label"),
                        }),
                      }),
                      C.jsx(oa, {
                        ref: this._customApiVersionElement,
                        value: s,
                        onChange: this.handleCustomApiVersionChange,
                        customValidity: u ? void 0 : i("settings.error.invalid-api-version"),
                        maxLength: 11,
                      }),
                    ],
                  }),
                }),
              C.jsx(te, {
                padding: 1,
                column: 2,
                children: C.jsxs(At, {
                  children: [
                    C.jsx(ke, {
                      paddingBottom: 1,
                      children: C.jsxs(ku, {
                        space: 1,
                        children: [
                          C.jsx(te, {
                            children: C.jsx(Qt, { children: i("settings.perspective-label") }),
                          }),
                          C.jsx(te, { children: C.jsx(jx, {}) }),
                        ],
                      }),
                    }),
                    C.jsx(Qs, {
                      value: O,
                      onChange: this.handleChangePerspective,
                      children: kn.map(($) => C.jsx("option", { children: $ }, $)),
                    }),
                  ],
                }),
              }),
              typeof k == "string"
                ? C.jsx(te, {
                    padding: 1,
                    flex: 1,
                    column: s === !1 ? 6 : 4,
                    children: C.jsxs(At, {
                      children: [
                        C.jsx(ke, {
                          paddingTop: 2,
                          paddingBottom: 3,
                          children: C.jsxs(Qt, {
                            children: [
                              i("query.url"),
                              " ",
                              C.jsxs(tk, {
                                onClick: this.handleCopyUrl,
                                children: ["[", i("action.copy-url-to-clipboard"), "]"],
                              }),
                            ],
                          }),
                        }),
                        C.jsxs($t, {
                          flex: 1,
                          gap: 1,
                          children: [
                            C.jsx(te, {
                              flex: 1,
                              children: C.jsx(oa, {
                                readOnly: !0,
                                type: "url",
                                ref: this._operationUrlElement,
                                value: k,
                              }),
                            }),
                            C.jsx(sn, {
                              content: i("action.copy-url-to-clipboard"),
                              children: C.jsx(Oi, {
                                "aria-label": i("action.copy-url-to-clipboard"),
                                type: "button",
                                mode: "ghost",
                                icon: vp,
                                onClick: this.handleCopyUrl,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : C.jsx(te, { flex: 1 }),
            ],
          }),
        }),
        C.jsx(ek, {
          flex: "auto",
          children: C.jsxs(Dn, {
            split: Er() ? "vertical" : "horizontal",
            minSize: 280,
            defaultSize: 400,
            maxSize: -400,
            children: [
              C.jsx(te, {
                height: "stretch",
                flex: 1,
                children: C.jsxs(Dn, {
                  className: "sidebarPanes",
                  split: "horizontal",
                  defaultSize: Er() ? d.defaultSize : d.minSize,
                  size: d.size,
                  allowResize: d.allowResize,
                  minSize: Er() ? d.minSize : 100,
                  maxSize: d.maxSize,
                  primary: "first",
                  children: [
                    C.jsx(Su, {
                      display: "flex",
                      ref: this._queryEditorContainer,
                      children: C.jsxs(te, {
                        flex: 1,
                        children: [
                          C.jsx(mu, {
                            children: C.jsx($t, {
                              children: C.jsx(Qt, { muted: !0, children: i("query.label") }),
                            }),
                          }),
                          C.jsx(sp, { value: g, onChange: this.handleQueryChange }),
                        ],
                      }),
                    }),
                    C.jsxs(Su, {
                      display: "flex",
                      ref: this._paramsEditorContainer,
                      children: [
                        C.jsxs(ke, {
                          flex: 1,
                          tone: h ? "default" : "critical",
                          children: [
                            C.jsx(mu, {
                              children: C.jsxs($t, {
                                children: [
                                  C.jsx(Qt, { muted: !0, children: i("params.label") }),
                                  p &&
                                    C.jsx(sn, {
                                      placement: "top-end",
                                      portal: !0,
                                      content: p,
                                      children: C.jsx(te, {
                                        padding: 1,
                                        marginX: 2,
                                        children: C.jsx(It, { children: C.jsx(wp, {}) }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            C.jsx(zx, { value: v, onChange: this.handleParamsChange }),
                          ],
                        }),
                        C.jsx(ck, {
                          children: C.jsx(ke, {
                            padding: 3,
                            paddingX: 3,
                            children: C.jsx(sn, {
                              content: C.jsx(ke, {
                                radius: 4,
                                children: C.jsx(It, {
                                  size: 1,
                                  muted: !0,
                                  children: i("params.error.params-invalid-json"),
                                }),
                              }),
                              placement: "top",
                              disabled: h,
                              portal: !0,
                              children: C.jsxs($t, {
                                justify: "space-evenly",
                                children: [
                                  C.jsx(te, {
                                    flex: 1,
                                    children: C.jsx(sn, {
                                      content: C.jsx(ke, {
                                        radius: 4,
                                        children: C.jsx(Qp, { keys: ["Ctrl", "Enter"] }),
                                      }),
                                      placement: "top",
                                      portal: !0,
                                      children: C.jsx(Oi, {
                                        width: "fill",
                                        onClick: this.handleQueryExecution,
                                        type: "button",
                                        icon: S ? la : aa,
                                        disabled: c || !h,
                                        tone: S ? "positive" : "primary",
                                        text: i(S ? "action.query-cancel" : "action.query-execute"),
                                      }),
                                    }),
                                  }),
                                  C.jsx(te, {
                                    flex: 1,
                                    marginLeft: 3,
                                    children: C.jsx(Oi, {
                                      width: "fill",
                                      onClick: this.handleListenExecution,
                                      type: "button",
                                      icon: c ? la : aa,
                                      text: i(c ? "action.listen-cancel" : "action.listen-execute"),
                                      mode: "ghost",
                                      disabled: !h,
                                      tone: c ? "positive" : "default",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              C.jsxs(ik, {
                direction: "column",
                children: [
                  C.jsx(nk, {
                    flex: 1,
                    children: C.jsx(rk, {
                      flex: 1,
                      overflow: "hidden",
                      tone: a ? "critical" : "default",
                      $isInvalid: !!a,
                      children: C.jsxs(sk, {
                        overflow: "auto",
                        children: [
                          C.jsx(fp, {
                            children: C.jsx(te, {
                              marginLeft: 3,
                              children: C.jsx(Qt, { muted: !0, children: i("result.label") }),
                            }),
                          }),
                          C.jsxs(te, {
                            padding: 3,
                            paddingTop: 5,
                            children: [
                              (S || (c && f.length === 0)) &&
                                C.jsx(te, { marginTop: 3, children: C.jsx(rp, {}) }),
                              a && C.jsx(_x, { error: a }),
                              y && C.jsx(gu, { data: b }),
                              c && f.length > 0 && C.jsx(gu, { data: f }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  C.jsxs(ok, {
                    justify: "space-between",
                    direction: ["column", "column", "row"],
                    children: [
                      C.jsx(lk, {
                        paddingX: 4,
                        paddingY: 3,
                        sizing: "border",
                        children: C.jsxs(ak, {
                          align: "center",
                          children: [
                            C.jsx(te, {
                              children: C.jsxs(It, {
                                muted: !0,
                                children: [
                                  i("result.execution-time-label"),
                                  ":",
                                  " ",
                                  typeof D == "number"
                                    ? `${D}ms`
                                    : i("result.timing-not-applicable"),
                                ],
                              }),
                            }),
                            C.jsx(te, {
                              marginLeft: 4,
                              children: C.jsxs(It, {
                                muted: !0,
                                children: [
                                  i("result.end-to-end-time-label"),
                                  ":",
                                  " ",
                                  typeof l == "number"
                                    ? `${l}ms`
                                    : i("result.timing-not-applicable"),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      y &&
                        C.jsx(hk, {
                          paddingX: 4,
                          paddingY: 3,
                          sizing: "border",
                          children: C.jsx(uk, {
                            muted: !0,
                            children: C.jsx(Pp, {
                              components: {
                                SaveResultButtons: () =>
                                  C.jsxs(C.Fragment, {
                                    children: [
                                      C.jsx(Kx, { blobUrl: Q }),
                                      C.jsx(Hx, { blobUrl: R }),
                                    ],
                                  }),
                              },
                              i18nKey: "result.save-result-as-format",
                              t: i,
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
}
function gk(n) {
  const e = n.config().projectId,
    [t, i] = H.useState();
  return (
    H.useEffect(() => {
      const r = n.observable.datasets
        .list()
        .subscribe({ next: (s) => i(s.map((o) => o.name)), error: (s) => i(s) });
      return () => r.unsubscribe();
    }, [n, e]),
    t || void 0
  );
}
function mk(n) {
  const e = bp(),
    t = gk(n.client),
    { t: i } = jn(Ln);
  if (!t)
    return C.jsx($t, {
      align: "center",
      height: "fill",
      justify: "center",
      children: C.jsx(rp, {}),
    });
  const r = t instanceof Error ? [n.client.config().dataset || "production"] : t;
  return C.jsx(Ok, { ...n, datasets: r, toast: e, t: i });
}
class Sk extends H.Component {
  constructor(t) {
    super(t);
    Ve(this, "handleRetryRender", () =>
      this.setState((t) => ({ error: null, numRetries: t.numRetries + 1 }))
    );
    Ve(this, "handleRetryWithCacheClear", () => {
      Mx(), this.handleRetryRender();
    });
    this.state = { error: null, numRetries: 0 };
  }
  static getDerivedStateFromError(t) {
    return { error: t instanceof Error ? t.message : `${t}` };
  }
  render() {
    if (!this.state.error) return this.props.children;
    const t = this.state.error,
      i = this.state.numRetries > 0;
    return C.jsx(ke, {
      height: "fill",
      overflow: "auto",
      paddingY: [4, 5, 6, 7],
      paddingX: 4,
      sizing: "border",
      tone: "critical",
      children: C.jsx(yp, {
        width: 3,
        children: C.jsxs(At, {
          space: 4,
          children: [
            C.jsx("div", {
              children: C.jsx(Oi, {
                onClick: i ? this.handleRetryWithCacheClear : this.handleRetryRender,
                text: i ? "Clear cache and retry" : "Retry",
                tone: "default",
              }),
            }),
            C.jsx(xp, { children: "An error occurred" }),
            C.jsx(ke, {
              border: !0,
              radius: 2,
              overflow: "auto",
              padding: 4,
              tone: "inherit",
              children: C.jsx(At, {
                space: 4,
                children:
                  t &&
                  C.jsx(Sl, { size: 1, children: C.jsxs("strong", { children: ["Error: ", t] }) }),
              }),
            }),
          ],
        }),
      }),
    });
  }
}
function Dk(n) {
  const e = Sp({ apiVersion: "1" }),
    t = { defaultApiVersion: np, ...n.tool.options };
  return C.jsx(Sk, { children: C.jsx(mk, { client: e, config: t }) });
}
export { Dk as default };
