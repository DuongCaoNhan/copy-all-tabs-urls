/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/@fluentui/web-components@3.0.0-beta.1/dist/esm/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{FASTAccordion as e,accordionTemplate as o}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/accordion.js/+esm";import{css as t,attr as r,html as a,nullableNumberConverter as n,FASTElement as i,AttributeConfiguration as l,ref as s,slotted as c,Observable as d,observable as h}from"/npm/@microsoft/fast-element@2.0.0-beta.26/+esm";import{display as u,forcedColorsStylesheetBehavior as p,staticallyCompose as g}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/utilities.js/+esm";import{FASTAccordionItem as b,accordionItemTemplate as f}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/accordion-item.js/+esm";import{DesignToken as m}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/design-token.js/+esm";import{FASTAnchor as v,anchorTemplate as $}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/anchor.js/+esm";import{StartEnd as k,startSlotTemplate as x,endSlotTemplate as y}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/patterns.js/+esm";import{FASTButton as B,buttonTemplate as w}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/button.js/+esm";import{FASTCheckbox as P,checkboxTemplate as z}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/checkbox.js/+esm";import{FASTDivider as S,dividerTemplate as F}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/divider.js/+esm";export{DividerOrientation,DividerRole}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/divider.js/+esm";import{FASTMenuItem as N,menuItemTemplate as C,MenuItemRole as A}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/menu-item.js/+esm";export{MenuItemRole}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/menu-item.js/+esm";import{FASTMenu as D,menuTemplate as L}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/menu.js/+esm";import{FASTProgress as O,progressTemplate as T}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/progress.js/+esm";import{FASTRadio as H,radioTemplate as R}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/radio.js/+esm";import{FASTRadioGroup as j,radioGroupTemplate as I}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/radio-group.js/+esm";export{RadioGroupOrientation}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/radio-group.js/+esm";import{FASTSlider as M,sliderTemplate as G}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/slider.js/+esm";export{SliderOrientation}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/slider.js/+esm";import{FASTProgressRing as X,progressRingTemplate as _}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/progress-ring.js/+esm";import{FASTSwitch as q,switchTemplate as V}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/switch.js/+esm";import{FASTTabs as Y,TabsOrientation as E,tabsTemplate as W}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/tabs.js/+esm";export{TabsOrientation}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/tabs.js/+esm";import{FASTTab as U}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/tab.js/+esm";import{FASTTabPanel as K,tabPanelTemplate as Z}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/tab-panel.js/+esm";import{FASTTextField as J,textFieldTemplate as Q}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/text-field.js/+esm";export{TextFieldType as TextInputType}from"/npm/@microsoft/fast-foundation@3.0.0-alpha.31/text-field.js/+esm";class ee extends e{}const oe=o(),te=t`
  ${u("flex")}

  :host {
    flex-direction: column;
    width: 100%;
    contain: content;
  }
`,re=Object.freeze({prefix:"fluent",shadowRootMode:"open",registry:customElements}),ae=ee.compose({name:`${re.prefix}-accordion`,template:oe,styles:te});var ne=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class ie extends b{constructor(){super(...arguments),this.block=!1}}ne([r],ie.prototype,"size",void 0),ne([r({mode:"boolean"})],ie.prototype,"block",void 0),ne([r({attribute:"expand-icon-position"})],ie.prototype,"expandIconPosition",void 0);const le={small:"small",medium:"medium",large:"large",extraLarge:"extra-large"},se={start:"start",end:"end"},{create:ce}=m,de=ce("borderRadiusNone"),he=ce("borderRadiusSmall"),ue=ce("borderRadiusMedium"),pe=ce("borderRadiusLarge"),ge=ce("borderRadiusXLarge"),be=ce("borderRadiusCircular"),fe=ce("fontSizeBase100"),me=ce("fontSizeBase200"),ve=ce("fontSizeBase300"),$e=ce("fontSizeBase400"),ke=ce("fontSizeBase500"),xe=ce("fontSizeBase600"),ye=ce("fontSizeHero700"),Be=ce("fontSizeHero800"),we=ce("fontSizeHero900"),Pe=ce("fontSizeHero1000"),ze=ce("lineHeightBase100"),Se=ce("lineHeightBase200"),Fe=ce("lineHeightBase300"),Ne=ce("lineHeightBase400"),Ce=ce("lineHeightBase500"),Ae=ce("lineHeightBase600"),De=ce("lineHeightHero700"),Le=ce("lineHeightHero800"),Oe=ce("lineHeightHero900"),Te=ce("lineHeightHero1000"),He=ce("fontFamilyBase"),Re=ce("fontFamilyMonospace"),je=ce("fontFamilyNumeric"),Ie=ce("fontWeightRegular"),Me=ce("fontWeightMedium"),Ge=ce("fontWeightSemibold"),Xe=ce("fontWeightBold"),_e=ce("strokeWidthThin"),qe=ce("strokeWidthThick"),Ve=ce("strokeWidthThicker"),Ye=ce("strokeWidthThickest"),Ee=ce("spacingHorizontalNone"),We=ce("spacingHorizontalXXS"),Ue=ce("spacingHorizontalXS"),Ke=ce("spacingHorizontalSNudge"),Ze=ce("spacingHorizontalS"),Je=ce("spacingHorizontalMNudge"),Qe=ce("spacingHorizontalM"),eo=ce("spacingHorizontalL"),oo=ce("spacingHorizontalXL"),to=ce("spacingHorizontalXXL"),ro=ce("spacingHorizontalXXXL"),ao=ce("spacingVerticalNone"),no=ce("spacingVerticalXXS"),io=ce("spacingVerticalXS"),lo=ce("spacingVerticalSNudge"),so=ce("spacingVerticalS"),co=ce("spacingVerticalMNudge"),ho=ce("spacingVerticalM"),uo=ce("spacingVerticalL"),po=ce("spacingVerticalXL"),go=ce("spacingVerticalXXL"),bo=ce("spacingVerticalXXXL"),fo=ce("durationUltraFast"),mo=ce("durationFaster"),vo=ce("durationFast"),$o=ce("durationNormal"),ko=ce("durationSlow"),xo=ce("durationSlower"),yo=ce("durationUltraSlow"),Bo=ce("curveAccelerateMax"),wo=ce("curveAccelerateMid"),Po=ce("curveAccelerateMin"),zo=ce("curveDecelerateMax"),So=ce("curveDecelerateMid"),Fo=ce("curveDecelerateMin"),No=ce("curveEasyEaseMax"),Co=ce("curveEasyEase"),Ao=ce("curveLinear"),Do=ce("colorNeutralForeground1"),Lo=ce("colorNeutralForeground1Hover"),Oo=ce("colorNeutralForeground1Pressed"),To=ce("colorNeutralForeground1Selected"),Ho=ce("colorNeutralForeground2"),Ro=ce("colorNeutralForeground2Hover"),jo=ce("colorNeutralForeground2Pressed"),Io=ce("colorNeutralForeground2Selected"),Mo=ce("colorNeutralForeground2BrandHover"),Go=ce("colorNeutralForeground2BrandPressed"),Xo=ce("colorNeutralForeground2BrandSelected"),_o=ce("colorNeutralForeground3"),qo=ce("colorNeutralForeground3Hover"),Vo=ce("colorNeutralForeground3Pressed"),Yo=ce("colorNeutralForeground3Selected"),Eo=ce("colorNeutralForeground3BrandHover"),Wo=ce("colorNeutralForeground3BrandPressed"),Uo=ce("colorNeutralForeground3BrandSelected"),Ko=ce("colorNeutralForeground4"),Zo=ce("colorNeutralForegroundDisabled"),Jo=ce("colorNeutralForegroundInvertedDisabled"),Qo=ce("colorBrandForegroundLink"),et=ce("colorBrandForegroundLinkHover"),ot=ce("colorBrandForegroundLinkPressed"),tt=ce("colorBrandForegroundLinkSelected"),rt=ce("colorNeutralForeground2Link"),at=ce("colorNeutralForeground2LinkHover"),nt=ce("colorNeutralForeground2LinkPressed"),it=ce("colorNeutralForeground2LinkSelected"),lt=ce("colorCompoundBrandForeground1"),st=ce("colorCompoundBrandForeground1Hover"),ct=ce("colorCompoundBrandForeground1Pressed"),dt=ce("colorBrandForeground1"),ht=ce("colorBrandForeground2"),ut=ce("colorNeutralForeground1Static"),pt=ce("colorNeutralForegroundStaticInverted"),gt=ce("colorNeutralForegroundInverted"),bt=ce("colorNeutralForegroundInvertedHover"),ft=ce("colorNeutralForegroundInvertedPressed"),mt=ce("colorNeutralForegroundInvertedSelected"),vt=ce("colorNeutralForegroundInverted2"),$t=ce("colorNeutralForegroundOnBrand"),kt=ce("colorNeutralForegroundInvertedLink"),xt=ce("colorNeutralForegroundInvertedLinkHover"),yt=ce("colorNeutralForegroundInvertedLinkPressed"),Bt=ce("colorNeutralForegroundInvertedLinkSelected"),wt=ce("colorBrandForegroundInverted"),Pt=ce("colorBrandForegroundInvertedHover"),zt=ce("colorBrandForegroundInvertedPressed"),St=ce("colorBrandForegroundOnLight"),Ft=ce("colorBrandForegroundOnLightHover"),Nt=ce("colorBrandForegroundOnLightPressed"),Ct=ce("colorBrandForegroundOnLightSelected"),At=ce("colorNeutralBackground1"),Dt=ce("colorNeutralBackground1Hover"),Lt=ce("colorNeutralBackground1Pressed"),Ot=ce("colorNeutralBackground1Selected"),Tt=ce("colorNeutralBackground2"),Ht=ce("colorNeutralBackground2Hover"),Rt=ce("colorNeutralBackground2Pressed"),jt=ce("colorNeutralBackground2Selected"),It=ce("colorNeutralBackground3"),Mt=ce("colorNeutralBackground3Hover"),Gt=ce("colorNeutralBackground3Pressed"),Xt=ce("colorNeutralBackground3Selected"),_t=ce("colorNeutralBackground4"),qt=ce("colorNeutralBackground4Hover"),Vt=ce("colorNeutralBackground4Pressed"),Yt=ce("colorNeutralBackground4Selected"),Et=ce("colorNeutralBackground5"),Wt=ce("colorNeutralBackground5Hover"),Ut=ce("colorNeutralBackground5Pressed"),Kt=ce("colorNeutralBackground5Selected"),Zt=ce("colorNeutralBackground6"),Jt=ce("colorNeutralBackgroundInverted"),Qt=ce("colorNeutralBackgroundStatic"),er=ce("colorSubtleBackground"),or=ce("colorSubtleBackgroundHover"),tr=ce("colorSubtleBackgroundPressed"),rr=ce("colorSubtleBackgroundSelected"),ar=ce("colorSubtleBackgroundLightAlphaHover"),nr=ce("colorSubtleBackgroundLightAlphaPressed"),ir=ce("colorSubtleBackgroundLightAlphaSelected"),lr=ce("colorSubtleBackgroundInverted"),sr=ce("colorSubtleBackgroundInvertedHover"),cr=ce("colorSubtleBackgroundInvertedPressed"),dr=ce("colorSubtleBackgroundInvertedSelected"),hr=ce("colorTransparentBackground"),ur=ce("colorTransparentBackgroundHover"),pr=ce("colorTransparentBackgroundPressed"),gr=ce("colorTransparentBackgroundSelected"),br=ce("colorNeutralBackgroundDisabled"),fr=ce("colorNeutralBackgroundInvertedDisabled"),mr=ce("colorNeutralStencil1"),vr=ce("colorNeutralStencil2"),$r=ce("colorNeutralStencil1Alpha"),kr=ce("colorNeutralStencil2Alpha"),xr=ce("colorBackgroundOverlay"),yr=ce("colorScrollbarOverlay"),Br=ce("colorBrandBackground"),wr=ce("colorBrandBackgroundHover"),Pr=ce("colorBrandBackgroundPressed"),zr=ce("colorBrandBackgroundSelected"),Sr=ce("colorCompoundBrandBackground"),Fr=ce("colorCompoundBrandBackgroundHover"),Nr=ce("colorCompoundBrandBackgroundPressed"),Cr=ce("colorBrandBackgroundStatic"),Ar=ce("colorBrandBackground2"),Dr=ce("colorBrandBackgroundInverted"),Lr=ce("colorBrandBackgroundInvertedHover"),Or=ce("colorBrandBackgroundInvertedPressed"),Tr=ce("colorBrandBackgroundInvertedSelected"),Hr=ce("colorNeutralStrokeAccessible"),Rr=ce("colorNeutralStrokeAccessibleHover"),jr=ce("colorNeutralStrokeAccessiblePressed"),Ir=ce("colorNeutralStrokeAccessibleSelected"),Mr=ce("colorNeutralStroke1"),Gr=ce("colorNeutralStroke1Hover"),Xr=ce("colorNeutralStroke1Pressed"),_r=ce("colorNeutralStroke1Selected"),qr=ce("colorNeutralStroke2"),Vr=ce("colorNeutralStroke3"),Yr=ce("colorNeutralStrokeOnBrand"),Er=ce("colorNeutralStrokeOnBrand2"),Wr=ce("colorNeutralStrokeOnBrand2Hover"),Ur=ce("colorNeutralStrokeOnBrand2Pressed"),Kr=ce("colorNeutralStrokeOnBrand2Selected"),Zr=ce("colorBrandStroke1"),Jr=ce("colorBrandStroke2"),Qr=ce("colorCompoundBrandStroke"),ea=ce("colorCompoundBrandStrokeHover"),oa=ce("colorCompoundBrandStrokePressed"),ta=ce("colorNeutralStrokeDisabled"),ra=ce("colorNeutralStrokeInvertedDisabled"),aa=ce("colorTransparentStroke"),na=ce("colorTransparentStrokeInteractive"),ia=ce("colorTransparentStrokeDisabled"),la=ce("colorStrokeFocus1"),sa=ce("colorStrokeFocus2"),ca=ce("colorNeutralShadowAmbient"),da=ce("colorNeutralShadowKey"),ha=ce("colorNeutralShadowAmbientLighter"),ua=ce("colorNeutralShadowKeyLighter"),pa=ce("colorNeutralShadowAmbientDarker"),ga=ce("colorNeutralShadowKeyDarker"),ba=ce("colorBrandShadowAmbient"),fa=ce("colorBrandShadowKey"),ma=ce("colorPaletteRedBackground1"),va=ce("colorPaletteRedBackground2"),$a=ce("colorPaletteRedBackground3"),ka=ce("colorPaletteRedForeground1"),xa=ce("colorPaletteRedForeground2"),ya=ce("colorPaletteRedForeground3"),Ba=ce("colorPaletteRedBorderActive"),wa=ce("colorPaletteRedBorder1"),Pa=ce("colorPaletteRedBorder2"),za=ce("colorPaletteGreenBackground1"),Sa=ce("colorPaletteGreenBackground2"),Fa=ce("colorPaletteGreenBackground3"),Na=ce("colorPaletteGreenForeground1"),Ca=ce("colorPaletteGreenForeground2"),Aa=ce("colorPaletteGreenForeground3"),Da=ce("colorPaletteGreenBorderActive"),La=ce("colorPaletteGreenBorder1"),Oa=ce("colorPaletteGreenBorder2"),Ta=ce("colorPaletteDarkOrangeBackground1"),Ha=ce("colorPaletteDarkOrangeBackground2"),Ra=ce("colorPaletteDarkOrangeBackground3"),ja=ce("colorPaletteDarkOrangeForeground1"),Ia=ce("colorPaletteDarkOrangeForeground2"),Ma=ce("colorPaletteDarkOrangeForeground3"),Ga=ce("colorPaletteDarkOrangeBorderActive"),Xa=ce("colorPaletteDarkOrangeBorder1"),_a=ce("colorPaletteDarkOrangeBorder2"),qa=ce("colorPaletteYellowBackground1"),Va=ce("colorPaletteYellowBackground2"),Ya=ce("colorPaletteYellowBackground3"),Ea=ce("colorPaletteYellowForeground1"),Wa=ce("colorPaletteYellowForeground2"),Ua=ce("colorPaletteYellowForeground3"),Ka=ce("colorPaletteYellowBorderActive"),Za=ce("colorPaletteYellowBorder1"),Ja=ce("colorPaletteYellowBorder2"),Qa=ce("colorPaletteBerryBackground1"),en=ce("colorPaletteBerryBackground2"),on=ce("colorPaletteBerryBackground3"),tn=ce("colorPaletteBerryForeground1"),rn=ce("colorPaletteBerryForeground2"),an=ce("colorPaletteBerryForeground3"),nn=ce("colorPaletteBerryBorderActive"),ln=ce("colorPaletteBerryBorder1"),sn=ce("colorPaletteBerryBorder2"),cn=ce("colorPaletteLightGreenBackground1"),dn=ce("colorPaletteLightGreenBackground2"),hn=ce("colorPaletteLightGreenBackground3"),un=ce("colorPaletteLightGreenForeground1"),pn=ce("colorPaletteLightGreenForeground2"),gn=ce("colorPaletteLightGreenForeground3"),bn=ce("colorPaletteLightGreenBorderActive"),fn=ce("colorPaletteLightGreenBorder1"),mn=ce("colorPaletteLightGreenBorder2"),vn=ce("colorPaletteMarigoldBackground1"),$n=ce("colorPaletteMarigoldBackground2"),kn=ce("colorPaletteMarigoldBackground3"),xn=ce("colorPaletteMarigoldForeground1"),yn=ce("colorPaletteMarigoldForeground2"),Bn=ce("colorPaletteMarigoldForeground3"),wn=ce("colorPaletteMarigoldBorderActive"),Pn=ce("colorPaletteMarigoldBorder1"),zn=ce("colorPaletteMarigoldBorder2"),Sn=ce("colorPaletteDarkRedBackground2"),Fn=ce("colorPaletteDarkRedForeground2"),Nn=ce("colorPaletteDarkRedBorderActive"),Cn=ce("colorPaletteCranberryBackground2"),An=ce("colorPaletteCranberryForeground2"),Dn=ce("colorPaletteCranberryBorderActive"),Ln=ce("colorPalettePumpkinBackground2"),On=ce("colorPalettePumpkinForeground2"),Tn=ce("colorPalettePumpkinBorderActive"),Hn=ce("colorPalettePeachBackground2"),Rn=ce("colorPalettePeachForeground2"),jn=ce("colorPalettePeachBorderActive"),In=ce("colorPaletteGoldBackground2"),Mn=ce("colorPaletteGoldForeground2"),Gn=ce("colorPaletteGoldBorderActive"),Xn=ce("colorPaletteBrassBackground2"),_n=ce("colorPaletteBrassForeground2"),qn=ce("colorPaletteBrassBorderActive"),Vn=ce("colorPaletteBrownBackground2"),Yn=ce("colorPaletteBrownForeground2"),En=ce("colorPaletteBrownBorderActive"),Wn=ce("colorPaletteForestBackground2"),Un=ce("colorPaletteForestForeground2"),Kn=ce("colorPaletteForestBorderActive"),Zn=ce("colorPaletteSeafoamBackground2"),Jn=ce("colorPaletteSeafoamForeground2"),Qn=ce("colorPaletteSeafoamBorderActive"),ei=ce("colorPaletteDarkGreenBackground2"),oi=ce("colorPaletteDarkGreenForeground2"),ti=ce("colorPaletteDarkGreenBorderActive"),ri=ce("colorPaletteLightTealBackground2"),ai=ce("colorPaletteLightTealForeground2"),ni=ce("colorPaletteLightTealBorderActive"),ii=ce("colorPaletteTealBackground2"),li=ce("colorPaletteTealForeground2"),si=ce("colorPaletteTealBorderActive"),ci=ce("colorPaletteSteelBackground2"),di=ce("colorPaletteSteelForeground2"),hi=ce("colorPaletteSteelBorderActive"),ui=ce("colorPaletteBlueBackground2"),pi=ce("colorPaletteBlueForeground2"),gi=ce("colorPaletteBlueBorderActive"),bi=ce("colorPaletteRoyalBlueBackground2"),fi=ce("colorPaletteRoyalBlueForeground2"),mi=ce("colorPaletteRoyalBlueBorderActive"),vi=ce("colorPaletteCornflowerBackground2"),$i=ce("colorPaletteCornflowerForeground2"),ki=ce("colorPaletteCornflowerBorderActive"),xi=ce("colorPaletteNavyBackground2"),yi=ce("colorPaletteNavyForeground2"),Bi=ce("colorPaletteNavyBorderActive"),wi=ce("colorPaletteLavenderBackground2"),Pi=ce("colorPaletteLavenderForeground2"),zi=ce("colorPaletteLavenderBorderActive"),Si=ce("colorPalettePurpleBackground2"),Fi=ce("colorPalettePurpleForeground2"),Ni=ce("colorPalettePurpleBorderActive"),Ci=ce("colorPaletteGrapeBackground2"),Ai=ce("colorPaletteGrapeForeground2"),Di=ce("colorPaletteGrapeBorderActive"),Li=ce("colorPaletteLilacBackground2"),Oi=ce("colorPaletteLilacForeground2"),Ti=ce("colorPaletteLilacBorderActive"),Hi=ce("colorPalettePinkBackground2"),Ri=ce("colorPalettePinkForeground2"),ji=ce("colorPalettePinkBorderActive"),Ii=ce("colorPaletteMagentaBackground2"),Mi=ce("colorPaletteMagentaForeground2"),Gi=ce("colorPaletteMagentaBorderActive"),Xi=ce("colorPalettePlumBackground2"),_i=ce("colorPalettePlumForeground2"),qi=ce("colorPalettePlumBorderActive"),Vi=ce("colorPaletteBeigeBackground2"),Yi=ce("colorPaletteBeigeForeground2"),Ei=ce("colorPaletteBeigeBorderActive"),Wi=ce("colorPaletteMinkBackground2"),Ui=ce("colorPaletteMinkForeground2"),Ki=ce("colorPaletteMinkBorderActive"),Zi=ce("colorPalettePlatinumBackground2"),Ji=ce("colorPalettePlatinumForeground2"),Qi=ce("colorPalettePlatinumBorderActive"),el=ce("colorPaletteAnchorBackground2"),ol=ce("colorPaletteAnchorForeground2"),tl=ce("colorPaletteAnchorBorderActive"),rl=ce("colorPaletteRedForegroundInverted"),al=ce("colorPaletteGreenForegroundInverted"),nl=ce("colorPaletteYellowForegroundInverted"),il=ce("shadow2"),ll=ce("shadow4"),sl=ce("shadow8"),cl=ce("shadow16"),dl=ce("shadow28"),hl=ce("shadow64"),ul=ce("shadow2Brand"),pl=ce("shadow4Brand"),gl=ce("shadow8Brand"),bl=ce("shadow16Brand"),fl=ce("shadow28Brand"),ml=ce("shadow64Brand");var vl=Object.freeze({__proto__:null,borderRadiusNone:de,borderRadiusSmall:he,borderRadiusMedium:ue,borderRadiusLarge:pe,borderRadiusXLarge:ge,borderRadiusCircular:be,fontSizeBase100:fe,fontSizeBase200:me,fontSizeBase300:ve,fontSizeBase400:$e,fontSizeBase500:ke,fontSizeBase600:xe,fontSizeHero700:ye,fontSizeHero800:Be,fontSizeHero900:we,fontSizeHero1000:Pe,lineHeightBase100:ze,lineHeightBase200:Se,lineHeightBase300:Fe,lineHeightBase400:Ne,lineHeightBase500:Ce,lineHeightBase600:Ae,lineHeightHero700:De,lineHeightHero800:Le,lineHeightHero900:Oe,lineHeightHero1000:Te,fontFamilyBase:He,fontFamilyMonospace:Re,fontFamilyNumeric:je,fontWeightRegular:Ie,fontWeightMedium:Me,fontWeightSemibold:Ge,fontWeightBold:Xe,strokeWidthThin:_e,strokeWidthThick:qe,strokeWidthThicker:Ve,strokeWidthThickest:Ye,spacingHorizontalNone:Ee,spacingHorizontalXXS:We,spacingHorizontalXS:Ue,spacingHorizontalSNudge:Ke,spacingHorizontalS:Ze,spacingHorizontalMNudge:Je,spacingHorizontalM:Qe,spacingHorizontalL:eo,spacingHorizontalXL:oo,spacingHorizontalXXL:to,spacingHorizontalXXXL:ro,spacingVerticalNone:ao,spacingVerticalXXS:no,spacingVerticalXS:io,spacingVerticalSNudge:lo,spacingVerticalS:so,spacingVerticalMNudge:co,spacingVerticalM:ho,spacingVerticalL:uo,spacingVerticalXL:po,spacingVerticalXXL:go,spacingVerticalXXXL:bo,durationUltraFast:fo,durationFaster:mo,durationFast:vo,durationNormal:$o,durationSlow:ko,durationSlower:xo,durationUltraSlow:yo,curveAccelerateMax:Bo,curveAccelerateMid:wo,curveAccelerateMin:Po,curveDecelerateMax:zo,curveDecelerateMid:So,curveDecelerateMin:Fo,curveEasyEaseMax:No,curveEasyEase:Co,curveLinear:Ao,colorNeutralForeground1:Do,colorNeutralForeground1Hover:Lo,colorNeutralForeground1Pressed:Oo,colorNeutralForeground1Selected:To,colorNeutralForeground2:Ho,colorNeutralForeground2Hover:Ro,colorNeutralForeground2Pressed:jo,colorNeutralForeground2Selected:Io,colorNeutralForeground2BrandHover:Mo,colorNeutralForeground2BrandPressed:Go,colorNeutralForeground2BrandSelected:Xo,colorNeutralForeground3:_o,colorNeutralForeground3Hover:qo,colorNeutralForeground3Pressed:Vo,colorNeutralForeground3Selected:Yo,colorNeutralForeground3BrandHover:Eo,colorNeutralForeground3BrandPressed:Wo,colorNeutralForeground3BrandSelected:Uo,colorNeutralForeground4:Ko,colorNeutralForegroundDisabled:Zo,colorNeutralForegroundInvertedDisabled:Jo,colorBrandForegroundLink:Qo,colorBrandForegroundLinkHover:et,colorBrandForegroundLinkPressed:ot,colorBrandForegroundLinkSelected:tt,colorNeutralForeground2Link:rt,colorNeutralForeground2LinkHover:at,colorNeutralForeground2LinkPressed:nt,colorNeutralForeground2LinkSelected:it,colorCompoundBrandForeground1:lt,colorCompoundBrandForeground1Hover:st,colorCompoundBrandForeground1Pressed:ct,colorBrandForeground1:dt,colorBrandForeground2:ht,colorNeutralForeground1Static:ut,colorNeutralForegroundStaticInverted:pt,colorNeutralForegroundInverted:gt,colorNeutralForegroundInvertedHover:bt,colorNeutralForegroundInvertedPressed:ft,colorNeutralForegroundInvertedSelected:mt,colorNeutralForegroundInverted2:vt,colorNeutralForegroundOnBrand:$t,colorNeutralForegroundInvertedLink:kt,colorNeutralForegroundInvertedLinkHover:xt,colorNeutralForegroundInvertedLinkPressed:yt,colorNeutralForegroundInvertedLinkSelected:Bt,colorBrandForegroundInverted:wt,colorBrandForegroundInvertedHover:Pt,colorBrandForegroundInvertedPressed:zt,colorBrandForegroundOnLight:St,colorBrandForegroundOnLightHover:Ft,colorBrandForegroundOnLightPressed:Nt,colorBrandForegroundOnLightSelected:Ct,colorNeutralBackground1:At,colorNeutralBackground1Hover:Dt,colorNeutralBackground1Pressed:Lt,colorNeutralBackground1Selected:Ot,colorNeutralBackground2:Tt,colorNeutralBackground2Hover:Ht,colorNeutralBackground2Pressed:Rt,colorNeutralBackground2Selected:jt,colorNeutralBackground3:It,colorNeutralBackground3Hover:Mt,colorNeutralBackground3Pressed:Gt,colorNeutralBackground3Selected:Xt,colorNeutralBackground4:_t,colorNeutralBackground4Hover:qt,colorNeutralBackground4Pressed:Vt,colorNeutralBackground4Selected:Yt,colorNeutralBackground5:Et,colorNeutralBackground5Hover:Wt,colorNeutralBackground5Pressed:Ut,colorNeutralBackground5Selected:Kt,colorNeutralBackground6:Zt,colorNeutralBackgroundInverted:Jt,colorNeutralBackgroundStatic:Qt,colorSubtleBackground:er,colorSubtleBackgroundHover:or,colorSubtleBackgroundPressed:tr,colorSubtleBackgroundSelected:rr,colorSubtleBackgroundLightAlphaHover:ar,colorSubtleBackgroundLightAlphaPressed:nr,colorSubtleBackgroundLightAlphaSelected:ir,colorSubtleBackgroundInverted:lr,colorSubtleBackgroundInvertedHover:sr,colorSubtleBackgroundInvertedPressed:cr,colorSubtleBackgroundInvertedSelected:dr,colorTransparentBackground:hr,colorTransparentBackgroundHover:ur,colorTransparentBackgroundPressed:pr,colorTransparentBackgroundSelected:gr,colorNeutralBackgroundDisabled:br,colorNeutralBackgroundInvertedDisabled:fr,colorNeutralStencil1:mr,colorNeutralStencil2:vr,colorNeutralStencil1Alpha:$r,colorNeutralStencil2Alpha:kr,colorBackgroundOverlay:xr,colorScrollbarOverlay:yr,colorBrandBackground:Br,colorBrandBackgroundHover:wr,colorBrandBackgroundPressed:Pr,colorBrandBackgroundSelected:zr,colorCompoundBrandBackground:Sr,colorCompoundBrandBackgroundHover:Fr,colorCompoundBrandBackgroundPressed:Nr,colorBrandBackgroundStatic:Cr,colorBrandBackground2:Ar,colorBrandBackgroundInverted:Dr,colorBrandBackgroundInvertedHover:Lr,colorBrandBackgroundInvertedPressed:Or,colorBrandBackgroundInvertedSelected:Tr,colorNeutralStrokeAccessible:Hr,colorNeutralStrokeAccessibleHover:Rr,colorNeutralStrokeAccessiblePressed:jr,colorNeutralStrokeAccessibleSelected:Ir,colorNeutralStroke1:Mr,colorNeutralStroke1Hover:Gr,colorNeutralStroke1Pressed:Xr,colorNeutralStroke1Selected:_r,colorNeutralStroke2:qr,colorNeutralStroke3:Vr,colorNeutralStrokeOnBrand:Yr,colorNeutralStrokeOnBrand2:Er,colorNeutralStrokeOnBrand2Hover:Wr,colorNeutralStrokeOnBrand2Pressed:Ur,colorNeutralStrokeOnBrand2Selected:Kr,colorBrandStroke1:Zr,colorBrandStroke2:Jr,colorCompoundBrandStroke:Qr,colorCompoundBrandStrokeHover:ea,colorCompoundBrandStrokePressed:oa,colorNeutralStrokeDisabled:ta,colorNeutralStrokeInvertedDisabled:ra,colorTransparentStroke:aa,colorTransparentStrokeInteractive:na,colorTransparentStrokeDisabled:ia,colorStrokeFocus1:la,colorStrokeFocus2:sa,colorNeutralShadowAmbient:ca,colorNeutralShadowKey:da,colorNeutralShadowAmbientLighter:ha,colorNeutralShadowKeyLighter:ua,colorNeutralShadowAmbientDarker:pa,colorNeutralShadowKeyDarker:ga,colorBrandShadowAmbient:ba,colorBrandShadowKey:fa,colorPaletteRedBackground1:ma,colorPaletteRedBackground2:va,colorPaletteRedBackground3:$a,colorPaletteRedForeground1:ka,colorPaletteRedForeground2:xa,colorPaletteRedForeground3:ya,colorPaletteRedBorderActive:Ba,colorPaletteRedBorder1:wa,colorPaletteRedBorder2:Pa,colorPaletteGreenBackground1:za,colorPaletteGreenBackground2:Sa,colorPaletteGreenBackground3:Fa,colorPaletteGreenForeground1:Na,colorPaletteGreenForeground2:Ca,colorPaletteGreenForeground3:Aa,colorPaletteGreenBorderActive:Da,colorPaletteGreenBorder1:La,colorPaletteGreenBorder2:Oa,colorPaletteDarkOrangeBackground1:Ta,colorPaletteDarkOrangeBackground2:Ha,colorPaletteDarkOrangeBackground3:Ra,colorPaletteDarkOrangeForeground1:ja,colorPaletteDarkOrangeForeground2:Ia,colorPaletteDarkOrangeForeground3:Ma,colorPaletteDarkOrangeBorderActive:Ga,colorPaletteDarkOrangeBorder1:Xa,colorPaletteDarkOrangeBorder2:_a,colorPaletteYellowBackground1:qa,colorPaletteYellowBackground2:Va,colorPaletteYellowBackground3:Ya,colorPaletteYellowForeground1:Ea,colorPaletteYellowForeground2:Wa,colorPaletteYellowForeground3:Ua,colorPaletteYellowBorderActive:Ka,colorPaletteYellowBorder1:Za,colorPaletteYellowBorder2:Ja,colorPaletteBerryBackground1:Qa,colorPaletteBerryBackground2:en,colorPaletteBerryBackground3:on,colorPaletteBerryForeground1:tn,colorPaletteBerryForeground2:rn,colorPaletteBerryForeground3:an,colorPaletteBerryBorderActive:nn,colorPaletteBerryBorder1:ln,colorPaletteBerryBorder2:sn,colorPaletteLightGreenBackground1:cn,colorPaletteLightGreenBackground2:dn,colorPaletteLightGreenBackground3:hn,colorPaletteLightGreenForeground1:un,colorPaletteLightGreenForeground2:pn,colorPaletteLightGreenForeground3:gn,colorPaletteLightGreenBorderActive:bn,colorPaletteLightGreenBorder1:fn,colorPaletteLightGreenBorder2:mn,colorPaletteMarigoldBackground1:vn,colorPaletteMarigoldBackground2:$n,colorPaletteMarigoldBackground3:kn,colorPaletteMarigoldForeground1:xn,colorPaletteMarigoldForeground2:yn,colorPaletteMarigoldForeground3:Bn,colorPaletteMarigoldBorderActive:wn,colorPaletteMarigoldBorder1:Pn,colorPaletteMarigoldBorder2:zn,colorPaletteDarkRedBackground2:Sn,colorPaletteDarkRedForeground2:Fn,colorPaletteDarkRedBorderActive:Nn,colorPaletteCranberryBackground2:Cn,colorPaletteCranberryForeground2:An,colorPaletteCranberryBorderActive:Dn,colorPalettePumpkinBackground2:Ln,colorPalettePumpkinForeground2:On,colorPalettePumpkinBorderActive:Tn,colorPalettePeachBackground2:Hn,colorPalettePeachForeground2:Rn,colorPalettePeachBorderActive:jn,colorPaletteGoldBackground2:In,colorPaletteGoldForeground2:Mn,colorPaletteGoldBorderActive:Gn,colorPaletteBrassBackground2:Xn,colorPaletteBrassForeground2:_n,colorPaletteBrassBorderActive:qn,colorPaletteBrownBackground2:Vn,colorPaletteBrownForeground2:Yn,colorPaletteBrownBorderActive:En,colorPaletteForestBackground2:Wn,colorPaletteForestForeground2:Un,colorPaletteForestBorderActive:Kn,colorPaletteSeafoamBackground2:Zn,colorPaletteSeafoamForeground2:Jn,colorPaletteSeafoamBorderActive:Qn,colorPaletteDarkGreenBackground2:ei,colorPaletteDarkGreenForeground2:oi,colorPaletteDarkGreenBorderActive:ti,colorPaletteLightTealBackground2:ri,colorPaletteLightTealForeground2:ai,colorPaletteLightTealBorderActive:ni,colorPaletteTealBackground2:ii,colorPaletteTealForeground2:li,colorPaletteTealBorderActive:si,colorPaletteSteelBackground2:ci,colorPaletteSteelForeground2:di,colorPaletteSteelBorderActive:hi,colorPaletteBlueBackground2:ui,colorPaletteBlueForeground2:pi,colorPaletteBlueBorderActive:gi,colorPaletteRoyalBlueBackground2:bi,colorPaletteRoyalBlueForeground2:fi,colorPaletteRoyalBlueBorderActive:mi,colorPaletteCornflowerBackground2:vi,colorPaletteCornflowerForeground2:$i,colorPaletteCornflowerBorderActive:ki,colorPaletteNavyBackground2:xi,colorPaletteNavyForeground2:yi,colorPaletteNavyBorderActive:Bi,colorPaletteLavenderBackground2:wi,colorPaletteLavenderForeground2:Pi,colorPaletteLavenderBorderActive:zi,colorPalettePurpleBackground2:Si,colorPalettePurpleForeground2:Fi,colorPalettePurpleBorderActive:Ni,colorPaletteGrapeBackground2:Ci,colorPaletteGrapeForeground2:Ai,colorPaletteGrapeBorderActive:Di,colorPaletteLilacBackground2:Li,colorPaletteLilacForeground2:Oi,colorPaletteLilacBorderActive:Ti,colorPalettePinkBackground2:Hi,colorPalettePinkForeground2:Ri,colorPalettePinkBorderActive:ji,colorPaletteMagentaBackground2:Ii,colorPaletteMagentaForeground2:Mi,colorPaletteMagentaBorderActive:Gi,colorPalettePlumBackground2:Xi,colorPalettePlumForeground2:_i,colorPalettePlumBorderActive:qi,colorPaletteBeigeBackground2:Vi,colorPaletteBeigeForeground2:Yi,colorPaletteBeigeBorderActive:Ei,colorPaletteMinkBackground2:Wi,colorPaletteMinkForeground2:Ui,colorPaletteMinkBorderActive:Ki,colorPalettePlatinumBackground2:Zi,colorPalettePlatinumForeground2:Ji,colorPalettePlatinumBorderActive:Qi,colorPaletteAnchorBackground2:el,colorPaletteAnchorForeground2:ol,colorPaletteAnchorBorderActive:tl,colorPaletteRedForegroundInverted:rl,colorPaletteGreenForegroundInverted:al,colorPaletteYellowForegroundInverted:nl,shadow2:il,shadow4:ll,shadow8:sl,shadow16:cl,shadow28:dl,shadow64:hl,shadow2Brand:ul,shadow4Brand:pl,shadow8Brand:gl,shadow16Brand:bl,shadow28Brand:fl,shadow64Brand:ml});const $l=t`
  ${u("block")}

  :host {
    max-width: fit-content;
    contain: content;
  }

  .heading {
    height: 44px;
    display: grid;
    position: relative;
    vertical-align: middle;
    padding-inline: ${Qe} ${Je};
    border-radius: ${ue};
    font-family: ${He};
    font-size: ${ve};
    font-weight: ${Ie};
    line-height: ${Fe};
    grid-template-columns: auto auto 1fr auto;
  }

  .heading-content {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .button {
    box-sizing: border-box;
    appearance: none;
    border: none;
    outline: none;
    text-align: start;
    cursor: pointer;
    font-family: inherit;
    height: 44px;
    color: ${Do};
    background: ${hr};
    line-height: ${Fe};
    height: auto;
    padding: 0;
    font-size: inherit;
    grid-column: auto / span 2;
    grid-row: 1;
  }

  .button::before {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${he};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    position: relative;
    height: 100%;
    padding-right: ${Ze};
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  .region {
    margin: 0 ${Qe};
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    justify-content: center;
    align-items: center;
    padding-right: ${Ze};
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  button:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${he};
    outline: none;
    border: 2px solid ${la};
    box-shadow: inset 0 0 0 1px ${sa};
  }

  /* --- Disabled attr styles --- */

  :host([disabled]) .button {
    color: ${Zo};
  }
  :host([disabled]) svg {
    filter: invert(89%) sepia(0%) saturate(569%) hue-rotate(155deg) brightness(88%) contrast(87%);
  }

  /* --- Expanded attr styles --- */

  :host([expanded]) .region {
    display: block;
  }

  :host([expanded]) .default-collapsed-icon,
  :host([expanded]) ::slotted([slot='collapsed-icon']),
  :host(:not([expanded])) .default-expanded-icon,
  :host(:not([expanded])) ::slotted([slot='expanded-icon']),
  :host([expanded]) ::slotted([slot='end']),
  ::slotted([slot='start']),
  .region {
    display: none;
  }

  :host([expanded]) ::slotted([slot='start']),
  :host([expanded]) ::slotted([slot='expanded-icon']),
  :host(:not([expanded])) ::slotted([slot='collapsed-icon']),
  ::slotted([slot='end']) {
    display: flex;
  }

  /* --- Appearance attr styles --- */

  .heading {
    font-size: ${ve};
    line-height: ${Fe};
  }

  :host([size='small']) .heading {
    font-size: ${me};
    line-height: ${Se};
  }

  :host([size='large']) .heading {
    font-size: ${$e};
    line-height: ${Ne};
  }

  :host([size='extra-large']) .heading {
    font-size: ${ke};
    line-height: ${Ce};
  }

  /* --- expand-icon-position attr styles --- */

  :host([expand-icon-position='end']) :slotted(span[slot='start']),
  :host([expand-icon-position='end']) ::slotted(span[slot='end']) {
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  :host([expand-icon-position='end']) ::slotted(span[slot='start']),
  :host([expand-icon-position='end']) ::slotted(span[slot='end']) {
    grid-column: 1 / span 1;
    grid-row: 1;
  }

  :host([expand-icon-position='end']) .icon {
    grid-column: 4 / span 1;
    grid-row: 1;
    display: flex;
    padding-left: 10px;
    padding-right: 0;
  }

  :host([expand-icon-position='end']) .button {
    grid-column: 2 / span 3;
    grid-row: 1;
  }

  /* --- Block attr styles --- */

  :host([block]) {
    max-width: 100%;
  }

  :host([expand-icon-position='end']) .heading {
    grid-template-columns: auto auto 28px;
  }

  :host([expand-icon-position='end']) .icon {
    grid-column: 5 / span 1;
  }

  :host([block][expand-icon-position='end']) .heading {
    grid-template-columns: auto 1fr;
  }

  :host([block][expand-icon-position='end']) .icon {
    grid-column: 5 / span 1;
  }
`,kl=f({collapsedIcon:a.partial('<svg\n  width="20"\n  height="20"\n  viewBox="0 0 20 20"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n  class="default-collapsed-icon"\n>\n  <path\n    d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"\n    fill="currentColor"\n  />\n</svg>'),expandedIcon:a.partial('<svg\n  width="20"\n  height="20"\n  viewBox="0 0 20 20"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n  class="default-expanded-icon"\n>\n  <path\n    d="M15.794 7.73271C16.0797 8.03263 16.0681 8.50737 15.7682 8.79306L10.5178 13.7944C10.2281 14.0703 9.77285 14.0703 9.48318 13.7944L4.23271 8.79306C3.93279 8.50737 3.92125 8.03263 4.20694 7.73271C4.49264 7.43279 4.96737 7.42125 5.26729 7.70694L10.0005 12.2155L14.7336 7.70694C15.0336 7.42125 15.5083 7.43279 15.794 7.73271Z"\n    fill="currentColor"\n  />\n</svg>')}),xl=ie.compose({name:`${re.prefix}-accordion-item`,template:kl,styles:$l});var yl=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Bl extends v{constructor(){super(...arguments),this.iconOnly=!1,this.disabled=!1,this.disabledFocusable=!1,this.handleDisabledFocusableClick=e=>{(e&&this.disabled||this.disabledFocusable)&&e.stopImmediatePropagation()}}disabledChanged(e,o){this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex"))}disabledFocusableChanged(e,o){this.$fastController.isConnected&&(this.disabledFocusable?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleDisabledFocusableClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleDisabledFocusableClick)}}yl([r],Bl.prototype,"appearance",void 0),yl([r],Bl.prototype,"shape",void 0),yl([r],Bl.prototype,"size",void 0),yl([r({attribute:"icon-only",mode:"boolean"})],Bl.prototype,"iconOnly",void 0),yl([r({mode:"boolean"})],Bl.prototype,"disabled",void 0),yl([r({attribute:"disabled-focusable",mode:"boolean"})],Bl.prototype,"disabledFocusable",void 0);const wl={primary:"primary",outline:"outline",subtle:"subtle",secondary:"secondary",transparent:"transparent"},Pl={circular:"circular",rounded:"rounded",square:"square"},zl={small:"small",medium:"medium",large:"large"},Sl=wl,Fl=Pl,Nl=zl,Cl=$(),Al=t`
  ${u("inline-flex")}

  :host {
    --icon-spacing: ${Ke};
    contain: layout style;
    vertical-align: middle;
  }

  :host .control {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    text-decoration-line: none;
    margin: 0;
    min-height: 32px;
    outline-style: none;
    background-color: ${At};
    color: ${Do};
    border: ${_e} solid ${Mr};
    padding: 0 ${Qe};
    min-width: 96px;
    border-radius: ${ue};
    font-size: ${ve};
    font-family: ${He};
    font-weight: ${Ge};
    line-height: ${Fe};
    transition-duration: ${mo};
    transition-property: background, border, color;
    transition-timing-function: ${Co};
    cursor: pointer;
  }

  .content {
    display: inherit;
  }

  :host(:hover) .control {
    background-color: ${Dt};
    color: ${Lo};
    border-color: ${Gr};
  }

  :host(:hover:active) .control {
    background-color: ${Lt};
    border-color: ${Xr};
    color: ${Oo};
    outline-style: none;
  }

  :host .control:focus-visible {
    border-color: ${aa};
    outline: ${qe} solid ${aa};
    box-shadow: ${ll}, 0 0 0 2px ${sa};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    transition-duration: 0.01ms;
  }

  ::slotted(svg) {
    font-size: 20px;
    height: 20px;
    width: 20px;
    fill: currentColor;
  }

  [slot='start'],
  ::slotted([slot='start']) {
    margin-inline-end: var(--icon-spacing);
  }

  [slot='end'],
  ::slotted([slot='end']) {
    margin-inline-start: var(--icon-spacing);
  }

  :host([icon-only]) .control {
    min-width: 32px;
    max-width: 32px;
  }

  :host([size='small']) {
    --icon-spacing: ${Ue};
  }

  :host([size='small']) .control {
    min-height: 24px;
    min-width: 64px;
    padding: 0 ${Ze};
    border-radius: ${he};
    font-size: ${me};
    line-height: ${Se};
    font-weight: ${Ie};
  }

  :host([size='small'][icon-only]) .control {
    min-width: 24px;
    max-width: 24px;
  }

  :host([size='large']) .control {
    min-height: 40px;
    border-radius: ${pe};
    padding: 0 ${eo};
    font-size: ${$e};
    line-height: ${Ne};
  }

  :host([size='large'][icon-only]) .control {
    min-width: 40px;
    max-width: 40px;
  }

  :host([size='large']) ::slotted(svg) {
    font-size: 24px;
    height: 24px;
    width: 24px;
  }

  :host([shape='circular']) .control,
  :host([shape='circular']) .control:focus-visible {
    border-radius: ${be};
  }

  :host([shape='square']) .control,
  :host([shape='square']) .control:focus-visible {
    border-radius: ${de};
  }

  :host([appearance='primary']) .control {
    background-color: ${Br};
    color: ${$t};
    border-color: transparent;
  }

  :host([appearance='primary']:hover) .control {
    background-color: ${wr};
  }

  :host([appearance='primary']:hover) .control,
  :host([appearance='primary']:hover:active) .control {
    border-color: transparent;
    color: ${$t};
  }

  :host([appearance='primary']:hover:active) .control {
    background-color: ${Pr};
  }

  :host([appearance='primary']) .control:focus-visible {
    border-color: ${$t};
    box-shadow: ${il}, 0 0 0 2px ${sa};
  }

  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"])) .control,
  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"]):hover) .control,
  :host(is:([disabled][appearance='primary'], [disabled-focusabale][appearance="primary"]):hover:active) .control {
    border-color: transparent;
  }

  :host([appearance='outline']) .control {
    background-color: ${hr};
  }

  :host([appearance='outline']:hover) .control {
    background-color: ${ur};
  }

  :host([appearance='outline']:hover:active) .control {
    background-color: ${pr};
  }

  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"])) .control,
  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover) .control,
  :host(is:([disabled][appearance='outline'], [disabled-focusabale][appearance="outline"]):hover:active) .control {
    background-color: ${hr};
  }

  :host([appearance='subtle']) .control {
    background-color: ${er};
    color: ${Ho};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) .control {
    background-color: ${or};
    color: ${Ro};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover:active) .control {
    background-color: ${tr};
    color: ${jo};
    border-color: transparent;
  }

  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"])) .control,
  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"]):hover) .control,
  :host(is:([disabled][appearance='subtle'], [disabled-focusabale][appearance="subtle"]):hover:active) .control {
    background-color: ${hr};
    border-color: transparent;
  }

  :host([appearance='subtle']:hover) ::slotted(svg) {
    fill: ${Mo};
  }

  :host([appearance='subtle']:hover:active) ::slotted(svg) {
    fill: ${Go};
  }

  :host([appearance='transparent']) .control {
    background-color: ${hr};
    color: ${Ho};
  }

  :host([appearance='transparent']:hover) .control {
    background-color: ${ur};
    color: ${Mo};
  }

  :host([appearance='transparent']:hover:active) .control {
    background-color: ${pr};
    color: ${Go};
  }

  :host([appearance='transparent']) .control,
  :host([appearance='transparent']:hover) .control,
  :host([appearance='transparent']:hover:active) .control {
    border-color: transparent;
  }

  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"])) .control,
  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"]):hover) .control,
  :host(is:([disabled][appearance='transparent'], [disabled-focusabale][appearance="transparent"]):hover:active) .control {
    border-color: transparent;
    background-color: ${hr};
  }

  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable])) .control,
  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable]):hover) .control,
  :host(:is([disabled], [disabled-focusable], [appearance][disabled], [appearance][disabled-focusable]):hover:active)
    .control {
    background-color: ${br};
    border-color: ${ta};
    color: ${Zo};
    cursor: not-allowed;
  }
`.withBehaviors(p(t`
    :host([appearance='transparent']:hover) .control {
      border-color: Highlight;
    }
  `)),Dl=t`
  ${Al}

  .content {
    text-align: center;
  }
`,Ll=Bl.compose({name:`${re.prefix}-anchor-button`,template:Cl,styles:Dl,shadowOptions:{delegatesFocus:!0}}),Ol=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,Tl=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,Hl=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,Rl=/\s+/g,jl=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function Il(e,o,t){return e?(e=function(e){return(e=(e=(e=e.replace(Ol,"")).replace(Tl,"")).replace(Rl," ")).trim()}(e),jl.test(e)||!(null==t?void 0:t.allowPhoneInitials)&&Hl.test(e)?"":function(e,o,t){let r="";const a=e.split(" ");return 0!==a.length&&(r+=a[0].charAt(0).toUpperCase()),t||(2===a.length?r+=a[1].charAt(0).toUpperCase():3===a.length&&(r+=a[2].charAt(0).toUpperCase())),o&&r.length>1?r.charAt(1)+r.charAt(0):r}(e,o,null==t?void 0:t.firstInitialOnly)):""}const Ml={active:"active",inactive:"inactive"},Gl={circular:"circular",square:"square"},Xl={ring:"ring",shadow:"shadow",ringShadow:"ring-shadow"},_l={darkRed:"dark-red",cranberry:"cranberry",red:"red",pumpkin:"pumpkin",peach:"peach",marigold:"marigold",gold:"gold",brass:"brass",brown:"brown",forest:"forest",seafoam:"seafoam",darkGreen:"dark-green",lightTeal:"light-teal",teal:"teal",steel:"steel",blue:"blue",royalBlue:"royal-blue",cornflower:"cornflower",navy:"navy",lavender:"lavender",purple:"purple",grape:"grape",lilac:"lilac",pink:"pink",magenta:"magenta",plum:"plum",beige:"beige",mink:"mink",platinum:"platinum",anchor:"anchor"},ql={neutral:"neutral",brand:"brand",colorful:"colorful",..._l},Vl={_16:16,_20:20,_24:24,_28:28,_32:32,_36:36,_40:40,_48:48,_56:56,_64:64,_72:72,_96:96,_120:120,_128:128};var Yl=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class El extends i{constructor(){super(...arguments),this.color="neutral"}generateColor(){var e,o;if(this.color)return this.color===ql.colorful?El.colors[Wl(null!==(o=null!==(e=this.colorId)&&void 0!==e?e:this.name)&&void 0!==o?o:"")%El.colors.length]:this.color}generateInitials(){var e,o;if(!this.name&&!this.initials)return;const t=null!==(e=this.size)&&void 0!==e?e:32;return null!==(o=this.initials)&&void 0!==o?o:Il(this.name,"rtl"===window.getComputedStyle(this).direction,{firstInitialOnly:t<=16})}}El.colors=Object.values(_l),Yl([r],El.prototype,"name",void 0),Yl([r],El.prototype,"initials",void 0),Yl([r({converter:n})],El.prototype,"size",void 0),Yl([r],El.prototype,"shape",void 0),Yl([r],El.prototype,"active",void 0),Yl([r],El.prototype,"appearance",void 0),Yl([r],El.prototype,"color",void 0),Yl([r({attribute:"color-id"})],El.prototype,"colorId",void 0);const Wl=e=>{let o=0;for(let t=e.length-1;t>=0;t--){const r=e.charCodeAt(t),a=t%8;o^=(r<<a)+(r>>8-a)}return o},Ul=a`<svg
  width="1em"
  height="1em"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
  class="default-icon"
  fill="currentcolor"
  aria-hidden="true"
>
  <path
    d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"
  ></path>
</svg>`;const Kl=a`
    <template role="img" data-color=${e=>e.generateColor()}>
      <slot>${e=>e.name||e.initials?e.generateInitials():Ul}</slot>
      <slot name="badge"></slot>
    </template>
  `,Zl=Fo,Jl=No,Ql=Ao,es=t`
  ${u("inline-flex")} :host {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    font-family: ${He};
    font-weight: ${Ge};
    font-size: ${ve};
    border-radius: ${be};
    color: ${_o};
    background-color: ${Zt};
    contain: layout style;
  }

  .default-icon,
  ::slotted(svg) {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  ::slotted(img) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${be};
  }

  ::slotted([slot='badge']) {
    position: absolute;
    bottom: 0;
    right: 0;
    box-shadow: 0 0 0 ${_e} ${At};
  }

  :host([size='64']) ::slotted([slot='badge']),
  :host([size='72']) ::slotted([slot='badge']),
  :host([size='96']) ::slotted([slot='badge']),
  :host([size='120']) ::slotted([slot='badge']),
  :host([size='128']) ::slotted([slot='badge']) {
    box-shadow: 0 0 0 ${qe} ${At};
  }

  :host([size='16']),
  :host([size='20']),
  :host([size='24']) {
    font-size: ${fe};
    font-weight: ${Ie};
  }

  :host([size='16']) {
    width: 16px;
    height: 16px;
  }

  :host([size='20']) {
    width: 20px;
    height: 20px;
  }

  :host([size='24']) {
    width: 24px;
    height: 24px;
  }

  :host([size='16']) .default-icon,
  :host([size='16']) ::slotted(svg) {
    width: 12px;
    height: 12px;
    font-size: 12px;
  }

  :host([size='20']) .default-icon,
  :host([size='24']) .default-icon,
  :host([size='20']) ::slotted(svg),
  :host([size='24']) ::slotted(svg) {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  :host([size='28']) {
    width: 28px;
    height: 28px;
    font-size: ${me};
  }

  :host([size='36']) {
    width: 36px;
    height: 36px;
  }

  :host([size='40']) {
    width: 40px;
    height: 40px;
  }

  :host([size='48']),
  :host([size='56']) {
    font-size: ${$e};
  }

  :host([size='48']) {
    width: 48px;
    height: 48px;
  }

  :host([size='48']) .default-icon,
  :host([size='48']) ::slotted(svg) {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  :host([size='56']) {
    width: 56px;
    height: 56px;
  }

  :host([size='56']) .default-icon,
  :host([size='56']) ::slotted(svg) {
    width: 28px;
    height: 28px;
    font-size: 28px;
  }

  :host([size='64']),
  :host([size='72']),
  :host([size='96']) {
    font-size: ${ke};
  }

  :host([size='64']) .default-icon,
  :host([size='72']) .default-icon,
  :host([size='64']) ::slotted(svg),
  :host([size='72']) ::slotted(svg) {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }

  :host([size='64']) {
    width: 64px;
    height: 64px;
  }

  :host([size='72']) {
    width: 72px;
    height: 72px;
  }

  :host([size='96']) {
    width: 96px;
    height: 96px;
  }

  :host([size='96']) .default-icon,
  :host([size='120']) .default-icon,
  :host([size='128']) .default-icon,
  :host([size='96']) ::slotted(svg),
  :host([size='120']) ::slotted(svg),
  :host([size='128']) ::slotted(svg) {
    width: 48px;
    height: 48px;
    font-size: 48px;
  }

  :host([size='120']),
  :host([size='128']) {
    font-size: ${xe};
  }

  :host([size='120']) {
    width: 120px;
    height: 120px;
  }

  :host([size='128']) {
    width: 128px;
    height: 128px;
  }

  :host([shape='square']) {
    border-radius: ${ue};
  }

  :host([shape='square'][size='20']),
  :host([shape='square'][size='24']) {
    border-radius: ${he};
  }

  :host([shape='square'][size='56']),
  :host([shape='square'][size='64']),
  :host([shape='square'][size='72']) {
    border-radius: ${pe};
  }
  :host([shape='square'][size='96']),
  :host([shape='square'][size='120']),
  :host([shape='square'][size='128']) {
    border-radius: ${ge};
  }

  :host([data-color='brand']) {
    color: ${pt};
    background-color: ${Cr};
  }

  :host([data-color='dark-red']) {
    color: ${Fn};
    background-color: ${Sn};
  }

  :host([data-color='cranberry']) {
    color: ${An};
    background-color: ${Cn};
  }

  :host([data-color='red']) {
    color: ${xa};
    background-color: ${va};
  }

  :host([data-color='pumpkin']) {
    color: ${On};
    background-color: ${Ln};
  }

  :host([data-color='peach']) {
    color: ${Rn};
    background-color: ${Hn};
  }

  :host([data-color='marigold']) {
    color: ${yn};
    background-color: ${$n};
  }

  :host([data-color='gold']) {
    color: ${Mn};
    background-color: ${In};
  }

  :host([data-color='brass']) {
    color: ${_n};
    background-color: ${Xn};
  }

  :host([data-color='brown']) {
    color: ${Yn};
    background-color: ${Vn};
  }

  :host([data-color='forest']) {
    color: ${Un};
    background-color: ${Wn};
  }

  :host([data-color='seafoam']) {
    color: ${Jn};
    background-color: ${Zn};
  }

  :host([data-color='dark-green']) {
    color: ${oi};
    background-color: ${ei};
  }

  :host([data-color='light-teal']) {
    color: ${ai};
    background-color: ${ri};
  }

  :host([data-color='teal']) {
    color: ${li};
    background-color: ${ii};
  }

  :host([data-color='steel']) {
    color: ${di};
    background-color: ${ci};
  }

  :host([data-color='blue']) {
    color: ${pi};
    background-color: ${ui};
  }

  :host([data-color='royal-blue']) {
    color: ${fi};
    background-color: ${bi};
  }

  :host([data-color='cornflower']) {
    color: ${$i};
    background-color: ${vi};
  }

  :host([data-color='navy']) {
    color: ${yi};
    background-color: ${xi};
  }

  :host([data-color='lavender']) {
    color: ${Pi};
    background-color: ${wi};
  }

  :host([data-color='purple']) {
    color: ${Fi};
    background-color: ${Si};
  }

  :host([data-color='grape']) {
    color: ${Ai};
    background-color: ${Ci};
  }

  :host([data-color='lilac']) {
    color: ${Oi};
    background-color: ${Li};
  }

  :host([data-color='pink']) {
    color: ${Ri};
    background-color: ${Hi};
  }

  :host([data-color='magenta']) {
    color: ${Mi};
    background-color: ${Ii};
  }

  :host([data-color='plum']) {
    color: ${_i};
    background-color: ${Xi};
  }

  :host([data-color='beige']) {
    color: ${Yi};
    background-color: ${Vi};
  }

  :host([data-color='mink']) {
    color: ${Ui};
    background-color: ${Wi};
  }

  :host([data-color='platinum']) {
    color: ${Ji};
    background-color: ${Zi};
  }

  :host([data-color='anchor']) {
    color: ${ol};
    background-color: ${el};
  }

  :host([active]) {
    /* Work-around for text pixel snapping at the end of the animation */
    transform: perspective(1px);
    transition-property: transform, opacity;
    transition-duration: ${yo}, ${mo};
    transition-delay: ${Jl}, ${Ql};
  }

  :host([active])::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    transition-property: margin, opacity;
    transition-duration: ${yo}, ${xo};
    transition-delay: ${Jl}, ${Ql};
  }
  :host([active])::before {
    box-shadow: ${sl};
    border-style: solid;
    border-color: ${Cr};
  }

  :host([active][appearance='shadow'])::before {
    border-style: none;
    border-color: none;
  }

  :host([active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${qe});
    border-width: ${qe};
  }

  :host([size='56'][active]:not([appearance='shadow']))::before,
  :host([size='64'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Ve});
    border-width: ${Ve};
  }

  :host([size='72'][active]:not([appearance='shadow']))::before,
  :host([size='96'][active]:not([appearance='shadow']))::before,
  :host([size='120'][active]:not([appearance='shadow']))::before,
  :host([size='128'][active]:not([appearance='shadow']))::before {
    margin: calc(-2 * ${Ye});
    border-width: ${Ye};
  }

  :host([size='20'][active][appearance])::before,
  :host([size='24'][active][appearance])::before,
  :host([size='28'][active][appearance])::before {
    box-shadow: ${ll};
  }

  :host([size='56'][active][appearance])::before,
  :host([size='64'][active][appearance])::before {
    box-shadow: ${cl};
  }

  :host([size='72'][active][appearance])::before,
  :host([size='96'][active][appearance])::before,
  :host([size='120'][active][appearance])::before,
  :host([size='128'][active][appearance])::before {
    box-shadow: ${dl};
  }

  :host([active][appearance='ring'])::before {
    box-shadow: none;
  }

  :host([active='inactive']) {
    opacity: 0.8;
    transform: scale(0.875);
    transition-property: transform, opacity;
    transition-duration: ${yo}, ${mo};
    transition-delay: ${Zl}, ${Ql};
  }

  :host([active='inactive'])::before {
    margin: 0;
    opacity: 0;
    transition-property: margin, opacity;
    transition-duration: ${yo}, ${xo};
    transition-delay: ${Zl}, ${Ql};
  }

  @media screen and (prefers-reduced-motion: reduce) {
    :host([active]) {
      transition-duration: 0.01ms;
    }

    :host([active])::before {
      transition-duration: 0.01ms;
      transition-delay: 0.01ms;
    }
  }
`,os=El.compose({name:`${re.prefix}-avatar`,template:Kl,styles:es});function ts(e,...o){const t=l.locate(e);o.forEach((o=>{Object.getOwnPropertyNames(o.prototype).forEach((t=>{"constructor"!==t&&Object.defineProperty(e.prototype,t,Object.getOwnPropertyDescriptor(o.prototype,t))}));l.locate(o).forEach((e=>t.push(e)))}))}const rs={filled:"filled",ghost:"ghost",outline:"outline",tint:"tint"},as={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},ns={circular:"circular",rounded:"rounded",square:"square"},is={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};var ls=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class ss extends i{constructor(){super(...arguments),this.appearance=rs.filled,this.color=as.brand}}function cs(e={}){return a`
    ${x(e)}
    <slot>${g(e.defaultContent)}</slot>
    ${y(e)}
  `}ls([r],ss.prototype,"appearance",void 0),ls([r],ss.prototype,"color",void 0),ls([r],ss.prototype,"shape",void 0),ls([r],ss.prototype,"size",void 0),ts(ss,k);const ds=cs(),hs=We,us=t.partial`
  ${u("inline-flex")} :host {
    position: relative;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    font-family: ${He};
    font-weight: ${Ge};
    font-size: ${me};
    line-height: ${Se};
    min-width: 20px;
    height: 20px;
    padding-inline: calc(${Ue} + ${hs});
    border-radius: ${be};
    border-color: ${aa};
    background-color: ${Br};
    color: ${$t};
    contain: content;
  }

  ::slotted(svg) {
    font-size: 12px;
  }

  :host(:not([appearance='ghost']))::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: ${_e};
    border-color: inherit;
    border-radius: inherit;
  }
`,ps=t.partial`
  :host([size='tiny']) {
    width: 6px;
    height: 6px;
    font-size: 4px;
    line-height: 4px;
    padding-inline: 0;
    min-width: unset;
  }
  :host([size='tiny']) ::slotted(svg) {
    font-size: 6px;
  }
  :host([size='extra-small']) {
    width: 10px;
    height: 10px;
    font-size: 6px;
    line-height: 6px;
    padding-inline: 0;
    min-width: unset;
  }
  :host([size='extra-small']) ::slotted(svg) {
    font-size: 10px;
  }
  :host([size='small']) {
    min-width: 16px;
    height: 16px;
    font-size: ${fe};
    line-height: ${ze};
    padding-inline: calc(${We} + ${hs});
  }
  :host([size='small']) ::slotted(svg) {
    font-size: 12px;
  }
  :host([size='large']) {
    min-width: 24px;
    height: 24px;
    font-size: ${me};
    line-height: ${Se};
    padding-inline: calc(${Ue} + ${hs});
  }
  :host([size='large']) ::slotted(svg) {
    font-size: 16px;
  }
  :host([size='extra-large']) {
    min-width: 32px;
    height: 32px;
    font-size: ${me};
    line-height: ${Se};
    padding-inline: calc(${Ke} + ${hs});
  }
  :host([size='extra-large']) ::slotted(svg) {
    font-size: 20px;
  }
`,gs=t.partial`
  :host([color='danger']) {
    background-color: ${$a};
    color: ${$t};
  }

  :host([color='important']) {
    background-color: ${Do};
    color: ${At};
  }

  :host([color='informative']) {
    background-color: ${Et};
    color: ${_o};
  }

  :host([color='severe']) {
    background-color: ${Ra};
    color: ${$t};
  }

  :host([color='subtle']) {
    background-color: ${At};
    color: ${Do};
  }

  :host([color='success']) {
    background-color: ${Fa};
    color: ${$t};
  }

  :host([color='warning']) {
    background-color: ${Ya};
    color: ${ut};
  }
`,bs=t.partial`
  :host([appearance='ghost']) {
    color: ${dt};
    background-color: initial;
  }

  :host([appearance='ghost'][color='danger']) {
    color: ${ya};
  }

  :host([appearance='ghost'][color='important']) {
    color: ${Do};
  }

  :host([appearance='ghost'][color='informative']) {
    color: ${_o};
  }

  :host([appearance='ghost'][color='severe']) {
    color: ${Ma};
  }

  :host([appearance='ghost'][color='subtle']) {
    color: ${gt};
  }

  :host([appearance='ghost'][color='success']) {
    color: ${Aa};
  }

  :host([appearance='ghost'][color='warning']) {
    color: ${Wa};
  }
`,fs=t.partial`
  :host([appearance='outline']) {
    border-color: currentColor;
    color: ${dt};
    background-color: initial;
  }

  :host([appearance='outline'][color='danger']) {
    color: ${ya};
  }

  :host([appearance='outline'][color='important']) {
    color: ${_o};
    border-color: ${Hr};
  }

  :host([appearance='outline'][color='informative']) {
    color: ${_o};
    border-color: ${qr};
  }

  :host([appearance='outline'][color='severe']) {
    color: ${Ma};
  }

  :host([appearance='outline'][color='subtle']) {
    color: ${pt};
  }

  :host([appearance='outline'][color='success']) {
    color: ${Ca};
  }

  :host([appearance='outline'][color='warning']) {
    color: ${Wa};
  }
`,ms=t.partial`
  :host([appearance='tint']) {
    background-color: ${Ar};
    color: ${ht};
    border-color: ${Jr};
  }

  :host([appearance='tint'][color='danger']) {
    background-color: ${ma};
    color: ${ka};
    border-color: ${wa};
  }

  :host([appearance='tint'][color='important']) {
    background-color: ${_o};
    color: ${At};
    border-color: ${aa};
  }

  :host([appearance='tint'][color='informative']) {
    background-color: ${_t};
    color: ${_o};
    border-color: ${qr};
  }

  :host([appearance='tint'][color='severe']) {
    background-color: ${Ta};
    color: ${ja};
    border-color: ${Xa};
  }

  :host([appearance='tint'][color='subtle']) {
    background-color: ${At};
    color: ${_o};
    border-color: ${qr};
  }

  :host([appearance='tint'][color='success']) {
    background-color: ${za};
    color: ${Na};
    border-color: ${Oa};
  }

  :host([appearance='tint'][color='warning']) {
    background-color: ${qa};
    color: ${Wa};
    border-color: ${Za};
  }
`,vs=t`
  :host([shape='square']) {
    border-radius: ${de};
  }

  :host([shape='rounded']) {
    border-radius: ${ue};
  }

  :host([shape='rounded'][size='tiny']),
  :host([shape='rounded'][size='extra-small']),
  :host([shape='rounded'][size='small']) {
    border-radius: ${he};
  }

  ${ps}
  ${gs}
  ${bs}
  ${fs}
  ${ms}
  ${us}
`,$s=ss.compose({name:`${re.prefix}-badge`,template:ds,styles:vs});var ks=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class xs extends B{constructor(){super(...arguments),this.iconOnly=!1,this.disabledFocusable=!1,this.handleDisabledFocusableClick=e=>{e&&this.disabledFocusable&&e.stopImmediatePropagation()}}disabledFocusableChanged(e,o){this.$fastController.isConnected&&(this.disabledFocusable?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleDisabledFocusableClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleDisabledFocusableClick)}}ks([r],xs.prototype,"appearance",void 0),ks([r],xs.prototype,"shape",void 0),ks([r],xs.prototype,"size",void 0),ks([r({attribute:"icon-only",mode:"boolean"})],xs.prototype,"iconOnly",void 0),ks([r({attribute:"disabled-focusable",mode:"boolean"})],xs.prototype,"disabledFocusable",void 0);const ys=w(),Bs=xs.compose({name:`${re.prefix}-button`,template:ys,styles:Al,shadowOptions:{delegatesFocus:!0}});var ws=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Ps extends P{}ws([r],Ps.prototype,"shape",void 0),ws([r],Ps.prototype,"size",void 0),ws([r({attribute:"label-position"})],Ps.prototype,"labelPosition",void 0);const zs={circular:"circular",square:"square"},Ss={medium:"medium",large:"large"},Fs={before:"before",after:"after"},Ns=z({checkedIndicator:a.partial('\n    <div class="checked-indicator">\n        <svg fill="currentColor" \n            aria-hidden="true" \n            width="1em" \n            height="1em" \n            viewBox="0 0 12 12" \n            xmlns="http://www.w3.org/2000/svg">\n                <path d="M9.76 3.2c.3.29.32.76.04 1.06l-4.25 4.5a.75.75 0 0 1-1.08.02L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.7 1.7L8.7 3.24a.75.75 0 0 1 1.06-.04Z" fill="currentColor">\n                </path>\n        </svg>\n    </div>\n'),indeterminateIndicator:a.partial('\n    <div class="indeterminate-indicator"></div>\n')}),Cs=t`
  ${u("inline-flex")}
  :host {
    align-items: center;
    outline: none;
    user-select: none;
    vertical-align: middle;
    cursor: pointer;
    font-family: ${He};
    font-size: ${ve};
    line-height: ${Fe};
    color: ${_o};
    position: relative;
  }

  :host(:focus-visible)::after {
    content: '';
    position: absolute;
    inset: 0px;
    cursor: pointer;
    border-radius: ${ue};
    outline: none;
    border: 2px solid ${la};
    box-shadow: inset 0 0 0 1px ${sa};
  }

  .control {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: ${so} ${Ze};
    fill: currentcolor;
    height: 16px;
    width: 16px;
    border: ${_e} solid ${Hr};
    border-radius: ${he};
    outline: none;
  }
  .label {
    align-self: center;
    cursor: inherit;
    padding-inline: ${Ze};
    padding-bottom: ${so};
    padding-top: ${so};
  }
  .label__hidden {
    display: none;
    visibility: hidden;
  }
  .checked-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${gt};
    font-size: 12px;
    margin: auto;
    opacity: 0;
  }
  .indeterminate-indicator {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: ${he};
    background-color: ${lt};
    opacity: 0;
  }
  :host(:hover) {
    color: ${Ho};
  }
  :host(:hover) .control {
    border-color: ${Rr};
  }
  :host(:hover) .indeterminate-indicator {
    background-color: ${st};
  }
  :host(:active) .control {
    border-color: ${jr};
  }
  :host(:active) .indeterminate-indicator {
    background-color: ${ct};
  }
  :host([aria-checked='true']),
  :host([aria-checked='mixed']),
  :host(:active) {
    color: ${Do};
  }
  :host([aria-checked='true']) .control {
    background-color: ${Sr};
  }
  :host([aria-checked='true']:hover) .control {
    border-color: ${ea};
    background-color: ${Fr};
  }
  :host([aria-checked='true']:active) .control {
    background-color: ${Nr};
  }
  :host([aria-checked='mixed']:hover) .control {
    border-color: ${ea};
  }
  :host([aria-checked='true']) .checked-indicator,
  :host([aria-checked='mixed']) .indeterminate-indicator {
    opacity: 1;
  }
  :host([aria-checked='true']) .control,
  :host([aria-checked='mixed']) .control {
    border-color: ${Qr};
  }
  :host([aria-checked='mixed']:active) .control,
  :host([aria-checked='true']:active) .control {
    border-color: ${oa};
  }
  :host([label-position='before']) {
    flex-direction: row-reverse;
  }
  :host([label-position='before']) .label {
    padding-inline: ${Ze} ${Ue};
    padding-top: ${so};
    padding-bottom: ${so};
  }
  :host([size='large']) .control {
    width: 20px;
    height: 20px;
  }
  :host([size='large']) .checked-indicator {
    font-size: 16px;
    height: 20px;
  }
  :host([aria-checked='mixed'][size='large']) .indeterminate-indicator {
    height: 10px;
    width: 10px;
  }
  :host([shape='circular']) .control,
  :host([shape='circular']) .indeterminate-indicator {
    border-radius: ${be};
  }
  :host([disabled]) .control,
  :host([aria-checked='mixed'][disabled]) .control,
  :host([aria-checked='true'][disabled]) .control {
    background-color: ${ur};
    border-color: ${ta};
  }
  :host([aria-checked='true'][disabled]) .checked-indicator,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) .label,
  :host([aria-checked='mixed'][disabled]) .label,
  :host([aria-checked='true'][disabled]) .label {
    color: ${Zo};
  }
  :host([disabled]) .indeterminate-indicator {
    background-color: ${Zo};
  }
`,As=Ps.compose({name:`${re.prefix}-checkbox`,template:Ns,styles:Cs});class Ds extends xs{}const Ls=wl,Os=Pl,Ts=zl;const Hs=function(e={}){return a`
    <button
      class="control"
      part="control"
      ?autofocus="${e=>e.autofocus}"
      ?disabled="${e=>e.disabled}"
      form="${e=>e.formId}"
      formaction="${e=>e.formaction}"
      formenctype="${e=>e.formenctype}"
      formmethod="${e=>e.formmethod}"
      ?formnovalidate="${e=>e.formnovalidate}"
      formtarget="${e=>e.formtarget}"
      name="${e=>e.name}"
      type="${e=>e.type}"
      value="${e=>e.value}"
      aria-atomic="${e=>e.ariaAtomic}"
      aria-busy="${e=>e.ariaBusy}"
      aria-controls="${e=>e.ariaControls}"
      aria-current="${e=>e.ariaCurrent}"
      aria-describedby="${e=>e.ariaDescribedby}"
      aria-details="${e=>e.ariaDetails}"
      aria-disabled="${e=>e.ariaDisabled}"
      aria-errormessage="${e=>e.ariaErrormessage}"
      aria-expanded="${e=>e.ariaExpanded}"
      aria-flowto="${e=>e.ariaFlowto}"
      aria-haspopup="${e=>e.ariaHaspopup}"
      aria-hidden="${e=>e.ariaHidden}"
      aria-invalid="${e=>e.ariaInvalid}"
      aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
      aria-label="${e=>e.ariaLabel}"
      aria-labelledby="${e=>e.ariaLabelledby}"
      aria-live="${e=>e.ariaLive}"
      aria-owns="${e=>e.ariaOwns}"
      aria-pressed="${e=>e.ariaPressed}"
      aria-relevant="${e=>e.ariaRelevant}"
      aria-roledescription="${e=>e.ariaRoledescription}"
      ${s("control")}
    >
      ${x(e)}
      <span class="content" part="content">
        <slot ${c("defaultSlottedContent")}></slot>
        <slot name="description"></slot>
      </span>
      ${y(e)}
    </button>
  `}(),Rs=t`
  ${Al}

  :host .control,
  :host(:is([size])) .control {
    gap: 12px;
    height: auto;
    padding-top: 14px;
    padding-inline: 12px;
    padding-bottom: 16px;
    font-size: ${ve};
    line-height: ${Fe};
  }

  .content {
    display: flex;
    flex-direction: column;
    text-align: start;
  }

  ::slotted([slot='description']) {
    color: ${Ho};
    line-height: 100%;
    font-size: ${me};
    font-weight: ${Ie};
  }

  ::slotted(svg),
  :host([size='large']) ::slotted(svg) {
    font-size: 40px;
    height: 40px;
    width: 40px;
  }

  :host(:hover) ::slotted([slot='description']) {
    color: ${Ro};
  }

  :host(:active) ::slotted([slot='description']) {
    color: ${jo};
  }

  :host(:is([appearance='primary'], [appearance='primary']:hover, [appearance='primary']:active))
    ::slotted([slot='description']) {
    color: ${$t};
  }

  :host(:is([appearance='subtle'], [appearance='subtle']:hover, [appearance='subtle']:active))
    ::slotted([slot='description']),
  :host([appearance='transparent']) ::slotted([slot='description']) {
    color: ${Ho};
  }

  :host([appearance='transparent']:hover) ::slotted([slot='description']) {
    color: ${Mo};
  }

  :host([appearance='transparent']:active) ::slotted([slot='description']) {
    color: ${Go};
  }

  :host(:is([disabled], [disabled][appearance], [disabled-focusable], [disabled-focusable][appearance]))
    ::slotted([slot='description']) {
    color: ${Zo};
  }

  :host([size='small']) .control {
    padding: 8px;
    padding-bottom: 10px;
  }

  :host([icon-only]) .control {
    min-width: 52px;
    max-width: 52px;
    padding: ${Ke};
  }

  :host([icon-only][size='small']) .control {
    min-width: 48px;
    max-width: 48px;
    padding: ${Ue};
  }

  :host([icon-only][size='large']) .control {
    min-width: 56px;
    max-width: 56px;
    padding: ${Ze};
  }

  :host([size='large']) .control {
    padding-top: 18px;
    padding-inline: 16px;
    padding-bottom: 20px;
    font-size: ${$e};
    line-height: ${Ne};
  }
  :host([size='large']) ::slotted([slot='description']) {
    font-size: ${ve};
  }
`,js=Ds.compose({name:`${re.prefix}-compound-button`,template:Hs,styles:Rs,shadowOptions:{delegatesFocus:!0}});var Is=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Ms extends i{constructor(){super(...arguments),this.count=0,this.overflowCount=99,this.showZero=!1,this.dot=!1}countChanged(){this.setCount()}overflowCountChanged(){this.setCount()}setCount(){var e;const o=null!==(e=this.count)&&void 0!==e?e:0;if((0!==o||this.showZero)&&!this.dot)return o>this.overflowCount?`${this.overflowCount}+`:`${o}`}}Is([r],Ms.prototype,"appearance",void 0),Is([r],Ms.prototype,"color",void 0),Is([r],Ms.prototype,"shape",void 0),Is([r],Ms.prototype,"size",void 0),Is([r({converter:n})],Ms.prototype,"count",void 0),Is([r({attribute:"overflow-count",converter:n})],Ms.prototype,"overflowCount",void 0),Is([r({attribute:"show-zero",mode:"boolean"})],Ms.prototype,"showZero",void 0),Is([r({mode:"boolean"})],Ms.prototype,"dot",void 0),ts(Ms,k);const Gs={filled:"filled",ghost:"ghost"},Xs={brand:"brand",danger:"danger",important:"important",informative:"informative",severe:"severe",subtle:"subtle",success:"success",warning:"warning"},_s={circular:"circular",rounded:"rounded"},qs={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large"};const Vs=cs({defaultContent:a`${e=>e.setCount()}`}),Ys=t`
  :host([shape='rounded']) {
    border-radius: ${ue};
  }

  :host([shape='rounded'][size='tiny']),
  :host([shape='rounded'][size='extra-small']),
  :host([shape='rounded'][size='small']) {
    border-radius: ${he};
  }

  ${ps}
  ${gs}
  ${bs}
  ${us}

  :host([dot]),
  :host([dot][appearance][size]) {
    min-width: auto;
    width: 6px;
    height: 6px;
    padding: 0;
  }
`,Es=Ms.compose({name:`${re.prefix}-counter-badge`,template:Vs,styles:Ys});var Ws=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Us extends S{}Ws([r({attribute:"align-content"})],Us.prototype,"alignContent",void 0),Ws([r],Us.prototype,"appearance",void 0),Ws([r({mode:"boolean"})],Us.prototype,"inset",void 0);const Ks={center:"center",start:"start",end:"end"},Zs={strong:"strong",brand:"brand",subtle:"subtle",default:"default"},Js=F(),Qs=t`
  ${u("flex")}

  :host {
    contain: content;
  }

  :host::after,
  :host::before {
    align-self: center;
    background: ${qr};
    box-sizing: border-box;
    content: '';
    display: flex;
    flex-grow: 1;
    height: ${_e};
  }

  :host([inset]) {
    padding: 0 12px;
  }

  :host ::slotted(*) {
    color: ${Ho};
    font-family: ${He};
    font-size: ${me};
    font-weight: ${Ie};
    margin: 0;
    padding: 0 12px;
  }

  :host([align-content='start'])::before,
  :host([align-content='end'])::after {
    flex-basis: 12px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  :host([orientation='vertical']) {
    height: 100%;
    min-height: 84px;
  }
  :host([orientation='vertical']):empty {
    min-height: 20px;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
    align-items: center;
  }

  :host([orientation='vertical'][inset])::before {
    margin-top: 12px;
  }
  :host([orientation='vertical'][inset])::after {
    margin-bottom: 12px;
  }

  :host([orientation='vertical']):empty::before,
  :host([orientation='vertical']):empty::after {
    height: 10px;
    min-height: 10px;
    flex-grow: 0;
  }

  :host([orientation='vertical'])::before,
  :host([orientation='vertical'])::after {
    width: ${_e};
    min-height: 20px;
    height: 100%;
  }

  :host([orientation='vertical']) ::slotted(*) {
    display: flex;
    flex-direction: column;
    padding: 12px 0;
    line-height: 20px;
  }

  :host([orientation='vertical'][align-content='start'])::before {
    min-height: 8px;
  }
  :host([orientation='vertical'][align-content='end'])::after {
    min-height: 8px;
  }

  :host([appearance='strong'])::before,
  :host([appearance='strong'])::after {
    background: ${Mr};
  }
  :host([appearance='strong']) ::slotted(*) {
    color: ${Do};
  }
  :host([appearance='brand'])::before,
  :host([appearance='brand'])::after {
    background: ${Zr};
  }
  :host([appearance='brand']) ::slotted(*) {
    color: ${dt};
  }
  :host([appearance='subtle'])::before,
  :host([appearance='subtle'])::after {
    background: ${Vr};
  }
  :host([appearance='subtle']) ::slotted(*) {
    color: ${_o};
  }
`.withBehaviors(p(t`
    :host([appearance='strong'])::before,
    :host([appearance='strong'])::after,
    :host([appearance='brand'])::before,
    :host([appearance='brand'])::after,
    :host([appearance='subtle'])::before,
    :host([appearance='subtle'])::after,
    :host::after,
    :host::before {
      background: WindowText;
      color: WindowText;
    }
  `)),ec=Us.compose({name:`${re.prefix}-divider`,template:Js,styles:Qs});var oc=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class tc extends i{}oc([r({mode:"boolean"})],tc.prototype,"block",void 0),oc([r({mode:"boolean"})],tc.prototype,"bordered",void 0),oc([r({mode:"boolean"})],tc.prototype,"shadow",void 0),oc([r],tc.prototype,"fit",void 0),oc([r],tc.prototype,"shape",void 0);const rc={none:"none",center:"center",contain:"contain",cover:"cover",default:"default"},ac={circular:"circular",rounded:"rounded",square:"square"},nc=a`<slot></slot>`,ic=t`
  :host {
    contain: content;
  }

  :host ::slotted(img) {
    box-sizing: border-box;
    min-height: 8px;
    min-width: 8px;
    display: inline-block;
  }
  :host([block]) ::slotted(img) {
    width: 100%;
    height: auto;
  }
  :host([bordered]) ::slotted(img) {
    border: ${_e} solid ${qr};
  }
  :host([fit='none']) ::slotted(img) {
    object-fit: none;
    object-position: top left;
    height: 100%;
    width: 100%;
  }
  :host([fit='center']) ::slotted(img) {
    object-fit: none;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([fit='contain']) ::slotted(img) {
    object-fit: contain;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([fit='cover']) ::slotted(img) {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
  :host([shadow]) ::slotted(img) {
    box-shadow: ${ll};
  }
  :host([shape='circular']) ::slotted(img) {
    border-radius: ${be};
  }
  :host([shape='rounded']) ::slotted(img) {
    border-radius: ${ue};
  }
`,lc=tc.compose({name:`${re.prefix}-image`,template:nc,styles:ic});var sc=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class cc extends i{constructor(){super(...arguments),this.disabled=!1,this.required=!1}}sc([r],cc.prototype,"size",void 0),sc([r],cc.prototype,"weight",void 0),sc([r({mode:"boolean"})],cc.prototype,"disabled",void 0),sc([r({mode:"boolean"})],cc.prototype,"required",void 0);const dc=t`
  ${u("flex")}

  :host {
    font-family: ${He};
    font-size: ${ve};
    line-height: ${Fe};
    font-weight: ${Ie};
    color: ${Do};
  }
  .asterisk {
    color: ${ka};
    margin-left: ${Ue};
  }
  :host([size='small']) {
    font-size: ${me};
    line-height: ${Se};
  }
  :host([size='large']) {
    font-size: ${$e};
    line-height: ${Ne};
    font-weight: ${Ge};
  }
  :host([weight='semibold']) {
    font-weight: ${Ge};
  }
  :host([disabled]),
  :host([disabled]) .asterisk {
    color: ${Zo};
  }
`;const hc=a`
    <slot></slot>
    <span part="asterisk" class="asterisk" ?hidden="${e=>!e.required}">*</span>
  `,uc=cc.compose({name:`${re.prefix}-label`,template:hc,styles:dc});class pc extends xs{}const gc=wl,bc=Pl,fc=zl,mc=w({end:a.partial('<svg slot="end" fill="currentColor" aria-hidden="true" width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" fill="currentColor"></path></svg>')}),vc=pc.compose({name:`${re.prefix}-menu-button`,template:mc,styles:Al,shadowOptions:{delegatesFocus:!0}});class $c extends N{}const kc=a.partial('<svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 014.9 12L2.22 9.28a.75.75 0 111.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 011.06.04z" fill="currentColor"></path></svg>'),xc=C({checkboxIndicator:kc,expandCollapseGlyph:a.partial('<svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.74 3.2a.75.75 0 00-.04 1.06L9.23 8 5.7 11.74a.75.75 0 101.1 1.02l4-4.25a.75.75 0 000-1.02l-4-4.25a.75.75 0 00-1.06-.04z" fill="currentColor"></path></svg>'),radioIndicator:kc}),yc=t`
  ${u("grid")}

  :host {
    grid-template-columns: 20px 20px auto 20px;
    align-items: center;
    grid-gap: 4px;
    height: 32px;
    background: ${At};
    font: ${Ie} ${ve} / ${Fe} ${He};
    border-radius: ${ue};
    color: ${Ho};
    padding: 0 10px;
    cursor: pointer;
    overflow: visible;
    contain: layout;
  }

  :host(:hover) {
    background: ${Dt};
  }

  .content {
    white-space: nowrap;
    flex-grow: 1;
    grid-column: auto / span 2;
    padding: 0 2px;
  }

  .checkbox,
  .radio {
    display: none;
  }

  .input-container,
  .expand-collapse-glyph-container,
  ::slotted([slot='start']),
  ::slotted([slot='end']),
  :host([checked]) .checkbox,
  :host([checked]) .radio {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${Ho};
  }

  .expand-collapse-glyph-container,
  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    height: 32px;
    font-size: ${ke};
    width: fit-content;
  }

  .input-container {
    width: 20px;
  }

  ::slotted([slot='end']) {
    color: ${_o};
    font: ${Ie} ${me} / ${Se} ${He};
    white-space: nowrap;
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }

  .expand-collapse-glyph-container {
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }

  :host(:hover) .input-container,
  :host(:hover) .expand-collapse-glyph-container,
  :host(:hover) .content {
    color: ${Ro};
  }

  :host([icon]:hover) ::slotted([slot='start']) {
    color: ${st};
  }

  :host(:active) {
    background-color: ${Ot};
  }

  :host(:active) .input-container,
  :host(:active) .expand-collapse-glyph-container,
  :host(:active) .content {
    color: ${jo};
  }

  :host(:active) ::slotted([slot='start']) {
    color: ${ct};
  }

  :host([disabled]) {
    background-color: ${br};
  }

  :host([disabled]) .content,
  :host([disabled]) .expand-collapse-glyph-container,
  :host([disabled]) ::slotted([slot='end']),
  :host([disabled]) ::slotted([slot='start']) {
    color: ${Zo};
  }

  :host([data-indent]) {
    display: grid;
  }

  :host([data-indent='1']) .content {
    grid-column: 2 / span 1;
  }

  :host([data-indent='1'][role='menuitemcheckbox']) {
    display: grid;
  }

  :host([data-indent='2'][aria-haspopup='menu']) ::slotted([slot='end']) {
    grid-column: 4 / span 1;
  }

  :host([data-indent='2'][aria-haspopup='menu']) .expand-collapse-glyph-container {
    grid-column: 5 / span 1;
  }

  :host([data-indent='1']) .content {
    grid-column: 2 / span 1;
  }

  :host([data-indent='1'][role='menuitemcheckbox']) .content,
  :host([data-indent='1'][role='menuitemradio']) .content {
    grid-column: auto / span 1;
  }

  :host([icon]) ::slotted([slot='end']),
  :host([data-indent='1']) ::slotted([slot='end']) {
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }

  :host([data-indent='2']) {
    display: grid;
    grid-template-columns: 20px 20px auto auto;
  }

  :host([data-indent='2']) .content {
    grid-column: 3 / span 1;
  }

  :host([data-indent='2']) .input-container {
    grid-column: 1 / span 1;
  }

  :host([data-indent='2']) ::slotted([slot='start']) {
    grid-column: 2 / span 1;
  }

  :host([aria-haspopup='menu']) {
    grid-template-columns: 20px auto auto 20px;
  }

  :host([data-indent='2'][aria-haspopup='menu']) {
    grid-template-columns: 20px 20px auto auto 20px;
  }

  :host([aria-haspopup='menu']) ::slotted([slot='end']) {
    grid-column: 3 / span 1;
    justify-self: flex-end;
  }

  :host([data-indent='2'][aria-haspopup='menu']) ::slotted([slot='end']) {
    grid-column: 4 / span 1;
    justify-self: flex-end;
  }
`,Bc=$c.compose({name:`${re.prefix}-menu-item`,template:xc,styles:yc});class wc extends D{setItems(){var e;super.setItems();const o=null===(e=this.menuItems)||void 0===e?void 0:e.filter(this.isMenuItemElement);null==o||o.forEach(((e,t)=>{const r=null==o?void 0:o.reduce(((e,o)=>{const t=wc.elementIndent(o);return Math.max(e,t)}),0);e instanceof $c&&e.setAttribute("data-indent",`${r}`)}))}static elementIndent(e){const o=e.getAttribute("role"),t=e.querySelector("[slot=start]");return o&&o!==A.menuitem?t?2:1:t?1:0}}const Pc=L(),zc=t`
  ${u("flex")}

  :host {
    flex-direction: column;
    height: fit-content;
    max-width: 300px;
    min-width: 160px;
    width: auto;
    background-color: ${At};
    border: 1px solid ${aa};
    border-radius: ${ue};
    box-shadow: ${cl};
    padding: 4px;
    row-gap: 2px;
  }
`,Sc=wc.compose({name:`${re.prefix}-menu-list`,template:Pc,styles:zc});var Fc=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Nc extends O{constructor(){super(...arguments),this.validationState=null}}Fc([r],Nc.prototype,"thickness",void 0),Fc([r],Nc.prototype,"shape",void 0),Fc([r({attribute:"validation-state"})],Nc.prototype,"validationState",void 0);const Cc={medium:"medium",large:"large"},Ac={rounded:"rounded",square:"square"},Dc={success:"success",warning:"warning",error:"error"},Lc=t`
  ${u("flex")}

  :host {
    align-items: center;
    height: 2px;
    overflow-x: hidden;
    border-radius: ${ue};
    contain: content;
  }

  :host([thickness='large']),
  :host([thickness='large']) .progress,
  :host([thickness='large']) .determinate {
    height: 4px;
  }

  :host([shape='square']),
  :host([shape='square']) .progress,
  :host([shape='square']) .determinate {
    border-radius: 0;
  }

  :host([validation-state='error']) .determinate {
    background-color: ${$a};
  }

  :host([validation-state='error']) .indeterminate-indicator-1,
  :host([validation-state='error']) .indeterminate-indicator-2 {
    background: linear-gradient(
      to right,
      ${va} 0%,
      ${$a} 50%,
      ${va}
    );
  }

  :host([validation-state='warning']) .determinate {
    background-color: ${Ra};
  }

  :host([validation-state='warning']) .indeterminate-indicator-1,
  :host([validation-state='warning']) .indeterminate-indicator-2 {
    background: linear-gradient(
      to right,
      ${Ha} 0%,
      ${Ra} 50%,
      ${Ha}
    );
  }

  :host([validation-state='success']) .determinate {
    background-color: ${Fa};
  }

  :host([validation-state='success']) .indeterminate-indicator-1,
  :host([validation-state='success']) .indeterminate-indicator-2 {
    background: linear-gradient(
      to right,
      ${Sa} 0%,
      ${Fa} 50%,
      ${Sa}
    );
  }

  .progress {
    background-color: ${Zt};
    border-radius: ${ue};
    width: 100%;
    height: 2px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .determinate {
    background-color: ${Sr};
    border-radius: ${ue};
    height: 2px;
    transition: all 0.2s ease-in-out;
    display: flex;
  }

  .indeterminate-indicator-1 {
    position: absolute;
    opacity: 0;
    height: 100%;
    background: linear-gradient(
      to right,
      ${Ar} 0%,
      ${Sr} 50%,
      ${Ar}
    );
    border-radius: ${ue};
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    width: 40%;
    animation: indeterminate-1 3s infinite;
  }

  .indeterminate-indicator-2 {
    position: absolute;
    opacity: 0;
    height: 100%;
    background: linear-gradient(
      to right,
      ${Ar} 0%,
      ${Sr} 50%,
      ${Ar}
    );
    border-radius: ${ue};
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
    width: 60%;
    animation: indeterminate-2 3s infinite;
  }

  @keyframes indeterminate-1 {
    0% {
      opacity: 1;
      transform: translateX(-100%);
    }
    70% {
      opacity: 1;
      transform: translateX(300%);
    }
    70.01% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: translateX(300%);
    }
  }
  @keyframes indeterminate-2 {
    0% {
      opacity: 0;
      transform: translateX(-150%);
    }
    29.99% {
      opacity: 0;
    }
    30% {
      opacity: 1;
      transform: translateX(-150%);
    }
    100% {
      transform: translateX(166.66%);
      opacity: 1;
    }
  }
`.withBehaviors(p(t`
    .progress {
      background-color: HighlightText;
    }
    .determinate,
    :host([validation-state='success']) .determinate,
    :host([validation-state='warning']) .determinate,
    :host([validation-state='error']) .determinate,
    :host([validation-state='success']) ..indeterminate-indicator-1,
    :host([validation-state='success']) ..indeterminate-indicator-2,
    :host([validation-state='warning']) .indeterminate-indicator-1,
    :host([validation-state='warning']) .indeterminate-indicator-2,
    :host([validation-state='error']) .indeterminate-indicator-1,
    :host([validation-state='error']) .indeterminate-indicator-2 {
      background-color: Highlight;
    }
  `)),Oc=T({indeterminateIndicator1:'<span class="indeterminate-indicator-1" part="indeterminate-indicator-1></span>',indeterminateIndicator2:'<span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>'}),Tc=Nc.compose({name:`${re.prefix}-progress-bar`,template:Oc,styles:Lc});class Hc extends H{}const Rc=t`
  ${u("inline-grid")}

  :host {
    grid-auto-flow: column;
    grid-template-columns: max-content;
    gap: ${Ue};
    align-items: center;
    height: 32px;
    cursor: pointer;
    outline: none;
    position: relative;
    user-select: none;
    color: blue;
    color: var(--state-color, ${_o});
    padding-inline-end: ${Ze};
    --control-border-color: ${Hr};
    --checked-indicator-background-color: ${lt};
    --state-color: ${_o};
  }
  :host([disabled]) {
    --control-border-color: ${Zo};
    --checked-indicator-background-color: ${Zo};
    --state-color: ${Zo};
  }
  .label {
    cursor: pointer;
    font-family: ${He};
    font-size: ${ve};
    font-weight: ${Ie};
    line-height: ${Fe};
  }
  .label__hidden {
    display: none;
  }
  .control {
    box-sizing: border-box;
    align-items: center;
    border: 1px solid var(--control-border-color, ${Hr});
    border-radius: ${be};
    display: flex;
    height: 16px;
    justify-content: center;
    margin: ${so} ${Ze};
    position: relative;
    width: 16px;
    justify-self: center;
  }
  .checked-indicator {
    border-radius: ${be};
    height: 10px;
    opacity: 0;
    width: 10px;
  }
  :host([aria-checked='false']:hover) .control {
    color: ${Ho};
  }
  :host(:focus-visible) {
    border-radius: ${he};
    box-shadow: 0 0 0 3px ${sa};
    outline: 1px solid ${la};
  }
  :host(:hover) .control {
    border-color: ${Rr};
  }
  :host(:active) .control {
    border-color: ${jr};
  }
  :host([aria-checked='true']) .checked-indicator {
    opacity: 1;
  }
  :host([aria-checked='true']) .control {
    border-color: var(--control-border-color, ${Hr});
  }
  :host([aria-checked='true']) .checked-indicator {
    background-color: var(--checked-indicator-background-color, ${lt});
  }
  :host([aria-checked='true']:hover) .control {
    border-color: ${ea};
  }
  :host([aria-checked='true']:hover) .checked-indicator {
    background-color: ${ea};
  }
  :host([aria-checked='true']:active) .control {
    border-color: ${oa};
  }
  :host([aria-checked='true']:active) .checked-indicator {
    background: ${ct};
  }
  :host([disabled]) {
    color: ${Zo};
    pointer-events: none;
  }
  :host([disabled]) .control {
    pointer-events: none;
    border-color: ${Zo};
  }
  :host([disabled]) .checked-indicator {
    background: ${Zo};
  }
`.withBehaviors(p(t`
    :host .control {
      border-color: InactiveBorder;
    }
    :host([aria-checked='true']) .checked-indicator,
    :host([aria-checked='true']:active) .checked-indicator,
    :host([aria-checked='true']:hover) .checked-indicator {
      background-color: Highlight;
      border-color: ActiveBorder;
    }
  `)),jc=R({checkedIndicator:a`<div part="checked-indicator" class="checked-indicator"></div>`}),Ic=Hc.compose({name:`${re.prefix}-radio`,template:jc,styles:Rc});var Mc=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Gc extends j{constructor(){super(...arguments),this.stacked=!1}}Mc([r({mode:"boolean"})],Gc.prototype,"stacked",void 0);const Xc=t`
  ${u("flex")}

  :host {
    align-items: flex-start;
    flex-direction: column;
    row-gap: ${so};
  }
  :host([disabled]) ::slotted([role='radio']) {
    --control-border-color: ${Zo};
    --checked-indicator-background-color: ${Zo};
    --state-color: ${Zo};
  }
  ::slotted([slot='label']) {
    color: ${Do};
    padding: ${so} ${Ze} ${so} ${Ue};
    font: ${Ie} ${ve} / ${Fe} ${He};
    cursor: default;
  }
  .positioning-region {
    display: flex;
    flex-wrap: wrap;
  }
  :host([orientation='vertical']) .positioning-region {
    flex-direction: column;
    justify-content: flex-start;
  }
  :host([orientation='horizontal']) .positioning-region {
    flex-direction: row;
  }
  :host([orientation='horizontal']) ::slotted([role='radio']) {
    padding-inline-end: ${Ze};
  }
  :host([orientation='horizontal'][stacked]) ::slotted([role='radio']) {
    display: flex;
    flex-direction: column;
    padding-inline: ${Ze};
    height: auto;
    align-items: center;
    justify-content: center;
  }
  :host([disabled]) ::slotted([role='radio']) {
    pointer-events: none;
  }
`,_c=I(),qc=Gc.compose({name:`${re.prefix}-radio-group`,template:_c,styles:Xc});var Vc=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Yc extends M{handleChange(e,o){switch(o){case"min":case"max":case"step":this.handleStepStyles()}}connectedCallback(){super.connectedCallback(),d.getNotifier(this).subscribe(this,"max"),d.getNotifier(this).subscribe(this,"min"),d.getNotifier(this).subscribe(this,"step"),this.handleStepStyles()}disconnectedCallback(){super.disconnectedCallback(),d.getNotifier(this).unsubscribe(this,"max"),d.getNotifier(this).unsubscribe(this,"min"),d.getNotifier(this).unsubscribe(this,"step")}handleStepStyles(){if(this.step){const e=100/Math.floor((this.max-this.min)/this.step);void 0!==this.stepStyles&&this.$fastController.removeStyles(this.stepStyles),this.stepStyles=t`
        :host {
          --step-rate: ${e}%;
          color: blue;
        }
      `,this.$fastController.addStyles(this.stepStyles)}else void 0!==this.stepStyles&&this.$fastController.removeStyles(this.stepStyles)}}Vc([r],Yc.prototype,"size",void 0);const Ec={small:"small",medium:"medium"},Wc=t`
  ${u("inline-grid")} :host {
    --thumb-size: 18px;
    --thumb-padding: 3px;
    --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
    --track-overhang: -2px;
    --track-width: 4px;
    --fast-slider-height: calc(var(--thumb-size) * 10);
    --slider-direction: 90deg;
    align-items: center;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    user-select: none;
    border-radius: ${he};
    touch-action: pan-y;
    min-width: calc(var(--thumb-size) * 1px);
    width: 100%;
  }

  :host([size='small']) {
    --thumb-size: 14px;
    --track-width: 2px;
    --thumb-padding: 3px;
  }

  :host([orientation='vertical']) {
    --slider-direction: 0deg;
    height: 160px;
    min-height: var(--thumb-size);
    touch-action: pan-x;
    padding: 8px 0;
    width: auto;
    min-width: auto;
  }

  :host([disabled]:hover) {
    cursor: initial;
  }

  :host(:focus-visible) {
    box-shadow: 0 0 0 2pt ${sa};
    outline: 1px solid ${la};
  }

  .thumb-cursor:focus {
    outline: 0;
  }

  /* Thumb Container and Cursor */
  .thumb-container {
    position: absolute;
    height: var(--thumb-size);
    width: var(--thumb-size);
    transition: all 0.2s ease;
  }

  .thumb-container {
    transform: translateX(calc(var(--thumb-size) * 0.5)) translateY(calc(var(--thumb-translate) * -1.5));
  }

  :host([size='small']) .thumb-container {
    transform: translateX(calc(var(--thumb-size) * 0.5)) translateY(calc(var(--thumb-translate) * -1.35));
  }

  :host([orientation='vertical']) .thumb-container {
    transform: translateX(calc(var(--thumb-translate) * -1.5)) translateY(calc(var(--thumb-size) * -0.5));
  }

  :host([orientation='vertical'][size='small']) .thumb-container {
    transform: translateX(calc(var(--thumb-translate) * -1.35)) translateY(calc(var(--thumb-size) * -0.5));
  }

  .thumb-cursor {
    height: var(--thumb-size);
    width: var(--thumb-size);
    background-color: ${Br};
    border-radius: ${be};
    box-shadow: inset 0 0 0 var(--thumb-padding) ${At}, 0 0 0 1px ${Mr};
  }
  .thumb-cursor:hover {
    background-color: ${Fr};
  }
  .thumb-cursor:active {
    background-color: ${Nr};
  }
  :host([disabled]) .thumb-cursor {
    background-color: ${Zo};
    box-shadow: inset 0 0 0 var(--thumb-padding) ${At}, 0 0 0 1px ${ta};
  }

  /* Positioning Region */
  .positioning-region {
    position: relative;
    display: grid;
  }

  :host([orientation='horizontal']) .positioning-region {
    margin: 0 8px;
    grid-template-rows: var(--thumb-size) var(--thumb-size);
  }
  :host([orientation='vertical']) .positioning-region {
    margin: 8px 0;
    height: 100%;
    grid-template-columns: var(--thumb-size) var(--thumb-size);
  }

  /* Track */
  .track {
    align-self: start;
    position: absolute;
    background-color: ${Hr};
    border-radius: ${ue};
    overflow: hidden;
  }

  :host([step]) .track::after {
    content: '';
    position: absolute;
    border-radius: ${ue};
    width: 100%;
    inset: 0 2px;
    background-image: repeating-linear-gradient(
      var(--slider-direction),
      #0000 0%,
      #0000 calc(var(--step-rate) - 1px),
      ${At} calc(var(--step-rate) - 1px),
      ${At} var(--step-rate)
    );
  }

  :host([orientation='vertical'][step]) .track::after {
    inset: -2px 0;
  }

  :host([disabled]) .track {
    background-color: ${br};
  }

  :host([orientation='horizontal']) .track {
    right: var(--track-overhang);
    left: var(--track-overhang);
    align-self: start;
    height: var(--track-width);
    grid-row: 2 / auto;
  }

  :host([orientation='vertical']) .track {
    top: var(--track-overhang);
    bottom: var(--track-overhang);
    width: var(--track-width);
    height: 100%;
    grid-column: 2 / auto;
  }
  .track-start {
    background-color: ${Sr};
    position: absolute;
    height: 100%;
    left: 0;
    border-radius: ${ue};
  }
  :host([disabled]) .track-start {
    background-color: ${Zo};
  }
  :host(:hover) .track-start {
    background-color: ${Fr};
  }
  :host([disabled]:hover) .track-start {
    background-color: ${Zo};
  }
  .track-start:active {
    background-color: ${Nr};
  }
  :host([orientation='vertical']) .track-start {
    height: auto;
    width: 100%;
    bottom: 0;
  }
`.withBehaviors(p(t`
    .track:hover,
    .track:active,
    .track {
      background: WindowText;
    }
    .thumb-cursor:hover,
    .thumb-cursor:active,
    .thumb-cursor {
      background: ButtonText;
    }

    :host(:hover) .track-start,
    .track-start:active,
    .track-start {
      background: Highlight;
    }
  `)),Uc=G({thumb:'<div class="thumb-cursor" tabindex="0"></div>'}),Kc=Yc.compose({name:`${re.prefix}-slider`,template:Uc,styles:Wc});var Zc=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Jc extends X{}Zc([r],Jc.prototype,"size",void 0),Zc([r],Jc.prototype,"appearance",void 0);const Qc={primary:"primary",inverted:"inverted"},ed={tiny:"tiny",extraSmall:"extra-small",small:"small",medium:"medium",large:"large",extraLarge:"extra-large",huge:"huge"},od=_({indeterminateIndicator:'\n    <svg class="progress" part="progress" viewBox="0 0 16 16">\n        <circle\n            class="background"\n            part="background"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n        <circle\n            class="indeterminate-indicator-1"\n            part="indeterminate-indicator-1"\n            cx="8px"\n            cy="8px"\n            r="7px"\n        ></circle>\n    </svg>\n  '}),td=t`
  ${u("flex")}

  :host {
    display: flex;
    align-items: center;
    height: 32px;
    width: 32px;
    contain: content;
  }
  :host([size='tiny']) {
    height: 20px;
    width: 20px;
  }
  :host([size='extra-small']) {
    height: 24px;
    width: 24px;
  }
  :host([size='small']) {
    height: 28px;
    width: 28px;
  }
  :host([size='large']) {
    height: 36px;
    width: 36px;
  }
  :host([size='extra-large']) {
    height: 40px;
    width: 40px;
  }
  :host([size='huge']) {
    height: 44px;
    width: 44px;
  }
  .progress {
    height: 100%;
    width: 100%;
  }

  .background {
    fill: none;
    stroke: ${Jr};
    stroke-width: 1.5px;
  }

  :host([appearance='inverted']) .background {
    stroke: rgba(255, 255, 255, 0.2);
  }

  .determinate {
    stroke: ${Zr};
    fill: none;
    stroke-width: 1.5px;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: all 0.2s ease-in-out;
  }

  :host([appearance='inverted']) .determinite {
    stroke: ${Er};
  }

  .indeterminate-indicator-1 {
    stroke: ${Zr};
    fill: none;
    stroke-width: 1.5px;
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(-90deg);
    transition: all 0.2s ease-in-out;
    animation: spin-infinite 3s cubic-bezier(0.53, 0.21, 0.29, 0.67) infinite;
  }

  :host([appearance='inverted']) .indeterminate-indicator-1 {
    stroke: ${Er};
  }

  @keyframes spin-infinite {
    0% {
      stroke-dasharray: 0.01px 43.97px;
      transform: rotate(0deg);
    }
    50% {
      stroke-dasharray: 21.99px 21.99px;
      transform: rotate(450deg);
    }
    100% {
      stroke-dasharray: 0.01px 43.97px;
      transform: rotate(1080deg);
    }
  }
`,rd=Jc.compose({name:`${re.prefix}-spinner`,template:od,styles:td});var ad=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class nd extends q{}ad([r({attribute:"label-position"})],nd.prototype,"labelPosition",void 0);const id={above:"above",after:"after",before:"before"},ld=V({switch:'<span class="checked-indicator" part="checked-indicator"></span>'}),sd=t`
  ${u("inline-flex")}

  :host {
    align-items: center;
    flex-direction: row-reverse;
    outline: none;
    user-select: none;
    contain: content;
  }
  :host([label-position='before']) {
    flex-direction: row;
  }
  :host([label-position='above']) {
    flex-direction: column;
    align-items: flex-start;
  }
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .switch,
  :host([disabled]) .switch {
    cursor: not-allowed;
  }
  .label {
    position: relative;
    color: ${Do};
    line-height: ${Fe};
    font-size: ${ve};
    font-weight: ${Ie};
    font-family: ${He};
    padding: ${io} ${Ue};
    cursor: pointer;
  }
  .label__hidden {
    display: none;
  }
  .switch {
    display: flex;
    align-items: center;
    padding: 0 ${We};
    box-sizing: border-box;
    width: 40px;
    height: 20px;
    background-color: ${hr};
    border: 1px solid ${Hr};
    border-radius: ${be};
    outline: none;
    cursor: pointer;
    margin: ${so} ${Ze};
  }
  :host(:hover) .switch {
    background: none;
    border-color: ${Rr};
  }
  :host(:active) .switch {
    border-color: ${jr};
  }
  :host([disabled]) .switch,
  :host([readonly]) .switch {
    border: 1px solid ${ta};
    background-color: none;
    pointer: default;
  }
  :host([aria-checked='true']) .switch {
    background: ${Sr};
  }
  :host([aria-checked='true']:hover) .switch {
    background: ${Fr};
    border-color: ${Fr};
  }
  :host([aria-checked='true']:active) .switch {
    background: ${Nr};
    border-color: ${Nr};
  }
  :host([aria-checked='true'][disabled]) .switch {
    background: ${br};
    border-color: ${ta};
  }
  .checked-indicator {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: ${_o};
    transition-duration: ${$o};
    transition-timing-function: ${Co};
    transition-property: transform;
  }
  :host([aria-checked='true']) .checked-indicator {
    background-color: ${gt};
    transform: translateX(20px);
  }
  :host([aria-checked='true']:hover) .checked-indicator {
    background: ${bt};
  }
  :host([aria-checked='true']:active) .checked-indicator {
    background: ${ft};
  }
  :host(:hover) .checked-indicator {
    background-color: ${qo};
  }
  :host(:active) .checked-indicator {
    background-color: ${Vo};
  }
  :host([disabled]) .checked-indicator,
  :host([readonly]) .checked-indicator {
    background: ${Zo};
  }
  :host([aria-checked='true'][disabled]) .checked-indicator {
    background: ${Zo};
  }

  :host(:focus-visible) {
    border-color: ${aa};
    outline: ${qe} solid ${aa};
    box-shadow: ${ll}, 0 0 0 2px ${sa};
  }
`.withBehaviors(p(t`
    .switch {
      border-color: InactiveBorder;
    }
    :host([aria-checked='true']) .switch,
    :host([aria-checked='true']:active) .switch,
    :host([aria-checked='true']:hover) .switch {
      background: Highlight;
      border-color: Highlight;
    }
    .checked-indicator,
    :host(:hover) .checked-indicator,
    :host(:active) .checked-indicator {
      background-color: ActiveCaption;
    }
    :host([aria-checked='true']) .checked-indicator,
    :host([aria-checked='true']:hover) .checked-indicator,
    :host([aria-checked='true']:active) .checked-indicator {
      background-color: ButtonFace;
    }
  `)),cd=nd.compose({name:`${re.prefix}-switch`,template:ld,styles:sd}),dd={subtle:"subtle",transparent:"transparent"},hd={small:"small",medium:"medium",large:"large"};var ud=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class pd extends Y{constructor(){super(...arguments),this.activeTabData={x:0,y:0,height:0,width:0},this.previousActiveTabData={x:0,y:0,height:0,width:0},this.activeTabOffset=0,this.activeTabScale=1,this.appearance=dd.transparent}calculateAnimationProperties(e){this.activeTabOffset=this.getTabPosition(e),this.activeTabScale=this.getTabScale(e)}getTabPosition(e){return this.orientation===E.horizontal?this.previousActiveTabData.x-(e.getBoundingClientRect().x-this.getBoundingClientRect().x):this.previousActiveTabData.y-(e.getBoundingClientRect().y-this.getBoundingClientRect().y)}getTabScale(e){return this.orientation===E.horizontal?this.previousActiveTabData.width/e.getBoundingClientRect().width:this.previousActiveTabData.height/e.getBoundingClientRect().height}applyUpdatedCSSValues(e){this.calculateAnimationProperties(e),this.setTabScaleCSSVar(),this.setTabOffsetCSSVar()}animationLoop(e){e.setAttribute("data-animate","false"),this.applyUpdatedCSSValues(e),this.previousActiveTabData=this.activeTabData,this.applyUpdatedCSSValues(e),e.setAttribute("data-animate","true")}setTabData(){var e,o,t,r;if(this.tabs&&this.tabs.length>0){const a=this.tabs,n=this.activetab||a[0],i=null==n?void 0:n.getBoundingClientRect(),l=this.getBoundingClientRect();this.activeTabData={x:i.x-l.x,y:i.y-l.y,height:i.height,width:i.width},(null===(e=this.previousActiveTabData)||void 0===e?void 0:e.x)!==(null===(o=this.activeTabData)||void 0===o?void 0:o.x)&&(null===(t=this.previousActiveTabData)||void 0===t?void 0:t.y)!==(null===(r=this.activeTabData)||void 0===r?void 0:r.y)&&(this.previousActiveTabData=this.activeTabData)}}setTabOffsetCSSVar(){this.styles=t`
      :host {
        --tabIndicatorOffset: ${this.activeTabOffset.toString()}px;
      }
    `,this.$fastController.addStyles(this.styles)}setTabScaleCSSVar(){this.styles=t`
      :host {
        --tabIndicatorScale: ${this.activeTabScale.toString()};
      }
    `,this.$fastController.addStyles(this.styles)}activeidChanged(e,o){super.activeidChanged(e,o),this.setTabData(),this.activetab&&this.animationLoop(this.activetab)}tabsChanged(){super.tabsChanged(),this.setTabData()}}ud([r],pd.prototype,"appearance",void 0),ud([r({mode:"boolean"})],pd.prototype,"disabled",void 0),ud([r],pd.prototype,"size",void 0);const gd=W({}),bd=t`
  ${u("grid")}

  :host {
    box-sizing: border-box;
    font-family: ${He};
    font-size: ${ve};
    line-height: ${Fe};
    color: ${Ho};
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
  }

  :host([disabled]) {
    cursor: not-allowed;
    color: ${Zo};
  }

  :host([disabled]) ::slotted(fluent-tab) {
    pointer-events: none;
    cursor: not-allowed;
    color: ${Zo};
  }
  :host([disabled]) ::slotted(fluent-tab:after) {
    background-color: ${Zo};
  }
  :host([disabled]) ::slotted(fluent-tab[aria-selected='true'])::after {
    background-color: ${Zo};
  }
  :host([disabled]) ::slotted(fluent-tab:hover):before {
    content: unset;
  }

  :host ::slotted(fluent-tab) {
    border-radius: ${ue};
  }

  :host ::slotted(fluent-tab[aria-selected='true'])::before {
    background-color: ${Zo};
  }

  .tablist {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    position: relative;
    width: max-content;
    align-self: end;
    box-sizing: border-box;
  }
  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
    align-self: center;
  }
  ::slotted([slot='start']) {
    margin-inline-end: 11px;
  }
  ::slotted([slot='end']) {
    margin-inline-start: 11px;
  }

  .tabpanel {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
    position: relative;
  }
  :host([orientation='vertical']) {
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr;
  }
  :host([orientation='vertical']) .tablist {
    grid-row-start: 2;
    grid-row-end: 2;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    position: relative;
    width: max-content;
    justify-self: end;
    align-self: flex-start;
    width: 100%;
  }
  :host([orientation='vertical']) .tabpanel {
    grid-column: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  :host([orientation='vertical']) ::slotted([slot='end']) {
    grid-row: 3;
  }

  :host([appearance='subtle']) ::slotted(fluent-tab:hover) {
    background-color: ${or};
    color: ${Lo};
    fill: ${st};
  }

  :host([appearance='subtle']) ::slotted(fluent-tab:active) {
    background-color: ${tr};
    fill: ${tr};
    color: ${Do};
  }

  :host([size='small']) ::slotted(fluent-tab) {
    font-size: ${ve};
    line-height: ${Fe};
    padding: ${lo} ${Ke};
  }

  :host([size='large']) ::slotted(fluent-tab) {
    font-size: ${$e};
    line-height: ${Ne};
    padding: ${uo} ${Je};
  }

  /* indicator animation  */
  :host ::slotted(fluent-tab[data-animate='true'])::after {
    transition-property: transform;
    transition-duration: ${ko};
    transition-timing-function: ${zo};
  }
  :host ::slotted(fluent-tab)::after {
    height: ${Ve};
    margin-top: auto;
    transform-origin: left;
    transform: translateX(var(--tabIndicatorOffset)) scaleX(var(--tabIndicatorScale));
  }
  :host([orientation='vertical']) ::slotted(fluent-tab)::after {
    width: ${Ve};
    height: unset;
    margin-top: unset;
    transform-origin: top;
    transform: translateY(var(--tabIndicatorOffset)) scaleY(var(--tabIndicatorScale));
  }

  /* ::before adds a secondary indicator placeholder that appears right after click on the active tab */
  :host ::slotted(fluent-tab)::before {
    height: ${Ve};
    border-radius: ${be};
    content: '';
    inset: 0;
    position: absolute;
    margin-top: auto;
  }
  :host([orientation='vertical']) ::slotted(fluent-tab)::before {
    height: unset;
    width: ${Ve};
    margin-inline-end: auto;
    transform-origin: top;
  }

  :host ::slotted(fluent-tab[aria-selected='false']:hover)::after {
    height: ${Ve};
    margin-top: auto;
    transform-origin: left;
  }
  :host([orientation='vertical']) ::slotted(fluent-tab[aria-selected='false']:hover)::after {
    height: unset;
    margin-inline-end: auto;
    transform-origin: top;
    width: ${Ve};
  }

  :host([orientation='vertical']) ::slotted(fluent-tab) {
    align-items: flex-start;
    grid-column: 2;
    padding-top: ${lo};
    padding-bottom: ${lo};
  }
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab) {
    padding-top: ${no};
    padding-bottom: ${no};
  }
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab) {
    padding-top: ${so};
    padding-bottom: ${so};
  }

  /* horizontal spacing for indicator */
  :host([size='small']) ::slotted(fluent-tab)::after,
  :host([size='small']) ::slotted(fluent-tab)::before,
  :host([size='small']) ::slotted(fluent-tab:hover)::after {
    right: ${Ke};
    left: ${Ke};
  }
  :host ::slotted(fluent-tab)::after,
  :host ::slotted(fluent-tab)::before,
  :host ::slotted(fluent-tab:hover)::after {
    right: ${Je};
    left: ${Je};
  }
  :host([size='large']) ::slotted(fluent-tab)::after,
  :host([size='large']) ::slotted(fluent-tab)::before,
  :host([size='large']) ::slotted(fluent-tab:hover)::after {
    right: ${Je};
    left: ${Je};
  }

  /* vertical spacing for indicator */
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab)::after,
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab)::before,
  :host([orientation='vertical'][size='small']) ::slotted(fluent-tab:hover)::after {
    right: 0;
    left: 0;
    top: ${lo};
    bottom: ${lo};
  }
  :host([orientation='vertical']) ::slotted(fluent-tab)::after,
  :host([orientation='vertical']) ::slotted(fluent-tab)::before,
  :host([orientation='vertical']) ::slotted(fluent-tab:hover)::after {
    right: 0;
    left: 0;
    top: ${so};
    bottom: ${so};
  }
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab)::after,
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab)::before,
  :host([orientation='vertical'][size='large']) ::slotted(fluent-tab:hover)::after {
    right: 0;
    left: 0;
    top: ${co};
    bottom: ${co};
  }
`,fd=pd.compose({name:`${re.prefix}-tabs`,template:gd,styles:bd});class md extends U{connectedCallback(){super.connectedCallback(),void 0!==this.styles&&this.$fastController.removeStyles(this.styles),this.styles=t`
      :host {
        --textContent: '${this.textContent}';
      }
    `,this.$fastController.addStyles(this.styles)}}const vd=function(e={}){return a`
    <template slot="tab" role="tab" aria-disabled="${e=>e.disabled}">
      ${x(e)}
      <span class="tab-content"><slot></slot></span>
      ${y(e)}
    </template>
  `}({}),$d=t`
  ${u("inline-flex")}

  :host {
    position: relative;
    flex-direction: column;
    cursor: pointer;
    box-sizing: border-box;
    justify-content: center;
    line-height: ${Fe};
    font-family: ${He};
    font-size: ${ve};
    color: ${Ho};
    fill: currentcolor;
    grid-row: 1;
    padding: ${Qe} ${Je};
    border-radius: ${ue};
  }
  :host .tab-content {
    display: inline-flex;
    flex-direction: column;
    padding: 0 2px;
  }

  :host([aria-selected='true']) {
    color: ${Do};
    font-weight: ${Ge};
  }

  /* adds hidden textContent to prevent shifting ui on bold / unbolding of text */
  :host .tab-content::after {
    content: var(--textContent);
    visibility: hidden;
    height: 0;
    line-height: ${Fe};
    font-weight: ${Ge};
  }

  :host([aria-selected='true'])::after {
    background-color: ${Qr};
    border-radius: ${be};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 2;
  }

  :host([aria-selected='false']:hover)::after {
    background-color: ${Gr};
    border-radius: ${be};
    content: '';
    inset: 0;
    position: absolute;
    z-index: 1;
  }

  :host([aria-selected='true'][disabled])::after {
    background-color: ${Zo};
  }

  ::slotted([slot='start']),
  ::slotted([slot='end']) {
    display: flex;
  }
  ::slotted([slot='start']) {
    margin-inline-end: 11px;
  }
  ::slotted([slot='end']) {
    margin-inline-start: 11px;
  }
  :host([disabled]) {
    cursor: not-allowed;
    fill: ${Zo};
    color: ${Zo};
  }

  :host([disabled]:hover)::after {
    background-color: unset;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    border-radius: ${he};
    box-shadow: 0 0 0 3px ${sa};
    outline: 1px solid ${la};
  }
`.withBehaviors(p(t`
    :host([aria-selected='true'])::after {
      background-color: Highlight;
    }
  `)),kd=md.compose({name:`${re.prefix}-tab`,template:vd,styles:$d});class xd extends K{}const yd=Z(),Bd=t`
  ${u("block")}

  :host {
    box-sizing: border-box;
    padding: ${Qe} ${Je};
  }
`,wd=xd.compose({name:`${re.prefix}-tab-panel`,template:yd,styles:Bd});var Pd=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class zd extends i{constructor(){super(...arguments),this.nowrap=!1,this.truncate=!1,this.italic=!1,this.underline=!1,this.strikethrough=!1,this.block=!1}}Pd([r({mode:"boolean"})],zd.prototype,"nowrap",void 0),Pd([r({mode:"boolean"})],zd.prototype,"truncate",void 0),Pd([r({mode:"boolean"})],zd.prototype,"italic",void 0),Pd([r({mode:"boolean"})],zd.prototype,"underline",void 0),Pd([r({mode:"boolean"})],zd.prototype,"strikethrough",void 0),Pd([r({mode:"boolean"})],zd.prototype,"block",void 0),Pd([r],zd.prototype,"size",void 0),Pd([r],zd.prototype,"font",void 0),Pd([r],zd.prototype,"weight",void 0),Pd([r],zd.prototype,"align",void 0);const Sd={_100:"100",_200:"200",_300:"300",_400:"400",_500:"500",_600:"600",_700:"700",_800:"800",_900:"900",_1000:"1000"},Fd={base:"base",numeric:"numeric",monospace:"monospace"},Nd={medium:"medium",regular:"regular",semibold:"semibold",bold:"bold"},Cd={start:"start",end:"end",center:"center",justify:"justify"},Ad=a`<slot></slot>`,Dd=t`
  ${u("inline")}

  :host {
    contain: content;
  }

  ::slotted(*) {
    font-family: ${He};
    font-size: ${ve};
    line-height: ${Fe};
    font-weight: ${Ie};
    text-align: start;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    margin: 0;
    display: inline;
  }

  :host([nowrap]) ::slotted(*) {
    white-space: nowrap;
    overflow: hidden;
  }
  :host([truncate]) ::slotted(*) {
    text-overflow: ellipsis;
  }
  :host([block]),
  :host([block]) ::slotted(*) {
    display: block;
  }
  :host([italic]) ::slotted(*) {
    font-style: italic;
  }
  :host([underline]) ::slotted(*) {
    text-decoration-line: underline;
  }
  :host([strikethrough]) ::slotted(*) {
    text-decoration-line: line-through;
  }
  :host([underline][strikethrough]) ::slotted(*) {
    text-decoration-line: line-through underline;
  }
  :host([size='100']) ::slotted(*) {
    font-size: ${fe};
    line-height: ${ze};
  }
  :host([size='200']) ::slotted(*) {
    font-size: ${me};
    line-height: ${Se};
  }
  :host([size='400']) ::slotted(*) {
    font-size: ${$e};
    line-height: ${Ne};
  }
  :host([size='500']) ::slotted(*) {
    font-size: ${ke};
    line-height: ${Ce};
  }
  :host([size='600']) ::slotted(*) {
    font-size: ${xe};
    line-height: ${Ae};
  }
  :host([size='700']) ::slotted(*) {
    font-size: ${ye};
    line-height: ${De};
  }
  :host([size='800']) ::slotted(*) {
    font-size: ${Be};
    line-height: ${Le};
  }
  :host([size='900']) ::slotted(*) {
    font-size: ${we};
    line-height: ${Oe};
  }
  :host([size='1000']) ::slotted(*) {
    font-size: ${Pe};
    line-height: ${Te};
  }
  :host([font='monospace']) ::slotted(*) {
    font-family: ${Re};
  }
  :host([font='numeric']) ::slotted(*) {
    font-family: ${je};
  }
  :host([weight='medium']) ::slotted(*) {
    font-weight: ${Me};
  }
  :host([weight='semibold']) ::slotted(*) {
    font-weight: ${Ge};
  }
  :host([weight='bold']) ::slotted(*) {
    font-weight: ${Xe};
  }
  :host([align='center']) ::slotted(*) {
    text-align: center;
  }
  :host([align='end']) ::slotted(*) {
    text-align: end;
  }
  :host([align='justify']) ::slotted(*) {
    text-align: justify;
  }
`,Ld=zd.compose({name:`${re.prefix}-text`,template:Ad,styles:Dd});var Od=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Td extends J{}Od([r({attribute:"control-size"})],Td.prototype,"controlSize",void 0),Od([r],Td.prototype,"appearance",void 0);const Hd={small:"small",medium:"medium",large:"large"},Rd={outline:"outline",underline:"underline",filledLighter:"filled-lighter",filledDarker:"filled-darker"},jd=Q(),Id=t`
  ${u("block")}

  :host {
    font-family: ${He};
    font-size: ${ve};
    font-weight: ${Ie};
    line-height: ${Fe};
    max-width: 400px;
  }
  .label {
    display: flex;
    color: ${Do};
    padding-bottom: ${io};
    flex-shrink: 0;
    padding-inline-end: ${Ue};
  }
  .label__hidden {
    display: none;
  }
  .root {
    position: relative;
    box-sizing: border-box;
    height: 32px;
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0 ${Je};
    border: ${_e} solid ${Mr};
    border-bottom-color: ${Hr};
    border-radius: ${ue};
    gap: ${We};
  }
  .root::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: -1px;
    bottom: 0px;
    right: -1px;
    height: max(2px, ${ue});
    border-radius: 0 0 ${ue} ${ue};
    border-bottom: 2px solid ${Qr};
    clip-path: inset(calc(100% - 2px) 1px 0px);
    transform: scaleX(0);
    transition-property: transform;
    transition-duration: ${fo};
    transition-delay: ${wo};
  }
  .control {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: ${Do};
    border-radius: ${ue};
    background: ${hr};
    font-family: ${He};
    font-weight: ${Ie};
    font-size: ${ve};
    border: none;
    background: transparent;
    vertical-align: center;
  }
  .control:focus-visible {
    outline: 0;
    border: 0;
  }
  .control::placeholder {
    color: ${Ko};
  }
  :host ::slotted([slot='start']),
  :host ::slotted([slot='end']) {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${_o};
    font-size: ${ke};
  }
  :host ::slotted([slot='start']) {
    padding-right: ${We};
  }
  :host ::slotted([slot='end']) {
    padding-left: ${We};
    gap: ${Ue};
  }
  :host(:hover) .root {
    border-color: ${Gr};
    border-bottom-color: ${Rr};
  }
  :host(:active) .root {
    border-color: ${Xr};
  }
  :host(:focus-within) .root {
    outline: transparent solid 2px;
    border-bottom: 0;
  }
  :host(:focus-within) .root::after {
    transform: scaleX(1);
    transition-property: transform;
    transition-duration: ${$o};
    transition-delay: ${So};
  }
  :host(:focus-within:active) .root:after {
    border-bottom-color: ${oa};
  }
  :host([appearance='outline']:focus-within) .root {
    border: ${_e} solid ${Mr};
  }
  :host(:focus-within) .control {
    color: ${Do};
  }
  :host([disabled]) .root {
    background: ${hr};
    border: ${_e} solid ${ta};
  }
  :host([disabled]) .control::placeholder,
  :host([disabled]) ::slotted([slot='start']),
  :host([disabled]) ::slotted([slot='end']) {
    color: ${Zo};
  }
  ::selection {
    color: ${gt};
    background-color: ${Jt};
  }
  :host([control-size='small']) .control {
    font-size: ${me};
    font-weight: ${Ie};
    line-height: ${Se};
  }
  :host([control-size='small']) .root {
    height: 24px;
    gap: ${We};
    padding: 0 ${Ke};
  }
  :host([control-size='small']) ::slotted([slot='start']),
  :host([control-size='small']) ::slotted([slot='end']) {
    font-size: ${$e};
  }
  :host([control-size='large']) .control {
    font-size: ${$e};
    font-weight: ${Ie};
    line-height: ${Ne};
  }
  :host([control-size='large']) .root {
    height: 40px;
    gap: ${Ze};
    padding: 0 ${Qe};
  }
  :host([control-size='large']) ::slotted([slot='start']),
  :host([control-size='large']) ::slotted([slot='end']) {
    font-size: ${xe};
  }
  :host([appearance='underline']) .root {
    background: ${hr};
    border: 0;
    border-radius: 0;
    border-bottom: ${_e} solid ${Hr};
  }
  :host([appearance='underline']:hover) .root {
    border-bottom-color: ${Rr};
  }
  :host([appearance='underline']:active) .root {
    border-bottom-color: ${jr};
  }
  :host([appearance='underline']:focus-within) .root {
    border: 0;
    border-bottom-color: ${jr};
  }
  :host([appearance='underline'][disabled]) .root {
    border-bottom-color: ${ta};
  }
  :host([appearance='filled-lighter']) .root,
  :host([appearance='filled-darker']) .root {
    border: ${_e} solid ${aa};
    box-shadow: ${il};
  }
  :host([appearance='filled-lighter']) .root {
    background: ${At};
  }
  :host([appearance='filled-darker']) .root {
    background: ${It};
  }
  :host([appearance='filled-lighter']:hover) .root,
  :host([appearance='filled-darker']:hover) .root {
    border-color: ${na};
  }
  :host([appearance='filled-lighter']:active) .root,
  :host([appearance='filled-darker']:active) .root {
    border-color: ${na};
    background: ${It};
  }
`,Md=Td.compose({name:`${re.prefix}-text-input`,template:jd,styles:Id});var Gd=function(e,o,t,r){var a,n=arguments.length,i=n<3?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,r);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(i=(n<3?a(i):n>3?a(o,t,i):a(o,t))||i);return n>3&&i&&Object.defineProperty(o,t,i),i};class Xd extends xs{constructor(){super(),this.dirtyChecked=!1,this.checkedAttribute=!1,this.defaultChecked=!1,this.checked=!1,this.currentChecked=!1,this.handleToggleButtonClick=e=>{this.disabled||this.disabledFocusable||(this.checked=!this.checked)},this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,o){this.$fastController.isConnected&&(this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.setAttribute("aria-pressed",`${this.currentChecked}`),void 0!==e&&this.$emit("change"))}currentCheckedChanged(e,o){this.checked=this.currentChecked}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleToggleButtonClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleToggleButtonClick)}}Gd([r({attribute:"checked",mode:"boolean"})],Xd.prototype,"checkedAttribute",void 0),Gd([h],Xd.prototype,"defaultChecked",void 0),Gd([h],Xd.prototype,"checked",void 0),Gd([r({attribute:"current-checked",mode:"boolean"})],Xd.prototype,"currentChecked",void 0);const _d=wl,qd=Pl,Vd=zl,Yd=w(),Ed=t`
  ${Al}

  :host([aria-pressed="true"]) .control {
    border-color: ${Mr};
    background-color: ${Ot};
    color: ${Do};
    border-width: ${_e};
  }

  :host([aria-pressed='true']:hover) .control {
    border-color: ${Gr};
    background-color: ${Dt};
  }

  :host([aria-pressed='true']:active) .control {
    border-color: ${Xr};
    background-color: ${Lt};
  }

  :host([aria-pressed='true'][appearance='primary']) .control {
    border-color: transparent;
    background-color: ${zr};
    color: ${$t};
  }

  :host([aria-pressed='true'][appearance='primary']:hover) .control {
    background-color: ${wr};
  }

  :host([aria-pressed='true'][appearance='primary']:active) .control {
    background-color: ${Pr};
  }

  :host([aria-pressed='true'][appearance='subtle']) .control {
    border-color: transparent;
    background-color: ${rr};
    color: ${Io};
  }

  :host([aria-pressed='true'][appearance='subtle']:hover) .control {
    background-color: ${or};
    color: ${Ro};
  }

  :host([aria-pressed='true'][appearance='subtle']:active) .control {
    background-color: ${tr};
    color: ${jo};
  }

  :host([aria-pressed='true'][appearance='outline']) .control,
  :host([aria-pressed='true'][appearance='transparent']) .control {
    background-color: ${gr};
  }

  :host([aria-pressed='true'][appearance='outline']:hover) .control,
  :host([aria-pressed='true'][appearance='transparent']:hover) .control {
    background-color: ${ur};
  }

  :host([aria-pressed='true'][appearance='outline']:active) .control,
  :host([aria-pressed='true'][appearance='transparent']:active) .control {
    background-color: ${pr};
  }

  :host([aria-pressed='true'][appearance='transparent']) .control {
    border-color: transparent;
    color: ${Xo};
  }

  :host([aria-pressed='true'][appearance='transparent']:hover) .control {
    color: ${Mo};
  }

  :host([aria-pressed='true'][appearance='transparent']:active) .control {
    color: ${Go};
  }
`.withBehaviors(p(t`
    :host([aria-pressed='true']) .control,
    :host([aria-pressed='true'][appearance='primary']) .control,
    :host([aria-pressed='true'][appearance='subtle']) .control,
    :host([aria-pressed='true'][appearance='outline']) .control,
    :host([aria-pressed='true'][appearance='transparent']) .control,
    :host([aria-pressed='true'][appearance='transparent']) .control {
      background: SelectedItem;
      color: SelectedItemText;
    }
  `)),Wd=Xd.compose({name:`${re.prefix}-toggle-button`,template:Yd,styles:Ed,shadowOptions:{delegatesFocus:!0}}),Ud=Object.keys(vl),Kd=e=>{for(const o of Ud)vl[o].withDefault(e[o])},Zd=(e,o)=>{for(const t of Ud)vl[t].setValueFor(e,o[t])};export{ee as Accordion,ie as AccordionItem,se as AccordionItemExpandIconPosition,le as AccordionItemSize,Bl as AnchorButton,Sl as AnchorButtonAppearance,Ll as AnchorButtonDefinition,Fl as AnchorButtonShape,Nl as AnchorButtonSize,Cl as AnchorButtonTemplate,El as Avatar,Ml as AvatarActive,Xl as AvatarAppearance,ql as AvatarColor,os as AvatarDefinition,_l as AvatarNamedColor,Gl as AvatarShape,Vl as AvatarSize,es as AvatarStyles,Kl as AvatarTemplate,ss as Badge,rs as BadgeAppearance,as as BadgeColor,$s as BadgeDefinition,ns as BadgeShape,is as BadgeSize,vs as BadgeStyles,ds as BadgeTemplate,xs as Button,wl as ButtonAppearance,Bs as ButtonDefinition,Pl as ButtonShape,zl as ButtonSize,Al as ButtonStyles,ys as ButtonTemplate,Ps as Checkbox,As as CheckboxDefinition,Fs as CheckboxLabelPosition,zs as CheckboxShape,Ss as CheckboxSize,Cs as CheckboxStyles,Ns as CheckboxTemplate,Ds as CompoundButton,Ls as CompoundButtonAppearance,js as CompoundButtonDefinition,Os as CompoundButtonShape,Ts as CompoundButtonSize,Rs as CompoundButtonStyles,Hs as CompoundButtonTemplate,Ms as CounterBadge,Gs as CounterBadgeAppearance,Xs as CounterBadgeColor,Es as CounterBadgeDefinition,_s as CounterBadgeShape,qs as CounterBadgeSize,Ys as CounterBadgeStyles,Vs as CounterBadgeTemplate,Us as Divider,Ks as DividerAlignContent,Zs as DividerAppearance,ec as DividerDefinition,Qs as DividerStyles,Js as DividerTemplate,re as FluentDesignSystem,tc as Image,lc as ImageDefinition,rc as ImageFit,ac as ImageShape,ic as ImageStyles,nc as ImageTemplate,cc as Label,uc as LabelDefinition,dc as LabelStyles,hc as LabelTemplate,pc as MenuButton,gc as MenuButtonAppearance,vc as MenuButtonDefinition,bc as MenuButtonShape,fc as MenuButtonSize,Al as MenuButtonStyles,mc as MenuButtonTemplate,$c as MenuItem,Bc as MenuItemDefinition,yc as MenuItemStyles,xc as MenuItemTemplate,wc as MenuList,Sc as MenuListDefinition,zc as MenuListStyles,Pc as MenuListTemplate,Nc as ProgressBar,Tc as ProgressBarDefinition,Ac as ProgressBarShape,Lc as ProgressBarStyles,Oc as ProgressBarTemplate,Cc as ProgressBarThickness,Dc as ProgressBarValidationState,Hc as Radio,Ic as RadioDefinition,Gc as RadioGroup,qc as RadioGroupDefinition,Xc as RadioGroupStyles,_c as RadioGroupTemplate,Rc as RadioStyles,jc as RadioTemplate,Yc as Slider,Kc as SliderDefinition,Ec as SliderSize,Wc as SliderStyles,Uc as SliderTemplate,Jc as Spinner,Qc as SpinnerAppearance,rd as SpinnerDefinition,ed as SpinnerSize,td as SpinnerStyles,od as SpinnerTemplate,nd as Switch,cd as SwitchDefinition,id as SwitchLabelPosition,sd as SwitchStyles,ld as SwitchTemplate,md as Tab,kd as TabDefinition,xd as TabPanel,wd as TabPanelDefinition,Bd as TabPanelStyles,yd as TabPanelTemplate,$d as TabStyles,vd as TabTemplate,pd as Tabs,dd as TabsAppearance,fd as TabsDefinition,hd as TabsSize,bd as TabsStyles,gd as TabsTemplate,zd as Text,Cd as TextAlign,Ld as TextDefinition,Fd as TextFont,Td as TextInput,Rd as TextInputAppearance,Hd as TextInputControlSize,Md as TextInputDefinition,Id as TextInputStyles,jd as TextInputTemplate,Sd as TextSize,Dd as TextStyles,Ad as TextTemplate,Nd as TextWeight,Xd as ToggleButton,_d as ToggleButtonAppearance,Wd as ToggleButtonDefinition,qd as ToggleButtonShape,Vd as ToggleButtonSize,Ed as ToggleButtonStyles,Yd as ToggleButtonTemplate,ae as accordionDefinition,xl as accordionItemDefinition,$l as accordionItemStyles,kl as accordionItemTemplate,te as accordionStyles,oe as accordionTemplate,be as borderRadiusCircular,pe as borderRadiusLarge,ue as borderRadiusMedium,de as borderRadiusNone,he as borderRadiusSmall,ge as borderRadiusXLarge,xr as colorBackgroundOverlay,Br as colorBrandBackground,Ar as colorBrandBackground2,wr as colorBrandBackgroundHover,Dr as colorBrandBackgroundInverted,Lr as colorBrandBackgroundInvertedHover,Or as colorBrandBackgroundInvertedPressed,Tr as colorBrandBackgroundInvertedSelected,Pr as colorBrandBackgroundPressed,zr as colorBrandBackgroundSelected,Cr as colorBrandBackgroundStatic,dt as colorBrandForeground1,ht as colorBrandForeground2,wt as colorBrandForegroundInverted,Pt as colorBrandForegroundInvertedHover,zt as colorBrandForegroundInvertedPressed,Qo as colorBrandForegroundLink,et as colorBrandForegroundLinkHover,ot as colorBrandForegroundLinkPressed,tt as colorBrandForegroundLinkSelected,St as colorBrandForegroundOnLight,Ft as colorBrandForegroundOnLightHover,Nt as colorBrandForegroundOnLightPressed,Ct as colorBrandForegroundOnLightSelected,ba as colorBrandShadowAmbient,fa as colorBrandShadowKey,Zr as colorBrandStroke1,Jr as colorBrandStroke2,Sr as colorCompoundBrandBackground,Fr as colorCompoundBrandBackgroundHover,Nr as colorCompoundBrandBackgroundPressed,lt as colorCompoundBrandForeground1,st as colorCompoundBrandForeground1Hover,ct as colorCompoundBrandForeground1Pressed,Qr as colorCompoundBrandStroke,ea as colorCompoundBrandStrokeHover,oa as colorCompoundBrandStrokePressed,At as colorNeutralBackground1,Dt as colorNeutralBackground1Hover,Lt as colorNeutralBackground1Pressed,Ot as colorNeutralBackground1Selected,Tt as colorNeutralBackground2,Ht as colorNeutralBackground2Hover,Rt as colorNeutralBackground2Pressed,jt as colorNeutralBackground2Selected,It as colorNeutralBackground3,Mt as colorNeutralBackground3Hover,Gt as colorNeutralBackground3Pressed,Xt as colorNeutralBackground3Selected,_t as colorNeutralBackground4,qt as colorNeutralBackground4Hover,Vt as colorNeutralBackground4Pressed,Yt as colorNeutralBackground4Selected,Et as colorNeutralBackground5,Wt as colorNeutralBackground5Hover,Ut as colorNeutralBackground5Pressed,Kt as colorNeutralBackground5Selected,Zt as colorNeutralBackground6,br as colorNeutralBackgroundDisabled,Jt as colorNeutralBackgroundInverted,fr as colorNeutralBackgroundInvertedDisabled,Qt as colorNeutralBackgroundStatic,Do as colorNeutralForeground1,Lo as colorNeutralForeground1Hover,Oo as colorNeutralForeground1Pressed,To as colorNeutralForeground1Selected,ut as colorNeutralForeground1Static,Ho as colorNeutralForeground2,Mo as colorNeutralForeground2BrandHover,Go as colorNeutralForeground2BrandPressed,Xo as colorNeutralForeground2BrandSelected,Ro as colorNeutralForeground2Hover,rt as colorNeutralForeground2Link,at as colorNeutralForeground2LinkHover,nt as colorNeutralForeground2LinkPressed,it as colorNeutralForeground2LinkSelected,jo as colorNeutralForeground2Pressed,Io as colorNeutralForeground2Selected,_o as colorNeutralForeground3,Eo as colorNeutralForeground3BrandHover,Wo as colorNeutralForeground3BrandPressed,Uo as colorNeutralForeground3BrandSelected,qo as colorNeutralForeground3Hover,Vo as colorNeutralForeground3Pressed,Yo as colorNeutralForeground3Selected,Ko as colorNeutralForeground4,Zo as colorNeutralForegroundDisabled,gt as colorNeutralForegroundInverted,vt as colorNeutralForegroundInverted2,Jo as colorNeutralForegroundInvertedDisabled,bt as colorNeutralForegroundInvertedHover,kt as colorNeutralForegroundInvertedLink,xt as colorNeutralForegroundInvertedLinkHover,yt as colorNeutralForegroundInvertedLinkPressed,Bt as colorNeutralForegroundInvertedLinkSelected,ft as colorNeutralForegroundInvertedPressed,mt as colorNeutralForegroundInvertedSelected,$t as colorNeutralForegroundOnBrand,pt as colorNeutralForegroundStaticInverted,ca as colorNeutralShadowAmbient,pa as colorNeutralShadowAmbientDarker,ha as colorNeutralShadowAmbientLighter,da as colorNeutralShadowKey,ga as colorNeutralShadowKeyDarker,ua as colorNeutralShadowKeyLighter,mr as colorNeutralStencil1,$r as colorNeutralStencil1Alpha,vr as colorNeutralStencil2,kr as colorNeutralStencil2Alpha,Mr as colorNeutralStroke1,Gr as colorNeutralStroke1Hover,Xr as colorNeutralStroke1Pressed,_r as colorNeutralStroke1Selected,qr as colorNeutralStroke2,Vr as colorNeutralStroke3,Hr as colorNeutralStrokeAccessible,Rr as colorNeutralStrokeAccessibleHover,jr as colorNeutralStrokeAccessiblePressed,Ir as colorNeutralStrokeAccessibleSelected,ta as colorNeutralStrokeDisabled,ra as colorNeutralStrokeInvertedDisabled,Yr as colorNeutralStrokeOnBrand,Er as colorNeutralStrokeOnBrand2,Wr as colorNeutralStrokeOnBrand2Hover,Ur as colorNeutralStrokeOnBrand2Pressed,Kr as colorNeutralStrokeOnBrand2Selected,el as colorPaletteAnchorBackground2,tl as colorPaletteAnchorBorderActive,ol as colorPaletteAnchorForeground2,Vi as colorPaletteBeigeBackground2,Ei as colorPaletteBeigeBorderActive,Yi as colorPaletteBeigeForeground2,Qa as colorPaletteBerryBackground1,en as colorPaletteBerryBackground2,on as colorPaletteBerryBackground3,ln as colorPaletteBerryBorder1,sn as colorPaletteBerryBorder2,nn as colorPaletteBerryBorderActive,tn as colorPaletteBerryForeground1,rn as colorPaletteBerryForeground2,an as colorPaletteBerryForeground3,ui as colorPaletteBlueBackground2,gi as colorPaletteBlueBorderActive,pi as colorPaletteBlueForeground2,Xn as colorPaletteBrassBackground2,qn as colorPaletteBrassBorderActive,_n as colorPaletteBrassForeground2,Vn as colorPaletteBrownBackground2,En as colorPaletteBrownBorderActive,Yn as colorPaletteBrownForeground2,vi as colorPaletteCornflowerBackground2,ki as colorPaletteCornflowerBorderActive,$i as colorPaletteCornflowerForeground2,Cn as colorPaletteCranberryBackground2,Dn as colorPaletteCranberryBorderActive,An as colorPaletteCranberryForeground2,ei as colorPaletteDarkGreenBackground2,ti as colorPaletteDarkGreenBorderActive,oi as colorPaletteDarkGreenForeground2,Ta as colorPaletteDarkOrangeBackground1,Ha as colorPaletteDarkOrangeBackground2,Ra as colorPaletteDarkOrangeBackground3,Xa as colorPaletteDarkOrangeBorder1,_a as colorPaletteDarkOrangeBorder2,Ga as colorPaletteDarkOrangeBorderActive,ja as colorPaletteDarkOrangeForeground1,Ia as colorPaletteDarkOrangeForeground2,Ma as colorPaletteDarkOrangeForeground3,Sn as colorPaletteDarkRedBackground2,Nn as colorPaletteDarkRedBorderActive,Fn as colorPaletteDarkRedForeground2,Wn as colorPaletteForestBackground2,Kn as colorPaletteForestBorderActive,Un as colorPaletteForestForeground2,In as colorPaletteGoldBackground2,Gn as colorPaletteGoldBorderActive,Mn as colorPaletteGoldForeground2,Ci as colorPaletteGrapeBackground2,Di as colorPaletteGrapeBorderActive,Ai as colorPaletteGrapeForeground2,za as colorPaletteGreenBackground1,Sa as colorPaletteGreenBackground2,Fa as colorPaletteGreenBackground3,La as colorPaletteGreenBorder1,Oa as colorPaletteGreenBorder2,Da as colorPaletteGreenBorderActive,Na as colorPaletteGreenForeground1,Ca as colorPaletteGreenForeground2,Aa as colorPaletteGreenForeground3,al as colorPaletteGreenForegroundInverted,wi as colorPaletteLavenderBackground2,zi as colorPaletteLavenderBorderActive,Pi as colorPaletteLavenderForeground2,cn as colorPaletteLightGreenBackground1,dn as colorPaletteLightGreenBackground2,hn as colorPaletteLightGreenBackground3,fn as colorPaletteLightGreenBorder1,mn as colorPaletteLightGreenBorder2,bn as colorPaletteLightGreenBorderActive,un as colorPaletteLightGreenForeground1,pn as colorPaletteLightGreenForeground2,gn as colorPaletteLightGreenForeground3,ri as colorPaletteLightTealBackground2,ni as colorPaletteLightTealBorderActive,ai as colorPaletteLightTealForeground2,Li as colorPaletteLilacBackground2,Ti as colorPaletteLilacBorderActive,Oi as colorPaletteLilacForeground2,Ii as colorPaletteMagentaBackground2,Gi as colorPaletteMagentaBorderActive,Mi as colorPaletteMagentaForeground2,vn as colorPaletteMarigoldBackground1,$n as colorPaletteMarigoldBackground2,kn as colorPaletteMarigoldBackground3,Pn as colorPaletteMarigoldBorder1,zn as colorPaletteMarigoldBorder2,wn as colorPaletteMarigoldBorderActive,xn as colorPaletteMarigoldForeground1,yn as colorPaletteMarigoldForeground2,Bn as colorPaletteMarigoldForeground3,Wi as colorPaletteMinkBackground2,Ki as colorPaletteMinkBorderActive,Ui as colorPaletteMinkForeground2,xi as colorPaletteNavyBackground2,Bi as colorPaletteNavyBorderActive,yi as colorPaletteNavyForeground2,Hn as colorPalettePeachBackground2,jn as colorPalettePeachBorderActive,Rn as colorPalettePeachForeground2,Hi as colorPalettePinkBackground2,ji as colorPalettePinkBorderActive,Ri as colorPalettePinkForeground2,Zi as colorPalettePlatinumBackground2,Qi as colorPalettePlatinumBorderActive,Ji as colorPalettePlatinumForeground2,Xi as colorPalettePlumBackground2,qi as colorPalettePlumBorderActive,_i as colorPalettePlumForeground2,Ln as colorPalettePumpkinBackground2,Tn as colorPalettePumpkinBorderActive,On as colorPalettePumpkinForeground2,Si as colorPalettePurpleBackground2,Ni as colorPalettePurpleBorderActive,Fi as colorPalettePurpleForeground2,ma as colorPaletteRedBackground1,va as colorPaletteRedBackground2,$a as colorPaletteRedBackground3,wa as colorPaletteRedBorder1,Pa as colorPaletteRedBorder2,Ba as colorPaletteRedBorderActive,ka as colorPaletteRedForeground1,xa as colorPaletteRedForeground2,ya as colorPaletteRedForeground3,rl as colorPaletteRedForegroundInverted,bi as colorPaletteRoyalBlueBackground2,mi as colorPaletteRoyalBlueBorderActive,fi as colorPaletteRoyalBlueForeground2,Zn as colorPaletteSeafoamBackground2,Qn as colorPaletteSeafoamBorderActive,Jn as colorPaletteSeafoamForeground2,ci as colorPaletteSteelBackground2,hi as colorPaletteSteelBorderActive,di as colorPaletteSteelForeground2,ii as colorPaletteTealBackground2,si as colorPaletteTealBorderActive,li as colorPaletteTealForeground2,qa as colorPaletteYellowBackground1,Va as colorPaletteYellowBackground2,Ya as colorPaletteYellowBackground3,Za as colorPaletteYellowBorder1,Ja as colorPaletteYellowBorder2,Ka as colorPaletteYellowBorderActive,Ea as colorPaletteYellowForeground1,Wa as colorPaletteYellowForeground2,Ua as colorPaletteYellowForeground3,nl as colorPaletteYellowForegroundInverted,yr as colorScrollbarOverlay,la as colorStrokeFocus1,sa as colorStrokeFocus2,er as colorSubtleBackground,or as colorSubtleBackgroundHover,lr as colorSubtleBackgroundInverted,sr as colorSubtleBackgroundInvertedHover,cr as colorSubtleBackgroundInvertedPressed,dr as colorSubtleBackgroundInvertedSelected,ar as colorSubtleBackgroundLightAlphaHover,nr as colorSubtleBackgroundLightAlphaPressed,ir as colorSubtleBackgroundLightAlphaSelected,tr as colorSubtleBackgroundPressed,rr as colorSubtleBackgroundSelected,hr as colorTransparentBackground,ur as colorTransparentBackgroundHover,pr as colorTransparentBackgroundPressed,gr as colorTransparentBackgroundSelected,aa as colorTransparentStroke,ia as colorTransparentStrokeDisabled,na as colorTransparentStrokeInteractive,Bo as curveAccelerateMax,wo as curveAccelerateMid,Po as curveAccelerateMin,zo as curveDecelerateMax,So as curveDecelerateMid,Fo as curveDecelerateMin,Co as curveEasyEase,No as curveEasyEaseMax,Ao as curveLinear,vo as durationFast,mo as durationFaster,$o as durationNormal,ko as durationSlow,xo as durationSlower,fo as durationUltraFast,yo as durationUltraSlow,He as fontFamilyBase,Re as fontFamilyMonospace,je as fontFamilyNumeric,fe as fontSizeBase100,me as fontSizeBase200,ve as fontSizeBase300,$e as fontSizeBase400,ke as fontSizeBase500,xe as fontSizeBase600,Pe as fontSizeHero1000,ye as fontSizeHero700,Be as fontSizeHero800,we as fontSizeHero900,Xe as fontWeightBold,Me as fontWeightMedium,Ie as fontWeightRegular,Ge as fontWeightSemibold,ze as lineHeightBase100,Se as lineHeightBase200,Fe as lineHeightBase300,Ne as lineHeightBase400,Ce as lineHeightBase500,Ae as lineHeightBase600,Te as lineHeightHero1000,De as lineHeightHero700,Le as lineHeightHero800,Oe as lineHeightHero900,Kd as setTheme,Zd as setThemeFor,cl as shadow16,bl as shadow16Brand,il as shadow2,dl as shadow28,fl as shadow28Brand,ul as shadow2Brand,ll as shadow4,pl as shadow4Brand,hl as shadow64,ml as shadow64Brand,sl as shadow8,gl as shadow8Brand,eo as spacingHorizontalL,Qe as spacingHorizontalM,Je as spacingHorizontalMNudge,Ee as spacingHorizontalNone,Ze as spacingHorizontalS,Ke as spacingHorizontalSNudge,oo as spacingHorizontalXL,Ue as spacingHorizontalXS,to as spacingHorizontalXXL,We as spacingHorizontalXXS,ro as spacingHorizontalXXXL,uo as spacingVerticalL,ho as spacingVerticalM,co as spacingVerticalMNudge,ao as spacingVerticalNone,so as spacingVerticalS,lo as spacingVerticalSNudge,po as spacingVerticalXL,io as spacingVerticalXS,go as spacingVerticalXXL,no as spacingVerticalXXS,bo as spacingVerticalXXXL,qe as strokeWidthThick,Ve as strokeWidthThicker,Ye as strokeWidthThickest,_e as strokeWidthThin};export default null;
//# sourceMappingURL=/sm/cb8d49271c0dbd2461844d352083b54fc436fd4a97f7aa8d7fafc0c35e7cf467.map